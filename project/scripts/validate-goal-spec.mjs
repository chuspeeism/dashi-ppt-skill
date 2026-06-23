#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { isSerializedReactElementLike } from '../src/prop-contract-core.mjs';
import {
  getCopyBudgetsForLayout,
  getMediaSlotsForLayout,
  getLayoutRecord,
  getThemePackMetadata,
  isCoverCandidate,
  isCoverLikeLayout,
  layoutExists,
  mediaSlotCapacity,
  normalizeProps,
  unknownPropKeys,
} from './skill-workflow-utils.mjs';

const ALLOWED_INLINE_TAGS = new Set(['b', 'strong', 'i', 'em', 'br', 'sup', 'sub']);

export function validateGoalSpec(spec) {
  const errors = [];
  const slides = Array.isArray(spec?.slides) ? spec.slides : [];
  const mediaUsages = new Map();
  const layoutUsages = new Map();

  if (!slides.length) {
    errors.push('deck field slides: final delivery goal must include non-empty slides with concrete layout values');
  }

  validateFreeHtml(spec?.title, 'deck', '<deck>', 'title', errors);
  validateFreeHtml(spec?.goal, 'deck', '<deck>', 'goal', errors);
  validateNoSerializedReactElements(spec?.text, 'deck', '<deck>', 'text', errors);
  validateNoSerializedReactElements(spec?.props, 'deck', '<deck>', 'props', errors);
  validateObjectStrings(spec?.text, 'deck', '<deck>', 'text', errors);
  validateObjectStrings(spec?.props, 'deck', '<deck>', 'props', errors);

  if (spec?.themePack && !getThemePackMetadata(spec.themePack)) {
    errors.push(`deck field themePack: unknown or unavailable themePack "${spec.themePack}"`);
  }

  if (Object.prototype.hasOwnProperty.call(spec || {}, 'media')) {
    errors.push('deck layout <deck> field media: top-level media is not rendered; use each slide props.images or props.media');
  }

  const coverCandidates = [];
  const nonCandidateCoverLikes = [];

  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
    const layout = slide?.layout;
    const layoutLabel = layout || '<missing>';

    if (!layout) {
      const role = slide?.role ? ` role "${slide.role}"` : '';
      errors.push(`slide ${slideNumber} layout <missing> field layout: final goal must use a concrete layout${role}`);
      return;
    }

    if (!layoutExists(layout)) {
      errors.push(`slide ${slideNumber} layout ${layout} field layout: unknown layout`);
      return;
    }

    const usages = layoutUsages.get(layout) || [];
    usages.push(slideNumber);
    layoutUsages.set(layout, usages);

    if (Object.prototype.hasOwnProperty.call(slide, 'media')) {
      errors.push(`slide ${slideNumber} layout ${layoutLabel} field media: slides[].media is not rendered; use props.images or props.media`);
    }

    const record = getLayoutRecord(layout);
    const props = slide?.props || {};
    validateNoSerializedReactElements(props, `slide ${slideNumber}`, layoutLabel, 'props', errors);
    validateNoSerializedReactElements(slide?.copy, `slide ${slideNumber}`, layoutLabel, 'copy', errors);
    validateMediaIntent(slide, slideNumber, layoutLabel, props, errors);
    validateMediaProps(slideNumber, layoutLabel, props, errors);
    collectMediaUsages(props, slideNumber, layoutLabel, mediaUsages);

    for (const key of unknownPropKeys(record, props)) {
      errors.push(`slide ${slideNumber} layout ${layoutLabel} field ${key}: unknown prop for this layout`);
    }

    const normalized = normalizeProps(layout, props);
    for (const error of normalized.errors || []) {
      errors.push(`slide ${slideNumber} layout ${layoutLabel} field props: ${error}`);
    }

    validateObjectStrings(props, `slide ${slideNumber}`, layoutLabel, 'props', errors);
    validateCopyBudgets(layout, props, slideNumber, layoutLabel, errors);
    validateObjectStrings(slide?.copy, `slide ${slideNumber}`, layoutLabel, 'copy', errors);

    if (isCoverCandidate(layout)) coverCandidates.push(layout);
    else if (isCoverLikeLayout(layout)) nonCandidateCoverLikes.push({ slideNumber, layout });
  });

  if (coverCandidates.length > 1) {
    errors.push(`deck field cover: only one cover candidate is allowed, found ${coverCandidates.join(', ')}`);
  }

  for (const item of nonCandidateCoverLikes) {
    errors.push(`slide ${item.slideNumber} layout ${item.layout} field layout: cover-like layouts must use themeXX_page001-page005`);
  }

  validateUniqueLayouts(layoutUsages, errors);

  if (spec?.allowMediaReuse !== true) validateUniqueMediaUsages(mediaUsages, errors);

  return errors;
}

