import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { PDFDocument } from 'pdf-lib';
import { PNG } from 'pngjs';

const SOURCE_W = 1920;
const SOURCE_H = 1080;
const PDF_W = 16 * 72;
const PDF_H = 9 * 72;
const DEFAULT_BATCH_SIZE = 8;

export async function exportScreenshotPdfFromUrl(browser, url, options = {}) {
  const outFile = path.resolve(options.outFile || 'deck.pdf');
  const reportFile = options.reportFile ? path.resolve(options.reportFile) : null;
  const batchSize = Math.max(1, Math.min(20, Number(options.batchSize || DEFAULT_BATCH_SIZE)));
  const first = await openPreparedPage(browser, url, options);
  const totalSlides = first.count;
  await first.close();

  const pdf = await PDFDocument.create();
  pdf.setTitle(options.title || 'Deck PDF Export');
  pdf.setAuthor('Dashi PPT Skill');
  pdf.setSubject('Screenshot PDF export');

  const slideReports = [];
  const batches = [];
  for (let start = 0; start < totalSlides; start += batchSize) {
    batches.push({ start, end: Math.min(totalSlides, start + batchSize) });
  }

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex += 1) {
    const batch = batches[batchIndex];
    await emitProgress(options.onProgress, {
      stage: 'capturing',
      detail: `截图批次 ${batchIndex + 1}/${batches.length}`,
      percent: progressPercent(batch.start, totalSlides, 10, 78),
    });
    const prepared = await openPreparedPage(browser, url, options);
    try {
      for (let index = batch.start; index < batch.end; index += 1) {
        await emitProgress(options.onProgress, {
          stage: 'capturing',
          detail: `截取第 ${index + 1}/${totalSlides} 页`,
          percent: progressPercent(index, totalSlides, 12, 76),
        });
        const capture = await captureStableSlide(prepared.page, index, options);
        const image = await pdf.embedPng(capture.buffer);
        const page = pdf.addPage([PDF_W, PDF_H]);
        page.drawImage(image, { x: 0, y: 0, width: PDF_W, height: PDF_H });
        slideReports.push({
          index: index + 1,
          attempts: capture.attempts,
          finalizedAnimations: capture.finalizedAnimations,
          stability: capture.stability,
          pixel: capture.pixel,
        });
      }
    } finally {
      await prepared.close();
    }
  }

  mkdirSync(path.dirname(outFile), { recursive: true });
  await emitProgress(options.onProgress, { stage: 'saving', detail: '合成截图 PDF', percent: 88 });
  const bytes = await pdf.save();
  writeFileSync(outFile, bytes);

  const report = {
    screenshot: true,
    generationMode: batches.length > 1 ? 'chunked-screenshot' : 'screenshot',
    pages: totalSlides,
    batchSize,
    batches,
    slideReports,
    bytes: bytes.length,
  };
  if (reportFile) {
    mkdirSync(path.dirname(reportFile), { recursive: true });
    writeFileSync(reportFile, JSON.stringify(report, null, 2) + '\n');
  }
  await emitProgress(options.onProgress, { stage: 'ready', detail: '准备下载 PDF', percent: 98 });
  return { outFile, reportFile, ...report };
}

