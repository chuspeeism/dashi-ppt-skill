// 可编辑 PPTX 的浏览器端导出入口:在用户正在浏览的页面里原地完成「采集 → 截图 →
// 组装」,产出 PPTX blob。服务端导出(editable.mjs)在沙箱型宿主(如豆包)里可能
// 起不了任何无头浏览器(五层防线之后仍有不可控形态);用户自己的浏览器是正常桌面
// 进程,对宿主沙箱免疫——与 PDF 的 browser-capture 兜底同一架构思路。
//
// 与服务端共享:采集器(collector-functions.mjs)与组装核心(editable-core.mjs)
// 完全同源;差异只在宿主适配——
// - 截图:服务端用 CDP locator.screenshot(视口合成),这里用 html-to-image
//   (元素子树克隆渲染,天然透明背景,免去服务端的 alpha matte 黑白双拍);
// - screenshot-rect 模式(unicorn 动态背景等):截整页 slide 后按视口坐标换算
//   到布局坐标用 canvas 裁剪,与服务端"截视口区域"语义对齐;
// - 透明 PNG 裁边/出血后处理(pngjs)浏览器端暂缺,经 core 的适配器透传。
import {
  applyEditablePptxSnapshot,
  collectActiveSlide,
  finishEditablePptxAnimations,
  hideNodeForScreenshot,
  restoreHiddenScreenshotStyles,
} from './collector-functions.mjs';
import {
  buildEditablePptx,
  emitProgress,
  walkCapturedNodes,
} from './editable-core.mjs';

const waitFrame = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
const waitMs = ms => new Promise(resolve => setTimeout(resolve, ms));

export { applyEditablePptxSnapshot } from './collector-functions.mjs';

export async function exportEditablePptxInBrowser(options = {}) {
  const htmlToImage = options.htmlToImage || window.htmlToImage;
  const PptxGenJSCtor = options.PptxGenJS || window.PptxGenJS;
  if (!htmlToImage?.toPng) throw new Error('浏览器端导出需要 html-to-image(assets/vendor/html-to-image.js)。');
  if (typeof PptxGenJSCtor !== 'function') throw new Error('浏览器端导出需要 PptxGenJS(assets/vendor/pptxgen.bundle.js)。');
  const title = options.title || document.title || 'Editable Deck Export';

  await setupDeckForExport();
  try {
    if (options.snapshot) {
      await emitProgress(options.onProgress, { stage: 'preparing', detail: '应用页面编辑状态', percent: 10 });
      await applyEditablePptxSnapshot(options.snapshot);
    }
    const deck = await collectDeckInBrowser(options, htmlToImage);
    const { pptx, warnings, totals, slideSummaries } = await buildEditablePptx(PptxGenJSCtor, deck, {
      title,
      onProgress: options.onProgress,
    });
    await emitProgress(options.onProgress, { stage: 'saving', detail: '生成 PPTX 文件', percent: 92 });
    const blob = await pptx.write('blob');
    const report = {
      captureMode: 'captured-tree',
      generationMode: 'browser-capture',
      slideCount: deck.slides.length,
      textObjects: totals.textObjects,
      shapeObjects: totals.shapeObjects,
      imageObjects: totals.imageObjects,
      slideSummaries,
      warnings,
    };
    return { blob, report };
  } finally {
    await teardownDeckAfterExport();
  }
}

async function setupDeckForExport() {
  window.__editablePptxRestoreState = {
    locked: window.__deckExportLocked,
    themePack: document.documentElement.dataset.themePack || '',
  };
  window.__deckExportLocked = true;
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
  await waitFrame();
}

async function teardownDeckAfterExport() {
  try {
    const restore = window.__editablePptxRestoreState || {};
    if ((document.documentElement.dataset.themePack || '') !== (restore.themePack || '')) {
      window.__setActiveThemePack?.(restore.themePack || '', { navigate: false });
    }
    window.__deckExportLocked = Boolean(restore.locked);
    window.__setEditableTextMode?.(window.__canEditDeck?.());
    delete window.__editablePptxRestoreState;
    document.getElementById('dashi-export-no-radius')?.remove();
    window.__layoutDeck?.();
    await waitFrame();
  } catch {}
}

async function collectDeckInBrowser(options, htmlToImage) {
  const slides = [];
  const warnings = [];
  const visible = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
  const count = visible.length;
  for (let i = 0; i < count; i += 1) {
    await emitProgress(options.onProgress, {
      stage: 'collecting',
      detail: `采集页面结构 ${i + 1}/${count}`,
      percent: 16 + Math.round((i / Math.max(1, count)) * 48),
    });
    window.go?.(i, { animate: false, force: true });
    const current = (window.__getVisibleSlides?.() || visible)[i];
    window.__ensureRuntimeSlideRendered?.(current);
    window.__restoreEffectIframes?.(current);
    window.__layoutDeck?.();
    await waitFrame();
    finishEditablePptxAnimations?.(current || document);
    await waitFrame();
    await waitMs(120);
    const slideData = await collectActiveSlide(i + 1);
    await resolveScreenshotsInBrowser(slideData.root, warnings, htmlToImage);
    slides.push(slideData);
  }
  return { slides, warnings };
}

