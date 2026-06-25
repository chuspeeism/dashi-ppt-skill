import React from 'react';
import { normalizeRuntimePages } from '../runtime-helpers.jsx';
import * as M_SlideAlloc from './source/slides/SlideAlloc.jsx';
import * as M_SlideCases from './source/slides/SlideCases.jsx';
import * as M_SlideChain from './source/slides/SlideChain.jsx';
import * as M_SlideClosing from './source/slides/SlideClosing.jsx';
import * as M_SlideCompare from './source/slides/SlideCompare.jsx';
import * as M_SlideConclusion from './source/slides/SlideConclusion.jsx';
import * as M_SlideContents from './source/slides/SlideContents.jsx';
import * as M_SlideCover from './source/slides/SlideCover.jsx';
import * as M_SlideCoverMast from './source/slides/SlideCoverMast.jsx';
import * as M_SlideCoverDiagonal from './source/slides/SlideCoverDiagonal.jsx';
import * as M_SlideCoverDossier from './source/slides/SlideCoverDossier.jsx';
import * as M_SlideCoverStrata from './source/slides/SlideCoverStrata.jsx';
import * as M_SlideCoverAperture from './source/slides/SlideCoverAperture.jsx';
import * as M_SlideCoverTerminal from './source/slides/SlideCoverTerminal.jsx';
import * as M_SlideCross from './source/slides/SlideCross.jsx';
import * as M_SlideDiptych from './source/slides/SlideDiptych.jsx';
import * as M_SlideDivider from './source/slides/SlideDivider.jsx';
import * as M_SlideEra from './source/slides/SlideEra.jsx';
import * as M_SlideFAQ from './source/slides/SlideFAQ.jsx';
import * as M_SlideFeature from './source/slides/SlideFeature.jsx';
import * as M_SlideFilmstrip from './source/slides/SlideFilmstrip.jsx';
import * as M_SlideFlow from './source/slides/SlideFlow.jsx';
import * as M_SlideFunnel from './source/slides/SlideFunnel.jsx';
import * as M_SlideGallery from './source/slides/SlideGallery.jsx';
import * as M_SlideGauge from './source/slides/SlideGauge.jsx';
import * as M_SlideGrade from './source/slides/SlideGrade.jsx';
import * as M_SlideHeatmap from './source/slides/SlideHeatmap.jsx';
import * as M_SlideHero from './source/slides/SlideHero.jsx';
import * as M_SlideImmersive from './source/slides/SlideImmersive.jsx';
import * as M_SlideLedger from './source/slides/SlideLedger.jsx';
import * as M_SlideManifesto from './source/slides/SlideManifesto.jsx';
import * as M_SlideMarket from './source/slides/SlideMarket.jsx';
import * as M_SlideMatrix from './source/slides/SlideMatrix.jsx';
import * as M_SlideMosaic from './source/slides/SlideMosaic.jsx';
import * as M_SlideOutlook from './source/slides/SlideOutlook.jsx';
import * as M_SlideOverlayCards from './source/slides/SlideOverlayCards.jsx';
import * as M_SlideOverview from './source/slides/SlideOverview.jsx';
import * as M_SlidePhases from './source/slides/SlidePhases.jsx';
import * as M_SlideProcess from './source/slides/SlideProcess.jsx';
import * as M_SlideProfile from './source/slides/SlideProfile.jsx';
import * as M_SlideQuadrant from './source/slides/SlideQuadrant.jsx';
import * as M_SlideQuote from './source/slides/SlideQuote.jsx';
import * as M_SlideRadar from './source/slides/SlideRadar.jsx';
import * as M_SlideRanking from './source/slides/SlideRanking.jsx';
import * as M_SlideRisk from './source/slides/SlideRisk.jsx';
import * as M_SlideRoadmap from './source/slides/SlideRoadmap.jsx';
import * as M_SlideRounds from './source/slides/SlideRounds.jsx';
import * as M_SlideScore from './source/slides/SlideScore.jsx';
import * as M_SlideSection from './source/slides/SlideSection.jsx';
import * as M_SlideSlope from './source/slides/SlideSlope.jsx';
import * as M_SlideSpotlight from './source/slides/SlideSpotlight.jsx';
import * as M_SlideStacked from './source/slides/SlideStacked.jsx';
import * as M_SlideStage from './source/slides/SlideStage.jsx';
import * as M_SlideStat from './source/slides/SlideStat.jsx';
import * as M_SlideTakeaway from './source/slides/SlideTakeaway.jsx';
import * as M_SlideTeam from './source/slides/SlideTeam.jsx';
import * as M_SlideTestimonial from './source/slides/SlideTestimonial.jsx';
import * as M_SlideTier from './source/slides/SlideTier.jsx';
import * as M_SlideTimeline from './source/slides/SlideTimeline.jsx';
import * as M_SlideTreemap from './source/slides/SlideTreemap.jsx';
import * as M_SlideTrend from './source/slides/SlideTrend.jsx';
import * as M_SlideVersus from './source/slides/SlideVersus.jsx';
import * as M_SlideVertical from './source/slides/SlideVertical.jsx';
import * as M_SlideWaterfall from './source/slides/SlideWaterfall.jsx';
import * as M_SlidePolaroid from './source/slides/SlidePolaroid.jsx';
import * as M_SlideHalfHero from './source/slides/SlideHalfHero.jsx';
import * as M_SlideZine from './source/slides/SlideZine.jsx';
import * as M_SlideRing from './source/slides/SlideRing.jsx';
import * as M_SlideJourney from './source/slides/SlideJourney.jsx';
import * as M_SlidePlans from './source/slides/SlidePlans.jsx';
import * as M_SlideChapterCard from './source/slides/SlideChapterCard.jsx';
import * as M_SlideMega from './source/slides/SlideMega.jsx';
import * as M_SlideBento from './source/slides/SlideBento.jsx';
import * as M_SlideCoverStory from './source/slides/SlideCoverStory.jsx';
import * as M_SlideMasonry from './source/slides/SlideMasonry.jsx';
import * as M_SlideRadialBar from './source/slides/SlideRadialBar.jsx';
import * as M_SlideCrosstab from './source/slides/SlideCrosstab.jsx';
import * as M_SlideOrbit from './source/slides/SlideOrbit.jsx';
import * as M_SlideThesis from './source/slides/SlideThesis.jsx';
import * as M_SlideAnnotated from './source/slides/SlideAnnotated.jsx';
import * as M_SlidePanorama from './source/slides/SlidePanorama.jsx';
import * as M_SlideExhibit from './source/slides/SlideExhibit.jsx';
import * as M_SlideStoryboard from './source/slides/SlideStoryboard.jsx';
import * as M_SlideMarimekko from './source/slides/SlideMarimekko.jsx';
import * as M_SlideDumbbell from './source/slides/SlideDumbbell.jsx';
import * as M_SlideScoreboard from './source/slides/SlideScoreboard.jsx';
import * as M_SlideEpigraph from './source/slides/SlideEpigraph.jsx';
import * as M_SlideSplit from './source/slides/SlideSplit.jsx';
import * as M_SlideRibbon from './source/slides/SlideRibbon.jsx';
import * as M_SlideDotfield from './source/slides/SlideDotfield.jsx';
import * as M_SlideVenn from './source/slides/SlideVenn.jsx';
import * as M_SlideTypeRiver from './source/slides/SlideTypeRiver.jsx';
import * as M_SlideBracket from './source/slides/SlideBracket.jsx';
import * as M_SlideMeter from './source/slides/SlideMeter.jsx';
import * as M_SlideStaircase from './source/slides/SlideStaircase.jsx';
import * as M_SlideSunburst from './source/slides/SlideSunburst.jsx';
import * as M_SlideStream from './source/slides/SlideStream.jsx';
import * as M_SlideBubble from './source/slides/SlideBubble.jsx';
import * as M_SlideTornado from './source/slides/SlideTornado.jsx';
import * as M_SlideHoneycomb from './source/slides/SlideHoneycomb.jsx';
import * as M_SlideNetwork from './source/slides/SlideNetwork.jsx';
import * as M_SlideSpiral from './source/slides/SlideSpiral.jsx';
import * as M_SlideFan from './source/slides/SlideFan.jsx';
import * as M_SlideChord from './source/slides/SlideChord.jsx';
import * as M_SlideBump from './source/slides/SlideBump.jsx';
import * as M_SlideRose from './source/slides/SlideRose.jsx';
import * as M_SlideParallel from './source/slides/SlideParallel.jsx';
import * as M_SlideCalendar from './source/slides/SlideCalendar.jsx';
import * as M_SlideIcicle from './source/slides/SlideIcicle.jsx';
import * as M_SlideArc from './source/slides/SlideArc.jsx';
import * as M_SlideRidgeline from './source/slides/SlideRidgeline.jsx';

