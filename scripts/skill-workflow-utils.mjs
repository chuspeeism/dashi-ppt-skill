import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createLayoutContracts,
  normalizeSlidePropsForContract,
} from '../src/prop-contract-core.mjs';
import {
  resolvePublicPropAliases,
  toPublicProps,
} from '../src/control-naming.mjs';
import {
  GENERATED_THEME_PACKS,
  GENERATED_THEME_PAGES,
} from '../src/components/themes/generated-metadata.js';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const THEME_PACKS = GENERATED_THEME_PACKS;
export const THEME_PAGES = GENERATED_THEME_PAGES;

const ROLE_KEYWORDS = {
  cover: ['cover', '封面', '首页'],
  statement: ['statement', 'summary', 'overview', 'manifesto', 'quote', '摘要', '主张', '观点', '结论'],
  breakdown: ['contents', 'agenda', 'index', 'directory', '目录', '结构', '纲目'],
  transition: ['section', 'chapter', 'divider', '章节', '序章', '篇章'],
  context: ['market', 'method', 'context', 'industry', '全景', '背景', '方法', '行业'],
  metrics: ['metric', 'stat', 'number', 'score', 'gauge', 'meter', '指标', '数字', '大势', '仪表'],
  trend: ['trend', 'timeline', 'curve', 'area', 'slope', 'stream', '走势', '趋势', '时间', '曲线', '季度'],
  comparison: ['compare', 'versus', 'matrix', 'quadrant', 'delta', 'dumbbell', '对比', '矩阵', '象限', '差距'],
  distribution: ['donut', 'treemap', 'heatmap', 'ranking', 'rank', 'waterfall', 'funnel', 'allocation', 'share', '分布', '占比', '排行', '瀑布', '漏斗'],
  relationship: ['chain', 'flow', 'sankey', 'network', 'orbit', 'ecosystem', 'map', '关系', '链', '流向', '生态', '网络'],
  case: ['case', 'spotlight', 'profile', 'story', '案例', '聚焦', '档案'],
  image: ['image', 'gallery', 'mosaic', 'photo', 'film', 'album', 'poster', 'showcase', '影像', '图景', '图集', '图片', '海报'],
  process: ['process', 'roadmap', 'journey', 'steps', 'gantt', '路径', '流程', '路线', '进程'],
  risks: ['risk', 'faq', 'checklist', '风险', '异议', '问答', '清单'],
  observation: ['quote', 'insight', 'takeaway', 'conclusion', 'statement', 'manifesto', '观点', '洞察', '要点', '结论'],
  actions: ['action', 'roadmap', 'plan', 'join', 'contact', 'next', '行动', '策略', '计划', '套餐'],
  result: ['result', 'outcome', 'score', 'closing', 'conclusion', '成果', '结果', '完成', '结论'],
  team: ['team', 'roster', 'testimonial', 'voice', '团队', '人物', '见证', '证言'],
  closing: ['closing', 'contact', 'join', 'end', 'colophon', '结语', '封底', '行动'],
};

const ROLE_ALIASES = {
  agenda: 'breakdown',
  summary: 'statement',
  insight: 'observation',
  quote: 'observation',
  chart: 'metrics',
  data: 'metrics',
  timeline: 'trend',
  compare: 'comparison',
  flow: 'process',
  roadmap: 'actions',
  visual: 'image',
  gallery: 'image',
  media: 'image',
  picture: 'image',
  photo: 'image',
};

const contracts = createLayoutContracts(THEME_PAGES);
const pagesByKey = new Map(THEME_PAGES.map(page => [page.key, page]));
const themePacksByKey = new Map(THEME_PACKS.map(theme => [theme.key, theme]));
const manifest = readManifest();

export function parseArgs(argv) {
  const args = { _: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith('--')) {
      args._.push(item);
      continue;
    }
    const key = item.slice(2);
    const next = argv[index + 1];
    if (next == null || next.startsWith('--')) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    index += 1;
  }
  return args;
}

