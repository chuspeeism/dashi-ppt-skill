import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { PNG } from 'pngjs';
import {
  STYLE_KEYS,
  collectActiveSlide,
  captureElement,
  capturePseudoElement,
  pseudoRect,
  captureWholeTextElement,
  isInlineTextChild,
  hasInlineVisualTreatment,
  captureTextNode,
  splitWrappedTextNode,
  groupLineRects,
  lineIndexForRect,
  rangeBoundsForOffsets,
  effectiveTextStyle,
  elementRenderRect,
  visualEffectRect,
  svgVisualRect,
  expandedClampedRect,
  shadowOutsetPx,
  splitShadowLayers,
  visualScreenshotFallbackKind,
  visualScreenshotRect,
  hasCssMask,
  visibleElementChildren,
  shouldScreenshotBlendGroup,
  shouldScreenshotRoundedVisual,
  cornerRadiiPx,
  hasNonUniformCssRadius,
  hasRoundedClipStyle,
  shouldScreenshotGradientEffect,
  shouldUseLocalMaterialFallback,
  isEditableTextContainer,
  isInsideEditableTextContainer,
  hasOnlyInlineTextChildren,
  isInlineTextOnlyElement,
  shouldSkipDecorativeGradientFallback,
  backgroundHasTransparentStop,
  transparentCssPaint,
  hasTextPaintSource,
  readStyle,
  styleWithCumulativeRotation,
  cumulativeRotation,
  summarizeCapturedTree,
  summarizeNode,
  elementImageData,
  svgElementData,
  collectSvgTextNodes,
  cloneSvgWithComputedStyle,
  patternBackgroundImageData,
  parseRepeatingGradient,
  backgroundCropForClippedRect,
  gradientBackgroundImageData,
  drawLinearGradient,
  drawRadialGradient,
  splitCssLayers,
  splitCssArgs,
  parseGradientColorStops,
  parseGradientColorStop,
  parseCanvasColor,
  cssColorComponent,
  cssAlpha,
  parseGradientPosition,
  normalizeGradientStops,
  rgbaString,
  roundedRectPath,
  backgroundUrl,
  isTurbulenceDataImage,
  maxCssRadius,
  cssRadiusPx,
  finishEditablePptxAnimations,
  markUnicornOverlayText,
  fallbackTextRisk,
  visibleTextInSubtree,
  visibleTextInScreenshotRect,
  visibleOverlayPaintInScreenshotRect,
  collectDomFallbackTextNodes,
  svgTextRisk,
  fetchImageDataUrl,
  normalizeDataImageUrl,
  rasterizeSvgDataUrl,
  blobToDataUrl,
  isVisibleElement,
  isMediaChrome,
  shouldScreenshotImageSlot,
  isImageSlotElement,
  hasTransformedAncestor,
  isRotatedOrSkewedTransform,
  clippedRect,
  slideClipRect,
  intersectClientRect,
  nextChildClipRect,
  hasClipStyle,
  sameClientRect,
  rectObject,
  normalizeText,
  hasPaint,
  hasAnyBorder,
  cssPx,
  cssLengthPx,
  translateFromTransform,
  isTextClippedBackground,
  shouldUseNativeGradientShape,
  isLowAlphaLinearGradient,
  rotateFromTransform,
  scaleFromTransform,
  hideNodeForScreenshot,
  applyEditablePptxSnapshot,
  restoreHiddenScreenshotStyles,
} from './collector-functions.mjs';
import {
  SOURCE_W,
  SOURCE_H,
  PPT_W,
  PPT_H,
  emitProgress,
  shouldUseAlphaMatteScreenshot,
  shouldApplyNodeRadiusAlphaMask,
  walkCapturedNodes,
  screenshotClip,
  renderCapturedNode,
  buildEditablePptx,
  configureImageAdapter,
  __pptxFontTestables,
} from './editable-core.mjs';

