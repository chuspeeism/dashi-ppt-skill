#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync, createReadStream } from 'node:fs';
import http from 'node:http';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';
import tls from 'node:tls';

const ROOT = path.resolve(import.meta.dirname, '..');
const SERVE_ROOT = path.resolve(ROOT, process.argv[2] || 'output/theme-preview/ppt');
const PORT = Number(process.env.PORT || process.argv[3] || 4178);
const HOST = process.env.HOST || '0.0.0.0';
const LOCAL_HOSTNAME = getLocalHostname();
const LAN_IPS = getLanIps();
const CERT_DIR = path.join(ROOT, 'output/https-preview');
const CERT_META = path.join(CERT_DIR, 'cert-meta.json');
const CERT_KEY = path.join(CERT_DIR, 'localhost-key.pem');
const CERT_FILE = path.join(CERT_DIR, 'localhost-cert.pem');
const EXPORT_DIR = path.join(ROOT, 'output/exports');
const EXPORT_PROGRESS = new Map();

if (!existsSync(path.join(SERVE_ROOT, 'index.html'))) {
  console.error(`Preview index.html not found: ${path.join(SERVE_ROOT, 'index.html')}`);
  process.exit(1);
}

ensureCertificate();

const requestHandler = async (req, res) => {
  const requestUrl = new URL(req.url || '/', 'https://local.invalid');
  if (req.method === 'POST' && requestUrl.pathname === '/api/export-editable-pptx') {
    await handleEditablePptxExport(req, res);
    return;
  }
  if (req.method === 'GET' && requestUrl.pathname === '/api/export-editable-pptx-progress') {
    handleEditablePptxProgress(req, res, requestUrl);
    return;
  }
  if ((req.method === 'GET' || req.method === 'HEAD') && requestUrl.pathname === '/api/export-editable-pptx-download') {
    handleEditablePptxDownload(req, res, requestUrl);
    return;
  }
  if (req.method === 'POST' && requestUrl.pathname === '/api/export-pdf') {
    await handlePdfExport(req, res);
    return;
  }
  if (req.method === 'GET' && requestUrl.pathname === '/api/export-pdf-progress') {
    handlePdfProgress(req, res, requestUrl);
    return;
  }
  if ((req.method === 'GET' || req.method === 'HEAD') && requestUrl.pathname === '/api/export-pdf-download') {
    handlePdfDownload(req, res, requestUrl);
    return;
  }

  const pathname = safePathname(req.url || '/');
  const requested = path.join(SERVE_ROOT, pathname === '/' ? 'index.html' : pathname);
  const file = resolveFile(requested);

  if (!file) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8' });
    res.end('Not found');
    return;
  }

  res.writeHead(200, {
    'content-type': contentType(file),
    'cache-control': 'no-store',
  });
  createReadStream(file).pipe(res);
};

const httpServer = http.createServer(requestHandler);
const secureContext = tls.createSecureContext({
  key: readFileSync(CERT_KEY),
  cert: readFileSync(CERT_FILE),
});
const server = createHttpHttpsMuxServer(httpServer, secureContext);

server.listen(PORT, HOST, () => {
  const httpPrimary = `http://${LOCAL_HOSTNAME}.local:${PORT}/`;
  const httpsPrimary = `https://${LOCAL_HOSTNAME}.local:${PORT}/`;
  const urls = [httpPrimary, httpsPrimary, ...LAN_IPS.flatMap((ip) => [`http://${ip}:${PORT}/`, `https://${ip}:${PORT}/`])];
  console.log(`HTTP/HTTPS preview serving ${SERVE_ROOT}`);
  console.log(`Open: ${urls.join(' or ')}`);
});

function createHttpHttpsMuxServer(plainServer, context) {
  return net.createServer(socket => {
    socket.once('data', chunk => {
      socket.pause();
      socket.unshift(chunk);
      if (isTlsClientHello(chunk)) {
        const tlsSocket = new tls.TLSSocket(socket, { isServer: true, secureContext: context });
        tlsSocket.on('error', () => {});
        tlsSocket.once('secure', () => {
          plainServer.emit('connection', tlsSocket);
        });
        tlsSocket.resume();
        return;
      }
      plainServer.emit('connection', socket);
      socket.resume();
    });
  });
}

function isTlsClientHello(chunk) {
  return chunk?.[0] === 0x16;
}

