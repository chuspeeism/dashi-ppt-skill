// 可编辑 PPTX 采集器(页面内运行的浏览器 JS)。
//
// 双宿主共享:服务端导出(editable.mjs)把这些函数 toString 拼进 addScriptTag 注入
// 无头浏览器;浏览器端导出(editable-browser)直接 import 调用。函数体必须保持
// 纯浏览器语义——只能引用本模块内的函数与常量(服务端注入依赖 toString 序列化,
// 任何对模块外的引用在注入后都会 ReferenceError)。

export const STYLE_KEYS = [
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
  'mask',
  'maskImage',
  'webkitMask',
  'webkitMaskImage',
  'mixBlendMode',
  ];

export async function collectActiveSlide(slideNumber) {
  const slide = document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]');
  if (!slide) {
    return { index: slideNumber, rect: { x: 0, y: 0, w: 1920, h: 1080 }, root: null, warnings: [{ type: 'missing-slide' }], summary: null };
  }
  const rawRect = slide.getBoundingClientRect();
  const slideRect = rectObject(rawRect);
  const warnings = [];
  markUnicornOverlayText(slide, slideRect);
  const root = await captureElement(slide, slideRect, warnings, 0, slideNumber, slideClipRect(slideRect));
  const summary = summarizeCapturedTree(root);
  summary.key = slide.dataset.vmSlideId || slide.dataset.layoutKey || slide.id || '';
  return { index: slideNumber, rect: slideRect, root, warnings, summary };
}

export async function captureElement(el, slideRect, warnings, depth, slideIndex, clipRect = null) {
  if (!(el instanceof Element) || isMediaChrome(el)) return null;
  const style = styleWithCumulativeRotation(readStyle(el), el);
  if (!isVisibleElement(el, slideRect, style)) return null;
  const activeClip = clipRect || slideClipRect(slideRect);
  const rawRect = el.getBoundingClientRect();
  const clipped = intersectClientRect(rawRect, activeClip);
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
  const childClip = nextChildClipRect(el, style, rawRect, activeClip);

  if (el.classList?.contains('bt-unicorn-frame')) {
    const exportId = `editable-pptx-${slideIndex}-${depth}-${Math.random().toString(36).slice(2, 9)}`;
    el.setAttribute('data-editable-pptx-export-id', exportId);
    el.setAttribute('data-editable-pptx-material-background', '');
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

  if (shouldScreenshotImageSlot(el)) {
    const exportId = `editable-pptx-${slideIndex}-${depth}-${Math.random().toString(36).slice(2, 9)}`;
    const screenshotRect = visualScreenshotRect(rawRect, style, slideRect);
    el.setAttribute('data-editable-pptx-export-id', exportId);
    node.exportId = exportId;
    node.elementScreenshot = true;
    node.imageKind = 'masked-element';
    node.rect = rectObject(screenshotRect);
    node.screenshotRect = rectObject(screenshotRect);
    node.screenshotMode = 'screenshot-rect';
    warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'image-slot', count: 1, source: 'browser-image-slot' });
    return node;
  }

  const visualFallback = visualScreenshotFallbackKind(el, style, clipped, rawRect, slideRect);
  if (visualFallback) {
    const exportId = `editable-pptx-${slideIndex}-${depth}-${Math.random().toString(36).slice(2, 9)}`;
    const screenshotRect = visualScreenshotRect(rawRect, style, slideRect);
    el.setAttribute('data-editable-pptx-export-id', exportId);
    node.exportId = exportId;
    node.elementScreenshot = true;
    node.imageKind = visualFallback;
    node.rect = rectObject(screenshotRect);
    node.screenshotRect = rectObject(screenshotRect);
    node.screenshotMode = 'screenshot-rect';
    const textNodes = collectDomFallbackTextNodes(el, slideRect, slideIndex);
    const overlayText = visibleTextInScreenshotRect(el, slideRect, screenshotRect);
    const overlayPaint = visibleOverlayPaintInScreenshotRect(el, slideRect, screenshotRect);
    if (textNodes.length) node.children.push(...textNodes);
    node.stripTextForScreenshot = textNodes.length > 0 || overlayText.count > 0;
    node.stripOverlayForScreenshot = overlayPaint.count > 0;
    if (textNodes.length || overlayText.count) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-text-extracted', node: visualFallback, textCount: Math.max(textNodes.length, overlayText.count), sample: overlayText.sample });
    }
    if (overlayPaint.count) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-overlay-extracted', node: visualFallback, overlayCount: overlayPaint.count, sample: overlayPaint.sample, scope: 'screenshot-rect' });
    }
    warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: visualFallback, count: 1, source: 'browser-visual-effect' });
    return node;
  }

  if (shouldUseLocalMaterialFallback(el, style, clipped, slideRect)) {
    const exportId = `editable-pptx-${slideIndex}-${depth}-${Math.random().toString(36).slice(2, 9)}`;
    const screenshotRect = visualScreenshotRect(rawRect, style, slideRect);
    el.setAttribute('data-editable-pptx-export-id', exportId);
    el.setAttribute('data-editable-pptx-material-background', '');
    node.exportId = exportId;
    node.elementScreenshot = true;
    node.imageKind = 'material-background';
    node.rect = rectObject(screenshotRect);
    node.screenshotRect = rectObject(screenshotRect);
    node.screenshotMode = 'screenshot-rect';
    const materialText = fallbackTextRisk(el, slideRect);
    const overlayText = visibleTextInScreenshotRect(el, slideRect, screenshotRect);
    const overlayPaint = visibleOverlayPaintInScreenshotRect(el, slideRect, screenshotRect);
    node.stripTextForScreenshot = materialText.count > 0 || overlayText.count > 0;
    node.stripOverlayForScreenshot = overlayPaint.count > 0;
    if (materialText.count || overlayText.count) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-text-extracted', node: 'material-background', textCount: Math.max(materialText.count, overlayText.count), sample: materialText.sample || overlayText.sample });
    }
    if (overlayPaint.count) {
      warnings.push({ slide: slideIndex, type: 'node-image-fallback-overlay-extracted', node: 'material-background', overlayCount: overlayPaint.count, sample: overlayPaint.sample, scope: 'screenshot-rect' });
    }
    warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'material-background', count: 1, source: 'browser-local-material' });
  }

  const bg = backgroundUrl(style.backgroundImage);
  if (node.imageKind === 'material-background') {
    // The browser screenshot carries the local material; editable children are collected below.
  } else if (bg) {
    const isTurbulence = isTurbulenceDataImage(bg);
    node.backgroundImageData = await fetchImageDataUrl(bg, clipped.width, clipped.height, isTurbulence ? 0.02 : 1);
    if (isTurbulence) node.backgroundImageTransparency = 0;
    if (!node.backgroundImageData) warnings.push({ slide: slideIndex, type: 'background-image-skipped', url: bg.slice(0, 160) });
  } else if (String(style.backgroundImage || '').includes('repeating-linear-gradient')) {
    node.patternImageData = patternBackgroundImageData(style.backgroundImage, clipped.width, clipped.height, maxCssRadius(style, clipped.width, clipped.height));
    if (node.patternImageData) warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'css-pattern-background', count: 1 });
  } else if (!isTextClippedBackground(style) && String(style.backgroundImage || '').includes('gradient') && !shouldSkipDecorativeGradientFallback(el, style, clipped, slideRect) && !shouldUseNativeGradientShape(style, clipped.width, clipped.height) && !shouldUseNativeGradientShape(style, (el.offsetWidth || clipped.width) * (slideRect.w || 1920) / 1920, (el.offsetHeight || clipped.height) * (slideRect.h || 1080) / 1080) && !String(style.clipPath || '').includes('polygon(')) {
    node.backgroundImageData = gradientBackgroundImageData(
      style.backgroundImage,
      rawRect.width || clipped.width,
      rawRect.height || clipped.height,
      maxCssRadius(style, rawRect.width || clipped.width, rawRect.height || clipped.height),
      backgroundCropForClippedRect(rawRect, clipped),
    );
    if (node.backgroundImageData) warnings.push({ slide: slideIndex, type: 'node-image-fallback', node: 'css-gradient-background', count: 1 });
  }

  const before = node.imageKind === 'material-background' ? null : capturePseudoElement(el, '::before', slideRect, slideIndex, childClip);
  if (before) node.children.push(before);
  const wholeText = captureWholeTextElement(el, slideRect, style, slideIndex, childClip);
  if (wholeText) {
    node.children.push(wholeText);
    const after = node.imageKind === 'material-background' ? null : capturePseudoElement(el, '::after', slideRect, slideIndex, childClip);
    if (after) node.children.push(after);
    return node;
  }
  const childNodeLists = [el.childNodes];
  if (el.shadowRoot) childNodeLists.push(el.shadowRoot.childNodes);
  for (const childNodes of childNodeLists) {
    for (const child of childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        const textNode = captureTextNode(child, el, slideRect, style, slideIndex, childClip);
        if (Array.isArray(textNode)) node.children.push(...textNode);
        else if (textNode) node.children.push(textNode);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const childNode = await captureElement(child, slideRect, warnings, depth + 1, slideIndex, childClip);
        if (childNode) node.children.push(childNode);
      }
    }
  }
  const after = node.imageKind === 'material-background' ? null : capturePseudoElement(el, '::after', slideRect, slideIndex, childClip);
  if (after) node.children.push(after);
  return node;
}