// pptxgenjs ships a real ESM build (`export { PptxGenJS as default }`) selected via
// the package's "import" export condition. Under Node's own loader this resolves
// to a plain constructor, but under loaders that re-wrap ESM/CJS interop (e.g. the
// tsx runtime used elsewhere in this repo for .jsx entry points) the default
// binding can come back double-wrapped as a non-constructible namespace object
// (`{ default: [Function] }` instead of `[Function]`). Loading via `require()`
// side-steps that interop layer entirely — CommonJS resolution is unambiguous
// across loaders — so the constructor is reliable regardless of how this module
// itself was imported.
const require = createRequire(import.meta.url);
const PptxGenJS = require('pptxgenjs');


export async function exportEditablePptxFromPage(page, options = {}) {
  const outFile = path.resolve(options.outFile || 'editable-export.pptx');
  const reportFile = options.reportFile ? path.resolve(options.reportFile) : null;
  const title = options.title || 'Editable Deck Export';
  await emitProgress(options.onProgress, { stage: 'collecting', detail: '采集页面结构', percent: 14 });
  const deck = await collectEditableDeck(page, options);

  const { pptx, warnings, totals, slideSummaries } = await buildEditablePptx(PptxGenJS, deck, {
    title,
    onProgress: options.onProgress,
  });

  mkdirSync(path.dirname(outFile), { recursive: true });
  await emitProgress(options.onProgress, { stage: 'saving', detail: '保存 PPTX 文件', percent: 92 });
  await pptx.writeFile({ fileName: outFile });

  const report = {
    captureMode: 'captured-tree',
    slideCount: deck.slides.length,
    textObjects: totals.textObjects,
    shapeObjects: totals.shapeObjects,
    imageObjects: totals.imageObjects,
    slideSummaries,
    warnings,
  };
  if (reportFile) {
    mkdirSync(path.dirname(reportFile), { recursive: true });
    writeFileSync(reportFile, JSON.stringify(report, null, 2) + '\n');
  }
  await emitProgress(options.onProgress, { stage: 'ready', detail: '准备下载文件', percent: 98 });
  return { outFile, reportFile, ...report };
}

export async function exportEditablePptxFromUrl(browser, url, options = {}) {
  const context = await browser.newContext({ viewport: { width: SOURCE_W, height: SOURCE_H }, ignoreHTTPSErrors: true });
  const page = await context.newPage();
  try {
    page.setDefaultTimeout(options.timeout || 45000);
    await emitProgress(options.onProgress, { stage: 'opening', detail: '打开预览页面', percent: 8 });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    // JAD-183:消费者侧的 deck DOM 契约可配置(默认值即本仓 deck 的结构),为抽包做准备。
    await page.waitForSelector(options.activeSlideSelector || '#deck > .slide.active, #deck > .slide[data-deck-active]');
    await emitProgress(options.onProgress, { stage: 'preparing', detail: '准备导出页面状态', percent: 12 });
    if (options.snapshot) await applyDeckSnapshot(page, options.snapshot);
    return await exportEditablePptxFromPage(page, options);
  } finally {
    await page.close().catch(() => {});
    await context.close().catch(() => {});
  }
}


async function applyDeckSnapshot(page, snapshot) {
  await page.evaluate(applyEditablePptxSnapshot, snapshot);
}