export function compactJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

export function listLayouts({
  theme,
  role,
  keyword,
  needsMedia = false,
  plannedImages = false,
  providedImages = false,
  imageGen = false,
  needsVisual = false,
  mediaCount = null,
  mediaKind = null,
  requireInitialMedia = false,
  limit = 12,
} = {}) {
  const normalizedRole = role ? ROLE_ALIASES[role] || role : '';
  const keywords = normalizedRole ? ROLE_KEYWORDS[normalizedRole] || [normalizedRole] : [];
  const keywordText = String(keyword || '').trim().toLowerCase();
  const requestedMediaCount = getRequestedMediaCount({ plannedImages, providedImages, imageGen, needsVisual, mediaCount });
  const normalizedMediaKind = normalizeMediaKind(mediaKind);
  const needsInitialMedia = Boolean(requireInitialMedia || providedImages);
  const requiresMedia = needsMedia || requestedMediaCount > 0 || normalizedRole === 'image' || needsInitialMedia || Boolean(normalizedMediaKind);
  let rows = THEME_PAGES
    .filter(page => !theme || page.themeKey === theme)
    .filter(page => {
      if (!normalizedRole) return true;
      if (normalizedRole === 'cover') return isCoverCandidate(page.key);
      if (normalizedRole === 'image') return inspectLayout(page.key, { compact: true })?.mediaSlots.length;
      return pageMatches(page, keywords);
    })
    .filter(page => !keywordText || pageSearchText(page).includes(keywordText))
    .map(page => inspectLayout(page.key, { compact: true }))
    .filter(Boolean)
    .filter(row => !requiresMedia || row.mediaSlots.length)
    .filter(row => !requestedMediaCount || mediaSlotsCanFit(row.mediaSlots, requestedMediaCount, { requireInitialMedia: needsInitialMedia, mediaKind: normalizedMediaKind }))
    .filter(row => !normalizedMediaKind || mediaSlotsCanFit(row.mediaSlots, requestedMediaCount || 1, { requireInitialMedia: needsInitialMedia, mediaKind: normalizedMediaKind }));

  rows = rows.sort((a, b) => scoreLayout(b, { normalizedRole, keywordText, requiresMedia, requestedMediaCount, normalizedMediaKind, needsInitialMedia }) - scoreLayout(a, { normalizedRole, keywordText, requiresMedia, requestedMediaCount, normalizedMediaKind, needsInitialMedia }));
  return rows.slice(0, Math.max(1, Math.min(50, Number(limit) || 12)));
}

export function inspectLayout(layout, { compact = false } = {}) {
  const record = getLayoutRecord(layout);
  if (!record) return null;
  const { page, contract, controls, countBindings, defaultProps } = record;
  const theme = getThemePackMetadata(page.themeKey);
  const controlKeys = controls.map(control => control.key).filter(Boolean);
  const publicControls = controls.map(publicControl);
  const publicControlKeys = publicControls.map(control => control.publicKey).filter(Boolean);
  const mediaSlots = getMediaSlots(record);
  const copyKeys = getCopyKeys(defaultProps, controls, mediaSlots);
  const arrayKeys = getArrayKeys(defaultProps, mediaSlots);
  const defaultVisibleCounts = Object.fromEntries(countBindings
    .map(binding => [binding.publicKey || binding.key, defaultProps[binding.key] ?? controls.find(control => control.key === binding.key)?.default])
    .filter(([, value]) => value !== undefined));

  const base = {
    layout: page.key,
    theme: page.themeKey,
    themeDisplayName: themeDisplayName(theme, page.themeKey),
    themeScenario: theme?.scenario || null,
    themeAudience: theme?.audience || null,
    pageNumber: page.pageNumber,
    label: page.label,
    slot: page.slot,
    roles: inferRoles(page, mediaSlots),
    copyKeys,
    arrayKeys,
    mediaSlots,
    countBindings,
    controls: publicControls,
    controlKeys,
    publicControlKeys,
    defaultVisibleCounts,
  };

  if (compact) {
    return {
      layout: base.layout,
      theme: base.theme,
      themeDisplayName: base.themeDisplayName,
      themeScenario: base.themeScenario,
      themeAudience: base.themeAudience,
      label: base.label,
      slot: base.slot,
      roles: base.roles,
      copyKeys: base.copyKeys.slice(0, 10),
      arrayKeys: base.arrayKeys.slice(0, 8),
      mediaSlots: base.mediaSlots.map(compactMediaSlot),
      countBindings: base.countBindings.map(compactCountBinding),
      defaultVisibleCounts: base.defaultVisibleCounts,
    };
  }

  return {
    ...base,
    allowedPropKeys: [...new Set([...Object.keys(defaultProps), ...controlKeys])].sort(),
    allowedPublicPropKeys: [...new Set([...Object.keys(toPublicProps(defaultProps, controls)), ...publicControlKeys])].sort(),
  };
}

