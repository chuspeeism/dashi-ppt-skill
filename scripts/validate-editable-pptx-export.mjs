#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TEMPLATE = path.join(ROOT, 'assets/template-swiss.html');
const OUT_DIR = path.resolve(process.env.EDITABLE_PPTX_VALIDATION_OUT_DIR || path.join(ROOT, 'output/editable-pptx-validation'));
const CHROME_PATH = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const EXPECTED_SLIDES = 6;
const THEME_FILTER_EXPECTED_SLIDES = 2;
const VISUAL_RMSE_LIMIT = 0.24;
const VISUAL_EDGE_RMSE_LIMIT = 0.245;
const VISUAL_MAE_LIMIT = 0.11;
const DEFAULT_VISUAL_SAMPLE_COUNT = 6;
const MATRIX_THEME_PACKS = [
  'theme03',
  ...Array.from({ length: 12 }, (_, index) => `theme${String(index + 1).padStart(2, '0')}`).filter(theme => theme !== 'theme03'),
];
const EMU_PER_IN = 914400;
const SAMPLE_TEXT_LAYOUT_ANCHORS = new Map([
  [16, [
    { text: '43.3%', align: 'r', maxWidth: 1.2 },
    { text: '25.3%', align: 'r', maxWidth: 1.2 },
    { text: '16.3%', align: 'r', maxWidth: 1.2 },
    { text: '10.0%', align: 'r', maxWidth: 1.2 },
    { text: '5.1%', align: 'r', maxWidth: 1.2 },
    { text: '420', align: 'r', maxWidth: 0.8 },
    { text: '245', align: 'r', maxWidth: 0.8 },
    { text: '158', align: 'r', maxWidth: 0.8 },
    { text: '97', align: 'r', maxWidth: 0.6 },
    { text: '50', align: 'r', maxWidth: 0.6 },
  ]],
  [18, [
    { text: '科技巨头', align: 'r', maxWidth: 1.6 },
    { text: '风险投资', align: 'r', maxWidth: 1.6 },
    { text: '主权 / 私募', align: 'r', maxWidth: 2.0 },
    { text: '企业风投', align: 'r', maxWidth: 1.6 },
    { text: 'STRATEGIC', align: 'r', maxWidth: 1.4 },
    { text: 'VC', align: 'r', maxWidth: 0.6 },
    { text: 'SOVEREIGN · PE', align: 'r', maxWidth: 1.8 },
    { text: 'CVC', align: 'r', maxWidth: 0.8 },
  ]],
]);
const SAMPLE_HIGHLIGHT_ANCHORS = new Map([
  ['theme02:1', [
    { id: 'ai-company-research-report', text: 'AI 公司调研报告' },
    { id: '970', text: '970' },
  ]],
]);
const SAMPLE_SLOT_ANCHORS = new Map([
  ['theme02:1', [
    { id: 'cover-image-slot', selector: '.gxn-slot', text: '拖入配图 · IMAGE' },
  ]],
]);
const EDITED_TEXT = 'JAD-64 editable text sentinel';
const INITIAL_IMAGE_BYTES = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24"><rect width="32" height="24" fill="#e11d48"/><text x="4" y="16" font-size="8" fill="#ffffff">old</text></svg>');
const REPLACEMENT_IMAGE_BYTES = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24"><rect width="32" height="24" fill="#2563eb"/><text x="4" y="16" font-size="8" fill="#ffffff">new</text></svg>');
const INITIAL_IMAGE_HASH = hashBuffer(INITIAL_IMAGE_BYTES);
const REPLACEMENT_IMAGE_HASH = hashBuffer(REPLACEMENT_IMAGE_BYTES);
const INITIAL_IMAGE = `data:image/svg+xml;base64,${INITIAL_IMAGE_BYTES.toString('base64')}`;
const REPLACEMENT_IMAGE = `data:image/svg+xml;base64,${REPLACEMENT_IMAGE_BYTES.toString('base64')}`;
const PPTX_SIGNATURE = Buffer.from([0x50, 0x4b, 0x03, 0x04]);

const args = new Set(process.argv.slice(2));
const legacyRed = args.has('--legacy-red');
const uiExport = args.has('--ui-export');
const uiVisualFidelity = args.has('--ui-visual-fidelity');
const uiVisualMatrix = args.has('--ui-visual-matrix');
const fallbackTextRisk = args.has('--fallback-text-risk');
const cliUrl = getArg('--url');
const cliThemePack = getArg('--theme-pack');
const cliSamplesPerTheme = Math.max(DEFAULT_VISUAL_SAMPLE_COUNT, Number(getArg('--samples-per-theme') || DEFAULT_VISUAL_SAMPLE_COUNT));

if (!existsSync(CHROME_PATH)) {
  throw new Error(`Chrome executable not found: ${CHROME_PATH}
Set CHROME_PATH to a local Chrome/Chromium executable and rerun the validation.`);
}

mkdirSync(OUT_DIR, { recursive: true });

if (legacyRed) {
  await runLegacyRedValidation();
} else if (uiExport) {
  await runUiExportValidation();
} else if (uiVisualMatrix) {
  await runUiVisualMatrixValidation();
} else if (uiVisualFidelity) {
  await runUiVisualFidelityValidation();
} else if (fallbackTextRisk) {
  await runFallbackTextRiskValidation();
} else {
  await runEditableExportValidation();
}

async function runUiVisualMatrixValidation() {
  if (!cliUrl) throw new Error('Usage: node scripts/validate-editable-pptx-export.mjs --ui-visual-matrix --url <preview-url>');
  const themes = (getArg('--themes') || MATRIX_THEME_PACKS.join(','))
    .split(',')
    .map(item => item.trim())
    .filter(Boolean);
  const script = fileURLToPath(import.meta.url);
  const matrixDir = path.join(OUT_DIR, `matrix-${timestampForPath()}`);
  mkdirSync(matrixDir, { recursive: true });
  rmSync(path.join(OUT_DIR, 'ui-visual-matrix.json'), { force: true });
  rmSync(path.join(OUT_DIR, 'ui-visual-matrix.partial.json'), { force: true });
  writeFileSync(path.join(OUT_DIR, 'ui-visual-matrix.latest.txt'), `${matrixDir}\n`);
  const themeResults = [];
  for (const theme of themes) {
    const child = runVisualMatrixThemeChild(script, theme, matrixDir);
    themeResults.push(summarizeMatrixTheme(theme, child.parsed, child.status));
    writeFileSync(path.join(matrixDir, 'ui-visual-matrix.partial.json'), JSON.stringify({
      mode: 'ui-visual-matrix',
      url: cliUrl,
      matrixDir,
      samplesPerTheme: cliSamplesPerTheme,
      themes: themeResults,
    }, null, 2) + '\n');
  }

  const fallbackChild = spawnSync(process.execPath, [
    script,
    '--fallback-text-risk',
    '--url',
    cliUrl,
    '--theme-pack',
    'theme03',
  ], {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 60 * 1024 * 1024,
    timeout: 5 * 60 * 1000,
    env: { ...process.env, EDITABLE_PPTX_VALIDATION_OUT_DIR: matrixDir },
  });
  const fallbackParsed = parseJsonProcessOutput(fallbackChild.stdout, fallbackChild.stderr);
  const fallbackSummary = summarizeFallbackTextRisk(fallbackParsed, fallbackChild.status);
  const failures = [
    ...themeResults.filter(item => !item.passed).map(item => `${item.themePack} failed visual fidelity matrix checks.`),
    ...(fallbackSummary.passed ? [] : ['theme03 fallback text risk check reported text baked into local fallback images.']),
  ];
  const allThemesContactSheet = createMatrixContactSheet(themeResults, matrixDir);
  const result = {
    mode: 'ui-visual-matrix',
    url: cliUrl,
    matrixDir,
    matrixJson: path.join(matrixDir, 'ui-visual-matrix.json'),
    allThemesContactSheet,
    samplesPerTheme: cliSamplesPerTheme,
    passed: failures.length === 0,
    themes: themeResults,
    theme03FallbackTextRisk: fallbackSummary,
    failures,
  };
  writeFileSync(path.join(matrixDir, 'ui-visual-matrix.json'), JSON.stringify(result, null, 2) + '\n');
  writeFileSync(path.join(OUT_DIR, 'ui-visual-matrix.json'), JSON.stringify(result, null, 2) + '\n');
  if (failures.length) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

function runVisualMatrixThemeChild(script, theme, matrixDir) {
  let last = null;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const child = spawnSync(process.execPath, [
      script,
      '--ui-visual-fidelity',
      '--url',
      cliUrl,
      '--theme-pack',
      theme,
      '--samples-per-theme',
      String(cliSamplesPerTheme),
    ], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 120 * 1024 * 1024,
      timeout: 10 * 60 * 1000,
      env: { ...process.env, EDITABLE_PPTX_VALIDATION_OUT_DIR: matrixDir },
    });
    let parsed = parseJsonProcessOutput(child.stdout, child.stderr);
    if (parsed?.parseError && child.stderr?.trim().startsWith('{')) {
      try {
        parsed = JSON.parse(child.stderr.trim());
      } catch {}
    }
    if (!parsed?.parseError) {
      parsed.validationAttempts = attempt;
      return { parsed, status: child.status };
    }
    writeFileSync(path.join(matrixDir, `ui-visual-matrix-${theme}-raw-attempt-${attempt}.txt`), `${child.stdout || ''}\n${child.stderr || ''}`);
    last = { parsed, status: child.status };
  }
  writeFileSync(path.join(matrixDir, `ui-visual-matrix-${theme}-raw.txt`), last?.parsed?.raw || '');
  return last;
}

