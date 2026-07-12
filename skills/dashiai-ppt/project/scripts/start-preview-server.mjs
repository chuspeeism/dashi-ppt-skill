#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { execFileSync, spawn } from 'node:child_process';
import { closeSync, existsSync, mkdirSync, openSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { ensureThemePreviewFresh } from './preview-freshness.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
// 相对路径按调用方目录解析:npm run(含 --prefix)会把脚本 cwd 切到项目根,INIT_CWD 才是用户所在目录。
// 未显式传参时的默认值仍锚定项目根(内部调试预览目录),不随调用方目录漂移。
const CALLER_CWD = process.env.INIT_CWD || process.cwd();
const serveRootArg = process.argv[2];
const serveRoot = serveRootArg
  ? path.resolve(CALLER_CWD, serveRootArg)
  : path.resolve(ROOT, 'output/theme-preview/ppt');
const requestedPort = Number(process.env.DASHI_PPT_PREVIEW_PORT || process.argv[3] || 5200);
const host = process.env.DASHI_PPT_PREVIEW_HOST || process.env.HOST || '0.0.0.0';
const localName = process.env.DASHI_PPT_PREVIEW_NAME || os.hostname().split('.')[0] || 'localhost';
const portScanLimit = Math.max(40, Number(process.env.DASHI_PPT_PREVIEW_PORT_SCAN || 240));
const lockDir = process.env.DASHI_PPT_PREVIEW_LOCK_DIR || path.join(os.tmpdir(), 'dashiai-ppt-preview-ports');
const incompleteStartLockStaleMs = 1000;

const isDirectRun = Boolean(process.argv[1]) && path.resolve(process.argv[1]) === path.resolve(import.meta.filename);

if (isDirectRun) {
  process.on('uncaughtException', error => exitWithError(error));
  process.on('unhandledRejection', error => exitWithError(error));
  main().catch(error => exitWithError(error));
}

async function main() {
  reclaimStaleLockDir(lockDir);

  if (!existsSync(path.join(serveRoot, 'index.html'))) {
    ensureThemePreviewFresh({ serveRoot });
  }

  if (!existsSync(path.join(serveRoot, 'index.html'))) {
    throw new Error(`Preview index.html not found: ${path.join(path.basename(serveRoot) || 'preview output', 'index.html')}`);
  }

  const startLock = acquireServeRootStartLock(serveRoot);
  try {
    ensureThemePreviewFresh({ serveRoot });
    await stopExistingPreviewForServeRoot(serveRoot);

    const reservation = await reserveAvailablePort(requestedPort, host);
    const port = reservation.port;
    const logFile = previewLogFilePath(serveRoot);
    mkdirSync(serveRoot, { recursive: true });
    mkdirSync(path.dirname(logFile), { recursive: true });
    const output = openSync(logFile, 'a');
    // 常驻服务不得继承宿主会话的临时目录:沙箱型 Agent App(如豆包)的 TMPDIR 指向
    // 自己的沙箱,会话结束目录即被清理,而 daemonize 的服务还活着——之后导出时
    // Playwright launch 的 mkdtemp 直接 ENOENT。这里出生即剥离,让服务用系统默认
    // /tmp;serve-preview-https.mjs 内部另有运行时保险丝兜「绕过本包装直接启动」的场景。
    const daemonEnv = { ...process.env, HOST: host };
    for (const key of ['TMPDIR', 'TMP', 'TEMP']) delete daemonEnv[key];
    const child = spawn(process.execPath, [
      path.join(ROOT, 'scripts/serve-preview-https.mjs'),
      serveRoot,
      String(port),
    ], {
      cwd: ROOT,
      detached: true,
      env: daemonEnv,
      stdio: ['ignore', output, output],
    });
    child.unref();
    closeSync(output);

    try {
      await waitForPreview(port, host);
    } catch (error) {
      reservation.release();
      try {
        process.kill(child.pid, 'SIGTERM');
      } catch {}
      throw error;
    }

    const url = `https://${localName}.local:${port}/`;
    const localUrl = `https://localhost:${port}/`;
    const httpUrl = `http://127.0.0.1:${port}/`;
    const localHttpUrl = `http://localhost:${port}/`;
    const lanHttpUrl = `http://${localName}.local:${port}/`;
    writeFileSync(path.join(serveRoot, '.preview-server.json'), `${JSON.stringify({
      pid: child.pid,
      port,
      httpUrl,
      url,
      localHttpUrl,
      localUrl,
      lanHttpUrl,
      displayRoot: path.basename(serveRoot),
      startedAt: new Date().toISOString(),
    }, null, 2)}\n`);
    reservation.commit(child.pid, { logFile });

    console.log(`HTTP export URL: ${httpUrl}`);
    console.log(`HTTPS preview URL: ${url}`);
    console.log(`Local HTTP URL: ${localHttpUrl}`);
    console.log(`Local HTTPS URL: ${localUrl}`);
    console.log(`LAN HTTP URL (browse only, not export): ${lanHttpUrl}`);
    console.log(`PID: ${child.pid}`);
  } finally {
    startLock.release();
  }
}

async function reserveAvailablePort(start, bindHost) {
  const base = Number.isFinite(start) && start > 0 ? Math.trunc(start) : 4178;
  for (let port = base; port < base + portScanLimit; port += 1) {
    const reservation = await reservePortLock(port, bindHost);
    if (!reservation) continue;
    if (await isPortAvailable(port, bindHost)) return reservation;
    reservation.release();
  }
  throw new Error(`No available preview port found from ${base} to ${base + portScanLimit - 1}`);
}

async function stopExistingPreviewForServeRoot(root) {
  const stateFile = path.join(root, '.preview-server.json');
  if (!existsSync(stateFile)) return;
  let state = null;
  try {
    state = JSON.parse(readFileSync(stateFile, 'utf8'));
  } catch {
    return;
  }

  const statePid = Number.isInteger(state.pid) && state.pid > 0 ? state.pid : null;
  const statePort = Number.isInteger(state.port) && state.port > 0 ? state.port : null;
  if (!statePid || !statePort) return;

  const lockFile = path.join(lockDir, `preview-${statePort}.lock`);
  let lock = null;
  try {
    lock = JSON.parse(readFileSync(lockFile, 'utf8'));
  } catch {
    return;
  }

  const expectedRoot = path.resolve(root);
  const lockRoot = lock.serveRoot ? path.resolve(String(lock.serveRoot)) : '';
  const lockMatchesState = lock.port === statePort
    && lock.pid === statePid
    && lockRoot === expectedRoot;
  if (!lockMatchesState) return;

  if (isPidAlive(statePid)) {
    try {
      process.kill(statePid, 'SIGTERM');
    } catch {}
    if (!await waitForPidExit(statePid, 3000)) {
      try {
        process.kill(statePid, 'SIGKILL');
      } catch {}
      await waitForPidExit(statePid, 1000);
    }
  }

  removePortLockIfOwner(lockFile, {
    port: statePort,
    pid: statePid,
    serveRoot: expectedRoot,
  });
}

function acquireServeRootStartLock(root) {
  mkdirSync(lockDir, { recursive: true });
  const lockPath = serveRootStartLockPath(root);
  for (let attempt = 0; attempt < 600; attempt += 1) {
    try {
      mkdirSync(lockPath);
      writeFileSync(path.join(lockPath, 'lock.json'), `${JSON.stringify({
        pid: process.pid,
        serveRoot: path.resolve(root),
        startedAt: new Date().toISOString(),
      })}\n`);
      return {
        release() {
          rmSync(lockPath, { recursive: true, force: true });
        },
      };
    } catch (error) {
      if (error?.code !== 'EEXIST') throw error;
      if (isStaleServeRootStartLock(lockPath)) {
        tryRemoveStaleServeRootStartLock(lockPath);
        continue;
      }
      wait(100);
    }
  }
  throw new Error(`Timed out waiting for preview start lock: ${lockPath}`);
}

function serveRootStartLockPath(root) {
  const key = createHash('sha256').update(path.resolve(root)).digest('hex').slice(0, 16);
  return path.join(lockDir, `preview-root-${key}.lockdir`);
}

function tryRemoveStaleServeRootStartLock(lockPath) {
  if (!isStaleServeRootStartLock(lockPath)) return false;
  const stalePath = `${lockPath}.stale-${process.pid}`;
  try {
    renameSync(lockPath, stalePath);
    rmSync(stalePath, { recursive: true, force: true });
    return true;
  } catch {
    return false;
  }
}

function isStaleServeRootStartLock(lockPath) {
  try {
    const data = JSON.parse(readFileSync(path.join(lockPath, 'lock.json'), 'utf8'));
    const pid = Number.isInteger(data.pid) && data.pid > 0 ? data.pid : null;
    if (pid && isPidAlive(pid)) return false;
    if (pid) return true;
    const startedAt = Date.parse(data.startedAt);
    if (Number.isFinite(startedAt) && Date.now() - startedAt > 5 * 60 * 1000) return true;
    return false;
  } catch {
    try {
      return Date.now() - statSync(lockPath).mtimeMs > incompleteStartLockStaleMs;
    } catch {
      return true;
    }
  }
}

function removePortLockIfOwner(lockFile, expected) {
  let current = null;
  try {
    current = JSON.parse(readFileSync(lockFile, 'utf8'));
  } catch {
    return false;
  }
  const currentRoot = current.serveRoot ? path.resolve(String(current.serveRoot)) : '';
  if (
    current.port !== expected.port
    || current.pid !== expected.pid
    || currentRoot !== expected.serveRoot
  ) {
    return false;
  }
  try {
    rmSync(lockFile, { force: true });
    return true;
  } catch {
    return false;
  }
}

async function waitForPidExit(pid, timeoutMs) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    if (!isPidAlive(pid)) return true;
    await sleep(50);
  }
  return !isPidAlive(pid);
}

