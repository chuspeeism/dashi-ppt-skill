import React from 'react';
import { useSlideViewModel } from '../../view-model/context.jsx';
import {
  normalizeControlValue,
  normalizePublicControls,
} from '../../control-naming.mjs';
import { GENERATED_THEME_PAGES, GENERATED_THEME_PACKS } from './generated-metadata.js';
import { ICONS as THEME03_DECOR_ICONS } from './theme03/source/src/icons.js';
import { PRESET_3D as THEME03_PRESET_3D } from './theme03/source/src/preset3d.js';

const THEME03_GLOBAL_ACCENT_CONTROL = {
  key: 'accent',
  label: '强调色',
  type: 'select',
  default: 'blue',
  options: [
    { value: 'blue', label: '电光蓝' },
    { value: 'lime', label: '荧光绿' },
  ],
};

const THEME03_DECOR_CONTROLS = [
  { key: 'showDecor', label: '装饰图片', type: 'toggle', default: false },
  {
    key: 'decorSrc',
    label: '装饰元素',
    type: 'icons',
    default: null,
    options: THEME03_DECOR_ICONS.map(({ src, label }) => ({ value: src, label, image: src })),
  },
  { key: 'decorScale', label: '图片大小', type: 'range', default: 1, min: 0.6, max: 1.6, step: 0.05 },
];

const THEME03_DECOR_DEFAULTS = {
  showDecor: false,
  decorSrc: null,
  decorScale: 1,
};

const REMOVED_CONTROL_TYPES = new Set(['text', 'string', 'input', 'url', 'email', 'textarea', 'multiline']);
const THEME04_REMOVED_CONTROL_TYPES = new Set(['text', 'string', 'input', 'url', 'email', 'textarea', 'multiline', 'list', 'array', 'object', 'section']);

export const THEME_PAGES = GENERATED_THEME_PAGES.map(applyThemePageDefaults);
export const THEME_PACK_OPTIONS = Object.fromEntries(
  GENERATED_THEME_PACKS.map(theme => [
    theme.key,
    {
      label: theme.label,
      displayName: theme.displayName,
      scenario: theme.scenario,
      audience: theme.audience,
      layouts: THEME_PAGES.filter(page => page.themeKey === theme.key).map(page => page.key),
    },
  ]),
);

const PAGES_BY_KEY = new Map(THEME_PAGES.map(page => [page.key, page]));

function applyThemePageDefaults(page) {
  if (page.themeKey === 'theme04') {
    return {
      ...page,
      controls: (page.controls || []).filter(control => !THEME04_REMOVED_CONTROL_TYPES.has(String(control?.type || '').toLowerCase())),
    };
  }
  if (page.themeKey !== 'theme03') return page;
  const theme03InjectedKeys = new Set(['accent', 'theme', 'showDecor', 'decorSrc', 'decorScale']);
  return {
    ...page,
    controls: [
      ...(page.controls || []).filter(control => !theme03InjectedKeys.has(control.key)),
      ...THEME03_DECOR_CONTROLS,
      THEME03_GLOBAL_ACCENT_CONTROL,
    ],
    defaultProps: {
      ...(page.defaultProps || {}),
      ...THEME03_DECOR_DEFAULTS,
      accent: 'blue',
      ...(THEME03_PRESET_3D[page.slot] || {}),
    },
  };
}

export function makeImportedThemePage(layoutKey) {
  const page = PAGES_BY_KEY.get(layoutKey);
  if (!page) throw new Error(`Unknown imported theme page "${layoutKey}"`);
  return function ImportedThemePage(props) {
    const viewModel = useSlideViewModel();
    const defaults = serializeDefaults(page.defaultProps);
    const controls = normalizeControls(page.controls, defaults, page);
    return (
      <section
        className={`slide imported-theme-slide ${page.bgClass || ''}`}
        data-layout={page.layout}
        data-vm-slide-id={viewModel?.id}
        data-vm-slide-key={viewModel?.key}
        data-vm-layout={viewModel?.layout}
        data-vm-index={viewModel?.index}
        data-theme-pack={viewModel?.themePack}
        data-logical-slide={viewModel?.logicalIndex}
        data-label={viewModel?.label || page.label}
      >
        <div
          className="imported-theme-root"
          data-theme-key={page.themeKey}
          data-page-key={page.key}
          data-prop-controls={JSON.stringify(controls)}
          data-prop-defaults={JSON.stringify({ ...defaults, ...(props || {}) })}
        />
      </section>
    );
  };
}

function normalizeControls(controls, defaults, page) {
  return normalizePublicControls((controls || [])
    .map(control => {
      const key = control.key || control.prop;
      if (!key) return null;
      const type = normalizeType(control.type);
      if (REMOVED_CONTROL_TYPES.has(String(control.type || type || '').toLowerCase())) return null;
      const next = {
        key,
        label: control.label || key,
        type,
        default: serializeValue(control.default ?? control.def ?? defaults[key]),
        min: serializeValue(resolveValue(control.min, defaults)),
        max: serializeValue(resolveValue(control.max, defaults)),
        step: serializeValue(control.step),
        options: normalizeControlValue(serializeValue(control.options)),
        countKey: serializeValue(control.countKey),
        countIndex: serializeValue(control.countIndex),
        maxFromKey: serializeValue(control.maxFromKey),
        dependsOn: serializeValue(control.dependsOn),
        dependsOnValue: serializeValue(control.dependsOnValue),
        dependsOnValues: serializeValue(control.dependsOnValues),
        desc: serializeValue(control.desc || control.description || control.describe),
      };
      if (type === 'select' && (control.display === 'color' || control.type === 'color' || control.type === 'palette' || isThemeSwatchControl(page, key))) {
        next.display = 'color';
      }
      return next;
    })
    .filter(Boolean), { layout: page?.key, themeKey: page?.themeKey });
}

function isThemeSwatchControl(page, key) {
  return (page?.themeKey === 'theme02' && key === 'scheme')
    || (page?.themeKey === 'theme03' && key === 'accent')
    || (page?.themeKey === 'theme04' && key === 'accentTone');
}

function normalizeType(type) {
  if (type === 'slider' || type === 'number') return 'range';
  if (type === 'icons') return 'icons';
  if (['enum', 'radio', 'select', 'segment', 'color', 'palette', 'labelType'].includes(type)) return 'select';
  if (['toggle', 'boolean', 'focus'].includes(type)) return 'toggle';
  return type || 'range';
}

function resolveValue(value, defaults) {
  if (typeof value === 'function') return value(defaults);
  return value;
}

function serializeDefaults(defaultProps) {
  return Object.fromEntries(
    Object.entries(defaultProps || {})
      .map(([key, value]) => [key, serializeValue(value)])
      .filter(([, value]) => value !== undefined),
  );
}

function serializeValue(value) {
  if (value == null || ['string', 'number', 'boolean'].includes(typeof value)) return value;
  if (Array.isArray(value)) return value.map(serializeValue);
  if (typeof value !== 'object') return undefined;
  return Object.fromEntries(
    Object.entries(value)
      .map(([key, item]) => [key, serializeValue(item)])
      .filter(([, item]) => item !== undefined),
  );
}