export function capturePseudoElement(el, pseudo, slideRect, slideIndex, clipRect = null) {
  const style = readStyle(el, pseudo);
  const content = String(style.content || '').trim();
  const hasText = content && content !== 'none' && content !== 'normal' && content !== '\"\"' && content !== "''";
  const hasVisual = hasPaint(style.backgroundColor) || backgroundUrl(style.backgroundImage) || String(style.backgroundImage || '').includes('gradient') || hasAnyBorder(style);
  if (style.display === 'none' || style.visibility === 'hidden' || (!hasText && !hasVisual)) return null;
  const rect = pseudoRect(el, style, slideRect);
  const clipped = rect ? intersectClientRect(rect, clipRect || slideClipRect(slideRect)) : null;
  if (!clipped || clipped.width < 1 || clipped.height < 1) return null;
  return {
    tag: 'pseudo',
    slideIndex,
    rect: rectObject(clipped),
    style,
    clipped: !sameClientRect(rect, clipped),
    text: hasText ? content.replace(/^['"]|['"]$/g, '') : '',
    children: [],
  };
}

export function pseudoRect(el, style, slideRect) {
  const parent = el.getBoundingClientRect();
  const stageScaleX = (slideRect?.w || 1920) / 1920;
  const stageScaleY = (slideRect?.h || 1080) / 1080;
  const parentWidth = el.offsetWidth || parent.width / stageScaleX;
  const parentHeight = el.offsetHeight || parent.height / stageScaleY;
  const width = cssLengthPx(style.width, parentWidth);
  const height = cssLengthPx(style.height, parentHeight);
  if (width == null || height == null) return null;
  const borderLeft = parseFloat(style.borderLeftWidth || '0') || 0;
  const borderRight = parseFloat(style.borderRightWidth || '0') || 0;
  const borderTop = parseFloat(style.borderTopWidth || '0') || 0;
  const borderBottom = parseFloat(style.borderBottomWidth || '0') || 0;
  const boxWidth = width + borderLeft + borderRight;
  const boxHeight = height + borderTop + borderBottom;
  const left = cssLengthPx(style.left, parentWidth);
  const top = cssLengthPx(style.top, parentHeight);
  const right = cssLengthPx(style.right, parentWidth);
  const bottom = cssLengthPx(style.bottom, parentHeight);
  const parentStyle = getComputedStyle(el);
  const parentRotation = rotateFromTransform(parentStyle.transform);
  if (parentRotation && (left != null || right != null) && (top != null || bottom != null)) {
    const [originXRaw = '0', originYRaw = '0'] = String(parentStyle.transformOrigin || '').split(/\s+/);
    const originX = cssLengthPx(originXRaw, parentWidth) ?? parentWidth / 2;
    const originY = cssLengthPx(originYRaw, parentHeight) ?? parentHeight / 2;
    const localX = left != null ? left : parentWidth - (right + boxWidth);
    const localY = top != null ? top : parentHeight - (bottom + boxHeight);
    const translate = translateFromTransform(style.transform, boxWidth, boxHeight);
    const dx = (localX + translate.x + boxWidth / 2 - originX) * stageScaleX;
    const dy = (localY + translate.y + boxHeight / 2 - originY) * stageScaleY;
    const angle = parentRotation * Math.PI / 180;
    const cx = parent.left + parent.width / 2 + dx * Math.cos(angle) - dy * Math.sin(angle);
    const cy = parent.top + parent.height / 2 + dx * Math.sin(angle) + dy * Math.cos(angle);
    return { x: cx - boxWidth * stageScaleX / 2, y: cy - boxHeight * stageScaleY / 2, w: boxWidth * stageScaleX, h: boxHeight * stageScaleY };
  }
  const translate = translateFromTransform(style.transform, boxWidth, boxHeight);
  const x = (left != null ? parent.left + left * stageScaleX : right != null ? parent.right - (right + boxWidth) * stageScaleX : parent.left) + translate.x * stageScaleX;
  const y = (top != null ? parent.top + top * stageScaleY : bottom != null ? parent.bottom - (bottom + boxHeight) * stageScaleY : parent.top) + translate.y * stageScaleY;
  return { x, y, w: boxWidth * stageScaleX, h: boxHeight * stageScaleY };
}

export function captureWholeTextElement(el, slideRect, style, slideIndex, clipRect = null) {
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
  const rawRect = el.getBoundingClientRect();
  const clipped = intersectClientRect(rawRect, clipRect || slideClipRect(slideRect));
  if (!clipped || clipped.width < 1 || clipped.height < 1) return null;
  return {
    tag: '#text',
    slideIndex,
    rect: rectObject(clipped),
    style: effectiveTextStyle(el, slideRect),
    text: value,
    textMetrics: { usesLineBox: true },
    singleLine: lineRects.length <= 1 && !/[\r\n]/.test(value),
    clipped: !sameClientRect(rawRect, clipped),
    parentTag: tag,
    children: [],
  };
}

export function isInlineTextChild(child) {
  const display = getComputedStyle(child).display;
  return display === 'inline' || display === 'inline-block' || display === 'contents';
}

export function hasInlineVisualTreatment(child) {
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

export function captureTextNode(textNode, parent, slideRect, style, slideIndex, clipRect = null) {
  const keepWhitespace = ['pre', 'pre-wrap', 'pre-line', 'break-spaces'].includes(style.whiteSpace);
  const value = keepWhitespace ? textNode.textContent || '' : normalizeText(textNode.textContent || '');
  if (!value.trim()) return null;
  const range = document.createRange();
  range.selectNodeContents(textNode);
  const lineRects = [...range.getClientRects()].filter(rect => rect.width > 1 && rect.height > 1);
  const singleLine = lineRects.length <= 1 && !/[\r\n]/.test(value);
  const tag = parent.tagName.toLowerCase();
  const wrappedFragments = splitWrappedTextNode(textNode, lineRects, slideRect, keepWhitespace, clipRect);
  if (wrappedFragments.length > 1) {
    range.detach?.();
    const parentStyle = effectiveTextStyle(parent, slideRect);
    return wrappedFragments.map(fragment => ({
      tag: '#text',
      slideIndex,
      rect: fragment.rect,
      style: parentStyle,
      text: fragment.text,
      singleLine: true,
      clipped: fragment.clipped,
      parentTag: tag,
      requiredText: parent.hasAttribute('data-editable-pptx-required-text'),
      href: parent.closest('a')?.href || undefined,
      children: [],
    }));
  }
  const bounds = range.getBoundingClientRect();
  let rawTextRect = lineRects.length === 1 ? lineRects[0] : bounds;
  range.detach?.();
  const textNodeCount = [...parent.childNodes]
    .filter(child => child.nodeType === Node.TEXT_NODE && normalizeText(child.textContent || ''))
    .length;
  const visibleElementChildren = [...parent.children].filter(child => isVisibleElement(child, slideRect)).length;
  let textMetrics = null;
  if (singleLine && textNodeCount === 1 && visibleElementChildren === 0 && hasInlineVisualTreatment(parent)) {
    const parentRect = parent.getBoundingClientRect();
    const parentClipped = intersectClientRect(parentRect, clipRect || slideClipRect(slideRect));
    if (parentClipped && parentRect.height > rawTextRect.height + 2 && parentRect.width > rawTextRect.width + 2) {
      rawTextRect = {
        left: rawTextRect.left,
        top: parentRect.top,
        right: rawTextRect.right,
        bottom: parentRect.bottom,
        width: rawTextRect.width,
        height: parentRect.height,
      };
      textMetrics = { verticalContainer: true };
    }
  }
  let clipped = intersectClientRect(rawTextRect, clipRect || slideClipRect(slideRect));
  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'td', 'th', 'blockquote', 'button', 'label'].includes(tag)
      && textNodeCount === 1
      && visibleElementChildren === 0) {
    rawTextRect = parent.getBoundingClientRect();
    clipped = intersectClientRect(rawTextRect, clipRect || slideClipRect(slideRect)) || clipped;
  }
  if (!clipped || clipped.width < 1 || clipped.height < 1) return null;
  const parentStyle = effectiveTextStyle(parent, slideRect);
  return {
    tag: '#text',
    slideIndex,
    rect: rectObject(clipped),
    style: parentStyle,
    text: value,
    textMetrics,
    singleLine,
    clipped: !sameClientRect(rawTextRect, clipped),
    parentTag: tag,
    requiredText: parent.hasAttribute('data-editable-pptx-required-text'),
    href: parent.closest('a')?.href || undefined,
    children: [],
  };
}

export function splitWrappedTextNode(textNode, lineRects, slideRect, keepWhitespace, clipRect = null) {
  if (lineRects.length <= 1) return [];
  const raw = textNode.textContent || '';
  if (!raw.trim() || raw.length > 600) return [];
  const lines = groupLineRects(lineRects);
  if (lines.length <= 1 || lines.length > 20) return [];
  const chars = Array.from(raw);
  const offsets = [];
  let offset = 0;
  for (const char of chars) {
    const end = offset + char.length;
    offsets.push({ char, start: offset, end });
    offset = end;
  }
  const spans = lines.map(() => ({ start: Infinity, end: -Infinity }));
  for (const item of offsets) {
    const rect = rangeBoundsForOffsets(textNode, item.start, item.end);
    if (!rect || rect.width <= 0.25 || rect.height <= 0.25) continue;
    const lineIndex = lineIndexForRect(rect, lines);
    if (lineIndex < 0) continue;
    spans[lineIndex].start = Math.min(spans[lineIndex].start, item.start);
    spans[lineIndex].end = Math.max(spans[lineIndex].end, item.end);
  }
  const fragments = [];
  for (const span of spans) {
    if (!Number.isFinite(span.start) || span.end <= span.start) continue;
    const text = keepWhitespace ? raw.slice(span.start, span.end) : normalizeText(raw.slice(span.start, span.end));
    if (!text.trim()) continue;
    const rect = rangeBoundsForOffsets(textNode, span.start, span.end);
    const clipped = rect ? intersectClientRect(rect, clipRect || slideClipRect(slideRect)) : null;
    if (!clipped || clipped.width < 1 || clipped.height < 1) continue;
    fragments.push({ text, rect: rectObject(clipped), clipped: !sameClientRect(rect, clipped) });
  }
  return fragments.length > 1 ? fragments : [];
}

export function groupLineRects(rects) {
  const lines = [];
  for (const rect of [...rects].sort((a, b) => a.top - b.top || a.left - b.left)) {
    const centerY = rect.top + rect.height / 2;
    const line = lines.find(item => {
      const overlap = Math.min(item.bottom, rect.bottom) - Math.max(item.top, rect.top);
      return overlap > Math.min(item.height, rect.height) * 0.5
        || Math.abs(centerY - item.centerY) <= Math.max(2, Math.min(item.height, rect.height) * 0.35);
    });
    if (!line) {
      lines.push({
        left: rect.left,
        right: rect.right,
        top: rect.top,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
        centerY,
      });
      continue;
    }
    line.left = Math.min(line.left, rect.left);
    line.right = Math.max(line.right, rect.right);
    line.top = Math.min(line.top, rect.top);
    line.bottom = Math.max(line.bottom, rect.bottom);
    line.width = line.right - line.left;
    line.height = line.bottom - line.top;
    line.centerY = line.top + line.height / 2;
  }
  return lines.sort((a, b) => a.top - b.top || a.left - b.left);
}

export function lineIndexForRect(rect, lines) {
  let best = -1;
  let bestScore = Infinity;
  const centerY = rect.top + rect.height / 2;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const overlap = Math.max(0, Math.min(line.bottom, rect.bottom) - Math.max(line.top, rect.top));
    const score = Math.abs(centerY - line.centerY) - overlap;
    if (score < bestScore) {
      best = index;
      bestScore = score;
    }
  }
  return best;
}