async function reservePortLock(port, bindHost) {
  mkdirSync(lockDir, { recursive: true });
  const lockFile = path.join(lockDir, `preview-${port}.lock`);
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const fd = openSync(lockFile, 'wx');
      writeFileSync(fd, `${JSON.stringify({
        port,
        pid: process.pid,
        state: 'starting',
        startedAt: new Date().toISOString(),
      })}\n`);
      closeSync(fd);
      return {
        port,
        commit(pid, metadata = {}) {
          writeFileSync(lockFile, `${JSON.stringify({
            port,
            pid,
            parentPid: process.pid,
            serveRoot,
            logFile: metadata.logFile,
            startedAt: new Date().toISOString(),
          })}\n`);
        },
        release() {
          rmSync(lockFile, { force: true });
        },
      };
    } catch (error) {
      if (error?.code !== 'EEXIST') throw error;
      if (!await tryRemoveStalePortLock(lockFile, bindHost)) return null;
    }
  }
  return null;
}

async function tryRemoveStalePortLock(lockFile, bindHost) {
  if (!await isStalePortLock(lockFile, bindHost)) return false;
  const staleFile = `${lockFile}.stale-${process.pid}`;
  try {
    renameSync(lockFile, staleFile);
    rmSync(staleFile, { force: true });
    return true;
  } catch {
    return false;
  }
}

