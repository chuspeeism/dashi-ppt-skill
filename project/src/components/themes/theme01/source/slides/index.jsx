// slides/index.jsx — deck manifest. Standard exports only; no globals.
//
// Each entry is fully self-describing for migration into another React app:
//   id           stable string key
//   label        slide label (used for deck-stage section + tweak grouping)
//   component    the React component (controlled ONLY by props)
//   defaultProps complete default prop object
//   controls     tweak schema, one entry per adjustable prop (field names map
//                1:1 to props). Control shape:
//                  { key, label, type, default, description,
//                    min?, max?, step?, unit?,        // type 'number'
//                    options?,                          // 'select'|'color'|'palette'
//                    countKey? }                        // 'images' — slot count prop
//                types: number | boolean | select | color | palette | images
//
// To use a slide standalone elsewhere:
//   import Slide05Sector, { defaultProps, controls } from './Slide05Sector.jsx';
//   <div style={{width:1920,height:1080}}><Slide05Sector {...defaultProps} /></div>

import Slide01Cover, { defaultProps as p1, controls as c1 } from './Slide01Cover.jsx';
import Slide02Method, { defaultProps as p2, controls as c2 } from './Slide02Method.jsx';
import Slide03Trend, { defaultProps as p3, controls as c3 } from './Slide03Trend.jsx';
import Slide04Chain, { defaultProps as p4, controls as c4 } from './Slide04Chain.jsx';
import Slide05Sector, { defaultProps as p5, controls as c5 } from './Slide05Sector.jsx';
import Slide06Ranking, { defaultProps as p6, controls as c6 } from './Slide06Ranking.jsx';
import Slide07Case, { defaultProps as p7, controls as c7 } from './Slide07Case.jsx';
import Slide08Quadrant, { defaultProps as p8, controls as c8 } from './Slide08Quadrant.jsx';
import Slide09Rounds, { defaultProps as p9, controls as c9 } from './Slide09Rounds.jsx';
import Slide10Region, { defaultProps as p10, controls as c10 } from './Slide10Region.jsx';
import Slide11Risk, { defaultProps as p11, controls as c11 } from './Slide11Risk.jsx';
import Slide12Outlook, { defaultProps as p12, controls as c12 } from './Slide12Outlook.jsx';
import Slide13Monthly, { defaultProps as p13, controls as c13 } from './Slide13Monthly.jsx';
import Slide14CaseBrief, { defaultProps as p14, controls as c14, coreweaveProps as p14b } from './Slide14CaseBrief.jsx';
import Slide15Conclusion, { defaultProps as p15, controls as c15 } from './Slide15Conclusion.jsx';
// Template page types (section divider / big number / table / pull-quote).
import SlideChapter, { defaultProps as pCh, controls as cCh } from './SlideChapter.jsx';
import SlideBigNumber, { defaultProps as pBn, controls as cBn } from './SlideBigNumber.jsx';
import SlideTable, { defaultProps as pTb, controls as cTb } from './SlideTable.jsx';
import SlideQuote, { defaultProps as pQt, controls as cQt } from './SlideQuote.jsx';
// New reusable archetypes (timeline / image montage / image feature / stat grid).
import SlideTimeline, { defaultProps as pTl, controls as cTl } from './SlideTimeline.jsx';
import SlideGallery, { defaultProps as pGl, controls as cGl } from './SlideGallery.jsx';
import SlideImageFeature, { defaultProps as pIf, controls as cIf } from './SlideImageFeature.jsx';
import SlideStatGrid, { defaultProps as pSg, controls as cSg } from './SlideStatGrid.jsx';
import SlideTreemap, { defaultProps as pTm, controls as cTm } from './SlideTreemap.jsx';
import SlideFeaturePoints, { defaultProps as pFp, controls as cFp } from './SlideFeaturePoints.jsx';
import SlideStickerStat, { defaultProps as pSt, controls as cSt } from './SlideStickerStat.jsx';
import SlidePhaseRoadmap, { defaultProps as pPr, controls as cPr } from './SlidePhaseRoadmap.jsx';
import SlideAppendix, { defaultProps as pAx, controls as cAx } from './SlideAppendix.jsx';
import SlideContents, { defaultProps as pCo, controls as cCo } from './SlideContents.jsx';
import SlideVersus, { defaultProps as pVs, controls as cVs } from './SlideVersus.jsx';
import SlideFunnel, { defaultProps as pFn, controls as cFn } from './SlideFunnel.jsx';
import SlideImageBanner, { defaultProps as pIb, controls as cIb } from './SlideImageBanner.jsx';
import SlideBubbleScatter, { defaultProps as pBs, controls as cBs } from './SlideBubbleScatter.jsx';
import SlideGlobalSplit, { defaultProps as pGs, controls as cGs } from './SlideGlobalSplit.jsx';
import SlideInvestorBoard, { defaultProps as pInv, controls as cInv } from './SlideInvestorBoard.jsx';
import SlideStickerCollage, { defaultProps as pScl, controls as cScl } from './SlideStickerCollage.jsx';
import SlideHeatmap, { defaultProps as pHm, controls as cHm } from './SlideHeatmap.jsx';
import SlideGrowthBars, { defaultProps as pGb, controls as cGb } from './SlideGrowthBars.jsx';
import SlideHeroOverlay, { defaultProps as pHo, controls as cHo } from './SlideHeroOverlay.jsx';
import SlideKpiDial, { defaultProps as pKd, controls as cKd } from './SlideKpiDial.jsx';
import SlideEvilBars, { defaultProps as pEb, controls as cEb } from './SlideEvilBars.jsx';
import SlideRadar, { defaultProps as pRad, controls as cRad } from './SlideRadar.jsx';
import SlideWaterfall, { defaultProps as pWf, controls as cWf } from './SlideWaterfall.jsx';
import SlideDumbbell, { defaultProps as pDb, controls as cDb } from './SlideDumbbell.jsx';
import SlideStickerWall, { defaultProps as pSw, controls as cSw } from './SlideStickerWall.jsx';
import SlideBumpChart, { defaultProps as pBm, controls as cBm } from './SlideBumpChart.jsx';
import SlideWaffle, { defaultProps as pWa, controls as cWa } from './SlideWaffle.jsx';
import SlideEditorialFeature, { defaultProps as pEd, controls as cEd } from './SlideEditorialFeature.jsx';
import SlideStackedBars, { defaultProps as pStk, controls as cStk } from './SlideStackedBars.jsx';
import SlideArcGauges, { defaultProps as pAg, controls as cAg } from './SlideArcGauges.jsx';
import SlideGroupedColumns, { defaultProps as pGc, controls as cGc } from './SlideGroupedColumns.jsx';
import SlideFilmstrip, { defaultProps as pFs, controls as cFs } from './SlideFilmstrip.jsx';
import SlideDiverging, { defaultProps as pDv, controls as cDv } from './SlideDiverging.jsx';
import SlidePolarRose, { defaultProps as pPr2, controls as cPr2 } from './SlidePolarRose.jsx';
import SlideMekko, { defaultProps as pMk, controls as cMk } from './SlideMekko.jsx';
import SlideTriptych, { defaultProps as pTpy, controls as cTpy } from './SlideTriptych.jsx';
import SlideTypeStatement, { defaultProps as pTs, controls as cTs } from './SlideTypeStatement.jsx';
import SlideSankey, { defaultProps as pSk, controls as cSk } from './SlideSankey.jsx';
import SlideTierPyramid, { defaultProps as pTp, controls as cTp } from './SlideTierPyramid.jsx';
import SlideSplitDiptych, { defaultProps as pSd, controls as cSd } from './SlideSplitDiptych.jsx';
import SlideScorecard, { defaultProps as pSc, controls as cSc } from './SlideScorecard.jsx';
import SlideEvilTrio, { defaultProps as pEt, controls as cEt } from './SlideEvilTrio.jsx';
import SlideDonut, { defaultProps as pDn, controls as cDn } from './SlideDonut.jsx';
import SlideMagCover, { defaultProps as pMc, controls as cMc } from './SlideMagCover.jsx';
import SlideMatrix, { defaultProps as pMx, controls as cMx } from './SlideMatrix.jsx';
import SlideBento, { defaultProps as pBt, controls as cBt } from './SlideBento.jsx';
import SlideLollipop, { defaultProps as pLp, controls as cLp } from './SlideLollipop.jsx';
import SlideSlope, { defaultProps as pSlp, controls as cSlp } from './SlideSlope.jsx';
import SlideSpotlightTags, { defaultProps as pSpt, controls as cSpt } from './SlideSpotlightTags.jsx';
import SlideZigzagTimeline, { defaultProps as pZz, controls as cZz } from './SlideZigzagTimeline.jsx';
import SlideStreamArea, { defaultProps as pSa, controls as cSa } from './SlideStreamArea.jsx';
import SlideBullet, { defaultProps as pBu, controls as cBu } from './SlideBullet.jsx';
import SlideGantt, { defaultProps as pGt, controls as cGt } from './SlideGantt.jsx';
// Cover suite — four distinct cover layouts sharing the same visual language.
import SlideCoverEditorial, { defaultProps as pCvE, controls as cCvE } from './SlideCoverEditorial.jsx';
import SlideCoverMinimal, { defaultProps as pCvM, controls as cCvM } from './SlideCoverMinimal.jsx';
import SlideCoverBento, { defaultProps as pCvB, controls as cCvB } from './SlideCoverBento.jsx';
import SlideCoverMasthead, { defaultProps as pCvMa, controls as cCvMa } from './SlideCoverMasthead.jsx';

