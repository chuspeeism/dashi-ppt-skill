// @ts-check
// inspect + fillPlan 域:inspectLayout/normalizeProps 契约装配,数组元数据与 fillPlan 生成。
import { getDecorativeKeys } from '../../src/components/themes/decorative-overrides.mjs';
import {
  resolvePublicPropAliases,
  toPublicProps,
} from '../../src/control-naming.mjs';
import {
  explicitNumberBoundsForArrayKey,
  isContractContentArray,
  isMediaArrayKey,
  isNonContentContractValue,
  isPrivateDefaultRoundTrip,
  isPrunedContractOmit,
  isSerializedReactElementLike,
  normalizeSlidePropsForContract,
  numberBoundsForArrayItems,
  pruneContractValue,
  validateNumberBounds,
} from '../../src/prop-contract-core.mjs';
import {
  arrayFieldName,
  discoverContentArrayPaths,
  getLayoutRecord,
  getThemePackMetadata,
  isCoverCandidate,
  isPlainObject,
  normalizeName,
  resolveBindingArrays,
  singularFieldName,
  themeDisplayName,
  valueAtPath,
} from './theme-registry.mjs';
import {
  getMediaSlots,
  isMediaCountControl,
  looksLikeVideoSrc,
  mediaSlotCapacity,
  mimeForMediaSource,
  normalizeMediaKind,
  typedMediaItemForSource,
} from './media-slots.mjs';
import {
  buildCopyRoles,
  copyRoleForField,
  expandCopyKeys,
  getCopyBudgets,
  getCopyKeyRoots,
  isColorArray,
  isColorString,
  isFillableCopyLeaf,
  isMetricFieldName,
  pathFieldName,
} from './copy-contract.mjs';

export const ROLE_KEYWORDS = {
  // 模糊意图词(批测高频):宽命中到所有数据/汇报类版式。
  data: ['metric', 'stat', 'number', 'chart', 'trend', 'curve', 'rank', 'waterfall', 'donut', 'heatmap', 'matrix', 'funnel', 'monthly', 'deal', 'ticket', '指标', '数据', '图表', '排行', '走势', '占比'],
  report: ['market', 'context', 'industry', 'metric', 'stat', 'overview', 'summary', 'monthly', 'outlook', '全景', '背景', '行业', '指标', '汇报', '总览', '展望'],
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

export const NEUTRAL_PLACEHOLDERS = ['请输入文本', '请输入', '请输'];

function buildFillablePropShapes(defaultProps = {}, copyKeys = [], roots = []) {
  const rootFilter = roots?.length ? new Set(roots.map(rootPropKey)) : null;
  const shapes = {};
  const rootKeys = rootFilter ? [...rootFilter] : Object.keys(defaultProps || {});
  for (const root of rootKeys) {
    if (!Object.prototype.hasOwnProperty.call(defaultProps || {}, root)) continue;
    const shape = fillableValueShape(defaultProps[root], root);
    if (shape == null) continue;
    shapes[root] = shape;
  }
  for (const key of copyKeys || []) {
    if (String(key).endsWith('[][]')) continue; // 元组路径:root 已建 [[...]] 形状,扁平展开会产生脏键
    const root = rootPropKey(key);
    if (rootFilter && !rootFilter.has(root)) continue;
    const type = simpleValueType(sampleValueForCopyPath(defaultProps, key));
    if (type === 'array' || type === 'object') continue;
    assignPropShape(shapes, String(key).split('.').filter(Boolean), type);
  }
  return shapes;
}

function fillableValueShape(value, pathName) {
  if (Array.isArray(value)) {
    const shape = fillPlanArrayValueShape(value, pathName);
    return shape.length ? shape : null;
  }
  if (isPlainObject(value)) {
    const shape = fillableObjectShape(value, pathName);
    return Object.keys(shape).length ? shape : null;
  }
  return isFillableCopyLeaf(pathName, value) ? simpleValueType(value) : null;
}

function sampleValueForCopyPath(defaultProps, pathName) {
  const value = valuesForPattern(defaultProps, pathName);
  return Array.isArray(value) ? value.find(item => item != null) : value;
}

function assignPropShape(target, parts, leafShape) {
  if (!parts.length) return;
  const [part, ...rest] = parts;
  const arrayPart = part.endsWith('[]');
  const key = arrayPart ? part.slice(0, -2) : part;
  if (!key) return;
  if (arrayPart) {
    if (!rest.length) {
      target[key] = mergePropShape(target[key], [leafShape]);
      return;
    }
    const current = Array.isArray(target[key]) && isPlainObject(target[key][0]) ? target[key][0] : {};
    target[key] = [current];
    assignPropShape(current, rest, leafShape);
    return;
  }
  if (!rest.length) {
    target[key] = mergePropShape(target[key], leafShape);
    return;
  }
  if (!isPlainObject(target[key])) target[key] = {};
  assignPropShape(target[key], rest, leafShape);
}

function mergePropShape(left, right) {
  if (left == null) return right;
  if (Array.isArray(left) && Array.isArray(right)) return [mergePropShape(left[0], right[0])];
  if (isPlainObject(left) && isPlainObject(right)) {
    const next = { ...left };
    for (const [key, value] of Object.entries(right)) next[key] = mergePropShape(next[key], value);
    return next;
  }
  return left;
}

export function inspectLayout(layout, { compact = false } = {}) {
  const record = getLayoutRecord(layout);
  if (!record) return null;
  const { page, contract, controls, countBindings, lengthBindings } = record;
  const defaultProps = effectiveInspectDefaultProps(record.defaultProps, page);
  const theme = getThemePackMetadata(page.themeKey);
  const controlKeys = controls.map(control => control.key).filter(Boolean);
  const publicControls = controls.map(publicControl);
  const publicControlKeys = publicControls.map(control => control.publicKey).filter(Boolean);
  const mediaSlots = getMediaSlots(record);
  const decorativeKeys = getDecorativeKeys(page.key);
  // copyKeyRoots:顶层文案根(对象 copy 仍是单键),用于 propShapes/copyBudgets 的递归。
  const copyKeyRoots = getCopyKeyRoots(defaultProps, controls, mediaSlots, decorativeKeys);
  // JAD-212:copyKeys 扁平化(对象 copy 展开成 copy.eyebrow / copy.points[].t),与扁平主题形态一致。
  const copyKeys = expandCopyKeys(defaultProps, copyKeyRoots);
  const arrayKeys = getArrayKeys(defaultProps, mediaSlots);
  const copyBudgets = getCopyBudgets(defaultProps, copyKeyRoots);
  // count 绑定解析到真实数组键(修正 items/stats/data 等静态错配)。
  const resolvedBindings = (countBindings || []).map(binding => ({ ...binding, arrays: resolveBindingArrays(binding, defaultProps, controls) }));
  // propShapes 提前算出,供 arrayMeta 过滤掉未进入可填契约的私有视觉字段(如颜色)。
  const propShapesForArrayMeta = buildFillablePropShapes(defaultProps, copyKeys, [...copyKeyRoots, ...arrayKeys]);
  // JAD-213:arrayMeta 含语义 role;JAD-212:覆盖 copy 内数组并匹配其 count 控件。
  const arrayMeta = buildArrayMeta(defaultProps, countBindings, controls, { withItemRoles: true, propShapes: propShapesForArrayMeta });
  const copyRoles = buildCopyRoles(copyKeys);
  const fieldContracts = buildFieldContracts({ copyKeys, copyRoles, arrayMeta, decorativeKeys, mediaSlots });
  const fillPlan = buildFillPlan({ copyKeys, copyBudgets, copyRoles, arrayMeta, mediaSlots, defaultProps, controls, countBindings, lengthBindings, numberBoundsConfig: contract?.numberBounds });
  const propShapes = propShapesForArrayMeta;
  // JAD-212:正文全由组件硬编码(count 指向的数组缺席且无可填正文)时标记 contentLocked。
  const contentLockedReason = detectContentLocked({ copyKeys, copyRoles, arrayMeta, resolvedBindings, defaultProps });
  const palette = paletteColorsForLayout(defaultProps);
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
    copyRoles,
    fieldContracts,
    fillPlan,
    ...(decorativeKeys.length ? { decorativeKeys } : {}),
    ...(contentLockedReason ? { contentLocked: true, contentLockedReason } : {}),
    arrayKeys,
    arrayMeta,
    lengthBindings,
    ...(palette ? { paletteColors: palette } : {}),
    mediaSlots,
    countBindings: resolvedBindings,
    controls: publicControls,
    controlKeys,
    publicControlKeys,
    defaultVisibleCounts,
  };

  if (compact) {
    const compactArrayMeta = arrayMeta.map(({ itemRoles, ...rest }) => rest);
    return {
      layout: base.layout,
      theme: base.theme,
      themeDisplayName: base.themeDisplayName,
      themeScenario: base.themeScenario,
      themeAudience: base.themeAudience,
      pageNumber: base.pageNumber,
      label: base.label,
      slot: base.slot,
      roles: base.roles,
      copyKeys: base.copyKeys,
      copyBudgets: compactInspectCopyBudgets(base.copyBudgets),
      copyRoles: base.copyRoles,
      fieldContracts: base.fieldContracts.map(compactInspectFieldContract).filter(Boolean),
      fillPlan: base.fillPlan,
      ...(decorativeKeys.length ? { decorativeKeys } : {}),
      ...(contentLockedReason ? { contentLocked: true, contentLockedReason } : {}),
      arrayKeys: base.arrayKeys.slice(0, 8),
      arrayMeta: compactArrayMeta,
      lengthBindings: base.lengthBindings,
      ...(palette ? { paletteColors: palette } : {}),
      propShapes,
      mediaSlots: base.mediaSlots.map(compactMediaSlot),
      countBindings: base.countBindings.map(compactCountBinding),
      controls: base.controls,
      defaultVisibleCounts: base.defaultVisibleCounts,
    };
  }

  return {
    ...base,
    propShapes,
    allowedPropKeys: [...allowedPropKeySet(record, mediaSlots, decorativeKeys)].sort(),
    allowedPublicPropKeys: [...allowedPublicPropKeySet(record, mediaSlots, decorativeKeys)].sort(),
  };
}

