#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import {
  getMediaSlotsForLayout,
  getLayoutRecord,
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

  if (!slides.length) {
    errors.push('deck field slides: final delivery goal must include non-empty slides with concrete layout values');
  }

  validateFreeHtml(spec?.title, 'deck', '<deck>', 'title', errors);
  validateFreeHtml(spec?.goal, 'deck', '<deck>', 'goal', errors);
  validateObjectStrings(spec?.text, 'deck', '<deck>', 'text', errors);
  validateObjectStrings(spec?.props, 'deck', '<deck>', 'props', errors);

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

    if (Object.prototype.hasOwnProperty.call(slide, 'media')) {
      errors.push(`slide ${slideNumber} layout ${layoutLabel} field media: slides[].media is not rendered; use props.images or props.media`);
    }

    const record = getLayoutRecord(layout);
    const props = slide?.props || {};
    validateMediaIntent(slide, slideNumber, layoutLabel, props, errors);

    for (const key of unknownPropKeys(record, props)) {
      errors.push(`slide ${slideNumber} layout ${layoutLabel} field ${key}: unknown prop for this layout`);
    }

    const normalized = normalizeProps(layout, props);
    for (const error of normalized.errors || []) {
      errors.push(`slide ${slideNumber} layout ${layoutLabel} field props: ${error}`);
    }

    validateObjectStrings(props, `slide ${slideNumber}`, layoutLabel, 'props', errors);
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

  return errors;
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
    errors.push(`slide ${slideNumber} layout ${layout} field ${intent.field}: providedImages must be written to ${fields}; do not use slides[].media`);
  }
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