async function openPreparedPage(browser, url, options = {}) {
  const context = await browser.newContext({
    viewport: { width: SOURCE_W, height: SOURCE_H },
    deviceScaleFactor: 1,
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  page.setDefaultTimeout(options.timeout || 90000);
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
  if (options.snapshot) await applyDeckSnapshot(page, options.snapshot);
  await prepareDeckForScreenshotPdf(page);
  const count = await page.evaluate(() => (window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')]).length);
  return {
    page,
    count,
    close: async () => {
      await page.close().catch(() => {});
      await context.close().catch(() => {});
    },
  };
}

async function applyDeckSnapshot(page, snapshot) {
  await page.evaluate(async snapshot => {
    const state = snapshot?.state || {};
    if (snapshot?.themePack !== undefined) window.__setActiveThemePack?.(snapshot.themePack || '', { navigate: false });
    if (Array.isArray(state.slideOrder)) window.__deckViewModel?.setSlideOrder?.(state.slideOrder);
    if (Array.isArray(state.skippedSlides)) window.__deckViewModel?.setSkippedSlides?.(state.skippedSlides);
    if (Array.isArray(state.deletedSlides)) window.__deckViewModel?.setDeletedSlides?.(state.deletedSlides);
    if (state.text && typeof state.text === 'object') window.__deckViewModel?.setTextState?.(state.text);
    if (state.props && typeof state.props === 'object') {
      Object.entries(state.props).forEach(([slideId, props]) => window.__deckViewModel?.setProps?.(slideId, props));
    }
    window.__syncDeckViewModelFromDom?.();
    window.__layoutDeck?.();
    const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
    slides.forEach(slide => {
      window.__ensureRuntimeSlideRendered?.(slide);
      applySnapshotText(slide, state.text || {});
    });
    if (Array.isArray(snapshot?.canvasSnapshots)) {
      snapshot.canvasSnapshots.forEach(item => {
        const slide = slides[item.slideIndex];
        if (!slide || !item?.data) return;
        const original = slide.querySelectorAll?.('canvas')?.[item.canvasIndex];
        if (original) original.style.display = 'none';
        const img = document.createElement('img');
        img.src = item.data;
        img.setAttribute('data-pdf-canvas-snapshot', '');
        Object.assign(img.style, {
          position: 'absolute',
          left: `${item.left}%`,
          top: `${item.top}%`,
          width: `${item.width}%`,
          height: `${item.height}%`,
          zIndex: '2147480000',
          pointerEvents: 'none',
        });
        slide.appendChild(img);
      });
    }
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    function applySnapshotText(scope, textState) {
      if (!scope || !textState || typeof textState !== 'object') return;
      const elements = [
        ...(scope.dataset?.editableId ? [scope] : []),
        ...(scope.querySelectorAll?.('[data-editable-id]') || []),
      ];
      elements.forEach(el => {
        const synced = el.dataset.syncText ? textState[`sync:${el.dataset.syncText}`] : undefined;
        const value = synced !== undefined ? synced : textState[el.dataset.editableId];
        if (value !== undefined) el.innerHTML = value;
      });
    }
  }, snapshot);
}

async function prepareDeckForScreenshotPdf(page) {
  await page.evaluate(async () => {
    window.__deckExportLocked = true;
    window.setDeckMode?.('present');
    document.body.classList.remove('preview-panel-open');
    document.getElementById('preview-toggle')?.setAttribute('aria-expanded', 'false');
    window.__setEditableTextMode?.(false);
    window.__syncDeckPageNumbers?.();
    window.__flushEditableTextState?.();
    window.__syncDeckViewModelFromDom?.();
    window.__layoutDeck?.();
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}

async function captureStableSlide(page, index, options = {}) {
  let lastCapture = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const prep = await prepareSlideForScreenshot(page, index);
    const buffer = await page.locator('#deck > .slide.active').screenshot({
      type: 'png',
      animations: 'disabled',
      timeout: options.screenshotTimeout || 90000,
    });
    const pixel = analyzePng(buffer);
    lastCapture = {
      buffer,
      attempts: attempt,
      finalizedAnimations: prep.finalizedAnimations,
      stability: prep.stability,
      pixel,
    };
    if (!pixel.blank && pixel.uniqueColors >= 6 && prep.stability?.contentAreaRatio > 0.2) return lastCapture;
    await page.waitForTimeout(120);
  }
  return lastCapture;
}

async function prepareSlideForScreenshot(page, index) {
  return page.evaluate(async index => {
    const waitFrame = () => new Promise(resolve => requestAnimationFrame(resolve));
    const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
    window.go?.(index, { animate: false, force: true });
    await waitFrame();
    await waitFrame();
    const slide = slides[index] || document.querySelector('#deck > .slide.active');
    if (!slide) throw new Error(`Slide ${index + 1} not found`);
    slides.forEach((item, slideIndex) => {
      const active = slideIndex === index;
      item.classList.toggle('active', active);
      if (active) item.setAttribute('data-deck-active', '');
      else item.removeAttribute('data-deck-active');
    });
    window.__ensureRuntimeSlideRendered?.(slide);
    window.__restoreEffectIframes?.(slide);
    window.__syncDeckPageNumbers?.(slide);
    window.__layoutDeck?.();
    window.__initUnicornScenes?.(slide, { force: true });
    await waitForFonts();
    await waitForVisibleMedia(slide);
    await waitFrame();
    const finalizedAnimations = finishScreenshotAnimations(slide);
    await waitFrame();
    const stability = await waitForStableSlideContent(slide);
    return { finalizedAnimations, stability };

    async function waitForFonts() {
      if (!document.fonts?.ready) return;
      await Promise.race([
        document.fonts.ready.catch(() => {}),
        new Promise(resolve => setTimeout(resolve, 2500)),
      ]);
    }

    async function waitForVisibleMedia(root) {
      const images = [...root.querySelectorAll('img')].filter(img => {
        const rect = img.getBoundingClientRect();
        return rect.width > 1 && rect.height > 1 && !img.complete;
      });
      const videos = [...root.querySelectorAll('video')].filter(video => {
        const rect = video.getBoundingClientRect();
        return rect.width > 1 && rect.height > 1 && video.readyState < 2;
      });
      videos.forEach(video => video.load?.());
      await Promise.race([
        Promise.all([
          ...images.map(img => new Promise(resolve => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
          })),
          ...videos.map(video => new Promise(resolve => {
            video.addEventListener('loadeddata', resolve, { once: true });
            video.addEventListener('error', resolve, { once: true });
          })),
        ]),
        new Promise(resolve => setTimeout(resolve, 3000)),
      ]);
      const unicornFrames = [...root.querySelectorAll('.bt-unicorn-frame[data-unicorn-json-file-path],.bt-unicorn-frame[data-unicorn-project-id]')]
        .filter(frame => !frame.closest('.bt-image-slot.has-user-image,.bt-image-slot.has-user-media'));
      if (unicornFrames.length) {
        const started = performance.now();
        while (performance.now() - started < 5000) {
          if (unicornFrames.every(frame => frame.dataset.unicornReady || frame.querySelector('canvas'))) break;
          await waitFrame();
        }
      }
    }

    function finishScreenshotAnimations(root) {
      let finalized = 0;
      const animations = root.getAnimations?.({ subtree: true }) || [];
      animations.forEach(animation => {
        const timing = animation.effect?.getComputedTiming?.();
        const endTime = Number(timing?.endTime);
        try {
          if (Number.isFinite(endTime) && endTime > 0) {
            animation.finish();
            finalized += 1;
          } else {
            animation.pause();
          }
        } catch {}
      });
      try {
        const tweens = window.gsap?.globalTimeline?.getChildren?.(true, true, true) || [];
        tweens.forEach(tween => {
          const targets = typeof tween.targets === 'function' ? tween.targets() : [];
          if (!targets.some(target => target instanceof Node && root.contains(target))) return;
          const duration = Number(tween.totalDuration?.());
          if (Number.isFinite(duration) && duration > 0) {
            tween.progress?.(1);
            finalized += 1;
          }
          tween.pause?.();
        });
      } catch {}
      return finalized;
    }

    async function waitForStableSlideContent(root) {
      let previous = null;
      let stableFrames = 0;
      let current = collectContentSignature(root);
      for (let frame = 0; frame < 24; frame += 1) {
        await waitFrame();
        current = collectContentSignature(root);
        if (previous && signaturesClose(previous, current) && current.contentAreaRatio > 0.2) {
          stableFrames += 1;
          if (stableFrames >= 2) return { ...current, stableFrames };
        } else {
          stableFrames = 0;
        }
        previous = current;
      }
      return { ...current, stableFrames };
    }

    function collectContentSignature(root) {
      const slideRect = root.getBoundingClientRect();
      const elements = [
        root,
        ...root.querySelectorAll('*'),
      ];
      let count = 0;
      let area = 0;
      let left = slideRect.right;
      let top = slideRect.bottom;
      let right = slideRect.left;
      let bottom = slideRect.top;
      elements.forEach(el => {
        if (!(el instanceof Element)) return;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(el.tagName)) return;
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity || 1) <= 0.01) return;
        const rect = el.getBoundingClientRect();
        const w = Math.max(0, Math.min(rect.right, slideRect.right) - Math.max(rect.left, slideRect.left));
        const h = Math.max(0, Math.min(rect.bottom, slideRect.bottom) - Math.max(rect.top, slideRect.top));
        if (w <= 1 || h <= 1) return;
        count += 1;
        area += w * h;
        left = Math.min(left, rect.left);
        top = Math.min(top, rect.top);
        right = Math.max(right, rect.right);
        bottom = Math.max(bottom, rect.bottom);
      });
      const slideArea = Math.max(1, slideRect.width * slideRect.height);
      return {
        count,
        area: Math.round(area),
        contentAreaRatio: Number(Math.min(1, area / slideArea).toFixed(4)),
        bbox: {
          left: Math.round(left - slideRect.left),
          top: Math.round(top - slideRect.top),
          right: Math.round(right - slideRect.left),
          bottom: Math.round(bottom - slideRect.top),
        },
      };
    }

    function signaturesClose(a, b) {
      return Math.abs(a.count - b.count) <= 2
        && Math.abs(a.area - b.area) <= 4
        && Math.abs(a.bbox.left - b.bbox.left) <= 1
        && Math.abs(a.bbox.top - b.bbox.top) <= 1
        && Math.abs(a.bbox.right - b.bbox.right) <= 1
        && Math.abs(a.bbox.bottom - b.bbox.bottom) <= 1;
    }
  }, index);
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
  const index = (y * png.width + x) * 4;
  return {
    r: png.data[index],
    g: png.data[index + 1],
    b: png.data[index + 2],
    a: png.data[index + 3],
  };
}

function progressPercent(index, total, start, range) {
  return start + Math.round((index / Math.max(1, total)) * range);
}

async function emitProgress(onProgress, update) {
  if (typeof onProgress !== 'function') return;
  try {
    await onProgress(update);
  } catch {}
}