const MODULES = [M_SlideCoverMast, M_SlideCoverDiagonal, M_SlideCoverDossier, M_SlideCoverStrata, M_SlideCoverAperture, M_SlideCoverTerminal, M_SlidePolaroid, M_SlideHalfHero, M_SlideZine, M_SlideRing, M_SlideJourney, M_SlidePlans, M_SlideChapterCard, M_SlideMega, M_SlideAlloc, M_SlideCases, M_SlideChain, M_SlideClosing, M_SlideCompare, M_SlideConclusion, M_SlideContents, M_SlideCover, M_SlideCross, M_SlideDiptych, M_SlideDivider, M_SlideEra, M_SlideFAQ, M_SlideFeature, M_SlideFilmstrip, M_SlideFlow, M_SlideFunnel, M_SlideGallery, M_SlideGauge, M_SlideGrade, M_SlideHeatmap, M_SlideHero, M_SlideImmersive, M_SlideLedger, M_SlideManifesto, M_SlideMarket, M_SlideMatrix, M_SlideMosaic, M_SlideOutlook, M_SlideOverlayCards, M_SlideOverview, M_SlidePhases, M_SlideProcess, M_SlideProfile, M_SlideQuadrant, M_SlideQuote, M_SlideRadar, M_SlideRanking, M_SlideRisk, M_SlideRoadmap, M_SlideRounds, M_SlideScore, M_SlideSection, M_SlideSlope, M_SlideSpotlight, M_SlideStacked, M_SlideStage, M_SlideStat, M_SlideTakeaway, M_SlideTeam, M_SlideTestimonial, M_SlideTier, M_SlideTimeline, M_SlideTreemap, M_SlideTrend, M_SlideVersus, M_SlideVertical, M_SlideWaterfall, M_SlideBento, M_SlideCoverStory, M_SlideMasonry, M_SlideRadialBar, M_SlideCrosstab, M_SlideOrbit, M_SlideThesis, M_SlideAnnotated, M_SlidePanorama, M_SlideExhibit, M_SlideStoryboard, M_SlideMarimekko, M_SlideDumbbell, M_SlideScoreboard, M_SlideEpigraph, M_SlideSplit, M_SlideRibbon, M_SlideDotfield, M_SlideVenn, M_SlideTypeRiver, M_SlideBracket, M_SlideMeter, M_SlideStaircase, M_SlideSunburst, M_SlideStream, M_SlideBubble, M_SlideTornado, M_SlideHoneycomb, M_SlideNetwork, M_SlideSpiral, M_SlideFan, M_SlideChord, M_SlideBump, M_SlideRose, M_SlideParallel, M_SlideCalendar, M_SlideIcicle, M_SlideArc, M_SlideRidgeline];
const REGISTRY = {};
MODULES.forEach(module => {
  if (module?.slideSpec) REGISTRY[module.slideSpec.slot] = { Component: module.default, spec: module.slideSpec };
});
const ORDERED = [
  {
    "label": "封面A 刊头",
    "slot": "covermast",
    "bgClass": "bg-deep"
  },
  {
    "label": "封面C 斜切",
    "slot": "coverdiag",
    "bgClass": "bg-night"
  },
  {
    "label": "封面D 卷宗",
    "slot": "coverdossier",
    "bgClass": "bg-electric"
  },
  {
    "label": "封面E 光带",
    "slot": "coverstrata",
    "bgClass": "bg-blue"
  },
  {
    "label": "封面F 光圈",
    "slot": "coveraperture",
    "bgClass": "bg-deep"
  },
  {
    "label": "封面G 终端",
    "slot": "coverterminal",
    "bgClass": "bg-night"
  },
  {
    "label": "Cover",
    "slot": "cover",
    "bgClass": "bg-blue"
  },
  {
    "label": "报告摘要",
    "slot": "overview",
    "bgClass": "bg-blue"
  },
  {
    "label": "点阵计数",
    "slot": "dotfield",
    "bgClass": "bg-deep"
  },
  {
    "label": "目录",
    "slot": "contents",
    "bgClass": "bg-blue"
  },
  {
    "label": "01 研究方法",
    "slot": "section",
    "bgClass": "bg-deep"
  },
  {
    "label": "02 市场全景",
    "slot": "market",
    "bgClass": "bg-blue"
  },
  {
    "label": "季度资金之流",
    "slot": "stream",
    "bgClass": "bg-deep"
  },
  {
    "label": "全景横幅",
    "slot": "panorama",
    "bgClass": "bg-night"
  },
  {
    "label": "焦点舞台",
    "slot": "stage",
    "bgClass": "bg-deep"
  },
  {
    "label": "03 横向透视",
    "slot": "cross",
    "bgClass": "bg-blue"
  },
  {
    "label": "板块联投",
    "slot": "chord",
    "bgClass": "bg-deep"
  },
  {
    "label": "层级旭日",
    "slot": "sunburst",
    "bgClass": "bg-deep"
  },
  {
    "label": "论点推演",
    "slot": "thesis",
    "bgClass": "bg-deep"
  },
  {
    "label": "全幅比例带",
    "slot": "ribbon",
    "bgClass": "bg-blue"
  },
  {
    "label": "04 产业链分层",
    "slot": "chain",
    "bgClass": "bg-deep"
  },
  {
    "label": "05 典型案例",
    "slot": "cases",
    "bgClass": "bg-blue"
  },
  {
    "label": "斜切分屏",
    "slot": "split",
    "bgClass": "bg-deep"
  },
  {
    "label": "分镜脚本",
    "slot": "storyboard",
    "bgClass": "bg-blue"
  },
  {
    "label": "图说特写",
    "slot": "feature",
    "bgClass": "bg-deep"
  },
  {
    "label": "影像速写",
    "slot": "polaroid",
    "bgClass": "bg-blue"
  },
  {
    "label": "06 风险研判",
    "slot": "risk",
    "bgClass": "bg-deep"
  },
  {
    "label": "06 投资展望",
    "slot": "outlook",
    "bgClass": "bg-blue"
  },
  {
    "label": "07 核心结论",
    "slot": "conclusion",
    "bgClass": "bg-deep"
  },
  {
    "label": "附录 · 透视",
    "slot": "divider",
    "bgClass": "bg-blue"
  },
  {
    "label": "卷首题词",
    "slot": "epigraph",
    "bgClass": "bg-deep"
  },
  {
    "label": "归纳括弧",
    "slot": "bracket",
    "bgClass": "bg-blue"
  },
  {
    "label": "封面影像",
    "slot": "coverstory",
    "bgClass": "bg-deep"
  },
  {
    "label": "08 轮次结构",
    "slot": "rounds",
    "bgClass": "bg-blue"
  },
  {
    "label": "08 资本排行",
    "slot": "ranking",
    "bgClass": "bg-deep"
  },
  {
    "label": "赛道名次",
    "slot": "bump",
    "bgClass": "bg-blue"
  },
  {
    "label": "同比对望",
    "slot": "tornado",
    "bgClass": "bg-blue"
  },
  {
    "label": "核心数字",
    "slot": "hero",
    "bgClass": "bg-blue"
  },
  {
    "label": "影像便当",
    "slot": "bento",
    "bgClass": "bg-deep"
  },
  {
    "label": "08 估值矩阵",
    "slot": "matrix",
    "bgClass": "bg-blue"
  },
  {
    "label": "数字对决",
    "slot": "versus",
    "bgClass": "bg-deep"
  },
  {
    "label": "标语字阵",
    "slot": "typeriver",
    "bgClass": "bg-blue"
  },
  {
    "label": "08 年度大事记",
    "slot": "timeline",
    "bgClass": "bg-deep"
  },
  {
    "label": "螺旋纪程",
    "slot": "spiral",
    "bgClass": "bg-blue"
  },
  {
    "label": "09 定位矩阵",
    "slot": "quadrant",
    "bgClass": "bg-blue"
  },
  {
    "label": "体量聚类",
    "slot": "bubble",
    "bgClass": "bg-deep"
  },
  {
    "label": "09 资本漏斗",
    "slot": "funnel",
    "bgClass": "bg-deep"
  },
  {
    "label": "市占矩形",
    "slot": "marimekko",
    "bgClass": "bg-blue"
  },
  {
    "label": "计量条",
    "slot": "meter",
    "bgClass": "bg-deep"
  },
  {
    "label": "09 关键指标",
    "slot": "stat",
    "bgClass": "bg-blue"
  },
  {
    "label": "交叉透视",
    "slot": "crosstab",
    "bgClass": "bg-deep"
  },
  {
    "label": "09 观点引述",
    "slot": "quote",
    "bgClass": "bg-deep"
  },
  {
    "label": "金句主张",
    "slot": "manifesto",
    "bgClass": "bg-blue"
  },
  {
    "label": "批注精读",
    "slot": "annotated",
    "bgClass": "bg-deep"
  },
  {
    "label": "10 资金流向",
    "slot": "flow",
    "bgClass": "bg-blue"
  },
  {
    "label": "资本弧网",
    "slot": "arc",
    "bgClass": "bg-deep"
  },
  {
    "label": "资本网络",
    "slot": "network",
    "bgClass": "bg-night"
  },
  {
    "label": "10 估值梯队",
    "slot": "tier",
    "bgClass": "bg-deep"
  },
  {
    "label": "数据台账",
    "slot": "ledger",
    "bgClass": "bg-blue"
  },
  {
    "label": "双联对照",
    "slot": "diptych",
    "bgClass": "bg-deep"
  },
  {
    "label": "10 资金用途",
    "slot": "alloc",
    "bgClass": "bg-blue"
  },
  {
    "label": "资金玫瑰",
    "slot": "rose",
    "bgClass": "bg-deep"
  },
  {
    "label": "环形纪程",
    "slot": "orbit",
    "bgClass": "bg-deep"
  },
  {
    "label": "数字海报",
    "slot": "mega",
    "bgClass": "bg-deep"
  },
  {
    "label": "10 全球格局",
    "slot": "radar",
    "bgClass": "bg-deep"
  },
  {
    "label": "区域画像",
    "slot": "parallel",
    "bgClass": "bg-blue"
  },
  {
    "label": "评级矩阵",
    "slot": "grade",
    "bgClass": "bg-blue"
  },
  {
    "label": "交集视图",
    "slot": "venn",
    "bgClass": "bg-deep"
  },
  {
    "label": "10 应用落地",
    "slot": "vertical",
    "bgClass": "bg-blue"
  },
  {
    "label": "影像拼贴",
    "slot": "mosaic",
    "bgClass": "bg-deep"
  },
  {
    "label": "径向透视",
    "slot": "radialbar",
    "bgClass": "bg-blue"
  },
  {
    "label": "10 公司版图",
    "slot": "treemap",
    "bgClass": "bg-deep"
  },
  {
    "label": "层级冰柱",
    "slot": "icicle",
    "bgClass": "bg-blue"
  },
  {
    "label": "陈列墙",
    "slot": "exhibit",
    "bgClass": "bg-blue"
  },
  {
    "label": "影像长卷",
    "slot": "filmstrip",
    "bgClass": "bg-night"
  },
  {
    "label": "10 资金瀑布",
    "slot": "waterfall",
    "bgClass": "bg-blue"
  },
  {
    "label": "10 月度热力",
    "slot": "heatmap",
    "bgClass": "bg-deep"
  },
  {
    "label": "投资日历",
    "slot": "calendar",
    "bgClass": "bg-blue"
  },
  {
    "label": "赛道蜂巢",
    "slot": "honeycomb",
    "bgClass": "bg-blue"
  },
  {
    "label": "瀑布影像",
    "slot": "masonry",
    "bgClass": "bg-blue"
  },
  {
    "label": "阶段时序",
    "slot": "phases",
    "bgClass": "bg-blue"
  },
  {
    "label": "影像纪程",
    "slot": "journey",
    "bgClass": "bg-deep"
  },
  {
    "label": "10 排名变迁",
    "slot": "slope",
    "bgClass": "bg-blue"
  },
  {
    "label": "区间对比",
    "slot": "dumbbell",
    "bgClass": "bg-deep"
  },
  {
    "label": "10 景气仪表",
    "slot": "gauge",
    "bgClass": "bg-deep"
  },
  {
    "label": "年度计分榜",
    "slot": "scoreboard",
    "bgClass": "bg-blue"
  },
  {
    "label": "影像卡集",
    "slot": "cards",
    "bgClass": "bg-blue"
  },
  {
    "label": "跨栏图景",
    "slot": "halfhero",
    "bgClass": "bg-deep"
  },
  {
    "label": "10 季度走势",
    "slot": "trend",
    "bgClass": "bg-blue"
  },
  {
    "label": "单笔分布",
    "slot": "ridge",
    "bgClass": "bg-deep"
  },
  {
    "label": "预测扇形",
    "slot": "fan",
    "bgClass": "bg-deep"
  },
  {
    "label": "方案对照",
    "slot": "plans",
    "bgClass": "bg-deep"
  },
  {
    "label": "阶梯递进",
    "slot": "stair",
    "bgClass": "bg-blue"
  },
  {
    "label": "10 结构演变",
    "slot": "stacked",
    "bgClass": "bg-deep"
  },
  {
    "label": "编年纪事",
    "slot": "era",
    "bgClass": "bg-blue"
  },
  {
    "label": "杂志跨页",
    "slot": "zine",
    "bgClass": "bg-deep"
  },
  {
    "label": "全幅图景",
    "slot": "immersive",
    "bgClass": "bg-night"
  },
  {
    "label": "10 布局路线",
    "slot": "roadmap",
    "bgClass": "bg-blue"
  },
  {
    "label": "10 赛道评分",
    "slot": "score",
    "bgClass": "bg-deep"
  },
  {
    "label": "人物证言",
    "slot": "testimonial",
    "bgClass": "bg-blue"
  },
  {
    "label": "篇章卡",
    "slot": "chapter",
    "bgClass": "bg-deep"
  },
  {
    "label": "11 核心要点",
    "slot": "takeaway",
    "bgClass": "bg-blue"
  },
  {
    "label": "12 多维对比",
    "slot": "compare",
    "bgClass": "bg-deep"
  },
  {
    "label": "13 实施路径",
    "slot": "process",
    "bgClass": "bg-blue"
  },
  {
    "label": "14 关键问答",
    "slot": "faq",
    "bgClass": "bg-deep"
  },
  {
    "label": "15 专题洞察",
    "slot": "spotlight",
    "bgClass": "bg-blue"
  },
  {
    "label": "16 研究团队",
    "slot": "team",
    "bgClass": "bg-deep"
  },
  {
    "label": "圆窗影像",
    "slot": "ring",
    "bgClass": "bg-blue"
  },
  {
    "label": "关于我们",
    "slot": "pf-profile",
    "bgClass": "bg-electric"
  },
  {
    "label": "企业掘影",
    "slot": "pf-gallery",
    "bgClass": "bg-electric"
  },
  {
    "label": "结语",
    "slot": "closing",
    "bgClass": "bg-blue"
  }
];
const rawPages = ORDERED.map(section => {
  const entry = REGISTRY[section.slot];
  if (!entry) return null;
  return {
    id: section.slot,
    label: section.label,
    bgClass: section.bgClass,
    Component: withDkScope(entry.Component),
    spec: entry.spec,
    controls: withTheme09Controls(entry.spec.controls || []),
    defaultProps: defaultsFromSpec(entry.spec),
  };
}).filter(Boolean);

