import {
  normalizeControlOptions,
  normalizeControlValue,
  normalizePublicControls,
  resolvePublicPropAliases,
} from './control-naming.mjs';

const REMOVED_CONTROL_TYPES = new Set(['text', 'string', 'input', 'url', 'email', 'textarea', 'multiline']);
export const MEDIA_ARRAY_KEYS = Object.freeze(['images', 'media', 'photos', 'pictures', 'logos', 'thumbs', 'imageSlots', 'imgs']);
const CONTRACT_OMIT = Symbol('contract-omit');
const NON_CONTENT_FIELD_PATTERN = /^(id|key|type|kind|mode|variant|style|theme|tone|layout|align|side|position|pos|fit|icon|href|url|src|sourceId|targetId|className|c|color|colour|accent|fill|stroke|background|bg|tint|hex|subcolor|dark|pin|pins|swatch|swatches|avatar|image|picture|photo)$/i;
const VISUAL_CONTAINER_FIELD_PATTERN = /^(pin|pins|pos|position|positions|layout|swatch|swatches|tilt|tilts|rotation|rotations|angle|angles|offset|offsets|coord|coords|coordinate|coordinates)$/i;
const VISUAL_NUMBER_FIELD_PATTERN = /^(x|y|l|t|r|w|h|cx|cy|dx|dy|box|width|height|left|top|right|bottom|ratio|rotate|rotation|rot|angle|tilt|scale|sr|opacity|radius|z|zindex)$/i;

export const COUNT_ARRAY_BINDINGS = {
  barCount: ['bars'],
  calloutCount: ['callouts'],
  cardCount: ['cards'],
  chipCount: ['chips'],
  colCount: ['columns', 'cols'],
  columnCount: ['columns', 'colsData', 'plans'],
  featureCount: ['features', 'plans[].feats'],
  indexCount: ['items', 'index'],
  itemCount: ['items', 'stats', 'data'],
  laneCount: ['lanes'],
  milestoneCount: ['milestones'],
  phaseCount: ['phases'],
  planCount: ['plans'],
  pointCount: ['points'],
  principleCount: ['principles', 'items'],
  roundCount: ['rounds'],
  rowCount: ['rows', 'rowsData', 'features'],
  segmentCount: ['segments'],
  segCount: ['segments', 'segs'],
  seriesCount: ['series'],
  statCount: ['stats'],
  stepCount: ['steps'],
  supportingCount: ['supporting'],
  tileCount: ['tiles'],
  wordCount: ['words'],
};

const MEDIA_COUNT_KEY_PATTERN = /^(image|images|media|photo|photos|picture|pictures|logo|logos|thumb|thumbs|avatar|avatars|frame)Count$/i;

export function createLayoutContracts(pages = []) {
  return new Map(pages.map(page => [page.key, createContract(page, page.themeKey)]));
}

// 与 createLayoutContracts 同接口,但按 key 惰性构建:CLI 单页查询不必为全部主题页付构建成本。
export function createLazyLayoutContracts(pages = []) {
  const pageByKey = new Map(pages.map(page => [page.key, page]));
  const cache = new Map();
  const get = (key) => {
    if (cache.has(key)) return cache.get(key);
    const page = pageByKey.get(key);
    if (!page) return undefined;
    const contract = createContract(page, page.themeKey);
    cache.set(key, contract);
    return contract;
  };
  return {
    get,
    has: key => pageByKey.has(key),
    keys: () => pageByKey.keys(),
    get size() {
      return pageByKey.size;
    },
    *entries() {
      for (const key of pageByKey.keys()) yield [key, get(key)];
    },
    *[Symbol.iterator]() {
      yield* this.entries();
    },
  };
}

export function normalizeSlidePropsForContract(layout, props = {}, contract = null) {
  const aliasResult = contract ? resolvePublicPropAliases(props, contract.controls) : { props: props || {} };
  const authoredProps = aliasResult.props || {};
  const authoredCounts = deriveAuthoredCounts(authoredProps, contract?.countBindings || []);
  const shapeResult = contract
    ? validateAuthoredPropShape(authoredProps, contract.defaultProps, contract.propShapes, contract.controls, contract.numberBounds, contract.freeTextFields)
    : { errors: [], warnings: [] };
  const next = { ...authoredProps };
  if (contract) applyMediaBackgroundMode(next, authoredProps, contract);
  if (!contract) return next;

  // shapeResult.warnings (non-blocking, inferred numeric ceilings) are intentionally not
  // surfaced here -- this function's contract is "return normalized props or throw", used by
  // both the render pipeline and the client-side editing runtime. Callers that want warnings
  // (props:safe / validate:goal-spec) read them off scripts/skill-workflow-utils.mjs instead.
  const errors = [...shapeResult.errors];
  for (const binding of contract.countBindings) {
    const derived = deriveCount(next, binding);
    if (!derived) {
      if (Object.prototype.hasOwnProperty.call(next, binding.key)) {
        const currentNumber = Number(next[binding.key]);
        if (!Number.isFinite(currentNumber)) errors.push(`${binding.key} 不是有效数字`);
        else validateCountRange(binding, currentNumber, binding.key, errors, { props: next, defaults: contract.defaultProps });
      }
      continue;
    }

    if (derived.error) {
      errors.push(derived.error);
      continue;
    }

    const current = next[binding.key];
    if (current == null || current === '') {
      next[binding.key] = authoredCounts.get(binding.key) ?? derived.count;
      validateCountRange(binding, next[binding.key], binding.key, errors, { props: next, defaults: contract.defaultProps });
      continue;
    }

    const currentNumber = Number(current);
    if (!Number.isFinite(currentNumber)) {
      errors.push(`${binding.key} 不是有效数字`);
    } else {
      // count 拖到比当前 authored 数组长——不再是硬错误:渲染合成层(client-runtime.jsx
      // withPaddedCountArrays)会用该 layout 契约 defaultProps 里的同名数组补足到 count 再渲染,
      // 用户能看到完整档位下的内容。这里只校验静态声明的 min/max(结构性上限),不再拿
      // 「当前实际数据条数」倒逼报错——那属于生成侧数据完整度的提示,由 props:safe /
      // validate:goal-spec 的 warnings 承接(见 scripts/skill-workflow-utils.mjs)。
      validateCountRange(binding, currentNumber, binding.key, errors, { props: next, defaults: contract.defaultProps });
    }
  }
  validateControlRanges(next, contract.controls, contract.countBindings, contract.defaultProps, errors);
  validateLengthBindings(next, contract.defaultProps, contract.lengthBindings, errors);

  if (errors.length) {
    throw new Error(`Slide props mismatch for "${layout}": ${errors.join('; ')}`);
  }
  return next;
}

export function buildLayoutManifestFromContracts(contracts) {
  return {
    version: 1,
    countArrayBindings: COUNT_ARRAY_BINDINGS,
    layouts: Object.fromEntries([...contracts.entries()].map(([key, contract]) => [key, serializeContract(contract)])),
  };
}

export function createContract(page, themePack) {
  const rawDefaultProps = serializeValue(page.defaultProps || {}) || {};
  const controls = clampCountControlLimits(normalizeControls(page), rawDefaultProps);
  const defaultProps = clampDefaultCountProps(rawDefaultProps, controls);
  let countBindings = controls
    .filter(control => !isBooleanControl(control))
    .map(control => {
      const explicitArrays = normalizeCountArrays(control.countArrays);
      return {
        control,
        explicitArrays: Boolean(explicitArrays),
        arrays: explicitArrays || COUNT_ARRAY_BINDINGS[control.key] || inferCountArrayBindings(control.key, defaultProps),
      };
    })
    .filter(item => item.arrays.length)
    .map(({ control, arrays, explicitArrays }) => ({
      key: control.key,
      publicKey: control.publicKey || control.key,
      label: control.label || control.key,
      arrays,
      explicitArrays,
      min: control.min,
      max: control.max,
      maxFromKey: control.maxFromKey,
      maxFromKeyOffset: control.maxFromKeyOffset,
      maxByKey: control.maxByKey,
      maxByValue: control.maxByValue,
    }));
  countBindings.push(...inferSyntheticCountBindings(defaultProps, countBindings));
  countBindings = countBindings.map(binding => {
    const { explicitArrays, ...publicBinding } = binding;
    return {
      ...publicBinding,
      arrays: resolveContractBindingArrays(binding, defaultProps, { preserveDeclared: explicitArrays }),
    };
  });
  const lengthBindings = mergeLengthBindings(
    normalizeLengthBindings(page.lengthBindings),
    inferLengthBindings(defaultProps, countBindings),
  );

  return {
    key: page.key,
    themePack,
    pageNumber: page.pageNumber,
    label: page.label,
    slot: page.slot,
    dataLayout: page.layout,
    defaultProps,
    controls,
    countBindings,
    lengthBindings,
    numberBounds: normalizeContractNumberBounds(page.numberBounds),
    freeTextFields: freeTextArrayFieldsForKey(page.key),
    propShapes: describePropShapes(defaultProps),
  };
}