export function rangeBoundsForOffsets(textNode, start, end) {
  if (end <= start) return null;
  const range = document.createRange();
  try {
    range.setStart(textNode, start);
    range.setEnd(textNode, end);
    const rects = [...range.getClientRects()].filter(rect => rect.width > 0.25 && rect.height > 0.25);
    if (!rects.length) return range.getBoundingClientRect();
    return rects.length === 1 ? rects[0] : range.getBoundingClientRect();
  } finally {
    range.detach?.();
  }
}

export function effectiveTextStyle(parent, slideRect) {
  const style = styleWithCumulativeRotation(readStyle(parent), parent);
  if (parent.closest?.('[data-editable-pptx-material-background]')) style.materialBackground = 'true';
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

export function elementRenderRect(el, clipped, style, slideRect) {
  const rotation = rotateFromTransform(style.transform);
  if (!rotation) return null;
  const scale = scaleFromTransform(style.transform);
  const stageScaleX = (slideRect?.w || 1920) / 1920;
  const stageScaleY = (slideRect?.h || 1080) / 1080;
  const cssWidth = parseFloat(style.width || '0') || 0;
  const cssHeight = parseFloat(style.height || '0') || 0;
  const width = (el.offsetWidth || cssWidth || clipped.width) * scale.x * stageScaleX;
  const height = (el.offsetHeight || cssHeight || clipped.height) * scale.y * stageScaleY;
  if (!width || !height) return null;
  const cx = clipped.left + clipped.width / 2;
  const cy = clipped.top + clipped.height / 2;
  return { x: cx - width / 2, y: cy - height / 2, w: width, h: height };
}

export function visualEffectRect(rect, style, slideRect) {
  const outset = shadowOutsetPx(style);
  return expandedClampedRect(rect, slideRect, outset);
}

export function svgVisualRect(svg, clipped, slideRect) {
  const union = {
    left: clipped.left,
    top: clipped.top,
    right: clipped.left + clipped.width,
    bottom: clipped.top + clipped.height,
  };
  svg.querySelectorAll?.('*')?.forEach(child => {
    const style = getComputedStyle(child);
    if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity || 1) <= 0.01) return;
    const rect = child.getBoundingClientRect();
    if (rect.width <= 0.5 || rect.height <= 0.5) return;
    union.left = Math.min(union.left, rect.left);
    union.top = Math.min(union.top, rect.top);
    union.right = Math.max(union.right, rect.right);
    union.bottom = Math.max(union.bottom, rect.bottom);
  });
  return expandedClampedRect({
    left: union.left,
    top: union.top,
    width: union.right - union.left,
    height: union.bottom - union.top,
  }, slideRect, 2);
}