async function runUiVisualFidelityValidation() {
  if (!cliUrl) throw new Error('Usage: node scripts/validate-editable-pptx-export.mjs --ui-visual-fidelity --url <preview-url>');
  const url = cliUrl;
  const staticFailures = inspectUiExportPath();
  const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
  const visualDir = path.join(OUT_DIR, cliThemePack ? `ui-visual-fidelity-${safePathSegment(cliThemePack)}` : 'ui-visual-fidelity');
  rmSync(visualDir, { recursive: true, force: true });
  mkdirSync(visualDir, { recursive: true });

  let page;
  let expectedSlides = null;
  let expectations = [];
  let pptxFile = null;
  let reportFile = null;
  let htmlScreenshot = null;
  let sampleVisuals = [];
  let contactSheet = null;
  try {
    const context = await browser.newContext({
      acceptDownloads: true,
      viewport: { width: 1920, height: 1080 },
      ignoreHTTPSErrors: true,
    });
    page = await context.newPage();
    page.setDefaultTimeout(180000);
    page.on('dialog', dialog => dialog.dismiss().catch(() => {}));
    await page.goto(`${url}${url.includes('?') ? '&' : '?'}ui_visual=${Date.now()}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    await installValidationHelpers(page);
    if (cliThemePack) {
      await page.evaluate(async themePack => {
        window.__setActiveThemePack?.(themePack, { navigate: true });
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        window.__finishEditablePptxAnimations?.(document);
        await new Promise(resolve => requestAnimationFrame(resolve));
      }, cliThemePack);
    }
    expectedSlides = await page.evaluate(() => (window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')]).length);
    expectations = await collectUiVisualExpectations(page, expectedSlides);
    htmlScreenshot = path.join(visualDir, 'html-slide-001.png');
    await page.evaluate(async () => {
      window.go?.(0, { animate: false, force: true });
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      window.__finishEditablePptxAnimations?.(document);
      await new Promise(resolve => requestAnimationFrame(resolve));
    });
    const activeSlide = await page.$('#deck > .slide.active, #deck > .slide[data-deck-active]');
    if (!activeSlide) throw new Error('Could not capture active slide screenshot.');
    await activeSlide.screenshot({ path: htmlScreenshot });

    await page.click('#preview-export-main');
    const exportResponsePromise = waitForEditablePptxExportResponse(page, 240000);
    await page.click('#preview-export-pptx');
    const result = await exportResponsePromise;
    pptxFile = result.filePath;
    reportFile = result.reportPath;
    sampleVisuals = await collectSampleVisualComparisons(page, expectations, visualDir);
    contactSheet = createSampleContactSheet(sampleVisuals, visualDir);
  } finally {
    await closePage(page);
    await closeBrowser(browser);
  }

  if (!pptxFile) throw new Error('UI export did not return a saved PPTX path.');
  const pptx = inspectPptx(pptxFile);
  const report = reportFile && existsSync(reportFile) ? JSON.parse(readFileSync(reportFile, 'utf8')) : null;
  const visual = runQuickLookVisualComparison(pptxFile, htmlScreenshot, visualDir);
  const failures = [
    ...staticFailures,
    ...validateEditablePptxInspection(pptx, { expectSlides: expectedSlides }),
    ...validateVisualFidelityReport({ report, pptx, expectations, expectedSlides, visual }),
    ...validateSampleVisuals(sampleVisuals),
  ];
  const result = {
    mode: 'ui-visual-fidelity',
    url,
    themePack: cliThemePack || null,
    expectedSlides,
    passed: failures.length === 0,
    pptx: summarizeInspection(pptx),
    report: report ? summarizeVisualReport(report) : null,
    htmlScreenshot,
    quickLook: visual,
    contactSheet,
    samples: sampleVisuals,
    sampleExpectations: expectations.filter(item => item.svgElements || item.canvasElements || item.backgroundImageElements).slice(0, 8),
    failures,
  };
  if (failures.length) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

async function runUiExportValidation() {
  if (!cliUrl) throw new Error('Usage: node scripts/validate-editable-pptx-export.mjs --ui-export --url <preview-url>');
  const url = cliUrl;
  const staticFailures = inspectUiExportPath();
  const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
  let page;
  let mutation = null;
  let expectedSlides = null;
  let pptxFile = null;
  let downloadedFile = null;
  let suggestedFilename = null;
  let downloadHeaders = null;
  try {
    const context = await browser.newContext({
      acceptDownloads: true,
      viewport: { width: 1920, height: 1080 },
      ignoreHTTPSErrors: true,
    });
    page = await context.newPage();
    page.setDefaultTimeout(90000);
    page.on('dialog', dialog => dialog.dismiss().catch(() => {}));
    await page.goto(`${url}${url.includes('?') ? '&' : '?'}ui_export=${Date.now()}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    expectedSlides = await page.evaluate(() => (window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')]).length);
    mutation = await applyUserEdits(page);
    await page.click('#preview-export-main');
    const exportResponsePromise = waitForEditablePptxExportResponse(page, 240000);
    const downloadPromise = page.waitForEvent('download', { timeout: 240000 })
      .then(download => ({ download }))
      .catch(error => ({ error: error.message || String(error) }));
    await page.click('#preview-export-pptx');
    const result = await exportResponsePromise;
    pptxFile = result.filePath;
    if (result.downloadUrl) {
      downloadHeaders = await readDownloadHeaders(new URL(result.downloadUrl, url).href);
    }
    const downloadResult = await Promise.race([
      downloadPromise,
      new Promise(resolve => setTimeout(() => resolve({ error: 'download-event-timeout-after-export' }), 10000)),
    ]);
    if (downloadResult.download) {
      suggestedFilename = downloadResult.download.suggestedFilename();
      downloadedFile = path.join(OUT_DIR, 'ui-export-download.pptx');
      await downloadResult.download.saveAs(downloadedFile);
    }
  } finally {
    await closePage(page);
    await closeBrowser(browser);
  }

  if (!pptxFile) throw new Error('UI export did not return a saved PPTX path.');
  const pptx = inspectPptx(downloadedFile || pptxFile);
  const failures = [
    ...staticFailures,
    ...(downloadedFile ? validateDownloadedPptx(downloadedFile, suggestedFilename) : ['UI export did not trigger a browser download after the server saved the PPTX.']),
    ...validateDownloadHeaders(downloadHeaders),
    ...validateEditablePptxInspection(pptx, {
      expectSlides: expectedSlides,
      mutation,
      requireEditedText: true,
      requireReplacementImage: true,
    }),
  ];
  const result = {
    mode: 'ui-export',
    url,
    expectedSlides,
    suggestedFilename,
    downloadHeaders,
    serverFile: pptxFile,
    passed: failures.length === 0,
    pptx: summarizeInspection(pptx),
    failures,
  };
  if (failures.length) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

async function waitForEditablePptxExportResponse(page, timeout) {
  const response = await page.waitForResponse(resp =>
    resp.request().method() === 'POST' && new URL(resp.url()).pathname === '/api/export-editable-pptx',
  { timeout });
  const result = await response.json();
  if (!response.ok() || !result?.filePath) {
    throw new Error(result?.error || `Editable PPTX export endpoint failed (${response.status()})`);
  }
  return result;
}

async function runFallbackTextRiskValidation() {
  if (!cliUrl) throw new Error('Usage: node scripts/validate-editable-pptx-export.mjs --fallback-text-risk --url <preview-url> --theme-pack <theme>');
  const themePack = cliThemePack || 'theme03';
  const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
  let page;
  let pptxFile = null;
  let reportFile = null;
  let expectedSlides = null;
  let expectedRisks = [];
  try {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      ignoreHTTPSErrors: true,
    });
    page = await context.newPage();
    page.setDefaultTimeout(180000);
    await page.goto(`${cliUrl}${cliUrl.includes('?') ? '&' : '?'}fallback_text_risk=${Date.now()}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    await installValidationHelpers(page);
    await page.evaluate(async theme => {
      window.__setActiveThemePack?.(theme, { navigate: true });
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      window.__finishEditablePptxAnimations?.(document);
      await new Promise(resolve => requestAnimationFrame(resolve));
    }, themePack);
    expectedSlides = await page.evaluate(() => (window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')]).length);
    expectedRisks = await collectFallbackTextRiskExpectations(page, expectedSlides);
    const outDir = path.join(OUT_DIR, `fallback-text-risk-${safePathSegment(themePack)}`);
    rmSync(outDir, { recursive: true, force: true });
    mkdirSync(outDir, { recursive: true });
    if (expectedRisks.length) {
      const slideIndexes = [...new Set(expectedRisks.map(item => item.slide - 1))]
        .filter(index => Number.isInteger(index) && index >= 0)
        .slice(0, cliSamplesPerTheme);
      const mod = await import(pathToFileURL(path.join(ROOT, 'src/export-pptx/editable.mjs')));
      pptxFile = path.join(outDir, `${themePack}.pptx`);
      reportFile = path.join(outDir, `${themePack}.json`);
      await mod.exportEditablePptxFromPage(page, {
        outFile: pptxFile,
        reportFile,
        title: `JAD-64 ${themePack} fallback text risk`,
        slideIndexes,
      });
    }
  } finally {
    await closePage(page);
    await closeBrowser(browser);
  }
  const report = reportFile && existsSync(reportFile) ? JSON.parse(readFileSync(reportFile, 'utf8')) : null;
  const risks = (report?.warnings || []).filter(warning => warning?.type === 'node-image-fallback-text-risk');
  const extracted = (report?.warnings || []).filter(warning => warning?.type === 'node-image-fallback-text-extracted');
  const failures = [];
  if (expectedRisks.length && !report) failures.push('Fallback text risk validation did not write a report file.');
  if (expectedRisks.length && !risks.length && !extracted.length) {
    failures.push(`${themePack} has ${expectedRisks.length} DOM fallback text candidate(s), but export report did not classify them as extracted or risky.`);
  }
  if (risks.length) failures.push(`${themePack} has ${risks.length} local fallback image(s) that include visible descendant text.`);
  const result = {
    mode: 'fallback-text-risk',
    themePack,
    expectedSlides,
    passed: failures.length === 0,
    pptxFile,
    reportFile,
    riskCount: risks.length,
    extractedCount: extracted.length,
    expectedRiskCount: expectedRisks.length,
    expectedRisks: expectedRisks.slice(0, 40),
    extracted: extracted.slice(0, 40),
    risks: risks.slice(0, 40),
    failures,
  };
  if (failures.length) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

async function collectUiVisualExpectations(page, expectedSlides) {
  const expectations = [];
  for (let i = 0; i < expectedSlides; i += 1) {
    expectations.push(await page.evaluate(async (index) => {
      window.go?.(index, { animate: false, force: true });
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      window.__finishEditablePptxAnimations?.(document);
      await new Promise(resolve => requestAnimationFrame(resolve));
      const slide = document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
      if (!slide) return { index: index + 1, missing: true };
      const slideRect = slide.getBoundingClientRect();
      const all = [slide, ...slide.querySelectorAll('*')];
      const metrics = {
        index: index + 1,
        key: slide.dataset.vmSlideId || slide.dataset.layoutKey || slide.id || '',
        elementCount: 0,
        textNodeRects: 0,
        backgroundColorElements: 0,
        backgroundImageElements: 0,
        backgroundUrlElements: 0,
        gradientElements: 0,
        borderElements: 0,
        radiusElements: 0,
        shadowElements: 0,
        svgElements: 0,
        canvasElements: 0,
        unicornFrameElements: 0,
        unicornCanvasElements: 0,
        imageElements: 0,
        maxDepth: 0,
      };

      const isVisible = (el) => {
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity || 1) <= 0.01) return false;
        const rect = el.getBoundingClientRect();
        return rect.width > 1 && rect.height > 1
          && rect.right >= slideRect.left && rect.left <= slideRect.right
          && rect.bottom >= slideRect.top && rect.top <= slideRect.bottom;
      };
      const depthOf = (el) => {
        let depth = 0;
        for (let node = el; node && node !== slide; node = node.parentElement) depth += 1;
        return depth;
      };
      const hasPaint = (color) => {
        const raw = String(color || '').trim();
        return raw && raw !== 'transparent' && !/^rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)$/i.test(raw);
      };
      const walkText = (node) => {
        for (const child of node.childNodes) {
          if (child.nodeType === Node.TEXT_NODE) {
            if (child.parentElement && !isVisible(child.parentElement)) continue;
            const text = (child.textContent || '').trim().replace(/\s+/g, ' ');
            if (!text) continue;
            const range = document.createRange();
            range.selectNodeContents(child);
            const rect = range.getBoundingClientRect();
            range.detach?.();
            if (rect.width > 1 && rect.height > 1
                && rect.right >= slideRect.left && rect.left <= slideRect.right
                && rect.bottom >= slideRect.top && rect.top <= slideRect.bottom) metrics.textNodeRects += 1;
          } else if (child.nodeType === Node.ELEMENT_NODE) {
            if (isVisible(child)) walkText(child);
          }
        }
      };

      for (const el of all) {
        if (!isVisible(el)) continue;
        metrics.elementCount += 1;
        metrics.maxDepth = Math.max(metrics.maxDepth, depthOf(el));
        const tag = el.tagName.toLowerCase();
        const style = getComputedStyle(el);
        if (hasPaint(style.backgroundColor)) metrics.backgroundColorElements += 1;
        if (style.backgroundImage && style.backgroundImage !== 'none') {
          metrics.backgroundImageElements += 1;
          if (/url\(/.test(style.backgroundImage)) metrics.backgroundUrlElements += 1;
          if (/gradient\(/.test(style.backgroundImage)) metrics.gradientElements += 1;
        }
        if (['Top', 'Right', 'Bottom', 'Left'].some(side => parseFloat(style[`border${side}Width`] || '0') > 0 && hasPaint(style[`border${side}Color`]))) {
          metrics.borderElements += 1;
        }
        if (['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'].some(corner => parseFloat(style[`border${corner}Radius`] || '0') > 0)) {
          metrics.radiusElements += 1;
        }
        if (style.boxShadow && style.boxShadow !== 'none') metrics.shadowElements += 1;
        if (tag === 'svg') metrics.svgElements += 1;
        if (el.classList.contains('bt-unicorn-frame')) metrics.unicornFrameElements += 1;
        if (tag === 'canvas') {
          if (el.closest('.bt-unicorn-frame')) metrics.unicornCanvasElements += 1;
          else metrics.canvasElements += 1;
        }
        if (tag === 'img') metrics.imageElements += 1;
      }
      walkText(slide);
      return metrics;
    }, i));
  }
  return expectations;
}

async function installValidationHelpers(page) {
  await page.addScriptTag({
    content: `
      window.__finishEditablePptxAnimations = function(scope) {
        const root = scope || document;
        try {
          for (const animation of document.getAnimations({ subtree: true })) {
            const target = animation.effect?.target;
            if (root !== document && target instanceof Node && !root.contains(target)) continue;
            try {
              animation.updatePlaybackRate?.(1);
              animation.finish();
            } catch {
              try {
                animation.currentTime = animation.effect?.getTiming?.().duration || 999999;
                animation.pause();
              } catch {}
            }
          }
        } catch {}
      };
    `,
  });
}

async function collectFallbackTextRiskExpectations(page, expectedSlides) {
  const risks = [];
  for (let i = 0; i < expectedSlides; i += 1) {
    risks.push(...await page.evaluate(async index => {
      window.go?.(index, { animate: false, force: true });
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      window.__finishEditablePptxAnimations?.(document);
      await new Promise(resolve => requestAnimationFrame(resolve));
      const slide = document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
      if (!slide) return [];
      const slideRect = slide.getBoundingClientRect();
      const out = [];
      const isVisible = (el) => {
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity || 1) <= 0.01) return false;
        const rect = el.getBoundingClientRect();
        return rect.width > 1 && rect.height > 1
          && rect.right >= slideRect.left && rect.left <= slideRect.right
          && rect.bottom >= slideRect.top && rect.top <= slideRect.bottom;
      };
      const visibleText = (root) => {
        const texts = [];
        const walk = (node) => {
          for (const child of node.childNodes || []) {
            if (child.nodeType === Node.TEXT_NODE) {
              const text = (child.textContent || '').trim().replace(/\s+/g, ' ');
              if (!text) continue;
              const range = document.createRange();
              range.selectNodeContents(child);
              const rect = range.getBoundingClientRect();
              range.detach?.();
              if (rect.width > 1 && rect.height > 1) texts.push(text);
            } else if (child.nodeType === Node.ELEMENT_NODE && isVisible(child)) {
              walk(child);
            }
          }
        };
        walk(root);
        return texts;
      };
      const addRisk = (el, kind, texts) => {
        if (!texts.length) return;
        out.push({
          slide: index + 1,
          key: slide.dataset.vmSlideId || slide.dataset.layoutKey || slide.id || '',
          kind,
          textCount: texts.length,
          sample: texts.join(' ').slice(0, 120),
        });
      };
      slide.querySelectorAll('.bt-unicorn-frame').forEach(el => {
        if (isVisible(el)) addRisk(el, 'unicorn-background', visibleText(el));
      });
      slide.querySelectorAll('svg').forEach(el => {
        if (!isVisible(el)) return;
        const texts = [...el.querySelectorAll('text')]
          .map(textEl => (textEl.textContent || '').trim().replace(/\s+/g, ' '))
          .filter(Boolean);
        addRisk(el, 'svg-text', texts);
      });
      return out;
    }, i));
  }
  return risks;
}

async function collectSampleVisualComparisons(page, expectations, visualDir) {
  const mod = await import(pathToFileURL(path.join(ROOT, 'src/export-pptx/editable.mjs')));
  const samples = selectVisualSamples(expectations);
  const out = [];
  for (const sample of samples) {
    const sampleDir = path.join(visualDir, `sample-${String(sample.index).padStart(3, '0')}`);
    mkdirSync(sampleDir, { recursive: true });
    const htmlScreenshot = path.join(sampleDir, `html-slide-${String(sample.index).padStart(3, '0')}.png`);
    await page.evaluate(async index => {
      window.go?.(index, { animate: false, force: true });
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      window.__finishEditablePptxAnimations?.(document);
      await new Promise(resolve => requestAnimationFrame(resolve));
    }, sample.index - 1);
    const highlightAnchors = await collectHighlightAnchorRects(page, sample);
    const slotAnchors = await collectSlotAnchorRects(page, sample);
    const pptxFile = path.join(sampleDir, `sample-slide-${String(sample.index).padStart(3, '0')}.pptx`);
    const reportFile = path.join(sampleDir, `sample-slide-${String(sample.index).padStart(3, '0')}.json`);
    await mod.exportEditablePptxFromPage(page, {
      outFile: pptxFile,
      reportFile,
      title: `JAD-64 Visual Sample ${sample.index}`,
      slideIndexes: [sample.index - 1],
      freezeElementScreenshots: true,
    });
    const activeSlide = await page.$('#deck > .slide.active, #deck > .slide[data-deck-active]');
    if (!activeSlide) {
      out.push({ ...sample, available: false, reason: 'missing-active-slide' });
      continue;
    }
    await activeSlide.screenshot({ path: htmlScreenshot });
    const pptx = inspectPptx(pptxFile);
    const visual = runQuickLookVisualComparison(pptxFile, htmlScreenshot, sampleDir);
    const highlightChecks = analyzeHighlightAnchors(highlightAnchors, visual);
    const slotChecks = analyzeSlotAnchors(slotAnchors, visual, pptx);
    const textLayoutFailures = validateSampleTextLayout(sample, pptx);
    const expected = summarizeExpectation(expectations.find(item => item.index === sample.index));
    const pairImage = createSamplePairImage(sample, visual, sampleDir);
    out.push({
      ...sample,
      expected,
      pptx: summarizeInspection(pptx),
      quickLook: visual,
      pairImage,
      textLayoutFailures,
      highlightChecks,
      slotChecks,
      htmlScreenshot,
      pptxFile,
      reportFile,
    });
  }
  return out;
}

function createSamplePairImage(sample, visual, sampleDir) {
  if (!visual?.available || !existsSync(visual.htmlImage) || !existsSync(visual.pptxImage) || !commandAvailable('magick')) return null;
  const out = path.join(sampleDir, 'compare-pair.png');
  const row = spawnSync('magick', [
    visual.htmlImage,
    '-resize',
    '480x270!',
    visual.pptxImage,
    '-resize',
    '480x270!',
    '+append',
    out,
  ], { encoding: 'utf8' });
  return row.status === 0 ? out : null;
}

function createSampleContactSheet(samples, visualDir) {
  const rows = samples.map(sample => sample.pairImage).filter(Boolean);
  if (!rows.length || !commandAvailable('magick')) return null;
  const out = path.join(visualDir, 'contact-sheet.png');
  const sheet = spawnSync('magick', [
    ...rows,
    '-append',
    out,
  ], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
  return sheet.status === 0 ? out : null;
}

function createMatrixContactSheet(themeResults, matrixDir) {
  if (!commandAvailable('magick')) return null;
  const contactDir = path.join(matrixDir, 'contact-sheets');
  const labeledDir = path.join(contactDir, 'labeled');
  mkdirSync(labeledDir, { recursive: true });
  const font = firstExistingFile([
    '/System/Library/Fonts/Supplemental/Arial.ttf',
    '/System/Library/Fonts/Helvetica.ttc',
  ]);
  const labeled = [];
  for (const theme of themeResults) {
    if (!theme.contactSheet || !existsSync(theme.contactSheet)) continue;
    const out = path.join(labeledDir, `${safePathSegment(theme.themePack)}.png`);
    const args = [
      '-background',
      'white',
      '-fill',
      'black',
      ...(font ? ['-font', font] : []),
      '-pointsize',
      '28',
      `label:${theme.themePack}`,
      theme.contactSheet,
      '-resize',
      '480x',
      '-append',
      out,
    ];
    const label = spawnSync('magick', args, { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    if (label.status === 0 && existsSync(out)) labeled.push(out);
  }
  if (!labeled.length) return null;
  const out = path.join(contactDir, 'all-themes-contact-sheet.png');
  const montage = spawnSync('magick', [
    'montage',
    ...(font ? ['-font', font] : []),
    ...labeled,
    '-tile',
    '4x3',
    '-geometry',
    '+20+20',
    '-background',
    '#f4f4f4',
    out,
  ], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return montage.status === 0 && existsSync(out) ? out : null;
}

function firstExistingFile(files) {
  return files.find(file => existsSync(file)) || null;
}

function timestampForPath() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function selectVisualSamples(expectations) {
  const picks = [];
  const add = (label, predicate) => {
    const found = expectations.find(item => predicate(item) && !picks.some(pick => pick.index === item.index));
    if (found) picks.push({ index: found.index, key: found.key || '', label, types: classifySampleTypes(found) });
  };
  add('cover', item => item.index === 1);
  add('title-section', item => item.index !== 1 && item.textNodeRects >= 6 && item.elementCount <= 35);
  add('data-table', item => item.borderElements >= 8 && item.textNodeRects >= 20);
  add('chart-values', item => item.svgElements > 0 || item.canvasElements > 0);
  add('canvas-chart', item => item.canvasElements > 0);
  add('media-slot', item => item.imageElements > 0 || item.backgroundUrlElements > 0 || item.unicornFrameElements > 0);
  add('complex-background', item => item.gradientElements >= 3 || item.shadowElements >= 4 || item.maxDepth >= 8);
  add('dense-data', item => item.elementCount >= 65 || item.textNodeRects >= 30);
  const ranked = [...expectations]
    .filter(item => !item.missing && !picks.some(pick => pick.index === item.index))
    .sort((a, b) => sampleComplexityScore(b) - sampleComplexityScore(a));
  for (const item of ranked) {
    if (picks.length >= cliSamplesPerTheme) break;
    picks.push({ index: item.index, key: item.key || '', label: 'coverage-fill', types: classifySampleTypes(item) });
  }
  return picks.slice(0, Math.min(cliSamplesPerTheme, expectations.length));
}

function classifySampleTypes(item = {}) {
  const types = [];
  if (item.index === 1) types.push('cover');
  if (item.index !== 1 && item.textNodeRects >= 6 && item.elementCount <= 35) types.push('title-section');
  if (item.borderElements >= 8 && item.textNodeRects >= 20) types.push('data-table');
  if (item.svgElements > 0 || item.canvasElements > 0) types.push('chart-values');
  if (item.imageElements > 0 || item.backgroundUrlElements > 0 || item.unicornFrameElements > 0) types.push('media-slot');
  if (item.gradientElements >= 3 || item.shadowElements >= 4 || item.maxDepth >= 8) types.push('complex-background');
  if (item.elementCount >= 65 || item.textNodeRects >= 30) types.push('dense-data');
  return types.length ? types : ['general'];
}

function sampleComplexityScore(item = {}) {
  return Number(item.textNodeRects || 0) * 2
    + Number(item.elementCount || 0)
    + Number(item.borderElements || 0) * 4
    + Number(item.svgElements || 0) * 12
    + Number(item.canvasElements || 0) * 12
    + Number(item.backgroundUrlElements || 0) * 10
    + Number(item.unicornFrameElements || 0) * 10
    + Number(item.gradientElements || 0) * 2
    + Number(item.shadowElements || 0) * 3
    + Number(item.maxDepth || 0) * 3;
}

function summarizeExpectation(item = {}) {
  return {
    textNodeRects: item.textNodeRects || 0,
    elementCount: item.elementCount || 0,
    backgroundColorElements: item.backgroundColorElements || 0,
    backgroundImageElements: item.backgroundImageElements || 0,
    backgroundUrlElements: item.backgroundUrlElements || 0,
    gradientElements: item.gradientElements || 0,
    borderElements: item.borderElements || 0,
    radiusElements: item.radiusElements || 0,
    shadowElements: item.shadowElements || 0,
    svgElements: item.svgElements || 0,
    canvasElements: item.canvasElements || 0,
    unicornFrameElements: item.unicornFrameElements || 0,
    imageElements: item.imageElements || 0,
    maxDepth: item.maxDepth || 0,
  };
}

function validateVisualFidelityReport({ report, pptx, expectations, expectedSlides, visual }) {
  const failures = [];
  if (!report) {
    failures.push('UI export did not write a report file for visual fidelity validation.');
    return failures;
  }
  if (report.captureMode !== 'captured-tree') {
    failures.push('Visual fidelity export must use the captured-tree collector, not the legacy flat DOM scanner.');
  }
  if (!Array.isArray(report.slideSummaries) || report.slideSummaries.length !== expectedSlides) {
    failures.push('Visual fidelity report must include one captured-tree summary per exported slide.');
  }

  const complexWarnings = (report.warnings || []).filter(warning =>
    warning?.type === 'complex-node' && ['svg', 'canvas'].includes(warning.node));
  if (complexWarnings.length) {
    failures.push(`Visual fidelity export skipped ${complexWarnings.length} SVG/canvas slide occurrence(s) instead of exporting local fallback objects.`);
  }

  const complexExpected = expectations.filter(item => (item.svgElements || 0) + (item.canvasElements || 0) + (item.backgroundUrlElements || 0) + (item.unicornFrameElements || 0) > 0);
  if (complexExpected.length) {
    const missingLocalImages = complexExpected
      .filter(item => (pptx.slides[item.index - 1]?.pictureCount || 0) <= 0)
      .map(item => item.index);
    if (missingLocalImages.length) {
      failures.push(`Slides with SVG/canvas/background URL images must emit local image objects: ${missingLocalImages.slice(0, 12).join(', ')}.`);
    }
  }

  const richExpected = expectations.filter(item => item.maxDepth >= 6 || item.borderElements >= 8 || item.shadowElements >= 4 || item.textNodeRects >= 25);
  const summaries = Array.isArray(report.slideSummaries) ? report.slideSummaries : [];
  const flatCaptures = richExpected
    .filter(item => {
      const summary = summaries[item.index - 1];
      const slide = pptx.slides[item.index - 1];
      const minText = item.textNodeRects >= 6 ? Math.max(2, Math.ceil(item.textNodeRects * 0.35)) : 0;
      const minForeground = item.elementCount >= 20 ? Math.max(4, Math.ceil(item.elementCount * 0.08)) : 0;
      const hasForeground = slide
        && slide.text.length >= minText
        && foregroundObjectCount(slide, item) >= minForeground;
      if ((item.svgElements || item.canvasElements) && summary?.imageNodes > 0) return false;
      return !summary || (summary.capturedNodes < Math.min(40, Math.max(12, Math.floor(item.elementCount * 0.25))) && !hasForeground);
    })
    .map(item => item.index);
  if (flatCaptures.length) {
    failures.push(`Captured tree is too shallow for visually rich slides: ${flatCaptures.slice(0, 12).join(', ')}.`);
  }

  const foregroundLoss = expectations
    .filter(item => item.textNodeRects >= 6 || item.elementCount >= 20)
    .map(item => {
      const slide = pptx.slides[item.index - 1];
      if (!slide) return { item, lost: true, detail: 'missing-slide' };
      const minText = item.textNodeRects >= 6 ? Math.max(2, Math.ceil(item.textNodeRects * 0.35)) : 0;
      const minForeground = item.elementCount >= 20 ? Math.max(4, Math.ceil(item.elementCount * 0.08)) : 0;
      const foreground = foregroundObjectCount(slide, item);
      const lost = slide.text.length < minText || foreground < minForeground;
      return { item, lost, detail: `text ${slide.text.length}/${minText}, foreground ${foreground}/${minForeground}, pictures ${slide.pictureCount || 0}, elements ${item.elementCount}` };
    })
    .filter(entry => entry.lost);
  if (foregroundLoss.length) {
    failures.push(`Slides appear to have lost foreground content: ${foregroundLoss.slice(0, 12).map(entry => `${entry.item.index} (${entry.detail})`).join(', ')}.`);
  }

  if (!visual.available) {
    failures.push(`Quick Look visual comparison was unavailable: ${visual.reason}`);
  }
  return failures;
}

function validateSampleVisuals(samples) {
  const failures = [];
  if (!samples.length) {
    failures.push('Visual fidelity validation did not select any multi-page samples.');
    return failures;
  }
  if (samples.length < cliSamplesPerTheme) {
    failures.push(`Visual fidelity validation selected only ${samples.length} sample page(s), expected ${cliSamplesPerTheme}.`);
  }
  for (const sample of samples) {
    const label = `${sample.label || 'sample'} slide ${sample.index}`;
    if (sample.pptx?.slideCount !== 1) failures.push(`${label} did not render as a single-slide visual sample.`);
    if (sample.pptx?.fullSlideImageOnlySlides?.length) failures.push(`${label} became a full-slide-image-only PPTX sample.`);
    failures.push(...validateSampleStructure(sample, label));
    const visual = sample.quickLook;
    if (!visual?.available) {
      failures.push(`${label} Quick Look comparison unavailable: ${visual?.reason || sample.reason || 'unknown'}.`);
      continue;
    }
    if (visual.normalizedRmse > VISUAL_RMSE_LIMIT) failures.push(`${label} RMSE ${visual.normalizedRmse.toFixed(4)} exceeds ${VISUAL_RMSE_LIMIT.toFixed(4)}.`);
    if (visual.edgeRmse > VISUAL_EDGE_RMSE_LIMIT) failures.push(`${label} edge RMSE ${visual.edgeRmse.toFixed(4)} exceeds ${VISUAL_EDGE_RMSE_LIMIT.toFixed(4)}.`);
    if (visual.meanAbsoluteError > VISUAL_MAE_LIMIT) failures.push(`${label} MAE ${visual.meanAbsoluteError.toFixed(4)} exceeds ${VISUAL_MAE_LIMIT.toFixed(4)}.`);
    for (const textFailure of sample.textLayoutFailures || []) failures.push(`${label} ${textFailure}`);
    for (const highlightFailure of validateHighlightChecks(sample.highlightChecks || [])) failures.push(`${label} ${highlightFailure}`);
    for (const slotFailure of validateSlotChecks(sample.slotChecks || [])) failures.push(`${label} ${slotFailure}`);
  }
  return failures;
}

async function collectHighlightAnchorRects(page, sample) {
  const anchors = SAMPLE_HIGHLIGHT_ANCHORS.get(`${cliThemePack || ''}:${sample.index}`) || [];
  if (!anchors.length) return [];
  return page.evaluate((items) => {
    const slide = document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    if (!slide) return items.map(item => ({ ...item, found: false, reason: 'missing-active-slide' }));
    const slideRect = slide.getBoundingClientRect();
    const normalize = value => String(value || '').replace(/\s+/g, '');
    const visibleRect = (rect) => {
      const left = Math.max(rect.left, slideRect.left);
      const top = Math.max(rect.top, slideRect.top);
      const right = Math.min(rect.right, slideRect.right);
      const bottom = Math.min(rect.bottom, slideRect.bottom);
      if (right <= left || bottom <= top) return null;
      return { x: left - slideRect.left, y: top - slideRect.top, w: right - left, h: bottom - top };
    };
    const isVisible = (el) => {
      if (!el) return false;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity || 1) <= 0.01) return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 1 && rect.height > 1
        && rect.right >= slideRect.left && rect.left <= slideRect.right
        && rect.bottom >= slideRect.top && rect.top <= slideRect.bottom;
    };

    return items.map(item => {
      const target = normalize(item.text);
      const walker = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT);
      let best = null;
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const parent = node.parentElement;
        if (!isVisible(parent)) continue;
        if (!normalize(node.textContent).includes(target)) continue;
        const range = document.createRange();
        range.selectNodeContents(node);
        const rect = visibleRect(range.getBoundingClientRect());
        range.detach?.();
        if (!rect || rect.w < 2 || rect.h < 2) continue;
        const style = getComputedStyle(parent);
        const score = rect.w * rect.h + (parseFloat(style.fontSize || '0') || 0) * 100;
        if (!best || score > best.score) {
          best = {
            ...item,
            found: true,
            rect,
            slide: { w: slideRect.width, h: slideRect.height },
            style: {
              color: style.color,
              backgroundImage: style.backgroundImage,
              backgroundClip: style.backgroundClip,
              webkitBackgroundClip: style.webkitBackgroundClip,
              webkitTextFillColor: style.webkitTextFillColor,
              fontSize: style.fontSize,
            },
            score,
          };
        }
      }
      return best || { ...item, found: false, reason: 'text-anchor-not-found' };
    });
  }, anchors);
}

function analyzeHighlightAnchors(anchors, visual) {
  if (!anchors.length) return [];
  return anchors.map(anchor => {
    if (!anchor.found) return anchor;
    if (!visual?.available) return { ...anchor, available: false, reason: 'quicklook-unavailable' };
    const compareDir = path.dirname(visual.htmlImage);
    const htmlCrop = path.join(compareDir, `html-anchor-${anchor.id}.png`);
    const pptxCrop = path.join(compareDir, `pptx-anchor-${anchor.id}.png`);
    const htmlStats = cropHighlightStats(visual.htmlImage, anchor, htmlCrop);
    const pptxStats = cropHighlightStats(visual.pptxImage, anchor, pptxCrop);
    return {
      ...anchor,
      available: Boolean(htmlStats && pptxStats),
      htmlCrop,
      pptxCrop,
      htmlStats,
      pptxStats,
      reason: htmlStats && pptxStats ? undefined : 'crop-analysis-failed',
    };
  });
}

function cropHighlightStats(imagePath, anchor, outPath) {
  if (!imagePath || !existsSync(imagePath) || !anchor?.rect || !anchor?.slide) return null;
  const crop = anchorCropSpec(anchor);
  const save = spawnSync('magick', [imagePath, '-crop', crop.spec, outPath], { encoding: 'utf8' });
  if (save.status !== 0) return null;
  const raw = spawnSync('magick', [imagePath, '-crop', crop.spec, '-depth', '8', 'rgb:-'], {
    encoding: null,
    maxBuffer: 32 * 1024 * 1024,
  });
  if (raw.status !== 0 || !raw.stdout?.length) return null;
  return summarizeHighlightPixels(raw.stdout);
}

function anchorCropSpec(anchor) {
  const scaleX = 960 / Number(anchor.slide.w || 1920);
  const scaleY = 540 / Number(anchor.slide.h || 1080);
  const padX = 5;
  const padY = 4;
  const x = Math.max(0, Math.floor(anchor.rect.x * scaleX - padX));
  const y = Math.max(0, Math.floor(anchor.rect.y * scaleY - padY));
  const right = Math.min(960, Math.ceil((anchor.rect.x + anchor.rect.w) * scaleX + padX));
  const bottom = Math.min(540, Math.ceil((anchor.rect.y + anchor.rect.h) * scaleY + padY));
  const w = Math.max(1, right - x);
  const h = Math.max(1, bottom - y);
  return { x, y, w, h, spec: `${w}x${h}+${x}+${y}` };
}

function summarizeHighlightPixels(buffer) {
  const pixels = Math.floor(buffer.length / 3);
  let highlightPixels = 0;
  let nearBlackPixels = 0;
  let brightPixels = 0;
  let sumR = 0;
  let sumG = 0;
  let sumB = 0;
  for (let i = 0; i < pixels; i += 1) {
    const r = buffer[i * 3];
    const g = buffer[i * 3 + 1];
    const b = buffer[i * 3 + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    sumR += r;
    sumG += g;
    sumB += b;
    if (max <= 52) nearBlackPixels += 1;
    if (max >= 92) brightPixels += 1;
    if (max >= 88 && max - min >= 24 && (g >= r + 18 || b >= r + 18) && (g >= 100 || b >= 100)) {
      highlightPixels += 1;
    }
  }
  return {
    pixels,
    highlightPixels,
    highlightRatio: pixels ? highlightPixels / pixels : 0,
    nearBlackRatio: pixels ? nearBlackPixels / pixels : 0,
    brightRatio: pixels ? brightPixels / pixels : 0,
    avgR: pixels ? sumR / pixels : 0,
    avgG: pixels ? sumG / pixels : 0,
    avgB: pixels ? sumB / pixels : 0,
  };
}

function validateHighlightChecks(checks) {
  const failures = [];
  for (const check of checks) {
    if (!check.found) {
      failures.push(`is missing highlight anchor "${check.text}" in the HTML sample (${check.reason || 'not-found'}).`);
      continue;
    }
    if (!check.available) {
      failures.push(`could not analyze highlight anchor "${check.text}" (${check.reason || 'unavailable'}).`);
      continue;
    }
    const htmlRatio = Number(check.htmlStats?.highlightRatio || 0);
    const pptxRatio = Number(check.pptxStats?.highlightRatio || 0);
    const requiredRatio = Math.max(0.006, htmlRatio * 0.35);
    if (pptxRatio < requiredRatio) {
      failures.push(`highlight anchor "${check.text}" lost cyan/green pixels in PPTX crop (${pptxRatio.toFixed(4)} < ${requiredRatio.toFixed(4)}; HTML ${htmlRatio.toFixed(4)}).`);
    }
    if (Number(check.pptxStats?.nearBlackRatio || 0) > 0.9 && Number(check.htmlStats?.nearBlackRatio || 0) < 0.9) {
      failures.push(`highlight anchor "${check.text}" is near-black in the PPTX crop.`);
    }
  }
  return failures;
}

async function collectSlotAnchorRects(page, sample) {
  const anchors = SAMPLE_SLOT_ANCHORS.get(`${cliThemePack || ''}:${sample.index}`) || [];
  if (!anchors.length) return [];
  return page.evaluate((items) => {
    const slide = document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    if (!slide) return items.map(item => ({ ...item, found: false, reason: 'missing-active-slide' }));
    const slideRect = slide.getBoundingClientRect();
    const toRect = (rect) => {
      const left = Math.max(rect.left, slideRect.left);
      const top = Math.max(rect.top, slideRect.top);
      const right = Math.min(rect.right, slideRect.right);
      const bottom = Math.min(rect.bottom, slideRect.bottom);
      if (right <= left || bottom <= top) return null;
      return { x: left - slideRect.left, y: top - slideRect.top, w: right - left, h: bottom - top };
    };
    return items.map(item => {
      const el = slide.querySelector(item.selector);
      if (!el) return { ...item, found: false, reason: 'slot-not-found' };
      const rect = toRect(el.getBoundingClientRect());
      if (!rect || rect.w < 4 || rect.h < 4) return { ...item, found: false, reason: 'slot-not-visible' };
      const cap = el.querySelector('.gxn-slot-cap');
      const capRect = cap ? toRect(cap.getBoundingClientRect()) : null;
      const style = getComputedStyle(el);
      return {
        ...item,
        found: true,
        rect,
        capRect,
        slide: { w: slideRect.width, h: slideRect.height },
        style: {
          backgroundImage: style.backgroundImage,
          backgroundColor: style.backgroundColor,
          borderTopColor: style.borderTopColor,
          borderTopWidth: style.borderTopWidth,
          borderTopLeftRadius: style.borderTopLeftRadius,
        },
      };
    });
  }, anchors);
}

function analyzeSlotAnchors(anchors, visual, pptx) {
  if (!anchors.length) return [];
  return anchors.map(anchor => {
    if (!anchor.found) return anchor;
    if (!visual?.available) return { ...anchor, available: false, reason: 'quicklook-unavailable' };
    const compareDir = path.dirname(visual.htmlImage);
    const htmlCrop = path.join(compareDir, `html-slot-${anchor.id}.png`);
    const pptxCrop = path.join(compareDir, `pptx-slot-${anchor.id}.png`);
    const htmlBackgroundCrop = path.join(compareDir, `html-slot-${anchor.id}-background.png`);
    const pptxBackgroundCrop = path.join(compareDir, `pptx-slot-${anchor.id}-background.png`);
    const htmlStats = cropSlotStats(visual.htmlImage, anchor, htmlCrop, htmlBackgroundCrop);
    const pptxStats = cropSlotStats(visual.pptxImage, anchor, pptxCrop, pptxBackgroundCrop);
    return {
      ...anchor,
      available: Boolean(htmlStats && pptxStats),
      htmlCrop,
      pptxCrop,
      htmlBackgroundCrop,
      pptxBackgroundCrop,
      htmlStats,
      pptxStats,
      textObjectPresent: Boolean(pptx?.slides?.[0]?.text?.includes(anchor.text)),
      reason: htmlStats && pptxStats ? undefined : 'slot-crop-analysis-failed',
    };
  });
}

function cropSlotStats(imagePath, anchor, fullOutPath, backgroundOutPath) {
  if (!imagePath || !existsSync(imagePath) || !anchor?.rect || !anchor?.slide) return null;
  const full = slotCropSpec(anchor, { x: 0, y: 0, w: 1, h: 1 });
  const background = slotCropSpec(anchor, { x: 0.08, y: 0.08, w: 0.84, h: 0.22 });
  const fullSave = spawnSync('magick', [imagePath, '-crop', full.spec, fullOutPath], { encoding: 'utf8' });
  if (fullSave.status !== 0) return null;
  const bgSave = spawnSync('magick', [imagePath, '-crop', background.spec, backgroundOutPath], { encoding: 'utf8' });
  if (bgSave.status !== 0) return null;
  const raw = spawnSync('magick', [imagePath, '-crop', background.spec, '-depth', '8', 'rgb:-'], {
    encoding: null,
    maxBuffer: 32 * 1024 * 1024,
  });
  if (raw.status !== 0 || !raw.stdout?.length) return null;
  return summarizeTexturePixels(raw.stdout, background.w, background.h);
}

function slotCropSpec(anchor, inset) {
  const scaleX = 960 / Number(anchor.slide.w || 1920);
  const scaleY = 540 / Number(anchor.slide.h || 1080);
  const x = Math.max(0, Math.floor((anchor.rect.x + anchor.rect.w * inset.x) * scaleX));
  const y = Math.max(0, Math.floor((anchor.rect.y + anchor.rect.h * inset.y) * scaleY));
  const w = Math.max(1, Math.ceil(anchor.rect.w * inset.w * scaleX));
  const h = Math.max(1, Math.ceil(anchor.rect.h * inset.h * scaleY));
  return { x, y, w, h, spec: `${w}x${h}+${x}+${y}` };
}

function summarizeTexturePixels(buffer, width, height) {
  const pixels = Math.min(width * height, Math.floor(buffer.length / 3));
  const luma = new Float32Array(pixels);
  let sum = 0;
  let sum2 = 0;
  let nearSolid = 0;
  for (let i = 0; i < pixels; i += 1) {
    const r = buffer[i * 3];
    const g = buffer[i * 3 + 1];
    const b = buffer[i * 3 + 2];
    const value = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    luma[i] = value;
    sum += value;
    sum2 += value * value;
  }
  let edge = 0;
  let edgeCount = 0;
  let diagonal = 0;
  let diagonalCount = 0;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const offset = y * width + x;
      const current = luma[offset];
      if (x + 1 < width) {
        edge += Math.abs(current - luma[offset + 1]);
        edgeCount += 1;
      }
      if (y + 1 < height) {
        edge += Math.abs(current - luma[offset + width]);
        edgeCount += 1;
      }
      if (x + 1 < width && y + 1 < height) {
        diagonal += Math.abs(current - luma[offset + width + 1]);
        diagonalCount += 1;
      }
      if (current < 18) nearSolid += 1;
    }
  }
  const mean = pixels ? sum / pixels : 0;
  const variance = pixels ? sum2 / pixels - mean * mean : 0;
  return {
    pixels,
    mean,
    sd: Math.sqrt(Math.max(0, variance)),
    edgeMean: edgeCount ? edge / edgeCount : 0,
    diagonalMean: diagonalCount ? diagonal / diagonalCount : 0,
    nearDarkRatio: pixels ? nearSolid / pixels : 0,
  };
}

function validateSlotChecks(checks) {
  const failures = [];
  for (const check of checks) {
    if (!check.found) {
      failures.push(`is missing image slot "${check.id}" in the HTML sample (${check.reason || 'not-found'}).`);
      continue;
    }
    if (!check.available) {
      failures.push(`could not analyze image slot "${check.id}" (${check.reason || 'unavailable'}).`);
      continue;
    }
    if (!check.textObjectPresent) {
      failures.push(`image slot "${check.id}" placeholder text "${check.text}" is not exported as an editable PPT text object.`);
    }
    const htmlEdge = Number(check.htmlStats?.edgeMean || 0);
    const pptxEdge = Number(check.pptxStats?.edgeMean || 0);
    const htmlSd = Number(check.htmlStats?.sd || 0);
    const pptxSd = Number(check.pptxStats?.sd || 0);
    const requiredEdge = Math.max(0.18, htmlEdge * 0.35);
    const requiredSd = Math.max(0.7, htmlSd * 0.3);
    if (pptxEdge < requiredEdge || pptxSd < requiredSd) {
      failures.push(`image slot "${check.id}" lost the diagonal texture/background variation in PPTX crop (edge ${pptxEdge.toFixed(3)} < ${requiredEdge.toFixed(3)} or sd ${pptxSd.toFixed(3)} < ${requiredSd.toFixed(3)}; HTML edge ${htmlEdge.toFixed(3)}, sd ${htmlSd.toFixed(3)}).`);
    }
  }
  return failures;
}

function validateSampleStructure(sample, label) {
  const failures = [];
  const expected = sample.expected || {};
  const pptx = sample.pptx || {};
  const expectedText = Number(expected.textNodeRects || 0);
  if (expectedText >= 6) {
    const minText = Math.max(2, Math.ceil(expectedText * 0.5));
    if (Number(pptx.textCount || 0) < minText) {
      failures.push(`${label} is missing editable text content (${pptx.textCount || 0} text objects for ${expectedText} visible text rects).`);
    }
  }
  const expectedComplexImage = Number(expected.svgElements || 0) + Number(expected.canvasElements || 0) + Number(expected.backgroundUrlElements || 0) + Number(expected.unicornFrameElements || 0);
  if (expectedComplexImage > 0 && Number(pptx.pictureCount || 0) <= 0) {
    failures.push(`${label} expected local image fallback objects for SVG/canvas/background media, but exported none.`);
  }
  if (Number(expected.elementCount || 0) >= 20) {
    const nonBackgroundObjects = foregroundObjectCount({ text: Array.from({ length: Number(pptx.textCount || 0) }), pictureCount: Number(pptx.pictureCount || 0) }, expected);
    if (nonBackgroundObjects < Math.max(4, Math.ceil(Number(expected.elementCount || 0) * 0.12))) {
      failures.push(`${label} appears to have lost foreground content (${nonBackgroundObjects} text/image objects for ${expected.elementCount} visible elements).`);
    }
  }
  return failures;
}

function foregroundObjectCount(slide, expected) {
  const textCount = Array.isArray(slide?.text) ? slide.text.length : Number(slide?.textCount || 0);
  const pictureCount = Number(slide?.pictureCount || 0);
  return textCount + pictureCount * 8;
}

function validateSampleTextLayout(sample, pptx) {
  if (cliThemePack && cliThemePack !== 'theme01') return [];
  const anchors = SAMPLE_TEXT_LAYOUT_ANCHORS.get(sample.index) || [];
  const slide = pptx.slides[0];
  const failures = [];
  for (const anchor of anchors) {
    const box = slide?.textBoxes?.find(item => item.text === anchor.text);
    if (!box) {
      failures.push(`is missing text box "${anchor.text}".`);
      continue;
    }
    if (anchor.align && box.align !== anchor.align) {
      failures.push(`text "${anchor.text}" has align ${box.align || 'none'}, expected ${anchor.align}.`);
    }
    if (box.w > anchor.maxWidth) {
      failures.push(`text "${anchor.text}" box is too wide (${box.w.toFixed(2)}in > ${anchor.maxWidth.toFixed(2)}in), which can push aligned text out of position.`);
    }
  }
  return failures;
}

function summarizeVisualReport(report) {
  const summaries = Array.isArray(report.slideSummaries) ? report.slideSummaries : [];
  const warnings = Array.isArray(report.warnings) ? report.warnings : [];
  return {
    captureMode: report.captureMode || null,
    slideCount: report.slideCount,
    textObjects: report.textObjects,
    shapeObjects: report.shapeObjects,
    imageObjects: report.imageObjects,
    warningCount: warnings.length,
    fallbackTextRiskCount: warnings.filter(warning => warning?.type === 'node-image-fallback-text-risk').length,
    slideSummaries: summaries.slice(0, 5),
  };
}

function runQuickLookVisualComparison(pptxFile, htmlScreenshot, visualDir) {
  if (!htmlScreenshot || !existsSync(htmlScreenshot)) return { available: false, reason: 'missing-html-screenshot' };
  if (!commandAvailable('qlmanage')) return { available: false, reason: 'qlmanage-not-found' };
  if (!commandAvailable('magick')) return { available: false, reason: 'magick-not-found' };
  const quickLookDir = path.join(visualDir, 'quicklook');
  const compareDir = path.join(visualDir, 'compare');
  rmSync(quickLookDir, { recursive: true, force: true });
  rmSync(compareDir, { recursive: true, force: true });
  mkdirSync(quickLookDir, { recursive: true });
  mkdirSync(compareDir, { recursive: true });
  const ql = spawnSync('qlmanage', ['-t', '-s', '960', '-o', quickLookDir, pptxFile], { encoding: 'utf8' });
  if (ql.status !== 0) return { available: false, reason: `qlmanage-failed:${ql.stderr || ql.stdout}` };
  const png = readdirSync(quickLookDir).find(name => name.endsWith('.png'));
  if (!png) return { available: false, reason: 'qlmanage-produced-no-png' };
  const pptxPreview = path.join(quickLookDir, png);
  const htmlNorm = path.join(compareDir, 'html-960.png');
  const pptxNorm = path.join(compareDir, 'pptx-960.png');
  const resizeHtml = spawnSync('magick', [htmlScreenshot, '-resize', '960x540!', htmlNorm], { encoding: 'utf8' });
  if (resizeHtml.status !== 0) return { available: false, reason: `html-resize-failed:${resizeHtml.stderr || resizeHtml.stdout}` };
  const resizePptx = spawnSync('magick', [pptxPreview, '-resize', '960x540!', pptxNorm], { encoding: 'utf8' });
  if (resizePptx.status !== 0) return { available: false, reason: `pptx-resize-failed:${resizePptx.stderr || resizePptx.stdout}` };
  const normalizedRmse = compareImageMetric('RMSE', htmlNorm, pptxNorm);
  const meanAbsoluteError = compareImageMetric('MAE', htmlNorm, pptxNorm);
  const htmlEdge = path.join(compareDir, 'html-edge.png');
  const pptxEdge = path.join(compareDir, 'pptx-edge.png');
  const edgeHtml = spawnSync('magick', [htmlNorm, '-colorspace', 'Gray', '-edge', '1', htmlEdge], { encoding: 'utf8' });
  if (edgeHtml.status !== 0) return { available: false, reason: `html-edge-failed:${edgeHtml.stderr || edgeHtml.stdout}` };
  const edgePptx = spawnSync('magick', [pptxNorm, '-colorspace', 'Gray', '-edge', '1', pptxEdge], { encoding: 'utf8' });
  if (edgePptx.status !== 0) return { available: false, reason: `pptx-edge-failed:${edgePptx.stderr || edgePptx.stdout}` };
  const edgeRmse = compareImageMetric('RMSE', htmlEdge, pptxEdge);
  if (![normalizedRmse, meanAbsoluteError, edgeRmse].every(Number.isFinite)) return { available: false, reason: 'image-metric-parse-failed' };
  return {
    available: true,
    normalizedRmse,
    edgeRmse,
    meanAbsoluteError,
    htmlImage: htmlNorm,
    pptxImage: pptxNorm,
    htmlEdge,
    pptxEdge,
  };
}

function compareImageMetric(metric, left, right) {
  const compare = spawnSync('magick', ['compare', '-metric', metric, left, right, 'null:'], { encoding: 'utf8' });
  const output = `${compare.stderr || ''}${compare.stdout || ''}`;
  const match = output.match(/\((0(?:\.\d+)?|1(?:\.0+)?)\)/);
  return match ? Number(match[1]) : Number.NaN;
}

function parseJsonProcessOutput(stdout, stderr) {
  const sources = [stdout || '', stderr || '', `${stdout || ''}\n${stderr || ''}`];
  for (const source of sources) {
    const combined = source.trim();
    if (combined.startsWith('{') && combined.endsWith('}')) {
      try {
        return JSON.parse(combined);
      } catch {}
    }
    const last = combined.lastIndexOf('}');
    if (last < 0) continue;
    const starts = [];
    for (let index = combined.lastIndexOf('\n{', last); index >= 0 && starts.length < 20; index = combined.lastIndexOf('\n{', index - 1)) {
      starts.push(index + 1);
    }
    starts.push(combined.indexOf('{'));
    for (const first of [...new Set(starts)].filter(index => index >= 0 && index < last)) {
      try {
        return JSON.parse(combined.slice(first, last + 1));
      } catch {}
    }
  }
  const combined = `${stdout || ''}\n${stderr || ''}`.trim();
  return { parseError: true, raw: combined.slice(0, 4000) };
}

function summarizeMatrixTheme(themePack, result, status) {
  const failures = Array.isArray(result?.failures) ? result.failures : [`validation process exited with status ${status}`];
  const samples = Array.isArray(result?.samples) ? result.samples.map(sample => ({
    index: sample.index,
    key: sample.key || '',
    label: sample.label || '',
    types: sample.types || [],
    htmlImage: sample.quickLook?.htmlImage || sample.htmlScreenshot || null,
    pptxImage: sample.quickLook?.pptxImage || null,
    pairImage: sample.pairImage || null,
    rmse: sample.quickLook?.normalizedRmse ?? null,
    edgeRmse: sample.quickLook?.edgeRmse ?? null,
    mae: sample.quickLook?.meanAbsoluteError ?? null,
    expected: sample.expected || null,
    pptx: sample.pptx || null,
  })) : [];
  return {
    themePack,
    passed: status === 0 && result?.passed === true,
    expectedSlides: result?.expectedSlides ?? null,
    failureCategories: categorizeFailures(failures, result),
    failures,
    samples,
    contactSheet: result?.contactSheet || null,
    fullDeck: result?.pptx || null,
    report: result?.report || null,
    validationAttempts: result?.validationAttempts ?? null,
    parseError: result?.parseError || false,
  };
}

function summarizeFallbackTextRisk(result, status) {
  return {
    passed: status === 0 && result?.passed === true,
    themePack: result?.themePack || 'theme03',
    riskCount: result?.riskCount ?? null,
    extractedCount: result?.extractedCount ?? null,
    expectedRiskCount: result?.expectedRiskCount ?? null,
    extracted: Array.isArray(result?.extracted) ? result.extracted.slice(0, 20) : [],
    risks: Array.isArray(result?.risks) ? result.risks.slice(0, 20) : [],
    failures: Array.isArray(result?.failures) ? result.failures : [`validation process exited with status ${status}`],
    parseError: result?.parseError || false,
  };
}

function categorizeFailures(failures, result) {
  const categories = new Set();
  const text = failures.join('\n');
  if (/text|foreground content|主体|editable text/i.test(text)) categories.add('content-loss');
  if (/RMSE|MAE|visual/i.test(text)) categories.add('visual-drift');
  if (/edge RMSE|align|layout|too wide|position/i.test(text)) categories.add('alignment-layout');
  if (/background|gradient|fill/i.test(text)) categories.add('background-fill');
  if (/SVG|canvas|fallback|image objects|media/i.test(text)) categories.add('complex-node-fallback');
  if (/Captured tree is too shallow|captured-tree|DOM/i.test(text)) categories.add('capture-depth');
  if (/animation|opacity|transition/i.test(text)) categories.add('animation-final-state');
  if (result?.report?.fallbackTextRiskCount > 0) categories.add('fallback-text-baked');
  return [...categories];
}

function commandAvailable(name) {
  return spawnSync('which', [name], { stdio: 'ignore' }).status === 0;
}

function inspectUiExportPath() {
  const html = readFileSync(TEMPLATE, 'utf8');
  const start = html.indexOf('window.__exportDeckPptx = async function');
  const end = html.indexOf('function buildEditablePptxExportSnapshot', start);
  const source = start >= 0 && end > start ? html.slice(start, end) : '';
  const failures = [];
  if (/response\.blob\s*\(/.test(source) || /downloadBlob\s*\(/.test(source)) {
    failures.push('UI PPTX export must not use response.blob() + downloadBlob() as the primary path.');
  }
  if (!/\/api\/export-editable-pptx/.test(source)) {
    failures.push('UI PPTX export must call the editable server export endpoint.');
  }
  if (!/downloadUrl/.test(source)) {
    failures.push('UI PPTX export must trigger a same-origin server download URL after editable export.');
  }
  return failures;
}

function validateDownloadedPptx(file, suggestedFilename) {
  const failures = [];
  if (!/\.pptx$/i.test(String(suggestedFilename || ''))) {
    failures.push(`Browser download filename should end with .pptx, got ${suggestedFilename || 'empty'}.`);
  }
  const header = readFileSync(file).subarray(0, PPTX_SIGNATURE.length);
  if (!header.equals(PPTX_SIGNATURE)) {
    failures.push('Browser download file does not have a PPTX/ZIP signature.');
  }
  return failures;
}

function validateDownloadHeaders(result) {
  const failures = [];
  if (!result) {
    failures.push('UI PPTX export did not expose a server download URL for header validation.');
    return failures;
  }
  if (result.statusCode !== 200) {
    failures.push(`Server download URL returned ${result.statusCode}, expected 200.`);
  }
  const disposition = String(result.headers?.['content-disposition'] || '');
  if (!/\battachment\b/i.test(disposition)) {
    failures.push(`Server download URL must use Content-Disposition attachment, got "${disposition || 'empty'}".`);
  }
  const type = String(result.headers?.['content-type'] || '');
  if (!/presentationml\.presentation/i.test(type)) {
    failures.push(`Server download URL should return PPTX content type, got "${type || 'empty'}".`);
  }
  return failures;
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

async function runLegacyRedValidation() {
  const staticFindings = inspectLegacyBrowserPptxPath();
  const { url, close } = await renderValidationDeck();
  const pptxFile = path.join(OUT_DIR, 'legacy-browser-export.pptx');
  const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
  let page;
  try {
    const context = await browser.newContext({
      acceptDownloads: true,
      viewport: { width: 1920, height: 1080 },
    });
    page = await context.newPage();
    page.setDefaultTimeout(45000);
    page.on('dialog', dialog => dialog.dismiss().catch(() => {}));
    await page.goto(`${url}?legacy_red=${Date.now()}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    const downloadPromise = page.waitForEvent('download', { timeout: 90000 });
    await page.evaluate(() => window.__exportDeckPptx?.());
    const download = await downloadPromise;
    await download.saveAs(pptxFile);
  } finally {
    await closePage(page);
    await closeBrowser(browser);
    await close();
  }

  const pptx = inspectPptx(pptxFile);
  const failures = [];
  if (staticFindings.usesHtmlToImage) failures.push('Legacy browser PPTX path calls htmlToImage.toPng / captureSlideImage.');
  if (staticFindings.usesFullSlideAddImage) failures.push('Legacy browser PPTX path writes each slide as a full-slide addImage.');
  if (pptx.textCount === 0) failures.push('Legacy browser PPTX export contains no editable text nodes in slide XML.');
  if (pptx.fullSlideImageOnlySlides.length) failures.push(`Legacy browser PPTX has full-slide-image-only pages: ${pptx.fullSlideImageOnlySlides.join(', ')}.`);

  console.error(JSON.stringify({
    mode: 'legacy-red',
    passed: false,
    expectedFailure: true,
    staticFindings,
    pptx: summarizeInspection(pptx),
    failures,
  }, null, 2));
  process.exit(1);
}

async function runEditableExportValidation() {
  const exportSource = readFileSync(path.join(ROOT, 'src/export-pptx/editable.mjs'), 'utf8');
  const staticFailures = inspectEditableExportSource(exportSource);
  const { url, close } = await renderValidationDeck();
  const pptxFile = path.join(OUT_DIR, 'editable-export.pptx');
  const reportFile = path.join(OUT_DIR, 'editable-export-report.json');
  const filteredPptxFile = path.join(OUT_DIR, 'editable-theme-filter-export.pptx');
  const filteredReportFile = path.join(OUT_DIR, 'editable-theme-filter-report.json');
  const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
  let page;
  let mutation = null;
  try {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
    });
    page = await context.newPage();
    page.setDefaultTimeout(45000);
    await page.goto(`${url}?editable_validation=${Date.now()}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    const visibleGuard = await runThemeFilterGuard(page, filteredPptxFile, filteredReportFile);
    if (!visibleGuard.passed) staticFailures.push(visibleGuard.message);

    mutation = await applyUserEdits(page);
    if (!mutation.textEdited) staticFailures.push('Validation could not simulate a user text edit.');
    if (!mutation.imageEdited) staticFailures.push('Validation could not simulate a user image slot edit.');

    const mod = await import(pathToFileURL(path.join(ROOT, 'src/export-pptx/editable.mjs')));
    const result = await mod.exportEditablePptxFromPage(page, {
      outFile: pptxFile,
      reportFile,
      title: 'JAD-64 Editable Export Validation',
      includeAllThemePacks: true,
    });
    if (result.slideCount !== EXPECTED_SLIDES) {
      staticFailures.push(`Editable exporter returned ${result.slideCount} slide(s), expected ${EXPECTED_SLIDES}.`);
    }
  } finally {
    await closePage(page);
    await closeBrowser(browser);
    await close();
  }

  const pptx = inspectPptx(pptxFile);
  const filteredPptx = inspectPptx(filteredPptxFile);
  const report = existsSync(reportFile) ? JSON.parse(readFileSync(reportFile, 'utf8')) : null;
  const failures = [
    ...staticFailures,
    ...validateEditablePptxInspection(pptx, {
      expectSlides: EXPECTED_SLIDES,
      mutation,
      requireEditedText: true,
      requireReplacementImage: true,
    }),
  ];
  if (filteredPptx.slideCount !== THEME_FILTER_EXPECTED_SLIDES) failures.push(`Default export ignored current theme filter: got ${filteredPptx.slideCount} slide(s), expected ${THEME_FILTER_EXPECTED_SLIDES}.`);
  if (!report?.warnings || !Array.isArray(report.warnings)) failures.push('Editable exporter did not write a warnings report.');

  const result = {
    mode: 'editable-export',
    passed: failures.length === 0,
    pptx: summarizeInspection(pptx),
    themeFilterGuard: summarizeInspection(filteredPptx),
    report: report ? {
      slideCount: report.slideCount,
      textObjects: report.textObjects,
      shapeObjects: report.shapeObjects,
      imageObjects: report.imageObjects,
      warningCount: report.warnings.length,
    } : null,
    failures,
  };

  if (failures.length) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

function validateEditablePptxInspection(pptx, { expectSlides, mutation, requireEditedText = false, requireReplacementImage = false } = {}) {
  const failures = [];
  if (expectSlides !== null && expectSlides !== undefined && pptx.slideCount !== expectSlides) failures.push(`PPTX has ${pptx.slideCount} slide(s), expected ${expectSlides}.`);
  if (pptx.textCount <= 0) failures.push('PPTX slide XML has no <a:t> editable text nodes.');
  if (pptx.textCount > 0 && pptx.autoFitTextCount <= 0) failures.push('PPTX slide XML has no auto-width text boxes (<a:spAutoFit/>).');
  if (expectSlides && pptx.textCount < expectSlides) failures.push(`PPTX has too few editable text nodes: ${pptx.textCount} for ${expectSlides} slide(s).`);
  if (requireEditedText && !pptx.allText.includes(EDITED_TEXT)) failures.push('User-edited text sentinel is missing from PPTX text nodes.');
  if (pptx.shapeCount <= 0) failures.push('PPTX slide XML has no shape objects.');
  if (expectSlides && pptx.shapeCount < expectSlides) failures.push(`PPTX has too few shape objects: ${pptx.shapeCount} for ${expectSlides} slide(s).`);
  if (pptx.pictureCount <= 0) failures.push('PPTX slide XML has no image objects.');
  if (requireReplacementImage) {
    if (!pptx.mediaHashes.includes(REPLACEMENT_IMAGE_HASH)) failures.push('Replacement image hash is missing from ppt/media/*.');
    if (REPLACEMENT_IMAGE_HASH === INITIAL_IMAGE_HASH) failures.push('Replacement image hash unexpectedly equals the initial image hash.');
    if (mutation?.imageSlideNumber && !pptx.slides[mutation.imageSlideNumber - 1]?.pictureMediaHashes.includes(REPLACEMENT_IMAGE_HASH)) {
      failures.push(`Replacement image is not referenced by target slide ${mutation.imageSlideNumber}.`);
    }
  }
  if (pptx.fullSlideImageOnlySlides.length) failures.push(`PPTX has full-slide-image-only pages: ${pptx.fullSlideImageOnlySlides.join(', ')}.`);
  if (expectSlides && pptx.uniqueSlideHashes !== expectSlides) failures.push('Slide XML content hashes repeat; page switching may have failed.');
  return failures;
}

function inspectLegacyBrowserPptxPath() {
  const html = readFileSync(TEMPLATE, 'utf8');
  const start = html.indexOf('window.__exportDeckPptx = async function');
  const end = html.indexOf('window.__exportDeckHtml', start);
  const source = start >= 0 && end > start ? html.slice(start, end) : '';
  return {
    hasExportFunction: start >= 0,
    usesHtmlToImage: /htmlToImage\.toPng|captureSlideImage/.test(source) && /loadExportScript\(['"]assets\/vendor\/html-to-image\.js/.test(source),
    usesFullSlideAddImage: /pptSlide\.addImage\(\{\s*data:\s*imageData,\s*x:\s*0,\s*y:\s*0,\s*w:\s*PPT_W,\s*h:\s*PPT_H\s*\}\)/.test(source),
  };
}

function inspectEditableExportSource(source) {
  const failures = [];
  if (/htmlToImage\.toPng|captureSlideImage/.test(source)) {
    failures.push('Editable export path must not call htmlToImage.toPng or captureSlideImage.');
  }
  if (/addImage\(\{[^}]*x:\s*0[^}]*y:\s*0[^}]*w:\s*(?:PPT_W|16)[^}]*h:\s*(?:PPT_H|9)/s.test(source)) {
    failures.push('Editable export path must not add a full-slide image.');
  }
  return failures;
}

async function renderValidationDeck() {
  cleanEditableExportValidationOutputs();
  mkdirSync(OUT_DIR, { recursive: true });
  const configFile = path.join(OUT_DIR, 'validation-deck.jsx');
  const indexFile = path.join(OUT_DIR, 'ppt/index.html');
  writeFileSync(configFile, createValidationDeckSource());
  const render = spawnSync(path.join(ROOT, 'node_modules/.bin/tsx'), [
    path.join(ROOT, 'scripts/render-deck.jsx'),
    configFile,
    indexFile,
  ], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (render.status !== 0) {
    throw new Error(`Validation deck render failed:\n${render.stdout}\n${render.stderr}`);
  }
  const server = await startStaticServer(path.dirname(indexFile));
  return server;
}

function cleanEditableExportValidationOutputs() {
  for (const name of [
    'editable-export.pptx',
    'editable-export-report.json',
    'editable-theme-filter-export.pptx',
    'editable-theme-filter-report.json',
    'validation-deck.jsx',
    'ppt',
  ]) {
    rmSync(path.join(OUT_DIR, name), { recursive: true, force: true });
  }
}

function createValidationDeckSource() {
  return `import { slide } from '../../src/options.jsx';

const initialImg = '${INITIAL_IMAGE}';

export default {
  title: 'JAD-64 Editable Export Validation',
  preview: { themeSwitcher: true },
  slides: [
    slide('theme01_page001', {
      title: 'Theme01 Editable Cover',
      titleLines: ['Theme01 Editable Cover', 'Text object baseline'],
    }),
    slide('theme01_page008', {
      title: 'Theme01 Image Slot Baseline',
      imageSlotCount: 1,
      images: [initialImg],
      caption: 'Theme01 image object baseline',
    }),
    slide('theme02_page001', {
      title: 'Theme02 Editable Cover',
      titleEm: 'Text object baseline',
      imageCount: 1,
      images: [initialImg],
    }),
    slide('theme02_page006', {
      title: 'Theme02 Shape Baseline',
      subtitle: 'Color blocks and text are exported as editable objects.',
    }),
    slide('theme03_page001', {
      title: 'Theme03 Editable Cover',
      imageCount: 1,
      images: [{ src: initialImg, kind: 'image' }],
    }),
    slide('theme03_page005', {
      title: 'Theme03 Image Baseline',
      imageCount: 1,
      images: [{ src: initialImg, kind: 'image' }],
    }),
  ],
};
`;
}

async function runThemeFilterGuard(page, outFile, reportFile) {
  const mod = await import(pathToFileURL(path.join(ROOT, 'src/export-pptx/editable.mjs')));
  await page.evaluate(async () => {
    window.__setActiveThemePack?.('theme02', { navigate: true });
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  const visibleCount = await page.evaluate(() => (window.__getVisibleSlides?.() || []).length);
  const result = await mod.exportEditablePptxFromPage(page, {
    outFile,
    reportFile,
    title: 'JAD-64 Theme Filter Guard',
  });
  await page.evaluate(async () => {
    window.__setActiveThemePack?.('', { navigate: true });
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  return {
    passed: visibleCount === THEME_FILTER_EXPECTED_SLIDES && result.slideCount === visibleCount,
    message: `Default export should preserve theme-filtered visible slides: visible=${visibleCount}, exported=${result.slideCount}.`,
  };
}

async function applyUserEdits(page) {
  return page.evaluate(({ text, image }) => {
    const result = { textEdited: false, imageEdited: false };
    window.go?.(0, { animate: false, force: true });
    const active = document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    const editable = active?.querySelector?.('[data-editable-id]');
    if (editable) {
      editable.textContent = text;
      editable.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: text }));
      window.__flushEditableTextState?.();
      window.__syncDeckViewModelFromDom?.();
      result.textEdited = true;
    }

    const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
    const targetIndex = slides.findIndex(slide => {
      const root = slide.querySelector?.('[data-prop-defaults]');
      if (!root) return false;
      try {
        const props = JSON.parse(root.dataset.propDefaults || '{}');
        return Array.isArray(props.images) || 'imageCount' in props || 'imageSlotCount' in props;
      } catch {
        return false;
      }
    });
    if (targetIndex >= 0) {
      const slide = slides[targetIndex];
      const root = slide.querySelector('[data-prop-defaults]');
      let props = {};
      try { props = JSON.parse(root.dataset.propDefaults || '{}') || {}; } catch {}
      const next = {
        ...props,
        imageCount: Number(props.imageCount || props.imageSlotCount || 1),
        imageSlotCount: Number(props.imageSlotCount || props.imageCount || 1),
        images: [{ src: image, kind: 'image' }, image],
      };
      window.__deckViewModel?.setProps?.(slide.dataset.vmSlideId, next);
      window.__renderRuntimeSlide?.(slide, next);
      window.__initEditableText?.(slide);
      window.go?.(targetIndex, { animate: false, force: true });
      result.imageEdited = !!slide.querySelector('img');
      result.imageSlideNumber = targetIndex + 1;
      window.go?.(0, { animate: false, force: true });
    }
    return result;
  }, { text: EDITED_TEXT, image: REPLACEMENT_IMAGE });
}

function inspectPptx(file) {
  if (!existsSync(file)) throw new Error(`Missing PPTX file: ${file}`);
  const entries = execFileSync('unzip', ['-Z1', file], { encoding: 'utf8' })
    .split(/\r?\n/)
    .filter(Boolean);
  const slideEntries = entries
    .filter(entry => /^ppt\/slides\/slide\d+\.xml$/.test(entry))
    .sort((a, b) => Number(a.match(/slide(\d+)\.xml/)?.[1] || 0) - Number(b.match(/slide(\d+)\.xml/)?.[1] || 0));
  const mediaEntries = entries.filter(entry => /^ppt\/media\/[^/]+$/.test(entry)).sort();
  const media = mediaEntries.map(entry => {
    const bytes = execFileSync('unzip', ['-p', file, entry], { encoding: 'buffer', maxBuffer: 20 * 1024 * 1024 });
    return { entry, hash: hashBuffer(bytes), size: bytes.length };
  });
  const mediaByEntry = new Map(media.map(item => [item.entry, item]));
  const slides = slideEntries.map((entry, index) => {
    const xml = execFileSync('unzip', ['-p', file, entry], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
    const relsEntry = `ppt/slides/_rels/slide${index + 1}.xml.rels`;
    const relsXml = entries.includes(relsEntry) ? execFileSync('unzip', ['-p', file, relsEntry], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 }) : '';
    return inspectSlideXml(xml, index + 1, relsXml, mediaByEntry);
  });
  const allText = slides.flatMap(slide => slide.text).join('\n');
  const hashes = new Set(slides.map(slide => slide.hash));
  return {
    file,
    slideCount: slides.length,
    slides,
    allText,
    textCount: slides.reduce((sum, slide) => sum + slide.text.length, 0),
    autoFitTextCount: slides.reduce((sum, slide) => sum + slide.autoFitTextCount, 0),
    shapeCount: slides.reduce((sum, slide) => sum + slide.shapeCount, 0),
    pictureCount: slides.reduce((sum, slide) => sum + slide.pictureCount, 0),
    media,
    mediaHashes: media.map(item => item.hash),
    fullSlideImageOnlySlides: slides.filter(slide => slide.fullSlideImageOnly).map(slide => slide.index),
    uniqueSlideHashes: hashes.size,
  };
}

function inspectSlideXml(xml, index, relsXml, mediaByEntry) {
  const text = [...xml.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)].map(match => decodeXml(match[1]));
  const textBoxes = [...xml.matchAll(/<p:sp\b[\s\S]*?<\/p:sp>/g)]
    .map(match => inspectTextBoxShape(match[0]))
    .filter(Boolean);
  const shapeCount = (xml.match(/<p:sp\b/g) || []).length;
  const autoFitTextCount = (xml.match(/<a:spAutoFit\/>/g) || []).length;
  const pictureCount = (xml.match(/<p:pic\b/g) || []).length;
  const pictures = [...xml.matchAll(/<p:pic\b[\s\S]*?<\/p:pic>/g)].map(match => {
    const ext = match[0].match(/<a:ext[^>]*\bcx="(\d+)"[^>]*\bcy="(\d+)"/);
    const embed = match[0].match(/r:embed="([^"]+)"/);
    const cx = Number(ext?.[1] || 0);
    const cy = Number(ext?.[2] || 0);
    return { cx, cy, rId: embed?.[1] || '', nearFullSlide: cx >= 0.9 * 16 * 914400 && cy >= 0.9 * 9 * 914400 };
  });
  const relTargets = parseSlideRelationships(relsXml);
  const pictureMediaHashes = pictures
    .map(picture => relTargets.get(picture.rId))
    .filter(Boolean)
    .map(target => mediaByEntry.get(target)?.hash)
    .filter(Boolean);
  return {
    index,
    text,
    textBoxes,
    autoFitTextCount,
    shapeCount,
    pictureCount,
    pictures,
    pictureMediaHashes,
    fullSlideImageOnly: text.length === 0 && shapeCount <= 1 && pictures.length === 1 && pictures[0].nearFullSlide,
    hash: createHash('sha256').update(xml.replace(/id="\d+"/g, 'id=""')).digest('hex'),
  };
}

function inspectTextBoxShape(xml) {
  const runs = [...xml.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)].map(match => decodeXml(match[1]));
  if (!runs.length) return null;
  const xfrm = xml.match(/<a:xfrm\b[\s\S]*?<a:off x="(\d+)" y="(\d+)"[\s\S]*?<a:ext cx="(\d+)" cy="(\d+)"/);
  if (!xfrm) return null;
  const align = xml.match(/<a:pPr\b[^>]*\balgn="([^"]+)"/)?.[1] || 'l';
  return {
    text: runs.join(''),
    align,
    x: Number(xfrm[1]) / EMU_PER_IN,
    y: Number(xfrm[2]) / EMU_PER_IN,
    w: Number(xfrm[3]) / EMU_PER_IN,
    h: Number(xfrm[4]) / EMU_PER_IN,
  };
}

function parseSlideRelationships(xml) {
  const out = new Map();
  for (const match of xml.matchAll(/<Relationship\b[^>]*\bId="([^"]+)"[^>]*\bTarget="([^"]+)"/g)) {
    const target = match[2].replace(/^\.\.\//, 'ppt/');
    out.set(match[1], target);
  }
  return out;
}

function summarizeInspection(pptx) {
  return {
    file: pptx.file,
    slideCount: pptx.slideCount,
    textCount: pptx.textCount,
    autoFitTextCount: pptx.autoFitTextCount,
    shapeCount: pptx.shapeCount,
    pictureCount: pptx.pictureCount,
    mediaCount: pptx.media.length,
    fullSlideImageOnlySlides: pptx.fullSlideImageOnlySlides,
    uniqueSlideHashes: pptx.uniqueSlideHashes,
  };
}

function hashBuffer(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function decodeXml(value) {
  return value
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&');
}

async function startStaticServer(rootDir) {
  const server = createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    const requested = path.resolve(rootDir, `.${pathname}`);
    const file = requested.startsWith(rootDir) && existsSync(requested) && !isDirectory(requested)
      ? requested
      : path.join(rootDir, 'index.html');
    const ext = path.extname(file).toLowerCase();
    const type = ext === '.js' ? 'text/javascript'
      : ext === '.css' ? 'text/css'
        : ext === '.json' ? 'application/json'
          : ext === '.png' ? 'image/png'
            : ext === '.svg' ? 'image/svg+xml'
              : 'text/html';
    res.writeHead(200, { 'content-type': type });
    res.end(readFileSync(file));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  return {
    url: `http://127.0.0.1:${port}/`,
    close: () => new Promise(resolve => server.close(resolve)),
  };
}

async function closePage(page) {
  try { await page?.close(); } catch {}
}

async function closeBrowser(browser) {
  if (!browser) return;
  const close = browser.close().catch(() => {});
  try {
    const result = await Promise.race([
      close.then(() => 'closed'),
      new Promise(resolve => setTimeout(() => resolve('timeout'), 5000)),
    ]);
    if (result === 'timeout') {
      try { browser.process?.()?.kill?.('SIGKILL'); } catch {}
      await Promise.race([
        close,
        new Promise(resolve => setTimeout(resolve, 1000)),
      ]);
    }
  } catch {}
}

function isDirectory(file) {
  try {
    return execFileSync('test', ['-d', file]).length === 0;
  } catch {
    return false;
  }
}

function getArg(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : null;
}

function safePathSegment(value) {
  return String(value || '').replace(/[^a-z0-9_-]+/gi, '-').replace(/^-+|-+$/g, '') || 'deck';
}
