import {
  DEFAULT_FONT,
  DEFAULT_MOTION,
  DEFAULT_SPACING,
  DEFAULT_THEME,
  DEFAULT_TYPE_SCALE,
  FONT_OPTIONS,
  MOTION_OPTIONS,
  SPACING_OPTIONS,
  THEME_OPTIONS,
  TYPE_SCALE_OPTIONS,
} from './tokens/index.js';

export {
  DEFAULT_FONT,
  DEFAULT_MOTION,
  DEFAULT_SPACING,
  DEFAULT_THEME,
  DEFAULT_TYPE_SCALE,
  FONT_OPTIONS,
  MOTION_OPTIONS,
  SPACING_OPTIONS,
  THEME_OPTIONS,
  TYPE_SCALE_OPTIONS,
};

export const LAYOUT_OPTIONS = {};

export function slide(layoutName) {
  const names = Object.keys(LAYOUT_OPTIONS);
  const choices = names.length ? names.join(', ') : 'no layouts registered yet';
  throw new Error(`Unknown layout "${layoutName}". Choose one of: ${choices}`);
}

export function resolveOption(registry, name, fallback, label) {
  const key = name ?? fallback;
  const option = registry[key];
  if (!option) {
    throw new Error(`Unknown ${label} "${key}". Choose one of: ${Object.keys(registry).join(', ')}`);
  }
  return { key, option };
}