export function expandedClampedRect(rect, slideRect, outset = 0) {
  const left = Math.max(slideRect.x, rect.left - outset);
  const top = Math.max(slideRect.y, rect.top - outset);
  const right = Math.min(slideRect.x + slideRect.w, rect.left + rect.width + outset);
  const bottom = Math.min(slideRect.y + slideRect.h, rect.top + rect.height + outset);
  return {
    left,
    top,
    width: Math.max(1, right - left),
    height: Math.max(1, bottom - top),
  };
}

export function shadowOutsetPx(style = {}) {
  let outset = 0;
  for (const layer of splitShadowLayers(style.boxShadow)) {
    const numbers = layer.replace(/rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8}/ig, '').match(/-?\d+(\.\d+)?px/g) || [];
    const offsetX = Math.abs(parseFloat(numbers[0] || '0') || 0);
    const offsetY = Math.abs(parseFloat(numbers[1] || '0') || 0);
    const blur = Math.abs(parseFloat(numbers[2] || '0') || 0);
    const spread = Math.abs(parseFloat(numbers[3] || '0') || 0);
    outset = Math.max(outset, offsetX + offsetY + blur + spread);
  }
  const filter = String(style.filter || '');
  for (const match of filter.matchAll(/blur\(([-\d.]+)px\)|drop-shadow\(([^)]+(?:\)[^)]+)?)\)/ig)) {
    if (match[1]) {
      outset = Math.max(outset, Math.abs(parseFloat(match[1]) || 0) * 2);
    } else if (match[2]) {
      const numbers = match[2].replace(/rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8}/ig, '').match(/-?\d+(\.\d+)?px/g) || [];
      const offsetX = Math.abs(parseFloat(numbers[0] || '0') || 0);
      const offsetY = Math.abs(parseFloat(numbers[1] || '0') || 0);
      const blur = Math.abs(parseFloat(numbers[2] || '0') || 0);
      outset = Math.max(outset, offsetX + offsetY + blur);
    }
  }
  return Math.min(160, Math.ceil(outset));
}

export function splitShadowLayers(value) {
  const raw = String(value || '');
  if (!raw || raw === 'none') return [];
  return splitCssLayers(raw);
}

export function visualScreenshotFallbackKind(el, style, clipped, rawRect, slideRect) {
  if (isTextClippedBackground(style)) return null;
  const tag = el.tagName.toLowerCase();
  if (['section', 'main', 'article', 'svg', 'canvas', 'img', 'video'].includes(tag)) return null;
  const clipPath = String(style.clipPath || '').trim();
  const masked = hasCssMask(style);
  const clippedByPath = clipPath && clipPath !== 'none';
  const background = String(style.backgroundImage || '');
  const hasVisualBackground = (background && background !== 'none') || hasPaint(style.backgroundColor) || hasAnyBorder(style) || (style.boxShadow && style.boxShadow !== 'none');
  if ((masked || clippedByPath) && hasVisualBackground) return 'masked-element';
  if (shouldScreenshotBlendGroup(el, style, clipped, rawRect, slideRect)) return 'blend-group';
  if (shouldScreenshotRoundedVisual(el, style, clipped, rawRect, slideRect)) return 'masked-element';
  if (shouldScreenshotGradientEffect(el, style, clipped, rawRect, slideRect)) return 'effect-background';
  return null;
}

export function visualScreenshotRect(rawRect, style, slideRect) {
  return visualEffectRect(rawRect, style, slideRect);
}

export function hasCssMask(style = {}) {
  const mask = `${style.mask || ''} ${style.maskImage || ''} ${style.webkitMask || ''} ${style.webkitMaskImage || ''}`.trim();
  return Boolean(mask && !/^none(?:\s+none)*$/i.test(mask));
}

export function visibleElementChildren(el, slideRect) {
  return [...(el.children || [])].filter(child => {
    const childStyle = getComputedStyle(child);
    const rect = child.getBoundingClientRect();
    return childStyle.display !== 'none'
      && childStyle.visibility !== 'hidden'
      && Number(childStyle.opacity || 1) > 0.01
      && rect.width > 2
      && rect.height > 2
      && rect.right >= slideRect.x
      && rect.left <= slideRect.x + slideRect.w
      && rect.bottom >= slideRect.y
      && rect.top <= slideRect.y + slideRect.h;
  });
}

export function shouldScreenshotBlendGroup(el, style, clipped, rawRect, slideRect) {
  const areaRatio = clipped.width * clipped.height / Math.max(1, slideRect.w * slideRect.h);
  if (areaRatio <= 0.0005 || areaRatio > 0.55) return false;
  let blendVisualCount = 0;
  for (const child of visibleElementChildren(el, slideRect)) {
    const childStyle = getComputedStyle(child);
    const blend = String(childStyle.mixBlendMode || '');
    if (!blend || blend === 'normal') continue;
    const background = String(childStyle.backgroundImage || '');
    if (background.includes('gradient') || hasCssMask(childStyle) || (childStyle.filter && childStyle.filter !== 'none')) {
      blendVisualCount += 1;
    }
  }
  return blendVisualCount >= 2;
}

export function shouldScreenshotRoundedVisual(el, style, clipped, rawRect, slideRect) {
  const areaRatio = clipped.width * clipped.height / Math.max(1, slideRect.w * slideRect.h);
  if (areaRatio <= 0.0002 || areaRatio > 0.22) return false;
  if (hasTransformedAncestor(el)) return false;
  const background = String(style.backgroundImage || '');
  const hasVisualBackground = (background && background !== 'none') || hasPaint(style.backgroundColor) || hasAnyBorder(style) || (style.boxShadow && style.boxShadow !== 'none');
  if (!hasVisualBackground) return false;
  if (hasNonUniformCssRadius(style, clipped.width, clipped.height)) return true;
  const radius = maxCssRadius(style, clipped.width, clipped.height);
  const children = visibleElementChildren(el, slideRect);
  const paintedRoundedContainer = radius >= 6
    && (hasAnyBorder(style) || (style.boxShadow && style.boxShadow !== 'none'))
    && children.length > 0
    && !hasOnlyInlineTextChildren(el)
    && !isEditableTextContainer(el);
  if (paintedRoundedContainer) return true;
  if (!hasRoundedClipStyle(style, clipped.width, clipped.height)) return false;
  if (!children.length || hasOnlyInlineTextChildren(el)) return false;
  return Boolean(el.querySelector?.('image-slot,[data-dashi-host-image-slot="true"],svg,canvas,img,video'))
    || background.includes('gradient')
    || (style.boxShadow && style.boxShadow !== 'none');
}

export function cornerRadiiPx(style, width = 0, height = 0) {
  return [
    cssRadiusPx(style.borderTopLeftRadius, width, height),
    cssRadiusPx(style.borderTopRightRadius, width, height),
    cssRadiusPx(style.borderBottomRightRadius, width, height),
    cssRadiusPx(style.borderBottomLeftRadius, width, height),
  ];
}

export function hasNonUniformCssRadius(style, width = 0, height = 0) {
  const radii = cornerRadiiPx(style, width, height);
  const max = Math.max(...radii);
  if (max < 1) return false;
  return radii.some(radius => Math.abs(radius - max) > 0.75);
}

