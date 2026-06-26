import {
  normalizeControlOptions,
  normalizeControlValue,
  normalizePublicControls,
  resolvePublicPropAliases,
} from './control-naming.mjs';

const REMOVED_CONTROL_TYPES = new Set(['text', 'string', 'input', 'url', 'email', 'textarea', 'multiline']);

export const COUNT_ARRAY_BINDINGS = {
  barCount: ['bars'],
  calloutCount: ['callouts'],
  cardCount: ['cards'],
  chipCount: ['chips'],
  colCount: ['columns', 'cols'],
  columnCount: ['columns', 'plans'],
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
  rowCount: ['rows', 'features'],
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

export function normalizeSlidePropsForContract(layout, props = {}, contract = null) {
  const aliasResult = contract ? resolvePublicPropAliases(props, contract.controls) : { props: props || {} };
  const authoredProps = aliasResult.props || {};
  const authoredCounts = deriveAuthoredCounts(authoredProps, contract?.countBindings || []);
  const shapeErrors = contract ? validateAuthoredPropShape(authoredProps, contract.defaultProps) : [];
  const next = contract ? mergeDefaultArrayProps(authoredProps, contract) : { ...authoredProps };
  if (contract) applyMediaBackgroundMode(next, authoredProps, contract);
  if (!contract) return next;

  const errors = [...shapeErrors];
  for (const binding of contract.countBindings) {
    const derived = deriveCount(next, binding);
    if (!derived) continue;

    if (derived.error) {
      errors.push(derived.error);
      continue;
    }

    const current = next[binding.key];
    if (current == null || current === '') {
      next[binding.key] = authoredCounts.get(binding.key) ?? derived.count;
      validateCountRange(binding, next[binding.key], binding.key, errors);
      continue;
    }

    const currentNumber = Number(current);
    if (!Number.isFinite(currentNumber)) {
      errors.push(`${binding.key} 不是有效数字`);
    } else {
      validateCountRange(binding, currentNumber, binding.key, errors);
      if (currentNumber > derived.count) {
        errors.push(`${binding.key}=${currentNumber},但 ${derived.source} 只有 ${derived.count} 条`);
      }
    }
  }

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
  const countBindings = controls
    .filter(control => !isBooleanControl(control))
    .map(control => ({
      control,
      arrays: normalizeCountArrays(control.countArrays) || COUNT_ARRAY_BINDINGS[control.key] || inferCountArrayBindings(control.key, defaultProps),
    }))
    .filter(item => item.arrays.length)
    .map(({ control, arrays }) => ({
      key: control.key,
      publicKey: control.publicKey || control.key,
      label: control.label || control.publicLabel || control.key,
      arrays,
      min: control.min,
      max: control.max,
    }));

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
    propShapes: describePropShapes(defaultProps),
  };
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
  const arrays = COUNT_ARRAY_BINDINGS[control.key] || inferCountArrayBindings(control.key, defaultProps);
  if (!arrays.length || arrays.some(isMediaCountPath)) return null;
  const counts = arrays.flatMap(pathName => collectArrayCounts(defaultProps, pathName).map(item => item.count));
  if (!counts.length) return null;
  return Math.min(...counts);
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

function mergeDefaultArrayProps(props, contract) {
  const next = { ...(props || {}) };
  const defaults = contract.defaultProps || {};
  for (const [arrayKey, value] of Object.entries(props || {})) {
    if (!Array.isArray(value) || !Array.isArray(defaults[arrayKey])) continue;
    if (isMediaArrayKey(arrayKey)) continue;
    next[arrayKey] = mergeArrayWithDefaultTail(value, defaults[arrayKey]);
  }
  return next;
}

function mergeArrayWithDefaultTail(items, defaults) {
  if (items.length >= defaults.length) {
    return items.map((item, index) => mergeArrayItem(defaults[index], item));
  }
  return [
    ...items.map((item, index) => mergeArrayItem(defaults[index], item)),
    ...defaults.slice(items.length).map(item => neutralizeDefaultCopy(item)),
  ];
}

function mergeArrayItem(defaultItem, item) {
  if (isPlainObject(defaultItem) && isPlainObject(item)) {
    return mergePlainObject(defaultItem, item);
  }
  return item;
}

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function mergePlainObject(defaultValue, value) {
  const next = { ...defaultValue };
  for (const [key, item] of Object.entries(value || {})) {
    if (Array.isArray(item) && Array.isArray(defaultValue?.[key]) && !isMediaArrayKey(key)) {
      next[key] = mergeArrayWithDefaultTail(item, defaultValue[key]);
    } else if (isPlainObject(item) && isPlainObject(defaultValue?.[key])) {
      next[key] = mergePlainObject(defaultValue[key], item);
    } else {
      next[key] = item;
    }
  }
  return next;
}

function applyMediaBackgroundMode(props, authoredProps, contract) {
  if (Object.prototype.hasOwnProperty.call(authoredProps || {}, 'backgroundMode')) return;
  if (!Object.prototype.hasOwnProperty.call(contract.defaultProps || {}, 'backgroundMode')) return;
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
  return publicContract;
}

export function validateAuthoredPropShape(props = {}, defaults = {}) {
  const errors = [];
  for (const [key, value] of Object.entries(props || {})) {
    if (isMediaArrayKey(key)) continue;
    if (!Object.prototype.hasOwnProperty.call(defaults || {}, key)) continue;
    validateValueShape(value, defaults[key], `props.${key}`, errors);
  }
  return errors;
}

function validateValueShape(value, defaultValue, field, errors) {
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

  if (Array.isArray(defaultValue)) {
    if (!Array.isArray(value)) {
      errors.push(`${field}: expected array`);
      return;
    }
    const shape = mergeObjectShape(defaultValue);
    if (!shape) return;
    value.forEach((item, index) => {
      if (!isPlainObject(item)) {
        errors.push(`${field}[${index}]: expected object item`);
        return;
      }
      validateObjectShape(item, shape, `${field}[${index}]`, errors);
    });
    return;
  }

  if (isPlainObject(defaultValue)) {
    if (!isPlainObject(value)) {
      errors.push(`${field}: expected object`);
      return;
    }
    validateObjectShape(value, defaultValue, field, errors);
  }
}

function validateObjectShape(value, shape, field, errors) {
  const allowed = new Set(Object.keys(shape || {}));
  for (const [key, item] of Object.entries(value || {})) {
    if (!allowed.has(key)) {
      errors.push(`${field}.${key}: unknown nested prop; expected ${formatExpectedKeys(allowed)}`);
      continue;
    }
    validateValueShape(item, shape[key], `${field}.${key}`, errors);
  }
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
  return left;
}

function formatExpectedKeys(keys) {
  const list = [...keys].slice(0, 8).join(', ');
  return keys.size > 8 ? `${list}, ...` : list;
}

function isMediaArrayKey(key) {
  return /^(images|media|photos|pictures|logos|thumbs|imageSlots|imgs)$/i.test(String(key || ''));
}

function inferCountArrayBindings(key, props = {}) {
  if (!String(key || '').endsWith('Count')) return [];
  const arrayKeys = Object.keys(props || {}).filter(propKey => Array.isArray(props[propKey]));
  if (!arrayKeys.length) return [];

  const stem = lowerFirst(String(key).slice(0, -'Count'.length));
  const candidates = buildCountArrayCandidates(stem);
  for (const candidate of candidates) {
    const exact = arrayKeys.find(propKey => propKey === candidate);
    if (exact) return [exact];
  }

  const normalizedCandidates = new Set(candidates.map(normalizeName));
  const normalized = arrayKeys.find(propKey => normalizedCandidates.has(normalizeName(propKey)));
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
    conclusion: ['conclusions'],
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
    member: ['members', 'avatars', 'media'],
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
    stack: ['stacks', 'stackLabels', 'items'],
    takeaway: ['takeaways'],
    task: ['tasks'],
    thumb: ['thumbs', 'images'],
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
    return normalizePublicControls(page.spec.controls.filter(control => !isRemovedControl(control)).map(control => normalizeControl({
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
      dependsOn: control.dependsOn,
      dependsOnValue: control.dependsOnValue,
      dependsOnValues: control.dependsOnValues,
    }, defaults)), { layout: page.key, themeKey: page.themeKey });
  }

  return normalizePublicControls((page.controls || []).filter(control => !isRemovedControl(control)).map(control => normalizeControl({
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
    dependsOn: control.dependsOn,
    dependsOnValue: control.dependsOnValue,
    dependsOnValues: control.dependsOnValues,
  }, page.defaultProps || {})), { layout: page.key, themeKey: page.themeKey });
}

function isRemovedControl(control) {
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

function deriveCount(props, binding) {
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

function validateCountRange(binding, count, source, errors) {
  const min = Number(binding.min);
  const max = Number(binding.max);
  if (Number.isFinite(min) && count < min) {
    errors.push(`${source} 的数量 ${count} 小于 ${binding.key} 最小值 ${min}`);
  }
  if (Number.isFinite(max) && count > max) {
    errors.push(`${source} 的数量 ${count} 大于最大值 ${max}`);
  }
}

function resolveControlValue(value, defaults) {
  if (typeof value === 'function') return serializeValue(value(defaults));
  return serializeValue(value);
}

export function serializeValue(value) {
  if (value == null || ['string', 'number', 'boolean'].includes(typeof value)) return value;
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