function ensureCertificate() {
  mkdirSync(CERT_DIR, { recursive: true });
  const names = ['localhost', `${LOCAL_HOSTNAME}.local`, ...LAN_IPS];
  const meta = JSON.stringify({ names }, null, 2);
  const current = existsSync(CERT_META) ? readFileSync(CERT_META, 'utf8') : '';
  if (existsSync(CERT_KEY) && existsSync(CERT_FILE) && current === meta) return;

  const config = path.join(CERT_DIR, 'openssl.cnf');
  writeFileSync(config, renderOpenSslConfig(names));
  execFileSync('openssl', [
    'req',
    '-x509',
    '-newkey',
    'rsa:2048',
    '-nodes',
    '-sha256',
    '-days',
    '365',
    '-keyout',
    CERT_KEY,
    '-out',
    CERT_FILE,
    '-config',
    config,
    '-extensions',
    'v3_req',
  ], { stdio: 'ignore' });
  writeFileSync(CERT_META, meta + '\n');
}

function renderOpenSslConfig(names) {
  const altNames = [];
  let dns = 1;
  let ip = 1;
  for (const name of names) {
    if (/^\d+\.\d+\.\d+\.\d+$/.test(name)) altNames.push(`IP.${ip++} = ${name}`);
    else altNames.push(`DNS.${dns++} = ${name}`);
  }
  return `[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn

[dn]
CN = ${LOCAL_HOSTNAME}.local

[v3_req]
subjectAltName = @alt_names
keyUsage = critical, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth

[alt_names]
${altNames.join('\n')}
`;
}

function safePathname(url) {
  const parsed = new URL(url, 'https://local.invalid');
  const decoded = decodeURIComponent(parsed.pathname);
  return decoded.split('/').filter((part) => part && part !== '..').join('/');
}

function resolveFile(file) {
  const resolved = path.resolve(file);
  if (!resolved.startsWith(SERVE_ROOT + path.sep) && resolved !== SERVE_ROOT) return null;
  try {
    const stat = statSync(resolved);
    if (stat.isDirectory()) return resolveFile(path.join(resolved, 'index.html'));
    if (stat.isFile()) return resolved;
  } catch {}
  return null;
}

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  return {
    '.html': 'text/html;charset=utf-8',
    '.js': 'text/javascript;charset=utf-8',
    '.mjs': 'text/javascript;charset=utf-8',
    '.css': 'text/css;charset=utf-8',
    '.json': 'application/json;charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  }[ext] || 'application/octet-stream';
}

async function handleEditablePptxExport(req, res) {
  let progressId = null;
  try {
    if (!isAllowedExportRequest(req)) {
      res.writeHead(403, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
      res.end(JSON.stringify({ error: 'Forbidden export origin' }));
      return;
    }
    const payload = await readJsonBody(req);
    progressId = safeProgressId(payload.progressId);
    updateExportProgress(progressId, { stage: 'queued', detail: '服务端接收导出请求', percent: 4 });
    const [{ chromium }, { exportEditablePptxFromUrl }] = await Promise.all([
      import('playwright-core'),
      import('../src/export-pptx/editable.mjs'),
    ]);
    updateExportProgress(progressId, { stage: 'launching', detail: '启动导出浏览器', percent: 6 });
    const browser = await chromium.launch({ headless: true, executablePath: getChromePath() });
    const baseName = `${timestampForFile()}-${safeDownloadName(payload.fileName || 'presentation')}`;
    const outFile = path.join(EXPORT_DIR, `${baseName}.pptx`);
    const reportFile = path.join(EXPORT_DIR, `${baseName}.json`);
    try {
      const sourcePath = typeof payload.sourcePath === 'string' && payload.sourcePath.startsWith('/') ? payload.sourcePath : '/';
      const url = `https://localhost:${PORT}${sourcePath}`;
      await exportEditablePptxFromUrl(browser, url, {
        outFile,
        reportFile,
        title: payload.title || 'Editable Deck Export',
        snapshot: payload.snapshot || null,
        onProgress: update => updateExportProgress(progressId, update),
      });
    } finally {
      await closeBrowser(browser);
    }
    updateExportProgress(progressId, { stage: 'download-ready', detail: '准备浏览器下载', percent: 100, done: true });

    res.writeHead(200, {
      'content-type': 'application/json;charset=utf-8',
      'cache-control': 'no-store',
    });
    res.end(JSON.stringify({
      ok: true,
      filePath: outFile,
      reportPath: reportFile,
      relativePath: path.relative(ROOT, outFile),
      downloadUrl: `/api/export-editable-pptx-download?file=${encodeURIComponent(path.basename(outFile))}`,
      downloadName: path.basename(outFile),
    }));
  } catch (error) {
    updateExportProgress(progressId, { stage: 'failed', detail: error.message || 'Editable PPTX export failed', percent: 100, done: true, error: true });
    console.error('[editable pptx export]', error);
    res.writeHead(500, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: error.message || 'Editable PPTX export failed' }));
  }
}