export function hasRoundedClipStyle(style, width = 0, height = 0) {
  if (maxCssRadius(style, width, height) < 2) return false;
  return /\b(hidden|clip)\b/i.test(`${style.overflow || ''} ${style.overflowX || ''} ${style.overflowY || ''}`);
}

export function shouldScreenshotGradientEffect(el, style, clipped, rawRect, slideRect) {
  const background = String(style.backgroundImage || '');
  if (!background.includes('gradient') || backgroundUrl(background) || /repeating-linear-gradient/i.test(background)) return false;
  if ((el.innerText || el.textContent || '').trim()) return false;
  if (visibleElementChildren(el, slideRect).length) return false;
  const areaRatio = clipped.width * clipped.height / Math.max(1, slideRect.w * slideRect.h);
  const hasBlendMode = style.mixBlendMode && style.mixBlendMode !== 'normal';
  const hasFilterEffect = style.filter && style.filter !== 'none';
  const isTransparentRadial = /radial-gradient/i.test(background)
    && backgroundHasTransparentStop(background)
    && transparentCssPaint(style.backgroundColor);
  const isComplexGradient = /color-mix\(|color\(|closest-side|closest-corner|farthest-side|farthest-corner/i.test(background);
  if (hasBlendMode || hasFilterEffect || hasCssMask(style)) return true;
  return isTransparentRadial && (isComplexGradient || areaRatio > 0.005 || !sameClientRect(rawRect, clipped));
}

export function shouldUseLocalMaterialFallback(el, style, clipped, slideRect) {
  if (isTextClippedBackground(style) || String(style.clipPath || '').includes('polygon(')) return false;
  const tag = el.tagName.toLowerCase();
  if (['section', 'main', 'article', 'svg', 'canvas', 'img', 'video'].includes(tag)) return false;
  if (/^h[1-6]$/.test(tag) || ['p', 'li', 'td', 'th', 'blockquote'].includes(tag)) return false;
  if (isEditableTextContainer(el)) return false;
  if (!(el.innerText || el.textContent || '').trim() && isInsideEditableTextContainer(el)) return false;
  if (el.querySelector?.('svg, canvas, img, video')) return false;
  const rawRect = el.getBoundingClientRect();
  const slideLeft = Number(slideRect.left ?? slideRect.x ?? 0);
  const slideTop = Number(slideRect.top ?? slideRect.y ?? 0);
  const slideRight = Number(slideRect.right ?? (slideLeft + Number(slideRect.width ?? slideRect.w ?? 0)));
  const slideBottom = Number(slideRect.bottom ?? (slideTop + Number(slideRect.height ?? slideRect.h ?? 0)));
  if (rawRect.left < slideLeft - 1
    || rawRect.top < slideTop - 1
    || rawRect.right > slideRight + 1
    || rawRect.bottom > slideBottom + 1) {
    return false;
  }
  const visibleChildren = visibleElementChildren(el, slideRect);
  if (visibleChildren.length && !hasOnlyInlineTextChildren(el)) return false;
  const background = String(style.backgroundImage || '');
  if (!background.includes('gradient') && !background.includes('url(')) return false;
  if (backgroundUrl(background)) return false;
  if (shouldUseNativeGradientShape(style, clipped.width, clipped.height)) return false;
  const areaRatio = clipped.width * clipped.height / Math.max(1, slideRect.w * slideRect.h);
  if (areaRatio <= 0.0002 || areaRatio > 0.12) return false;
  const hasDepth = (style.boxShadow && style.boxShadow !== 'none')
    || (style.filter && style.filter !== 'none')
    || (style.mixBlendMode && style.mixBlendMode !== 'normal')
    || maxCssRadius(style, clipped.width, clipped.height) >= 10
    || splitCssLayers(background).filter(layer => layer.includes('gradient')).length > 1;
  return Boolean(hasDepth);
}

export function isEditableTextContainer(el) {
  return el.isContentEditable
    || String(el.getAttribute?.('contenteditable') || '').toLowerCase() === 'true'
    || String(el.getAttribute?.('role') || '').toLowerCase() === 'textbox'
    || el.hasAttribute?.('data-editable-id')
    || el.hasAttribute?.('data-editable-ready');
}

export function isInsideEditableTextContainer(el) {
  const slide = el.closest?.('#deck > .slide');
  for (let parent = el.parentElement; parent && parent !== slide?.parentElement; parent = parent.parentElement) {
    if (isEditableTextContainer(parent)) return true;
    if (parent === slide) break;
  }
  return false;
}

export function hasOnlyInlineTextChildren(el) {
  return [...(el.children || [])].every(child => isInlineTextOnlyElement(child));
}

export function isInlineTextOnlyElement(el) {
  if (!isInlineTextChild(el)) return false;
  if (el.querySelector?.('svg, canvas, img, video')) return false;
  return [...(el.children || [])].every(child => isInlineTextOnlyElement(child));
}

export function shouldSkipDecorativeGradientFallback(el, style, clipped, slideRect) {
  const background = String(style.backgroundImage || '');
  if (!background.includes('gradient')) return false;
  const areaRatio = clipped.width * clipped.height / Math.max(1, slideRect.w * slideRect.h);
  if (areaRatio <= 0.18) return false;
  if ((el.innerText || '').trim()) return false;
  const visibleChildren = visibleElementChildren(el, slideRect);
  if (visibleChildren.length) return false;
  if (background.includes('radial-gradient') && transparentCssPaint(style.backgroundColor) && !String(style.filter || '').includes('blur(')) return false;
  return String(style.filter || '').includes('blur(')
    || Number(style.opacity || 1) < 0.9;
}

export function backgroundHasTransparentStop(value) {
  const raw = String(value || '').toLowerCase();
  return raw.includes('transparent')
    || /rgba?\([^)]*,\s*0(?:\.0+)?\s*\)/i.test(raw)
    || /\/\s*0(?:\.0+)?\s*\)/i.test(raw);
}

export function transparentCssPaint(value) {
  const raw = String(value || '').trim().toLowerCase();
  return !raw || raw === 'transparent' || /^rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)$/.test(raw);
}

export function hasTextPaintSource(style) {
  return isTextClippedBackground(style)
    || parseFloat(style?.webkitTextStrokeWidth || '0') > 0
    || !transparentCssPaint(style?.webkitTextFillColor)
    || !transparentCssPaint(style?.color);
}

