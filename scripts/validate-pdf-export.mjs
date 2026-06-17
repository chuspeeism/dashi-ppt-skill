#!/usr/bin/env node
import { execFileSync, spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import https from 'node:https';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PDFDocument } from 'pdf-lib';
import { PNG } from 'pngjs';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TEMPLATE = path.join(ROOT, 'assets/template-swiss.html');
const PDF_EXPORT_MODULE = path.join(ROOT, 'src/export-pdf/screenshot.mjs');
const PREVIEW_INDEX = path.join(ROOT, 'output/theme-preview/ppt/index.html');
const OUT_DIR = path.join(ROOT, 'output/pdf-export-validation', timestampForFile());
const CHROME_PATH = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const cliUrl = getArg('--url');
const themePack = getArg('--theme-pack') || '';
const expectPages = Number(getArg('--expect-pages') || 0);
const expectChunked = hasArg('--expect-chunked');
const timeoutMs = Number(getArg('--timeout-ms') || 300000);

if (!existsSync(CHROME_PATH)) throw new Error(`Chrome executable not found: ${CHROME_PATH}`);
if (!cliUrl && !existsSync(PREVIEW_INDEX)) {
  throw new Error(`Preview file missing: ${PREVIEW_INDEX}\nRun npm run render:themes first, or pass --url to an existing preview.`);
}

mkdirSync(OUT_DIR, { recursive: true });

const staticFailures = runStaticChecks();
const server = cliUrl ? null : await startPreviewServer();
const url = cliUrl || server.url;
const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
let page;