export {
  Slide01Cover, Slide02Method, Slide03Trend, Slide04Chain,
  Slide05Sector, Slide06Ranking, Slide07Case, Slide08Quadrant,
  Slide09Rounds, Slide10Region, Slide11Risk, Slide12Outlook,
  Slide13Monthly, Slide14CaseBrief, Slide15Conclusion,
  SlideChapter, SlideBigNumber, SlideTable, SlideQuote,
  SlideTimeline, SlideGallery, SlideImageFeature, SlideStatGrid,
  SlideTreemap, SlideFeaturePoints,
  SlideStickerStat, SlidePhaseRoadmap, SlideAppendix,
  SlideContents, SlideVersus, SlideFunnel, SlideImageBanner,
  SlideBubbleScatter, SlideGlobalSplit, SlideInvestorBoard, SlideStickerCollage,
  SlideHeatmap, SlideGrowthBars, SlideHeroOverlay, SlideKpiDial, SlideEvilBars,
  SlideRadar, SlideWaterfall, SlideDumbbell, SlideStickerWall,
  SlideBumpChart, SlideWaffle, SlideEditorialFeature, SlideStackedBars,
  SlideArcGauges, SlideGroupedColumns, SlideFilmstrip, SlideDiverging,
  SlidePolarRose, SlideMekko, SlideTriptych, SlideTypeStatement,
  SlideSankey, SlideTierPyramid, SlideSplitDiptych, SlideScorecard,
  SlideEvilTrio,
  SlideDonut, SlideMagCover, SlideMatrix, SlideBento,
  SlideLollipop, SlideSlope, SlideSpotlightTags, SlideZigzagTimeline,
  SlideStreamArea, SlideBullet, SlideGantt,
  SlideCoverEditorial, SlideCoverMinimal, SlideCoverBento, SlideCoverMasthead,
};