async function isStalePortLock(lockFile, bindHost) {
  try {
    const data = JSON.parse(readFileSync(lockFile, 'utf8'));
    if (!isPidAlive(data.pid)) return true;
    const port = Number.isInteger(data.port) && data.port > 0 ? data.port : null;
    const startedAt = Date.parse(data.startedAt);
    const hasCommittedMetadata = data.serveRoot
      && Number.isInteger(data.parentPid)
      && data.parentPid > 0
      && Number.isFinite(startedAt);
    if (!port || !hasCommittedMetadata) return false;
    return Date.now() - startedAt > 10 * 60 * 1000 && await isPortAvailable(port, bindHost);
  } catch {
    return true;
  }
}

// 身份校验:PID 存活只是必要条件——同一 PID 可能已被 OS 复用给完全无关的进程(观测到的复用误判)。
// 命令行含 start-preview-server.mjs 或 serve-preview-https.mjs 才认定为“属于本预览工具链”:
// 覆盖已提交的 serve-preview-https.mjs 守护进程,也覆盖端口锁 state:'starting' 阶段(此时 pid
// 是尚未 spawn 子进程的 start-preview-server.mjs 启动器自身)。
export function isPidAlive(pid) {
  if (!isProcessAlive(pid)) return false;
  return isPreviewToolingCommandLine(processCommandLine(pid));
}