function compactInspectCopyBudgets(copyBudgets = {}) {
  return Object.fromEntries(Object.entries(copyBudgets || {}).map(([key, budget]) => [
    key,
    budget?.maxChars ? { maxChars: budget.maxChars } : budget,
  ]));
}

function compactInspectFieldContract(contract) {
  if (!contract) return null;
  if (contract.role === 'eyebrow') return null;
  if (contract.role !== 'media') return contract;
  const {
    acceptedKinds,
    acceptedKindsSource,
    defaultCount,
    canPresetMedia,
    ...compact
  } = contract;
  return compact;
}

function effectiveInspectDefaultProps(defaultProps = {}, page = {}) {
  const flows = flowRowsFromMatrix(defaultProps);
  if (!flows) return defaultProps;
  return { ...defaultProps, flows };
}

function flowRowsFromMatrix(defaultProps = {}) {
  if (!Array.isArray(defaultProps.sources) || !Array.isArray(defaultProps.sectors) || !Array.isArray(defaultProps.matrix)) return null;
  if (!defaultProps.matrix.every(row => Array.isArray(row))) return null;
  const rows = [];
  defaultProps.matrix.forEach((row, sourceIndex) => {
    row.forEach((value, sectorIndex) => {
      const amount = Number(value);
      if (!Number.isFinite(amount) || amount <= 0) return;
      const source = defaultProps.sources[sourceIndex];
      const sector = defaultProps.sectors[sectorIndex];
      if (!source?.name || !sector?.name) return;
      rows.push({ from: source.name, to: sector.name, value: amount });
    });
  });
  return rows.length ? rows : null;
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
  const unknownWarnings = unknownPropKeys(record, props).map(key => unknownPropWarning(record, key));
  const mediaSlots = getMediaSlots(record);
  try {
    const authoredShape = validateAuthoredFillableProps(aliasResult.props, record, mediaSlots);
    if (authoredShape.errors.length) {
      throw new Error(`Slide props mismatch for "${layout}": ${authoredShape.errors.join('; ')}`);
    }
    const warnings = [...unknownWarnings, ...authoredShape.warnings];
    const propsWithAuthoredMediaCounts = backfillMediaCountKeys(props, mediaSlots);
    const propsWithCountSafety = normalizeSlidePropsForContract(layout, propsWithAuthoredMediaCounts, record.contract);
    const propsWithDefaults = mergeDefaultArrayTails(propsWithCountSafety, record.defaultProps, aliasResult.props, record.countBindings);
    const mediaResult = normalizeMediaItems(propsWithDefaults, mediaSlots);
    const propsWithMedia = mediaResult.props;
    const placeholderErrors = visibleNeutralPlaceholderErrors(record, propsWithMedia, aliasResult.props);
    return {
      props: propsWithMedia,
      publicProps: toPublicProps(propsWithMedia, record.controls),
      appliedAliases: aliasResult.appliedAliases,
      warnings,
      errors: [...mediaResult.errors, ...placeholderErrors],
    };
  } catch (error) {
    return {
      props: props || {},
      publicProps: toPublicProps(props || {}, record.controls),
      appliedAliases: aliasResult.appliedAliases,
      warnings: unknownWarnings,
      errors: [publicErrorMessage(error.message, record.controls)],
    };
  }
}

function validateAuthoredFillableProps(props = {}, record, mediaSlots = getMediaSlots(record)) {
  const decorativeKeys = getDecorativeKeys(record.page.key);
  const copyKeyRoots = getCopyKeyRoots(record.defaultProps, record.controls, mediaSlots, decorativeKeys);
  const copyKeys = expandCopyKeys(record.defaultProps, copyKeyRoots);
  const arrayKeys = getArrayKeys(record.defaultProps, mediaSlots);
  const propShapes = buildFillablePropShapes(record.defaultProps, copyKeys, [...copyKeyRoots, ...arrayKeys]);
  const allowedNestedArrays = new Set(
    buildArrayMeta(record.defaultProps, record.countBindings, record.controls)
      .map(meta => meta.key)
      .filter(isNestedArrayPath),
  );
  const countBoundLengths = countBoundLengthsForProps(props, record.countBindings);
  const countBoundPaths = new Set((record.countBindings || []).flatMap(binding => binding.arrays || []));
  const nestedArrayLens = buildNestedArrayLensMap(record.defaultProps, allowedNestedArrays);
  const errors = [];
  const warnings = [];
  for (const [key, value] of Object.entries(props || {})) {
    if (!Object.prototype.hasOwnProperty.call(propShapes, key)) continue;
    if (isPrivateDefaultRoundTrip(value, record.defaultProps?.[key]) && !containsPrivatePosToneField(value)) continue;
    const explicitBoundsByField = explicitNumberBoundsForArrayKey(record.contract?.numberBounds, key);
    validateFillableValueShape(value, propShapes[key], `props.${key}`, errors, warnings, record.defaultProps?.[key], allowedNestedArrays, countBoundLengths, countBoundPaths, undefined, nestedArrayLens, explicitBoundsByField);
  }
  return { errors, warnings };
}

// 逐下标期望长度:与 inspect:layout 暴露的 fixedLength/fixedLengths 同一来源
// (arraysAtPath 按父级数组原始顺序取每项的嵌套数组长度),供报错时一次性列出。
function buildNestedArrayLensMap(defaultProps, allowedNestedArrays) {
  const map = new Map();
  for (const pathName of allowedNestedArrays) {
    if (isFreeListField(pathFieldName(pathName))) continue;
    const lens = arraysAtPath(defaultProps, pathName).map(item => (Array.isArray(item) ? item.length : 0));
    if (lens.length) map.set(pathName, lens);
  }
  return map;
}