// Reuse: same SlideImageBanner re-skinned for the 2026 IPO exit-window page.
export const ipoBannerProps = {
  kicker: '2026 · 资本退出',
  title: 'IPO 临近，进入兑现期',
  en: 'The Exit Window Opens',
  cn: '头部公司排队上市，市场迎来定价时刻',
  lead: 'Anthropic 已于 2026 年 6 月递交 IPO 申请、预计年内上市。一级市场的天价估值，即将在二级市场接受真金白银的检验。',
  highlightWord: '真金白银',
  stats: [
    { value: '2026', unit: '', label: 'Anthropic 递交 IPO' },
    { value: '9650', unit: '亿', label: '最新估值 · 美元' },
    { value: '>1000', unit: '×', label: '估值 / 收入倍数' },
  ],
  images: ['', ''],
  caption: '满版图片 · 退出窗口开启，估值迎来定价时刻',
  imageSlotCount: 1, imageFit: 'cover', backgroundMode: 'unicorn', unicornScene: 'tech', plate: 'bottom-right', statCount: 3,
  highlight: true, highlightIndex: 2, showHighlighter: true, accentColor: '#e8503a', showCaption: true,
};

// Reuse: SlideQuote re-skinned for the Anthropic CEO's verbatim quote (the
// human / founder voice the deck otherwise lacks).
export const darioQuoteProps = {
  kicker: 'CEO 视角 · Anthropic',
  quote: '我们相信，通过「Constitutional AI」等方法构建可解释、可控的系统，比单纯追求规模更符合长远利益。',
  contrastWord: '单纯追求规模',
  highlightWord: '可解释、可控',
  attribution: 'Dario Amodei · Anthropic CEO',
  caption: '金句 · 安全对齐，是 Anthropic 的护城河',
  notes: [{ label: '安全对齐', tone: 'accent' }, { label: '长远利益', tone: 'muted' }],
  accentColor: '#c9f24d', noteCount: 2, showQuoteMark: true, showHighlighter: true,
  showAttribution: true, align: 'left', showCaption: true,
};