function isProcessAlive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function processCommandLine(pid) {
  try {
    return execFileSync('ps', ['-p', String(pid), '-o', 'command='], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

function isPreviewToolingCommandLine(commandLine) {
  return /(?:start-preview-server|serve-preview-https)\.mjs/.test(String(commandLine || ''));
}

// 启动时全锁目录扫描回收:清理死 PID、PID 复用误判(活着但不是本工具链进程)、
// 或 serveRoot 已从磁盘消失的孤儿端口锁(及同名 .log)。纯函数,便于单测直接调用。
export function reclaimStaleLockDir(targetLockDir) {
  const removed = [];
  let entries = [];
  try {
    entries = readdirSync(targetLockDir);
  } catch {
    return removed;
  }
  for (const entry of entries) {
    if (!/^preview-\d+\.lock$/.test(entry)) continue;
    const lockFile = path.join(targetLockDir, entry);
    let data = null;
    try {
      data = JSON.parse(readFileSync(lockFile, 'utf8'));
    } catch {
      continue;
    }
    const pid = Number.isInteger(data.pid) && data.pid > 0 ? data.pid : null;
    const lockRoot = data.serveRoot ? path.resolve(String(data.serveRoot)) : null;
    const orphaned = !pid || !isPidAlive(pid) || (lockRoot !== null && !existsSync(lockRoot));
    if (!orphaned) continue;
    try {
      rmSync(lockFile, { force: true });
      removed.push(entry);
    } catch {}
    const logFile = `${lockFile.slice(0, -'.lock'.length)}.log`;
    if (existsSync(logFile)) {
      try {
        rmSync(logFile, { force: true });
      } catch {}
    }
  }
  return removed;
}

function isPortAvailable(port, bindHost) {
  return new Promise(resolve => {
    const server = net.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port, bindHost);
  });
}

async function waitForPreview(port, bindHost) {
  const urlHost = hostForUrl(readyCheckHost(bindHost));
  let lastError = null;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      await Promise.all([
        fetchHttp(`http://${urlHost}:${port}/`),
        fetchHttps(`https://${urlHost}:${port}/`),
      ]);
      return;
    } catch (error) {
      lastError = error;
      await sleep(250);
    }
  }
  throw new Error(`HTTPS preview did not become ready: ${lastError?.message || 'unknown error'}`);
}

function readyCheckHost(bindHost) {
  const value = String(bindHost || '').trim();
  if (!value || value === '0.0.0.0' || value === '::' || value === '*') return '127.0.0.1';
  return value;
}

function hostForUrl(value) {
  return String(value).includes(':') && !String(value).startsWith('[') ? `[${value}]` : value;
}

function previewLogFilePath(root) {
  const key = createHash('sha256').update(path.resolve(root)).digest('hex').slice(0, 16);
  return path.join(lockDir, `preview-${key}.log`);
}

function formatCliError(error) {
  const message = error?.message || String(error || 'Unknown preview start error');
  return `Could not start preview server: ${scrubLocalPath(message)}`;
}

function scrubLocalPath(value) {
  return String(value)
    .replace(/file:\/\/[^\s"'`<>]+/g, '<local-path>')
    .replace(/\/(?:Users|Volumes|home|var\/folders|private\/var\/folders|tmp|private\/tmp)\/[^\s"'`<>]+/g, '<local-path>')
    .replace(/\b[A-Za-z]:[\\/][^\s"'`<>]+/g, '<local-path>');
}

function wait(ms) {
  // Synchronous sleep without Atomics.wait (which requires --experimental flags
  // on Node.js < 22 and throws on the main thread otherwise).
  const end = Date.now() + ms;
  while (Date.now() < end) { /* busy-wait for lock contention (used sparingly) */ }
}

function fetchHttps(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false }, response => {
      response.resume();
      response.on('end', () => {
        if (response.statusCode === 200) resolve();
        else reject(new Error(`status=${response.statusCode}`));
      });
    }).on('error', reject);
  });
}

function fetchHttp(url) {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      response.resume();
      response.on('end', () => {
        if (response.statusCode === 200) resolve();
        else reject(new Error(`status=${response.statusCode}`));
      });
    }).on('error', reject);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function exitWithError(error) {
  console.error(formatCliError(error));
  process.exit(1);
}