async function handlePdfExport(req, res) {
  let progressId = null;
  try {
    if (!isAllowedExportRequest(req)) {
      res.writeHead(403, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
      res.end(JSON.stringify({ error: 'Forbidden export origin' }));
      return;
    }
    const payload = await readJsonBody(req);
    progressId = safeProgressId(payload.progressId);
    updateExportProgress(progressId, { stage: 'queued', detail: '服务端接收 PDF 导出请求', percent: 4 });
    const [{ chromium }, { exportScreenshotPdfFromUrl }] = await Promise.all([
      import('playwright-core'),
      import('../src/export-pdf/screenshot.mjs'),
    ]);
    updateExportProgress(progressId, { stage: 'launching', detail: '启动截图浏览器', percent: 6 });
    const browser = await chromium.launch({ headless: true, executablePath: getChromePath() });
    const baseName = `${timestampForFile()}-${safeDownloadName(payload.fileName || 'presentation')}`;
    const outFile = path.join(EXPORT_DIR, `${baseName}.pdf`);
    const reportFile = path.join(EXPORT_DIR, `${baseName}.pdf.json`);
    let result;
    try {
      const sourcePath = typeof payload.sourcePath === 'string' && payload.sourcePath.startsWith('/') ? payload.sourcePath : '/';
      const url = `https://localhost:${PORT}${sourcePath}`;
      result = await exportScreenshotPdfFromUrl(browser, url, {
        outFile,
        reportFile,
        title: payload.title || 'Deck PDF Export',
        snapshot: payload.snapshot || null,
        batchSize: payload.batchSize,
        onProgress: update => updateExportProgress(progressId, update),
      });
    } finally {
      await closeBrowser(browser);
    }
    updateExportProgress(progressId, { stage: 'download-ready', detail: '准备浏览器下载', percent: 100, done: true });

    res.writeHead(200, {
      'content-type': 'application/json;charset=utf-8',
      'cache-control': 'no-store',
    });
    res.end(JSON.stringify({
      ok: true,
      screenshot: true,
      filePath: outFile,
      reportPath: reportFile,
      relativePath: path.relative(ROOT, outFile),
      downloadUrl: `/api/export-pdf-download?file=${encodeURIComponent(path.basename(outFile))}`,
      downloadName: path.basename(outFile),
      pages: result.pages,
      generationMode: result.generationMode,
      batchSize: result.batchSize,
      slideReports: result.slideReports,
    }));
  } catch (error) {
    updateExportProgress(progressId, { stage: 'failed', detail: error.message || 'PDF export failed', percent: 100, done: true, error: true });
    console.error('[pdf export]', error);
    res.writeHead(500, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: error.message || 'PDF export failed' }));
  }
}

