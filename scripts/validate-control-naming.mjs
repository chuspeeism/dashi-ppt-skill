#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  GENERATED_THEME_PAGES,
} from '../src/components/themes/generated-metadata.js';
import { inspectLayout, normalizeProps } from './skill-workflow-utils.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const allowlist = readAllowlist();
const errors = [];
const usedAllowlist = new Set();

const HARD_BLOCKED_TERMS = [
  '数据芯片数量',
  '风险等级',
  '持仓行数',
];

const BUSINESS_TERMS = [
  '融资',
  '投资人',
  '资本',
  '估值',
  '持仓',
  '赛道',
  '轮次',
  '金额',
  '风险等级',
  '风险卡',
  '风险水位',
  '音乐人',
  '曲目',
  '播放量',
  '版税',
  '供应链',
  '合规',
  '行业基准',
  '数据芯片',
  '站台号',
  '看板行数',
];

const BUSINESS_KEY_TERMS = ['risk', 'asset', 'track', 'record', 'scene', 'deal', 'round', 'sector', 'valuation', 'capital', 'funding', 'holding', 'portfolio', 'artist', 'music'];

const REPEATED_GENERIC_TERMS = [
  '分类分类',
  '数值数值',
  '状态状态',
  '条目条目',
  '指标指标',
];

const manifest = JSON.parse(readFileSync(path.join(ROOT, 'layout-manifest.json'), 'utf8'));
const generatedPagesByKey = new Map(GENERATED_THEME_PAGES.map(page => [page.key, page]));

for (const page of GENERATED_THEME_PAGES) {
  validateControlList('generated-metadata', page.key, page.controls || []);
  validateControlList('layout-manifest', page.key, manifest.layouts?.[page.key]?.controls || []);
}

for (const [layout, record] of Object.entries(manifest.layouts || {})) {
  for (const binding of record.countBindings || []) {
    validatePublicKey('layout-manifest', layout, binding.key, binding.publicKey, 'countBinding');
  }
}

for (const layout of [
  'theme04_page001',
  'theme08_page069',
  'theme10_page010',
  'theme12_page068',
  'theme02_page046',
]) {
  validateToolContract(layout);
}

for (const [index, item] of allowlist.entries()) {
  const id = allowlistId(item);
  if (!usedAllowlist.has(id)) {
    errors.push(`stale allowlist entry #${index + 1}: ${id}`);
  }
}

if (errors.length) {
  console.error('Control naming validation failed:');
  for (const error of errors.slice(0, 200)) console.error(`- ${error}`);
  if (errors.length > 200) console.error(`- ... ${errors.length - 200} more`);
  process.exit(1);
}

console.log('Control naming validation passed.');

function validateControlList(source, layout, controls) {
  for (const control of controls || []) {
    const key = control.key || control.prop;
    if (!key) continue;
    validatePublicKey(source, layout, key, control.publicKey, 'control');
    validateTextField(source, layout, key, 'label', control.label);
    validateTextField(source, layout, key, 'desc', control.desc || control.description);
    validateOptions(source, layout, key, control.options);
  }
}

function validateToolContract(layout) {
  const details = inspectLayout(layout);
  if (!details) {
    errors.push(`inspect-layout missing ${layout}`);
    return;
  }
  if (!Array.isArray(details.controls) || !details.controls.length) {
    errors.push(`inspect-layout ${layout} must expose public controls`);
  }
  for (const control of details.controls || []) {
    validatePublicKey('inspect-layout', layout, control.key, control.publicKey, 'control');
    validateTextField('inspect-layout', layout, control.key, 'label', control.label);
  }
  for (const binding of details.countBindings || []) {
    validatePublicKey('inspect-layout', layout, binding.key, binding.publicKey, 'countBinding');
  }
  const aliasedControl = details.controls?.find(control => control.publicKey && control.publicKey !== control.key);
  if (!aliasedControl) return;
  const normalized = normalizeProps(layout, {
    [aliasedControl.publicKey]: sampleValueForControl(aliasedControl),
  });
  if (normalized.appliedAliases?.[aliasedControl.publicKey] !== aliasedControl.key) {
    errors.push(`write-safe-props alias map is not consumed for ${layout}`);
  }
}

function sampleValueForControl(control) {
  if (control.type === 'toggle') return true;
  if (Number.isFinite(Number(control.default))) return Number(control.default);
  if (control.default != null) return control.default;
  return true;
}

function validateTextField(source, layout, key, field, value) {
  if (typeof value !== 'string' || !value) return;
  for (const term of HARD_BLOCKED_TERMS) {
    if (value.includes(term)) {
      errors.push(`${source} ${layout}.${key}.${field} contains hard-blocked term "${term}": ${value}`);
    }
  }
  for (const term of REPEATED_GENERIC_TERMS) {
    if (value.includes(term)) {
      errors.push(`${source} ${layout}.${key}.${field} contains repeated generic term "${term}": ${value}`);
    }
  }
  for (const term of BUSINESS_TERMS) {
    if (!value.includes(term)) continue;
    if (isAllowed({ layout, key, field, term, value, source })) continue;
    errors.push(`${source} ${layout}.${key}.${field} contains non-generic term "${term}": ${value}`);
  }
}

function validateOptions(source, layout, key, options) {
  if (!options) return;
  for (const item of flattenOptionLabels(options)) {
    validateTextField(source, layout, key, 'options', item);
  }
}

function flattenOptionLabels(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(flattenOptionLabels);
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([field, item]) => field === 'value' ? [] : flattenOptionLabels(item));
}

function validatePublicKey(source, layout, key, publicKey, field) {
  if (!key || !hasBusinessKeyTerm(key)) return;
  if (!publicKey) {
    errors.push(`${source} ${layout}.${key}.${field} is business-specific but has no publicKey`);
    return;
  }
  if (publicKey === key || hasBusinessKeyTerm(publicKey)) {
    errors.push(`${source} ${layout}.${key}.${field} publicKey is not generic: ${publicKey}`);
  }
}

function hasBusinessKeyTerm(key) {
  const tokens = String(key || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[^A-Za-z0-9]+|\s+/)
    .map(token => token.toLowerCase())
    .filter(Boolean);
  return tokens.some(token => BUSINESS_KEY_TERMS.includes(token));
}

function isAllowed(hit) {
  const id = allowlistId(hit);
  const match = allowlist.find(item => allowlistId(item) === id && item.value === hit.value);
  if (!match) return false;
  if (!match.reason || !match.decision) {
    errors.push(`allowlist entry missing reason/decision: ${id}`);
    return false;
  }
  usedAllowlist.add(id);
  return true;
}

function allowlistId({ layout, key, field, term, source }) {
  return `${source || '*'}:${layout}:${key}:${field}:${term}`;
}

function readAllowlist() {
  const file = path.join(ROOT, 'scripts/control-naming-allowlist.json');
  const value = JSON.parse(readFileSync(file, 'utf8'));
  if (!Array.isArray(value)) throw new Error('control naming allowlist must be an array');
  for (const [index, item] of value.entries()) {
    for (const field of ['layout', 'key', 'field', 'term', 'value', 'reason', 'decision']) {
      if (!item[field]) throw new Error(`allowlist entry #${index + 1} missing ${field}`);
    }
    if (item.layout && !generatedPagesByKey.has(item.layout)) {
      throw new Error(`allowlist entry #${index + 1} unknown layout ${item.layout}`);
    }
  }
  return value;
}
