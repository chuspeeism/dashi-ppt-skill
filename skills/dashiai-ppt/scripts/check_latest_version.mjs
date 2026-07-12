#!/usr/bin/env node
import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SKILL_ROOT = path.resolve(SCRIPT_DIR, '..');
const INSTALLED_PACKAGE = path.join(SKILL_ROOT, 'project/package.json');
const SOURCE_PACKAGE = path.join(SKILL_ROOT, 'package.json');
// 端点按国内可达性排序:npmmirror(国内可达)→ npm 官方 → GitHub raw(兜底,
// 兼容 npm 包尚未发布的过渡期)。任一端点拿到版本即停,全部失败保持静默。
const REMOTE_VERSION_ENDPOINTS = [
  { url: 'https://registry.npmmirror.com/dashiai-ppt-skill/latest', pick: (json) => json.version },
  { url: 'https://registry.npmjs.org/dashiai-ppt-skill/latest', pick: (json) => json.version },
  { url: 'https://raw.githubusercontent.com/chuspeeism/dashiAI-ppt-skill/main/skills/dashiai-ppt/project/package.json', pick: (json) => json.version },
];
const REQUEST_TIMEOUT_MS = 5000;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;

main().catch(() => {});

async function main() {
  const localVersion = readLocalVersion();
  if (!localVersion) return;
  const remoteVersion = await readRemoteVersion();
  if (!remoteVersion) return;
  if (compareVersions(remoteVersion, localVersion) <= 0) return;
  process.stdout.write(
    `发现 DashiAI PPT 新版本 ${remoteVersion}（当前 ${localVersion}）。更新方式：npx dashiai-ppt-skill@latest（国内加 --registry=https://registry.npmmirror.com），或重新拉取 https://github.com/chuspeeism/dashiAI-ppt-skill。\n`
  );
}

async function readRemoteVersion() {
  for (const endpoint of REMOTE_VERSION_ENDPOINTS) {
    const version = await fetchVersionWithRetry(endpoint);
    if (version) return version;
  }
  return '';
}

async function fetchVersionWithRetry(endpoint) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    const version = await fetchVersion(endpoint);
    if (version) return version;
    if (attempt < MAX_RETRIES) {
      await sleep(RETRY_DELAY_MS * (attempt + 1));
    }
  }
  return '';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function readLocalVersion() {
  const packagePath = fs.existsSync(INSTALLED_PACKAGE) ? INSTALLED_PACKAGE : SOURCE_PACKAGE;
  try {
    return JSON.parse(fs.readFileSync(packagePath, 'utf8')).version || '';
  } catch {
    return '';
  }
}

function fetchVersion({ url, pick }) {
  return new Promise(resolve => {
    const request = https.get(url, { timeout: REQUEST_TIMEOUT_MS }, response => {
      if (response.statusCode !== 200) {
        response.resume();
        resolve('');
        return;
      }
      let body = '';
      response.setEncoding('utf8');
      response.on('data', chunk => {
        body += chunk;
      });
      response.on('end', () => {
        try {
          resolve(pick(JSON.parse(body)) || '');
        } catch {
          resolve('');
        }
      });
    });
    request.on('timeout', () => {
      request.destroy();
      resolve('');
    });
    request.on('error', () => resolve(''));
  });
}

function compareVersions(a, b) {
  const left = parseVersion(a);
  const right = parseVersion(b);
  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    const delta = (left[index] || 0) - (right[index] || 0);
    if (delta !== 0) return delta;
  }
  return 0;
}

function parseVersion(version) {
  return String(version)
    .replace(/^v/i, '')
    .split(/[.-]/)
    .map(part => Number.parseInt(part, 10))
    .filter(Number.isFinite);
}