// Reuse-props for template pages that re-skin a shared component with new data
// (same pattern as case-xai / case-coreweave reusing Slide14CaseBrief).
export const top10Props = {
  kicker: '# 横向透视',
  title: '头部玩家 · 单笔融资 Top 10',
  en: 'Top 10 Single Rounds',
  cn: '单笔融资额最大的 10 家公司',
  columns: ['排名 · 公司', '主营赛道', '融资额 / 亿美元'],
  textCols: [1],
  rows: [
    ['1 · OpenAI', '通用大模型', '66'],
    ['2 · Anthropic', '通用大模型', '65'],
    ['3 · xAI', '通用大模型', '50'],
    ['5 · CoreWeave', 'AI 基础设施', '11'],
    ['7 · Scale AI', 'AI 基础设施', '10'],
    ['4 · Safe Superintelligence', '通用大模型', '10'],
    ['6 · Figure AI', 'AI 硬件 · 机器人', '6.8'],
    ['8 · Perplexity AI', '垂直应用 · 搜索', '5.2'],
    ['9 · Databricks', 'AI 基础设施', '5.0'],
    ['10 · Glean', '垂直应用 · 企业搜索', '2.6'],
  ],
  footer: null,
  caption: '表格 · 前三均为通用大模型，单笔规模断层领先',
  rowCount: 10, emphasizeCol: 2, showBars: true, highlight: true, highlightIndex: 0,
  striped: true, showFooter: false, accentColor: '#46b083', showCaption: true,
};
export const chapterMarketProps = {
  kicker: '章节', partLabel: 'PART 02', index: '02', title: '市场全景',
  en: 'Market Overview',
  desc: '沿时间轴追踪同一指标的演化——趋势向上还是向下、拐点在何处、节奏是否可持续。',
  topics: [
    { label: '逐季度走势' },
    { label: '逐月热度' },
    { label: '融资节奏' },
    { label: '热度分布' },
    { label: '结构变迁' },
  ],
  caption: '章节导航 · 纵向看市场节奏',
  topicCount: 5, highlight: true, highlightIndex: 0, showGhost: true,
  accentColor: '#5b8def', imageSlotCount: 0, imageFit: 'cover', images: ['', ''], showCaption: true,
};
export const computeProps = {
  kicker: '横向透视 · 产业链上游',
  title: '算力「卖铲子」',
  en: 'Picks & Shovels of the AI Rush',
  lead: '当所有模型公司都在抢 GPU，提前锁定算力的基础设施商反而成为稀缺标的——淘金热里卖铲子的人也赚翻了。',
  highlightWord: '稀缺标的',
  bigStat: { value: '255', unit: '亿', label: '上游芯片 + 基础设施吸纳资金' },
  stats: [
    { value: '97', unit: '亿', label: 'AI 芯片' },
    { value: '158', unit: '亿', label: '算力 / 基础设施' },
    { value: '190', unit: '亿', label: 'CoreWeave 估值' },
  ],
  images: ['', '', ''],
  caption: '图片特写 · 上游算力为何最确定',
  imageSlotCount: 1, imageFit: 'cover', imageLayout: 'normal', layout: 'split-right',
  statCount: 3, highlight: true, showHighlighter: true, accentColor: '#e0a23a', showCaption: true,
};
export const chapterRiskProps = {
  kicker: '章节', partLabel: 'PART 06', index: '06', title: '风险与展望',
  en: 'Risks & Outlook',
  desc: '纪录之下，泡沫、监管、巨头挤压与算力卡脖子四重信号并存。资本的下一阶段，将从「赌叙事」转向「看兑现」。',
  topics: [{ label: '估值泡沫' }, { label: '风险研判' }, { label: '投资展望' }, { label: '阶段策略' }, { label: '监管政策' }],
  caption: '章节导航 · 从风险信号到监管政策',
  topicCount: 5, highlight: true, highlightIndex: 0, showGhost: true,
  accentColor: '#e8503a', imageSlotCount: 0, imageFit: 'cover', images: ['', ''], showCaption: true,
};
export const chapterCaseProps = {
  kicker: '章节', partLabel: 'PART 05', index: '05', title: '典型案例',
  en: 'Deep-Dive Case Studies',
  desc: '从追赶到反超、从挑战者到“卖铲人”——用五个标杆案例，拆解资本为何下注、又如何兑现。',
  topics: [{ label: 'Anthropic' }, { label: 'xAI' }, { label: 'CoreWeave' }, { label: 'Mistral' }, { label: 'Perplexity' }],
  caption: '章节导航 · 五个标杆案例',
  topicCount: 5, highlight: true, highlightIndex: 0, showGhost: true,
  accentColor: '#7a5ae0', imageSlotCount: 0, imageFit: 'cover', images: ['', ''], showCaption: true,
};