async function resolveScreenshotsInBrowser(root, warnings, htmlToImage) {
  const targets = [];
  walkCapturedNodes(root, node => {
    if (node.elementScreenshot && node.exportId) targets.push(node);
  });
  for (const node of targets) {
    let hiddenToken = null;
    try {
      if (node.stripTextForScreenshot || node.stripOverlayForScreenshot) {
        hiddenToken = hideNodeForScreenshot({
          exportId: node.exportId,
          mode: node.screenshotMode || (node.imageKind === 'unicorn-background' ? 'screenshot-rect' : 'descendant'),
          stripText: Boolean(node.stripTextForScreenshot),
          stripOverlay: Boolean(node.stripOverlayForScreenshot),
          screenshotRect: node.screenshotRect || null,
        });
        if (hiddenToken) await waitFrame();
      }
      const el = document.querySelector(`#deck > .slide.active [data-editable-pptx-export-id="${node.exportId}"], #deck > .slide[data-deck-active] [data-editable-pptx-export-id="${node.exportId}"]`)
        || document.querySelector(`[data-editable-pptx-export-id="${node.exportId}"]`);
      if (!el) {
        warnings.push({ slide: node.slideIndex, type: 'element-screenshot-missing', tag: node.tag, kind: node.imageKind });
        continue;
      }
      const dataUrl = node.screenshotRect
        ? await captureViewportRect(node.screenshotRect, htmlToImage)
        : await captureElementSnapshot(el, htmlToImage);
      if (dataUrl) node.imageData = dataUrl;
      else warnings.push({ slide: node.slideIndex, type: 'element-screenshot-failed', tag: node.tag, kind: node.imageKind });
    } catch (error) {
      warnings.push({ slide: node.slideIndex, type: 'element-screenshot-failed', tag: node.tag, kind: node.imageKind, message: String(error?.message || error) });
    } finally {
      if (hiddenToken) {
        try { restoreHiddenScreenshotStyles(hiddenToken); } catch {}
      }
    }
  }
}

async function captureElementSnapshot(el, htmlToImage) {
  const capture = htmlToImage.toPng(el, {
    pixelRatio: elementPixelRatio(el),
    filter: screenshotCloneFilter,
  });
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('element capture timed out')), 30000));
  return Promise.race([capture, timeout]);
}

// screenshot-rect 模式(如 unicorn 动态背景):服务端语义是「截取视口中该矩形的合成
// 结果」。浏览器端等价实现:对当前 slide 做整页克隆渲染,再按 视口坐标 → slide 布局
// 坐标 的缩放关系用 canvas 裁出目标区域(deck 在预览里被 transform 缩放,视口 rect
// 与布局像素不同尺度)。
async function captureViewportRect(rect, htmlToImage) {
  const slide = document.querySelector('#deck > .slide.active') || document.querySelector('#deck > .slide[data-deck-active]');
  if (!slide) return null;
  const slideViewportRect = slide.getBoundingClientRect();
  const layoutWidth = slide.offsetWidth || 1920;
  const layoutHeight = slide.offsetHeight || 1080;
  const scale = slideViewportRect.width > 0 ? layoutWidth / slideViewportRect.width : 1;
  const pixelRatio = elementPixelRatio(slide);
  const full = await htmlToImage.toPng(slide, { pixelRatio, filter: screenshotCloneFilter });
  const image = await loadImage(full);
  const sx = Math.max(0, (Number(rect.x || 0) - slideViewportRect.left) * scale * pixelRatio);
  const sy = Math.max(0, (Number(rect.y || 0) - slideViewportRect.top) * scale * pixelRatio);
  const sw = Math.min(image.width - sx, Math.max(1, Number(rect.w || 0) * scale * pixelRatio));
  const sh = Math.min(image.height - sy, Math.max(1, Number(rect.h || 0) * scale * pixelRatio));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(sw));
  canvas.height = Math.max(1, Math.round(sh));
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/png');
}

function elementPixelRatio(el) {
  const rect = el.getBoundingClientRect?.() || { width: 0, height: 0 };
  const maxSide = Math.max(el.offsetWidth || rect.width || 1, el.offsetHeight || rect.height || 1);
  // 限制单图输出边长 ~3000px,避免超大节点在低端设备上撑爆内存。
  return Math.max(1, Math.min(2, 3000 / Math.max(1, maxSide)));
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('capture image decode failed'));
    img.src = src;
  });
}

const SCREENSHOT_IGNORED_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE']);

function screenshotCloneFilter(domNode) {
  if (domNode?.nodeType === 1 && SCREENSHOT_IGNORED_TAGS.has(domNode.tagName)) return false;
  if (domNode?.nodeType === 1 && domNode.tagName === 'IMG' && !(domNode.currentSrc || domNode.getAttribute('src'))) return false;
  return true;
}