async function collectEditableDeck(page, options = {}) {
  await page.evaluate(async ({ includeAllThemePacks }) => {
    window.__editablePptxRestoreState = {
      locked: window.__deckExportLocked,
      themePack: document.documentElement.dataset.themePack || '',
    };
    if (includeAllThemePacks) window.__setActiveThemePack?.('', { navigate: false });
    window.__deckExportLocked = true;
    // The preview chrome rounds the deck viewport for looks; keep that cosmetic
    // rounding out of exported slides / fallback screenshots.
    if (!document.getElementById('dashi-export-no-radius')) {
      const style = document.createElement('style');
      style.id = 'dashi-export-no-radius';
      style.textContent = '#deck-viewport,#deck,#deck>.slide{border-radius:0!important}';
      document.head.appendChild(style);
    }
    window.__flushEditableTextState?.();
    window.__syncDeckViewModelFromDom?.();
    window.__setEditableTextMode?.(false);
    window.__layoutDeck?.();
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  }, { includeAllThemePacks: options.includeAllThemePacks === true });

  try {
    const count = await page.evaluate(() => {
      const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
      return slides.length;
    });

    await installBrowserCollector(page);
    const slides = [];
    const warnings = [];
    const slideIndexes = Array.isArray(options.slideIndexes)
      ? options.slideIndexes
        .map(index => Number(index))
        .filter(index => Number.isInteger(index) && index >= 0 && index < count)
      : null;
    const indexes = slideIndexes?.length ? slideIndexes : Array.from({ length: count }, (_, index) => index);
    for (const i of indexes) {
      await emitProgress(options.onProgress, {
        stage: 'collecting',
        detail: `采集页面结构 ${i + 1}/${count}`,
        percent: 16 + Math.round(((indexes.indexOf(i)) / Math.max(1, indexes.length)) * 48),
      });
      await page.evaluate(async index => {
        window.go?.(index, { animate: false, force: true });
        const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
        window.__ensureRuntimeSlideRendered?.(slides[index]);
        window.__applyEditablePptxSnapshotText?.(slides[index]);
        window.__restoreEffectIframes?.(slides[index]);
        window.__layoutDeck?.();
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        window.__finishEditablePptxAnimations?.(slides[index] || document);
        await new Promise(resolve => requestAnimationFrame(resolve));
        await new Promise(resolve => setTimeout(resolve, 120));
      }, i);
      const slideData = await page.evaluate(index => window.__collectEditablePptxSlide(index), i + 1);
      await resolveElementScreenshots(page, slideData.root, warnings, {
        freeze: options.freezeElementScreenshots === true,
      });
      slides.push(slideData);
    }

    return { slides, warnings };
  } finally {
    await page.evaluate(async () => {
      const restore = window.__editablePptxRestoreState || {};
      if ((document.documentElement.dataset.themePack || '') !== (restore.themePack || '')) {
        window.__setActiveThemePack?.(restore.themePack || '', { navigate: false });
      }
      window.__deckExportLocked = Boolean(restore.locked);
      window.__setEditableTextMode?.(window.__canEditDeck?.());
      delete window.__editablePptxSnapshotTextState;
      delete window.__applyEditablePptxSnapshotText;
      delete window.__editablePptxRestoreState;
      window.__layoutDeck?.();
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }).catch(() => {});
  }
}

async function resolveElementScreenshots(page, root, warnings, options = {}) {
  const targets = [];
  walkCapturedNodes(root, node => {
    if (node.elementScreenshot && node.exportId) targets.push(node);
  });
  for (const node of targets) {
    let hiddenToken = null;
    try {
      if (node.stripTextForScreenshot || node.stripOverlayForScreenshot) {
        hiddenToken = await page.evaluate(hideNodeForScreenshot, {
          exportId: node.exportId,
          mode: node.screenshotMode || (node.imageKind === 'unicorn-background' ? 'screenshot-rect' : 'descendant'),
          stripText: Boolean(node.stripTextForScreenshot),
          stripOverlay: Boolean(node.stripOverlayForScreenshot),
          screenshotRect: node.screenshotRect || null,
        });
      }
      if (hiddenToken) {
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      }
      const locator = page.locator(`#deck > .slide.active [data-editable-pptx-export-id="${node.exportId}"], #deck > .slide[data-deck-active] [data-editable-pptx-export-id="${node.exportId}"]`).first();
      const clip = node.screenshotRect ? screenshotClip(node.screenshotRect) : null;
      let bytes = null;
      if (shouldUseAlphaMatteScreenshot(node)) {
        bytes = await captureAlphaMatteScreenshot(page, locator, node.exportId, node.imageKind, clip).catch(() => null);
        if (!bytes) warnings.push({ slide: node.slideIndex, type: 'alpha-matte-screenshot-failed', tag: node.tag, kind: node.imageKind });
      }
      if (!bytes) bytes = clip ? await page.screenshot({ type: 'png', clip }) : await locator.screenshot({ type: 'png' });
      if (node.elementScreenshot && shouldApplyNodeRadiusAlphaMask(node)) bytes = applyNodeRadiusAlphaMask(bytes, node);
      node.imageData = pngBufferToDataUrl(bytes);
      if (hiddenToken) {
        await page.evaluate(restoreHiddenScreenshotStyles, hiddenToken).catch(() => {});
        hiddenToken = null;
      }
      if (!options.freeze) continue;
      await page.evaluate(({ exportId, data }) => {
        const el = document.querySelector(`#deck > .slide.active [data-editable-pptx-export-id="${exportId}"], #deck > .slide[data-deck-active] [data-editable-pptx-export-id="${exportId}"]`)
          || document.querySelector(`[data-editable-pptx-export-id="${exportId}"]`);
        if (!el) return;
        el.replaceChildren();
        const img = document.createElement('img');
        img.src = data;
        img.setAttribute('data-editable-pptx-frozen-layer', '');
        Object.assign(img.style, {
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        });
        el.appendChild(img);
      }, { exportId: node.exportId, data: node.imageData });
    } catch {
      warnings.push({ slide: node.slideIndex, type: 'element-screenshot-failed', tag: node.tag, kind: node.imageKind });
    } finally {
      if (hiddenToken) {
        await page.evaluate(restoreHiddenScreenshotStyles, hiddenToken).catch(() => {});
      }
    }
  }
}