// Array-item fields that collide between "structural discriminator" (locked to the shipped
// enum) and "authored display copy" (must accept any string authored by the skill/user).
// isEnumFieldName below matches purely on field *name*, so it can't tell theme03 ScorecardSlide's
// `rows[].q` (a fixed quadrant token: 'star'|'bubble'|'hidden', switches icon/color) apart from
// e.g. theme07 MethodPage's `layers[].q` (a rewritable research question) -- both are named `q`.
// Pages that use a colliding name as prose opt out here, keyed by generated page key (mirrors the
// numberBounds override above); pages absent from this table keep the generic enum lock, so
// genuinely structural uses (theme03_page065) still fail validation -- see
// scripts/test/test-jad231-validation-guard.mjs "token q fields still reject authored business
// copy" vs "FAQ and question q fields accept authored business copy".
const FREE_TEXT_ARRAY_FIELDS = {
  theme04_page019: ['colsData[].q'], // Slide59Stacked: quarter tick label, not a mode switch
  // Note: theme07/source/src/pages/TrendPage.jsx also has a quarters[].q tick label with the same
  // bug, but that component isn't imported by theme07/runtime.jsx (unregistered/unreachable), so
  // there is no live page key to target here.
  theme07_page008: ['layers[].q'], // MethodPage: rewritable research question
  theme07_page018: ['context[].q'], // ColdStartPage: quarter tick label
  theme07_page021: ['nodes[].q'], // CooldownPage: quarter tick label
  theme09_page105: ['items[].q'], // SlideFAQ: FAQ question
  theme10_page055: ['items[].q'], // SlideFAQ: FAQ question
  theme11_page043: ['qa[].q'], // Slide39FAQ: FAQ question
  theme11_page052: ['quotes[].q'], // Slide48Voices: testimonial quote text
  theme12_page040: ['items[].q'], // SwSlideFaq: FAQ question
  theme12_page081: ['milestones[].q'], // SwSlideTimeline: quarter tick label
  theme12_page085: ['quotes[].q'], // SwSlideQuoteWall: testimonial quote text
};

function freeTextArrayFieldsForKey(pageKey) {
  return FREE_TEXT_ARRAY_FIELDS[pageKey] || [];
}

// Flat union of the table above, keyed by path only ("arrayKey[].field") rather than by page.
// Safe because no two pages currently registered here share an "arrayKey[].field" path with
// opposite (structural vs. prose) intent -- see the per-page comments above. Consumed by
// scripts/skill-workflow-utils.mjs's copy-field classifier (isFillableCopyLeaf), which walks
// defaultProps generically and doesn't carry page-key context down to individual leaf checks.
export const FREE_TEXT_ARRAY_FIELD_PATHS = new Set(Object.values(FREE_TEXT_ARRAY_FIELDS).flat());

// Narrows a contract's freeTextFields list down to the field names opted out for one specific
// array key, e.g. "items[].q" -> Set{'q'} when arrayKey === 'items'. Mirrors
// explicitNumberBoundsForArrayKey below.
function explicitFreeTextFieldsForArrayKey(freeTextFields, arrayKey) {
  const prefix = `${arrayKey}[].`;
  const result = new Set();
  for (const path of freeTextFields || []) {
    if (path.startsWith(prefix)) result.add(path.slice(prefix.length));
  }
  return result;
}

// Explicit, page-declared numeric domains for array-item fields whose values are consumed
// directly as chart/SVG geometry (fixed-axis scale, normalized 0-1 position, rank index, ...).
// Keyed by "arrayKey[].field" (single nesting level). Declared on the page (metadata.js
// `numberBounds`); unlike the generic inferred ceiling below, these stay hard errors because
// exceeding them visibly breaks the component's geometry, not just its intended data range.
function normalizeContractNumberBounds(raw) {
  if (!raw || typeof raw !== 'object') return {};
  const result = {};
  for (const [path, bounds] of Object.entries(raw)) {
    const min = Number(bounds?.min);
    const max = Number(bounds?.max);
    if (!Number.isFinite(min) || !Number.isFinite(max)) continue;
    result[path] = {
      min,
      max,
      ...(typeof bounds?.semantics === 'string' && bounds.semantics ? { semantics: bounds.semantics } : {}),
    };
  }
  return result;
}

// Narrows a contract's full numberBounds map (dotted paths) down to the fields declared for
// one specific array key, e.g. "data[].count" -> Map{ count: {...} } when arrayKey === 'data'.
export function explicitNumberBoundsForArrayKey(numberBoundsConfig, arrayKey) {
  const prefix = `${arrayKey}[].`;
  const result = new Map();
  for (const [path, bounds] of Object.entries(numberBoundsConfig || {})) {
    if (!path.startsWith(prefix)) continue;
    const field = path.slice(prefix.length);
    if (!field || field.includes('.') || field.includes('[')) continue;
    result.set(field, bounds);
  }
  return result.size ? result : null;
}

function resolveContractBindingArrays(binding, defaultProps = {}, { preserveDeclared = false } = {}) {
  const declared = Array.isArray(binding?.arrays) ? binding.arrays : [];
  if (preserveDeclared && declared.length) {
    const kept = declared.filter(pathName => isExplicitBindableContractArray(defaultProps, pathName));
    return [...new Set(kept)];
  }
  if (isMediaCountBinding(binding)) {
    const declaredMedia = declared.filter(pathName => isMediaArrayPath(pathName) && arrayPathExistsAny(defaultProps, pathName));
    const declaredBindable = declared.filter(pathName => isBindableContractArray(defaultProps, pathName));
    if (declaredMedia.length && declaredBindable.length > declaredMedia.length) return [...new Set(declaredBindable)];
    if (declaredMedia.length) return narrowCountBindingArrays(binding, [...new Set(declaredMedia)]);
    const mediaArrays = discoverAllArrayPaths(defaultProps).filter(pathName => isMediaArrayPath(pathName));
    const preferred = preferredMediaBindingArray(binding, mediaArrays);
    if (preferred) return [preferred];
  }

  if (Array.isArray(binding?.arrays) && !declared.length) return [];
  const kept = declared.filter(pathName => isBindableContractArray(defaultProps, pathName));
  if (kept.length && isVisualSlotCountBinding(binding)) {
    const mediaArrays = discoverAllArrayPaths(defaultProps).filter(pathName => isMediaArrayPath(pathName));
    if (mediaArrays.length) return [...new Set([...kept, ...mediaArrays])];
  }
  if (kept.length) return narrowCountBindingArrays(binding, kept);

  const paths = discoverContractArrayPaths(defaultProps);
  const byField = declared.flatMap(pathName => paths.filter(candidate => countArrayPathField(candidate) === countArrayPathField(pathName)));
  if (byField.length) return narrowCountBindingArrays(binding, [...new Set(byField)]);

  const content = paths.filter(pathName => !isMediaArrayPath(pathName));
  const max = Number(binding?.max);
  const byMax = Number.isFinite(max) ? content.filter(pathName => arrayLengthAtPath(defaultProps, pathName) === max) : [];
  if (byMax.length === 1) return byMax;
  const fallbackDefault = Number(defaultProps?.[binding?.key]);
  const byDefault = Number.isFinite(fallbackDefault) ? content.filter(pathName => arrayLengthAtPath(defaultProps, pathName) === fallbackDefault) : [];
  if (byDefault.length === 1) return byDefault;
  return [];
}

function isBindableContractArray(defaultProps, pathName) {
  if (!arrayPathExistsAny(defaultProps, pathName)) return false;
  if (isMediaArrayPath(pathName)) return true;
  return isContractContentArray(pathName, valueAtContractPath(defaultProps, pathName));
}

function isExplicitBindableContractArray(defaultProps, pathName) {
  if (!arrayPathExistsAny(defaultProps, pathName)) return false;
  if (isBindableContractArray(defaultProps, pathName)) return true;
  const value = valueAtContractPath(defaultProps, pathName);
  return Array.isArray(value) && value.length > 0 && value.every(item => typeof item === 'number' && Number.isFinite(item));
}

function discoverAllArrayPaths(value, prefix = '') {
  if (Array.isArray(value)) {
    const paths = prefix ? [prefix] : [];
    for (const item of value) {
      if (isPlainObject(item)) paths.push(...discoverAllArrayPaths(item, `${prefix}[]`));
    }
    return paths;
  }
  if (!isPlainObject(value)) return [];
  return Object.entries(value).flatMap(([key, item]) => (
    discoverAllArrayPaths(item, prefix ? `${prefix}.${key}` : key)
  ));
}

function arrayPathExistsAny(defaultProps, pathName) {
  return Array.isArray(valueAtContractPath(defaultProps, pathName));
}

