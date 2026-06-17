const TEXT_REPLACEMENTS = [
  ['数据芯片数量', '指标卡片数量'],
  ['数据芯片数', '指标卡片数'],
  ['数据芯片', '指标卡片'],
  ['持仓行数', '表格行数'],
  ['持仓小卡', '条目小卡'],
  ['持仓气泡', '条目气泡'],
  ['持仓', '条目'],
  ['风险等级', '状态等级'],
  ['风险水位', '状态强度'],
  ['风险链节', '状态链节'],
  ['风险传导链', '状态传导链'],
  ['风险维度', '状态维度'],
  ['风险说明', '状态说明'],
  ['风险解读', '状态解读'],
  ['风险数量', '状态项数量'],
  ['风险卡数量', '状态卡数量'],
  ['风险卡', '状态卡'],
  ['重点风险', '重点项'],
  ['突出风险', '突出项'],
  ['风险', '状态'],
  ['投资人类型占比', '分类占比'],
  ['投资人类型数', '分类数量'],
  ['投资人类型', '分类类型'],
  ['投资人说', '角色说'],
  ['投资人', '角色'],
  ['平均单笔融资金额', '平均指标'],
  ['融资时间轴', '时间轴'],
  ['融资额', '数值'],
  ['融资金额', '数值指标'],
  ['融资规模', '数值规模'],
  ['融资里程碑', '里程碑'],
  ['融资', '数值'],
  ['资本来源', '来源'],
  ['资本占比', '占比'],
  ['资本热度', '关注度'],
  ['长期资本', '长期支撑'],
  ['资本主张', '核心主张'],
  ['资本', '资源'],
  ['估值收入数', '指标数值'],
  ['估值柱条', '指标柱条'],
  ['估值标记', '指标标记'],
  ['估值锚', '参考锚'],
  ['估值兑现', '指标兑现'],
  ['合理估值', '合理指标'],
  ['估值', '指标'],
  ['赛道图例', '分类图例'],
  ['赛道行数', '分类行数'],
  ['赛道条数', '分类条数'],
  ['赛道数量', '分类数量'],
  ['赛道层数', '分类层数'],
  ['赛道组数', '分类组数'],
  ['赛道段数', '分类段数'],
  ['赛道列', '分类列'],
  ['赛道标签', '分类标签'],
  ['赛道副标', '分类副标'],
  ['赛道徽标', '分类徽标'],
  ['赛道瓷砖', '分类块'],
  ['赛道卡片', '分类卡片'],
  ['赛道卡', '分类卡'],
  ['赛道色', '分类色'],
  ['重点赛道', '重点分类'],
  ['赛道', '分类'],
  ['轮次图例', '阶段图例'],
  ['轮次数量', '阶段数量'],
  ['轮次列', '阶段列'],
  ['轮次结构', '阶段结构'],
  ['轮次', '阶段'],
  ['金额标签', '数值标签'],
  ['金额数字', '数值数字'],
  ['金额标注', '数值标注'],
  ['金额分层数', '数值分层数'],
  ['金额区间', '数值区间'],
  ['金额列', '数值列'],
  ['金额', '数值'],
  ['音乐人类型', '对象类型'],
  ['音乐人数量', '条目数量'],
  ['音乐人', '成员'],
  ['曲目清单', '条目清单'],
  ['曲目列表', '条目列表'],
  ['曲目数量', '条目数量'],
  ['曲目表', '条目表'],
  ['曲目标签', '条目标签'],
  ['曲目', '条目'],
  ['播放量条', '数据条'],
  ['播放量', '数值'],
  ['播放游标', '进度游标'],
  ['版税', '指标'],
  ['供应链网络图', '关系网络图'],
  ['供应链节点', '关系节点'],
  ['供应链', '关系链'],
  ['合规交付链', '交付链'],
  ['合规台账', '状态台账'],
  ['合规', '状态'],
  ['行业基准', '参考基准'],
  ['行业标签', '分类标签'],
  ['行业客户', '客户类型'],
  ['行业', '分类'],
  ['站台号', '大号编号'],
  ['看板行数', '列表行数'],
  ['看板', '列表'],
  ['季度列数', '时间列数'],
  ['季度柱数', '时间柱数'],
  ['季度网格', '时间网格'],
  ['季度分区', '时间分区'],
  ['季度面板', '时间面板'],
  ['季度', '时间段'],
  ['主打第几首', '重点序号'],
  ['主打高亮', '重点高亮'],
  ['主打曲目', '重点条目'],
  ['主打', '重点'],
  ['唱片位置', '视觉元素位置'],
  ['唱片同心纹路', '环形纹理'],
  ['唱纹', '环形纹理'],
  ['专辑封面', '封面图'],
  ['创作者印章', '身份印章'],
  ['创始人 / 分类', '角色 / 分类'],
  ['创始人', '角色'],
  ['公司芯片', '公司标签'],
  ['公司标签', '对象标签'],
  ['客户试点', '试点'],
  ['用户行为', '行为'],
  ['健康度', '状态度'],
  ['AI Capital Lab', '研究机构'],
  ['AI Capital', '研究机构'],
];