function validateUniqueLayouts(layoutUsages, errors) {
  for (const [layout, slides] of layoutUsages.entries()) {
    if (slides.length <= 1) continue;
    errors.push(`deck field slides: duplicate layout ${layout} used on slides ${slides.join(', ')}; choose a unique layout for each slide`);
  }
}

function validateMediaIntent(slide, slideNumber, layout, props, errors) {
  const slots = getMediaSlotsForLayout(layout);
  const intent = getSlideMediaIntent(slide);
  if (!intent.requiresMedia) return;

  if (!slots.length) {
    errors.push(`slide ${slideNumber} layout ${layout} field ${intent.field}: ${intent.label} requires a usable media slot; choose a layout with mediaSlots or remove the media intent`);
    return;
  }

  if (intent.count > 0 && !slots.some(slot => mediaSlotCapacity(slot) >= intent.count)) {
    const capacities = slots.map(slot => `${slot.field}:${mediaSlotCapacity(slot)}`).join(', ');
    errors.push(`slide ${slideNumber} layout ${layout} field ${intent.field}: ${intent.label} needs ${intent.count} media item(s), but available media slot capacity is ${capacities}`);
  }

  if (!intent.requiresWrittenProps) return;

  const writtenSlot = slots.find(slot => Array.isArray(props?.[slot.field]) && props[slot.field].length >= Math.max(1, intent.count));
  if (!writtenSlot) {
    const fields = slots.map(slot => `props.${slot.field}`).join(' or ');
    errors.push(`slide ${slideNumber} layout ${layout} field ${intent.field}: ${intent.label} must be written to ${fields}; do not use slides[].media`);
  }
}

function validateMediaProps(slideNumber, layout, props, errors) {
  const slots = getMediaSlotsForLayout(layout).filter(slot => slot.field && slot.initialSrcSupported === true);
  const slotsByField = new Map(slots.map(slot => [slot.field, slot]));
  for (const [key, value] of Object.entries(props || {})) {
    if (!isMediaArrayKey(key)) continue;
    const slot = slotsByField.get(key);
    if (!slot) {
      errors.push(`slide ${slideNumber} layout ${layout} field props.${key}: not a writable media slot for this layout`);
      continue;
    }
    if (!Array.isArray(value)) {
      errors.push(`slide ${slideNumber} layout ${layout} field props.${key}: expected array of media items`);
      continue;
    }
    value.forEach((item, index) => validateMediaItem(item, slot, `slide ${slideNumber}`, layout, `props.${key}[${index}]`, errors));
  }
}

function validateMediaItem(item, slot, scope, layout, field, errors) {
  if (typeof item === 'string') {
    const src = item.trim();
    if (!src) {
      errors.push(`${scope} layout ${layout} field ${field}: expected non-empty media source`);
      return;
    }
    if (looksLikeVideoSrc(src) && !src.startsWith('data:video/')) {
      errors.push(`${scope} layout ${layout} field ${field}: video media must use {src, kind:"video", type}`);
      return;
    }
    validateAcceptedMediaKind(src.startsWith('data:video/') ? 'video' : 'image', slot, scope, layout, field, errors);
    return;
  }

  if (!item || typeof item !== 'object' || Array.isArray(item)) {
    errors.push(`${scope} layout ${layout} field ${field}: expected media item as string or {src}`);
    return;
  }

  const src = typeof item.src === 'string' ? item.src.trim() : '';
  if (!src) {
    errors.push(`${scope} layout ${layout} field ${field}: expected media item with src`);
    return;
  }

  const declaredKind = normalizeMediaKind(item.kind);
  const typeText = String(item.type || '');
  const inferredKind = declaredKind
    || (typeText.startsWith('video/') || src.startsWith('data:video/') ? 'video' : 'image');
  if (looksLikeVideoSrc(src) && inferredKind !== 'video') {
    errors.push(`${scope} layout ${layout} field ${field}: video media must set kind:"video" or type:"video/*"`);
    return;
  }
  validateAcceptedMediaKind(inferredKind, slot, scope, layout, field, errors);
}