function handlePdfProgress(req, res, requestUrl) {
  if (!isAllowedExportRequest(req)) {
    res.writeHead(403, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: 'Forbidden export origin' }));
    return;
  }
  const id = safeProgressId(requestUrl.searchParams.get('id'));
  const state = id ? EXPORT_PROGRESS.get(id) : null;
  res.writeHead(200, {
    'content-type': 'application/json;charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(JSON.stringify(state || { stage: 'pending', detail: '等待服务端进度', percent: 0, done: false }));
}

function handlePdfDownload(req, res, requestUrl) {
  const name = path.basename(requestUrl.searchParams.get('file') || '');
  if (!name || !/\.pdf$/i.test(name)) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  const file = path.resolve(EXPORT_DIR, name);
  if (!file.startsWith(EXPORT_DIR + path.sep)) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  let stat;
  try {
    stat = statSync(file);
    if (!stat.isFile()) throw new Error('not-file');
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'content-type': 'application/pdf',
    'content-length': stat.size,
    'content-disposition': `attachment; filename="${asciiDownloadName(name)}"; filename*=UTF-8''${encodeRFC5987(name)}`,
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  createReadStream(file).pipe(res);
}

function handleEditablePptxProgress(req, res, requestUrl) {
  if (!isAllowedExportRequest(req)) {
    res.writeHead(403, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: 'Forbidden export origin' }));
    return;
  }
  const id = safeProgressId(requestUrl.searchParams.get('id'));
  const state = id ? EXPORT_PROGRESS.get(id) : null;
  res.writeHead(200, {
    'content-type': 'application/json;charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(JSON.stringify(state || { stage: 'pending', detail: '等待服务端进度', percent: 0, done: false }));
}

function handleEditablePptxDownload(req, res, requestUrl) {
  const name = path.basename(requestUrl.searchParams.get('file') || '');
  if (!name || !/\.pptx$/i.test(name)) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  const file = path.resolve(EXPORT_DIR, name);
  if (!file.startsWith(EXPORT_DIR + path.sep)) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  let stat;
  try {
    stat = statSync(file);
    if (!stat.isFile()) throw new Error('not-file');
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'content-type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'content-length': stat.size,
    'content-disposition': `attachment; filename="${asciiDownloadName(name)}"; filename*=UTF-8''${encodeRFC5987(name)}`,
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  createReadStream(file).pipe(res);
}

function asciiDownloadName(value) {
  return String(value || 'presentation.pptx').replace(/[^\x20-\x7e]+/g, '_').replace(/["\\]/g, '_') || 'presentation.pptx';
}

function encodeRFC5987(value) {
  return encodeURIComponent(value).replace(/['()*]/g, char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

function isAllowedExportRequest(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  const allowedHosts = ['localhost', '127.0.0.1', `${LOCAL_HOSTNAME}.local`, ...LAN_IPS];
  const allowed = new Set(allowedHosts.flatMap(host => [
    `http://${host}:${PORT}`,
    `https://${host}:${PORT}`,
  ]));
  return allowed.has(origin);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > 80 * 1024 * 1024) {
        reject(new Error('Request body is too large.'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function safeDownloadName(value) {
  return String(value || 'presentation')
    .replace(/[\\/:*?"<>|]+/g, '')
    .replace(/\s+/g, '-')
    .trim()
    .slice(0, 80) || 'presentation';
}

function safeProgressId(value) {
  const id = String(value || '').trim();
  return /^[a-zA-Z0-9._-]{1,120}$/.test(id) ? id : null;
}

function updateExportProgress(id, update = {}) {
  if (!id) return;
  const previous = EXPORT_PROGRESS.get(id) || {};
  const next = {
    stage: update.stage || previous.stage || 'working',
    detail: update.detail || previous.detail || '正在生成可编辑 PPTX',
    percent: Math.max(0, Math.min(100, Math.round(Number(update.percent ?? previous.percent ?? 0)))),
    done: Boolean(update.done || false),
    error: Boolean(update.error || false),
    updatedAt: new Date().toISOString(),
  };
  EXPORT_PROGRESS.set(id, next);
  if (next.done) {
    setTimeout(() => EXPORT_PROGRESS.delete(id), 15 * 60 * 1000).unref?.();
  }
}

function timestampForFile() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, '');
}

function getChromePath() {
  const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (!existsSync(chrome)) throw new Error(`Chrome executable not found: ${chrome}`);
  return chrome;
}

async function closeBrowser(browser) {
  if (!browser) return;
  const close = browser.close().catch(() => {});
  const result = await Promise.race([
    close.then(() => 'closed'),
    new Promise(resolve => setTimeout(() => resolve('timeout'), 5000)),
  ]);
  if (result === 'timeout') {
    try { browser.process?.()?.kill?.('SIGKILL'); } catch {}
  }
}

function getLocalHostname() {
  if (process.env.DASHI_PPT_PREVIEW_NAME) return process.env.DASHI_PPT_PREVIEW_NAME;
  try {
    return execFileSync('scutil', ['--get', 'LocalHostName'], { encoding: 'utf8' }).trim() || os.hostname().split('.')[0];
  } catch {
    return os.hostname().split('.')[0] || 'localhost';
  }
}

function getLanIps() {
  const ips = [];
  for (const entries of Object.values(os.networkInterfaces())) {
    for (const entry of entries || []) {
      if (entry.family === 'IPv4' && !entry.internal) ips.push(entry.address);
    }
  }
  return [...new Set(ips)];
}
