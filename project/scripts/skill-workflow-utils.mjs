import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createLayoutContracts,
  describePropShapes,
  isSerializedReactElementLike,
  neutralizeDefaultCopy,
  normalizeSlidePropsForContract,
  reactElementText,
} from '../src/prop-contract-core.mjs';
import {
  resolvePublicPropAliases,
  toPublicProps,
} from '../src/control-naming.mjs';
import {
  GENERATED_THEME_PACKS,
  GENERATED_THEME_PAGES,
} from '../src/components/themes/generated-metadata.js';
import {
  filterAcceptedThemePacks,
  filterAcceptedThemePages,
} from '../src/accepted-themes.mjs';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const THEME_PACKS = filterAcceptedThemePacks(GENERATED_THEME_PACKS);
export const THEME_PAGES = filterAcceptedThemePages(GENERATED_THEME_PAGES);

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
  ambient: ['ambient', 'atmosphere', 'background', 'immersive', 'poster', 'hero', '氛围', '背景', '沉浸', '海报'],
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
  atmosphere: 'ambient',
  background: 'ambient',
  dynamic: 'ambient',
};

const contracts = createLayoutContracts(THEME_PAGES);
const pagesByKey = new Map(THEME_PAGES.map(page => [page.key, page]));
const themePacksByKey = new Map(THEME_PACKS.map(theme => [theme.key, theme]));
const manifest = readManifest();
const HOST_MEDIA_ARRAY_THEMES = new Set(['theme03', 'theme04', 'theme05', 'theme06', 'theme07', 'theme08', 'theme09', 'theme10']);

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
      if (normalizedRole === 'ambient') return hasAmbientBackground(page);
      return pageMatches(page, keywords);
    })
    .filter(page => !keywordText || pageSearchText(page).includes(keywordText))
    .map(page => compactLayoutCandidate(inspectLayout(page.key, { compact: true })))
    .filter(Boolean)
    .filter(row => !requiresMedia || row.mediaSlots.length)
    .filter(row => !requestedMediaCount || mediaSlotsCanFit(row.mediaSlots, requestedMediaCount, { requireInitialMedia: needsInitialMedia, mediaKind: normalizedMediaKind }))
    .filter(row => !normalizedMediaKind || mediaSlotsCanFit(row.mediaSlots, requestedMediaCount || 1, { requireInitialMedia: needsInitialMedia, mediaKind: normalizedMediaKind }));

  rows = rows.sort((a, b) => scoreLayout(b, { normalizedRole, keywordText, requiresMedia, requestedMediaCount, normalizedMediaKind, needsInitialMedia }) - scoreLayout(a, { normalizedRole, keywordText, requiresMedia, requestedMediaCount, normalizedMediaKind, needsInitialMedia }));
  return rows.slice(0, Math.max(1, Math.min(50, Number(limit) || 12)));
}