function validateAcceptedMediaKind(kind, slot, scope, layout, field, errors) {
  const accepted = slot.acceptedKinds || [];
  if (!accepted.length || accepted.includes(kind)) return;
  errors.push(`${scope} layout ${layout} field ${field}: ${kind} media is not supported by props.${slot.field}`);
}

function getSlideMediaIntent(slide) {
  const providedCount = mediaCount(slide?.providedImages);
  if (providedCount || slide?.hasImages === true) {
    return {
      requiresMedia: true,
      requiresWrittenProps: true,
      count: providedCount || 1,
      field: providedCount ? 'providedImages' : 'hasImages',
      label: providedCount ? 'providedImages' : 'hasImages',
    };
  }

  const providedMediaCount = mediaCount(slide?.providedMedia);
  if (providedMediaCount) {
    return {
      requiresMedia: true,
      requiresWrittenProps: true,
      count: providedMediaCount,
      field: 'providedMedia',
      label: 'providedMedia',
    };
  }

  const plannedCount = mediaCount(slide?.plannedImages);
  if (plannedCount) {
    return {
      requiresMedia: true,
      requiresWrittenProps: false,
      count: plannedCount,
      field: 'plannedImages',
      label: 'plannedImages',
    };
  }

  if (slide?.needsVisual === true || slide?.needsImageGen === true || slide?.imageGen === true) {
    const field = slide?.needsVisual === true ? 'needsVisual' : slide?.needsImageGen === true ? 'needsImageGen' : 'imageGen';
    return {
      requiresMedia: true,
      requiresWrittenProps: false,
      count: 1,
      field,
      label: field,
    };
  }

  return {
    requiresMedia: false,
    requiresWrittenProps: false,
    count: 0,
    field: '',
    label: '',
  };
}

function mediaCount(value) {
  if (Array.isArray(value)) return value.length;
  if (value === true) return 1;
  const number = Number(value);
  if (Number.isFinite(number) && number > 0) return Math.round(number);
  return 0;
}

function validateObjectStrings(value, scope, layout, fieldPrefix, errors) {
  if (!value || typeof value !== 'object') return;
  visitStrings(value, fieldPrefix, (text, field) => validateFreeHtml(text, scope, layout, field, errors));
}

function validateNoSerializedReactElements(value, scope, layout, fieldPrefix, errors) {
  if (!value || typeof value !== 'object') return;
  if (isSerializedReactElementLike(value)) {
    errors.push(`${scope} layout ${layout} field ${fieldPrefix}: serialized React element is not allowed; use plain text`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => validateNoSerializedReactElements(item, scope, layout, `${fieldPrefix}[${index}]`, errors));
    return;
  }
  Object.entries(value).forEach(([key, item]) => validateNoSerializedReactElements(item, scope, layout, `${fieldPrefix}.${key}`, errors));
}

function validateCopyBudgets(layout, props, slideNumber, layoutLabel, errors) {
  const budgets = getCopyBudgetsForLayout(layout);
  if (!Object.keys(budgets).length) return;
  visitStrings(props, 'props', (text, field) => {
    const budgetKey = normalizeBudgetPath(field.replace(/^props\./, ''));
    const budget = budgets[budgetKey];
    if (!budget) return;
    const nested = budgetKey.includes('.') || budgetKey.includes('[]');
    if (budget.density !== 'display' && !(budget.density === 'metric' && !nested)) return;
    const length = charLength(stripInlineMarkers(text));
    if (length <= budget.maxChars) return;
    errors.push(`slide ${slideNumber} layout ${layoutLabel} field ${field}: ${budget.density} copy is too long (${length} > ${budget.maxChars}); move long text to subtitle/lead/list or choose a denser layout`);
  });
}