export const runtimePages = normalizeRuntimePages(rawPages, { themeKey: 'theme09', layoutPrefix: 'THEME09' });

function defaultsFromSpec(spec) {
  const defaults = { ...(spec.defaults || {}) };
  (spec.controls || []).forEach(control => {
    const key = control.prop || control.key;
    if (!key || control.type === 'labelType' || control.type === 'focus') return;
    if (defaults[key] !== undefined) return;
    defaults[key] = typeof control.default === 'function' ? undefined : control.default;
  });
  return defaults;
}

function withTheme09Controls(controls = []) {
  return controls.map(control => {
    const key = control?.prop || control?.key;
    const next = inferControlBounds(control);
    if (key !== 'focusIndex') return next;
    return {
      ...next,
      displayOffset: next.displayOffset ?? 1,
    };
  });
}

function inferControlBounds(control) {
  if (control.maxFromKey || control.maxByKey || control.maxByValue) return control;
  const maxSource = typeof control.max === 'function' ? String(control.max) : '';
  const fromKeyMatch = maxSource.match(/p\.([A-Za-z0-9_$]+)\s*-\s*1/);
  if (fromKeyMatch) {
    return { ...control, maxFromKey: fromKeyMatch[1], maxFromKeyOffset: -1 };
  }
  return control;
}

function withDkScope(Component) {
  return function Theme09Page(props = {}) {
    const activeRef = React.useRef(null);
    React.useEffect(() => {
      const activeRoot = activeRef.current;
      if (!activeRoot) return;
      const section = activeRoot.closest('[data-deck-slide], .slide');
      if (!section) {
        activeRoot.setAttribute('data-deck-active', '');
        return;
      }
      const sync = () => {
        if (section.hasAttribute('data-deck-active')) activeRoot.setAttribute('data-deck-active', '');
        else activeRoot.removeAttribute('data-deck-active');
      };
      sync();
      const observer = new MutationObserver(sync);
      observer.observe(section, { attributes: true, attributeFilter: ['data-deck-active'] });
      return () => observer.disconnect();
    }, []);
    return React.createElement(
      'div',
      { className: 'dk-scope', style: { position: 'absolute', inset: 0, width: '100%', height: '100%' } },
      React.createElement(
        'div',
        { ref: activeRef, style: { position: 'absolute', inset: 0, width: '100%', height: '100%' } },
        React.createElement(Component, props),
      ),
    );
  };
}