function validateFillableValueShape(value, shape, field, errors, warnings = [], defaultValue = undefined, allowedNestedArrays = new Set(), countBoundLengths = new Map(), countBoundPaths = new Set(), numberBounds = new Map(), nestedArrayLens = new Map(), explicitBoundsByField = null) {
  if (!isPrivatePosToneField(pathFieldName(field)) && !Array.isArray(value) && !isPlainObject(value) && isPrivateDefaultRoundTrip(value, defaultValue)) return;
  if (Array.isArray(shape)) {
    if (!Array.isArray(value)) {
      errors.push(`${field}: expected array`);
      return;
    }
    const contractPath = contractPathForField(field);
    const countBound = countBoundLengths.get(contractPath);
    if (countBound != null && value.length < countBound.count) {
      // count 拖到比当前 authored 数组长不再是硬错误——渲染合成层会用该 layout 契约
      // defaultProps 里的同名数组补足到 count 再显示,这里只提醒生成侧最好把数组写全。
      warnings.push(`countBinding shortfall ${countBound.key}=${countBound.count}; ${String(field).replace(/^props\./, '')} has ${value.length} (渲染会用默认内容补足,建议补全数组)`);
    } else if (countBound != null && value.length > countBound.count) {
      errors.push(`countBinding mismatch ${countBound.key}=${countBound.count}; ${String(field).replace(/^props\./, '')} has ${value.length}`);
      return;
    }
    if (
      countBound == null
      && !countBoundPaths.has(contractPath)
      && allowedNestedArrays.has(contractPath)
      && Array.isArray(defaultValue)
      && value.length !== defaultValue.length
      && !isFreeListField(pathFieldName(field))
    ) {
      const lens = nestedArrayLens.get(contractPath);
      const lensText = lens && lens.length > 1 ? `; expected lengths by index: [${lens.join(', ')}]` : '';
      errors.push(`${String(field).replace(/^props\./, '')}: fixed nested array length ${value.length} does not match default ${defaultValue.length}${lensText}`);
      return;
    }
    if (
      allowedNestedArrays.has(contractPath)
      && Array.isArray(defaultValue)
      && value.length !== defaultValue.length
    ) {
      return;
    }
    const isTupleShape = shape.length > 1;
    if (isTupleShape && value.length > shape.length) {
      errors.push(`${String(field).replace(/^props\./, '')}: expected tuple length <= ${shape.length}`);
      return;
    }
    const itemNumberBounds = Array.isArray(defaultValue) ? numberBoundsForArrayItems(defaultValue, explicitBoundsByField) : new Map();
    value.forEach((item, index) => {
      const itemShape = isTupleShape ? shape[index] : shape[0];
      validateFillableValueShape(
        item,
        itemShape,
        `${field}[${index}]`,
        errors,
        warnings,
        Array.isArray(defaultValue) ? defaultValue[index] : undefined,
        allowedNestedArrays,
        countBoundLengths,
        countBoundPaths,
        itemNumberBounds,
        nestedArrayLens,
      );
    });
    return;
  }
  if (isPlainObject(shape)) {
    if (!isPlainObject(value)) {
      errors.push(`${field}: expected object`);
      return;
    }
    const allowed = new Set(Object.keys(shape));
    for (const [key, item] of Object.entries(value || {})) {
      if (!allowed.has(key)) {
        if (!isPrivatePosToneField(key) && isPrivateDefaultRoundTrip(item, defaultValue?.[key])) continue;
        if (isAllowedNestedArrayField(field, key, item, defaultValue?.[key], allowedNestedArrays)) continue;
        // 同位置默认项自带的键(可填 shape 之外的结构/数值字段,如价格 y、坐标 pins)
        // 回传或修改都放行 —— 类型正确性由渲染层契约(prop-contract-core)按同位默认校验兜底;
        // 私有/非内容字段(颜色、pos/tone、视觉数值)仍保持拒绝。
        if (isPlainObject(defaultValue) && key in defaultValue
          && !isNonContentContractValue(key, defaultValue[key])
          && (typeof item !== 'string' || item === defaultValue[key])) continue;
        errors.push(`${field}.${key}: unknown nested prop; expected ${formatExpectedKeys(allowed)}`);
        continue;
      }
      validateFillableValueShape(item, shape[key], `${field}.${key}`, errors, warnings, defaultValue?.[key], allowedNestedArrays, countBoundLengths, countBoundPaths, undefined, nestedArrayLens);
      const bounds = numberBounds.get(key);
      if (bounds) validateNumberBounds(item, bounds, `${field}.${key}`, bounds.explicit ? errors : warnings);
    }
    return;
  }
  // 默认值证据放行:提交值与同位置默认值同类型(含同为 null)即视为契约内 ——
  // 异构默认(勾选表格 boolean|string 列、自定义价 number|null、漏斗首段 null)本就是组件设计的一部分,
  // 合并 shape 无法表达联合类型,此处以默认值为准放行(theme09_page103/theme12_page032/041 等病例)。
  if (shape === 'number' || shape === 'boolean' || shape === 'string') {
    const tv = value === null ? 'null' : typeof value;
    const td = defaultValue === null ? 'null' : typeof defaultValue;
    if (tv === td && ['null', 'string', 'number', 'boolean'].includes(tv)) {
      if (tv !== 'number' || Number.isFinite(value)) return;
    }
  }
  if (shape === 'number' && (typeof value !== 'number' || !Number.isFinite(value))) {
    errors.push(`${field}: expected number`);
    return;
  }
  if (shape === 'boolean' && typeof value !== 'boolean') {
    errors.push(`${field}: expected boolean`);
    return;
  }
  if (shape === 'string' && typeof value !== 'string') {
    errors.push(`${field}: expected string`);
  }
}

function containsPrivatePosToneField(value) {
  if (Array.isArray(value)) return value.some(containsPrivatePosToneField);
  if (!isPlainObject(value)) return false;
  return Object.entries(value).some(([key, item]) => isPrivatePosToneField(key) || containsPrivatePosToneField(item));
}

function isPrivatePosToneField(key) {
  return /^(pos|tone)$/i.test(String(key || ''));
}

// numberBoundsForArrayItems / validateNumberBounds live in src/prop-contract-core.mjs and are
// imported above -- this is the same derivation the render-time contract and the client-side
// editing runtime use, so inspect:layout / props:safe / validate:goal-spec never drift from
// what actually gets enforced (see explicitNumberBoundsForArrayKey for page-declared overrides).

function countBoundLengthsForProps(props = {}, countBindings = []) {
  const result = new Map();
  for (const binding of countBindings || []) {
    const rawCount = props?.[binding.key] ?? props?.[binding.publicKey];
    const count = numberOrNull(rawCount);
    if (count == null) continue;
    for (const arrayPath of binding.arrays || []) {
      if (isMediaArrayKey(String(arrayPath || '').split('.')[0].replace(/\[\]$/, ''))) continue;
      result.set(arrayPath, { count, key: binding.publicKey || binding.key });
    }
  }
  return result;
}

function isAllowedNestedArrayField(field, key, value, defaultValue, allowedNestedArrays) {
  if (!Array.isArray(value) || !Array.isArray(defaultValue)) return false;
  return allowedNestedArrays.has(contractPathForNestedField(field, key));
}

function contractPathForNestedField(field, key) {
  return `${contractPathForField(field)}.${key}`;
}

function contractPathForField(field) {
  return String(field || '').replace(/^props\./, '').replace(/\[\d+\]/g, '[]');
}

function formatExpectedKeys(keys) {
  return [...keys].join(', ');
}

function visibleNeutralPlaceholderErrors(record, props = {}, authoredProps = props) {
  const visibleProps = visiblePropsForRecord(record, props, authoredProps);
  const findings = collectNeutralPlaceholderFindings(visibleProps).slice(0, 8);
  if (!findings.length) return [];
  return [`中性占位文案仍在可见 props 中: ${findings.join(', ')}; 请补齐这些可见字段或降低对应 count`];
}

function visiblePropsForRecord(record, props = {}, authoredProps = props) {
  const bindings = visibleCountBindings(record);
  const arrayCounts = new Map();
  for (const binding of bindings) {
    const count = numberOrNull(props[binding.key] ?? props[binding.publicKey]);
    if (count == null) continue;
    for (const arrayKey of binding.arrays || []) arrayCounts.set(arrayKey, count);
  }
  const fallbackCount = fallbackVisibleCount(props, bindings, record.controls);
  return filterVisibleValue(props, '', arrayCounts, fallbackCount, authoredProps);
}

function visibleCountBindings(record) {
  const bindings = new Map();
  const add = binding => {
    if (!binding?.key && !binding?.publicKey) return;
    const key = binding.key || binding.publicKey;
    const current = bindings.get(key) || { ...binding, arrays: [] };
    current.arrays = [...new Set([...(current.arrays || []), ...(binding.arrays || [])])];
    bindings.set(key, current);
  };
  for (const binding of record.countBindings || []) {
    add({ ...binding, arrays: resolveBindingArrays(binding, record.defaultProps, record.controls) });
  }
  for (const meta of buildArrayMeta(record.defaultProps, record.countBindings, record.controls)) {
    if (!meta.countKey) continue;
    add({ key: meta.countKey, publicKey: meta.countKey, arrays: [meta.key] });
  }
  return [...bindings.values()];
}

function fallbackVisibleCount(props, bindings, controls = []) {
  const countKeys = new Set();
  for (const binding of bindings || []) {
    if (binding.key) countKeys.add(binding.key);
    if (binding.publicKey) countKeys.add(binding.publicKey);
  }
  for (const control of nonMediaCountControls(controls)) {
    if (control.key) countKeys.add(control.key);
    if (control.publicKey) countKeys.add(control.publicKey);
  }
  const counts = [...new Set([...countKeys]
    .map(key => numberOrNull(props[key]))
    .filter(value => value != null))];
  return counts.length === 1 ? counts[0] : null;
}

function filterVisibleValue(value, pathName, arrayCounts, fallbackCount, authoredValue = value) {
  if (Array.isArray(value)) {
    const key = lastPathKey(pathName);
    const explicitCount = arrayCounts.get(pathName) ?? arrayCounts.get(key);
    const authoredCount = Array.isArray(authoredValue) ? authoredValue.length : null;
    const limit = explicitCount ?? (shouldSliceByFallback(key, value, fallbackCount) ? fallbackCount : authoredCount);
    const visible = limit == null ? value : value.slice(0, limit);
    const itemPath = pathName ? `${pathName}[]` : '[]';
    return visible.map((item, index) => filterVisibleValue(item, itemPath, arrayCounts, fallbackCount, authoredValue?.[index]));
  }
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).map(([childKey, childValue]) => [
    childKey,
    filterVisibleValue(childValue, pathName ? `${pathName}.${childKey}` : childKey, arrayCounts, fallbackCount, authoredValue?.[childKey]),
  ]));
}