try {
  const context = await browser.newContext({
    acceptDownloads: true,
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
    ignoreHTTPSErrors: true,
  });
  page = await context.newPage();
  page.setDefaultTimeout(90000);
  page.on('dialog', dialog => dialog.dismiss().catch(() => {}));
  await page.addInitScript(() => {
    window.__pdfPrintCalled = false;
    const blockedPrint = () => {
      window.__pdfPrintCalled = true;
      window.dispatchEvent(new Event('afterprint'));
    };
    try {
      Object.defineProperty(window, 'print', { configurable: true, writable: true, value: blockedPrint });
    } catch {
      window.print = blockedPrint;
    }
  });
  await page.goto(`${url}${url.includes('?') ? '&' : '?'}pdf_export_validation=${Date.now()}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
  if (themePack) {
    await page.evaluate(async theme => {
      window.__setActiveThemePack?.(theme, { navigate: true });
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }, themePack);
  }

  const expectedSlides = await page.evaluate(() => (window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')]).length);
  const sampleIndexes = await chooseEvidenceIndexes(page, expectedSlides);
  const htmlEvidence = [];
  for (const index of sampleIndexes) {
    htmlEvidence.push(await captureCompletedSlideEvidence(page, index));
  }
  await page.evaluate(async () => {
    window.setDeckMode?.('edit');
    document.body.classList.add('preview-panel-open');
    document.getElementById('preview-toggle')?.setAttribute('aria-expanded', 'true');
    window.__layoutDeck?.();
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });

  await page.click('#preview-export-main');
  const responsePromise = page.waitForResponse(resp => {
    try {
      const parsed = new URL(resp.url());
      return resp.request().method() === 'POST' && parsed.pathname === '/api/export-pdf';
    } catch {
      return false;
    }
  }, { timeout: timeoutMs }).then(async response => ({
    status: response.status(),
    body: await response.json().catch(() => null),
  })).catch(error => ({ error: error.message || String(error) }));
  const downloadPromise = page.waitForEvent('download', { timeout: timeoutMs })
    .then(download => ({ download }))
    .catch(error => ({ error: error.message || String(error) }));
  const printPromise = page.waitForFunction(() => window.__pdfPrintCalled === true, null, { timeout: 6000 })
    .then(() => ({ printCalled: true }))
    .catch(() => null);

  await page.click('#preview-export-pdf');
  const printSignal = await printPromise;
  const firstSignal = printSignal || await downloadPromise;
  const responseResult = printSignal ? null : await responsePromise;
  const printCalled = Boolean(await page.evaluate(() => window.__pdfPrintCalled === true).catch(() => false));

  let downloadedFile = null;
  let suggestedFilename = '';
  if (firstSignal?.download) {
    suggestedFilename = firstSignal.download.suggestedFilename();
    downloadedFile = path.join(OUT_DIR, suggestedFilename || 'download.pdf');
    await firstSignal.download.saveAs(downloadedFile);
  }

  const serverResult = responseResult?.body || null;
  const downloadHeaders = serverResult?.downloadUrl
    ? await readDownloadHeaders(new URL(serverResult.downloadUrl, url).href)
    : null;
  const pdfInfo = downloadedFile ? await inspectPdf(downloadedFile) : null;
  const renderedEvidence = downloadedFile
    ? renderPdfEvidence(downloadedFile, htmlEvidence, sampleIndexes)
    : [];
  const comparisons = compareEvidencePairs(htmlEvidence, renderedEvidence);

  const failures = [
    ...staticFailures,
    ...validateDownload({
      firstSignal,
      downloadedFile,
      suggestedFilename,
      printCalled,
      expectedSlides,
      serverResult,
      downloadHeaders,
      pdfInfo,
      comparisons,
    }),
  ];

  const result = {
    mode: 'pdf-export',
    url,
    themePack,
    expectedSlides,
    sampleIndexes,
    printCalled,
    suggestedFilename,
    downloadedFile,
    serverResult,
    downloadHeaders,
    pdfInfo,
    htmlEvidence,
    renderedEvidence,
    comparisons,
    passed: failures.length === 0,
    failures,
  };
  writeFileSync(path.join(OUT_DIR, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  if (failures.length) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
} finally {
  await closePage(page);
  await closeBrowser(browser);
  if (server) await server.close();
}

function runStaticChecks() {
  const failures = [];
  const template = readFileSync(TEMPLATE, 'utf8');
  const pdfStart = template.indexOf('window.__exportDeckPdf =');
  const pdfEnd = pdfStart >= 0 ? template.indexOf('window.__exportDeckPptx', pdfStart) : -1;
  const pdfSource = pdfStart >= 0 && pdfEnd > pdfStart ? template.slice(pdfStart, pdfEnd) : '';
  if (!/\/api\/export-pdf/.test(pdfSource)) failures.push('PDF UI export must call the local screenshot PDF export endpoint.');
  if (/runBrowserPrint\s*\(|window\.print\s*\(/.test(pdfSource)) failures.push('PDF UI export must not use the browser print flow.');
  if (!/buildPdfExportSnapshot/.test(template)) failures.push('PDF UI export must send current deck state to the screenshot exporter.');
  if (!existsSync(PDF_EXPORT_MODULE)) {
    failures.push('Screenshot PDF export module is missing.');
  } else {
    const source = readFileSync(PDF_EXPORT_MODULE, 'utf8');
    if (!/locator\([^)]*slide\.active[^)]*\)\.screenshot|\.screenshot\s*\(/s.test(source)) failures.push('Screenshot PDF exporter must capture slide screenshots.');
    if (!/finishScreenshotAnimations/.test(source)) failures.push('Screenshot PDF exporter must force finite animations to their final state.');
    if (!/waitForStableSlideContent/.test(source)) failures.push('Screenshot PDF exporter must wait for stable slide content before capture.');
    if (!/PDFDocument/.test(source)) failures.push('Screenshot PDF exporter must compose a PDF from captured slide images.');
  }
  return failures;
}

function validateDownload({ firstSignal, downloadedFile, suggestedFilename, printCalled, expectedSlides, serverResult, downloadHeaders, pdfInfo, comparisons }) {
  const failures = [];
  if (firstSignal?.printCalled || printCalled) failures.push('PDF export called window.print instead of downloading a PDF.');
  if (!downloadedFile) failures.push(`PDF export did not trigger a browser download: ${firstSignal?.error || 'missing download event'}.`);
  if (downloadedFile && !/\.pdf$/i.test(String(suggestedFilename || ''))) failures.push(`Downloaded filename should end with .pdf, got ${suggestedFilename || 'empty'}.`);
  if (downloadedFile && readFileSync(downloadedFile, 'utf8').slice(0, 5) !== '%PDF-') failures.push('Downloaded file does not have a PDF header.');
  if (!serverResult) failures.push('PDF export did not return a server export result.');
  if (serverResult?.screenshot !== true) failures.push('Server PDF result must identify screenshot mode.');
  if (expectChunked && !/chunked/.test(String(serverResult?.generationMode || ''))) failures.push(`Expected chunked screenshot mode, got ${serverResult?.generationMode || 'empty'}.`);
  const expected = expectPages || expectedSlides;
  if (pdfInfo && expected && pdfInfo.pageCount !== expected) failures.push(`PDF page count mismatch: got ${pdfInfo.pageCount}, expected ${expected}.`);
  if (serverResult?.pages && expected && serverResult.pages !== expected) failures.push(`Server page count mismatch: got ${serverResult.pages}, expected ${expected}.`);
  if (!downloadHeaders) {
    failures.push('PDF export did not expose a download URL for header validation.');
  } else {
    if (downloadHeaders.statusCode !== 200) failures.push(`PDF download URL returned ${downloadHeaders.statusCode}, expected 200.`);
    const disposition = String(downloadHeaders.headers?.['content-disposition'] || '');
    if (!/\battachment\b/i.test(disposition)) failures.push(`PDF download must use Content-Disposition attachment, got "${disposition || 'empty'}".`);
    const type = String(downloadHeaders.headers?.['content-type'] || '');
    if (!/application\/pdf/i.test(type)) failures.push(`PDF download content type should be application/pdf, got "${type || 'empty'}".`);
  }
  if (!Array.isArray(serverResult?.slideReports) || !serverResult.slideReports.length) {
    failures.push('Server PDF result must include slide capture reports.');
  } else {
    const finalized = serverResult.slideReports.filter(report => Number(report.finalizedAnimations || 0) > 0).length;
    const stable = serverResult.slideReports.filter(report => Number(report.stability?.stableFrames || 0) >= 2).length;
    const blank = serverResult.slideReports.filter(report => report.pixel?.blank === true).map(report => report.index);
    if (!finalized) failures.push('No exported slide reported finalized animations.');
    if (stable < Math.min(3, serverResult.slideReports.length)) failures.push('Too few slides reported stable content before capture.');
    if (blank.length) failures.push(`Screenshot exporter captured blank-looking slide(s): ${blank.join(', ')}.`);
  }
  if (!comparisons.length) {
    failures.push('No PDF render evidence was produced for visual comparison.');
  } else {
    const weak = comparisons.filter(item => item.similarity < 0.82 || item.pdf.blank || item.html.blank);
    if (weak.length) failures.push(`PDF render evidence is too different or blank: ${JSON.stringify(weak)}`);
  }
  return failures;
}

async function chooseEvidenceIndexes(page, expectedSlides) {
  const animated = await page.evaluate(async () => {
    const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
    for (let index = 0; index < slides.length; index += 1) {
      window.go?.(index, { animate: false, force: true });
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const slide = slides[index];
      const hasAnimatedMarker = Boolean(slide.querySelector('[data-chart-motion],.rd-anim,.gxn-anim,.pulse-anim,.acl-anim,.ign-anim,[class*="anim"]'));
      const animations = slide.getAnimations?.({ subtree: true }) || [];
      if (hasAnimatedMarker || animations.length) return index;
    }
    return Math.min(1, Math.max(0, slides.length - 1));
  });
  return [...new Set([0, animated, Math.max(0, expectedSlides - 1)])]
    .filter(index => Number.isInteger(index) && index >= 0 && index < expectedSlides)
    .slice(0, 3);
}

async function captureCompletedSlideEvidence(page, index) {
  const report = await page.evaluate(async index => {
    const waitFrame = () => new Promise(resolve => requestAnimationFrame(resolve));
    window.setDeckMode?.('present');
    window.go?.(index, { animate: false, force: true });
    await waitFrame();
    await waitFrame();
    const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
    const slide = slides[index] || document.querySelector('#deck > .slide.active');
    window.__ensureRuntimeSlideRendered?.(slide);
    slide?.setAttribute('data-deck-active', '');
    if (document.fonts?.ready) await Promise.race([document.fonts.ready.catch(() => {}), new Promise(resolve => setTimeout(resolve, 2500))]);
    const animations = slide?.getAnimations?.({ subtree: true }) || [];
    let finalized = 0;
    animations.forEach(animation => {
      const timing = animation.effect?.getComputedTiming?.();
      const endTime = Number(timing?.endTime);
      if (!Number.isFinite(endTime) || endTime <= 0) return;
      try {
        animation.finish();
        finalized += 1;
      } catch {}
    });
    await waitFrame();
    await waitFrame();
    const rect = slide?.getBoundingClientRect?.();
    return { index, finalized, rect: rect ? { width: rect.width, height: rect.height } : null };
  }, index);
  const file = path.join(OUT_DIR, `html-slide-${String(index + 1).padStart(3, '0')}.png`);
  await page.locator('#deck > .slide.active').screenshot({ path: file, type: 'png', animations: 'disabled' });
  return { ...report, file, pixel: analyzePng(readFileSync(file)) };
}

function renderPdfEvidence(pdfFile, htmlEvidence, sampleIndexes) {
  const magick = commandPath('magick') || commandPath('convert');
  if (!magick) return [];
  const out = [];
  for (let i = 0; i < sampleIndexes.length; i += 1) {
    const index = sampleIndexes[i];
    const file = path.join(OUT_DIR, `pdf-slide-${String(index + 1).padStart(3, '0')}.png`);
    try {
      execFileSync(magick, [
        '-density', '144',
        `${pdfFile}[${index}]`,
        '-resize', '1920x1080!',
        '-alpha', 'remove',
        file,
      ], { stdio: 'ignore' });
      out.push({ index, file, pixel: analyzePng(readFileSync(file)), source: 'imagemagick' });
    } catch (error) {
      out.push({ index, file: null, error: error.message || String(error), pixel: null, source: 'imagemagick' });
    }
  }
  return out.filter(item => item.file && existsSync(item.file));
}

function compareEvidencePairs(htmlEvidence, renderedEvidence) {
  const byIndex = new Map(renderedEvidence.map(item => [item.index, item]));
  return htmlEvidence.flatMap(html => {
    const pdf = byIndex.get(html.index);
    if (!pdf) return [];
    const similarity = comparePngFiles(html.file, pdf.file);
    return [{ index: html.index, similarity, html: html.pixel, pdf: pdf.pixel, htmlFile: html.file, pdfFile: pdf.file }];
  });
}

function comparePngFiles(aFile, bFile) {
  const a = PNG.sync.read(readFileSync(aFile));
  const b = PNG.sync.read(readFileSync(bFile));
  const width = Math.min(a.width, b.width);
  const height = Math.min(a.height, b.height);
  const stepX = Math.max(1, Math.floor(width / 320));
  const stepY = Math.max(1, Math.floor(height / 180));
  let total = 0;
  let diff = 0;
  for (let y = 0; y < height; y += stepY) {
    for (let x = 0; x < width; x += stepX) {
      const ai = (y * a.width + x) * 4;
      const bi = (y * b.width + x) * 4;
      diff += Math.abs(a.data[ai] - b.data[bi]);
      diff += Math.abs(a.data[ai + 1] - b.data[bi + 1]);
      diff += Math.abs(a.data[ai + 2] - b.data[bi + 2]);
      total += 255 * 3;
    }
  }
  return total ? Number((1 - diff / total).toFixed(4)) : 0;
}

function analyzePng(buffer) {
  const png = PNG.sync.read(buffer);
  const stepX = Math.max(1, Math.floor(png.width / 320));
  const stepY = Math.max(1, Math.floor(png.height / 180));
  const corners = [
    pixelAt(png, 0, 0),
    pixelAt(png, png.width - 1, 0),
    pixelAt(png, 0, png.height - 1),
    pixelAt(png, png.width - 1, png.height - 1),
  ];
  const bg = corners.reduce((acc, color) => {
    acc.r += color.r / corners.length;
    acc.g += color.g / corners.length;
    acc.b += color.b / corners.length;
    return acc;
  }, { r: 0, g: 0, b: 0 });
  const unique = new Set();
  let total = 0;
  let lumaSum = 0;
  let lumaSq = 0;
  let nonBackground = 0;
  for (let y = 0; y < png.height; y += stepY) {
    for (let x = 0; x < png.width; x += stepX) {
      const p = pixelAt(png, x, y);
      const luma = p.r * 0.2126 + p.g * 0.7152 + p.b * 0.0722;
      unique.add(`${p.r >> 4},${p.g >> 4},${p.b >> 4}`);
      lumaSum += luma;
      lumaSq += luma * luma;
      total += 1;
      if (Math.hypot(p.r - bg.r, p.g - bg.g, p.b - bg.b) > 18) nonBackground += 1;
    }
  }
  const mean = total ? lumaSum / total : 0;
  const variance = total ? Math.max(0, lumaSq / total - mean * mean) : 0;
  const stdDev = Math.sqrt(variance);
  const nonBackgroundRatio = total ? nonBackground / total : 0;
  return {
    width: png.width,
    height: png.height,
    stdDev: Number(stdDev.toFixed(3)),
    uniqueColors: unique.size,
    nonBackgroundRatio: Number(nonBackgroundRatio.toFixed(5)),
    blank: stdDev < 1.5 && unique.size < 6,
  };
}

function pixelAt(png, x, y) {
  const i = (y * png.width + x) * 4;
  return { r: png.data[i], g: png.data[i + 1], b: png.data[i + 2], a: png.data[i + 3] };
}

async function inspectPdf(file) {
  const pdf = await PDFDocument.load(readFileSync(file));
  return { pageCount: pdf.getPageCount(), bytes: readFileSync(file).length };
}

function readDownloadHeaders(downloadUrl) {
  return new Promise(resolve => {
    const req = https.request(downloadUrl, { method: 'HEAD', rejectUnauthorized: false }, res => {
      res.resume();
      resolve({ statusCode: res.statusCode, headers: res.headers });
    });
    req.on('error', error => resolve({ statusCode: 0, headers: {}, error: error.message || String(error) }));
    req.end();
  });
}

async function startPreviewServer() {
  const port = await findAvailablePort(4178);
  const child = spawn(process.execPath, [path.join(ROOT, 'scripts/serve-preview-https.mjs'), path.dirname(PREVIEW_INDEX), String(port)], {
    cwd: ROOT,
    detached: true,
    stdio: 'ignore',
    env: { ...process.env, HOST: '0.0.0.0' },
  });
  child.unref();
  const url = `https://localhost:${port}/`;
  await waitForPreview(url);
  return {
    url,
    close: async () => {
      try { process.kill(child.pid, 'SIGTERM'); } catch {}
    },
  };
}

async function waitForPreview(url) {
  let lastError = null;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      await fetchHttps(url);
      return;
    } catch (error) {
      lastError = error;
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error(`Preview did not become ready: ${lastError?.message || 'unknown error'}`);
}

function fetchHttps(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false }, response => {
      response.resume();
      response.on('end', () => response.statusCode === 200 ? resolve() : reject(new Error(`status=${response.statusCode}`)));
    }).on('error', reject);
  });
}

function findAvailablePort(start) {
  return new Promise((resolve, reject) => {
    let port = start;
    const tryNext = () => {
      if (port > start + 80) {
        reject(new Error(`No available port from ${start}`));
        return;
      }
      const server = net.createServer();
      server.once('error', () => {
        port += 1;
        tryNext();
      });
      server.once('listening', () => {
        server.close(() => resolve(port));
      });
      server.listen(port, '0.0.0.0');
    };
    tryNext();
  });
}

async function closePage(page) {
  if (!page) return;
  await page.context().close().catch(() => {});
}

async function closeBrowser(browser) {
  if (!browser) return;
  const close = browser.close().catch(() => {});
  await Promise.race([close, new Promise(resolve => setTimeout(resolve, 5000))]);
}

function commandPath(name) {
  try {
    return execFileSync('/bin/sh', ['-c', `command -v ${JSON.stringify(name)}`], { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

function getArg(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : '';
}

function hasArg(name) {
  return process.argv.includes(name);
}

function timestampForFile() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, '');
}
