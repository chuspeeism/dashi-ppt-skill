// 可编辑 PPTX 组装核心(同构:node 与浏览器共用)。
//
// 输入是采集器(collector-functions.mjs)产出的 deck 节点树,输出是 pptxgenjs 的
// API 调用序列。本文件禁止 import 任何 node 内置模块或 node 专属包:
// - PptxGenJS 构造器由宿主入口传入(node 侧 require('pptxgenjs'),浏览器侧用
//   vendor pptxgen.bundle.js 的全局);
// - 透明 PNG 的裁边/出血处理是可选增强,由宿主通过 configureImageAdapter 注入
//   (node 侧 pngjs 实现在 editable.mjs;浏览器侧可暂缺,仅透传)。
import {
  backgroundHasTransparentStop,
  isTextClippedBackground,
  maxCssRadius,
  normalizeText,
  parseCanvasColor,
  rotateFromTransform,
  splitCssArgs,
  transparentCssPaint,
} from './collector-functions.mjs';

let imageAdapter = null;
export function configureImageAdapter(adapter) {
  imageAdapter = adapter;
}
export function adaptTransparentPng(dataUrl, options = {}) {
  if (!imageAdapter?.normalizeTransparentPng) return dataUrl;
  try {
    return imageAdapter.normalizeTransparentPng(dataUrl, options);
  } catch {
    return dataUrl;
  }
}

export const SOURCE_W = 1920;
export const SOURCE_H = 1080;
export const PPT_W = 16;
export const PPT_H = 9;
export const PX_TO_PT = 0.75;

export // 把主题的 web 字体(Google Fonts,浏览器里由 @font-face/woff2 提供)映射成
// Windows/macOS/WPS 都自带的近似字体再写入 PPTX。原名写入时,没有安装这些字体的
// 机器(尤其 WPS/Office 中文版)会做不可控的字体替换,真实用户案例(issue #6)里
// 数字被替换成几何符号乱码。中文字体不在此映射:CJK 缺字回退由 charset 驱动,行为
// 成熟可靠。注意 pptFontScale/pptTextYOffset 等度量启发式匹配的是 fontStack(含原
// style.fontFamily),不受该映射影响。
const PPTX_SAFE_FONT_MAP = [
  [/^Anton$/i, 'Impact'],
  [/^(Space Mono|IBM Plex Mono|JetBrains Mono|SFMono.*|ui-monospace|monospace|Menlo|Consolas)$/i, 'Courier New'],
  [/^(Newsreader.*|serif)$/i, 'Georgia'],
  [/^Caveat$/i, 'Georgia'],
  [/^(Archivo.*|Space Grotesk|IBM Plex Sans|Inter|Arimo|sans-serif|system-ui|-apple-system)$/i, 'Arial'],
];

export async function emitProgress(onProgress, update) {
  if (typeof onProgress !== 'function') return;
  try {
    await onProgress(update);
  } catch {}
}

export function shouldUseAlphaMatteScreenshot(node) {
  return isBrowserVisualImageKind(node?.imageKind);
}

export function shouldApplyNodeRadiusAlphaMask(node) {
  return !isBrowserVisualImageKind(node?.imageKind);
}

export function walkCapturedNodes(node, visit) {
  if (!node) return;
  visit(node);
  for (const child of node.children || []) walkCapturedNodes(child, visit);
}

export function screenshotClip(rect) {
  return {
    x: Math.max(0, Math.floor(Number(rect.x || 0))),
    y: Math.max(0, Math.floor(Number(rect.y || 0))),
    width: Math.max(1, Math.ceil(Number(rect.w ?? rect.width ?? 1))),
    height: Math.max(1, Math.ceil(Number(rect.h ?? rect.height ?? 1))),
  };
}

export function renderCapturedNode(slide, node, slideRect, warnings, totals) {
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
  for (const child of sortedChildrenForRendering(node.children || [])) renderCapturedNode(slide, child, slideRect, warnings, totals);
}

export function sortedChildrenForRendering(children) {
  return children
    .map((child, index) => ({ child, index }))
    .sort((a, b) => stackingOrder(a.child) - stackingOrder(b.child) || a.index - b.index)
    .map(item => item.child);
}