function lastPathKey(pathName) {
  return String(pathName || '')
    .split('.')
    .at(-1)
    ?.replace(/\[\]$/, '') || '';
}

function shouldSliceByFallback(key, value, fallbackCount) {
  if (fallbackCount == null || !Array.isArray(value) || value.length <= fallbackCount) return false;
  if (isMediaArrayKey(key)) return false;
  if (/^(items|cards|stats|data|captions|labels|callouts|features|tiles)$/i.test(String(key || ''))) return true;
  return value.slice(fallbackCount).some(containsNeutralPlaceholder);
}

function containsNeutralPlaceholder(item) {
  if (item == null) return false;
  if (typeof item === 'string') return NEUTRAL_PLACEHOLDERS.some(placeholder => item.includes(placeholder));
  if (typeof item !== 'object') return false;
  const text = JSON.stringify(item);
  return NEUTRAL_PLACEHOLDERS.some(placeholder => text.includes(placeholder));
}

function collectNeutralPlaceholderFindings(value, pathName = '') {
  if (typeof value === 'string') {
    return NEUTRAL_PLACEHOLDERS
      .filter(placeholder => value.includes(placeholder))
      .map(placeholder => `${pathName || '<root>'}=${placeholder}`);
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectNeutralPlaceholderFindings(item, `${pathName}[${index}]`));
  }
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, item]) => collectNeutralPlaceholderFindings(
    item,
    pathName ? `${pathName}.${key}` : key,
  ));
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? Math.round(number) : null;
}

function publicControl(control) {
  return {
    key: control.key,
    publicKey: control.publicKey || control.key,
    label: control.label || control.key,
    type: control.type,
    default: control.default,
    min: control.min,
    max: control.max,
    displayOffset: control.displayOffset,
    maxFromKey: control.maxFromKey,
    maxFromKeyOffset: control.maxFromKeyOffset,
    maxByKey: control.maxByKey,
    maxByValue: control.maxByValue,
    display: control.display,
  };
}

function compactMediaSlot(slot) {
  const canPresetMedia = slot.initialSrcSupported === true && Boolean(slot.fieldPath);
  return {
    role: slot.role,
    field: slot.field,
    fieldPath: slot.fieldPath,
    writableProp: slot.writableProp || (canPresetMedia ? slot.fieldPath : null),
    countKey: slot.countKey,
    publicCountKey: slot.publicCountKey || slot.countKey,
    defaultCount: slot.defaultCount,
    defaultVisibleCount: slot.defaultVisibleCount ?? slot.defaultCount,
    max: slot.max,
    maxFromKey: slot.maxFromKey,
    maxFromKeyOffset: slot.maxFromKeyOffset,
    maxByKey: slot.maxByKey,
    maxByValue: slot.maxByValue,
    maxCount: slot.maxCount ?? mediaSlotCapacity(slot),
    accepts: slot.accepts || slot.acceptedKinds,
    acceptedKinds: slot.acceptedKinds,
    acceptedKindsSource: slot.acceptedKindsSource,
    itemShape: slot.itemShape,
    valueShape: slot.valueShape,
    initialSrcSupported: slot.initialSrcSupported,
    writeMode: slot.writeMode,
    canPresetMedia,
    presetProp: canPresetMedia ? slot.fieldPath : null,
    emptySlotBehavior: slot.emptySlotBehavior,
    ...(slot.countOnly ? { countOnly: true } : {}),
    ...(slot.explicitMediaSlot ? { explicitMediaSlot: true } : {}),
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
    maxFromKey: binding.maxFromKey,
    maxFromKeyOffset: binding.maxFromKeyOffset,
    maxByKey: binding.maxByKey,
    maxByValue: binding.maxByValue,
  };
}

function publicErrorMessage(message, controls = []) {
  let next = String(message || '');
  for (const control of controls || []) {
    if (!control?.key || !control.publicKey || control.key === control.publicKey) continue;
    next = next.replaceAll(control.key, control.publicKey);
  }
  return appendNestedPropSuggestions(next);
}

function unknownPropWarning(record, key) {
  const suggestions = suggestPropAlternatives(record, key);
  const suffix = suggestions.length ? `; try ${suggestions.join(', ')}` : '; run inspect:layout for writable props';
  return `Unknown prop "${key}" for ${record.page.key}${suffix}`;
}