function valueAtContractPath(source, pathName) {
  let current = source;
  for (const segment of String(pathName || '').split('.')) {
    if (current == null) return undefined;
    if (Array.isArray(current)) {
      const arrayKey = segment.endsWith('[]') ? segment.slice(0, -2) : segment;
      const values = current.map(item => arrayKey ? item?.[arrayKey] : item).filter(item => item !== undefined);
      current = segment.endsWith('[]') ? values.find(Array.isArray) : values.find(item => item !== undefined);
      continue;
    }
    if (segment.endsWith('[]')) {
      const array = current[segment.slice(0, -2)];
      if (!Array.isArray(array)) return undefined;
      current = array;
      continue;
    }
    current = current[segment];
  }
  return current;
}

function arrayLengthAtPath(source, pathName) {
  const value = valueAtContractPath(source, pathName);
  return Array.isArray(value) ? value.length : NaN;
}

export function isMediaArrayPath(pathName) {
  return isMediaArrayKey(String(pathName || '').split('.')[0].replace(/\[\]$/, ''))
    || isMediaArrayKey(countArrayPathField(pathName));
}

function isMediaCountControlBinding(binding) {
  const text = `${binding?.key || ''} ${binding?.publicKey || ''} ${binding?.label || ''}`;
  return /image|media|photo|picture|video|logo|slot|图片|图像|视频|媒体|照片|徽标|标志|槽/i.test(text)
    && /(count|数量)/i.test(text);
}

function isMediaCountBinding(binding) {
  return isMediaCountControlBinding(binding)
    || MEDIA_COUNT_KEY_PATTERN.test(binding?.key || '')
    || MEDIA_COUNT_KEY_PATTERN.test(binding?.publicKey || '')
    || (binding?.arrays || []).some(isMediaArrayPath);
}

function isVisualSlotCountBinding(binding) {
  const text = `${binding?.key || ''} ${binding?.publicKey || ''} ${binding?.label || ''}`;
  return /(count|数量)$/i.test(String(binding?.key || ''))
    && /(frame|image|media|photo|picture|slot|gallery|画框|画格|图片|图像|媒体|照片|相册)/i.test(text);
}

export function isAllowedMediaCountShortage(binding, derived) {
  // 判据看绑定数组本身是否媒体数组(source),不看控件名模式——真实控件名有
  // imgCount/mediaSlotCount 等变体,名字模式(imageCount/mediaCount)接不住它们。
  return isMediaArrayPath(derived?.source);
}

function preferredMediaBindingArray(binding, mediaArrays = []) {
  if (!mediaArrays.length) return null;
  const stem = normalizeName(String(binding?.publicKey || binding?.key || '').replace(/Count$/i, ''));
  const exact = mediaArrays.find(key => normalizeName(key).startsWith(stem));
  return exact || mediaArrays[0];
}

function narrowCountBindingArrays(binding, arrays) {
  if (!arrays.length) return arrays;
  const scored = arrays.map(pathName => ({ pathName, score: countArrayNameScore(binding?.key, pathName) }));
  const best = Math.max(...scored.map(item => item.score));
  if (best <= 0) return arrays;
  return scored.filter(item => item.score === best).map(item => item.pathName);
}

function countArrayNameScore(countKey, pathName) {
  const stem = normalizeName(String(countKey || '').replace(/Count$/i, ''));
  const field = normalizeName(countArrayPathField(pathName));
  if (!stem || !field) return 0;
  if (field === stem || field === pluralize(stem)) return 4;
  if (field.includes(stem) || stem.includes(field)) return 2;
  return 0;
}

function inferSyntheticCountBindings(defaultProps = {}, countBindings = []) {
  return [];
}

function arrayPathExists(defaultProps, pathName) {
  const [root, nested] = String(pathName || '').split('[].');
  if (!root || !nested || !Array.isArray(defaultProps?.[root])) return false;
  return defaultProps[root].some(item => Array.isArray(item?.[nested]));
}

export function inferLengthBindings(defaultProps = {}, countBindings = []) {
  const topLevelArrays = Object.entries(defaultProps || {})
    .filter(([key, value]) => Array.isArray(value) && !isMediaArrayKey(key));
  const bindings = [];
  for (const [rootKey, rootValue] of topLevelArrays) {
    const objectItems = rootValue.filter(isPlainObject);
    if (!objectItems.length) continue;
    const fields = new Set(objectItems.flatMap(item => Object.keys(item || {})));
    for (const field of fields) {
      const nestedArrays = objectItems
        .map(item => item?.[field])
        .filter(Array.isArray);
      if (nestedArrays.length !== objectItems.length) continue;
      if (!isLengthBoundValueArray(field, nestedArrays)) continue;
      const length = nestedArrays[0]?.length;
      if (!Number.isFinite(length) || length <= 0) continue;
      if (!nestedArrays.every(array => array.length === length)) continue;
      const candidates = topLevelArrays
        .filter(([key, value]) => key !== rootKey && value.length === length && isLengthAnchorArray(key, value))
        .map(([key, value]) => ({ key, value, score: lengthAnchorScore(key, value, countBindings) }))
        .sort((a, b) => b.score - a.score || a.key.localeCompare(b.key));
      if (!candidates.length) continue;
      if (candidates.length > 1 && candidates[0].score === candidates[1].score) continue;
      const anchor = candidates[0].key;
      const countKey = countKeyForArray(anchor, countBindings);
      bindings.push({
        dependent: `${rootKey}[].${field}`,
        anchor,
        relation: 'same-length',
        ...(countKey ? { countKey } : {}),
      });
    }
  }
  return bindings;
}

function normalizeLengthBindings(value = []) {
  if (!Array.isArray(value)) return [];
  return value
    .filter(item => item?.dependent && item?.anchor)
    .map(item => ({
      dependent: item.dependent,
      anchor: item.anchor,
      relation: item.relation || 'same-length',
      ...(item.countKey ? { countKey: item.countKey } : {}),
    }));
}