export function stackingOrder(node) {
  const z = String(node?.style?.zIndex || '').trim();
  if (!z || z === 'auto') return 0;
  const value = Number.parseFloat(z);
  return Number.isFinite(value) ? value : 0;
}

export function renderBox(slide, node, slideRect, warnings, totals) {
  if (isBrowserVisualImageKind(node.imageKind)) return;
  const c = coords(node, slideRect);
  if (c.w < 0.003 || c.h < 0.003) return;
  const style = node.style || {};
  if (shouldSkipNativeDecorativeBlurBox(node, c, style)) {
    warnings.push({ slide: node.slideIndex, type: 'decorative-blur-shape-skipped', tag: node.tag });
    return;
  }
  const borderTriangle = cssBorderTriangle(style, c);
  const hasLocalBackgroundImage = node.backgroundImageData || node.patternImageData;
  const polygonPoints = borderTriangle?.points || cssClipPolygonPoints(style.clipPath, c);
  const allowGradientFillApproximation = !hasLocalBackgroundImage && !shouldSuppressGradientFillApproximation(node, style, c);
  const fill = borderTriangle?.fill || (isTextClippedBackground(style)
    ? parseCssColor(style.backgroundColor)
    : parseCssColor(style.backgroundColor) || (allowGradientFillApproximation ? colorFromBackgroundImage(style.backgroundImage) : null));
  const radiusPx = maxCssRadius(style, node.rect?.w || 0, node.rect?.h || 0);
  const radius = Math.min(radiusPx, 48) / slideRect.w * PPT_W;
  const borders = readBorders(style);
  const hasBorder = borders.some(border => border.width > 0 && border.color);
  const uniformBorder = uniformBorderStyle(borders);
  const shadow = parseBoxShadow(style.boxShadow);
  const rotate = rotateFromTransform(style.transform) || 0;
  const hasFill = fill && fill.alpha > 0.01;
  if (isTinyRotatedBorderOnlyPseudo(node, c, hasFill, hasBorder, rotate)) {
    warnings.push({ slide: node.slideIndex, type: 'decorative-pseudo-border-skipped', count: 1 });
    return;
  }
  const isLargeGradient = fill?.gradient && c.w > PPT_W * 0.72 && c.h > PPT_H * 0.72;
  const isNarrowGradientLine = fill?.gradient && Math.min(c.w, c.h) <= 0.12 && Math.max(c.w, c.h) >= 0.35;
  const isDecorativeGradient = fill?.gradient && !isLargeGradient && !isNarrowGradientLine && !(node.children || []).length;
  const fillAlpha = isDecorativeGradient ? Math.min(fill.alpha, 0.08) : fill?.alpha;
  const forceRectForThinPill = radius > 0.02 && !hasBorder && Math.min(c.w, c.h) <= 0.16 && Math.max(c.w, c.h) >= 0.35;
  const shapeName = polygonPoints ? 'custGeom'
    : isCircleLikeBox(node, radiusPx) ? 'ellipse'
    : forceRectForThinPill ? 'rect'
    : isDecorativeGradient && radius > Math.min(c.w, c.h) * 0.2
    ? 'ellipse'
    : radius > 0.02 ? 'roundRect' : 'rect';
  const firstBorder = borders.find(border => border.color);
  const line = borderTriangle
    ? { color: fill?.color || 'FFFFFF', transparency: 100 }
    : hasBorder && rotate
    ? { color: firstBorder?.color || fill?.color || 'FFFFFF', transparency: combinedTransparency(firstBorder?.alpha || 1, style.opacity), width: Math.max(...borders.map(border => border.width || 0)) * PX_TO_PT }
    : hasBorder && uniformBorder
    ? { color: uniformBorder.color, transparency: combinedTransparency(uniformBorder.alpha, style.opacity), width: uniformBorder.width * PX_TO_PT }
    : { color: hasBorder ? firstBorder?.color || fill?.color || 'FFFFFF' : 'FFFFFF', transparency: 100 };

  if (hasFill || hasBorder || borderTriangle) {
    try {
      slide.addShape(shapeName, {
        ...c,
        fill: hasFill
          ? { color: fill.color, transparency: combinedTransparency(fillAlpha, style.opacity) }
          : { color: 'FFFFFF', transparency: 100 },
        line,
        rectRadius: shapeName === 'roundRect' ? radius || undefined : undefined,
        points: polygonPoints || undefined,
        shadow: hasFill && shadow ? shadow : undefined,
        rotate: rotate || undefined,
      });
      totals.shapeObjects += 1;
    } catch {
      warnings.push({ slide: node.slideIndex, type: 'render-shape-failed', tag: node.tag });
    }
  }

  if (hasBorder && !uniformBorder && !rotate && !borderTriangle && shapeName !== 'ellipse') {
    renderBorders(slide, c, borders, slideRect, style.opacity, totals);
  }
}

