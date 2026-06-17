import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import PptxGenJS from 'pptxgenjs';

const SOURCE_W = 1920;
const SOURCE_H = 1080;
const PPT_W = 16;
const PPT_H = 9;
const PX_TO_PT = 0.75;

export async function exportEditablePptxFromPage(page, options = {}) {
  const outFile = path.resolve(options.outFile || 'editable-export.pptx');
  const reportFile = options.reportFile ? path.resolve(options.reportFile) : null;
  const title = options.title || 'Editable Deck Export';
  await emitProgress(options.onProgress, { stage: 'collecting', detail: '采集页面结构', percent: 14 });
  const deck = await collectEditableDeck(page, options);

  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'DASHI_WIDE', width: PPT_W, height: PPT_H });
  pptx.layout = 'DASHI_WIDE';
  pptx.author = 'Dashi PPT Skill';
  pptx.subject = 'Editable PPTX export';
  pptx.title = title;

  const warnings = [...deck.warnings];
  const totals = { textObjects: 0, shapeObjects: 0, imageObjects: 0 };
  const slideSummaries = [];

  for (let slideIndex = 0; slideIndex < deck.slides.length; slideIndex += 1) {
    const slideData = deck.slides[slideIndex];
    await emitProgress(options.onProgress, {
      stage: 'rendering',
      detail: `生成 PPTX 对象 ${slideIndex + 1}/${deck.slides.length}`,
      percent: 68 + Math.round((slideIndex / Math.max(1, deck.slides.length)) * 20),
    });
    const slide = pptx.addSlide();
    slide.background = { color: 'FFFFFF' };
    const before = { ...totals };
    renderCapturedNode(slide, slideData.root, slideData.rect, warnings, totals);
    warnings.push(...slideData.warnings);
    slideSummaries.push({
      index: slideData.index,
      key: slideData.summary?.key || '',
      capturedNodes: slideData.summary?.capturedNodes || 0,
      maxDepth: slideData.summary?.maxDepth || 0,
      textNodes: slideData.summary?.textNodes || 0,
      backgroundImages: slideData.summary?.backgroundImages || 0,
      svgImages: slideData.summary?.svgImages || 0,
      canvasImages: slideData.summary?.canvasImages || 0,
      imageNodes: slideData.summary?.imageNodes || 0,
      shapeCandidates: slideData.summary?.shapeCandidates || 0,
      renderedTextObjects: totals.textObjects - before.textObjects,
      renderedShapeObjects: totals.shapeObjects - before.shapeObjects,
      renderedImageObjects: totals.imageObjects - before.imageObjects,
    });
  }

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
    await page.waitForSelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
    await emitProgress(options.onProgress, { stage: 'preparing', detail: '准备导出页面状态', percent: 12 });
    if (options.snapshot) await applyDeckSnapshot(page, options.snapshot);
    return await exportEditablePptxFromPage(page, options);
  } finally {
    await page.close().catch(() => {});
    await context.close().catch(() => {});
  }
}

async function emitProgress(onProgress, update) {
  if (typeof onProgress !== 'function') return;
  try {
    await onProgress(update);
  } catch {}
}