export function normalizeProps(layout, props = {}) {
  const record = getLayoutRecord(layout);
  if (!record) {
    return {
      props: props || {},
      warnings: [],
      errors: [`Unknown layout "${layout}"`],
    };
  }
  const aliasResult = resolvePublicPropAliases(props, record.controls);
  const warnings = unknownPropKeys(record, props).map(key => `Unknown prop "${key}" for ${layout}`);
  try {
    const propsWithCountSafety = normalizeSlidePropsForContract(layout, aliasResult.props, record.contract);
    const propsWithDefaults = mergeDefaultArrayTails(propsWithCountSafety, record.defaultProps, aliasResult.props);
    return {
      props: propsWithDefaults,
      publicProps: toPublicProps(propsWithDefaults, record.controls),
      appliedAliases: aliasResult.appliedAliases,
      warnings,
      errors: [],
    };
  } catch (error) {
    return {
      props: props || {},
      publicProps: toPublicProps(props || {}, record.controls),
      appliedAliases: aliasResult.appliedAliases,
      warnings,
      errors: [publicErrorMessage(error.message, record.controls)],
    };
  }
}

function publicControl(control) {
  return {
    key: control.key,
    publicKey: control.publicKey || control.key,
    label: control.label || control.publicLabel || control.key,
    type: control.type,
    default: control.default,
    min: control.min,
    max: control.max,
  };
}

function compactMediaSlot(slot) {
  return {
    field: slot.field,
    countKey: slot.countKey,
    publicCountKey: slot.publicCountKey || slot.countKey,
    max: slot.max,
    acceptedKinds: slot.acceptedKinds,
    initialSrcSupported: slot.initialSrcSupported,
  };
}

function compactCountBinding(binding) {
  return {
    key: binding.key,
    publicKey: binding.publicKey || binding.key,
    label: binding.label,
    min: binding.min,
    max: binding.max,
  };
}

function publicErrorMessage(message, controls = []) {
  let next = String(message || '');
  for (const control of controls || []) {
    if (!control?.key || !control.publicKey || control.key === control.publicKey) continue;
    next = next.replaceAll(control.key, control.publicKey);
  }
  return next;
}

export function getMediaSlotsForLayout(layout) {
  const record = getLayoutRecord(layout);
  return record ? getMediaSlots(record) : [];
}

export function mediaSlotsCanFit(slots = [], count = 1, { requireInitialMedia = false, mediaKind = null } = {}) {
  const requested = Math.max(1, Number(count) || 1);
  const normalizedKind = normalizeMediaKind(mediaKind);
  return slots.some(slot => {
    if (requireInitialMedia && slot.initialSrcSupported !== true) return false;
    if (normalizedKind && !slotAcceptsKind(slot, normalizedKind)) return false;
    return mediaSlotCapacity(slot) >= requested;
  });
}

export function mediaSlotCapacity(slot) {
  const max = Number(slot?.max);
  if (Number.isFinite(max) && max > 0) return max;
  const defaultCount = Number(slot?.defaultCount);
  if (Number.isFinite(defaultCount) && defaultCount > 0) return defaultCount;
  return 1;
}