function suggestPropAlternatives(record, key) {
  const candidates = topLevelPropCandidates(record);
  const scored = candidates
    .map(candidate => ({ candidate, score: propSuggestionScore(key, candidate) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.localeCompare(b.candidate))
    .map(item => item.candidate);
  return (scored.length ? scored : candidates).slice(0, 6);
}

function topLevelPropCandidates(record) {
  const details = inspectLayout(record.page.key, { compact: true });
  const allowed = allowedPropKeySet(record);
  const fromContracts = (details?.fieldContracts || [])
    .filter(item => item.role !== 'decorative')
    .map(item => rootPropKey(item.key))
    .filter(key => allowed.has(key));
  return [...new Set([
    ...fromContracts,
    ...[...allowed].filter(key => !String(key).startsWith('_')),
  ])];
}

function rootPropKey(pathName) {
  return String(pathName || '').split('.')[0].replace(/\[\].*$/, '').replace(/\[\]$/, '');
}

function propSuggestionScore(input, candidate) {
  const key = String(input || '').toLowerCase();
  const value = String(candidate || '').toLowerCase();
  if (!key || !value) return 0;
  if (key === value) return 100;
  if (value.includes(key) || key.includes(value)) return 80;
  const synonyms = propSynonyms(key);
  if (synonyms.includes(value)) return 70;
  return 0;
}

function propSynonyms(key) {
  if (/^(heading|headline|head|subject)$/.test(key)) return ['title'];
  if (/^(img|image|photo|picture|pic|asset|visual)$/.test(key)) return ['images', 'media', 'photos', 'picture'];
  if (/^(text|body|paragraph|copy|description|desc|summary)$/.test(key)) return ['lead', 'lede', 'desc', 'description', 'caption', 'paragraph'];
  if (/^(list|rows|cards|points|bullets)$/.test(key)) return ['items', 'cards', 'points', 'rows'];
  return [];
}

function appendNestedPropSuggestions(message) {
  return String(message || '').replace(
    /(props(?:\.[A-Za-z0-9_$-]+|\[\d+\])*)\.([A-Za-z0-9_$-]+): unknown nested prop; expected ([^;]+)/g,
    (match, parentPath, _badKey, expected) => {
      const keys = String(expected || '').split(',').map(item => item.trim()).filter(Boolean).slice(0, 5);
      if (!keys.length) return match;
      const parent = String(parentPath).replace(/\[\d+\]/g, '[]');
      return `${match}; try ${keys.map(key => `${parent}.${key}`).join(', ')}`;
    },
  );
}

function mergeDefaultArrayTails(props, defaults, authoredProps = props, countBindings = []) {
  const next = { ...(props || {}) };
  for (const [key, value] of Object.entries(props || {})) {
    if (!Array.isArray(value) || !Array.isArray(defaults?.[key])) continue;
    if (isMediaArrayKey(key)) continue;
    const explicitCount = explicitCountForArrayKey(authoredProps, key, countBindings);
    const authoredLength = Array.isArray(authoredProps?.[key]) ? authoredProps[key].length : explicitCount ?? value.length;
    next[key] = value.slice(0, authoredLength);
  }
  return next;
}

function explicitCountForArrayKey(props = {}, arrayKey, countBindings = []) {
  for (const binding of countBindings || []) {
    if (!(binding.arrays || []).includes(arrayKey)) continue;
    const count = numberOrNull(props?.[binding.key] ?? props?.[binding.publicKey]);
    if (count != null) return count;
  }
  return null;
}

function normalizeMediaItems(props, mediaSlots = []) {
  const next = { ...(props || {}) };
  const errors = [];
  for (const slot of mediaSlots || []) {
    if (!slot?.field || !Array.isArray(next[slot.field])) continue;
    next[slot.field] = next[slot.field].map(normalizeMediaItem);
    const count = next[slot.field].length;
    const capacity = mediaSlotCapacity(slot);
    if (count > capacity) {
      errors.push(`props.${slot.field}: too many media items (${count} > ${capacity}); keep within media slot capacity`);
    }
    const explicitCount = mediaSlotExplicitCount(next, slot);
    if (explicitCount != null && count > explicitCount) {
      errors.push(`props.${slot.field}: too many media items (${count} > ${explicitCount}); keep within ${slot.publicCountKey || slot.countKey}`);
    }
  }
  return { props: next, errors };
}

function backfillMediaCountKeys(props, mediaSlots = []) {
  let next = props || {};
  for (const slot of mediaSlots || []) {
    if (!slot?.field || !slot.countKey || !Array.isArray(next[slot.field])) continue;
    if (mediaSlotExplicitCount(next, slot) != null) continue;
    if (next === props) next = { ...(props || {}) };
    next[slot.countKey] = next[slot.field].length;
  }
  return next;
}

function mediaSlotExplicitCount(props, slot) {
  for (const key of [slot.countKey, slot.publicCountKey].filter(Boolean)) {
    if (!Object.prototype.hasOwnProperty.call(props || {}, key)) continue;
    const count = numberOrNull(props[key]);
    if (count != null) return count;
  }
  return null;
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

export function getAllowedPropKeys(layout) {
  const record = getLayoutRecord(layout);
  if (!record) return new Set();
  return allowedPropKeySet(record);
}

export function unknownPropKeys(record, props = {}) {
  const allowed = allowedPropKeySet(record);
  return Object.keys(props || {}).filter(key => !allowed.has(key));
}

function allowedPropKeySet(record, mediaSlots = getMediaSlots(record), decorativeKeys = getDecorativeKeys(record.page.key)) {
  const defaultProps = record.defaultProps || {};
  const controls = record.controls || [];
  const controlKeys = controls.map(control => control.key).filter(Boolean);
  const mediaFields = mediaSlots.map(slot => slot.field).filter(Boolean);
  return new Set([
    ...getCopyKeyRoots(defaultProps, controls, mediaSlots, decorativeKeys),
    ...getArrayKeys(defaultProps, mediaSlots),
    ...controlKeys,
    ...controls.map(control => control.publicKey).filter(Boolean),
    ...mediaFields,
  ]);
}

function allowedPublicPropKeySet(record, mediaSlots = getMediaSlots(record), decorativeKeys = getDecorativeKeys(record.page.key)) {
  const controls = record.controls || [];
  const keyToAlias = new Map(controls.map(control => [control.key, control.publicKey || control.key]).filter(([key]) => key));
  return new Set([...allowedPropKeySet(record, mediaSlots, decorativeKeys)].map(key => keyToAlias.get(key) || key));
}

function getArrayKeys(defaultProps, mediaSlots) {
  const mediaFields = new Set(mediaSlots.map(slot => slot.field));
  return Object.entries(defaultProps || {})
    .filter(([key, value]) => Array.isArray(value) && !mediaFields.has(key) && !isMediaArrayKey(key) && isContractContentArray(key, value))
    .map(([key]) => key);
}

function paletteColorsForLayout(defaultProps = {}) {
  for (const [key, value] of Object.entries(defaultProps || {})) {
    if (isColorArray(value)) return { key, colors: value.slice(0, 8) };
  }
  return null;
}

// allowedKeys: null = no extra filtering (legacy callers); a Set (possibly
// empty) restricts which color-like keys are allowed to surface, so callers
// that know the field's public propShape can suppress private visual colors.
function arrayItemColors(items = [], allowedKeys = null) {
  const colors = [];
  for (const item of items) {
    if (!isPlainObject(item)) continue;
    for (const [key, value] of Object.entries(item)) {
      if (allowedKeys && !allowedKeys.has(key)) continue;
      if (/colou?r|tone|accent|fill|tint|hex|swatch/i.test(key) && isColorString(value)) colors.push(value);
    }
  }
  return colors;
}

function buildFieldContracts({ copyKeys = [], copyRoles = {}, arrayMeta = [], decorativeKeys = [], mediaSlots = [] } = {}) {
  const rows = [];
  for (const key of copyKeys || []) {
    rows.push({
      key,
      role: normalizeFieldContractRole(copyRoles[key]),
    });
  }
  for (const meta of arrayMeta || []) {
    rows.push({
      key: meta.key,
      role: meta.role,
      defaultCount: meta.defaultCount,
      defaultVisibleCount: meta.defaultVisibleCount,
      maxCount: meta.maxCount,
      countKey: meta.countKey,
    });
  }
  for (const key of decorativeKeys || []) {
    rows.push({
      key,
      role: 'decorative',
      writable: false,
      businessContent: false,
    });
  }
  for (const slot of mediaSlots || []) {
    rows.push({
      key: slot.field || slot.countKey,
      role: 'media',
      writableProp: slot.writableProp || slot.presetProp || null,
      accepts: slot.accepts || slot.acceptedKinds || [],
      acceptedKinds: slot.acceptedKinds || slot.accepts || [],
      acceptedKindsSource: slot.acceptedKindsSource || null,
      defaultCount: slot.defaultCount,
      defaultVisibleCount: slot.defaultVisibleCount ?? slot.defaultCount,
      maxCount: slot.maxCount ?? mediaSlotCapacity(slot),
      countKey: slot.publicCountKey || slot.countKey || null,
      maxFromKey: slot.maxFromKey,
      maxFromKeyOffset: slot.maxFromKeyOffset,
      maxByKey: slot.maxByKey,
      maxByValue: slot.maxByValue,
      canPresetMedia: slot.canPresetMedia === true,
    });
  }
  return dedupeFieldContracts(rows.filter(item => item.key));
}

function normalizeFieldContractRole(role) {
  return role === 'paragraph' ? 'body' : role;
}

function dedupeFieldContracts(rows) {
  const result = [];
  const seen = new Set();
  for (const row of rows) {
    const id = `${row.key}:${row.role}`;
    if (seen.has(id)) continue;
    seen.add(id);
    result.push(row);
  }
  return result;
}

function buildFillPlan({ copyKeys = [], copyBudgets = {}, copyRoles = {}, arrayMeta = [], mediaSlots = [], defaultProps = {}, controls = [], countBindings = [], lengthBindings = [], numberBoundsConfig = {} } = {}) {
  return {
    text: buildFillPlanText(copyKeys, copyBudgets, copyRoles, defaultProps),
    arrays: buildFillPlanArrays(arrayMeta, copyBudgets, copyRoles, defaultProps, controls, countBindings, lengthBindings, numberBoundsConfig),
    media: buildFillPlanMedia(mediaSlots),
  };
}

function buildFillPlanText(copyKeys, copyBudgets, copyRoles, defaultProps) {
  return (copyKeys || [])
    .filter(key => !String(key).includes('[]'))
    .map(key => ({
      key,
      role: normalizeFieldContractRole(copyRoles[key]),
      type: simpleValueType(valueAtPath(defaultProps, key)),
      ...(copyBudgets[key]?.maxChars ? { maxChars: copyBudgets[key].maxChars } : {}),
    }))
    .filter(item => item.type !== 'object' && item.type !== 'array');
}

function buildFillPlanArrays(arrayMeta, copyBudgets, copyRoles, defaultProps, controls, countBindings, lengthBindings, numberBoundsConfig = {}) {
  const resolvedBindings = (countBindings || []).map(binding => ({ ...binding, arrays: resolveBindingArrays(binding, defaultProps, controls) }));
  return (arrayMeta || [])
    .map(meta => {
      const items = itemsForArrayPath(defaultProps, meta.key);
      const fieldItems = items;
      const explicitBoundsByField = explicitNumberBoundsForArrayKey(numberBoundsConfig, meta.key);
      const itemFields = fillPlanItemFields(meta.key, fieldItems.length ? fieldItems : items, copyBudgets, copyRoles, explicitBoundsByField);
      const nestedArrays = fillPlanNestedArrays(meta.key, items, copyBudgets, copyRoles, defaultProps, controls, resolvedBindings, lengthBindings);
      const itemShape = fillPlanArrayItemShape(items, meta.key);
      const itemBudget = fillPlanStringArrayItem(meta.key, itemShape, copyBudgets, copyRoles);
      const numericRange = isNestedArrayPath(meta.key) ? numericRangeForValues(valuesForPattern(defaultProps, meta.key)) : null;
      const lengthBinding = lengthBindingForPath(meta.key, lengthBindings);
      const fixedLength = fixedLengthForArrayPath(defaultProps, meta.key);
      return {
        key: meta.key,
        role: meta.role,
        visibleCount: meta.defaultVisibleCount,
        maxCount: meta.maxCount,
        countKey: meta.countKey,
        ...(lengthBinding ? fillPlanLengthBinding(lengthBinding) : {}),
        ...(!meta.countKey && !lengthBinding && fixedLength ? fixedLength : {}),
        ...(itemShape ? { itemShape } : {}),
        ...(itemBudget ? { item: itemBudget } : {}),
        ...(numericRange ? { numericRange } : {}),
        ...(Object.keys(itemFields).length ? { itemFields } : {}),
        ...(Object.keys(nestedArrays).length ? { nestedArrays } : {}),
      };
    })
    .filter(item => item.itemShape || item.itemFields || item.nestedArrays);
}

function fillPlanStringArrayItem(arrayKey, itemShape, copyBudgets, copyRoles) {
  const isTupleShape = Array.isArray(itemShape) && itemShape.length > 0
    && itemShape.every(t => t === 'string' || t === 'number');
  if (itemShape !== 'string' && !isTupleShape) return null;
  const itemKey = isTupleShape ? `${arrayKey}[][]` : `${arrayKey}[]`;
  const budget = copyBudgets[itemKey];
  if (!budget?.maxChars) return null;
  return {
    role: normalizeFieldContractRole(copyRoles[itemKey] || copyRoleForField(itemKey)),
    maxChars: budget.maxChars,
  };
}

function itemsForArrayPath(defaultProps, pathName) {
  if (isNestedArrayPath(pathName)) return arraysAtPath(defaultProps, pathName).flatMap(item => item);
  return Array.isArray(valueAtPath(defaultProps, pathName)) ? valueAtPath(defaultProps, pathName) : [];
}

function buildFillPlanMedia(mediaSlots = []) {
  return (mediaSlots || [])
    .filter(slot => slot.field && slot.canPresetMedia === true)
    .map(slot => ({
      key: slot.field,
      write: slot.writableProp || slot.presetProp || `props.${slot.field}`,
      visibleCount: slot.defaultVisibleCount ?? slot.defaultCount,
      maxCount: slot.maxCount ?? mediaSlotCapacity(slot),
      countKey: slot.publicCountKey || slot.countKey || null,
      maxFromKey: slot.maxFromKey,
      maxFromKeyOffset: slot.maxFromKeyOffset,
      maxByKey: slot.maxByKey,
      maxByValue: slot.maxByValue,
      accepts: slot.accepts || slot.acceptedKinds || [],
      acceptedKindsSource: slot.acceptedKindsSource || null,
      itemShape: slot.itemShape,
    }));
}

function fillPlanItemFields(arrayKey, items, copyBudgets, copyRoles, explicitBoundsByField = null) {
  const prunedItems = pruneContractItems(items, arrayKey);
  // 异质对象数组合并全部项的键,理由同 fillPlanArrayItemShape。
  const objectItems = prunedItems.filter(isPlainObject);
  if (!objectItems.length) return {};
  const shape = {};
  for (const obj of objectItems) {
    for (const [key, value] of Object.entries(obj)) {
      if (!(key in shape) || shape[key] == null) shape[key] = value;
    }
  }
  // 与 validateFillableValueShape 校验时同一推导(numberBoundsForArrayItems,来自
  // src/prop-contract-core.mjs,单一实现):只有数组项的直接标量字段(无点号的顶层 key)
  // 才会被数值上下限拦截,深一层嵌套字段目前不在校验范围内,因此这里也只对顶层字段算
  // numericBounds,避免暴露一个实际并不会被拦的假契约。
  const itemNumberBounds = numberBoundsForArrayItems(items.filter(isPlainObject), explicitBoundsByField);
  const fields = {};
  function collect(value, fieldPath) {
    if (Array.isArray(value)) return;
    if (isPlainObject(value)) {
      for (const [field, child] of Object.entries(value)) collect(child, `${fieldPath}.${field}`);
      return;
    }
    const pathName = `${arrayKey}[].${fieldPath}`;
    if (!isFillableCopyLeaf(pathName, value)) return;
    const bounds = fieldPath.includes('.') ? null : itemNumberBounds.get(fieldPath);
    fields[fieldPath] = {
      role: normalizeFieldContractRole(copyRoles[pathName] || copyRoleForField(pathName)),
      type: simpleValueType(value),
      ...(simpleValueType(value) === 'number' ? { numericRange: numericRangeForValues(items.map(item => valueAtPath(item, fieldPath))) } : {}),
      // numericBounds:props:safe/validate:goal-spec/render 实际执行数值上下限校验时的同一
      // 推导(numberBoundsForArrayItems)。enforced:false 表示这是从默认示例数据反推的提示性
      // 范围,不是硬限制——真实业务数值可以超出;enforced:true(显式声明或识别出的几何/坐标
      // 形状)才会被拦截。semantics 标注该字段更像比例(normalized,0-1)还是屏幕坐标
      // (coordinate),帮助判断该填比例还是真实值。
      ...(bounds ? { numericBounds: roundNumberBounds(bounds) } : {}),
      ...(copyBudgets[pathName]?.maxChars ? { maxChars: copyBudgets[pathName].maxChars } : {}),
    };
  }
  for (const [field, value] of Object.entries(shape)) collect(value, field);
  return fields;
}

function roundNumberBounds(bounds) {
  return {
    min: roundBoundNumber(bounds.min),
    max: roundBoundNumber(bounds.max),
    enforced: bounds.explicit === true,
    ...(bounds.semantics ? { semantics: bounds.semantics } : {}),
  };
}

function roundBoundNumber(value) {
  return Number.isInteger(value) ? value : Number(value.toFixed(2));
}

function fillPlanNestedArrays(arrayKey, items, copyBudgets, copyRoles, defaultProps, controls, resolvedBindings, lengthBindings) {
  const shape = pruneContractItems(items, arrayKey).find(isPlainObject);
  if (!shape) return {};
  const nested = {};
  for (const [field, value] of Object.entries(shape)) {
    const pathName = `${arrayKey}[].${field}`;
    if (!Array.isArray(value) || isMediaArrayKey(field) || !isContractContentArray(pathName, value)) continue;
    const countMeta = countMetaForNestedArray(pathName, field, value, defaultProps, controls, resolvedBindings);
    const defaultArrays = arraysAtPath(defaultProps, pathName);
    const numericRange = numericRangeForValues(defaultArrays);
    const lengthBinding = lengthBindingForPath(pathName, lengthBindings);
    const fixedLength = fixedLengthForNestedArray(items, field);
    nested[field] = {
      visibleCount: countMeta.visibleCount,
      maxCount: countMeta.maxCount,
      countKey: countMeta.countKey,
      ...(lengthBinding ? fillPlanLengthBinding(lengthBinding) : {}),
      ...(!countMeta.countKey && !lengthBinding && fixedLength ? fixedLength : {}),
      ...(numericRange ? { numericRange } : {}),
      itemShape: fillPlanArrayItemShape(value, pathName) || 'string',
    };
    const nestedItems = defaultArrays.flatMap(item => item);
    const nestedFields = fillPlanItemFields(pathName, nestedItems.length ? nestedItems : value, copyBudgets, copyRoles);
    if (Object.keys(nestedFields).length) nested[field].itemFields = nestedFields;
    const budget = copyBudgets[`${pathName}[]`];
    const role = copyRoles[`${pathName}[]`];
    if (role || budget?.maxChars) {
      nested[field].item = {
        role: normalizeFieldContractRole(role || copyRoleForField(`${pathName}[]`)),
        ...(budget?.maxChars ? { maxChars: budget.maxChars } : {}),
      };
    }
  }
  return nested;
}

// 与 validateFillableValueShape 的定长嵌套数组判定同口径:只要不是自由列表字段
// (isFreeListField),该嵌套数组在鉴权时就必须逐下标匹配默认长度——不限于数值内容
// (如 quadrants[].dirs 是字符串数组,仍会被拦)。之前这里额外要求数值内容
// (isFixedCapacityArray) 会漏报字符串类的定长嵌套数组,导致契约不透明。
function lengthLockedArrayLens(field, arrays = []) {
  if (isFreeListField(field)) return null;
  const lengths = arrays.filter(Array.isArray).map(value => value.length);
  if (!lengths.length) return null;
  const unique = new Set(lengths);
  return unique.size === 1 ? { fixedLength: lengths[0] } : { fixedLengths: lengths };
}

function fixedLengthForNestedArray(items, field) {
  const arrays = (items || [])
    .map(item => item?.[field])
    .filter(Array.isArray);
  return lengthLockedArrayLens(field, arrays);
}

function fixedLengthForArrayPath(defaultProps, pathName) {
  if (!String(pathName || '').includes('[].')) return null;
  const arrays = arraysAtPath(defaultProps, pathName);
  return lengthLockedArrayLens(arrayFieldName(pathName), arrays);
}

function isFreeListField(field) {
  return /^(tags?|chips?|bullets?|labels?)$/i.test(String(field || ''));
}

function isFixedCapacityArray(field, arrays = []) {
  if (isFreeListField(field)) return false;
  return arrays.some(array => Array.isArray(array) && array.some(isFixedCapacityArrayItem));
}

function isFixedCapacityArrayItem(item) {
  if (typeof item === 'number' && Number.isFinite(item)) return true;
  if (Array.isArray(item)) return item.some(isFixedCapacityArrayItem);
  if (!isPlainObject(item)) return false;
  return Object.values(item).some(value => typeof value === 'number' && Number.isFinite(value));
}

function arraysAtPath(source, pathName) {
  const parts = String(pathName || '').split('.').filter(Boolean);
  return arraysAtPathParts([source], parts);
}

function arraysAtPathParts(values, parts) {
  if (!parts.length) return values.filter(Array.isArray);
  const [part, ...rest] = parts;
  const isArrayPart = part.endsWith('[]');
  const key = isArrayPart ? part.slice(0, -2) : part;
  const next = [];
  for (const value of values) {
    if (value == null) continue;
    const child = key ? value[key] : value;
    if (isArrayPart) {
      if (Array.isArray(child)) next.push(...child);
    } else {
      next.push(child);
    }
  }
  return arraysAtPathParts(next, rest);
}

function lengthBindingForPath(pathName, lengthBindings = []) {
  return (lengthBindings || []).find(binding => binding?.dependent === pathName && binding.relation === 'same-length') || null;
}

function fillPlanLengthBinding(binding) {
  return {
    sameLengthAs: binding.anchor,
    ...(binding.countKey ? { sameLengthCountKey: binding.countKey } : {}),
  };
}

function countMetaForNestedArray(pathName, field, items, defaultProps, controls, resolvedBindings = []) {
  const bound = countMetaForArray(pathName, resolvedBindings);
  if (bound.countKey) {
    return {
      countKey: bound.countKey,
      visibleCount: defaultVisibleCountForArray(bound.countKey, items, controls, defaultProps),
      maxCount: maxCountForArray(bound.max, items),
    };
  }
  const control = countControlForArrayField(field, controls);
  const value = control ? defaultProps?.[control.key] ?? control.default : null;
  const visibleCount = control ? numberOrNull(value) ?? items.length : items.length;
  const maxCount = control || isFixedCapacityArray(field, [items]) ? maxCountForArray(control?.max, items) : undefined;
  return {
    countKey: control?.publicKey || control?.key || null,
    visibleCount,
    maxCount,
  };
}

function countControlForArrayField(field, controls = []) {
  const base = singularFieldName(field);
  const candidates = new Set([
    ...(base ? [`${base}Count`, `${base}Total`] : []),
    `${field}Count`,
  ].map(item => item.toLowerCase()));
  return nonMediaCountControls(controls).find(control => {
    const keys = [control.key, control.publicKey].filter(Boolean).map(item => String(item).toLowerCase());
    return keys.some(key => candidates.has(key));
  }) || null;
}

function fillPlanArrayItemShape(items, pathName = '') {
  const prunedItems = pruneContractItems(items, pathName);
  if (!prunedItems.length) return null;
  // JAD-2xx:异质对象数组(如 bento tilesData 混排 image/stat/quote 三种子形状)只取首项
  // 会漏掉后续项独有的字段(quote/tail/value/unit/label 等)——与 collectCopyPaths/
  // fillPlanTupleItemShape 同口径,合并全部对象项的键(首个非 null 值为准)。
  const objectItems = prunedItems.filter(isPlainObject);
  if (objectItems.length) {
    const object = {};
    for (const obj of objectItems) {
      for (const [key, value] of Object.entries(obj)) {
        if (!(key in object) || object[key] == null) object[key] = value;
      }
    }
    const shape = {};
    for (const [key, value] of Object.entries(object)) {
      const childPath = pathName ? `${pathName}[].${key}` : key;
      if (Array.isArray(value)) {
        if (!isMediaArrayKey(key) && isContractContentArray(childPath, value)) {
          const childShape = arrayFieldShape(value, childPath);
          if (childShape.length) shape[key] = childShape;
        }
        continue;
      }
      if (isPlainObject(value)) {
        const childShape = fillableObjectShape(value, childPath);
        if (Object.keys(childShape).length) shape[key] = childShape;
        continue;
      }
      if (isFillableCopyLeaf(childPath, value)) shape[key] = simpleValueType(value);
    }
    return Object.keys(shape).length ? shape : null;
  }
  const tuple = fillPlanTupleShapeForArrayItems(prunedItems);
  if (tuple) return tuple;
  // 定长异质元组(如 theme11 rows[].us = [boolean, string]):这里的 prunedItems 就是
  // 元组本身的各个位置(不是多行样本),fillPlanTupleShapeForArrayItems 按"多行转置"
  // 设计、对本例不适用(位置本身都不是数组)。若各位置标量类型不同,按位置回报元组类型
  // 数组,而不是坍缩成首个元素的单一标量类型——否则后续的字符串位置会从 itemShape 里
  // 丢失,deck 构造器就判断不出该元组还有可填文案槽。
  if (prunedItems.length > 1) {
    const positional = prunedItems.map(simpleValueType);
    if (new Set(positional).size > 1) return positional;
  }
  return simpleValueType(prunedItems.find(item => item != null));
}

function fillableObjectShape(value, pathName = '') {
  if (!isPlainObject(value)) return {};
  const shape = {};
  for (const [key, item] of Object.entries(value)) {
    const childPath = pathName ? `${pathName}.${key}` : key;
    if (Array.isArray(item)) {
      if (!isMediaArrayKey(key) && isContractContentArray(childPath, item)) {
        const childShape = arrayFieldShape(item, childPath);
        if (childShape.length) shape[key] = childShape;
      }
      continue;
    }
    if (isPlainObject(item)) {
      const childShape = fillableObjectShape(item, childPath);
      if (Object.keys(childShape).length) shape[key] = childShape;
      continue;
    }
    if (isFillableCopyLeaf(childPath, item)) shape[key] = simpleValueType(item);
  }
  return shape;
}

function fillPlanArrayValueShape(items, pathName = '') {
  const itemShape = fillPlanArrayItemShape(items, pathName);
  return itemShape == null ? [] : [itemShape];
}

// 数组字段的 shape:区分"定长异质标量元组"(如 theme11 rows[].us=[boolean,string]——
// value 本身就是元组的各个位置,不是可重复的多行样本)与"可重复的同形列表"(如
// tiles[].feats 的字符串列表、cards[].specs 这类多行 [label,value] 元组列表)。前者
// 直接把 fillPlanArrayItemShape 按位置算出的类型数组当 shape;后者维持
// fillPlanArrayValueShape 的「每项同形状」外层包装。混用会让 validateFillableValueShape
// 把元组的标量位置误判成需要是数组,或反过来把列表误判成"元组长度不能超过 N"。
function arrayFieldShape(value, childPath) {
  const isScalarTuple = Array.isArray(value) && value.length > 1
    && value.every(item => item == null || (typeof item !== 'object' && !Array.isArray(item)))
    && new Set(value.map(simpleValueType)).size > 1;
  return isScalarTuple ? (fillPlanArrayItemShape(value, childPath) || []) : fillPlanArrayValueShape(value, childPath);
}

function pruneContractItems(items, pathName = '') {
  if (!Array.isArray(items)) return [];
  return items
    .map(item => pruneContractValue(item, `${pathName}[]`))
    .filter(item => !isPrunedContractOmit(item));
}

function fillPlanTupleShapeForArrayItems(items) {
  const arrays = (items || []).filter(Array.isArray);
  if (!arrays.length) return null;
  const fixedLength = arrays.every(item => item.length === arrays[0].length) ? arrays[0].length : null;
  const length = fixedLength ?? Math.max(...arrays.map(item => item.length));
  return Array.from({ length }, (_, index) => fillPlanTupleItemShape(arrays.map(item => item[index]).filter(item => item !== undefined)));
}

function fillPlanTupleItemShape(values) {
  const objects = values.filter(isPlainObject);
  if (objects.length) {
    // 并集全部对象项的键(样本取首个非 null 值),首项缺失的字段(如首段 conv=null)不再丢失
    const merged = {};
    for (const obj of objects) {
      for (const [key, value] of Object.entries(obj)) {
        if (!(key in merged) || merged[key] == null) merged[key] = value;
      }
    }
    return Object.fromEntries(Object.entries(merged).map(([key, value]) => [
      key,
      Array.isArray(value) ? fillPlanArrayValueShape(value) : simpleValueType(value),
    ]));
  }
  const arrays = values.filter(Array.isArray);
  if (arrays.length) return fillPlanTupleShapeForArrayItems(arrays);
  return simpleValueType(values.find(item => item != null));
}

function simpleValueType(value) {
  if (isSerializedReactElementLike(value)) return 'string';
  if (Array.isArray(value)) return 'array';
  if (value == null) return 'string';
  if (typeof value === 'object') return 'object';
  if (typeof value === 'number') return 'number';
  if (typeof value === 'boolean') return 'boolean';
  return 'string';
}

function arrayItemRoles(items = [], arrayKey) {
  const shape = pruneContractItems(items, arrayKey).find(isPlainObject);
  if (!shape) return undefined;
  const roles = {};
  for (const field of Object.keys(shape)) {
    const value = shape[field];
    if (Array.isArray(value) || isPlainObject(value)) continue;
    if (!isFillableCopyLeaf(`${arrayKey}[].${field}`, value)) continue;
    roles[field] = copyRoleForField(`${arrayKey}[].${field}`);
  }
  return Object.keys(roles).length ? roles : undefined;
}

// JAD-213:数组语义角色枚举。启发式:字段名 → itemShape 兜底(value/unit→metric)→ misc。
const ARRAY_ROLE_KEYWORDS = {
  metric: ['stats', 'stat', 'data', 'metrics', 'metric', 'dials', 'dialsdata', 'dial', 'gauges', 'gauge', 'kpis', 'kpi', 'scores', 'numbers', 'meters'],
  distribution: ['shares', 'share', 'splits', 'split', 'regions', 'region', 'allocations', 'allocation', 'breakdowns', 'breakdown', 'parts', 'part'],
  chapter: ['chapters', 'chapter', 'sections', 'agenda', 'contents', 'toc'],
  step: ['steps', 'step', 'phases', 'phase', 'stages', 'stage', 'milestones', 'rounds', 'timeline', 'events'],
  quadrant: ['quadrants', 'quadrant'],
  media: ['photos', 'images', 'media', 'logos', 'thumbs', 'gallery', 'pictures'],
  'list-item': ['items', 'item', 'list', 'lists', 'cards', 'card', 'tiles', 'tile', 'chips', 'points', 'bullets', 'rows', 'features', 'principles', 'takeaways', 'callouts', 'segments', 'plans'],
};

const DISTRIBUTION_METRIC_FIELD_RE = /^(share|pct|percent|percentage|ratio|portion|weight)$/;

const LABEL_FIELD_RE = /^(unit|label|dim|name|cap|caption|note|title|category|en)$/;

function isNestedArrayPath(pathName) {
  return String(pathName || '').includes('[].');
}

function arrayRole(pathName, items = []) {
  const field = arrayFieldName(pathName);
  for (const [role, keywords] of Object.entries(ARRAY_ROLE_KEYWORDS)) {
    if (keywords.includes(field)) return role;
  }
  // itemShape 兜底:含 share/funding/value 等数值字段 + 标签字段 → metric/distribution。
  const shape = items.find(isPlainObject);
  if (shape) {
    const entries = Object.entries(shape).map(([key, value]) => [normalizeName(key), value]);
    const metricFields = entries.filter(([key, value]) => typeof value === 'number' && isMetricFieldName(key));
    if (metricFields.length && entries.some(([key]) => LABEL_FIELD_RE.test(key))) {
      return metricFields.some(([key]) => isDistributionMetricFieldName(key)) ? 'distribution' : 'metric';
    }
  }
  return 'misc';
}

function isDistributionMetricFieldName(field) {
  return DISTRIBUTION_METRIC_FIELD_RE.test(normalizeName(field));
}

// 非媒体的数量控件(供 copy 内/无声明数组按长度匹配 count 控件)。
function nonMediaCountControls(controls = []) {
  return (controls || []).filter(control => {
    const key = String(control.key || '');
    const type = String(control.type || '').toLowerCase();
    if (!/count$/i.test(key)) return false;
    if (!['number', 'range', 'slider'].includes(type)) return false;
    return !isMediaCountControl(control);
  });
}

// JAD-212:数组路径(顶层或 copy 内)→ count 控件。只能来自已解析 countBindings。
function countMetaForArray(pathName, resolvedBindings) {
  const binding = (resolvedBindings || []).find(item => (item.arrays || []).includes(pathName));
  if (binding) {
    return {
      countKey: binding.publicKey || binding.key,
      min: binding.min ?? null,
      max: binding.max ?? null,
      maxFromKey: binding.maxFromKey,
      maxFromKeyOffset: binding.maxFromKeyOffset,
      maxByKey: binding.maxByKey,
      maxByValue: binding.maxByValue,
    };
  }
  return { countKey: null, min: null, max: null };
}

function defaultVisibleCountForArray(countKey, items, controls = [], defaultProps = {}) {
  if (!countKey) return items.length;
  const control = (controls || []).find(item => item.key === countKey || item.publicKey === countKey);
  const value = control ? defaultProps?.[control.key] ?? control.default : null;
  const count = Number(value);
  return Number.isFinite(count) ? count : items.length;
}

function maxCountForArray(max, items) {
  const count = max == null ? NaN : Number(max);
  return Number.isFinite(count) && count >= 0 ? count : items.length;
}

function valuesForPattern(source, pathName) {
  const parts = String(pathName || '').split('.').filter(Boolean);
  return valuesForPatternParts([source], parts);
}

function valuesForPatternParts(values, parts) {
  if (!parts.length) return values.length === 1 ? values[0] : values;
  const [part, ...rest] = parts;
  const isArrayPart = part.endsWith('[]');
  const key = isArrayPart ? part.slice(0, -2) : part;
  const next = [];
  for (const value of values) {
    if (value == null) continue;
    const child = key ? value[key] : value;
    if (isArrayPart) {
      if (Array.isArray(child)) next.push(...child);
    } else {
      next.push(child);
    }
  }
  return valuesForPatternParts(next, rest);
}

function numericRangeForValues(value) {
  const numbers = collectNumbers(value);
  if (!numbers.length) return null;
  return { observedMin: Math.min(...numbers), observedMax: Math.max(...numbers) };
}

function collectNumbers(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return [value];
  if (Array.isArray(value)) return value.flatMap(collectNumbers);
  if (isPlainObject(value)) return Object.values(value).flatMap(collectNumbers);
  return [];
}

// 每个内容数组的填充元数据:默认条目数、绑定的 count 控件、范围、默认配色、语义角色、字段角色。
function buildArrayMeta(defaultProps = {}, countBindings = [], controls = [], { withItemRoles = false, propShapes = null } = {}) {
  const paths = discoverContentArrayPaths(defaultProps);
  const resolvedBindings = (countBindings || []).map(binding => ({ ...binding, arrays: resolveBindingArrays(binding, defaultProps, controls) }));
  return paths.slice(0, 8).map(pathName => {
    const items = Array.isArray(valueAtPath(defaultProps, pathName)) ? valueAtPath(defaultProps, pathName) : [];
    const { countKey, min, max, maxFromKey, maxFromKeyOffset, maxByKey, maxByValue } = countMetaForArray(pathName, resolvedBindings);
    const defaultVisibleCount = defaultVisibleCountForArray(countKey, items, controls, defaultProps);
    const nested = isNestedArrayPath(pathName);
    const fixedCapacity = nested && isFixedCapacityArray(arrayFieldName(pathName), [items]);
    const maxCount = countKey || !nested || fixedCapacity ? maxCountForArray(max, items) : undefined;
    // Only surface a color as an inspect-facing default when the array's
    // item shape actually keeps that field in the fillable propShapes --
    // otherwise it is a private visual field the contract layer already
    // excludes from authoring, and arrayMeta should not leak it back out.
    const shapeArray = propShapes ? valueAtPath(propShapes, pathName) : undefined;
    const itemShape = Array.isArray(shapeArray) ? shapeArray[0] : undefined;
    const publicColorKeys = isPlainObject(itemShape)
      ? new Set(Object.keys(itemShape).filter(key => /colou?r|tone|accent|fill|tint|hex|swatch/i.test(key)))
      : null;
    const colors = [...new Set(arrayItemColors(items, publicColorKeys))];
    const meta = {
      key: pathName,
      role: arrayRole(pathName, items),
      defaultCount: items.length,
      defaultVisibleCount,
      countKey,
      min,
      max,
      maxFromKey,
      maxFromKeyOffset,
      maxByKey,
      maxByValue,
      maxCount,
    };
    if (colors.length) meta.defaultColors = colors.slice(0, 8);
    if (withItemRoles) {
      const itemRoles = arrayItemRoles(items, pathName);
      if (itemRoles) meta.itemRoles = itemRoles;
    }
    return meta;
  });
}

// JAD-212:正文是否完全由组件硬编码不可填。
// 条件:存在指向数组的 count 控件,但其数组在 defaultProps/copy 全部缺席,
// 且无可发现的内容数组,且剩余 copyKeys 仅 eyebrow/serial 类(无 title/paragraph/metric 正文)。
function detectContentLocked({ copyKeys, copyRoles, arrayMeta, resolvedBindings, defaultProps }) {
  if (arrayMeta.length) return null;
  const countTowardAbsent = (resolvedBindings || []).filter(binding => {
    const arrays = binding.arrays || [];
    return arrays.length && arrays.every(pathName => valueAtPath(defaultProps, pathName.split('[')[0]) === undefined);
  });
  if (!countTowardAbsent.length) return null;
  const hasBodyCopy = (copyKeys || []).some(key => !['eyebrow', 'serial'].includes(copyRoles[key]));
  if (hasBodyCopy) return null;
  const arr = countTowardAbsent.map(binding => (binding.arrays || []).join('/')).join(', ');
  return `正文数组(${arr})由组件硬编码,不在 props/copy 中,正文不可由 props 定制;只能改 count 控件数量`;
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

export function hasAmbientBackground(page) {
  const props = page?.defaultProps || {};
  return props.backgroundMode === 'unicorn' || typeof props.unicornScene === 'string';
}

export function pageMatches(page, keywords) {
  const text = pageSearchText(page);
  return keywords.some(keyword => text.includes(keyword.toLowerCase()));
}

export function pageSearchText(page) {
  return `${page.key} ${page.slot || ''} ${page.label || ''}`.toLowerCase();
}