async function applyDeckSnapshot(page, snapshot) {
  await page.evaluate(async (snapshot) => {
    window.__applyEditablePptxSnapshotText = function(scope) {
      const textState = window.__editablePptxSnapshotTextState;
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
    };
    const state = snapshot?.state || {};
    if (snapshot?.themePack !== undefined) {
      window.__setActiveThemePack?.(snapshot.themePack || '', { navigate: false });
    }
    if (Array.isArray(state.slideOrder)) window.__deckViewModel?.setSlideOrder?.(state.slideOrder);
    if (Array.isArray(state.skippedSlides)) window.__deckViewModel?.setSkippedSlides?.(state.skippedSlides);
    if (Array.isArray(state.deletedSlides)) window.__deckViewModel?.setDeletedSlides?.(state.deletedSlides);
    if (state.text && typeof state.text === 'object') window.__deckViewModel?.setTextState?.(state.text);
    window.__editablePptxSnapshotTextState = state.text && typeof state.text === 'object' ? state.text : {};
    if (state.props && typeof state.props === 'object') {
      Object.entries(state.props).forEach(([slideId, props]) => window.__deckViewModel?.setProps?.(slideId, props));
    }
    window.__syncDeckViewModelFromDom?.();
    window.__layoutDeck?.();
    const slides = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
    slides.forEach(slide => {
      window.__ensureRuntimeSlideRendered?.(slide);
      window.__applyEditablePptxSnapshotText?.(slide);
    });
    if (Array.isArray(snapshot?.canvasSnapshots)) {
      snapshot.canvasSnapshots.forEach(item => {
        const slide = slides[item.slideIndex];
        if (!slide || !item?.data) return;
        const original = slide.querySelectorAll?.('canvas')?.[item.canvasIndex];
        if (original) original.style.display = 'none';
        const img = document.createElement('img');
        img.src = item.data;
        img.setAttribute('data-editable-pptx-canvas-snapshot', '');
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
    const index = Math.max(0, Math.min(slides.length - 1, Number(snapshot?.currentIndex || 0)));
    window.go?.(index, { animate: false, force: true });
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  }, snapshot);
}

async function collectEditableDeck(page, options = {}) {
  await page.evaluate(async ({ includeAllThemePacks }) => {
    window.__editablePptxRestoreState = {
      locked: window.__deckExportLocked,
      themePack: document.documentElement.dataset.themePack || '',
    };
    if (includeAllThemePacks) window.__setActiveThemePack?.('', { navigate: false });
    window.__deckExportLocked = true;
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
        hiddenToken = await page.evaluate(({ exportId, mode, stripText, stripOverlay }) => {
          const root = document.querySelector(`[data-editable-pptx-export-id="${exportId}"]`);
          if (!root) return null;
          const token = `hide-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          const entries = [];
          const rootRect = root.getBoundingClientRect();
          const slide = mode === 'screenshot-rect'
            ? root.closest('#deck > .slide') || document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]')
            : root;
          const intersects = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
          const mark = (el) => {
            if (!el || entries.some(entry => entry.el === el)) return;
            entries.push({ el, style: el.getAttribute('style') });
            const style = getComputedStyle(el);
            el.style.setProperty('color', 'transparent', 'important');
            el.style.setProperty('-webkit-text-fill-color', 'transparent', 'important');
            el.style.setProperty('-webkit-text-stroke-color', 'transparent', 'important');
            el.style.setProperty('text-shadow', 'none', 'important');
            el.style.setProperty('text-decoration-color', 'transparent', 'important');
            el.style.setProperty('fill', 'transparent', 'important');
            el.style.setProperty('stroke', 'transparent', 'important');
            if (String(style.backgroundClip || '').includes('text') || String(style.webkitBackgroundClip || '').includes('text')) {
              el.style.setProperty('background-image', 'none', 'important');
            }
          };
          const markOverlay = (el) => {
            if (!el || entries.some(entry => entry.el === el)) return;
            entries.push({ el, style: el.getAttribute('style') });
            el.style.setProperty('opacity', '0', 'important');
          };
          const hasOverlayPaint = (el) => {
            const style = getComputedStyle(el);
            const bg = String(style.backgroundColor || '').trim();
            const bgImage = String(style.backgroundImage || '').trim();
            const hasBg = bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)';
            const hasBgImage = bgImage && bgImage !== 'none';
            const hasBorder = ['Top', 'Right', 'Bottom', 'Left'].some(side => {
              const width = parseFloat(style[`border${side}Width`] || '0') || 0;
              const color = String(style[`border${side}Color`] || '').trim();
              return width > 0 && color && color !== 'transparent' && color !== 'rgba(0, 0, 0, 0)';
            });
            return hasBg || hasBgImage || hasBorder || (style.boxShadow && style.boxShadow !== 'none') || ['IMG', 'SVG', 'CANVAS', 'VIDEO'].includes(el.tagName);
          };
          const isMostlyRootSized = (rect) => {
            const area = rect.width * rect.height;
            const rootArea = Math.max(1, rootRect.width * rootRect.height);
            return area / rootArea > 0.86
              && Math.abs(rect.left - rootRect.left) < 8
              && Math.abs(rect.top - rootRect.top) < 8
              && Math.abs(rect.right - rootRect.right) < 8
              && Math.abs(rect.bottom - rootRect.bottom) < 8;
          };
          const isVisible = (el) => {
            const style = getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            return style.display !== 'none'
              && style.visibility !== 'hidden'
              && Number(style.opacity || 1) > 0.01
              && rect.width > 2
              && rect.height > 2;
          };
          if (mode === 'screenshot-rect' && stripOverlay) {
            (slide || root).querySelectorAll('*').forEach(el => {
              if (el === root || root.contains(el) || el.contains(root)) return;
              if (!isVisible(el)) return;
              const rect = el.getBoundingClientRect();
              if (!intersects(rect, rootRect) || isMostlyRootSized(rect) || !hasOverlayPaint(el)) return;
              markOverlay(el);
            });
          }
          const shouldHideRange = (range) => {
            if (mode !== 'screenshot-rect') return true;
            const rects = [...range.getClientRects()];
            const bounds = range.getBoundingClientRect();
            return (rects.length ? rects : [bounds]).some(rect => rect.width > 1 && rect.height > 1 && intersects(rect, rootRect));
          };
          if (stripText) {
            const walker = document.createTreeWalker(slide || root, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
              if (!(walker.currentNode.textContent || '').trim()) continue;
              const range = document.createRange();
              range.selectNodeContents(walker.currentNode);
              const shouldHide = shouldHideRange(range);
              range.detach?.();
              if (shouldHide) mark(walker.currentNode.parentElement);
            }
            (slide || root).querySelectorAll('svg text, text').forEach(el => {
              if (mode !== 'screenshot-rect') {
                mark(el);
                return;
              }
              const rect = el.getBoundingClientRect();
              if (rect.width > 1 && rect.height > 1 && intersects(rect, rootRect)) mark(el);
            });
          }
          window.__editablePptxHiddenTextStyles ||= new Map();
          window.__editablePptxHiddenTextStyles.set(token, entries);
          return token;
        }, {
          exportId: node.exportId,
          mode: node.imageKind === 'unicorn-background' ? 'screenshot-rect' : 'descendant',
          stripText: Boolean(node.stripTextForScreenshot),
          stripOverlay: Boolean(node.stripOverlayForScreenshot),
        });
      }
      const bytes = await page.locator(`[data-editable-pptx-export-id="${node.exportId}"]`).screenshot({ type: 'png' });
      node.imageData = `data:image/png;base64,${bytes.toString('base64')}`;
      if (hiddenToken) {
        await page.evaluate(token => {
          const entries = window.__editablePptxHiddenTextStyles?.get(token) || [];
          for (const entry of entries) {
            if (entry.style == null) entry.el.removeAttribute('style');
            else entry.el.setAttribute('style', entry.style);
          }
          window.__editablePptxHiddenTextStyles?.delete(token);
        }, hiddenToken).catch(() => {});
        hiddenToken = null;
      }
      if (!options.freeze) continue;
      await page.evaluate(({ exportId, data }) => {
        const el = document.querySelector(`[data-editable-pptx-export-id="${exportId}"]`);
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
        await page.evaluate(token => {
          const entries = window.__editablePptxHiddenTextStyles?.get(token) || [];
          for (const entry of entries) {
            if (entry.style == null) entry.el.removeAttribute('style');
            else entry.el.setAttribute('style', entry.style);
          }
          window.__editablePptxHiddenTextStyles?.delete(token);
        }, hiddenToken).catch(() => {});
      }
    }
  }
}

function walkCapturedNodes(node, visit) {
  if (!node) return;
  visit(node);
  for (const child of node.children || []) walkCapturedNodes(child, visit);
}

async function installBrowserCollector(page) {
  await page.addScriptTag({
    content: `
      window.__collectEditablePptxSlide = (() => {
        const STYLE_KEYS = ${JSON.stringify([
          'display',
          'visibility',
          'opacity',
          'content',
          'position',
          'left',
          'top',
          'right',
          'bottom',
          'width',
          'height',
          'zIndex',
          'backgroundColor',
          'backgroundImage',
          'backgroundClip',
          'webkitBackgroundClip',
          'backgroundSize',
          'backgroundPosition',
          'borderTopWidth',
          'borderRightWidth',
          'borderBottomWidth',
          'borderLeftWidth',
          'borderTopColor',
          'borderRightColor',
          'borderBottomColor',
          'borderLeftColor',
          'borderTopStyle',
          'borderRightStyle',
          'borderBottomStyle',
          'borderLeftStyle',
          'borderTopLeftRadius',
          'borderTopRightRadius',
          'borderBottomRightRadius',
          'borderBottomLeftRadius',
          'boxShadow',
          'color',
          'fill',
          'webkitTextFillColor',
          'fontFamily',
          'fontSize',
          'fontWeight',
          'fontStyle',
          'lineHeight',
          'letterSpacing',
          'textAlign',
          'textDecorationLine',
          'textTransform',
          'webkitTextStrokeColor',
          'webkitTextStrokeWidth',
          'whiteSpace',
          'writingMode',
          'textOrientation',
          'verticalAlign',
          'objectFit',
          'objectPosition',
          'transform',
          'filter',
          'clipPath',
          'overflow',
          'mixBlendMode',
        ])};
        ${collectActiveSlide.toString()}
        ${captureElement.toString()}
        ${capturePseudoElement.toString()}
        ${pseudoRect.toString()}
        ${captureWholeTextElement.toString()}
        ${isInlineTextChild.toString()}
        ${hasInlineVisualTreatment.toString()}
        ${captureTextNode.toString()}
        ${effectiveTextStyle.toString()}
        ${elementRenderRect.toString()}
        ${transparentCssPaint.toString()}
        ${hasTextPaintSource.toString()}
        ${readStyle.toString()}
        ${summarizeCapturedTree.toString()}
        ${summarizeNode.toString()}
        ${elementImageData.toString()}
        ${svgElementData.toString()}
        ${collectSvgTextNodes.toString()}
        ${cloneSvgWithComputedStyle.toString()}
        ${isTextClippedBackground.toString()}
        ${patternBackgroundImageData.toString()}
        ${parseRepeatingGradient.toString()}
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
        ${clippedRect.toString()}
        ${rectObject.toString()}
        ${normalizeText.toString()}
        ${hasPaint.toString()}
        ${hasAnyBorder.toString()}
        ${cssPx.toString()}
        window.__finishEditablePptxAnimations = finishEditablePptxAnimations;
        return collectActiveSlide;
      })();
    `,
  });
}

function renderCapturedNode(slide, node, slideRect, warnings, totals) {
  if (!node || node.style?.display === 'none' || node.style?.visibility === 'hidden') return;
  if (Number(node.style?.opacity || 1) <= 0.01) return;
  if (!node.rect || node.rect.w < 0.5 || node.rect.h < 0.5) return;

  if (node.tag === '#text') {
    renderText(slide, node, slideRect, warnings, totals);
    return;
  }

  renderBox(slide, node, slideRect, warnings, totals);
  renderNodeImage(slide, node, slideRect, warnings, totals);
  if (node.tag === 'pseudo' && node.text) renderText(slide, { ...node, tag: '#text', singleLine: true }, slideRect, warnings, totals);

  if (node.tag === 'img' || node.tag === 'canvas') return;
  for (const child of node.children || []) renderCapturedNode(slide, child, slideRect, warnings, totals);
}

function renderBox(slide, node, slideRect, warnings, totals) {
  const c = coords(node, slideRect);
  if (c.w < 0.003 || c.h < 0.003) return;
  const style = node.style || {};
  const hasLocalBackgroundImage = node.backgroundImageData || node.patternImageData;
  const fill = isTextClippedBackground(style)
    ? parseCssColor(style.backgroundColor)
    : parseCssColor(style.backgroundColor) || (hasLocalBackgroundImage ? null : colorFromBackgroundImage(style.backgroundImage));
  const radius = Math.min(maxRadiusPx(style), 48) / slideRect.w * PPT_W;
  const borders = readBorders(style);
  const hasBorder = borders.some(border => border.width > 0 && border.color);
  const shadow = parseBoxShadow(style.boxShadow);
  const rotate = rotateFromTransform(style.transform) || 0;
  const hasFill = fill && fill.alpha > 0.01;
  if (isTinyRotatedBorderOnlyPseudo(node, c, hasFill, hasBorder, rotate)) {
    warnings.push({ slide: node.slideIndex, type: 'decorative-pseudo-border-skipped', count: 1 });
    return;
  }
  const isLargeGradient = fill?.gradient && c.w > PPT_W * 0.72 && c.h > PPT_H * 0.72;
  const isDecorativeGradient = fill?.gradient && !isLargeGradient && !(node.children || []).length;
  const fillAlpha = isDecorativeGradient ? Math.min(fill.alpha, 0.08) : fill?.alpha;
  const shapeName = isDecorativeGradient && radius > Math.min(c.w, c.h) * 0.2
    ? 'ellipse'
    : radius > 0.02 ? 'roundRect' : 'rect';
  const firstBorder = borders.find(border => border.color);
  const line = hasBorder && rotate
    ? { color: firstBorder?.color || fill?.color || 'FFFFFF', transparency: combinedTransparency(firstBorder?.alpha || 1, style.opacity), width: Math.max(...borders.map(border => border.width || 0)) * PX_TO_PT }
    : { color: hasBorder ? firstBorder?.color || fill?.color || 'FFFFFF' : 'FFFFFF', transparency: 100 };

  if (hasFill || hasBorder) {
    try {
      slide.addShape(shapeName, {
        ...c,
        fill: hasFill
          ? { color: fill.color, transparency: combinedTransparency(fillAlpha, style.opacity) }
          : { color: 'FFFFFF', transparency: 100 },
        line,
        rectRadius: shapeName === 'roundRect' ? radius || undefined : undefined,
        shadow: hasFill && shadow ? shadow : undefined,
        rotate: rotate || undefined,
      });
      totals.shapeObjects += 1;
    } catch {
      warnings.push({ slide: node.slideIndex, type: 'render-shape-failed', tag: node.tag });
    }
  }

  if (hasBorder && !rotate) renderBorders(slide, c, borders, slideRect, style.opacity, totals);
}

function isTinyRotatedBorderOnlyPseudo(node, c, hasFill, hasBorder, rotate) {
  return node.tag === 'pseudo'
    && !node.text
    && !hasFill
    && hasBorder
    && rotate
    && Math.max(c.w, c.h) < 0.35
    && Math.min(c.w, c.h) < 0.18;
}

function renderBorders(slide, c, borders, slideRect, opacity, totals) {
  const [top, right, bottom, left] = borders;
  const borderRects = [
    top.width > 0 && top.color ? { x: c.x, y: c.y, w: c.w, h: Math.max(0.002, top.width / slideRect.h * PPT_H), color: top.color, alpha: top.alpha } : null,
    right.width > 0 && right.color ? { x: c.x + c.w - Math.max(0.002, right.width / slideRect.w * PPT_W), y: c.y, w: Math.max(0.002, right.width / slideRect.w * PPT_W), h: c.h, color: right.color, alpha: right.alpha } : null,
    bottom.width > 0 && bottom.color ? { x: c.x, y: c.y + c.h - Math.max(0.002, bottom.width / slideRect.h * PPT_H), w: c.w, h: Math.max(0.002, bottom.width / slideRect.h * PPT_H), color: bottom.color, alpha: bottom.alpha } : null,
    left.width > 0 && left.color ? { x: c.x, y: c.y, w: Math.max(0.002, left.width / slideRect.w * PPT_W), h: c.h, color: left.color, alpha: left.alpha } : null,
  ].filter(Boolean);

  for (const rect of borderRects) {
    slide.addShape('rect', {
      x: rect.x,
      y: rect.y,
      w: rect.w,
      h: rect.h,
      fill: { color: rect.color, transparency: combinedTransparency(rect.alpha, opacity) },
      line: { color: rect.color, transparency: 100 },
    });
    totals.shapeObjects += 1;
  }
}

function renderText(slide, node, slideRect, warnings, totals) {
  const value = applyTextTransform(node.text || '', node.style?.textTransform);
  if (!value.trim()) return;
  const c = coords(node, slideRect);
  if (c.w < 0.01 || c.h < 0.01) return;
  const style = node.style || {};
  const color = textColorForStyle(style, node);
  const fontSizePx = Math.max(4, Math.min(260, parseFloat(style.fontSize || '16') || 16));
  if (isDecorativeStrokeOnlyText(style, fontSizePx)) return;
  if (isDecorativeLowAlphaText(color, style, fontSizePx)) return;
  if (isDecorativeRotatedSmallText(value, style, fontSizePx, node)) return;
  if (isDecorativeSparkleText(value)) {
    return;
  }
  const fontFace = firstFont(style.fontFamily);
  const weight = String(style.fontWeight || '');
  const singleLine = node.singleLine && !/[\r\n]/.test(value);
  const verticalText = isVerticalWritingMode(style);
  const autoWidth = !verticalText && singleLine && shouldUseAutoWidthText(value, fontSizePx, c, node);
  const align = normalizeAlign(style.textAlign);
  const options = {
    x: c.x,
    y: c.y,
    h: Math.max(0.04, c.h + 0.03),
    margin: 0,
    breakLine: false,
    fit: autoWidth ? 'resize' : 'shrink',
    wrap: autoWidth ? false : !isNoWrap(style.whiteSpace),
    fontFace,
    fontSize: pptFontSize(fontSizePx, fontFace),
    color: color.color,
    bold: weight === 'bold' || Number.parseInt(weight, 10) >= 600,
    italic: style.fontStyle === 'italic',
    underline: String(style.textDecorationLine || '').includes('underline'),
    strike: String(style.textDecorationLine || '').includes('line-through'),
    align,
    valign: normalizeValign(style.verticalAlign),
    rotate: rotateFromTransform(style.transform) || 0,
    transparency: combinedTransparency(color.alpha, style.opacity),
    charSpacing: letterSpacing(style.letterSpacing),
  };
  if (verticalText) {
    options.vert = 'eaVert';
  }
  if (/Songti SC/i.test(fontFace) && fontSizePx >= 80 && node.parentTag === 'span') {
    options.y = Math.max(0, options.y - c.h * 0.28);
  }
  if (!autoWidth) {
    options.w = Math.max(0.08, c.w + 0.04);
  } else {
    options.w = singleLineWidth(value, fontSizePx, c);
  }
  if (autoWidth && align !== 'left') {
    if (align === 'right') options.x = Math.max(0, c.x + c.w - options.w);
    if (align === 'center') options.x = Math.max(0, c.x + c.w / 2 - options.w / 2);
  }
  try {
    slide.addText(value, options);
    totals.textObjects += 1;
  } catch {
    warnings.push({ slide: node.slideIndex, type: 'render-text-failed', text: value.slice(0, 60) });
  }
}

function isDecorativeStrokeOnlyText(style, fontSizePx) {
  const strokeWidth = parseFloat(style?.webkitTextStrokeWidth || '0') || 0;
  if (strokeWidth <= 0 || fontSizePx < 120) return false;
  const fill = parseCssColor(style?.webkitTextFillColor);
  const color = parseCssColor(style?.color);
  const stroke = parseCssColor(style?.webkitTextStrokeColor);
  return !fill && !color && (!stroke || stroke.alpha <= 0.25);
}

function isDecorativeLowAlphaText(color, style, fontSizePx) {
  const opacity = Number(style?.opacity || 1);
  const alpha = Math.max(0, Math.min(1, Number(color?.alpha ?? 1) * (Number.isFinite(opacity) ? opacity : 1)));
  return fontSizePx >= 100 && alpha <= 0.08;
}

function isDecorativeRotatedSmallText(value, style, fontSizePx, node = {}) {
  return node.source !== 'svg-text'
    && !node.requiredText
    && !isVerticalWritingMode(style)
    && rotateFromTransform(style?.transform)
    && fontSizePx <= 32
    && String(value || '').trim().length >= 4;
}

function isVerticalWritingMode(style = {}) {
  return String(style.writingMode || '').includes('vertical');
}

function isDecorativeSparkleText(value) {
  return /^[✦✧✶✷✸✹✺✻✼✽✾✿★☆＊*]+$/.test(String(value || '').trim());
}

function shouldUseAutoWidthText(value, fontSizePx, box, node) {
  const text = String(value || '').trim();
  if (!text) return false;
  const units = textUnits(text);
  const parentTag = String(node.parentTag || '');
  if (['p', 'li', 'td', 'th', 'blockquote'].includes(parentTag) && units > 24) return false;
  if (units <= 20) return true;
  if (fontSizePx >= 36 && units <= 32) return true;
  return box.w < 1.3 && units <= 28;
}

function singleLineWidth(value, fontSizePx, box) {
  const fontPt = pptFontSize(fontSizePx);
  const units = textUnits(value);
  const estimated = units * fontPt / 72;
  const width = Math.max(0.08, box.w + 0.1, estimated + 0.12);
  return Math.min(PPT_W - Math.max(0, box.x), width);
}

function textUnits(value) {
  let units = 0;
  for (const char of String(value || '')) {
    if (/\s/.test(char)) units += 0.32;
    else if (/[\u2e80-\u9fff]/.test(char)) units += 0.96;
    else if (/[A-Z0-9]/.test(char)) units += 0.64;
    else units += 0.55;
  }
  return units;
}

function renderNodeImage(slide, node, slideRect, warnings, totals) {
  const items = [];
  if (node.patternImageData) items.push({ data: node.patternImageData, kind: 'pattern-background' });
  if (node.backgroundImageData) items.push({ data: node.backgroundImageData, kind: 'background-image', transparency: node.backgroundImageTransparency });
  if (node.imageData) items.push({ data: node.imageData, kind: node.imageKind || node.tag });
  if (!items.length) return;

  const c = coords(node, slideRect);
  const rotate = rotateFromTransform(node.style?.transform) || 0;
  for (const item of items) {
    try {
      slide.addImage({
        data: item.data,
        x: c.x,
        y: c.y,
        w: c.w,
        h: c.h,
        transparency: item.transparency ?? elementTransparency(node.style?.opacity),
        sizing: imageSizing(node, c, item.kind),
        rotate: rotate || undefined,
        shadow: localBackgroundShadow(node.style, item.kind) || undefined,
      });
      totals.imageObjects += 1;
    } catch {
      warnings.push({ slide: node.slideIndex, type: 'render-image-failed', tag: node.tag, kind: item.kind });
    }
  }
}

function localBackgroundShadow(style, kind) {
  if (kind !== 'background-image' && kind !== 'pattern-background') return null;
  return parseBoxShadow(style?.boxShadow) || parseDropShadow(style?.filter);
}

function coords(node, slideRect) {
  const rect = node.renderRect || node.rect;
  return {
    x: round((rect.x - slideRect.x) / slideRect.w * PPT_W),
    y: round((rect.y - slideRect.y) / slideRect.h * PPT_H),
    w: round(rect.w / slideRect.w * PPT_W),
    h: round(rect.h / slideRect.h * PPT_H),
  };
}

function imageSizing(node, c, kind) {
  const style = node.style || {};
  const fit = style.objectFit || (style.backgroundSize === 'cover' || style.backgroundSize === 'contain' ? style.backgroundSize : '');
  if ((kind === 'background-image' || node.tag === 'img') && (fit === 'cover' || fit === 'contain')) {
    return { type: fit, w: c.w, h: c.h };
  }
  return undefined;
}

async function collectActiveSlide(slideNumber) {
  const slide = document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
  if (!slide) {
    return { index: slideNumber, rect: { x: 0, y: 0, w: 1920, h: 1080 }, root: null, warnings: [{ type: 'missing-slide' }], summary: null };
  }
  const rawRect = slide.getBoundingClientRect();
  const slideRect = rectObject(rawRect);
  const warnings = [];
  markUnicornOverlayText(slide, slideRect);
  const root = await captureElement(slide, slideRect, warnings, 0, slideNumber);
  const summary = summarizeCapturedTree(root);
  summary.key = slide.dataset.vmSlideId || slide.dataset.layoutKey || slide.id || '';
  return { index: slideNumber, rect: slideRect, root, warnings, summary };
}

async function captureElement(el, slideRect, warnings, depth, slideIndex) {
  if (!(el instanceof Element) || isMediaChrome(el)) return null;
  const style = readStyle(el);
  if (!isVisibleElement(el, slideRect, style)) return null;
  const clipped = clippedRect(el.getBoundingClientRect(), slideRect);
  if (!clipped) return null;
  const tag = el.tagName.toLowerCase();
  const node = {
    tag,
    slideIndex,
    rect: rectObject(clipped),
    style,
    children: [],
  };
  const renderRect = elementRenderRect(el, clipped, style, slideRect);
  if (renderRect) node.renderRect = renderRect;
  if (tag === 'a' && el.href && !String(el.getAttribute('href') || '').startsWith('#')) node.href = el.href;

  if (el.classList?.contains('bt-unicorn-frame')) {
    const exportId = `editable-pptx-${slideIndex}-${depth}-${Math.random().toString(36).slice(2, 9)}`;
    el.setAttribute('data-editable-pptx-export-id', exportId);
    node.exportId = exportId;
    node.elementScreenshot = true;
    node.imageKind = 'unicorn-background';
    const textNodes = collectDomFallbackTextNodes(el, slideRect, slideIndex);
    const overlayText = visibleTextInScreenshotRect(el, slideRect);
    const overlayPaint = visibleOverlayPaintInScreenshotRect(el, slideRect);
    if (textNodes.length) {
      node.children.push(...textNodes);
    }
    if (textNodes.length || overlayText.count) node.stripTextForScreenshot = true;
    if (overlayPaint.count) node.stripOverlayForScreenshot = true;
    const risk = fallbackTextRisk(el, slideRect);
    if (overlayText.count) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-text-extracted', node: 'unicorn-background', textCount: overlayText.count, sample: overlayText.sample, scope: 'screenshot-rect' });
    } else if (risk.count && textNodes.length) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-text-extracted', node: 'unicorn-background', textCount: textNodes.length, sample: risk.sample, scope: 'descendant' });
    } else if (risk.count) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-text-risk', node: 'unicorn-background', textCount: risk.count, sample: risk.sample });
    }
    if (overlayPaint.count) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-overlay-extracted', node: 'unicorn-background', overlayCount: overlayPaint.count, sample: overlayPaint.sample, scope: 'screenshot-rect' });
    }
    warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'unicorn-background', count: 1 });
    return node;
  }

  if (tag === 'img') {
    node.imageData = await elementImageData(el, el.currentSrc || el.src || el.getAttribute('src') || '');
    node.imageKind = 'img';
    if (!node.imageData) warnings.push({ slide: slideIndex, type: 'image-skipped', reason: 'unreadable-img' });
    return node;
  }
  if (tag === 'canvas') {
    try {
      node.imageData = el.toDataURL('image/png');
      node.imageKind = 'canvas';
      warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'canvas', count: 1 });
    } catch {
      warnings.push({ slide: slideIndex, type: 'canvas-skipped', reason: 'tainted-or-empty' });
    }
    return node;
  }
  if (tag === 'svg') {
    const svgTexts = collectSvgTextNodes(el, slideRect, slideIndex);
    node.imageData = await svgElementData(el, clipped.width, clipped.height, { stripText: svgTexts.length > 0 });
    node.imageKind = 'svg';
    const risk = svgTextRisk(el);
    if (risk.count && svgTexts.length) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-text-extracted', node: 'svg', textCount: svgTexts.length, sample: risk.sample });
    } else if (risk.count) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-text-risk', node: 'svg', textCount: risk.count, sample: risk.sample });
    }
    if (node.imageData) warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'svg', count: 1 });
    else warnings.push({ slide: slideIndex, type: 'svg-skipped', reason: 'rasterize-failed' });
    node.children.push(...svgTexts);
    return node;
  }

  const bg = backgroundUrl(style.backgroundImage);
  if (bg) {
    const isTurbulence = isTurbulenceDataImage(bg);
    node.backgroundImageData = await fetchImageDataUrl(bg, clipped.width, clipped.height, isTurbulence ? 0.02 : 1);
    if (isTurbulence) node.backgroundImageTransparency = 0;
    if (!node.backgroundImageData) warnings.push({ slide: slideIndex, type: 'background-image-skipped', url: bg.slice(0, 160) });
  } else if (String(style.backgroundImage || '').includes('repeating-linear-gradient')) {
    node.patternImageData = patternBackgroundImageData(style.backgroundImage, clipped.width, clipped.height, maxCssRadius(style, clipped.width, clipped.height));
    if (node.patternImageData) warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'css-pattern-background', count: 1 });
  } else if (!isTextClippedBackground(style) && String(style.backgroundImage || '').includes('gradient')) {
    node.backgroundImageData = gradientBackgroundImageData(style.backgroundImage, clipped.width, clipped.height, maxCssRadius(style, clipped.width, clipped.height));
    if (node.backgroundImageData) warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'css-gradient-background', count: 1 });
  }

  const before = capturePseudoElement(el, '::before', slideRect, slideIndex);
  if (before) node.children.push(before);
  const wholeText = captureWholeTextElement(el, slideRect, style, slideIndex);
  if (wholeText) {
    node.children.push(wholeText);
    const after = capturePseudoElement(el, '::after', slideRect, slideIndex);
    if (after) node.children.push(after);
    return node;
  }
  const childNodeLists = [el.childNodes];
  if (el.shadowRoot) childNodeLists.push(el.shadowRoot.childNodes);
  for (const childNodes of childNodeLists) {
    for (const child of childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        const textNode = captureTextNode(child, el, slideRect, style, slideIndex);
        if (textNode) node.children.push(textNode);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const childNode = await captureElement(child, slideRect, warnings, depth + 1, slideIndex);
        if (childNode) node.children.push(childNode);
      }
    }
  }
  const after = capturePseudoElement(el, '::after', slideRect, slideIndex);
  if (after) node.children.push(after);
  return node;
}

function capturePseudoElement(el, pseudo, slideRect, slideIndex) {
  const style = readStyle(el, pseudo);
  const content = String(style.content || '').trim();
  const hasText = content && content !== 'none' && content !== 'normal' && content !== '\"\"' && content !== "''";
  const hasVisual = hasPaint(style.backgroundColor) || backgroundUrl(style.backgroundImage) || String(style.backgroundImage || '').includes('gradient') || hasAnyBorder(style);
  if (style.display === 'none' || style.visibility === 'hidden' || (!hasText && !hasVisual)) return null;
  const rect = pseudoRect(el, style, slideRect);
  if (!rect || rect.w < 1 || rect.h < 1) return null;
  return {
    tag: 'pseudo',
    slideIndex,
    rect,
    style,
    text: hasText ? content.replace(/^['"]|['"]$/g, '') : '',
    children: [],
  };
}

function pseudoRect(el, style, slideRect) {
  const parent = el.getBoundingClientRect();
  const stageScaleX = (slideRect?.w || 1920) / 1920;
  const stageScaleY = (slideRect?.h || 1080) / 1080;
  const width = cssPx(style.width);
  const height = cssPx(style.height);
  if (width == null || height == null) return null;
  const left = cssPx(style.left);
  const top = cssPx(style.top);
  const right = cssPx(style.right);
  const bottom = cssPx(style.bottom);
  const x = left != null ? parent.left + left * stageScaleX : right != null ? parent.right - (right + width) * stageScaleX : parent.left;
  const y = top != null ? parent.top + top * stageScaleY : bottom != null ? parent.bottom - (bottom + height) * stageScaleY : parent.top;
  return { x, y, w: width * stageScaleX, h: height * stageScaleY };
}

function captureWholeTextElement(el, slideRect, style, slideIndex) {
  const tag = el.tagName.toLowerCase();
  if (!['p', 'li', 'blockquote'].includes(tag)) return null;
  const inlineChildren = [...el.children];
  if (!inlineChildren.length || !inlineChildren.every(isInlineTextChild) || inlineChildren.some(hasInlineVisualTreatment)) return null;
  const value = normalizeText(el.innerText || el.textContent || '');
  if (value.length < 18) return null;
  const range = document.createRange();
  range.selectNodeContents(el);
  const lineRects = [...range.getClientRects()].filter(rect => rect.width > 1 && rect.height > 1);
  range.detach?.();
  const clipped = clippedRect(el.getBoundingClientRect(), slideRect);
  if (!clipped || clipped.width < 1 || clipped.height < 1) return null;
  return {
    tag: '#text',
    slideIndex,
    rect: rectObject(clipped),
    style: effectiveTextStyle(el, slideRect),
    text: value,
    singleLine: lineRects.length <= 1 && !/[\r\n]/.test(value),
    parentTag: tag,
    children: [],
  };
}

function isInlineTextChild(child) {
  const display = getComputedStyle(child).display;
  return display === 'inline' || display === 'inline-block' || display === 'contents';
}

function hasInlineVisualTreatment(child) {
  const style = getComputedStyle(child);
  return hasPaint(style.backgroundColor)
    || String(style.backgroundImage || '').includes('gradient')
    || hasAnyBorder(style)
    || parseFloat(style.borderTopLeftRadius || '0') > 0
    || parseFloat(style.borderTopRightRadius || '0') > 0
    || parseFloat(style.borderBottomRightRadius || '0') > 0
    || parseFloat(style.borderBottomLeftRadius || '0') > 0
    || (style.boxShadow && style.boxShadow !== 'none');
}

function captureTextNode(textNode, parent, slideRect, style, slideIndex) {
  const keepWhitespace = ['pre', 'pre-wrap', 'pre-line', 'break-spaces'].includes(style.whiteSpace);
  const value = keepWhitespace ? textNode.textContent || '' : normalizeText(textNode.textContent || '');
  if (!value.trim()) return null;
  const range = document.createRange();
  range.selectNodeContents(textNode);
  const lineRects = [...range.getClientRects()].filter(rect => rect.width > 1 && rect.height > 1);
  const singleLine = lineRects.length <= 1 && !/[\r\n]/.test(value);
  let clipped = clippedRect(range.getBoundingClientRect(), slideRect);
  range.detach?.();
  const tag = parent.tagName.toLowerCase();
  const textNodeCount = [...parent.childNodes]
    .filter(child => child.nodeType === Node.TEXT_NODE && normalizeText(child.textContent || ''))
    .length;
  const visibleElementChildren = [...parent.children].filter(child => isVisibleElement(child, slideRect)).length;
  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'td', 'th', 'blockquote', 'button', 'label'].includes(tag)
      && textNodeCount === 1
      && visibleElementChildren === 0) {
    clipped = clippedRect(parent.getBoundingClientRect(), slideRect) || clipped;
  }
  if (!clipped || clipped.width < 1 || clipped.height < 1) return null;
  const parentStyle = effectiveTextStyle(parent, slideRect);
  return {
    tag: '#text',
    slideIndex,
    rect: rectObject(clipped),
    style: parentStyle,
    text: value,
    singleLine,
    parentTag: tag,
    requiredText: parent.hasAttribute('data-editable-pptx-required-text'),
    href: parent.closest('a')?.href || undefined,
    children: [],
  };
}

function effectiveTextStyle(parent, slideRect) {
  const style = readStyle(parent);
  if (!transparentCssPaint(style.webkitTextFillColor) || !transparentCssPaint(style.color) || isTextClippedBackground(style) || hasTextPaintSource(style)) {
    return style;
  }

  const slide = document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
  for (let el = parent.parentElement; el && el !== slide?.parentElement; el = el.parentElement) {
    if (!isVisibleElement(el, slideRect)) continue;
    const ancestor = readStyle(el);
    if (!isTextClippedBackground(ancestor) && !hasTextPaintSource(ancestor)) continue;
    return {
      ...style,
      color: transparentCssPaint(style.color) ? ancestor.color : style.color,
      fill: transparentCssPaint(style.fill) ? ancestor.fill : style.fill,
      webkitTextFillColor: transparentCssPaint(style.webkitTextFillColor) ? ancestor.webkitTextFillColor : style.webkitTextFillColor,
      backgroundImage: isTextClippedBackground(ancestor) ? ancestor.backgroundImage : style.backgroundImage,
      backgroundClip: isTextClippedBackground(ancestor) ? ancestor.backgroundClip : style.backgroundClip,
      webkitBackgroundClip: isTextClippedBackground(ancestor) ? ancestor.webkitBackgroundClip : style.webkitBackgroundClip,
      webkitTextStrokeColor: transparentCssPaint(style.webkitTextStrokeColor) ? ancestor.webkitTextStrokeColor : style.webkitTextStrokeColor,
      webkitTextStrokeWidth: parseFloat(style.webkitTextStrokeWidth || '0') > 0 ? style.webkitTextStrokeWidth : ancestor.webkitTextStrokeWidth,
      textShadow: style.textShadow === 'none' ? ancestor.textShadow : style.textShadow,
      filter: style.filter === 'none' ? ancestor.filter : style.filter,
    };
  }
  return style;
}

function elementRenderRect(el, clipped, style, slideRect) {
  const rotation = rotateFromTransform(style.transform);
  if (!rotation) return null;
  const scale = scaleFromTransform(style.transform);
  const stageScaleX = (slideRect?.w || 1920) / 1920;
  const stageScaleY = (slideRect?.h || 1080) / 1080;
  const width = (el.offsetWidth || clipped.width) * scale.x * stageScaleX;
  const height = (el.offsetHeight || clipped.height) * scale.y * stageScaleY;
  if (!width || !height) return null;
  const cx = clipped.left + clipped.width / 2;
  const cy = clipped.top + clipped.height / 2;
  return { x: cx - width / 2, y: cy - height / 2, w: width, h: height };
}

function transparentCssPaint(value) {
  const raw = String(value || '').trim().toLowerCase();
  return !raw || raw === 'transparent' || /^rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)$/.test(raw);
}

function hasTextPaintSource(style) {
  return isTextClippedBackground(style)
    || parseFloat(style?.webkitTextStrokeWidth || '0') > 0
    || !transparentCssPaint(style?.webkitTextFillColor)
    || !transparentCssPaint(style?.color);
}

function readStyle(el, pseudo = null) {
  const cs = getComputedStyle(el, pseudo);
  const style = {};
  for (const key of STYLE_KEYS) {
    const cssKey = key.startsWith('webkit')
      ? `-${key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}`
      : key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
    style[key] = cs[key] || cs.getPropertyValue(cssKey) || '';
  }
  return style;
}

function summarizeCapturedTree(root) {
  const summary = {
    capturedNodes: 0,
    maxDepth: 0,
    textNodes: 0,
    backgroundImages: 0,
    svgImages: 0,
    canvasImages: 0,
    imageNodes: 0,
    shapeCandidates: 0,
  };
  summarizeNode(root, summary, 0);
  return summary;
}

function summarizeNode(node, summary, depth) {
  if (!node) return;
  summary.capturedNodes += 1;
  summary.maxDepth = Math.max(summary.maxDepth, depth);
  if (node.tag === '#text') summary.textNodes += 1;
  if (node.backgroundImageData) summary.backgroundImages += 1;
  if (node.patternImageData) summary.backgroundImages += 1;
  if (node.imageKind === 'svg') summary.svgImages += 1;
  if (node.imageKind === 'canvas') summary.canvasImages += 1;
  if (node.imageData) summary.imageNodes += 1;
  if (hasPaint(node.style?.backgroundColor) || backgroundUrl(node.style?.backgroundImage) || node.style?.backgroundImage?.includes('gradient') || hasAnyBorder(node.style)) {
    summary.shapeCandidates += 1;
  }
  for (const child of node.children || []) summarizeNode(child, summary, depth + 1);
}

async function elementImageData(img, src) {
  if (!src) return null;
  if (src.startsWith('data:image/')) return normalizeDataImageUrl(src);
  try {
    const canvas = document.createElement('canvas');
    const width = img.naturalWidth || Math.max(1, Math.round(img.getBoundingClientRect().width));
    const height = img.naturalHeight || Math.max(1, Math.round(img.getBoundingClientRect().height));
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL('image/png');
  } catch {}
  return fetchImageDataUrl(src);
}

async function svgElementData(svg, width, height, options = {}) {
  try {
    const clone = cloneSvgWithComputedStyle(svg);
    if (options.stripText) clone.querySelectorAll('text, foreignObject').forEach(el => el.remove());
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    if (!clone.getAttribute('width')) clone.setAttribute('width', String(Math.max(1, Math.round(width))));
    if (!clone.getAttribute('height')) clone.setAttribute('height', String(Math.max(1, Math.round(height))));
    const xml = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    try {
      const img = await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = url;
      });
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(width * 2));
      canvas.height = Math.max(1, Math.round(height * 2));
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png');
    } finally {
      URL.revokeObjectURL(url);
    }
  } catch {
    return null;
  }
}

function collectSvgTextNodes(svg, slideRect, slideIndex) {
  const svgTextNodes = [...svg.querySelectorAll('text')]
    .map(el => {
      const text = normalizeText(el.textContent || '');
      if (!text) return null;
      const clipped = clippedRect(el.getBoundingClientRect(), slideRect);
      if (!clipped || clipped.width < 1 || clipped.height < 1) return null;
      const style = readStyle(el);
      return {
        tag: '#text',
        source: 'svg-text',
        slideIndex,
        rect: rectObject(clipped),
        style,
        text,
        singleLine: !/[\r\n]/.test(text),
        children: [],
      };
    })
    .filter(Boolean);
  const foreignTextNodes = [];
  svg.querySelectorAll('foreignObject').forEach(el => {
    foreignTextNodes.push(...collectDomFallbackTextNodes(el, slideRect, slideIndex));
  });
  return [...svgTextNodes, ...foreignTextNodes];
}

function cloneSvgWithComputedStyle(svg) {
  const clone = svg.cloneNode(true);
  const source = [svg, ...svg.querySelectorAll('*')];
  const target = [clone, ...clone.querySelectorAll('*')];
  source.forEach((el, index) => {
    const cs = getComputedStyle(el);
    const copy = target[index];
    if (!copy) return;
    const inline = [
      'fill',
      'stroke',
      'stroke-width',
      'stroke-linecap',
      'stroke-linejoin',
      'opacity',
      'font-family',
      'font-size',
      'font-weight',
      'color',
    ].map(name => `${name}:${cs.getPropertyValue(name)}`).join(';');
    copy.setAttribute('style', `${copy.getAttribute('style') || ''};${inline}`);
  });
  return clone;
}

function patternBackgroundImageData(backgroundImage, width, height, radius = 0) {
  const spec = parseRepeatingGradient(backgroundImage);
  if (!spec) return null;
  const scale = 2;
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const w = canvas.width;
  const h = canvas.height;
  ctx.save();
  roundedRectPath(ctx, 0, 0, w, h, Math.max(0, Number(radius || 0)) * scale);
  ctx.clip();
  ctx.translate(w / 2, h / 2);
  ctx.rotate((Number(spec.angle || 135) - 90) * Math.PI / 180);
  const span = Math.hypot(w, h) * 2;
  const period = Math.max(2, spec.period * scale);
  const split = Math.max(1, Math.min(period - 1, spec.split * scale));
  for (let x = -span; x < span; x += period) {
    ctx.fillStyle = rgbaString(spec.colors[0]);
    ctx.fillRect(x, -span, split, span * 2);
    ctx.fillStyle = rgbaString(spec.colors[1]);
    ctx.fillRect(x + split, -span, period - split, span * 2);
  }
  ctx.restore();
  return canvas.toDataURL('image/png');
}

function parseRepeatingGradient(backgroundImage) {
  const raw = String(backgroundImage || '');
  if (!raw.includes('repeating-linear-gradient')) return null;
  const angle = Number(raw.match(/repeating-linear-gradient\(\s*([-\d.]+)deg/i)?.[1] || 135);
  const matches = [...raw.matchAll(/rgba?\(([^)]+)\)\s+([\d.]+)px/ig)]
    .map(match => {
      const parts = match[1].split(',').map(part => Number(part.trim()));
      return {
        color: {
          r: Math.max(0, Math.min(255, parts[0] || 255)),
          g: Math.max(0, Math.min(255, parts[1] || 255)),
          b: Math.max(0, Math.min(255, parts[2] || 255)),
          a: parts[3] == null ? 1 : Math.max(0, Math.min(1, parts[3])),
        },
        stop: Number(match[2] || 0),
      };
    });
  if (!matches.length) {
    return {
      angle,
      colors: [{ r: 255, g: 255, b: 255, a: 0.04 }, { r: 255, g: 255, b: 255, a: 0.016 }],
      split: 12,
      period: 24,
    };
  }
  const stops = [...new Set(matches.map(item => item.stop).filter(Number.isFinite))].sort((a, b) => a - b);
  const split = stops.find(stop => stop > 0) || 12;
  const period = stops.find(stop => stop > split) || split * 2;
  return {
    angle,
    colors: [
      matches[0]?.color,
      matches.at(-1)?.color,
    ].filter(Boolean),
    split,
    period,
  };
}

function gradientBackgroundImageData(backgroundImage, width, height, radius = 0) {
  const layers = splitCssLayers(backgroundImage).filter(layer => /(?:linear|radial)-gradient/i.test(layer));
  if (!layers.length) return null;
  const scale = Math.max(1, Math.min(2, Math.ceil(900 / Math.max(width, height))));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const w = canvas.width;
  const h = canvas.height;
  ctx.save();
  roundedRectPath(ctx, 0, 0, w, h, Math.max(0, Number(radius || 0)) * scale);
  ctx.clip();
  for (const layer of layers.reverse()) {
    if (/radial-gradient/i.test(layer)) drawRadialGradient(ctx, layer, w, h);
    else drawLinearGradient(ctx, layer, w, h);
  }
  ctx.restore();
  return canvas.toDataURL('image/png');
}

function drawLinearGradient(ctx, layer, width, height) {
  const body = layer.replace(/^.*?linear-gradient\(/i, '').replace(/\)\s*$/, '');
  const args = splitCssArgs(body);
  let angle = 180;
  let startIndex = 0;
  const angleMatch = String(args[0] || '').match(/([-\d.]+)deg/i);
  if (angleMatch) {
    angle = Number(angleMatch[1]);
    startIndex = 1;
  } else if (/to\s+/i.test(String(args[0] || ''))) {
    const dir = String(args[0]).toLowerCase();
    if (dir.includes('right')) angle = 90;
    else if (dir.includes('left')) angle = 270;
    else if (dir.includes('top')) angle = 0;
    else angle = 180;
    startIndex = 1;
  }
  const stops = normalizeGradientStops(parseGradientColorStops(args.slice(startIndex)), Math.hypot(width, height));
  if (stops.length < 2) return;
  const theta = (angle - 90) * Math.PI / 180;
  const dx = Math.cos(theta);
  const dy = Math.sin(theta);
  const len = Math.abs(width * dx) + Math.abs(height * dy);
  const cx = width / 2;
  const cy = height / 2;
  const gradient = ctx.createLinearGradient(cx - dx * len / 2, cy - dy * len / 2, cx + dx * len / 2, cy + dy * len / 2);
  for (const stop of stops) gradient.addColorStop(stop.offset, rgbaString(stop.color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawRadialGradient(ctx, layer, width, height) {
  const body = layer.replace(/^.*?radial-gradient\(/i, '').replace(/\)\s*$/, '');
  const args = splitCssArgs(body);
  let startIndex = 0;
  let cx = width / 2;
  let cy = height / 2;
  const first = String(args[0] || '');
  if (!/^(?:rgba?|#)/i.test(first.trim())) {
    const at = first.match(/\bat\s+([-\d.]+)%?\s+([-\d.]+)%?/i);
    if (at) {
      cx = width * Number(at[1]) / 100;
      cy = height * Number(at[2]) / 100;
    }
    startIndex = 1;
  }
  const radius = Math.max(width, height) * 0.72;
  const stops = normalizeGradientStops(parseGradientColorStops(args.slice(startIndex)), radius);
  if (stops.length < 2) return;
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
  for (const stop of stops) gradient.addColorStop(stop.offset, rgbaString(stop.color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function splitCssLayers(value) {
  return splitCssArgs(String(value || '')).filter(Boolean);
}

function splitCssArgs(value) {
  const out = [];
  let depth = 0;
  let quote = '';
  let current = '';
  for (const char of String(value || '')) {
    if (quote) {
      current += char;
      if (char === quote) quote = '';
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }
    if (char === '(') depth += 1;
    if (char === ')') depth = Math.max(0, depth - 1);
    if (char === ',' && depth === 0) {
      out.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) out.push(current.trim());
  return out;
}

function parseGradientColorStops(args) {
  return args.map(parseGradientColorStop).filter(Boolean);
}

function parseGradientColorStop(value) {
  const raw = String(value || '').trim();
  const colorMatch = raw.match(/(rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8})/i);
  if (!colorMatch) return null;
  return {
    color: parseCanvasColor(colorMatch[1]),
    position: parseGradientPosition(raw.slice(colorMatch.index + colorMatch[1].length).trim()),
  };
}

function parseCanvasColor(value) {
  const raw = String(value || '').trim();
  const hex = raw.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    let value = hex[1];
    if (value.length === 3 || value.length === 4) value = value.replace(/./g, char => char + char);
    return {
      r: Number.parseInt(value.slice(0, 2), 16),
      g: Number.parseInt(value.slice(2, 4), 16),
      b: Number.parseInt(value.slice(4, 6), 16),
      a: value.length >= 8 ? Number.parseInt(value.slice(6, 8), 16) / 255 : 1,
    };
  }
  const rgba = raw.match(/rgba?\(([^)]+)\)/i);
  if (rgba) {
    const parts = rgba[1].split(',').map(part => part.trim());
    return {
      r: cssColorComponent(parts[0]),
      g: cssColorComponent(parts[1]),
      b: cssColorComponent(parts[2]),
      a: parts[3] == null ? 1 : cssAlpha(parts[3]),
    };
  }
  const srgb = raw.match(/^color\(\s*(?:srgb|display-p3)\s+([^)]+)\)$/i);
  if (srgb) {
    const parts = srgb[1].split('/').map(part => part.trim());
    const channels = parts[0].split(/\s+/).filter(Boolean);
    return {
      r: cssColorComponent(channels[0], true),
      g: cssColorComponent(channels[1], true),
      b: cssColorComponent(channels[2], true),
      a: parts[1] == null ? 1 : cssAlpha(parts[1]),
    };
  }
  return { r: 255, g: 255, b: 255, a: 1 };
}

function cssColorComponent(value, unitInterval = false) {
  const raw = String(value || '').trim();
  if (raw.endsWith('%')) return Math.max(0, Math.min(255, Number(raw.slice(0, -1)) * 2.55 || 0));
  const number = Number(raw);
  if (unitInterval) return Math.max(0, Math.min(255, number * 255 || 0));
  return Math.max(0, Math.min(255, number || 0));
}

function cssAlpha(value) {
  const raw = String(value || '').trim();
  if (raw.endsWith('%')) return Math.max(0, Math.min(1, Number(raw.slice(0, -1)) / 100 || 0));
  return Math.max(0, Math.min(1, Number(raw) || 0));
}

function parseGradientPosition(raw) {
  const match = String(raw || '').match(/([-\d.]+)(%|px)?/);
  if (!match) return null;
  return {
    value: Number(match[1]),
    unit: match[2] || '%',
  };
}

function normalizeGradientStops(stops, pixelSpan) {
  const list = stops.filter(stop => stop?.color);
  if (!list.length) return [];
  for (let i = 0; i < list.length; i += 1) {
    const position = list[i].position;
    if (!position) {
      list[i].offset = list.length === 1 ? 0 : i / (list.length - 1);
    } else if (position.unit === 'px') {
      list[i].offset = pixelSpan ? position.value / pixelSpan : 0;
    } else {
      list[i].offset = position.value / 100;
    }
  }
  list[0].offset = Number.isFinite(list[0].offset) ? list[0].offset : 0;
  list[list.length - 1].offset = Number.isFinite(list.at(-1).offset) ? list.at(-1).offset : 1;
  let last = 0;
  for (const stop of list) {
    stop.offset = Math.max(last, Math.min(1, Number.isFinite(stop.offset) ? stop.offset : last));
    last = stop.offset;
  }
  return list;
}

function rgbaString(color) {
  return `rgba(${Math.round(color.r)},${Math.round(color.g)},${Math.round(color.b)},${color.a})`;
}

function roundedRectPath(ctx, x, y, w, h, radius) {
  const r = Math.min(radius, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function backgroundUrl(backgroundImage) {
  const raw = String(backgroundImage || '');
  const quoted = raw.match(/url\(\s*(['"])(.*?)\1\s*\)/);
  const unquoted = raw.match(/url\(\s*([^)]*?)\s*\)/);
  const value = quoted?.[2] || unquoted?.[1];
  if (!value) return null;
  try {
    return new URL(value, location.href).href;
  } catch {
    return null;
  }
}

function isTurbulenceDataImage(url) {
  try {
    return String(url || '').startsWith('data:image/svg+xml') && decodeURIComponent(url).includes('feTurbulence');
  } catch {
    return String(url || '').includes('feTurbulence');
  }
}

function maxCssRadius(style, width = 0, height = 0) {
  return Math.max(
    cssRadiusPx(style.borderTopLeftRadius, width, height),
    cssRadiusPx(style.borderTopRightRadius, width, height),
    cssRadiusPx(style.borderBottomRightRadius, width, height),
    cssRadiusPx(style.borderBottomLeftRadius, width, height),
  );
}

function cssRadiusPx(value, width = 0, height = 0) {
  const raw = String(value || '').trim();
  if (!raw || raw === '0px') return 0;
  if (raw.includes('%')) {
    const pct = parseFloat(raw) || 0;
    return Math.min(Number(width) || 0, Number(height) || 0) * pct / 100;
  }
  return parseFloat(raw) || 0;
}

function finishEditablePptxAnimations(scope) {
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
}

function markUnicornOverlayText(slide, slideRect) {
  slide.querySelectorAll?.('[data-editable-pptx-required-text]')?.forEach(el => {
    el.removeAttribute('data-editable-pptx-required-text');
  });
  const frames = [...slide.querySelectorAll?.('.bt-unicorn-frame') || []]
    .filter(el => isVisibleElement(el, slideRect))
    .map(el => el.getBoundingClientRect());
  if (!frames.length) return;
  const intersects = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  const mark = (el) => {
    if (el) el.setAttribute('data-editable-pptx-required-text', 'unicorn-overlay');
  };
  const walker = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    if (!normalizeText(walker.currentNode.textContent || '')) continue;
    const parent = walker.currentNode.parentElement;
    if (!parent || !isVisibleElement(parent, slideRect)) continue;
    const range = document.createRange();
    range.selectNodeContents(walker.currentNode);
    const rects = [...range.getClientRects()];
    const bounds = range.getBoundingClientRect();
    range.detach?.();
    if ((rects.length ? rects : [bounds]).some(rect => rect.width > 1 && rect.height > 1 && frames.some(frame => intersects(rect, frame)))) {
      mark(parent);
    }
  }
  slide.querySelectorAll?.('svg text, text')?.forEach(el => {
    if (!isVisibleElement(el, slideRect)) return;
    const rect = el.getBoundingClientRect();
    if (rect.width > 1 && rect.height > 1 && frames.some(frame => intersects(rect, frame))) mark(el);
  });
}

function fallbackTextRisk(root, slideRect) {
  const texts = visibleTextInSubtree(root, slideRect);
  return { count: texts.length, sample: texts.join(' ').slice(0, 160) };
}

function visibleTextInSubtree(root, slideRect) {
  const texts = [];
  const walk = (node) => {
    for (const child of node.childNodes || []) {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = normalizeText(child.textContent || '');
        if (!text) continue;
        const range = document.createRange();
        range.selectNodeContents(child);
        const rect = range.getBoundingClientRect();
        range.detach?.();
        if (rect.width > 1 && rect.height > 1) texts.push(text);
      } else if (child.nodeType === Node.ELEMENT_NODE && isVisibleElement(child, slideRect)) {
        walk(child);
      }
    }
  };
  walk(root);
  return texts;
}

function visibleTextInScreenshotRect(root, slideRect) {
  const slide = root.closest('#deck > .slide') || root;
  const targetRect = root.getBoundingClientRect();
  const texts = [];
  const seen = new Set();
  const add = (text, rect) => {
    const value = normalizeText(text || '');
    if (!value || rect.width <= 1 || rect.height <= 1) return;
    if (rect.right <= targetRect.left || rect.left >= targetRect.right || rect.bottom <= targetRect.top || rect.top >= targetRect.bottom) return;
    const key = `${value}:${Math.round(rect.left)}:${Math.round(rect.top)}:${Math.round(rect.width)}:${Math.round(rect.height)}`;
    if (seen.has(key)) return;
    seen.add(key);
    texts.push(value);
  };
  const walk = (node) => {
    for (const child of node.childNodes || []) {
      if (child.nodeType === Node.TEXT_NODE) {
        const parent = child.parentElement;
        if (!parent || !isVisibleElement(parent, slideRect)) continue;
        const range = document.createRange();
        range.selectNodeContents(child);
        const rects = [...range.getClientRects()];
        const bounds = range.getBoundingClientRect();
        range.detach?.();
        for (const rect of rects.length ? rects : [bounds]) add(child.textContent || '', rect);
      } else if (child.nodeType === Node.ELEMENT_NODE && isVisibleElement(child, slideRect)) {
        walk(child);
      }
    }
  };
  walk(slide);
  slide.querySelectorAll?.('svg text, text')?.forEach(el => {
    if (!isVisibleElement(el, slideRect)) return;
    add(el.textContent || '', el.getBoundingClientRect());
  });
  return { count: texts.length, sample: texts.join(' ').slice(0, 160) };
}

function visibleOverlayPaintInScreenshotRect(root, slideRect) {
  const slide = root.closest('#deck > .slide') || root;
  const targetRect = root.getBoundingClientRect();
  const items = [];
  const seen = new Set();
  const intersects = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  const mostlyTargetSized = (rect) => {
    const area = rect.width * rect.height;
    const targetArea = Math.max(1, targetRect.width * targetRect.height);
    return area / targetArea > 0.86
      && Math.abs(rect.left - targetRect.left) < 8
      && Math.abs(rect.top - targetRect.top) < 8
      && Math.abs(rect.right - targetRect.right) < 8
      && Math.abs(rect.bottom - targetRect.bottom) < 8;
  };
  const hasOverlayPaint = (el) => {
    const style = getComputedStyle(el);
    const bg = String(style.backgroundColor || '').trim();
    const bgImage = String(style.backgroundImage || '').trim();
    const hasBg = bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)';
    const hasBgImage = bgImage && bgImage !== 'none';
    const hasBorder = ['Top', 'Right', 'Bottom', 'Left'].some(side => {
      const width = parseFloat(style[`border${side}Width`] || '0') || 0;
      const color = String(style[`border${side}Color`] || '').trim();
      return width > 0 && color && color !== 'transparent' && color !== 'rgba(0, 0, 0, 0)';
    });
    return hasBg || hasBgImage || hasBorder || (style.boxShadow && style.boxShadow !== 'none') || ['IMG', 'SVG', 'CANVAS', 'VIDEO'].includes(el.tagName);
  };
  slide.querySelectorAll?.('*')?.forEach(el => {
    if (el === root || root.contains(el) || el.contains(root)) return;
    if (!isVisibleElement(el, slideRect) || !hasOverlayPaint(el)) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 2 || rect.height <= 2 || rect.width * rect.height < 120 || !intersects(rect, targetRect) || mostlyTargetSized(rect)) return;
    const key = `${el.tagName}:${Math.round(rect.left)}:${Math.round(rect.top)}:${Math.round(rect.width)}:${Math.round(rect.height)}`;
    if (seen.has(key)) return;
    seen.add(key);
    items.push(`${el.tagName.toLowerCase()}${el.className ? `.${String(el.className).trim().replace(/\s+/g, '.')}` : ''}`);
  });
  return { count: items.length, sample: items.slice(0, 8).join(' ').slice(0, 160) };
}

function collectDomFallbackTextNodes(root, slideRect, slideIndex) {
  const nodes = [];
  const walk = (node) => {
    for (const child of node.childNodes || []) {
      if (child.nodeType === Node.TEXT_NODE) {
        const parent = child.parentElement;
        if (!parent || !isVisibleElement(parent, slideRect)) continue;
        const textNode = captureTextNode(child, parent, slideRect, readStyle(parent), slideIndex);
        if (textNode) nodes.push(textNode);
      } else if (child.nodeType === Node.ELEMENT_NODE && isVisibleElement(child, slideRect)) {
        walk(child);
      }
    }
  };
  walk(root);
  return nodes;
}

function svgTextRisk(svg) {
  const texts = [...svg.querySelectorAll('text, foreignObject')]
    .map(el => normalizeText(el.textContent || ''))
    .filter(Boolean);
  return { count: texts.length, sample: texts.join(' ').slice(0, 160) };
}

async function fetchImageDataUrl(url, width = 0, height = 0, alpha = 1) {
  try {
    if (url.startsWith('data:image/svg+xml')) return await rasterizeSvgDataUrl(url, width, height, alpha);
    if (url.startsWith('data:image/')) return normalizeDataImageUrl(url);
    const response = await fetch(url, { credentials: new URL(url, location.href).origin === location.origin ? 'same-origin' : 'omit' });
    if (!response.ok) return null;
    const blob = await response.blob();
    if (!blob.type.startsWith('image/')) return null;
    const dataUrl = await blobToDataUrl(blob);
    if (blob.type === 'image/svg+xml') return await rasterizeSvgDataUrl(dataUrl, width, height, alpha);
    return dataUrl;
  } catch {
    return null;
  }
}

function normalizeDataImageUrl(url) {
  const raw = String(url || '');
  if (!raw.startsWith('data:image/')) return raw;
  if (/^data:image\/[^;,]+;base64,/i.test(raw)) return raw;
  const match = raw.match(/^data:(image\/[^;,]+)(?:;charset=[^,]+)?,(.*)$/i);
  if (!match) return raw;
  try {
    const decoded = decodeURIComponent(match[2]);
    return `data:${match[1]};base64,${btoa(unescape(encodeURIComponent(decoded)))}`;
  } catch {
    return raw;
  }
}

function rasterizeSvgDataUrl(url, width = 0, height = 0, alpha = 1) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(width || img.naturalWidth || 160));
        canvas.height = Math.max(1, Math.round(height || img.naturalHeight || 160));
        const ctx = canvas.getContext('2d');
        ctx.globalAlpha = Math.max(0, Math.min(1, Number(alpha) || 0));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/png'));
      } catch {
        resolve(normalizeDataImageUrl(url));
      }
    };
    img.onerror = () => resolve(normalizeDataImageUrl(url));
    img.src = normalizeDataImageUrl(url);
  });
}

function blobToDataUrl(blob) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(blob);
  });
}

function isVisibleElement(el, slideRect, style = getComputedStyle(el)) {
  if (!(el instanceof Element)) return false;
  if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity || 1) <= 0.01) return false;
  const rect = el.getBoundingClientRect();
  if (rect.width <= 0.5 || rect.height <= 0.5) return false;
  if (rect.right < slideRect.x || rect.left > slideRect.x + slideRect.w || rect.bottom < slideRect.y || rect.top > slideRect.y + slideRect.h) return false;
  return true;
}

function isMediaChrome(el) {
  return !!el.closest('script,style,noscript,template,#nav,#preview-panel,#slide-rail,.theme03-theme-toggle,.ctl,.spill,input');
}

function clippedRect(rect, slideRect) {
  const left = Math.max(rect.left, slideRect.x);
  const top = Math.max(rect.top, slideRect.y);
  const right = Math.min(rect.right, slideRect.x + slideRect.w);
  const bottom = Math.min(rect.bottom, slideRect.y + slideRect.h);
  if (right <= left || bottom <= top) return null;
  return { left, top, width: right - left, height: bottom - top };
}

function rectObject(rect) {
  return {
    x: rect.left ?? rect.x,
    y: rect.top ?? rect.y,
    w: rect.width ?? rect.w,
    h: rect.height ?? rect.h,
  };
}

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function hasPaint(color) {
  const raw = String(color || '').trim();
  return raw && raw !== 'transparent' && !/^rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)$/i.test(raw);
}

function hasAnyBorder(style) {
  return ['Top', 'Right', 'Bottom', 'Left'].some(side => parseFloat(style?.[`border${side}Width`] || '0') > 0 && hasPaint(style?.[`border${side}Color`]));
}

function cssPx(value) {
  const raw = String(value || '').trim();
  if (!raw || raw === 'auto') return null;
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : null;
}

function isTextClippedBackground(style) {
  const clip = `${style?.backgroundClip || ''} ${style?.webkitBackgroundClip || ''}`.toLowerCase();
  return clip.includes('text');
}

function textColorForStyle(style, node = {}) {
  const fill = parseCssColor(style?.webkitTextFillColor);
  if (fill) return fill;
  if (isTextClippedBackground(style)) {
    const gradientColor = colorFromBackgroundImage(style?.backgroundImage);
    if (gradientColor) return gradientColor;
  }
  const strokeWidth = parseFloat(style?.webkitTextStrokeWidth || '0') || 0;
  const stroke = strokeWidth > 0 ? parseCssColor(style?.webkitTextStrokeColor) : null;
  if (stroke) return { ...stroke, alpha: Math.min(stroke.alpha, 0.22) };
  const svgFill = parseCssColor(style?.fill);
  if (node.source === 'svg-text' && svgFill) return svgFill;
  const color = parseCssColor(style?.color);
  if (color) return color;
  if (svgFill) return svgFill;
  return { color: '111111', alpha: 1 };
}

function parseCssColor(value) {
  const raw = String(value || '').trim();
  if (!raw || raw === 'transparent') return null;
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(raw)) {
    const hex = raw.slice(1);
    return { color: (hex.length === 3 ? hex.replace(/./g, c => c + c) : hex).toUpperCase(), alpha: 1 };
  }
  if (!/^(?:rgba?|color)\(/i.test(raw)) return null;
  const parsed = parseCanvasColor(raw);
  if (parsed.a <= 0.01) return null;
  return canvasColorToCss(parsed);
}

function colorFromBackgroundImage(value) {
  const raw = String(value || '');
  if (!raw.includes('gradient')) return null;
  const colors = [...raw.matchAll(/rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8}/ig)]
    .map(match => parseCssColor(match[0]))
    .filter(Boolean);
  if (!colors.length) return null;
  const baseColors = colors.filter(color => color.alpha >= 0.85);
  const source = baseColors.length ? baseColors : colors;
  const rgb = source.reduce((acc, color) => {
    acc.r += Number.parseInt(color.color.slice(0, 2), 16);
    acc.g += Number.parseInt(color.color.slice(2, 4), 16);
    acc.b += Number.parseInt(color.color.slice(4, 6), 16);
    acc.a += color.alpha;
    return acc;
  }, { r: 0, g: 0, b: 0, a: 0 });
  const count = source.length;
  return {
    color: [rgb.r / count, rgb.g / count, rgb.b / count].map(n => clampColor(n).toString(16).padStart(2, '0')).join('').toUpperCase(),
    alpha: Math.max(0, Math.min(1, rgb.a / count)),
    gradient: true,
  };
}

function canvasColorToCss(color) {
  return {
    color: [color.r, color.g, color.b]
      .map(n => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase(),
    alpha: Math.max(0, Math.min(1, Number(color.a ?? 1))),
  };
}

function readBorders(style) {
  return ['Top', 'Right', 'Bottom', 'Left'].map(side => {
    const color = parseCssColor(style[`border${side}Color`]);
    const width = parseFloat(style[`border${side}Width`] || '0') || 0;
    const styleValue = style[`border${side}Style`];
    return {
      width: styleValue === 'none' || styleValue === 'hidden' ? 0 : width,
      color: color?.color || null,
      alpha: color?.alpha || 0,
    };
  });
}

function maxRadiusPx(style) {
  return Math.max(
    parseFloat(style.borderTopLeftRadius || '0') || 0,
    parseFloat(style.borderTopRightRadius || '0') || 0,
    parseFloat(style.borderBottomRightRadius || '0') || 0,
    parseFloat(style.borderBottomLeftRadius || '0') || 0,
  );
}

function parseBoxShadow(value) {
  const raw = String(value || '');
  if (!raw || raw === 'none') return null;
  const color = parseCssColor(raw.match(/rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8}/i)?.[0]);
  if (!color) return null;
  const numbers = raw.replace(/rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8}/ig, '').match(/-?\d+(\.\d+)?px/g) || [];
  const offsetX = parseFloat(numbers[0] || '0') || 0;
  const offsetY = parseFloat(numbers[1] || '0') || 0;
  const blur = parseFloat(numbers[2] || '8') || 8;
  return pptShadow(color, offsetX, offsetY, blur);
}

function parseDropShadow(value) {
  const raw = String(value || '');
  const match = raw.match(/drop-shadow\(([^)]+(?:\)[^)]+)?)\)/i);
  if (!match) return null;
  const body = match[1];
  const color = parseCssColor(body.match(/rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8}/i)?.[0]) || { color: '000000', alpha: 0.35 };
  const numbers = body.replace(/rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8}/ig, '').match(/-?\d+(\.\d+)?px/g) || [];
  const offsetX = parseFloat(numbers[0] || '0') || 0;
  const offsetY = parseFloat(numbers[1] || '0') || 0;
  const blur = parseFloat(numbers[2] || '8') || 8;
  return pptShadow(color, offsetX, offsetY, blur);
}

function pptShadow(color, offsetX, offsetY, blur) {
  const angle = ((Math.atan2(offsetY, offsetX) * 180 / Math.PI) + 360) % 360;
  const offset = Math.sqrt(offsetX ** 2 + offsetY ** 2) * PX_TO_PT;
  return {
    type: 'outer',
    color: color.color,
    opacity: Math.max(0.05, Math.min(0.7, color.alpha)),
    blur: Math.max(1, Math.min(24, blur * PX_TO_PT)),
    offset: Math.max(1, Math.min(18, offset)),
    angle,
  };
}

function combinedTransparency(alpha, opacity) {
  const composite = Math.max(0, Math.min(1, Number(alpha ?? 1) * Number(opacity || 1)));
  return Math.round((1 - composite) * 100);
}

function elementTransparency(opacity) {
  return combinedTransparency(1, opacity);
}

function rotateFromTransform(value) {
  const raw = String(value || '');
  if (!raw || raw === 'none') return 0;
  const matrix = raw.match(/matrix\(([^)]+)\)/);
  if (!matrix) return 0;
  const [a, b] = matrix[1].split(',').map(Number);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return 0;
  return Math.round(Math.atan2(b, a) * 180 / Math.PI);
}

function scaleFromTransform(value) {
  const raw = String(value || '');
  const matrix = raw.match(/matrix\(([^)]+)\)/);
  if (!matrix) return { x: 1, y: 1 };
  const [a, b, c, d] = matrix[1].split(',').map(Number);
  return {
    x: Number.isFinite(a) && Number.isFinite(b) ? Math.hypot(a, b) || 1 : 1,
    y: Number.isFinite(c) && Number.isFinite(d) ? Math.hypot(c, d) || 1 : 1,
  };
}

function letterSpacing(value) {
  const n = parseFloat(value || '0');
  return Number.isFinite(n) ? Math.max(-2, Math.min(12, n * PX_TO_PT)) : 0;
}

function firstFont(value) {
  const families = String(value || 'Arial')
    .split(',')
    .map(item => item.replace(/^["']|["']$/g, '').trim())
    .filter(Boolean);
  for (const family of families) {
    if (/space mono|monospace/i.test(family)) return 'Menlo';
    if (/noto sans sc|pingfang|system-ui|-apple-system|blinkmacsystemfont|sans-serif/i.test(family)) return 'PingFang SC';
    if (/noto serif sc|songti|serif/i.test(family)) return 'Songti SC';
  }
  return families[0] || 'Arial';
}

function pptFontSize(px, fontFace) {
  const scale = /PingFang SC|Songti SC/i.test(fontFace) ? 0.60
    : /Menlo/i.test(fontFace) ? 0.66
      : PX_TO_PT;
  return px * scale;
}

function normalizeAlign(value) {
  if (value === 'center' || value === 'right' || value === 'justify') return value;
  return 'left';
}

function normalizeValign(value) {
  if (value === 'bottom' || value === 'sub') return 'bottom';
  if (value === 'middle') return 'mid';
  return 'top';
}

function isNoWrap(value) {
  return value === 'nowrap';
}

function applyTextTransform(text, transform) {
  if (transform === 'uppercase') return text.toUpperCase();
  if (transform === 'lowercase') return text.toLowerCase();
  return text;
}

function clampColor(value) {
  return Math.max(0, Math.min(255, Math.round(Number.parseFloat(value) || 0)));
}

function round(value) {
  return Math.round(value * 10000) / 10000;
}