async function captureAlphaMatteScreenshot(page, locator, exportId, imageKind, clip = null) {
  let token = null;
  try {
    token = await page.evaluate(({ exportId, imageKind }) => {
      const root = document.querySelector(`#deck > .slide.active [data-editable-pptx-export-id="${exportId}"], #deck > .slide[data-deck-active] [data-editable-pptx-export-id="${exportId}"]`)
        || document.querySelector(`[data-editable-pptx-export-id="${exportId}"]`);
      if (!root) return null;
      const slide = root.closest('#deck > .slide') || document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
      if (!slide) return null;
      const token = `alpha-matte-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const entries = [];
      const matteEls = [document.documentElement, document.body, slide].filter(Boolean);
      const remember = (el) => {
        if (!el || entries.some(entry => entry.el === el)) return;
        entries.push({ el, style: el.getAttribute('style') });
      };
      const setStyle = (el, name, value) => {
        remember(el);
        el.style.setProperty(name, value, 'important');
      };
      const neutralizeAncestor = (el) => {
        setStyle(el, 'background-image', 'none');
        setStyle(el, 'background-color', 'transparent');
        setStyle(el, 'box-shadow', 'none');
        setStyle(el, 'border-color', 'transparent');
      };
      neutralizeAncestor(document.documentElement);
      neutralizeAncestor(document.body);
      [...slide.querySelectorAll('*')].forEach(el => {
        if (el === root || root.contains(el)) return;
        if (el.contains(root)) neutralizeAncestor(el);
        else setStyle(el, 'opacity', '0');
      });
      setStyle(slide, 'background-image', 'none');
      setStyle(slide, 'background-color', '#000');
      setStyle(slide, 'box-shadow', 'none');
      setStyle(root, 'mix-blend-mode', 'normal');
      if (imageKind === 'unicorn-background') {
        setStyle(root, 'background-image', 'none');
        setStyle(root, 'background-color', 'transparent');
      }
      for (const el of matteEls) setStyle(el, 'background-color', '#000');
      window.__editablePptxAlphaMatteStyles ||= new Map();
      window.__editablePptxAlphaMatteStyles.set(token, { entries, matteEls });
      return token;
    }, { exportId, imageKind });
    if (!token) return null;
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const shoot = () => clip ? page.screenshot({ type: 'png', clip }) : locator.screenshot({ type: 'png' });
    const blackBytes = await shoot();
    await page.evaluate(({ token, color }) => {
      const state = window.__editablePptxAlphaMatteStyles?.get(token);
      if (!state) return;
      for (const el of state.matteEls || []) {
        el.style.setProperty('background-color', color, 'important');
      }
    }, { token, color: '#fff' });
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const whiteBytes = await shoot();
    return composeAlphaMattePng(blackBytes, whiteBytes);
  } finally {
    if (token) {
      await page.evaluate(token => {
        const state = window.__editablePptxAlphaMatteStyles?.get(token);
        const entries = state?.entries || [];
        for (const entry of entries) {
          if (entry.style == null) entry.el.removeAttribute('style');
          else entry.el.setAttribute('style', entry.style);
        }
        window.__editablePptxAlphaMatteStyles?.delete(token);
      }, token).catch(() => {});
    }
  }
}

function composeAlphaMattePng(blackBytes, whiteBytes) {
  const black = PNG.sync.read(Buffer.from(blackBytes));
  const white = PNG.sync.read(Buffer.from(whiteBytes));
  if (black.width !== white.width || black.height !== white.height) throw new Error('Alpha matte screenshot dimensions differ.');
  const out = new PNG({ width: black.width, height: black.height });
  for (let i = 0; i < black.data.length; i += 4) {
    const br = black.data[i];
    const bg = black.data[i + 1];
    const bb = black.data[i + 2];
    const wr = white.data[i];
    const wg = white.data[i + 1];
    const wb = white.data[i + 2];
    const delta = ((wr - br) + (wg - bg) + (wb - bb)) / 3;
    let alpha = Math.round(255 - delta);
    alpha = Math.max(0, Math.min(255, alpha));
    if (alpha <= 2) {
      out.data[i] = 0;
      out.data[i + 1] = 0;
      out.data[i + 2] = 0;
      out.data[i + 3] = 0;
      continue;
    }
    if (alpha >= 253) alpha = 255;
    const scale = 255 / alpha;
    out.data[i] = clampByte(Math.round(br * scale));
    out.data[i + 1] = clampByte(Math.round(bg * scale));
    out.data[i + 2] = clampByte(Math.round(bb * scale));
    out.data[i + 3] = alpha;
  }
  bleedTransparentRgb(out);
  return PNG.sync.write(out);
}

function applyNodeRadiusAlphaMask(bytes, node) {
  const radius = maxCssRadius(node?.style || {}, node?.rect?.w || 0, node?.rect?.h || 0);
  if (radius <= 0) return bytes;
  try {
    const image = PNG.sync.read(Buffer.from(bytes));
    const scaleX = image.width / Math.max(1, Number(node?.rect?.w || image.width));
    const scaleY = image.height / Math.max(1, Number(node?.rect?.h || image.height));
    const radiusPx = Math.min(image.width / 2, image.height / 2, radius * Math.max(scaleX, scaleY));
    if (radiusPx <= 0) return bytes;
    applyRoundedAlphaMask(image, radiusPx);
    trimLowAlphaEdges(image);
    bleedTransparentRgb(image);
    return PNG.sync.write(image);
  } catch {
    return bytes;
  }
}

function applyRoundedAlphaMask(image, radius) {
  const { width, height, data } = image;
  const rx = Math.min(radius, width / 2);
  const ry = Math.min(radius, height / 2);
  const r = Math.min(rx, ry);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const px = x + 0.5;
      const py = y + 0.5;
      let coverage = 1;
      const cx = px < rx ? rx : px > width - rx ? width - rx : px;
      const cy = py < ry ? ry : py > height - ry ? height - ry : py;
      if (cx !== px || cy !== py) {
        const dist = Math.hypot(px - cx, py - cy);
        coverage = Math.max(0, Math.min(1, r + 0.5 - dist));
      }
      if (coverage >= 1) continue;
      const index = (y * width + x) * 4 + 3;
      data[index] = Math.round(data[index] * coverage);
    }
  }
}

function trimLowAlphaEdges(image, threshold = 18) {
  const { width, height, data } = image;
  const total = width * height;
  const seen = new Uint8Array(total);
  const queue = new Int32Array(total);
  let head = 0;
  let tail = 0;
  const push = (index) => {
    if (index < 0 || index >= total || seen[index]) return;
    if (data[index * 4 + 3] > threshold) return;
    seen[index] = 1;
    queue[tail++] = index;
  };
  for (let x = 0; x < width; x += 1) {
    push(x);
    push((height - 1) * width + x);
  }
  for (let y = 1; y < height - 1; y += 1) {
    push(y * width);
    push(y * width + width - 1);
  }
  while (head < tail) {
    const index = queue[head++];
    data[index * 4 + 3] = 0;
    const x = index % width;
    const y = Math.floor(index / width);
    if (x > 0) push(index - 1);
    if (x < width - 1) push(index + 1);
    if (y > 0) push(index - width);
    if (y < height - 1) push(index + width);
  }
}

function bleedTransparentRgb(image) {
  const { width, height, data } = image;
  const total = width * height;
  const seen = new Uint8Array(total);
  const queue = new Int32Array(total);
  let head = 0;
  let tail = 0;
  for (let index = 0; index < total; index += 1) {
    if (data[index * 4 + 3] <= 12) continue;
    seen[index] = 1;
    queue[tail++] = index;
  }
  while (head < tail) {
    const index = queue[head++];
    const x = index % width;
    const y = Math.floor(index / width);
    const base = index * 4;
    const neighbors = [
      x > 0 ? index - 1 : -1,
      x < width - 1 ? index + 1 : -1,
      y > 0 ? index - width : -1,
      y < height - 1 ? index + width : -1,
    ];
    for (const neighbor of neighbors) {
      if (neighbor < 0 || seen[neighbor]) continue;
      const target = neighbor * 4;
      data[target] = data[base];
      data[target + 1] = data[base + 1];
      data[target + 2] = data[base + 2];
      seen[neighbor] = 1;
      queue[tail++] = neighbor;
    }
  }
}

function clampByte(value) {
  return Math.max(0, Math.min(255, value));
}

function pngBufferToDataUrl(bytes) {
  return `data:image/png;base64,${Buffer.from(bytes).toString('base64')}`;
}



async function installBrowserCollector(page) {
  await page.addScriptTag({
    content: `
      window.__collectEditablePptxSlide = (() => {
        const STYLE_KEYS = ${JSON.stringify(STYLE_KEYS)};
        ${collectActiveSlide.toString()}
        ${captureElement.toString()}
        ${capturePseudoElement.toString()}
        ${styleWithCumulativeRotation.toString()}
        ${cumulativeRotation.toString()}
        ${pseudoRect.toString()}
        ${captureWholeTextElement.toString()}
        ${isInlineTextChild.toString()}
        ${hasInlineVisualTreatment.toString()}
        ${captureTextNode.toString()}
        ${splitWrappedTextNode.toString()}
        ${groupLineRects.toString()}
        ${lineIndexForRect.toString()}
        ${rangeBoundsForOffsets.toString()}
        ${effectiveTextStyle.toString()}
        ${elementRenderRect.toString()}
        ${visualEffectRect.toString()}
        ${svgVisualRect.toString()}
        ${expandedClampedRect.toString()}
        ${shadowOutsetPx.toString()}
        ${splitShadowLayers.toString()}
        ${visualScreenshotFallbackKind.toString()}
        ${visualScreenshotRect.toString()}
        ${hasCssMask.toString()}
        ${visibleElementChildren.toString()}
        ${shouldScreenshotBlendGroup.toString()}
        ${shouldScreenshotRoundedVisual.toString()}
        ${cornerRadiiPx.toString()}
        ${hasNonUniformCssRadius.toString()}
        ${hasRoundedClipStyle.toString()}
        ${shouldScreenshotGradientEffect.toString()}
        ${shouldUseLocalMaterialFallback.toString()}
        ${isEditableTextContainer.toString()}
        ${isInsideEditableTextContainer.toString()}
        ${hasOnlyInlineTextChildren.toString()}
        ${isInlineTextOnlyElement.toString()}
        ${shouldSkipDecorativeGradientFallback.toString()}
        ${backgroundHasTransparentStop.toString()}
        ${transparentCssPaint.toString()}
        ${hasTextPaintSource.toString()}
        ${isLowAlphaLinearGradient.toString()}
        ${readStyle.toString()}
        ${summarizeCapturedTree.toString()}
        ${summarizeNode.toString()}
        ${elementImageData.toString()}
        ${svgElementData.toString()}
        ${collectSvgTextNodes.toString()}
        ${cloneSvgWithComputedStyle.toString()}
        ${isTextClippedBackground.toString()}
        ${shouldUseNativeGradientShape.toString()}
        ${patternBackgroundImageData.toString()}
        ${parseRepeatingGradient.toString()}
        ${backgroundCropForClippedRect.toString()}
        ${gradientBackgroundImageData.toString()}
        ${drawLinearGradient.toString()}
        ${drawRadialGradient.toString()}
        ${splitCssLayers.toString()}
        ${splitCssArgs.toString()}
        ${parseGradientColorStops.toString()}
        ${parseGradientColorStop.toString()}
        ${parseCanvasColor.toString()}
        ${cssColorComponent.toString()}
        ${cssAlpha.toString()}
        ${parseGradientPosition.toString()}
        ${normalizeGradientStops.toString()}
        ${rgbaString.toString()}
        ${roundedRectPath.toString()}
        ${backgroundUrl.toString()}
        ${isTurbulenceDataImage.toString()}
        ${maxCssRadius.toString()}
        ${cssRadiusPx.toString()}
        ${slideClipRect.toString()}
        ${intersectClientRect.toString()}
        ${nextChildClipRect.toString()}
        ${hasClipStyle.toString()}
        ${sameClientRect.toString()}
        ${rotateFromTransform.toString()}
        ${scaleFromTransform.toString()}
        ${finishEditablePptxAnimations.toString()}
        ${markUnicornOverlayText.toString()}
        ${fallbackTextRisk.toString()}
        ${visibleTextInSubtree.toString()}
        ${visibleTextInScreenshotRect.toString()}
        ${visibleOverlayPaintInScreenshotRect.toString()}
        ${collectDomFallbackTextNodes.toString()}
        ${svgTextRisk.toString()}
        ${fetchImageDataUrl.toString()}
        ${normalizeDataImageUrl.toString()}
        ${rasterizeSvgDataUrl.toString()}
        ${blobToDataUrl.toString()}
        ${isVisibleElement.toString()}
        ${isMediaChrome.toString()}
        ${shouldScreenshotImageSlot.toString()}
        ${isImageSlotElement.toString()}
        ${hasTransformedAncestor.toString()}
        ${isRotatedOrSkewedTransform.toString()}
        ${clippedRect.toString()}
        ${rectObject.toString()}
        ${normalizeText.toString()}
        ${hasPaint.toString()}
        ${hasAnyBorder.toString()}
        ${cssPx.toString()}
        ${cssLengthPx.toString()}
        ${translateFromTransform.toString()}
        window.__finishEditablePptxAnimations = finishEditablePptxAnimations;
        return collectActiveSlide;
      })();
    `,
  });
}




















function normalizeTransparentPngDataUrl(dataUrl, options = {}) {
  const raw = String(dataUrl || '');
  const match = raw.match(/^data:image\/png;base64,(.+)$/i);
  if (!match) return dataUrl;
  try {
    const image = PNG.sync.read(Buffer.from(match[1], 'base64'));
    let hasTransparentPixels = false;
    for (let i = 3; i < image.data.length; i += 4) {
      if (image.data[i] !== 0) continue;
      hasTransparentPixels = true;
      break;
    }
    if (!hasTransparentPixels) return dataUrl;
    if (options.trimLowAlphaEdges !== false) trimLowAlphaEdges(image);
    bleedTransparentRgb(image);
    return pngBufferToDataUrl(PNG.sync.write(image));
  } catch {
    return dataUrl;
  }
}















































































































































export { __pptxFontTestables };

// node 宿主的透明 PNG 处理实现(pngjs):core 的 adaptTransparentPng 经此生效。
configureImageAdapter({ normalizeTransparentPng: normalizeTransparentPngDataUrl });