const KEY_REPLACEMENTS = [
  ['unicornScene', 'dynamicVisual'],
  ['risk', 'status'],
  ['asset', 'category'],
  ['tracklist', 'itemList'],
  ['track', 'guide'],
  ['record', 'visual'],
  ['scene', 'content'],
  ['deal', 'example'],
  ['round', 'stage'],
  ['sector', 'category'],
  ['valuation', 'metric'],
  ['capital', 'resource'],
  ['funding', 'metric'],
  ['holding', 'row'],
  ['portfolio', 'collection'],
  ['artist', 'member'],
  ['music', 'media'],
];

const REPEATED_GENERIC_TEXT_REPLACEMENTS = [
  ['分类分类', '分类'],
  ['数值数值', '数值'],
  ['状态状态', '状态'],
  ['条目条目', '条目'],
  ['指标指标', '指标'],
];

export function normalizeControlText(value) {
  if (typeof value !== 'string') return value;
  let next = value;
  for (const [from, to] of TEXT_REPLACEMENTS) {
    next = next.replaceAll(from, to);
  }
  for (const [from, to] of REPEATED_GENERIC_TEXT_REPLACEMENTS) {
    next = next.replaceAll(from, to);
  }
  return next.replace(/\s+/g, ' ').trim();
}

export function normalizeControlValue(value) {
  if (typeof value === 'string') return normalizeControlText(value);
  if (Array.isArray(value)) return value.map(normalizeControlValue);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [
    key,
    key === 'value' || key === 'image' ? item : normalizeControlValue(item),
  ]));
}

export function normalizePublicControls(controls, context = {}) {
  const seen = new Map();
  return (controls || []).map((control, index) => {
    const normalized = normalizePublicControl(control, { ...context, index });
    const basePublicKey = normalized.publicKey || normalized.key;
    const count = seen.get(basePublicKey) || 0;
    seen.set(basePublicKey, count + 1);
    if (!count) return normalized;
    return {
      ...normalized,
      publicKey: `${basePublicKey}${count + 1}`,
    };
  });
}

export function normalizePublicControl(control, context = {}) {
  const key = control.key || control.prop;
  const label = normalizeControlText(control.label || key);
  const desc = normalizeControlText(control.desc || control.description || control.describe);
  const publicKey = normalizePublicKey(key, { ...control, label, desc }, context);
  return {
    ...control,
    key,
    publicKey,
    publicLabel: label,
    label,
    desc,
    description: desc,
    options: normalizeControlValue(control.options),
  };
}

export function normalizePublicKey(key, control = {}) {
  if (!key) return key;
  const exact = exactPublicKey(key);
  if (exact) return exact;

  let next = key;
  for (const [from, to] of KEY_REPLACEMENTS) {
    next = replaceKeyToken(next, from, to);
  }

  if (next !== key) return lowerFirst(next);

  const text = `${control.label || ''} ${control.desc || control.description || ''}`;
  if (/状态等级|状态强度/.test(text)) return key.startsWith('show') ? 'showStatusRating' : 'statusLevel';
  if (/分类/.test(text) && key.endsWith('Count')) return 'categoryCount';
  if (/条目/.test(text) && key.endsWith('Count')) return 'itemCount';
  if (/数值/.test(text) && /^show/i.test(key)) return 'showValueLabels';
  return key;
}

export function resolvePublicPropAliases(props = {}, controls = []) {
  const aliasToKey = new Map();
  const rawKeys = new Set();
  for (const control of controls || []) {
    if (!control?.key) continue;
    rawKeys.add(control.key);
    if (control.publicKey && control.publicKey !== control.key) aliasToKey.set(control.publicKey, control.key);
  }

  const next = {};
  const appliedAliases = {};
  for (const [key, value] of Object.entries(props || {})) {
    const rawKey = aliasToKey.get(key);
    if (rawKey && !Object.hasOwn(props, rawKey)) {
      next[rawKey] = value;
      appliedAliases[key] = rawKey;
    } else {
      next[key] = value;
    }
  }
  return { props: next, appliedAliases, rawKeys, aliasToKey };
}

export function toPublicProps(props = {}, controls = []) {
  const keyToAlias = new Map();
  for (const control of controls || []) {
    if (control?.key) keyToAlias.set(control.key, control.publicKey || control.key);
  }
  return Object.fromEntries(Object.entries(props || {}).map(([key, value]) => [
    keyToAlias.get(key) || key,
    value,
  ]));
}

function exactPublicKey(key) {
  const exact = {
    showDeals: 'showExamples',
    riskCount: 'statusItemCount',
    showRisk: 'showStatus',
    showRating: 'showStatusRating',
    showLevel: 'showStatusLevel',
    showValuation: 'showMetricMarker',
    showTracklist: 'showItemList',
    trackCount: 'itemCount',
    recordSide: 'visualSide',
    sceneCount: 'contentItemCount',
    showScenes: 'showItemTags',
    quarterCount: 'timeColumnCount',
    assetCount: 'categoryCount',
    flowStageCount: 'stepCount',
  };
  return exact[key] || null;
}

function replaceKeyToken(value, from, to) {
  const lowerPattern = new RegExp(`(^|[_-])${from}(?=$|[_-])`, 'ig');
  const upperPattern = new RegExp(`${upperFirst(from)}(?=$|[A-Z])`, 'g');
  return value
    .replace(lowerPattern, (match, prefix) => `${prefix}${to}`)
    .replace(upperPattern, upperFirst(to));
}

function lowerFirst(value) {
  return value ? `${value[0].toLowerCase()}${value.slice(1)}` : value;
}

function upperFirst(value) {
  return value ? `${value[0].toUpperCase()}${value.slice(1)}` : value;
}