export function getPreferredMediaSlot(layout, { kind = 'images', count = 1 } = {}) {
  const slots = getMediaSlotsForLayout(layout);
  if (!slots.length) return null;
  const requested = Math.max(1, Number(count) || 1);
  const requestedKind = kind === 'media' ? null : 'image';
  const fieldPattern = kind === 'media' ? /^(media|images)$/i : /^(images|photos|pictures|thumbs|logos|media)$/i;
  return slots.find(slot => slot.initialSrcSupported === true && fieldPattern.test(slot.field || '') && (!requestedKind || slotAcceptsKind(slot, requestedKind)) && mediaSlotCapacity(slot) >= requested)
    || slots.find(slot => slot.initialSrcSupported === true && (!requestedKind || slotAcceptsKind(slot, requestedKind)) && mediaSlotCapacity(slot) >= requested)
    || null;
}

function mergeDefaultArrayTails(props, defaults, authoredProps = props) {
  const next = { ...(props || {}) };
  for (const [key, value] of Object.entries(props || {})) {
    if (!Array.isArray(value) || !Array.isArray(defaults?.[key])) continue;
    if (isMediaArrayKey(key)) continue;
    const authoredLength = Array.isArray(authoredProps?.[key]) ? authoredProps[key].length : value.length;
    if (authoredLength >= defaults[key].length) continue;
    next[key] = [
      ...value.slice(0, authoredLength).map((item, index) => mergeArrayItem(defaults[key][index], item)),
      ...defaults[key].slice(authoredLength).map(item => neutralizeDefaultCopy(item)),
    ];
  }
  return next;
}

function mergeArrayItem(defaultItem, item) {
  if (isPlainObject(defaultItem) && isPlainObject(item)) return { ...defaultItem, ...item };
  return item;
}

function neutralizeDefaultCopy(value, field = '') {
  if (typeof value === 'string') return shouldNeutralizeString(field, value) ? neutralPlaceholder(value) : value;
  if (Array.isArray(value)) return value.map(item => neutralizeDefaultCopy(item, field));
  if (!isPlainObject(value)) return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [
    key,
    neutralizeDefaultCopy(item, key),
  ]));
}