function mergeLengthBindings(primary = [], fallback = []) {
  const result = [];
  const seen = new Set();
  for (const binding of [...(primary || []), ...(fallback || [])]) {
    if (!binding?.dependent || !binding?.anchor) continue;
    const key = `${binding.relation || 'same-length'}:${binding.dependent}:${binding.anchor}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(binding);
  }
  return result;
}

function isLengthBoundValueArray(field, arrays = []) {
  if (!/^(values?|vals?|data|points?|parts?)$/i.test(String(field || ''))) return false;
  return arrays.length > 0 && arrays.every(array => array.length > 0 && array.every(item => typeof item === 'number' && Number.isFinite(item)));
}

function isLengthAnchorArray(key, value = []) {
  if (isMediaArrayKey(key) || !Array.isArray(value) || !value.length) return false;
  if (value.every(item => ['string', 'number'].includes(typeof item))) return true;
  return value.some(item => isPlainObject(item) && ['label', 'name', 'title', 'key', 'id'].some(field => typeof item[field] === 'string'));
}

function lengthAnchorScore(key, value, countBindings = []) {
  let score = 0;
  if (countKeyForArray(key, countBindings)) score += 4;
  if (/^(periods?|categories|series|groups|labels?)$/i.test(key)) score += 2;
  if (value.every(item => ['string', 'number'].includes(typeof item))) score += 1;
  return score;
}

function countKeyForArray(pathName, countBindings = []) {
  const binding = (countBindings || []).find(item => (item.arrays || []).includes(pathName));
  return binding?.publicKey || binding?.key || null;
}

export function clampCountControlLimits(controls = [], defaultProps = {}) {
  return (controls || []).map(control => {
    const limit = countControlLimit(control, defaultProps);
    if (limit == null) return control;
    const max = Number(control.max);
    const min = Number(control.min);
    const nextMax = Number.isFinite(min) ? Math.max(min, limit) : limit;
    if (!Number.isFinite(max) || max <= nextMax) return control;
    const next = { ...control, max: nextMax };
    const defaultValue = Number(next.default);
    if (Number.isFinite(defaultValue) && defaultValue > nextMax) next.default = nextMax;
    return next;
  });
}

export function clampDefaultCountProps(defaultProps = {}, controls = []) {
  const next = { ...(defaultProps || {}) };
  for (const control of controls || []) {
    const key = control?.key;
    if (!key || !Object.prototype.hasOwnProperty.call(next, key)) continue;
    const max = Number(control.max);
    const value = Number(next[key]);
    if (Number.isFinite(max) && Number.isFinite(value) && value > max) next[key] = max;
  }
  return next;
}

function countControlLimit(control, defaultProps = {}) {
  if (!control?.key || MEDIA_COUNT_KEY_PATTERN.test(control.key)) return null;
  const arrays = normalizeCountArrays(control.countArrays) || COUNT_ARRAY_BINDINGS[control.key] || inferCountArrayBindings(control.key, defaultProps);
  if (!arrays.length || arrays.some(isMediaCountPath)) return null;
  const counts = arrays.flatMap(pathName => collectArrayCounts(defaultProps, pathName).map(item => item.count));
  if (!counts.length) return null;
  // A nested path (e.g. `tiers[].examples`) yields one count per parent item;
  // authored items are free to vary in length, so the control's capacity must
  // cover the richest item, not get dragged down to the shortest one.
  return Math.max(...counts);
}

function isMediaCountPath(pathName) {
  const key = String(pathName || '').split('.')[0].replace(/\[\]$/, '');
  return isMediaArrayKey(key) || /^(avatar|avatars)$/i.test(key);
}

function deriveAuthoredCounts(props, bindings) {
  const counts = new Map();
  for (const binding of bindings) {
    const derived = deriveCount(props, binding);
    if (derived && !derived.error) counts.set(binding.key, derived.count);
  }
  return counts;
}

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function applyMediaBackgroundMode(props, authoredProps, contract) {
  if (Object.prototype.hasOwnProperty.call(authoredProps || {}, 'backgroundMode')) return;
  const defaultProps = contract.defaultProps || {};
  if (!Object.prototype.hasOwnProperty.call(defaultProps, 'backgroundMode')) return;
  // Authored media is an explicit opt-in: hasAuthoredMedia() below only passes when the author
  // actually filled a media array, so unicorn-default pages flip to 'media' too — matching the
  // browser upload path, where landing an upload switches the gate atomically.
  if (!backgroundModeSupportsMedia(contract.controls)) return;
  if (!hasAuthoredMedia(authoredProps)) return;
  props.backgroundMode = 'media';
}

function backgroundModeSupportsMedia(controls = []) {
  const control = controls.find(item => item?.key === 'backgroundMode' || item?.publicKey === 'backgroundMode');
  const options = Array.isArray(control?.options) ? control.options : [];
  return options.some(option => {
    if (typeof option === 'string') return option === 'media';
    return option?.value === 'media' || option?.key === 'media';
  });
}

function hasAuthoredMedia(props = {}) {
  return Object.entries(props || {}).some(([key, value]) => {
    if (!isMediaArrayKey(key)) return false;
    if (typeof value === 'string') return value.trim() !== '';
    if (Array.isArray(value)) return value.length > 0;
    if (isPlainObject(value)) return typeof value.src === 'string' && value.src.trim() !== '';
    return false;
  });
}

export function neutralizeDefaultCopy(value, field = '') {
  if (isSerializedReactElementLike(value)) return neutralizeDefaultCopy(reactElementText(value), field);
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
  if (/^(id|key|type|tone|color|colour|accent|variant|style|theme|layout|align|side|position|icon|href|url|src|fit|className)$/i.test(field)) return false;
  if (/^(show|is|has)[A-Z_]/.test(field)) return false;
  if (/(Color|Colour|Tone|Variant|Style|Mode|Layout|Align|Side|Index|Id|Key|Url|Src|Fit|ClassName)$/i.test(field)) return false;
  if (/^(https?:|data:|#)/i.test(value)) return false;
  return true;
}

function neutralPlaceholder(value) {
  const length = Array.from(value).length;
  if (!length) return value;
  const seed = Array.from('请输入文本');
  return Array.from({ length }, (_, index) => seed[index % seed.length]).join('');
}

function serializeContract(contract) {
  const { defaultProps, propShapes, ...publicContract } = contract;
  const mediaDefaults = manifestMediaDefaults(defaultProps, contract.countBindings);
  return Object.keys(mediaDefaults).length
    ? { ...publicContract, defaultProps: mediaDefaults }
    : publicContract;
}

function manifestMediaDefaults(defaultProps = {}, countBindings = []) {
  const keys = new Set(
    (countBindings || [])
      .flatMap(binding => binding.arrays || [])
      .filter(pathName => !String(pathName).includes('.') && isMediaArrayPath(pathName))
      .map(pathName => String(pathName).replace(/\[\]$/, '')),
  );
  return Object.fromEntries(
    [...keys]
      .filter(key => Array.isArray(defaultProps?.[key]))
      .map(key => [key, defaultProps[key]]),
  );
}

export function validateAuthoredPropShape(props = {}, defaults = {}, propShapes = null, controls = [], numberBoundsConfig = {}, freeTextFields = []) {
  const errors = [];
  const warnings = [];
  const controlByKey = new Map((controls || []).filter(c => c?.key).map(c => [c.key, c]));
  for (const [key, value] of Object.entries(props || {})) {
    if (isMediaArrayKey(key)) continue;
    if (!propShapes?.[key] && isRawMatrixProp(key)) {
      errors.push(`props.${key}: unknown prop`);
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(defaults || {}, key)) continue;
    // A control with an explicit, enumerated option list (segment/select) is the
    // source of truth for that key's allowed values — e.g. a `columns` control
    // can legitimately mix numbers (1, 2) with a string sentinel ('grid'). The
    // default value's own JS type must not veto a value the control itself offers.
    if (isValueAmongControlOptions(value, controlByKey.get(key))) continue;
    const explicitBoundsByField = explicitNumberBoundsForArrayKey(numberBoundsConfig, key);
    const freeTextFieldsForKey = explicitFreeTextFieldsForArrayKey(freeTextFields, key);
    validateValueShape(value, defaults[key], `props.${key}`, errors, warnings, explicitBoundsByField, freeTextFieldsForKey);
  }
  return { errors, warnings };
}

function isValueAmongControlOptions(value, control) {
  const options = Array.isArray(control?.options) ? control.options : [];
  if (!options.length) return false;
  return options.some(option => sameContractValue(option?.value, value));
}

function validateValueShape(value, defaultValue, field, errors, warnings = [], explicitBoundsByField = null, freeTextFieldsForKey = null) {
  if (isSerializedReactElementLike(value)) {
    errors.push(`${field}: serialized React element is not allowed; use plain text`);
    return;
  }

  if (isSerializedReactElementLike(defaultValue)) {
    if (!['string', 'number'].includes(typeof value)) {
      errors.push(`${field}: expected string`);
    }
    return;
  }

  const primitive = primitiveShape(defaultValue);
  if (primitive) {
    validatePrimitiveValue(value, primitive, defaultValue, field, errors);
    return;
  }

  if (Array.isArray(defaultValue)) {
    if (!Array.isArray(value)) {
      errors.push(`${field}: expected array`);
      return;
    }
    const shape = mergeObjectShape(defaultValue);
    if (!shape) {
      const tuple = tupleShapeForArrayItems(defaultValue);
      if (tuple) {
        value.forEach((item, index) => {
          if (!Array.isArray(item)) {
            errors.push(`${field}[${index}]: expected tuple array`);
            return;
          }
          if (tuple.variable ? item.length > tuple.items.length : item.length !== tuple.items.length) {
            errors.push(`${field}[${index}]: expected tuple length ${tuple.variable ? '<= ' : ''}${tuple.items.length}`);
            return;
          }
          tuple.items.forEach((itemDefault, itemIndex) => {
            if (itemIndex >= item.length) return; // 变长元组的短行缺位是合法的
            validateValueShape(item[itemIndex], itemDefault, `${field}[${index}][${itemIndex}]`, errors, warnings);
          });
        });
        return;
      }
      const itemDefault = defaultValue.find(item => item != null);
      const itemPrimitive = primitiveShape(itemDefault);
      if (itemPrimitive) {
        value.forEach((item, index) => {
          // 按位对齐:异构标量数组(如评分表 [5,4,5,true,'旗舰'])每列按同位置默认值校验;
          // 数组内存在与提交值同类型的默认元素时放行(boolean|string 混合列允许勾选格改文字)
          const tv = item === null ? 'null' : typeof item;
          if (defaultValue.some(d => (d === null ? 'null' : typeof d) === tv)) return;
          const posDefault = index < defaultValue.length && defaultValue[index] != null ? defaultValue[index] : itemDefault;
          const posPrimitive = primitiveShape(posDefault) || itemPrimitive;
          validatePrimitiveValue(item, posPrimitive, posDefault, `${field}[${index}]`, errors);
        });
      }
      return;
    }
    const enumFields = enumFieldsForArrayItems(defaultValue, freeTextFieldsForKey);
    const numberBounds = numberBoundsForArrayItems(defaultValue, explicitBoundsByField);
    value.forEach((item, index) => {
      if (!isPlainObject(item)) {
        errors.push(`${field}[${index}]: expected object item`);
        return;
      }
      validateObjectShape(item, shape, `${field}[${index}]`, errors, warnings, enumFields, numberBounds, defaultValue[index]);
    });
    return;
  }

  if (isPlainObject(defaultValue)) {
    if (!isPlainObject(value)) {
      errors.push(`${field}: expected object`);
      return;
    }
    validateObjectShape(value, defaultValue, field, errors, warnings);
  }
}

function isRawMatrixProp(key) {
  return String(key || '') === 'matrix';
}

function validateObjectShape(value, shape, field, errors, warnings = [], enumFields = new Map(), numberBounds = new Map(), posDefault = undefined) {
  const allowed = new Set(Object.keys(shape || {}));
  for (const [key, item] of Object.entries(value || {})) {
    if (!allowed.has(key)) {
      // 同位置默认项自带的键(异构行独有字段)不算 unknown —— 但:私有/非内容字段(颜色、
      // pos/tone、视觉数值)保持拒绝;shape 外字符串字段多为结构枚举(如象限键 q),改值也拒绝,
      // 仅允许原值回传与非字符串(数字/坐标数组)修改。
      if (posDefault && typeof posDefault === 'object' && key in posDefault
        && !isNonContentContractValue(key, posDefault[key])
        && (typeof item !== 'string' || item === posDefault[key])) {
        validateValueShape(item, posDefault[key], `${field}.${key}`, errors, warnings);
        continue;
      }
      errors.push(`${field}.${key}: unknown nested prop; expected ${formatExpectedKeys(allowed)}`);
      continue;
    }
    const enumValues = enumFields.get(key);
    if (enumValues && typeof item === 'string' && !enumValues.has(item)) {
      errors.push(`${field}.${key}: expected one of ${formatExpectedKeys(enumValues)}`);
      continue;
    }
    const bounds = numberBounds.get(key);
    if (bounds) validateNumberBounds(item, bounds, `${field}.${key}`, bounds.explicit ? errors : warnings);
    // 双轨校验:先按同位置默认值(本行契约,含 null/异构),不过再按合并样本(跨行联合类型),
    // 任一通过即视为契约内;两者都不过才报错(取本行轨的错误)。
    const hasPos = posDefault && typeof posDefault === 'object' && key in posDefault;
    if (hasPos && posDefault[key] !== shape[key]) {
      const posErrors = [];
      validateValueShape(item, posDefault[key], `${field}.${key}`, posErrors, warnings);
      if (!posErrors.length) continue;
      const mergedErrors = [];
      validateValueShape(item, shape[key], `${field}.${key}`, mergedErrors, warnings);
      if (!mergedErrors.length) continue;
      errors.push(...posErrors);
      continue;
    }
    validateValueShape(item, hasPos ? posDefault[key] : shape[key], `${field}.${key}`, errors, warnings);
  }
}

function primitiveShape(value) {
  if (value == null || Array.isArray(value) || isPlainObject(value) || isSerializedReactElementLike(value)) return null;
  const type = typeof value;
  return ['string', 'number', 'boolean'].includes(type) ? type : null;
}

function validatePrimitiveValue(value, expected, defaultValue, field, errors) {
  // 默认值证据放行:提交值类型虽与合并 shape 不符,但与同位置默认值同类型(含同为 null)——
  // 异构默认(勾选列 boolean|string、自定义价 number|null、首段 null)是组件契约的一部分。
  const tv = value === null ? 'null' : typeof value;
  const td = defaultValue === null ? 'null' : typeof defaultValue;
  if (tv !== expected && tv === td && ['null', 'string', 'number', 'boolean'].includes(tv)) {
    if (tv !== 'number' || Number.isFinite(value)) return;
  }
  if (expected === 'number') {
    if (typeof value !== 'number' || !Number.isFinite(value)) errors.push(`${field}: expected number`);
    return;
  }
  if (expected === 'boolean') {
    if (typeof value !== 'boolean') errors.push(`${field}: expected boolean`);
    return;
  }
  if (expected !== 'string') return;
  if (typeof value !== 'string') {
    errors.push(`${field}: expected string`);
    return;
  }
  if (isColorConfigField(field, defaultValue) && !isCssColorLike(value)) {
    errors.push(`${field}: expected color`);
    return;
  }
  const enumValues = enumValuesForScalarField(field, defaultValue);
  if (enumValues && !enumValues.has(value)) {
    errors.push(`${field}: expected one of ${formatExpectedKeys(enumValues)}`);
  }
}

function enumFieldsForArrayItems(items = [], excludedFields = null) {
  const result = new Map();
  const objects = items.filter(isPlainObject);
  const keys = new Set(objects.flatMap(item => Object.keys(item)));
  for (const key of keys) {
    if (!isEnumFieldName(key) || excludedFields?.has(key)) continue;
    const values = objects
      .map(item => item?.[key])
      .filter(item => typeof item === 'string' && item.trim());
    // 枚举锁定仅对 token 形值(结构键):值是自然文案(CJK/多词,如分类列「风险投资/战略投资」)
    // 时按可改写文案对待,不锁死取值集合 —— 用户换领域时这些分类词必须可替换。
    if (values.some(v => /[一-龥]/.test(v) || /\S\s+\S/.test(v))) continue;
    const unique = new Set(values);
    if (unique.size) result.set(key, unique);
  }
  return result;
}

// Per-field numeric domain for one array's items, keyed by field name. Each entry is
// { min, max, explicit, semantics }:
//  - explicit:true  -> a hard domain (page-declared override, or a recognized fixed shape like
//    the BCG bubble gx/gy/size/q or a %-distribution that sums to ~100). Values outside it are
//    hard errors: the component consumes the field directly as geometry (position/scale/index)
//    and overflowing it visibly breaks the render.
//  - explicit:false -> a ceiling *inferred* from the page's own default sample data (observed
//    range, padded 10%). This is a hint for "what the shipped example looks like", not a
//    contract the component enforces -- most charts self-scale to authored data. Violations are
//    advisory only (see validateNumberBounds).
// explicitBoundsByField (from a page's declared `numberBounds`) always wins over both the
// recognized-shape and inferred paths, so page authors can harden any field precisely.
export function numberBoundsForArrayItems(items = [], explicitBoundsByField = null) {
  const result = new Map();
  const objects = items.filter(isPlainObject);
  const keys = new Set(objects.flatMap(item => Object.keys(item)));
  const bcgBubbleShape = objects.some(item => ['gx', 'gy', 'size', 'q'].every(key => Object.prototype.hasOwnProperty.call(item, key)));
  for (const key of keys) {
    const declared = explicitBoundsByField?.get(key);
    if (declared) {
      result.set(key, { min: declared.min, max: declared.max, explicit: true, semantics: declared.semantics || null });
      continue;
    }
    if (bcgBubbleShape && (key === 'gx' || key === 'gy')) {
      result.set(key, { min: 0, max: 1, explicit: true, semantics: 'normalized' });
      continue;
    }
    if (bcgBubbleShape && key === 'size') {
      result.set(key, { min: 0.2, max: 1.1, explicit: true, semantics: null });
      continue;
    }
    if (bcgBubbleShape && key === 'q') {
      result.set(key, { min: 0, max: 3, explicit: true, semantics: null });
      continue;
    }
    if (isPercentDistributionField(key, objects)) {
      // JAD batch-test r5: components render these fields verbatim as "<value>%" (donut/share/mix
      // labels), so authored values must already BE percentages -- a raw magnitude (e.g. 1520 亿)
      // renders as "1520%". Label the intent so inspect:layout surfaces semantics:'percent'
      // alongside the same 0-100 domain this branch has always enforced.
      result.set(key, { min: 0, max: 100, explicit: true, semantics: 'percent' });
      continue;
    }
    const values = objects.map(item => item?.[key]);
    const bounds = numberBoundsForValues(values);
    if (bounds) result.set(key, { ...bounds, explicit: false, semantics: inferredNumberSemantics(key, values) });
  }
  return result;
}

function isPercentDistributionField(key, objects) {
  const values = objects.map(item => item?.[key]).filter(value => typeof value === 'number' && Number.isFinite(value));
  if (values.length < 2 || values.some(value => value < 0 || value > 100)) return false;
  const labelKeys = ['name', 'label', 'category', 'segment', 'title'];
  const hasLabels = objects.every(item => labelKeys.some(labelKey => typeof item?.[labelKey] === 'string'));
  if (!hasLabels) return false;
  const sum = values.reduce((total, value) => total + value, 0);
  return sum >= 99 && sum <= 101;
}

function numberBoundsForValues(values = []) {
  const numbers = values.filter(value => typeof value === 'number' && Number.isFinite(value));
  if (numbers.length < 2) return null;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return {
    min: min >= 0 ? 0 : min * 1.1,
    max: max <= 0 ? 0 : max * 1.1,
  };
}

// Labels a field's likely intent for inspect:layout, reusing the exact same values already
// classified above -- not a second formula. 'coordinate': the field name itself is a
// conventional screen-space coordinate (x/y/cx/cy/...). 'normalized': every observed sample is
// already a 0-1 ratio. Both are hints only; they do not change enforcement.
function inferredNumberSemantics(key, values) {
  if (/^(x|y|cx|cy|dx|dy|px|py|lat|lng|lon)$/i.test(String(key || ''))) return 'coordinate';
  const numbers = values.filter(value => typeof value === 'number' && Number.isFinite(value));
  if (numbers.length >= 2 && numbers.every(value => value >= 0 && value <= 1)) return 'normalized';
  return null;
}

export function validateNumberBounds(value, bounds, field, target) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return;
  const range = `[${formatNumber(bounds.min)}, ${formatNumber(bounds.max)}]`;
  const suffix = bounds.explicit ? '' : ' (inferred from default sample data; NOT a hard limit — keep real authored values as-is, do not scale them down to fit)';
  if (value < bounds.min) target.push(`${field}: expected >= ${formatNumber(bounds.min)}; allowed range ${range}${suffix}`);
  if (value > bounds.max) target.push(`${field}: expected <= ${formatNumber(bounds.max)}; allowed range ${range}${suffix}`);
}

function enumValuesForScalarField(field, defaultValue) {
  const name = fieldName(field);
  if (name === 'theme' && ['light', 'dark'].includes(defaultValue)) return new Set(['light', 'dark']);
  return null;
}

function isEnumFieldName(name) {
  return /^(q|key|id|type|kind|mode|variant|theme|tone|side|align|position|status|state)$/i.test(String(name || ''));
}

function isColorConfigField(field, defaultValue) {
  const name = fieldName(field);
  return isCssColorLike(defaultValue) && /^(c|color|colour|accent|fill|stroke|background|bg|tint|hex)$/i.test(name);
}

function fieldName(field) {
  return String(field || '').split('.').pop()?.replace(/\[\d+\]$/, '') || '';
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(2)));
}

export function isCssColorLike(value) {
  if (typeof value !== 'string') return false;
  const text = value.trim();
  return /^#[0-9a-fA-F]{3,8}$/.test(text)
    || /^(rgb|rgba|hsl|hsla)\(/i.test(text)
    || /^var\(--[A-Za-z0-9_-]+\)$/.test(text)
    || /^(transparent|currentColor|black|white)$/i.test(text);
}

export function describePropShapes(defaultProps = {}, keys = Object.keys(defaultProps || {})) {
  return Object.fromEntries([...new Set(keys)]
    .filter(key => Object.prototype.hasOwnProperty.call(defaultProps || {}, key))
    .map(key => [key, describeValueShape(defaultProps[key])]));
}

function describeValueShape(value) {
  if (isSerializedReactElementLike(value)) return 'string';
  if (Array.isArray(value)) {
    const objectShape = mergeObjectShape(value);
    if (objectShape) return [describeValueShape(objectShape)];
    const tuple = tupleShapeForArrayItems(value);
    if (tuple) return [tuple.items.map(describeValueShape)];
    return value.length ? [describeValueShape(value[0])] : [];
  }
  if (isPlainObject(value)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, describeValueShape(item)]));
  }
  if (value == null) return 'null';
  return typeof value;
}

function mergeObjectShape(items) {
  const objects = items.filter(isPlainObject);
  if (!objects.length) return null;
  return objects.reduce((shape, item) => mergeShape(shape, item), {});
}

function mergeShape(left, right) {
  const next = { ...(left || {}) };
  for (const [key, value] of Object.entries(right || {})) {
    if (!Object.prototype.hasOwnProperty.call(next, key)) {
      next[key] = value;
    } else {
      next[key] = mergeShapeValue(next[key], value);
    }
  }
  return next;
}

function mergeShapeValue(left, right) {
  if (Array.isArray(left) && Array.isArray(right)) return mergeObjectShape([...left, ...right]) ? [...left, ...right] : left;
  if (isPlainObject(left) && isPlainObject(right)) return mergeShape(left, right);
  // null 不压制真实类型:首项为 null 的字段(如漏斗首段 rate/conv)以后续项的实际类型为准
  if (left == null) return right;
  return left;
}

function tupleShapeForArrayItems(items) {
  const arrays = (items || []).filter(Array.isArray);
  if (!arrays.length) return null;
  const fixed = arrays.every(item => item.length === arrays[0].length);
  const length = fixed ? arrays[0].length : Math.max(...arrays.map(item => item.length));
  return {
    variable: !fixed,
    items: Array.from({ length }, (_, index) => mergeTupleItemShape(arrays.map(item => item[index]).filter(item => item !== undefined))),
  };
}

function mergeTupleItemShape(values) {
  const objects = values.filter(isPlainObject);
  if (objects.length) return mergeObjectShape(objects);
  const arrays = values.filter(Array.isArray);
  if (arrays.length) return tupleShapeForArrayItems(arrays).items;
  return values.find(item => item != null);
}

function formatExpectedKeys(keys) {
  const list = [...keys].slice(0, 8).join(', ');
  return keys.size > 8 ? `${list}, ...` : list;
}

export function isMediaArrayKey(key) {
  const value = String(key || '').toLowerCase();
  return MEDIA_ARRAY_KEYS.some(item => item.toLowerCase() === value);
}

export function isPrunedContractOmit(value) {
  return value === CONTRACT_OMIT;
}

export function pruneContractValue(value, pathName = '') {
  if (isNonContentContractValue(pathName, value)) return CONTRACT_OMIT;
  if (Array.isArray(value)) {
    const items = value
      .map(item => pruneContractValue(item, `${pathName}[]`))
      .filter(item => !isPrunedContractOmit(item));
    return items.length ? items : CONTRACT_OMIT;
  }
  if (!isPlainObject(value)) return value;
  const entries = Object.entries(value)
    .map(([key, item]) => [key, pruneContractValue(item, pathName ? `${pathName}.${key}` : key)])
    .filter(([, item]) => !isPrunedContractOmit(item));
  return entries.length ? Object.fromEntries(entries) : CONTRACT_OMIT;
}

export function isContractContentArray(pathName, value) {
  if (!Array.isArray(value) || !value.length) return false;
  if (isMediaArrayKey(pathName) || isColorArray(value) || (isNumericMatrixArray(value) && !isWritableNumericTupleArray(pathName)) || isVisualContainerPath(pathName)) return false;
  return value.some(item => !isPrunedContractOmit(pruneContractValue(item, `${pathName}[]`)));
}

function isWritableNumericTupleArray(pathName) {
  return /^(flows?|links?|edges?|relations?|connections?)$/i.test(countArrayPathField(pathName));
}

export function isNonContentContractValue(pathName, value) {
  const field = String(pathName || '').split('.').pop()?.replace(/\[\]$/, '') || '';
  if (!field) return false;
  if (isScatterPointMetricField(pathName, field, value)) return false;
  if (/axesData\[\]\.id$/i.test(String(pathName || '')) && typeof value === 'string') return false;
  if (isMediaArrayKey(field)) {
    // pins/photos 等媒体名数组:若项内没有任何媒体源字段、却带 CJK 文案(标注点文字、
    // 始终可见的照片图注),它是内容数组而非媒体数组,不整体剪(theme11 pins、theme08 photos)
    const rows = Array.isArray(value) ? value.filter(isPlainObject) : [];
    // 项内带 CJK 文本(标注文字、照片图注)即视为内容数组,不整体剪 —— 媒体源字段(src/url)
    // 由字段级黑名单单独剪除;纯媒体数组(无文本)照旧整体排除。
    const hasCjkCopy = rows.some(row => Object.entries(row).some(([k, v]) =>
      typeof v === 'string' && /[一-龥]/.test(v) && !/^(src|url|image|img|poster|video|href)$/i.test(k)));
    if (rows.length && hasCjkCopy) {
      return isColorArray(value);
    }
    if (Array.isArray(value)) return true;
    // 媒体名命中但值是单个项对象(photos[] 的递归项):交给下方对象/字段级判定,
    // 项内文本字段(caption/tag)保留、媒体源字段由字段级黑名单剪除。
    if (isPlainObject(value)) return NON_CONTENT_FIELD_PATTERN.test(field);
    return true;
  }
  if (Array.isArray(value)) return isColorArray(value) || isVisualContainerPath(pathName);
  // 数字键变体预设({1:{...},2:{...}},如 theme08 图片槽位布局)不整体剪枝:
  // 其中混有始终可见的文本字段(label/cap/tag),交给字段级递归逐项判定。
  if (isPlainObject(value)) return NON_CONTENT_FIELD_PATTERN.test(field);
  if (isColorString(value)) return true;
  if (NON_CONTENT_FIELD_PATTERN.test(field)) {
    // 字段名撞结构词但值是自然文案(theme07 kind="看好方向"、theme05 src="EXPANDED SLIDE · P61")
    const text = typeof value === 'string' ? value.trim() : '';
    const naturalCopy = /[一-龥]/.test(text) || (/\S\s+\S/.test(text) && !/^[a-z0-9_\-./:]+$/i.test(text));
    return !naturalCopy;
  }
  if (typeof value === 'number' && Number.isFinite(value) && VISUAL_NUMBER_FIELD_PATTERN.test(field)) return true;
  if (typeof value === 'boolean' && /^(show|hide|enable|enabled|visible|dark|dim|muted|active)$/i.test(field)) return true;
  return false;
}

function isScatterPointMetricField(pathName, field, value) {
  return /^points\[\]\.(x|y|r)$/i.test(String(pathName || ''))
    && /^(x|y|r)$/i.test(field)
    && typeof value === 'number'
    && Number.isFinite(value);
}

export function isPrivateDefaultRoundTrip(value, defaultValue) {
  return sameContractValue(value, defaultValue) && isNonContentContractValue('', value);
}

function isColorArray(value) {
  return Array.isArray(value) && value.length > 0 && value.every(isColorString);
}

function isNumericMatrixArray(value) {
  return Array.isArray(value)
    && value.length > 0
    && value.every(item => Array.isArray(item) && item.every(cell => typeof cell === 'number' && Number.isFinite(cell)));
}

function isColorString(value) {
  if (typeof value !== 'string') return false;
  const text = value.trim();
  return /^#[0-9a-fA-F]{3,8}$/.test(text) || /^(rgb|rgba|hsla?)\(/i.test(text);
}

function isNumericKeyedConfigObject(value) {
  if (!isPlainObject(value)) return false;
  const entries = Object.entries(value);
  return entries.length > 0
    && entries.every(([key, item]) => /^\d+$/.test(key) && (Array.isArray(item) || isPlainObject(item)));
}

function isVisualContainerPath(pathName) {
  return String(pathName || '')
    .split('.')
    .map(segment => segment.replace(/\[\]$/, ''))
    .some(segment => VISUAL_CONTAINER_FIELD_PATTERN.test(segment));
}

function sameContractValue(left, right) {
  if (left === right) return true;
  if (typeof left !== typeof right) return false;
  if (Array.isArray(left) || isPlainObject(left)) {
    try {
      return JSON.stringify(left) === JSON.stringify(right);
    } catch {
      return false;
    }
  }
  return false;
}

function inferCountArrayBindings(key, props = {}) {
  if (!String(key || '').endsWith('Count')) return [];
  const arrayKeys = discoverContractArrayPaths(props);
  if (!arrayKeys.length) return [];

  const stem = lowerFirst(String(key).slice(0, -'Count'.length));
  const candidates = buildCountArrayCandidates(stem);
  for (const candidate of candidates) {
    const exact = arrayKeys.find(propKey => propKey === candidate);
    if (exact) return [exact];
    const fieldExact = arrayKeys.find(propKey => countArrayPathField(propKey) === candidate);
    if (fieldExact) return [fieldExact];
  }

  const normalizedCandidates = new Set(candidates.map(normalizeName));
  const normalized = arrayKeys.find(propKey => (
    normalizedCandidates.has(normalizeName(propKey))
    || normalizedCandidates.has(normalizeName(countArrayPathField(propKey)))
  ));
  return normalized ? [normalized] : [];
}

function buildCountArrayCandidates(stem) {
  const explicit = {
    agenda: ['agenda', 'items'],
    annotation: ['annotations'],
    asset: ['assets'],
    axis: ['axes'],
    block: ['blocks'],
    branch: ['branches'],
    bubble: ['bubbles'],
    cat: ['categories', 'data'],
    category: ['categories'],
    chain: ['chains', 'chain'],
    conclusion: ['conclusions', 'points'],
    criterion: ['criteria'],
    dim: ['dims', 'dimensions'],
    dimension: ['dimensions', 'dims'],
    exp: ['experiences'],
    factor: ['factors'],
    feature: ['features'],
    field: ['fields'],
    flowStage: ['flow', 'stages'],
    frame: ['frames', 'media'],
    funnelStage: ['funnel', 'stages'],
    group: ['groups', 'layers'],
    image: ['images', 'media'],
    imageSlot: ['images', 'imageSlots', 'media'],
    img: ['images', 'imgs', 'media'],
    info: ['infoList', 'infos'],
    lab: ['labs'],
    leaf: ['leaves', 'branches'],
    line: ['lines'],
    logo: ['logos', 'images'],
    media: ['media', 'images'],
    mediaSlot: ['images', 'media', 'imageSlots'],
    member: ['members', 'avatars', 'media'],
    menuItem: ['menu', 'items'],
    meta: ['meta'],
    objective: ['objectives'],
    petal: ['petals', 'items'],
    photo: ['photos', 'media', 'images'],
    region: ['regions', 'data'],
    ring: ['rings'],
    scene: ['scenes'],
    secondary: ['secondaries'],
    set: ['sets'],
    skill: ['skills'],
    specRow: ['specs'],
    stack: ['stacks', 'stackLabels', 'items'],
    takeaway: ['takeaways'],
    task: ['tasks'],
    thumb: ['thumbs', 'images'],
    listItem: ['items'],
    timelineNode: ['timeline'],
    track: ['tracks', 'media'],
  };
  return [
    stem,
    pluralize(stem),
    `${stem}List`,
    `${stem}Items`,
    ...(explicit[stem] || []),
  ];
}

function discoverContractArrayPaths(value, prefix = '') {
  if (Array.isArray(value)) {
    const paths = prefix && (isMediaArrayKey(countArrayPathField(prefix)) || isContractContentArray(prefix, value)) ? [prefix] : [];
    for (const item of value) {
      if (isPlainObject(item)) paths.push(...discoverContractArrayPaths(item, `${prefix}[]`));
    }
    return paths;
  }
  if (!isPlainObject(value)) return [];
  return Object.entries(value).flatMap(([key, item]) => (
    discoverContractArrayPaths(item, prefix ? `${prefix}.${key}` : key)
  ));
}

function countArrayPathField(pathName) {
  return String(pathName || '').split('.').at(-1).replace(/\[\]$/, '');
}

function lowerFirst(value) {
  return value ? value[0].toLowerCase() + value.slice(1) : value;
}

function pluralize(value) {
  if (!value) return value;
  if (value.endsWith('y')) return `${value.slice(0, -1)}ies`;
  if (value.endsWith('s')) return value;
  return `${value}s`;
}

function normalizeName(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function normalizeControls(page) {
  if (page.spec?.controls) {
    const defaults = {};
    page.spec.controls.forEach(control => {
      if (control.prop) defaults[control.prop] = control.default;
    });
    return normalizePublicControls(page.spec.controls.filter(control => !isRemovedControl(control, page.themeKey)).map(control => normalizeControl({
      key: control.prop,
      label: control.label,
      desc: control.desc || control.description || control.describe,
      type: control.type,
      defaultValue: control.default,
      min: control.min,
      max: control.max,
      step: control.step,
      options: control.options,
      countKey: control.countKey,
      countIndex: control.countIndex,
      countArrays: control.countArrays,
      maxFromKey: control.maxFromKey,
      maxFromKeyOffset: control.maxFromKeyOffset,
      maxByKey: control.maxByKey,
      maxByValue: control.maxByValue,
      displayOffset: control.displayOffset,
      display: control.display,
      mediaSlots: control.mediaSlots,
      dependsOn: control.dependsOn,
      dependsOnValue: control.dependsOnValue,
      dependsOnValues: control.dependsOnValues,
    }, defaults)), { layout: page.key, themeKey: page.themeKey });
  }

  return normalizePublicControls((page.controls || []).filter(control => !isRemovedControl(control, page.themeKey)).map(control => normalizeControl({
    key: control.key || control.prop,
    label: control.label,
    desc: control.desc || control.description || control.describe,
    type: control.type,
    defaultValue: control.default ?? control.def,
    min: control.min,
    max: control.max,
    step: control.step,
    options: control.options,
    countKey: control.countKey,
    countIndex: control.countIndex,
    countArrays: control.countArrays,
    maxFromKey: control.maxFromKey,
    maxFromKeyOffset: control.maxFromKeyOffset,
    maxByKey: control.maxByKey,
    maxByValue: control.maxByValue,
    displayOffset: control.displayOffset,
    display: control.display,
    mediaSlots: control.mediaSlots,
    dependsOn: control.dependsOn,
    dependsOnValue: control.dependsOnValue,
    dependsOnValues: control.dependsOnValues,
  }, page.defaultProps || {})), { layout: page.key, themeKey: page.themeKey });
}

function isRemovedControl(control, themeKey) {
  if (themeKey === 'theme04') return false;
  return REMOVED_CONTROL_TYPES.has(String(control?.type || '').toLowerCase());
}

function normalizeControl(control, defaults) {
  return {
    key: control.key,
    label: control.label || control.key,
    type: normalizeControlType(control.type),
    default: serializeValue(control.defaultValue),
    min: resolveControlValue(control.min, defaults),
    max: resolveControlValue(control.max, defaults),
    step: serializeValue(control.step),
    options: normalizeControlOptions(serializeValue(control.options)),
    countKey: serializeValue(control.countKey),
    countIndex: serializeValue(control.countIndex),
    countArrays: serializeValue(control.countArrays),
    maxFromKey: serializeValue(control.maxFromKey),
    maxFromKeyOffset: serializeValue(control.maxFromKeyOffset),
    maxByKey: serializeValue(control.maxByKey),
    maxByValue: serializeValue(control.maxByValue),
    displayOffset: serializeValue(control.displayOffset),
    display: serializeValue(control.display),
    mediaSlots: serializeValue(control.mediaSlots),
    dependsOn: serializeValue(control.dependsOn),
    dependsOnValue: serializeValue(control.dependsOnValue),
    dependsOnValues: serializeValue(control.dependsOnValues),
    desc: control.desc,
  };
}

function normalizeCountArrays(value) {
  if (typeof value === 'string' && value) return [value];
  if (Array.isArray(value)) return value.filter(item => typeof item === 'string' && item);
  return null;
}

function isBooleanControl(control) {
  return control?.type === 'toggle' || typeof control?.default === 'boolean';
}

function normalizeControlType(type) {
  if (type === 'slider' || type === 'number') return 'range';
  if (type === 'icons') return 'icons';
  if (type === 'images') return 'images';
  if (type === 'radio' || type === 'enum' || type === 'labelType' || type === 'segment' || type === 'color' || type === 'palette') return 'select';
  if (type === 'focus' || type === 'boolean') return 'toggle';
  return type || 'range';
}

export function deriveCount(props, binding) {
  if (binding.key === 'phaseCount') return derivePhaseCount(props);

  const counts = binding.arrays.flatMap(key => collectArrayCounts(props, key));

  if (!counts.length) return null;
  if (binding.arrays.some(isNestedArrayPath)) return collapseNestedCounts(counts);
  return collapseCounts(counts);
}

function collectArrayCounts(value, pathName, sourcePrefix = '') {
  if (!value || typeof value !== 'object') return [];
  const [segment, ...restParts] = String(pathName || '').split('.');
  const rest = restParts.join('.');
  const arraySegment = segment.endsWith('[]');
  const key = arraySegment ? segment.slice(0, -2) : segment;
  const next = value[key];
  const source = sourcePrefix ? `${sourcePrefix}.${key}` : key;

  if (arraySegment) {
    if (!Array.isArray(next)) return [];
    if (!rest) return [{ source, count: next.length }];
    return next.flatMap((item, index) => collectArrayCounts(item, rest, `${source}[${index}]`));
  }

  if (!rest) {
    return Array.isArray(next) ? [{ source, count: next.length }] : [];
  }
  return collectArrayCounts(next, rest, source);
}

function validateLengthBindings(props = {}, defaults = {}, lengthBindings = [], errors = []) {
  for (const binding of lengthBindings || []) {
    if ((binding.relation || 'same-length') !== 'same-length') continue;
    const anchor = firstArrayCount(props, binding.anchor) ?? firstArrayCount(defaults, binding.anchor);
    if (anchor == null) continue;
    const dependents = collectArrayCounts(props, binding.dependent);
    for (const dependent of dependents) {
      if (dependent.count !== anchor.count) {
        errors.push(`${dependent.source} 的数量 ${dependent.count} 必须等于 ${anchor.source} 的数量 ${anchor.count}`);
      }
    }
  }
}

function firstArrayCount(source, pathName) {
  return collectArrayCounts(source, pathName)[0] || null;
}

function validateControlRanges(props = {}, controls = [], countBindings = [], defaults = {}, errors = []) {
  const countKeys = new Set((countBindings || []).map(binding => binding.key));
  for (const control of controls || []) {
    if (!control?.key || countKeys.has(control.key)) continue;
    if (!isNumericRangeControl(control)) continue;
    if (!Object.prototype.hasOwnProperty.call(props, control.key)) continue;
    const value = Number(props[control.key]);
    if (!Number.isFinite(value)) {
      errors.push(`${control.key} 不是有效数字`);
      continue;
    }
    validateCountRange(control, value, control.key, errors, { props, defaults });
  }
}

function isNumericRangeControl(control) {
  const type = String(control?.type || '').toLowerCase();
  if (['number', 'range', 'slider'].includes(type)) return true;
  // A segment/select control with an explicit option list is only "numeric" if
  // every option it offers is actually a number — e.g. a `columns` control
  // whose options mix 1 | 2 | 'grid' must not be range-validated as a plain
  // number just because its default happens to be numeric.
  if (hasNonNumericControlOption(control)) return false;
  return typeof control?.default === 'number' || control?.min !== undefined || control?.max !== undefined || control?.maxFromKey || control?.maxByKey;
}

function hasNonNumericControlOption(control) {
  const options = Array.isArray(control?.options) ? control.options : [];
  if (!options.length) return false;
  return options.some(option => typeof option?.value !== 'number');
}

function isNestedArrayPath(pathName) {
  return String(pathName || '').includes('[].');
}

function derivePhaseCount(props) {
  const counts = [];
  if (Array.isArray(props.phases)) counts.push({ source: 'phases', count: props.phases.length });
  if (Array.isArray(props.lanes)) {
    props.lanes.forEach((lane, index) => {
      if (Array.isArray(lane?.items)) {
        counts.push({ source: `lanes[${index}].items`, count: lane.items.length });
      }
    });
  }
  if (!counts.length) return null;
  return collapseCounts(counts);
}

function collapseCounts(counts) {
  const unique = [...new Set(counts.map(item => item.count))];
  if (unique.length > 1) {
    return {
      error: counts.map(item => `${item.source}=${item.count}`).join(', ') + ' 数量不一致',
    };
  }
  return {
    count: unique[0],
    source: counts.map(item => item.source).join('/'),
  };
}

function collapseNestedCounts(counts) {
  return {
    count: Math.min(...counts.map(item => item.count)),
    source: counts.map(item => `${item.source}=${item.count}`).join('/'),
  };
}

function validateCountRange(binding, count, source, errors, context = null) {
  const min = Number(binding.min);
  const max = resolveRangeMax(binding, context);
  if (Number.isFinite(min) && count < min) {
    errors.push(`${source} 的数量 ${count} 小于 ${binding.key} 最小值 ${min}`);
  }
  if (Number.isFinite(max) && count > max) {
    errors.push(`${source} 的数量 ${count} 大于最大值 ${max}`);
  }
}

function resolveRangeMax(binding, context = null) {
  const maxByValue = resolveMaxByValue(binding, context);
  if (Number.isFinite(maxByValue)) return maxByValue;
  const maxFromKey = resolveMaxFromKey(binding, context);
  if (Number.isFinite(maxFromKey)) return maxFromKey;
  return Number(binding.max);
}

function resolveMaxByValue(binding, context = null) {
  if (!binding?.maxByKey || !isPlainObject(binding.maxByValue)) return NaN;
  const sourceValue = rangeSourceValue(binding.maxByKey, context);
  if (sourceValue === undefined) return NaN;
  if (!Object.prototype.hasOwnProperty.call(binding.maxByValue, sourceValue)) return NaN;
  return Number(binding.maxByValue[sourceValue]);
}

function resolveMaxFromKey(binding, context = null) {
  if (!binding?.maxFromKey) return NaN;
  const source = Number(rangeSourceValue(binding.maxFromKey, context));
  if (!Number.isFinite(source)) return NaN;
  const offset = Number(binding.maxFromKeyOffset ?? 0);
  const max = source + (Number.isFinite(offset) ? offset : 0);
  const min = Number(binding.min);
  return Number.isFinite(min) ? Math.max(min, max) : max;
}

function rangeSourceValue(key, context = null) {
  if (!key || !context) return undefined;
  const props = context.props || {};
  if (Object.prototype.hasOwnProperty.call(props, key)) return props[key];
  const defaults = context.defaults || {};
  if (Object.prototype.hasOwnProperty.call(defaults, key)) return defaults[key];
  return undefined;
}

function resolveControlValue(value, defaults) {
  if (typeof value === 'function') return serializeValue(value(defaults));
  return serializeValue(value);
}

export function serializeValue(value) {
  // 数值统一 12 位有效数字:Math.sin/cos 生成的 defaults 在 macOS/Linux libm 上
  // 最后一位 ulp 不同,会让生成物平台不确定(CI committed-artifacts 校验失败)。
  if (typeof value === 'number') return Number.isFinite(value) ? Number(value.toPrecision(12)) : value;
  if (value == null || ['string', 'boolean'].includes(typeof value)) return value;
  if (isSerializedReactElementLike(value)) return reactElementText(value);
  if (Array.isArray(value)) return value.map(serializeValue);
  if (typeof value !== 'object') return undefined;
  return Object.fromEntries(
    Object.entries(value)
      .map(([key, item]) => [key, serializeValue(item)])
      .filter(([, item]) => item !== undefined),
  );
}

export function isSerializedReactElementLike(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  if (!value.props || typeof value.props !== 'object') return false;
  return Object.prototype.hasOwnProperty.call(value, 'type')
    || Object.prototype.hasOwnProperty.call(value, 'ref')
    || Object.prototype.hasOwnProperty.call(value, 'key')
    || Object.prototype.hasOwnProperty.call(value, '_owner')
    || Object.prototype.hasOwnProperty.call(value, '_store');
}

export function reactElementText(value) {
  if (value == null || value === false) return '';
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  if (Array.isArray(value)) return value.map(reactElementText).join('');
  if (!value || typeof value !== 'object') return '';
  if (String(value.type || '').toLowerCase() === 'br') return '\n';
  if (isSerializedReactElementLike(value)) return reactElementText(value.props?.children);
  return '';
}