function compactLayoutCandidate(row) {
  if (!row) return row;
  const { copyBudgets, propShapes, ...candidate } = row;
  return candidate;
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
  const copyBudgets = getCopyBudgets(defaultProps, copyKeys);
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
    copyBudgets,
    arrayKeys,
    mediaSlots,
    countBindings,
    controls: publicControls,
    controlKeys,
    publicControlKeys,
    defaultVisibleCounts,
  };

  if (compact) {
    const compactKeys = [...new Set([...copyKeys, ...arrayKeys])];
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
      copyBudgets: base.copyBudgets,
      arrayKeys: base.arrayKeys.slice(0, 8),
      propShapes: describePropShapes(defaultProps, compactKeys),
      mediaSlots: base.mediaSlots.map(compactMediaSlot),
      countBindings: base.countBindings.map(compactCountBinding),
      defaultVisibleCounts: base.defaultVisibleCounts,
    };
  }

  return {
    ...base,
    propShapes: describePropShapes(defaultProps, [...copyKeys, ...arrayKeys]),
    allowedPropKeys: [...new Set([...Object.keys(defaultProps), ...controlKeys, ...mediaSlots.map(slot => slot.field).filter(Boolean)])].sort(),
    allowedPublicPropKeys: [...new Set([...Object.keys(toPublicProps(defaultProps, controls)), ...publicControlKeys, ...mediaSlots.map(slot => slot.field).filter(Boolean)])].sort(),
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
    const propsWithCountSafety = normalizeSlidePropsForContract(layout, props, record.contract);
    const propsWithDefaults = mergeDefaultArrayTails(propsWithCountSafety, record.defaultProps, aliasResult.props);
    const propsWithMedia = normalizeMediaItems(propsWithDefaults, getMediaSlots(record));
    return {
      props: propsWithMedia,
      publicProps: toPublicProps(propsWithMedia, record.controls),
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
  const canPresetMedia = slot.initialSrcSupported === true && Boolean(slot.fieldPath);
  return {
    field: slot.field,
    fieldPath: slot.fieldPath,
    countKey: slot.countKey,
    publicCountKey: slot.publicCountKey || slot.countKey,
    defaultCount: slot.defaultCount,
    max: slot.max,
    acceptedKinds: slot.acceptedKinds,
    itemShape: slot.itemShape,
    valueShape: slot.valueShape,
    initialSrcSupported: slot.initialSrcSupported,
    writeMode: slot.writeMode,
    canPresetMedia,
    presetProp: canPresetMedia ? slot.fieldPath : null,
    emptySlotBehavior: slot.emptySlotBehavior,
  };
}

function compactCountBinding(binding) {
  return {
    key: binding.key,
    publicKey: binding.publicKey || binding.key,
    label: binding.label,
    arrays: binding.arrays,
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

export function getCopyBudgetsForLayout(layout) {
  const record = getLayoutRecord(layout);
  if (!record) return {};
  const mediaSlots = getMediaSlots(record);
  const copyKeys = getCopyKeys(record.defaultProps, record.controls, mediaSlots);
  return getCopyBudgets(record.defaultProps, copyKeys);
}

export function typedMediaItemForSource(source) {
  const src = String(source || '').trim();
  const kind = looksLikeVideoSrc(src) ? 'video' : 'image';
  return {
    src,
    kind,
    type: mimeForMediaSource(src, kind),
  };
}

function mergeDefaultArrayTails(props, defaults, authoredProps = props) {
  const next = { ...(props || {}) };
  for (const [key, value] of Object.entries(props || {})) {
    if (!Array.isArray(value) || !Array.isArray(defaults?.[key])) continue;
    if (isMediaArrayKey(key)) continue;
    const authoredLength = Array.isArray(authoredProps?.[key]) ? authoredProps[key].length : value.length;
    next[key] = [
      ...value.slice(0, authoredLength),
      ...value.slice(authoredLength).map(item => neutralizeDefaultCopy(item)),
    ];
  }
  return next;
}

function normalizeMediaItems(props, mediaSlots = []) {
  const next = { ...(props || {}) };
  for (const slot of mediaSlots || []) {
    if (!slot?.field || !Array.isArray(next[slot.field])) continue;
    next[slot.field] = next[slot.field].map(normalizeMediaItem);
  }
  return next;
}

function normalizeMediaItem(item) {
  if (typeof item === 'string') {
    const src = item.trim();
    return looksLikeVideoSrc(src) ? typedMediaItemForSource(src) : item;
  }
  if (!item || typeof item !== 'object' || Array.isArray(item)) return item;
  if (typeof item.src !== 'string' || !item.src.trim()) return item;
  const src = item.src.trim();
  const kind = normalizeMediaKind(item.kind) || (looksLikeVideoSrc(src) ? 'video' : '');
  if (kind !== 'video') return item;
  return {
    ...item,
    src,
    kind: 'video',
    type: item.type || mimeForMediaSource(src, 'video'),
  };
}

export function getLayoutRecord(layout) {
  const page = pagesByKey.get(layout);
  if (!page) return null;
  const baseContract = contracts.get(layout);
  const manifestLayout = manifest.layouts?.[layout] || {};
  const controls = manifestLayout.controls || baseContract?.controls || [];
  const countBindings = mergeCountBindings(manifestLayout.countBindings, baseContract?.countBindings);
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

function mergeCountBindings(primary = [], fallback = []) {
  const result = [];
  const seen = new Set();
  for (const binding of [...(primary || []), ...(fallback || [])]) {
    if (!binding?.key || seen.has(binding.key)) continue;
    seen.add(binding.key);
    result.push(binding);
  }
  return result;
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
  const mediaFields = getMediaSlots(record).map(slot => slot.field).filter(Boolean);
  return new Set([
    ...Object.keys(record.defaultProps || {}),
    ...record.controls.map(control => control.key).filter(Boolean),
    ...record.controls.map(control => control.publicKey).filter(Boolean),
    ...mediaFields,
  ]);
}

export function unknownPropKeys(record, props = {}) {
  const mediaFields = getMediaSlots(record).map(slot => slot.field).filter(Boolean);
  const allowed = new Set([
    ...Object.keys(record.defaultProps || {}),
    ...record.controls.map(control => control.key).filter(Boolean),
    ...record.controls.map(control => control.publicKey).filter(Boolean),
    ...mediaFields,
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

function getCopyBudgets(defaultProps, copyKeys) {
  const budgets = {};
  for (const key of copyKeys) {
    collectCopyBudgets(defaultProps?.[key], key, budgets);
  }
  return budgets;
}

function collectCopyBudgets(value, pathName, budgets) {
  if (typeof value === 'string' || typeof value === 'number') {
    setCopyBudget(budgets, pathName, copyBudget(pathName, value));
    return;
  }
  if (isSerializedReactElementLike(value)) {
    setCopyBudget(budgets, pathName, copyBudget(pathName, reactElementText(value)));
    return;
  }
  if (Array.isArray(value)) {
    value.slice(0, 4).forEach(item => collectCopyBudgets(item, `${pathName}[]`, budgets));
    return;
  }
  if (!isPlainObject(value)) return;
  for (const [key, item] of Object.entries(value)) {
    collectCopyBudgets(item, `${pathName}.${key}`, budgets);
  }
}

function setCopyBudget(budgets, key, budget) {
  if (!budget) return;
  const existing = budgets[key];
  if (!existing || budget.maxChars < existing.maxChars) budgets[key] = budget;
}

function copyBudget(pathName, value) {
  const density = inferCopyDensity(pathName);
  const length = charLength(value);
  const base = Math.max(length, density === 'body' ? 18 : 6);
  const maxChars = {
    metric: Math.max(8, Math.min(16, Math.ceil(base * 1.4))),
    display: Math.max(18, Math.min(36, Math.ceil(base * 1.8))),
    compact: Math.max(16, Math.min(42, Math.ceil(base * 1.8))),
    body: Math.max(36, Math.min(120, Math.ceil(base * 2.2))),
  }[density];
  return { density, maxChars };
}

function inferCopyDensity(pathName) {
  const normalized = String(pathName || '').toLowerCase();
  const field = normalized.split('.').at(-1)?.replace(/\[\]/g, '') || normalized;
  const nested = normalized.includes('.') || normalized.includes('[]');
  if (/^(value|amount|number|num|score|rate|pct|percent|index|rank|total)$/.test(field)) return 'metric';
  if (!nested && /^(title|titletop|titlebottom|headline|headlinehl|headlinetail|statement|quote|word|brand|kicker)$/.test(field)) return 'display';
  if (/^(lead|subtitle|sub|desc|description|summary|body|copy|note|caption|detail|paragraph|footnote)$/.test(field)) return 'body';
  if (/^(title|headline|label|name|kicker|tag|chip|pill|category)$/.test(field)) return 'compact';
  return 'compact';
}

function charLength(value) {
  return Array.from(String(value ?? '')).length;
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
    for (const field of hostMediaFields(record, control)) {
      slots.push(mediaSlot(field, control.key, controls, defaultProps, control, record, { writeMode: 'initialProps' }));
    }
    slots.push(countOnlyMediaSlot(control, defaultProps, record));
  }
  return dedupeSlots(slots);
}

function mediaSlot(field, countKey, controls, defaultProps, source, record, { writeMode = 'initialProps' } = {}) {
  const countControl = controls.find(control => control.key === countKey);
  const fieldControl = controls.find(control => control.key === field);
  const defaultCount = countKey ? defaultProps[countKey] ?? countControl?.default : Array.isArray(defaultProps[field]) ? defaultProps[field].length : undefined;
  const acceptedKinds = acceptedMediaKinds(record, field, fieldControl);
  const itemShape = acceptedKinds.includes('video') ? 'string | {src,kind,type}' : 'string | {src}';
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
    itemShape,
    valueShape: `Array<${itemShape}>`,
    initialSrcSupported: writeMode === 'initialProps',
    runtimeReplaceable: true,
    writeMode,
    canPresetMedia: writeMode === 'initialProps',
    presetProp: writeMode === 'initialProps' ? `props.${field}` : null,
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
    canPresetMedia: false,
    presetProp: null,
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
  return ['image', 'video'];
}

function countOnlyAcceptedMediaKinds(record, control) {
  return ['image', 'video'];
}

function hostMediaFields(record, control) {
  if (!HOST_MEDIA_ARRAY_THEMES.has(record?.page?.themeKey)) return [];
  const kinds = countOnlyAcceptedMediaKinds(record, control);
  if (!kinds.includes('image')) return [];
  if (['theme05', 'theme06', 'theme08'].includes(record?.page?.themeKey)) return ['images'];
  return kinds.includes('video') ? ['images', 'media'] : ['images'];
}

function normalizeMediaKind(kind) {
  const value = String(kind || '').trim().toLowerCase();
  if (!value) return null;
  if (['image', 'images', 'photo', 'photos', 'picture', 'pictures'].includes(value)) return 'image';
  if (['video', 'videos', 'movie', 'movies'].includes(value)) return 'video';
  if (['mixed', 'media', 'any'].includes(value)) return 'mixed';
  return value;
}

function looksLikeVideoSrc(src) {
  return /\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(String(src || '').trim())
    || String(src || '').startsWith('data:video/');
}

function mimeForMediaSource(src, kind) {
  const ext = path.extname(String(src || '').split(/[?#]/)[0]).toLowerCase();
  return {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.m4v': 'video/mp4',
    '.mov': 'video/quicktime',
    '.webm': 'video/webm',
    '.ogv': 'video/ogg',
  }[ext] || (kind === 'video' ? 'video/mp4' : 'image/*');
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
      if (role === 'ambient') return hasAmbientBackground(page);
      return pageMatches(page, keywords);
    })
    .map(([role]) => role)
    .slice(0, 6);
}

function hasAmbientBackground(page) {
  const props = page?.defaultProps || {};
  return props.backgroundMode === 'unicorn' || typeof props.unicornScene === 'string';
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