export function isTinyRotatedBorderOnlyPseudo(node, c, hasFill, hasBorder, rotate) {
  return node.tag === 'pseudo'
    && !node.text
    && !hasFill
    && hasBorder
    && rotate
    && Math.max(c.w, c.h) < 0.35
    && Math.min(c.w, c.h) < 0.18;
}

export function shouldSkipNativeDecorativeBlurBox(node, c, style) {
  if (!String(style?.filter || '').includes('blur(')) return false;
  if (nodeHasTextDescendant(node)) return false;
  if ((node.children || []).some(child => child.tag && child.tag !== '#text')) return false;
  const areaRatio = c.w * c.h / (PPT_W * PPT_H);
  if (areaRatio < 0.08) return false;
  const backgroundImage = String(style.backgroundImage || '');
  const hasPaint = !transparentCssPaint(style.backgroundColor)
    || (backgroundImage && backgroundImage !== 'none')
    || (style.boxShadow && style.boxShadow !== 'none');
  return Boolean(hasPaint);
}

export function nodeHasTextDescendant(node) {
  if (node.tag === '#text' && normalizeText(node.text || '')) return true;
  if (node.text && normalizeText(node.text)) return true;
  return (node.children || []).some(child => nodeHasTextDescendant(child));
}

export function renderBorders(slide, c, borders, slideRect, opacity, totals) {
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

export function uniformBorderStyle(borders) {
  if (!borders.length || !borders.every(border => border.width > 0 && border.color)) return null;
  const [first] = borders;
  if (!borders.every(border => Math.abs(border.width - first.width) < 0.25 && border.color === first.color && Math.abs(border.alpha - first.alpha) < 0.02)) return null;
  return first;
}

export function renderText(slide, node, slideRect, warnings, totals) {
  let value = applyTextTransform(node.text || '', node.style?.textTransform);
  if (!value.trim()) return;
  const c = coords(node, slideRect);
  if (c.w < 0.01 || c.h < 0.01) return;
  const style = node.style || {};
  const color = textColorForStyle(style, node);
  const fontSizePx = Math.max(4, Math.min(900, parseFloat(style.fontSize || '16') || 16));
  if (isDecorativeStrokeOnlyText(style, fontSizePx)) return;
  if (isDecorativeLowAlphaText(color, style, fontSizePx)) return;
  if (isDecorativeRotatedSmallText(value, style, fontSizePx, node)) return;
  if (isDecorativeSparkleText(value)) {
    return;
  }
  const fontFace = fontFaceForText(style.fontFamily, value);
  const weight = String(style.fontWeight || '');
  const singleLine = node.singleLine && !/[\r\n]/.test(value);
  const verticalText = isVerticalWritingMode(style);
  const verticalContainerText = Boolean(node.textMetrics?.verticalContainer);
  const autoWidth = !node.clipped && !verticalText && singleLine && shouldUseAutoWidthText(value, fontSizePx, c, node);
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
    fontSize: pptFontSize(fontSizePx, fontFace, style, value),
    color: color.color,
    bold: weight === 'bold' || Number.parseInt(weight, 10) >= 600,
    italic: style.fontStyle === 'italic',
    underline: String(style.textDecorationLine || '').includes('underline'),
    strike: String(style.textDecorationLine || '').includes('line-through'),
    align,
    valign: verticalContainerText ? 'mid' : normalizeValign(style.verticalAlign),
    rotate: rotateFromTransform(style.transform) || 0,
    transparency: combinedTransparency(color.alpha, style.opacity),
    charSpacing: letterSpacing(style.letterSpacing),
  };
  const yOffset = verticalContainerText ? 0 : pptTextYOffset(c, fontSizePx, fontFace, style, value, node);
  if (yOffset) options.y += yOffset;
  const lineSpacing = pptLineSpacing(style.lineHeight, fontSizePx, fontFace, style, value);
  if (lineSpacing) {
    options.lineSpacing = lineSpacing;
  }
  if (verticalText) {
    options.vert = 'eaVert';
  }
  if (/Songti SC/i.test(fontStack(style, fontFace)) && fontSizePx >= 80 && node.parentTag === 'span') {
    options.y = Math.max(0, options.y - c.h * 0.28);
  }
  if (style.materialBackground === 'true' && fontSizePx >= 72 && /PingFang SC|Songti SC/i.test(fontStack(style, fontFace))) {
    options.y += c.h * 0.12;
  }
  if (!autoWidth) {
    options.w = Math.max(0.08, c.w + 0.04);
  } else {
    options.w = singleLineWidth(value, fontSizePx, c, fontFace, style);
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

export function isDecorativeStrokeOnlyText(style, fontSizePx) {
  const strokeWidth = parseFloat(style?.webkitTextStrokeWidth || '0') || 0;
  if (strokeWidth <= 0 || fontSizePx < 120) return false;
  const fill = parseCssColor(style?.webkitTextFillColor);
  const color = parseCssColor(style?.color);
  const stroke = parseCssColor(style?.webkitTextStrokeColor);
  return !fill && !color && (!stroke || stroke.alpha <= 0.25);
}

export function isDecorativeLowAlphaText(color, style, fontSizePx) {
  const opacity = Number(style?.opacity || 1);
  const alpha = Math.max(0, Math.min(1, Number(color?.alpha ?? 1) * (Number.isFinite(opacity) ? opacity : 1)));
  return fontSizePx >= 100 && alpha <= 0.08;
}

export function isDecorativeRotatedSmallText(value, style, fontSizePx, node = {}) {
  if (node.source === 'svg-text' || node.requiredText || isVerticalWritingMode(style) || !rotateFromTransform(style?.transform) || fontSizePx > 32) {
    return false;
  }
  const color = parseCssColor(style?.webkitTextFillColor) || parseCssColor(style?.color);
  const opacity = Number(style?.opacity || 1);
  const alpha = Math.max(0, Math.min(1, Number(color?.alpha ?? 1) * (Number.isFinite(opacity) ? opacity : 1)));
  return alpha <= 0.18
    && String(value || '').trim().length >= 4;
}

export function isVerticalWritingMode(style = {}) {
  return String(style.writingMode || '').includes('vertical');
}

export function isDecorativeSparkleText(value) {
  return /^[✦✧✶✷✸✹✺✻✼✽✾✿★☆＊*]+$/.test(String(value || '').trim());
}

export function shouldUseAutoWidthText(value, fontSizePx, box, node) {
  const text = String(value || '').trim();
  if (!text) return false;
  const units = textUnits(text);
  const parentTag = String(node.parentTag || '');
  if (['p', 'li', 'td', 'th', 'blockquote'].includes(parentTag) && units > 24) return false;
  if (units <= 20) return true;
  if (fontSizePx >= 36 && units <= 32) return true;
  if (!['p', 'li', 'td', 'th', 'blockquote'].includes(parentTag) && fontSizePx >= 24 && units <= 44) return true;
  return box.w < 1.3 && units <= 28;
}

export function singleLineWidth(value, fontSizePx, box, fontFace, style = {}) {
  const fontPt = pptFontSize(fontSizePx, fontFace, style, value);
  const units = textUnits(value);
  const spacing = Math.max(0, letterSpacing(style.letterSpacing)) * Math.max(0, Array.from(String(value || '')).length - 1) / 72 * 1.75;
  const estimated = units * fontPt / 72 + spacing;
  const width = Math.max(0.08, box.w + 0.1, estimated + 0.12);
  return Math.min(PPT_W - Math.max(0, box.x), width);
}

export function textUnits(value) {
  let units = 0;
  for (const char of String(value || '')) {
    if (/\s/.test(char)) units += 0.32;
    else if (/[\u2e80-\u9fff]/.test(char)) units += 0.96;
    else if (/[A-Z0-9]/.test(char)) units += 0.64;
    else units += 0.55;
  }
  return units;
}

export function renderNodeImage(slide, node, slideRect, warnings, totals) {
  const items = [];
  if (node.patternImageData) items.push({ data: node.patternImageData, kind: 'pattern-background' });
  if (node.backgroundImageData) items.push({ data: node.backgroundImageData, kind: 'background-image', transparency: node.backgroundImageTransparency });
  if (node.imageData) items.push({ data: node.imageData, kind: node.imageKind || node.tag });
  if (!items.length) return;

  const c = coords(node, slideRect, { visual: node.elementScreenshot });
  const rotate = node.elementScreenshot ? 0 : rotateFromTransform(node.style?.transform) || 0;
  for (const item of items) {
    try {
      slide.addImage({
        data: adaptTransparentPng(item.data, {
          trimLowAlphaEdges: !shouldPreserveTransparentEdges(node, item.kind),
        }),
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

export function isBrowserVisualImageKind(kind) {
  return ['material-background', 'unicorn-background', 'effect-background', 'masked-element', 'blend-group'].includes(kind);
}

export function shouldPreserveTransparentEdges(node, kind) {
  return node?.elementScreenshot && isBrowserVisualImageKind(kind);
}

export function localBackgroundShadow(style, kind) {
  if (kind !== 'background-image' && kind !== 'pattern-background' && kind !== 'material-background') return null;
  if (kind === 'material-background') return null;
  return parseBoxShadow(style?.boxShadow) || parseDropShadow(style?.filter);
}

export function coords(node, slideRect, options = {}) {
  const rect = options.visual ? node.rect : node.renderRect || node.rect;
  return {
    x: round((rect.x - slideRect.x) / slideRect.w * PPT_W),
    y: round((rect.y - slideRect.y) / slideRect.h * PPT_H),
    w: round(rect.w / slideRect.w * PPT_W),
    h: round(rect.h / slideRect.h * PPT_H),
  };
}

export function imageSizing(node, c, kind) {
  const style = node.style || {};
  const fit = style.objectFit || (style.backgroundSize === 'cover' || style.backgroundSize === 'contain' ? style.backgroundSize : '');
  if ((kind === 'background-image' || node.tag === 'img') && (fit === 'cover' || fit === 'contain')) {
    return { type: fit, w: c.w, h: c.h };
  }
  return undefined;
}

export function shouldSuppressGradientFillApproximation(node, style, c) {
  const background = String(style.backgroundImage || '');
  if (!background.includes('radial-gradient') || !backgroundHasTransparentStop(background)) return false;
  const areaRatio = (c.w || 0) * (c.h || 0) / Math.max(0.0001, PPT_W * PPT_H);
  if (areaRatio <= 0.12) return false;
  return !(node.children || []).length;
}

export function cssBorderTriangle(style = {}, c) {
  const sides = [
    { side: 'top', width: parseFloat(style.borderTopWidth || '0') || 0, color: parseCssColor(style.borderTopColor) },
    { side: 'right', width: parseFloat(style.borderRightWidth || '0') || 0, color: parseCssColor(style.borderRightColor) },
    { side: 'bottom', width: parseFloat(style.borderBottomWidth || '0') || 0, color: parseCssColor(style.borderBottomColor) },
    { side: 'left', width: parseFloat(style.borderLeftWidth || '0') || 0, color: parseCssColor(style.borderLeftColor) },
  ];
  const visible = sides.filter(item => item.width > 0 && item.color);
  const transparent = sides.filter(item => item.width > 0 && !item.color);
  if (visible.length !== 1 || transparent.length < 2) return null;
  const color = visible[0].color;
  const pointsBySide = {
    top: [
      { x: 0, y: 0, moveTo: true },
      { x: round(c.w), y: 0 },
      { x: round(c.w / 2), y: round(c.h) },
      { close: true },
    ],
    right: [
      { x: round(c.w), y: 0, moveTo: true },
      { x: round(c.w), y: round(c.h) },
      { x: 0, y: round(c.h / 2) },
      { close: true },
    ],
    bottom: [
      { x: round(c.w / 2), y: 0, moveTo: true },
      { x: round(c.w), y: round(c.h) },
      { x: 0, y: round(c.h) },
      { close: true },
    ],
    left: [
      { x: 0, y: 0, moveTo: true },
      { x: round(c.w), y: round(c.h / 2) },
      { x: 0, y: round(c.h) },
      { close: true },
    ],
  };
  return { fill: color, points: pointsBySide[visible[0].side] };
}

export function cssClipPolygonPoints(clipPath, c) {
  const raw = String(clipPath || '').trim();
  const match = raw.match(/^polygon\((.*)\)$/i);
  if (!match) return null;
  const points = splitCssArgs(match[1]).map(part => {
    const coords = String(part).trim().split(/\s+/).filter(Boolean);
    if (coords.length < 2) return null;
    const x = cssClipCoord(coords[0], c.w);
    const y = cssClipCoord(coords[1], c.h);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
    return { x: round(x), y: round(y) };
  });
  if (points.length < 3 || points.some(point => !point)) return null;
  return points.map((point, index) => index === 0 ? { ...point, moveTo: true } : point).concat({ close: true });
}

export function cssClipCoord(value, size) {
  const raw = String(value || '').trim();
  if (raw.endsWith('%')) return Number.parseFloat(raw) / 100 * size;
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) ? n / 96 : NaN;
}

export function textColorForStyle(style, node = {}) {
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

export function parseCssColor(value) {
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

export function colorFromBackgroundImage(value) {
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

export function canvasColorToCss(color) {
  return {
    color: [color.r, color.g, color.b]
      .map(n => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase(),
    alpha: Math.max(0, Math.min(1, Number(color.a ?? 1))),
  };
}

export function readBorders(style) {
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

export function isCircleLikeBox(node = {}, radiusPx = 0) {
  const rect = node.rect || {};
  const width = Number(rect.w || 0);
  const height = Number(rect.h || 0);
  const minSide = Math.min(width, height);
  const maxSide = Math.max(width, height);
  if (!minSide || maxSide / minSide > 1.18) return false;
  return radiusPx >= minSide * 0.42;
}

export function parseBoxShadow(value) {
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

export function parseDropShadow(value) {
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

export function pptShadow(color, offsetX, offsetY, blur) {
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

export function combinedTransparency(alpha, opacity) {
  const composite = Math.max(0, Math.min(1, Number(alpha ?? 1) * Number(opacity || 1)));
  return Math.round((1 - composite) * 100);
}

export function elementTransparency(opacity) {
  return combinedTransparency(1, opacity);
}

export function letterSpacing(value) {
  const n = parseFloat(value || '0');
  return Number.isFinite(n) ? Math.max(-2, Math.min(12, n * PX_TO_PT)) : 0;
}

export function fontFamilies(value) {
  return String(value || 'Arial')
    .split(',')
    .map(item => item.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

export function fontFaceForText(fontFamily, text = '') {
  const families = fontFamilies(fontFamily);
  if (hasCjkText(text)) {
    const cjk = families.find(isCjkFontFamily);
    if (cjk) return cjk;
  }
  return pptxSafeFontFace(families[0] || 'Arial');
}

export function pptxSafeFontFace(family) {
  const name = String(family || '').trim();
  for (const [pattern, safe] of PPTX_SAFE_FONT_MAP) {
    if (pattern.test(name)) return safe;
  }
  return name || 'Arial';
}

export function isCjkFontFamily(value) {
  return /Noto Sans SC|PingFang SC|Songti SC|Microsoft YaHei|Source Han|思源|黑体|宋体/i.test(String(value || ''));
}

export function fontStack(style = {}, fontFace = '') {
  return [fontFace, style.fontFamily].filter(Boolean).join(',');
}

export function pptFontSize(px, fontFace, style = {}, text = '') {
  return px * pptFontScale(fontFace, style, text);
}

export function pptFontScale(fontFace, style = {}, text = '') {
  const stack = fontStack(style, fontFace);
  if (/Space Mono|IBM Plex Mono|SFMono|ui-monospace|monospace|Menlo/i.test(stack)) return 0.66;
  if (hasCjkText(text) || /Noto Sans SC|PingFang SC|Songti SC|Microsoft YaHei|Source Han|思源|黑体|宋体|sans-serif|system-ui|-apple-system/i.test(stack)) return 0.60;
  return PX_TO_PT;
}

export function hasCjkText(value) {
  return /[\u2e80-\u9fff]/.test(String(value || ''));
}

export function pptLineSpacing(value, fontSizePx, fontFace, style = {}, text = '') {
  const raw = String(value || '').trim();
  if (!raw || raw === 'normal') return null;
  const n = parseFloat(raw);
  if (!Number.isFinite(n) || n <= 0) return null;
  const lineHeightPx = raw.endsWith('px') ? n : n <= 4 ? n * fontSizePx : n;
  if (!Number.isFinite(lineHeightPx) || lineHeightPx <= 0) return null;
  return pptFontSize(lineHeightPx, fontFace, style, text);
}

export function pptTextYOffset(box, fontSizePx, fontFace, style = {}, text = '', node = null) {
  const stack = fontStack(style, fontFace);
  if (fontSizePx < 28) return 0;
  const parentTag = String(node?.parentTag || '');
  const cjkStack = /Noto Sans SC|PingFang SC|Songti SC|Microsoft YaHei|Source Han|思源|黑体|宋体|sans-serif|system-ui|-apple-system/i.test(stack);
  const numericText = /^[\s¥$€£+\-−–—.,:%/0-9A-Za-z]+$/.test(String(text || ''));
  if (numericText && cjkStack) {
    if (fontSizePx >= 220) return box.h * 0.12;
    if (fontSizePx >= 160) return box.h * 0.10;
    if (fontSizePx >= 96) return box.h * 0.07;
    if (fontSizePx >= 60) return box.h * 0.045;
  }
  const compactCjkUnit = parentTag === 'span' && /^[\s¥$€£+\-−–—.,:%/0-9万亿兆]+$/.test(String(text || ''));
  if (compactCjkUnit && cjkStack && fontSizePx >= 72) return -box.h * 0.035;
  if (hasCjkText(text)) {
    if (fontSizePx >= 180) return box.h * 0.05;
    if (fontSizePx >= 120) return box.h * 0.04;
    if (fontSizePx >= 96) return box.h * 0.03;
    if (fontSizePx >= 48) return box.h * 0.018;
    return box.h * 0.006;
  }
  if (/Anton/i.test(stack) && fontSizePx >= 80) return box.h * 0.09;
  if (/Space Grotesk|Archivo|Arimo|IBM Plex Sans|Newsreader|Caveat/i.test(stack) && fontSizePx >= 48) return box.h * 0.045;
  return 0;
}

export function normalizeAlign(value) {
  if (value === 'center' || value === 'right' || value === 'justify') return value;
  return 'left';
}

export function normalizeValign(value) {
  if (value === 'bottom' || value === 'sub') return 'bottom';
  if (value === 'middle') return 'mid';
  return 'top';
}

export function isNoWrap(value) {
  return value === 'nowrap';
}

export function applyTextTransform(text, transform) {
  if (transform === 'uppercase') return text.toUpperCase();
  if (transform === 'lowercase') return text.toLowerCase();
  return text;
}

export function clampColor(value) {
  return Math.max(0, Math.min(255, Math.round(Number.parseFloat(value) || 0)));
}

export function round(value) {
  return Math.round(value * 10000) / 10000;
}


// 双端共用的组装循环:采集产物 deck → pptxgenjs 实例(不落盘,由宿主决定 writeFile
// 到磁盘还是 write('blob') 触发浏览器下载)。PptxGenJSCtor 由宿主传入。
export async function buildEditablePptx(PptxGenJSCtor, deck, options = {}) {
  const title = options.title || 'Editable Deck Export';
  const pptx = new PptxGenJSCtor();
  pptx.defineLayout({ name: 'DASHI_WIDE', width: PPT_W, height: PPT_H });
  pptx.layout = 'DASHI_WIDE';
  pptx.author = 'DashiAI PPT';
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
  return { pptx, warnings, totals, slideSummaries };
}

export const __pptxFontTestables = { pptxSafeFontFace };
