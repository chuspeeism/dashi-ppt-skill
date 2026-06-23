#!/usr/bin/env node
import { createServer } from 'node:http';
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { chromium } from 'playwright-core';

const ROOT = path.resolve(import.meta.dirname, '..');
const CHROME_PATH = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const workDir = mkdtempSync(path.join(tmpdir(), 'theme01-p69-text-'));
const goalPath = path.join(workDir, 'goal.json');
const outDir = path.join(workDir, 'ppt');
const outFile = path.join(outDir, 'index.html');

let server;
let browser;

try {
  writeFileSync(goalPath, JSON.stringify(createRegressionGoal(), null, 2));
  const render = spawnSync('npm', ['run', 'render:goal', '--', goalPath, outFile], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (render.status !== 0) {
    throw new Error(`render failed\n${render.stdout}\n${render.stderr}`);
  }

  server = await startStaticServer(outDir);
  browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: 'load' });
  await page.evaluate(() => document.body.classList.add('preview-panel-open'));

  const result = await page.evaluate(() => {
    const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
    const current = slides[window.__currentSlideIndex || 0] || document.querySelector('#deck > .slide');
    window.__initEditableText?.(current);
    window.__setEditableTextMode?.(true, current);

    const termNodes = [...current.querySelectorAll('[data-theme01-page69-term]')];
    const noteNodes = [...current.querySelectorAll('[data-theme01-page69-note]')];
    const stickerNodes = [...current.querySelectorAll('[data-theme01-page69-sticker]')];

    const firstTerm = termNodes[0];
    const secondTerm = termNodes[1];
    const firstNote = noteNodes[0];

    const before = {
      termCount: termNodes.length,
      noteCount: noteNodes.length,
      editableStickerCount: stickerNodes.filter(node => node.hasAttribute('data-editable-id')).length,
      firstTermText: firstTerm?.textContent,
      secondTermText: secondTerm?.textContent,
      firstNoteText: firstNote?.textContent,
      firstTermEditableId: firstTerm?.dataset.editableId || null,
      secondTermEditableId: secondTerm?.dataset.editableId || null,
      firstNoteEditableId: firstNote?.dataset.editableId || null,
      firstTermIsOwnEditable: firstTerm?.hasAttribute('data-editable-id') || false,
      firstNoteIsOwnEditable: firstNote?.hasAttribute('data-editable-id') || false,
    };

    if (firstTerm) {
      firstTerm.focus();
      firstTerm.textContent = 'Omega';
      firstTerm.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: 'Omega' }));
      firstTerm.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
      window.__initEditableText?.(current);
    }

    return {
      before,
      after: {
        firstTermText: firstTerm?.textContent,
        secondTermText: secondTerm?.textContent,
        firstNoteText: firstNote?.textContent,
      },
    };
  });

  assert(result.before.termCount >= 6, 'expected at least six tag terms');
  assert(result.before.noteCount >= 6, 'expected at least six tag notes');
  assert(result.before.editableStickerCount === 0, 'sticker shells should not be editable text nodes');
  assert(result.before.firstTermIsOwnEditable, 'first tag term should have its own editable id');
  assert(result.before.firstNoteIsOwnEditable, 'first tag note should have its own editable id');
  assert(result.before.firstTermEditableId !== result.before.firstNoteEditableId, 'term and note should not share an editable id');
  assert(result.before.firstTermEditableId !== result.before.secondTermEditableId, 'neighboring terms should not share an editable id');
  assert(result.after.firstTermText === 'Omega', 'first term should accept the edit');
  assert(result.after.secondTermText === result.before.secondTermText, 'second term should not inherit the first term edit');
  assert(result.after.firstNoteText === result.before.firstNoteText, 'first note should not inherit the first term edit');

  console.log('theme01 page069 tag text slots stay independent.');
} finally {
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.close(resolve));
  rmSync(workDir, { recursive: true, force: true });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function startStaticServer(rootDir) {
  const resolvedRoot = path.resolve(rootDir);
  const server = createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://127.0.0.1');
    const pathname = decodeURIComponent(url.pathname);
    const candidate = path.resolve(resolvedRoot, `.${pathname === '/' ? '/index.html' : pathname}`);
    if (!candidate.startsWith(resolvedRoot)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    try {
      const stats = statSync(candidate);
      if (!stats.isFile()) throw new Error('Not a file');
      res.writeHead(200, { 'content-type': contentType(candidate) });
      res.end(readFileSync(candidate));
    } catch {
      res.writeHead(404).end('Not found');
    }
  });
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

function contentType(file) {
  if (file.endsWith('.html')) return 'text/html; charset=utf-8';
  if (file.endsWith('.js')) return 'text/javascript; charset=utf-8';
  if (file.endsWith('.css')) return 'text/css; charset=utf-8';
  if (file.endsWith('.json')) return 'application/json; charset=utf-8';
  if (file.endsWith('.png')) return 'image/png';
  if (file.endsWith('.svg')) return 'image/svg+xml';
  if (file.endsWith('.webp')) return 'image/webp';
  return 'application/octet-stream';
}

function createRegressionGoal() {
  return {
    title: 'theme01 page069 text regression',
    goal: 'Verify page069 tag terms and notes have independent editable text slots.',
    audience: 'QA',
    owner: 'Codex',
    randomSeed: 'theme01-page069-text',
    pageCount: 1,
    themePack: 'theme01',
    slides: [
      {
        layout: 'theme01_page069',
        props: {
          kicker: '年度热词',
          headChunks: [
            { text: '年度', tone: 'dark' },
            { text: '热词', tone: 'glow' },
            { text: '墙', tone: 'light' },
          ],
          sub: '测试热词编辑',
          meta: 'QA',
          tags: [
            { term: 'Alpha', note: 'one', tone: 'glow', big: true },
            { term: 'Beta', note: 'two', tone: 'dark' },
            { term: 'Gamma', note: 'three', tone: 'light' },
            { term: 'Delta', note: 'four', tone: 'dark' },
            { term: 'Epsilon', note: 'five', tone: 'light' },
            { term: 'Zeta', note: 'six', tone: 'glow' },
          ],
          itemCount: 6,
          takeaway: '保持各自独立',
          takeawayHighlight: '独立',
          caption: '标签墙测试',
        },
      },
    ],
  };
}