export function readStyle(el, pseudo = null) {
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

export function styleWithCumulativeRotation(style, el) {
  const rotation = cumulativeRotation(el);
  if (!rotation) return style;
  const ownRotation = rotateFromTransform(style.transform);
  if (Math.abs(rotation - ownRotation) < 0.1) return style;
  return { ...style, transform: `rotate(${rotation}deg)` };
}

export function cumulativeRotation(el) {
  const slide = el?.closest?.('#deck > .slide');
  let rotation = 0;
  for (let node = el; node instanceof Element && node !== slide?.parentElement; node = node.parentElement) {
    rotation += rotateFromTransform(getComputedStyle(node).transform);
    if (node === slide) break;
  }
  return Math.abs(rotation) < 0.1 ? 0 : rotation;
}

export function summarizeCapturedTree(root) {
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

export function summarizeNode(node, summary, depth) {
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

export async function elementImageData(img, src) {
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

export async function svgElementData(svg, width, height, options = {}) {
  try {
    const clone = cloneSvgWithComputedStyle(svg);
    if (options.stripText) clone.querySelectorAll('text, foreignObject').forEach(el => el.remove());
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', String(Math.max(1, Math.round(width))));
    clone.setAttribute('height', String(Math.max(1, Math.round(height))));
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

export function collectSvgTextNodes(svg, slideRect, slideIndex) {
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

export function cloneSvgWithComputedStyle(svg) {
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

export function patternBackgroundImageData(backgroundImage, width, height, radius = 0) {
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

export function parseRepeatingGradient(backgroundImage) {
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

export function backgroundCropForClippedRect(rawRect, clipped) {
  const width = rawRect.width || clipped.width;
  const height = rawRect.height || clipped.height;
  const x = Math.max(0, clipped.left - rawRect.left);
  const y = Math.max(0, clipped.top - rawRect.top);
  if (Math.abs(x) < 0.5 && Math.abs(y) < 0.5 && Math.abs(clipped.width - width) < 0.5 && Math.abs(clipped.height - height) < 0.5) return null;
  return { x, y, width: clipped.width, height: clipped.height };
}

export function gradientBackgroundImageData(backgroundImage, width, height, radius = 0, crop = null) {
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
  if (crop) {
    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = Math.max(1, Math.round(crop.width * scale));
    cropCanvas.height = Math.max(1, Math.round(crop.height * scale));
    const cropCtx = cropCanvas.getContext('2d');
    if (!cropCtx) return null;
    cropCtx.drawImage(
      canvas,
      Math.round(crop.x * scale),
      Math.round(crop.y * scale),
      cropCanvas.width,
      cropCanvas.height,
      0,
      0,
      cropCanvas.width,
      cropCanvas.height,
    );
    return cropCanvas.toDataURL('image/png');
  }
  return canvas.toDataURL('image/png');
}

export function drawLinearGradient(ctx, layer, width, height) {
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

export function drawRadialGradient(ctx, layer, width, height) {
  const body = layer.replace(/^.*?radial-gradient\(/i, '').replace(/\)\s*$/, '');
  const args = splitCssArgs(body);
  let startIndex = 0;
  let cx = width / 2;
  let cy = height / 2;
  const first = String(args[0] || '');
  const firstLower = first.toLowerCase();
  if (!/^(?:rgba?|#)/i.test(first.trim())) {
    const at = first.match(/\bat\s+([-\d.]+)%?\s+([-\d.]+)%?/i);
    if (at) {
      cx = width * Number(at[1]) / 100;
      cy = height * Number(at[2]) / 100;
    }
    startIndex = 1;
  }
  const radius = firstLower.includes('closest-side')
    ? Math.max(1, Math.min(cx, cy, width - cx, height - cy))
    : Math.max(width, height) * 0.72;
  const stops = normalizeGradientStops(parseGradientColorStops(args.slice(startIndex)), radius);
  if (stops.length < 2) return;
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
  for (const stop of stops) gradient.addColorStop(stop.offset, rgbaString(stop.color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

export function splitCssLayers(value) {
  return splitCssArgs(String(value || '')).filter(Boolean);
}

export function splitCssArgs(value) {
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

export function parseGradientColorStops(args) {
  return args.map(parseGradientColorStop).filter(Boolean);
}

export function parseGradientColorStop(value) {
  const raw = String(value || '').trim();
  const colorMatch = raw.match(/(rgba?\([^)]+\)|color\([^)]+\)|#[0-9a-f]{3,8})/i);
  if (!colorMatch) return null;
  return {
    color: parseCanvasColor(colorMatch[1]),
    position: parseGradientPosition(raw.slice(colorMatch.index + colorMatch[1].length).trim()),
  };
}

export function parseCanvasColor(value) {
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

export function cssColorComponent(value, unitInterval = false) {
  const raw = String(value || '').trim();
  if (raw.endsWith('%')) return Math.max(0, Math.min(255, Number(raw.slice(0, -1)) * 2.55 || 0));
  const number = Number(raw);
  if (unitInterval) return Math.max(0, Math.min(255, number * 255 || 0));
  return Math.max(0, Math.min(255, number || 0));
}

export function cssAlpha(value) {
  const raw = String(value || '').trim();
  if (raw.endsWith('%')) return Math.max(0, Math.min(1, Number(raw.slice(0, -1)) / 100 || 0));
  return Math.max(0, Math.min(1, Number(raw) || 0));
}

export function parseGradientPosition(raw) {
  const match = String(raw || '').match(/([-\d.]+)(%|px)?/);
  if (!match) return null;
  return {
    value: Number(match[1]),
    unit: match[2] || '%',
  };
}

export function normalizeGradientStops(stops, pixelSpan) {
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

export function rgbaString(color) {
  return `rgba(${Math.round(color.r)},${Math.round(color.g)},${Math.round(color.b)},${color.a})`;
}

export function roundedRectPath(ctx, x, y, w, h, radius) {
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

export function backgroundUrl(backgroundImage) {
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

export function isTurbulenceDataImage(url) {
  try {
    return String(url || '').startsWith('data:image/svg+xml') && decodeURIComponent(url).includes('feTurbulence');
  } catch {
    return String(url || '').includes('feTurbulence');
  }
}

export function maxCssRadius(style, width = 0, height = 0) {
  return Math.max(
    cssRadiusPx(style.borderTopLeftRadius, width, height),
    cssRadiusPx(style.borderTopRightRadius, width, height),
    cssRadiusPx(style.borderBottomRightRadius, width, height),
    cssRadiusPx(style.borderBottomLeftRadius, width, height),
  );
}

export function cssRadiusPx(value, width = 0, height = 0) {
  const raw = String(value || '').trim();
  if (!raw || raw === '0px') return 0;
  if (raw.includes('%')) {
    const pct = parseFloat(raw) || 0;
    return Math.min(Number(width) || 0, Number(height) || 0) * pct / 100;
  }
  return parseFloat(raw) || 0;
}

export function finishEditablePptxAnimations(scope) {
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

export function markUnicornOverlayText(slide, slideRect) {
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

export function fallbackTextRisk(root, slideRect) {
  const texts = visibleTextInSubtree(root, slideRect);
  return { count: texts.length, sample: texts.join(' ').slice(0, 160) };
}

export function visibleTextInSubtree(root, slideRect) {
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

export function visibleTextInScreenshotRect(root, slideRect, target = null) {
  const slide = root.closest('#deck > .slide') || root;
  const targetRect = target || root.getBoundingClientRect();
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

export function visibleOverlayPaintInScreenshotRect(root, slideRect, target = null) {
  const slide = root.closest('#deck > .slide') || root;
  const targetRect = target || root.getBoundingClientRect();
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

export function collectDomFallbackTextNodes(root, slideRect, slideIndex) {
  const nodes = [];
  const walk = (node) => {
    for (const child of node.childNodes || []) {
      if (child.nodeType === Node.TEXT_NODE) {
        const parent = child.parentElement;
        if (!parent || !isVisibleElement(parent, slideRect)) continue;
        const textNode = captureTextNode(child, parent, slideRect, readStyle(parent), slideIndex);
        if (Array.isArray(textNode)) nodes.push(...textNode);
        else if (textNode) nodes.push(textNode);
      } else if (child.nodeType === Node.ELEMENT_NODE && isVisibleElement(child, slideRect)) {
        walk(child);
      }
    }
  };
  walk(root);
  return nodes;
}

export function svgTextRisk(svg) {
  const texts = [...svg.querySelectorAll('text, foreignObject')]
    .map(el => normalizeText(el.textContent || ''))
    .filter(Boolean);
  return { count: texts.length, sample: texts.join(' ').slice(0, 160) };
}

export async function fetchImageDataUrl(url, width = 0, height = 0, alpha = 1) {
  // 整体超时:慢网/挂起的图片抓取不能拖死采集流程(自包含,注入与浏览器双宿主可用)。
  const inner = (async () => {
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
  })();
  const timeout = new Promise(resolve => setTimeout(() => resolve(null), 15000));
  return Promise.race([timeout, inner]);
}

export function normalizeDataImageUrl(url) {
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

export function rasterizeSvgDataUrl(url, width = 0, height = 0, alpha = 1) {
  return new Promise(resolve => {
    // WebKit 对个别 SVG data URL 的 Image 解码可能 onload/onerror 均不触发,
    // 没有超时就会把整条采集流程永久挂死(真实案例:Safari 内核采集第 2 页卡住)。
    const timer = setTimeout(() => resolve(normalizeDataImageUrl(url)), 10000);
    const img = new Image();
    img.onload = () => {
      clearTimeout(timer);
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
    img.onerror = () => { clearTimeout(timer); resolve(normalizeDataImageUrl(url)); };
    img.src = normalizeDataImageUrl(url);
  });
}

export function blobToDataUrl(blob) {
  return new Promise(resolve => {
    setTimeout(() => resolve(null), 10000);
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(blob);
  });
}

export function isVisibleElement(el, slideRect, style = getComputedStyle(el)) {
  if (!(el instanceof Element)) return false;
  if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity || 1) <= 0.01) return false;
  const rect = el.getBoundingClientRect();
  if (rect.width <= 0.5 || rect.height <= 0.5) return false;
  if (rect.right < slideRect.x || rect.left > slideRect.x + slideRect.w || rect.bottom < slideRect.y || rect.top > slideRect.y + slideRect.h) return false;
  return true;
}

export function isMediaChrome(el) {
  return !!el.closest('script,style,noscript,template,#nav,#preview-panel,#slide-rail,.theme03-theme-toggle,.ctl,.spill,input');
}

export function shouldScreenshotImageSlot(el) {
  return isImageSlotElement(el) && !hasTransformedAncestor(el);
}

export function isImageSlotElement(el) {
  return !!el.matches?.('image-slot,[data-dashi-host-image-slot="true"]');
}

export function hasTransformedAncestor(el) {
  const slide = el.closest?.('#deck > .slide');
  for (let parent = el.parentElement; parent && parent !== slide; parent = parent.parentElement) {
    const transform = String(getComputedStyle(parent).transform || '');
    if (isRotatedOrSkewedTransform(transform)) return true;
  }
  return false;
}

export function isRotatedOrSkewedTransform(transform) {
  const raw = String(transform || '').trim();
  if (!raw || raw === 'none') return false;
  const matrix = raw.match(/^matrix\(([^)]+)\)$/);
  if (matrix) {
    const [a, b, c, d] = matrix[1].split(',').map(value => Number.parseFloat(value.trim()) || 0);
    return Math.abs(b) > 0.001 || Math.abs(c) > 0.001 || Math.abs(a - d) > 0.001;
  }
  const matrix3d = raw.match(/^matrix3d\(([^)]+)\)$/);
  if (matrix3d) {
    const values = matrix3d[1].split(',').map(value => Number.parseFloat(value.trim()) || 0);
    return Math.abs(values[1]) > 0.001 || Math.abs(values[4]) > 0.001 || Math.abs(values[0] - values[5]) > 0.001;
  }
  return /rotate|skew/i.test(raw);
}

export function clippedRect(rect, slideRect) {
  const left = Math.max(rect.left, slideRect.x);
  const top = Math.max(rect.top, slideRect.y);
  const right = Math.min(rect.right, slideRect.x + slideRect.w);
  const bottom = Math.min(rect.bottom, slideRect.y + slideRect.h);
  if (right <= left || bottom <= top) return null;
  return { left, top, width: right - left, height: bottom - top };
}

export function slideClipRect(slideRect) {
  const left = Number(slideRect.x || 0);
  const top = Number(slideRect.y || 0);
  const width = Number(slideRect.w || slideRect.width || 0);
  const height = Number(slideRect.h || slideRect.height || 0);
  return { left, top, right: left + width, bottom: top + height, width, height };
}

export function intersectClientRect(rect, clipRect) {
  if (!rect || !clipRect) return null;
  const rectLeft = Number(rect.left ?? rect.x ?? 0);
  const rectTop = Number(rect.top ?? rect.y ?? 0);
  const rectRight = Number(rect.right ?? (rectLeft + Number(rect.width ?? rect.w ?? 0)));
  const rectBottom = Number(rect.bottom ?? (rectTop + Number(rect.height ?? rect.h ?? 0)));
  const clipLeft = Number(clipRect.left ?? clipRect.x ?? 0);
  const clipTop = Number(clipRect.top ?? clipRect.y ?? 0);
  const clipRight = Number(clipRect.right ?? (clipLeft + Number(clipRect.width ?? clipRect.w ?? 0)));
  const clipBottom = Number(clipRect.bottom ?? (clipTop + Number(clipRect.height ?? clipRect.h ?? 0)));
  const left = Math.max(rectLeft, clipLeft);
  const top = Math.max(rectTop, clipTop);
  const right = Math.min(rectRight, clipRight);
  const bottom = Math.min(rectBottom, clipBottom);
  if (right <= left || bottom <= top) return null;
  return { left, top, right, bottom, width: right - left, height: bottom - top };
}

export function nextChildClipRect(el, style, rawRect, currentClip) {
  if (!hasClipStyle(style)) return currentClip;
  return intersectClientRect(rawRect || el.getBoundingClientRect(), currentClip) || currentClip;
}

export function hasClipStyle(style) {
  const overflow = String(style?.overflow || '').trim().toLowerCase();
  if (overflow && overflow !== 'visible') return true;
  const clipPath = String(style?.clipPath || '').trim();
  if (clipPath && clipPath !== 'none') return true;
  const mask = `${style?.mask || ''} ${style?.maskImage || ''} ${style?.webkitMask || ''} ${style?.webkitMaskImage || ''}`.trim();
  return Boolean(mask && !/^none(?:\s+none)*$/i.test(mask));
}

export function sameClientRect(a, b, tolerance = 0.5) {
  if (!a || !b) return false;
  const aLeft = Number(a.left ?? a.x ?? 0);
  const aTop = Number(a.top ?? a.y ?? 0);
  const aRight = Number(a.right ?? (aLeft + Number(a.width ?? a.w ?? 0)));
  const aBottom = Number(a.bottom ?? (aTop + Number(a.height ?? a.h ?? 0)));
  const bLeft = Number(b.left ?? b.x ?? 0);
  const bTop = Number(b.top ?? b.y ?? 0);
  const bRight = Number(b.right ?? (bLeft + Number(b.width ?? b.w ?? 0)));
  const bBottom = Number(b.bottom ?? (bTop + Number(b.height ?? b.h ?? 0)));
  return Math.abs(aLeft - bLeft) <= tolerance
    && Math.abs(aTop - bTop) <= tolerance
    && Math.abs(aRight - bRight) <= tolerance
    && Math.abs(aBottom - bBottom) <= tolerance;
}

export function rectObject(rect) {
  return {
    x: rect.left ?? rect.x,
    y: rect.top ?? rect.y,
    w: rect.width ?? rect.w,
    h: rect.height ?? rect.h,
  };
}

export function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

export function hasPaint(color) {
  const raw = String(color || '').trim();
  return raw && raw !== 'transparent' && !/^rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)$/i.test(raw);
}

export function hasAnyBorder(style) {
  return ['Top', 'Right', 'Bottom', 'Left'].some(side => parseFloat(style?.[`border${side}Width`] || '0') > 0 && hasPaint(style?.[`border${side}Color`]));
}

export function cssPx(value) {
  const raw = String(value || '').trim();
  if (!raw || raw === 'auto') return null;
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : null;
}

export function cssLengthPx(value, base = 0) {
  const raw = String(value || '').trim();
  if (!raw || raw === 'auto') return null;
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return null;
  if (raw.endsWith('%')) return n / 100 * (Number(base) || 0);
  return n;
}

export function translateFromTransform(value, width = 0, height = 0) {
  const raw = String(value || '');
  if (!raw || raw === 'none') return { x: 0, y: 0 };
  const matrix3d = raw.match(/matrix3d\(([^)]+)\)/i);
  if (matrix3d) {
    const parts = splitCssArgs(matrix3d[1]).map(Number);
    return {
      x: Number.isFinite(parts[12]) ? parts[12] : 0,
      y: Number.isFinite(parts[13]) ? parts[13] : 0,
    };
  }
  const matrix = raw.match(/matrix\(([^)]+)\)/i);
  if (matrix) {
    const parts = splitCssArgs(matrix[1]).map(Number);
    return {
      x: Number.isFinite(parts[4]) ? parts[4] : 0,
      y: Number.isFinite(parts[5]) ? parts[5] : 0,
    };
  }
  const translate = raw.match(/translate(?:3d)?\(([^)]+)\)/i);
  const translateX = raw.match(/translateX\(([^)]+)\)/i);
  const translateY = raw.match(/translateY\(([^)]+)\)/i);
  const out = { x: 0, y: 0 };
  if (translate) {
    const [x = '0', y = '0'] = splitCssArgs(translate[1]);
    out.x += cssLengthPx(x, width) || 0;
    out.y += cssLengthPx(y, height) || 0;
  }
  if (translateX) out.x += cssLengthPx(translateX[1], width) || 0;
  if (translateY) out.y += cssLengthPx(translateY[1], height) || 0;
  return out;
}

export function isTextClippedBackground(style) {
  const clip = `${style?.backgroundClip || ''} ${style?.webkitBackgroundClip || ''}`.toLowerCase();
  return clip.includes('text');
}

export function shouldUseNativeGradientShape(style = {}, width = 0, height = 0) {
  const background = String(style.backgroundImage || '');
  if (!/linear-gradient/i.test(background) || /repeating-linear-gradient/i.test(background)) return false;
  const gradientLayers = splitCssLayers(background).filter(layer => /(?:linear|radial)-gradient/i.test(layer));
  if (gradientLayers.length === 1 && isLowAlphaLinearGradient(gradientLayers[0])) return true;
  const minSide = Math.min(Number(width) || 0, Number(height) || 0);
  const maxSide = Math.max(Number(width) || 0, Number(height) || 0);
  return minSide > 0 && minSide <= 16 && maxSide >= 24;
}

export function isLowAlphaLinearGradient(layer) {
  if (!/linear-gradient/i.test(String(layer || '')) || /radial-gradient/i.test(String(layer || ''))) return false;
  const body = String(layer).replace(/^.*?linear-gradient\(/i, '').replace(/\)\s*$/, '');
  const args = splitCssArgs(body);
  let startIndex = 0;
  if (/([-\d.]+deg|to\s+)/i.test(String(args[0] || ''))) startIndex = 1;
  const stops = parseGradientColorStops(args.slice(startIndex));
  if (stops.length < 2) return false;
  if (!stops.every(stop => stop.color && stop.color.a > 0 && stop.color.a <= 0.28)) return false;
  const [first] = stops;
  return stops.every(stop => {
    const color = stop.color;
    return Math.abs(color.r - first.color.r) <= 24
      && Math.abs(color.g - first.color.g) <= 24
      && Math.abs(color.b - first.color.b) <= 24;
  });
}

export function rotateFromTransform(value) {
  const raw = String(value || '');
  if (!raw || raw === 'none') return 0;
  const rotate = raw.match(/rotate\(\s*([-\d.]+)deg\s*\)/i);
  if (rotate) return Number(rotate[1]) || 0;
  const matrix = raw.match(/matrix\(([^)]+)\)/);
  if (!matrix) return 0;
  const [a, b] = matrix[1].split(',').map(Number);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return 0;
  return Math.round(Math.atan2(b, a) * 180 / Math.PI);
}

export function scaleFromTransform(value) {
  const raw = String(value || '');
  const matrix = raw.match(/matrix\(([^)]+)\)/);
  if (!matrix) return { x: 1, y: 1 };
  const [a, b, c, d] = matrix[1].split(',').map(Number);
  return {
    x: Number.isFinite(a) && Number.isFinite(b) ? Math.hypot(a, b) || 1 : 1,
    y: Number.isFinite(c) && Number.isFinite(d) ? Math.hypot(c, d) || 1 : 1,
  };
}

export const restoreHiddenScreenshotStyles = token => {
  const entries = window.__editablePptxHiddenTextStyles?.get(token) || [];
  for (const entry of entries) {
    if (entry.style == null) entry.el.removeAttribute('style');
    else entry.el.setAttribute('style', entry.style);
  }
  window.__editablePptxHiddenTextStyles?.delete(token);
};

// 截图前隐藏文字/覆盖层(自包含:双宿主直接引用,服务端经 page.evaluate 序列化执行)。
export const hideNodeForScreenshot = ({ exportId, mode, stripText, stripOverlay, screenshotRect }) => {
  const root = document.querySelector(`#deck > .slide.active [data-editable-pptx-export-id="${exportId}"], #deck > .slide[data-deck-active] [data-editable-pptx-export-id="${exportId}"]`)
    || document.querySelector(`[data-editable-pptx-export-id="${exportId}"]`);
  if (!root) return null;
  const token = `hide-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const entries = [];
  const rootRect = root.getBoundingClientRect();
  const targetRect = screenshotRect
    ? {
      left: Number(screenshotRect.x || 0),
      top: Number(screenshotRect.y || 0),
      right: Number(screenshotRect.x || 0) + Number(screenshotRect.w || 0),
      bottom: Number(screenshotRect.y || 0) + Number(screenshotRect.h || 0),
      width: Number(screenshotRect.w || 0),
      height: Number(screenshotRect.h || 0),
    }
    : rootRect;
  const slide = mode === 'screenshot-rect'
    ? root.closest('#deck > .slide') || document.querySelector('#deck > .slide.active, #deck > .slide[data-deck-active]')
    : root;
  const intersects = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  const remember = (el) => {
    if (!el || entries.some(entry => entry.el === el)) return;
    entries.push({ el, style: el.getAttribute('style') });
  };
  const mark = (el) => {
    if (!el) return;
    remember(el);
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
    if (!el) return;
    remember(el);
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
    const targetArea = Math.max(1, targetRect.width * targetRect.height);
    return area / targetArea > 0.86
      && Math.abs(rect.left - targetRect.left) < 8
      && Math.abs(rect.top - targetRect.top) < 8
      && Math.abs(rect.right - targetRect.right) < 8
      && Math.abs(rect.bottom - targetRect.bottom) < 8;
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
      if (!intersects(rect, targetRect) || isMostlyRootSized(rect) || !hasOverlayPaint(el)) return;
      markOverlay(el);
    });
  }
  const shouldHideRange = (range) => {
    if (mode !== 'screenshot-rect') return true;
    const rects = [...range.getClientRects()];
    const bounds = range.getBoundingClientRect();
    return (rects.length ? rects : [bounds]).some(rect => rect.width > 1 && rect.height > 1 && intersects(rect, targetRect));
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
      if (rect.width > 1 && rect.height > 1 && intersects(rect, targetRect)) mark(el);
    });
  }
  window.__editablePptxHiddenTextStyles ||= new Map();
  window.__editablePptxHiddenTextStyles.set(token, entries);
  return token;
};

// 应用前端导出快照(文本覆盖/页序/props/canvas 快照/当前页;自包含,双宿主直接引用)。
export const applyEditablePptxSnapshot = async (snapshot) => {
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
  if (Array.isArray(state.duplicatedSlides)) {
    state.duplicatedSlides.forEach(record => window.__deckViewModel?.restoreDuplicatedSlide?.(record));
    window.__restorePersistedCatalogSlides?.();
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
};