function collectMediaUsages(props, slideNumber, layout, mediaUsages) {
  for (const [key, value] of Object.entries(props || {})) {
    if (!isMediaArrayKey(key)) continue;
    collectMediaValue(value, `props.${key}`, slideNumber, layout, mediaUsages);
  }
}

function collectMediaValue(value, field, slideNumber, layout, mediaUsages) {
  if (typeof value === 'string') {
    addMediaUsage(value, field, slideNumber, layout, mediaUsages);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectMediaValue(item, `${field}[${index}]`, slideNumber, layout, mediaUsages));
    return;
  }
  if (!value || typeof value !== 'object') return;
  if (typeof value.src === 'string') addMediaUsage(value.src, `${field}.src`, slideNumber, layout, mediaUsages);
}

function addMediaUsage(src, field, slideNumber, layout, mediaUsages) {
  const key = normalizeMediaSrc(src);
  if (!key) return;
  const usages = mediaUsages.get(key) || [];
  usages.push({ field, slideNumber, layout });
  mediaUsages.set(key, usages);
}

function validateUniqueMediaUsages(mediaUsages, errors) {
  for (const [src, usages] of mediaUsages.entries()) {
    if (usages.length <= 1) continue;
    const locations = usages.map(item => `slide ${item.slideNumber} ${item.layout} ${item.field}`).join(', ');
    errors.push(`media asset "${src}" is used ${usages.length} times (${locations}); use each user media asset once or set deck allowMediaReuse=true when the user explicitly asks for reuse`);
  }
}

function visitStrings(value, field, visitor) {
  if (typeof value === 'string') {
    visitor(value, field);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => visitStrings(item, `${field}[${index}]`, visitor));
    return;
  }
  if (!value || typeof value !== 'object') return;
  Object.entries(value).forEach(([key, item]) => visitStrings(item, `${field}.${key}`, visitor));
}

function validateFreeHtml(value, scope, layout, field, errors) {
  if (typeof value !== 'string') return;
  const tags = findDisallowedTags(value);
  if (!tags.length) return;
  errors.push(`${scope} layout ${layout} field ${field}: obvious free HTML is not allowed (${tags.join(', ')})`);
}

function findDisallowedTags(value) {
  const tags = new Set();
  for (const match of value.matchAll(/<\/?([a-z][a-z0-9-]*)\b[^>]*>/gi)) {
    const tag = match[1].toLowerCase();
    if (!ALLOWED_INLINE_TAGS.has(tag)) tags.add(tag);
  }
  return [...tags];
}

function normalizeBudgetPath(field) {
  return String(field || '').replace(/\[\d+\]/g, '[]');
}

function normalizeMediaSrc(src) {
  return String(src || '').trim();
}

function isMediaArrayKey(key) {
  return /^(images|media|photos|pictures|logos|thumbs|imageSlots|imgs)$/i.test(String(key || ''));
}

function looksLikeVideoSrc(src) {
  return /\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(String(src || '').trim())
    || String(src || '').startsWith('data:video/');
}

function normalizeMediaKind(value) {
  const text = String(value || '').trim().toLowerCase();
  if (!text) return '';
  if (['image', 'img', 'photo', 'picture'].includes(text)) return 'image';
  if (['video', 'movie', 'clip'].includes(text)) return 'video';
  return text;
}

function stripInlineMarkers(value) {
  return String(value || '')
    .replace(/\[\[(.*?)\]\]/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1');
}

function charLength(value) {
  return Array.from(String(value || '')).length;
}

function runCli() {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: node scripts/validate-goal-spec.mjs <goal-spec.json>');
    process.exit(2);
  }

  const spec = JSON.parse(readFileSync(file, 'utf8'));
  const errors = validateGoalSpec(spec);
  if (errors.length) {
    console.error('Goal spec validation failed:');
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }
  console.log('Goal spec validation passed.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
