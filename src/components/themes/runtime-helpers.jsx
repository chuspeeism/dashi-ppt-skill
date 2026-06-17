import React from 'react';
import {
  normalizePublicControls,
} from '../../control-naming.mjs';

export function normalizeRuntimePages(rawPages, { themeKey, layoutPrefix }) {
  return (rawPages || []).map((entry, index) => {
    const pageNumber = index + 1;
    const meta = entry.meta || {};
    const slot = entry.slot || entry.id || entry.key || meta.id || `page${pageNumber}`;
    const defaultProps = {
      ...(entry.defaultProps || entry.defaults || {}),
      ...(entry.initial || entry.initialProps || {}),
    };
    return {
      key: `${themeKey}_page${String(pageNumber).padStart(3, '0')}`,
      themeKey,
      pageNumber,
      layout: `${layoutPrefix}-${String(pageNumber).padStart(3, '0')}`,
      slot,
      label: entry.label || entry.name || entry.title || meta.label || meta.title || slot,
      Component: entry.Component || entry.component || entry.Comp || entry.C,
      controls: normalizeControls(entry.controls || entry.spec?.controls || meta.controls || []),
      defaultProps,
      staticHtml: entry.staticHtml || false,
      bgClass: entry.bgClass || entry.backgroundClass || '',
    };
  });
}

export function DeckPageNumber({
  page = '01',
  total = '01',
  pad = 2,
  totalPad = 2,
  separator = ' / ',
  accentStyle,
  currentStyle,
  totalStyle,
  className,
  style,
  as: Tag = 'span',
  ...rest
}) {
  return (
    <Tag
      {...rest}
      className={className}
      style={style}
      data-dashi-page-number="fraction"
      data-dashi-page-pad={pad}
      data-dashi-page-total-pad={totalPad}
      data-dashi-page-separator={separator}
      data-editable-skip="true"
    >
      <b data-dashi-page-current="" style={{ ...(accentStyle || {}), ...(currentStyle || {}) }}>{page}</b>
      <span data-dashi-page-separator="true">{separator}</span>
      <span data-dashi-page-total="" style={totalStyle}>{total}</span>
    </Tag>
  );
}

export function DeckPageCurrent({
  value = '01',
  pad = 2,
  className,
  style,
  as: Tag = 'span',
  ...rest
}) {
  return (
    <Tag
      {...rest}
      className={className}
      style={style}
      data-dashi-page-number="current"
      data-dashi-page-pad={pad}
      data-editable-skip="true"
    >
      <span data-dashi-page-current="">{value}</span>
    </Tag>
  );
}

const TEXT_CONTROL_TYPES = new Set(['text', 'string', 'input', 'url', 'email', 'textarea', 'multiline']);
const REMOVED_CONTROL_TYPES = new Set();

function normalizeControls(controls) {
  return normalizePublicControls((controls || []).filter(control => !isRemovedControl(control)));
}

function isRemovedControl(control) {
  const type = String(control?.type || '').toLowerCase();
  return TEXT_CONTROL_TYPES.has(type) || REMOVED_CONTROL_TYPES.has(type);
}