export const slides = [
  { id: 'cover-editorial', label: '封面 · 编辑式双栏', component: SlideCoverEditorial, defaultProps: pCvE, controls: cCvE },
  { id: 'cover-minimal', label: '封面 · 居中极简', component: SlideCoverMinimal, defaultProps: pCvM, controls: cCvM },
  { id: 'cover-bento', label: '封面 · 模块化便当格', component: SlideCoverBento, defaultProps: pCvB, controls: cCvB },
  { id: 'cover-masthead', label: '封面 · 磨砂玻璃刊头', component: SlideCoverMasthead, defaultProps: pCvMa, controls: cCvMa },
  { id: 'cover', label: '封面', component: Slide01Cover, defaultProps: p1, controls: c1 },
  { id: 'bignum', label: '大数字 · 资本体量', component: SlideBigNumber, defaultProps: pBn, controls: cBn },
  { id: 'statgrid', label: '关键数字一览', component: SlideStatGrid, defaultProps: pSg, controls: cSg },
  { id: 'bento', label: '便当速览 · 一图读懂', component: SlideBento, defaultProps: pBt, controls: cBt },
  { id: 'contents', label: '报告导览 · 目录', component: SlideContents, defaultProps: pCo, controls: cCo },
  { id: 'method', label: '横纵分析法', component: Slide02Method, defaultProps: p2, controls: c2 },
  { id: 'chapter-market', label: '章节 · 市场全景', component: SlideChapter, defaultProps: chapterMarketProps, controls: cCh },
  { id: 'trend', label: '纵向趋势', component: Slide03Trend, defaultProps: p3, controls: c3 },
  { id: 'chapter', label: '章节 · 横向透视', component: SlideChapter, defaultProps: pCh, controls: cCh },
  { id: 'chain', label: '产业链分层', component: Slide04Chain, defaultProps: p4, controls: c4 },
  { id: 'compute', label: '算力上游 · 卖铲子', component: SlideImageFeature, defaultProps: computeProps, controls: cIf },
  { id: 'sector', label: '赛道分布 · 融资额占比', component: Slide05Sector, defaultProps: p5, controls: c5 },
  { id: 'treemap', label: '赛道资金 · 矩形树图', component: SlideTreemap, defaultProps: pTm, controls: cTm },
  { id: 'sankey', label: '资金流向 · 桑基图', component: SlideSankey, defaultProps: pSk, controls: cSk },
  { id: 'ranking', label: '头部玩家', component: Slide06Ranking, defaultProps: p6, controls: c6 },
  { id: 'gallery', label: '头部玩家掠影', component: SlideGallery, defaultProps: pGl, controls: cGl },
  { id: 'table-top10', label: '表格 · Top 10', component: SlideTable, defaultProps: top10Props, controls: cTb },
  { id: 'funnel', label: '资金集中度 · 漏斗', component: SlideFunnel, defaultProps: pFn, controls: cFn },
  { id: 'tier-pyramid', label: '估值梯队 · 金字塔', component: SlideTierPyramid, defaultProps: pTp, controls: cTp },
  { id: 'chapter-case', label: '章节 · 典型案例', component: SlideChapter, defaultProps: chapterCaseProps, controls: cCh },
  { id: 'versus', label: '三强横向对比', component: SlideVersus, defaultProps: pVs, controls: cVs },
  { id: 'case', label: '典型案例', component: Slide07Case, defaultProps: p7, controls: c7 },
  { id: 'quote-dario', label: '金句 · CEO 视角', component: SlideQuote, defaultProps: darioQuoteProps, controls: cQt },
  { id: 'timeline', label: '里程碑时间轴', component: SlideTimeline, defaultProps: pTl, controls: cTl },
  { id: 'case-strength', label: '核心竞争力', component: SlideFeaturePoints, defaultProps: pFp, controls: cFp },
  { id: 'banner-embodied', label: '前沿赛道 · 具身智能', component: SlideImageBanner, defaultProps: pIb, controls: cIb },
  { id: 'quadrant', label: '资本四象限', component: Slide08Quadrant, defaultProps: p8, controls: c8 },
  { id: 'rounds', label: '轮次结构', component: Slide09Rounds, defaultProps: p9, controls: c9 },
  { id: 'table', label: '表格 · 轮次明细', component: SlideTable, defaultProps: pTb, controls: cTb },
  { id: 'region', label: '地区分布', component: Slide10Region, defaultProps: p10, controls: c10 },
  { id: 'feature-region', label: '湾区 · 地理护城河', component: SlideImageFeature, defaultProps: pIf, controls: cIf },
  { id: 'chapter-risk', label: '章节 · 风险与展望', component: SlideChapter, defaultProps: chapterRiskProps, controls: cCh },
  { id: 'sticker-bubble', label: '大数字 · 估值泡沫', component: SlideStickerStat, defaultProps: pSt, controls: cSt },
  { id: 'risk', label: '风险研判', component: Slide11Risk, defaultProps: p11, controls: c11 },
  { id: 'outlook', label: '投资展望', component: Slide12Outlook, defaultProps: p12, controls: c12 },
  { id: 'roadmap', label: '阶段性策略路线图', component: SlidePhaseRoadmap, defaultProps: pPr, controls: cPr },
  { id: 'banner-ipo', label: '满版图片 · IPO 退出窗口', component: SlideImageBanner, defaultProps: ipoBannerProps, controls: cIb },
  { id: 'evil-trio', label: '三个数字 · 资本格局', component: SlideEvilTrio, defaultProps: pEt, controls: cEt },
  { id: 'split-diptych', label: '满版对比 · 双联画面', component: SlideSplitDiptych, defaultProps: pSd, controls: cSd },
  { id: 'monthly', label: '月度节奏', component: Slide13Monthly, defaultProps: p13, controls: c13 },
  { id: 'case-xai', label: '典型案例 · xAI', component: Slide14CaseBrief, defaultProps: p14, controls: c14 },
  { id: 'case-coreweave', label: '典型案例 · CoreWeave', component: Slide14CaseBrief, defaultProps: p14b, controls: c14 },
  { id: 'quote', label: '金句 · 一句话总结', component: SlideQuote, defaultProps: pQt, controls: cQt },
  { id: 'global-split', label: '全球版图 · 资金分布', component: SlideGlobalSplit, defaultProps: pGs, controls: cGs },
  { id: 'investors', label: '活跃投资机构榜', component: SlideInvestorBoard, defaultProps: pInv, controls: cInv },
  { id: 'scorecard', label: '标的评分卡 · 尽调五维', component: SlideScorecard, defaultProps: pSc, controls: cSc },
  { id: 'bubble-scatter', label: '市销率天梯 · 估值 vs 收入', component: SlideBubbleScatter, defaultProps: pBs, controls: cBs },
  { id: 'collage-frontier', label: '贴纸拼贴 · 前沿掠影', component: SlideStickerCollage, defaultProps: pScl, controls: cScl },
  { id: 'heatmap', label: '资金热力矩阵', component: SlideHeatmap, defaultProps: pHm, controls: cHm },
  { id: 'growth-bars', label: '增速排行 · 条形图', component: SlideGrowthBars, defaultProps: pGb, controls: cGb },
  { id: 'lollipop', label: '吸金力排行 · 棒棒糖图', component: SlideLollipop, defaultProps: pLp, controls: cLp },
  { id: 'slope', label: '资金迁移 · 斜率图', component: SlideSlope, defaultProps: pSlp, controls: cSlp },
  { id: 'spotlight-tags', label: '标签化特写 · 前沿掠影', component: SlideSpotlightTags, defaultProps: pSpt, controls: cSpt },
  { id: 'zigzag-timeline', label: '年度关键节点 · 纵向时间线', component: SlideZigzagTimeline, defaultProps: pZz, controls: cZz },
  { id: 'stream-area', label: '流式面积图 · 构成演变', component: SlideStreamArea, defaultProps: pSa, controls: cSa },
  { id: 'bullet', label: '子弹图 · 目标达成度', component: SlideBullet, defaultProps: pBu, controls: cBu },
  { id: 'gantt', label: '甘特排期 · IPO 上市窗口', component: SlideGantt, defaultProps: pGt, controls: cGt },
  { id: 'hero-compute', label: '满版图片 · 算力新基建', component: SlideHeroOverlay, defaultProps: pHo, controls: cHo },
  { id: 'mag-cover', label: '杂志封面 · 算力军备竞赛', component: SlideMagCover, defaultProps: pMc, controls: cMc },
  { id: 'kpi-dial', label: '关键占比 · 柱状图', component: SlideEvilBars, defaultProps: pEb, controls: cEb },
  { id: 'radar', label: '三强能力雷达', component: SlideRadar, defaultProps: pRad, controls: cRad },
  { id: 'matrix', label: '能力对比矩阵', component: SlideMatrix, defaultProps: pMx, controls: cMx },
  { id: 'waterfall', label: '资金瀑布 · 构成', component: SlideWaterfall, defaultProps: pWf, controls: cWf },
  { id: 'dumbbell', label: '估值跃迁 · 哑铃图', component: SlideDumbbell, defaultProps: pDb, controls: cDb },
  { id: 'sticker-wall', label: '年度热词 · 标签墙', component: SlideStickerWall, defaultProps: pSw, controls: cSw },
  { id: 'bump-rank', label: '排位赛 · 座次变化', component: SlideBumpChart, defaultProps: pBm, controls: cBm },
  { id: 'stacked-mix', label: '构成演变 · 百分比堆叠', component: SlideStackedBars, defaultProps: pStk, controls: cStk },
  { id: 'waffle', label: '像形方格图 · 资金去向', component: SlideWaffle, defaultProps: pWa, controls: cWa },
  { id: 'editorial', label: '专题特写 · AI Agent', component: SlideEditorialFeature, defaultProps: pEd, controls: cEd },
  { id: 'arc-gauges', label: '环形仪表 · 关键比率', component: SlideArcGauges, defaultProps: pAg, controls: cAg },
  { id: 'grouped-columns', label: '同比对比 · 分组柱状图', component: SlideGroupedColumns, defaultProps: pGc, controls: cGc },
  { id: 'filmstrip', label: '影像长卷 · 关键时刻', component: SlideFilmstrip, defaultProps: pFs, controls: cFs },
  { id: 'diverging', label: '多空信号 · 双向条形', component: SlideDiverging, defaultProps: pDv, controls: cDv },
  { id: 'polar-rose', label: '玫瑰图 · 赛道占比', component: SlidePolarRose, defaultProps: pPr2, controls: cPr2 },
  { id: 'donut', label: '甜甜圈 · 资金来源占比', component: SlideDonut, defaultProps: pDn, controls: cDn },
  { id: 'mekko', label: '赛道 × 阶段 · 可变宽堆叠', component: SlideMekko, defaultProps: pMk, controls: cMk },
  { id: 'triptych', label: '满版影像 · 三联现场', component: SlideTriptych, defaultProps: pTpy, controls: cTpy },
  { id: 'type-statement', label: '大字主张 · 从叙事到兑现', component: SlideTypeStatement, defaultProps: pTs, controls: cTs },
  { id: 'conclusion', label: '结论', component: Slide15Conclusion, defaultProps: p15, controls: c15 },
  { id: 'appendix', label: '附录 · 数据来源', component: SlideAppendix, defaultProps: pAx, controls: cAx },
];

export default slides;