function shouldNeutralizeString(field, value) {
  if (!value) return false;
  if (/^(id|key|type|tone|color|colour|accent|variant|style|theme|layout|align|side|position|icon|href|url|src|fit)$/i.test(field)) return false;
  if (/^(show|is|has)[A-Z_]/.test(field)) return false;
  if (/(Color|Colour|Tone|Variant|Style|Mode|Layout|Align|Side|Index|Id|Key|Url|Src|Fit)$/i.test(field)) return false;
  if (/^(https?:|data:|#)/i.test(value)) return false;
  return true;
}

function neutralPlaceholder(value) {
  const length = Array.from(value).length;
  if (!length) return value;
  const seed = Array.from('请输入文本');
  return Array.from({ length }, (_, index) => seed[index % seed.length]).join('');
}

export function getLayoutRecord(layout) {
  const page = pagesByKey.get(layout);
  if (!page) return null;
  const baseContract = contracts.get(layout);
  const manifestLayout = manifest.layouts?.[layout] || {};
  const controls = manifestLayout.controls || baseContract?.controls || [];
  const countBindings = manifestLayout.countBindings || baseContract?.countBindings || [];
  const contract = {
    ...(baseContract || {}),
    controls,
    countBindings,
  };
  return {
    page,
    contract,
    controls,
    countBindings,
    defaultProps: baseContract?.defaultProps || {},
  };
}

export function getThemePackMetadata(themeKey) {
  return themePacksByKey.get(themeKey) || null;
}

export function layoutExists(layout) {
  return pagesByKey.has(layout);
}

function themeDisplayName(theme, fallback) {
  return theme?.displayName || theme?.label || theme?.name || fallback;
}

export function isCoverCandidate(layout) {
  return /^theme\d+_page00[1-5]$/.test(layout);
}

export function isCoverLikeLayout(layout) {
  const record = getLayoutRecord(layout);
  if (!record) return false;
  const slot = String(record.page.slot || '').toLowerCase();
  const label = String(record.page.label || '').toLowerCase();
  return slot.startsWith('cover') || label.startsWith('封面') || /^cover/.test(label);
}

export function getAllowedPropKeys(layout) {
  const record = getLayoutRecord(layout);
  if (!record) return new Set();
  return new Set([
    ...Object.keys(record.defaultProps || {}),
    ...record.controls.map(control => control.key).filter(Boolean),
    ...record.controls.map(control => control.publicKey).filter(Boolean),
  ]);
}

export function unknownPropKeys(record, props = {}) {
  const allowed = new Set([
    ...Object.keys(record.defaultProps || {}),
    ...record.controls.map(control => control.key).filter(Boolean),
    ...record.controls.map(control => control.publicKey).filter(Boolean),
  ]);
  return Object.keys(props || {}).filter(key => !allowed.has(key));
}

function getCopyKeys(defaultProps, controls, mediaSlots) {
  const controlKeys = new Set(controls.map(control => control.key));
  const mediaFields = new Set(mediaSlots.map(slot => slot.field));
  return Object.entries(defaultProps || {})
    .filter(([key, value]) => !controlKeys.has(key) && !mediaFields.has(key) && !isMediaArrayKey(key) && isCopyValue(value))
    .map(([key]) => key);
}

function getArrayKeys(defaultProps, mediaSlots) {
  const mediaFields = new Set(mediaSlots.map(slot => slot.field));
  return Object.entries(defaultProps || {})
    .filter(([key, value]) => Array.isArray(value) && !mediaFields.has(key) && !isMediaArrayKey(key))
    .map(([key]) => key);
}

function isCopyValue(value) {
  if (value == null) return false;
  if (['string', 'number'].includes(typeof value)) return true;
  if (Array.isArray(value)) return value.length > 0 && value.every(item => item == null || ['string', 'number'].includes(typeof item) || isPlainObject(item));
  return isPlainObject(value);
}

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function getMediaSlots(record) {
  const { controls, countBindings, defaultProps } = record;
  const slots = [];
  for (const binding of countBindings || []) {
    const mediaArrays = (binding.arrays || []).filter(isMediaArrayKey);
    for (const field of mediaArrays) {
      slots.push(mediaSlot(field, binding.key, controls, defaultProps, binding, record, { writeMode: 'initialProps' }));
    }
  }
  for (const control of controls || []) {
    if (!isWritableMediaControl(control)) continue;
    const field = isMediaArrayKey(control.key) ? control.key : firstMediaArray(defaultProps) || control.key;
    slots.push(mediaSlot(field, control.countKey, controls, defaultProps, control, record, { writeMode: 'initialProps' }));
  }
  for (const field of Object.keys(defaultProps || {}).filter(key => Array.isArray(defaultProps[key]) && isMediaArrayKey(key) && defaultArraySupportsInitialMedia(defaultProps[key]))) {
    slots.push(mediaSlot(field, undefined, controls, defaultProps, {}, record, { writeMode: 'initialProps' }));
  }
  for (const control of controls || []) {
    if (!isMediaCountControl(control)) continue;
    slots.push(countOnlyMediaSlot(control, defaultProps, record));
  }
  return dedupeSlots(slots);
}

function mediaSlot(field, countKey, controls, defaultProps, source, record, { writeMode = 'initialProps' } = {}) {
  const countControl = controls.find(control => control.key === countKey);
  const fieldControl = controls.find(control => control.key === field);
  const defaultCount = countKey ? defaultProps[countKey] ?? countControl?.default : Array.isArray(defaultProps[field]) ? defaultProps[field].length : undefined;
  const acceptedKinds = acceptedMediaKinds(record, field, fieldControl);
  return {
    field,
    fieldPath: `props.${field}`,
    countKey: countKey || fieldControl?.countKey || null,
    publicCountKey: countControl?.publicKey || countKey || fieldControl?.countKey || null,
    defaultCount: defaultCount ?? null,
    min: source.min ?? countControl?.min ?? null,
    max: source.max ?? countControl?.max ?? null,
    controlKey: fieldControl?.key || null,
    publicControlKey: fieldControl?.publicKey || fieldControl?.key || null,
    label: fieldControl?.label || countControl?.label || null,
    acceptedKinds,
    valueShape: acceptedKinds.includes('video') ? 'string | {src,kind,type}' : 'string | {src}',
    initialSrcSupported: writeMode === 'initialProps',
    runtimeReplaceable: true,
    writeMode,
    emptySlotBehavior: countKey ? 'hiddenByCount' : 'placeholder',
  };
}

function countOnlyMediaSlot(control, defaultProps, record) {
  const acceptedKinds = countOnlyAcceptedMediaKinds(record, control);
  return {
    field: null,
    fieldPath: null,
    countKey: control.key,
    publicCountKey: control.publicKey || control.key,
    defaultCount: defaultProps?.[control.key] ?? control.default ?? null,
    min: control.min ?? null,
    max: control.max ?? null,
    controlKey: control.key,
    publicControlKey: control.publicKey || control.key,
    label: control.label || null,
    acceptedKinds,
    valueShape: null,
    initialSrcSupported: false,
    runtimeReplaceable: true,
    writeMode: 'countOnly',
    emptySlotBehavior: 'placeholder',
  };
}

function dedupeSlots(slots) {
  const byField = new Map();
  const countOnly = [];
  for (const slot of slots) {
    if (!slot.field) {
      countOnly.push(slot);
      continue;
    }
    const existing = byField.get(slot.field);
    if (!existing || slotRank(slot) > slotRank(existing)) byField.set(slot.field, slot);
  }
  const writableCountKeys = new Set([...byField.values()].map(slot => slot.countKey).filter(Boolean));
  return [
    ...byField.values(),
    ...countOnly.filter(slot => !writableCountKeys.has(slot.countKey)),
  ];
}

function slotRank(slot) {
  let rank = 0;
  if (slot.initialSrcSupported) rank += 10;
  if (slot.countKey) rank += 2;
  if (slot.controlKey) rank += 1;
  return rank;
}

function firstMediaArray(defaultProps = {}) {
  return Object.keys(defaultProps).find(key => Array.isArray(defaultProps[key]) && isMediaArrayKey(key) && defaultArraySupportsInitialMedia(defaultProps[key]));
}

function isWritableMediaControl(control) {
  const type = String(control.type || '').toLowerCase();
  const key = String(control.key || '').toLowerCase();
  if (['images', 'image', 'media', 'picture'].includes(type)) return true;
  if (/^(images|media|photos|pictures|logos|thumbs)$/.test(key)) return true;
  return false;
}

function isMediaCountControl(control) {
  const type = String(control.type || '').toLowerCase();
  const key = String(control.key || '');
  const label = String(control.label || '');
  const desc = String(control.desc || control.description || '');
  if (!/(count|数量)$/i.test(key)) return false;
  if (!['number', 'range', 'slider'].includes(type)) return false;
  return /image|media|photo|picture|video|图片|图像|视频|媒体|照片/.test(`${key} ${label} ${desc}`);
}

function isMediaArrayKey(key) {
  return /^(images|media|photos|pictures|logos|thumbs|imageSlots|imgs)$/i.test(String(key || ''));
}

function defaultArraySupportsInitialMedia(value) {
  if (!Array.isArray(value)) return false;
  if (!value.length) return true;
  return value.some(item => typeof item === 'string' || mediaObjectHasSource(item));
}

function mediaObjectHasSource(value) {
  return isPlainObject(value) && ['src', 'url', 'u', 'href'].some(key => typeof value[key] === 'string' && value[key]);
}

function acceptedMediaKinds(record, field, fieldControl) {
  const type = String(fieldControl?.type || '').toLowerCase();
  const key = String(field || '').toLowerCase();
  if (type === 'media' || key === 'media') return ['image', 'video'];
  if (record?.page?.themeKey === 'theme11' && /^(images|media)$/i.test(field)) return ['image', 'video'];
  return ['image'];
}

function countOnlyAcceptedMediaKinds(record, control) {
  const text = `${control.key || ''} ${control.label || ''} ${control.desc || control.description || ''}`;
  if (record?.page?.themeKey === 'theme08' && /mediaCount/.test(control.key || '')) return ['image', 'video'];
  if (/video|视频|媒体/i.test(text)) return ['image', 'video'];
  return ['image'];
}

function normalizeMediaKind(kind) {
  const value = String(kind || '').trim().toLowerCase();
  if (!value) return null;
  if (['image', 'images', 'photo', 'photos', 'picture', 'pictures'].includes(value)) return 'image';
  if (['video', 'videos', 'movie', 'movies'].includes(value)) return 'video';
  if (['mixed', 'media', 'any'].includes(value)) return 'mixed';
  return value;
}

function slotAcceptsKind(slot, kind) {
  const normalized = normalizeMediaKind(kind);
  if (!normalized) return true;
  const kinds = slot.acceptedKinds || [];
  if (normalized === 'mixed') return kinds.includes('image') && kinds.includes('video');
  return kinds.includes(normalized);
}

function inferRoles(page, mediaSlots = []) {
  return Object.entries(ROLE_KEYWORDS)
    .filter(([role, keywords]) => {
      if (role === 'cover') return isCoverCandidate(page.key);
      if (role === 'image') return mediaSlots.length > 0;
      return pageMatches(page, keywords);
    })
    .map(([role]) => role)
    .slice(0, 6);
}

function pageMatches(page, keywords) {
  const text = pageSearchText(page);
  return keywords.some(keyword => text.includes(keyword.toLowerCase()));
}

function pageSearchText(page) {
  return `${page.key} ${page.slot || ''} ${page.label || ''}`.toLowerCase();
}

function scoreLayout(layout, { normalizedRole, keywordText, requiresMedia, requestedMediaCount, normalizedMediaKind, needsInitialMedia }) {
  let score = 0;
  if (normalizedRole && layout.roles.includes(normalizedRole)) score += 20;
  if (keywordText && `${layout.label} ${layout.slot}`.toLowerCase().includes(keywordText)) score += 10;
  if (requiresMedia && layout.mediaSlots.length) score += 8;
  if (needsInitialMedia && layout.mediaSlots.some(slot => slot.initialSrcSupported)) score += 6;
  if (normalizedMediaKind && layout.mediaSlots.some(slot => slotAcceptsKind(slot, normalizedMediaKind))) score += 4;
  if (requestedMediaCount && layout.mediaSlots.some(slot => Number(slot.defaultCount) === requestedMediaCount)) score += 3;
  score -= layout.pageNumber / 1000;
  return score;
}

function getRequestedMediaCount({ plannedImages, providedImages, imageGen, needsVisual, mediaCount }) {
  const explicit = Number(mediaCount);
  if (Number.isFinite(explicit) && explicit > 0) return Math.round(explicit);
  const provided = mediaIntentCount(providedImages);
  if (provided) return provided;
  const planned = mediaIntentCount(plannedImages);
  if (planned) return planned;
  if (imageGen || needsVisual) return 1;
  return 0;
}

function mediaIntentCount(value) {
  if (Array.isArray(value)) return value.length;
  if (value === true) return 1;
  const number = Number(value);
  if (Number.isFinite(number) && number > 0) return Math.round(number);
  return 0;
}

function readManifest() {
  const file = path.join(ROOT, 'layout-manifest.json');
  if (!existsSync(file)) return { layouts: {} };
  return JSON.parse(readFileSync(file, 'utf8'));
}
