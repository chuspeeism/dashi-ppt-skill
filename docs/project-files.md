# 项目文件作用说明

本文件由 `scripts/update-project-docs.mjs` 生成,用于快速理解当前项目工作树下每个源码文件的主要作用。

```text
.
|-- .githooks/
|   `-- pre-commit - 项目源码或配置文件。
|-- assets/
|   |-- skill/
|   |   `-- theme-style-grid.png - 静态模板或浏览器运行时资源。
|   |-- unicorn/
|   |   |-- automations_remix_scene.json - 静态模板或浏览器运行时资源。
|   |   |-- goey_balls_remix_scene.json - 静态模板或浏览器运行时资源。
|   |   |-- moving_into_remix_scene.json - 静态模板或浏览器运行时资源。
|   |   `-- tech_background_remix_scene.json - 静态模板或浏览器运行时资源。
|   `-- template-swiss.html - 静态 PPT HTML 外壳模板,包含 16:9 舞台、翻页、控制面板、媒体替换、文本编辑、动画和导出运行时。
|-- docs/
|   |-- ADR.md - 项目文档。
|   |-- claude-design-12-theme-import-goal.md - 项目文档。
|   `-- project-files.md - 项目文档。
|-- examples/
|   |-- component-decks/
|   |   `-- all-themes-showcase.jsx - 组件化 deck 示例配置。
|   `-- goal-decks/
|       |-- annual-review.json - 按用户目标组合组件的 JSON 计划示例。
|       `-- portfolio.json - 按用户目标组合组件的 JSON 计划示例。
|-- scripts/
|   |-- check_latest_version.mjs - 本地命令脚本。
|   |-- control-naming-allowlist.json - 本地命令脚本。
|   |-- export-editable-pptx.mjs - 本地命令脚本。
|   |-- import-claude-themes.jsx - 本地命令脚本。
|   |-- inspect-layout.mjs - 本地命令脚本。
|   |-- layout-query.mjs - 本地命令脚本。
|   |-- render-deck.jsx - 本地命令脚本。
|   |-- render-goal-deck.jsx - 本地命令脚本。
|   |-- serve-preview-https.mjs - 本地命令脚本。
|   |-- skill-workflow-utils.mjs - 本地命令脚本。
|   |-- stage-media.mjs - 本地命令脚本。
|   |-- start-preview-server.mjs - 本地命令脚本。
|   |-- sync-skill.mjs - 本地命令脚本。
|   |-- update-generated-metadata.mjs - 本地命令脚本。
|   |-- update-layout-manifest.jsx - 本地命令脚本。
|   |-- update-project-docs.mjs - 本地命令脚本。
|   |-- validate-control-naming.mjs - 本地命令脚本。
|   |-- validate-dynamic-page-numbers.mjs - 本地命令脚本。
|   |-- validate-editable-pptx-export.mjs - 本地命令脚本。
|   |-- validate-editor-presenter-modes.mjs - 本地命令脚本。
|   |-- validate-editor-ui-polish.mjs - 本地命令脚本。
|   |-- validate-goal-copy.mjs - 本地命令脚本。
|   |-- validate-goal-spec.mjs - 本地命令脚本。
|   |-- validate-layout-showcase.mjs - 本地命令脚本。
|   |-- validate-overview-performance.mjs - 本地命令脚本。
|   |-- validate-pdf-export.mjs - 本地命令脚本。
|   |-- validate-skill-media-workflow.mjs - 本地命令脚本。
|   |-- validate-skill-workflow-tools.mjs - 本地命令脚本。
|   |-- validate-swiss-deck.mjs - 本地命令脚本。
|   |-- validate-theme-display-names.mjs - 本地命令脚本。
|   |-- validate-url-state.mjs - 本地命令脚本。
|   `-- write-safe-props.mjs - 本地命令脚本。
|-- src/
|   |-- components/
|   |   |-- shell/
|   |   |   |-- index.jsx - 页面外壳组件,给 slide 注入稳定 VM 标识。
|   |   |   `-- SlideShell.jsx - 页面外壳组件,给 slide 注入稳定 VM 标识。
|   |   |-- themes/
|   |   |   |-- theme01/
|   |   |   |   |-- source/
|   |   |   |   |   `-- slides/
|   |   |   |   |       |-- index.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide01Cover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide02Method.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide03Trend.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide04Chain.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide05Sector.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide06Ranking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide07Case.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide08Quadrant.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide09Rounds.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide10Region.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide11Risk.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide12Outlook.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide13Monthly.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide14CaseBrief.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Slide15Conclusion.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideAppendix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideArcGauges.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBento.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBigNumber.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBubbleScatter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBullet.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBumpChart.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideChapter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideContents.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverBento.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverEditorial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverMasthead.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverMinimal.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDiverging.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDonut.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDumbbell.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideEditorialFeature.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideEvilBars.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideEvilTrio.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFeaturePoints.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFilmstrip.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFunnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGallery.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGantt.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGlobalSplit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGroupedColumns.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGrowthBars.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideHeatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideHeroOverlay.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideImageBanner.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideImageFeature.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideInvestorBoard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideKit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideKpiDial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideLollipop.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMagCover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMatrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMekko.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlidePhaseRoadmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlidePolarRose.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideQuote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRadar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSankey.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideScorecard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSlope.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSplitDiptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSpotlightTags.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStackedBars.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStatGrid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStickerCollage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStickerStat.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStickerWall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStreamArea.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTable.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTierPyramid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTimeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTreemap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTriptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTypeStatement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideVersus.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideWaffle.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideWaterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideZigzagTimeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       `-- theme.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme02/
|   |   |   |   |-- source/
|   |   |   |   |   `-- src/
|   |   |   |   |       |-- preview/
|   |   |   |   |       |   `-- controls.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- slides/
|   |   |   |   |       |   |-- SlideAgenda.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideBento.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideBigNumber.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideBubbleTimeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideBump.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCardGrid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideChain.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideClosing.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCompare.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCompareTable.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCoverBeam.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCoverFigure.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCoverPanel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCoverPoster.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideCycleWheel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideDataTable.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideDelta.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideDumbbell.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideEditorial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideFeature.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideFunnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideGalleryBand.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideGauge.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideHeatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideHistogram.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideIndustry.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideLinkedSpheres.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideLogoWall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideManifesto.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideMarimekko.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideMasonry.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideMatrixTable.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideMethod.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideMetrics.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideMindmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideMosaic.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideOrbit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlidePareto.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlidePictogram.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlidePortraitQuote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlidePoster.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideProcess.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideProfile.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideProgress.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlidePyramid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideQuadrant.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideQuote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideRadar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideRanking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideRegion.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideRisk.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideRoadmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideRose.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideRoundTable.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideSankey.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideScatter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideSection.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideShowcase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideSlope.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideSpotlight.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideStackedBar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideStoryboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideStream.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideSunburst.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideTakeaway.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideTimeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideTreemap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideTrend.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideVenn.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideVersus.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideVoices.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SlideWaterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   `-- SlideZigzag.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- gxnCharts.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- gxnPrimitives.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       `-- gxnTheme.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme03/
|   |   |   |   |-- source/
|   |   |   |   |   |-- assets/
|   |   |   |   |   |   `-- 3d/
|   |   |   |   |   |       |-- 01.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 02.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 03.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 04.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 05.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 06.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 07.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 08.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 09.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 10.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- 11.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       `-- 12.png - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   `-- src/
|   |   |   |   |       |-- slides/
|   |   |   |   |       |   |-- AarrrSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- AgendaSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- BcgSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- BetMatrixSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- BubbleSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CanvasSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CaseCompareSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CaseSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ChainSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ChipsSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ChronicleSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ColophonSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ComputeSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ConcentrationSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoreweaveSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverBandSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverGridSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverImageSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverPosterSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CumulativeSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- DoubleDiamondSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- EmbodiedSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- EscalationSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- FiveForcesSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- FlywheelSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- GallerySlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- GanttSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- GaugeSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- GeoSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- HorizonSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- HypeCycleSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- JourneySlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- LayerTableSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MabaSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MarimekkoSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MethodSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MoatSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MonthlySlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MosaicSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- OutlookSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ParetoSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- PeakSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- PestSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- PyramidSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- QuadrantSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- QuoteSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RadarSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RankSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RegisterSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RfmSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RiskChainSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RiskSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RoseSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RoundSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SankeySlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ScorecardSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SectionSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SectorSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ShareSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ShiftSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SpotlightSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- StatementHeroSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- StatSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SupplyChainSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SwotSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- TableSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- TakeawaySlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- TimelineSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- TornadoSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- TreemapSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- TrendSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ValuationJumpSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ValuationSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- VerticalSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- WaffleSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   `-- WaterfallSlide.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- Decor.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- icons.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- ImageSlot.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- preset3d.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- presetBase.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- registry.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- theme.css - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       `-- theme.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme04/
|   |   |   |   |-- source/
|   |   |   |   |   |-- slides/
|   |   |   |   |   |   |-- _Highlight.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide01Agenda.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide02Cards.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide03Charts.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide04Statement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide05Ranking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide06Quadrant.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide07Case.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide08Compare.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide09Layers.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide10Region.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide11RiskChain.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide12Timeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide13Section.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide14Table.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide15BigNumber.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide16ImageStory.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide17Gallery.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide18Hero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide19MonthChart.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide20QuoteImage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide21Hub.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide22Donut.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide23ChainTable.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide24Trio.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide25Spotlight.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide26Method.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide27ValueChart.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide28QuarterTable.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide29Diptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide30Radar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide31Polaroid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide32Funnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide33Annotated.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide34Chronicle.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide35Versus.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide36CoverSection.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide37Bento.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide38Heatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide39Scoreboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide40Editorial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide41Filmstrip.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide42ChainFlow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide43Treemap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide44Gauges.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide45Voices.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide46Chapter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide47Waterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide48Dumbbell.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide49Matrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide50Roadmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide51StatTrio.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide52Metro.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide53Ledger.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide54Profile.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide55Slope.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide56Manifesto.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide57Cover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide58Pyramid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide59Stacked.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide60Spread.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide61Scorecards.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide62Split.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide63Scatter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide64GroupBars.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide65Triptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide66Contents.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide67Showcase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide68Calendar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide69Gantt.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide70DeltaHero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide71Verdict.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide72Numbered.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide73CoverHero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide74CoverIndex.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide75CoverGhost.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   `-- Slide76CoverBento.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   `-- image-slot.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme05/
|   |   |   |   |-- source/
|   |   |   |   |   |-- components/
|   |   |   |   |   |   `-- esm/
|   |   |   |   |   |       |-- PulseAtlas.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseBeacon.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseBenchmark.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseBigNumber.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseBreakdown.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseBubble.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseCapacity.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseCases.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseCatalog.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseCeiling.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseChain.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseChapter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseChapter03.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseChapter04.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseChapter05.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseColophon.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseComposite.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseCover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseCumulative.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseCurve.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseDelta.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseDiagram.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseDominance.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseDossier.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseEmbed.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseEndcap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseEra.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseExCover1.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseExCover2.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseExCover3.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseExCover4.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseFlow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseFlux.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseFoundry.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseFunnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseGate.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseGateway.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseGrid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseHeatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseHero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseHorizon.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseImageFrame.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseIndex.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseLadder.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseLede.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseLedger.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseLocale.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseLoop.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseMatrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseMekko.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseMeter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseMix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseMonolith.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseMosaic.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseNexus.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseOrbit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseOutlook.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulsePath.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulsePeak.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulsePeakTrough.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulsePlate.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseProcess.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseProfile.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseQuadrant.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseQuote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseRadar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseRank.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseRegion.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseRegister.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseResource.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseRisk.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseScene.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseScorecard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSegment.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseShare.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseShield.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseShowcase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSignal.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSlate.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSlope.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSnapshot.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSource.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSpec.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSplit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSpotlight.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSpread.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseSqueeze.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseStack.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseStacked.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseStatement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseTrend.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseTriad.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseVerdict.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       |-- PulseVersus.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |       `-- PulseWaterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   `-- styles/
|   |   |   |   |       |-- exc-covers.css - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       `-- pulse-deck.css - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme06/
|   |   |   |   |-- source/
|   |   |   |   |   `-- slides/
|   |   |   |   |       |-- _single.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- covertheme.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- kit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideAlliance.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBigNumber.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBranch.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCases.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCaseStudy.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideChapter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideContents.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideConvert.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverA.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverB.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverC.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverD.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCumulative.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDealMap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDealStruct.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDonut.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFlow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFunnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGallery.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGeoCluster.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideHeat.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMatrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMeter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMethod.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideOutlook.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlidePeakMedia.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlidePeakTrough.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideQuadrant.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideQuarter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideQuote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRadar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRanking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRecap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideResource.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRisk.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRoadmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRounds.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSegment.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSizeSplit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSpotlight.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStatement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStrategy.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSummary.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTimeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTreemap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTrend.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideValueChain.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       `-- SlideWaterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme07/
|   |   |   |   |-- source/
|   |   |   |   |   `-- src/
|   |   |   |   |       |-- pages/
|   |   |   |   |       |   |-- AboutLabPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- AcceleratePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ActiveCapitalPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- AlignmentPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- AlliancePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- AnthropicCasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- AppendixChapterPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- AutonomyPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- AvgTicketPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- BostonPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CapitalChapterPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ChainPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ChapterPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ChipPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ClosingPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ColdStartPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CompliancePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ComputePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ConcentrationPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ContentGenPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ContentsPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CooldownPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoreWeaveCasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverBizPlanPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverLeanPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverRetailTrainingPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverRetailTrendPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverSupplyChainPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverSupplyStrategyPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CoverTechLaunchPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- CrossPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- DealMapPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- DealSizePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- DealStructurePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- DevToolsPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- EarlyStagePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- EcosystemPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- EducationPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- FigureCasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- FinancePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ForwardPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- GeoCenterPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- GleanCasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- HealthcarePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- InvestorMixPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- InvestorPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- KnowledgePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- LegalPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- LowCodePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MarginPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MatrixPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MethodPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MoatPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- MonthlyPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- NewYorkPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- OpenAICasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- OpenSourcePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- OutlookPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- PeakPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- PeakTroughPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- QuotePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RankingPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RegionClusterPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RegionsPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RepricingPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ResourcePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ResourceTriadPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RevenuePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RiskChapterPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RiskPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- RoboticsPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SafetyPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SalesPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- ScaleCasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SeattlePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SourcesPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SSICasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- StrategyInfraPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- StrategyVerticalPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SummaryPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SupportPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- SyndicatePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- TrendPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   |-- WaterfallPage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |   `-- XaiCasePage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- theme.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       `-- viz.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme08/
|   |   |   |   |-- source/
|   |   |   |   |   |-- components/
|   |   |   |   |   |   |-- AclPrimitives.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page01Cover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page02Summary.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page03Chapters.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page05Trend.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page06Cross.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page07Chain.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page08Cases.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page09Heatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page10Ranking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page11Quadrant.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page13Strategy.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page14Quote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page15Chapter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page16DealMap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page17Spotlight.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page18Delta.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page19Peak.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page20Pullback.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page21PeakTrough.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page22Waterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page23SizeSplit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page24BigNumber.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page25CapitalCurve.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page26Chapter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page27Radar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page28Agent.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page29Portal.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page30Matrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page31Triptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page32Mix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page33Statement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page34Pipeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page35Arch.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page36Supply.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page37Compute.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page38ChipTiers.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page39Embodied.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page41Safety.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page42Generative.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page43Education.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page44Support.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page46LowCode.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page47OpenSource.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page48Alignment.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page49Chapter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page50EarlyStage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page52InvestorMix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page53Resource.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page54Loop.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page55Ecosystem.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page56GeoAnchor.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page57NewYork.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page58Seattle.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page59Boston.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page60OtherRegions.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page61Resources.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page64Network.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page65Infra.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page66DataInfra.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page67Search.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page68Platform.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page69Knowledge.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page71Narrative.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page73Revenue.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page74Regulation.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page76Squeeze.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page77Budget.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page78Workflow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page79Repricing.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page80Verdict.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page81Mainlines.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page82Migration.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page83Playbooks.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page84Gauge.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page85HeroSplit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page86Dumbbell.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page87Roadmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page88PhotoWall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page90Scorecard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Page91Quote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- PageCv2C.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- PageSupCover01.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- PageSupCover02.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   `-- PageSupCover03.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   `-- image-slot.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme09/
|   |   |   |   |-- source/
|   |   |   |   |   `-- slides/
|   |   |   |   |       |-- DeckKit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- ImageStrip.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideAlloc.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideAnnotated.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideArc.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBento.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBracket.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBubble.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideBump.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCalendar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCases.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideChain.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideChapterCard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideChord.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideClosing.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCompare.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideConclusion.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideContents.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverAperture.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverDiagonal.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverDossier.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverMast.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverStory.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverStrata.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCoverTerminal.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCross.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideCrosstab.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDiptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDivider.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDotfield.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideDumbbell.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideEpigraph.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideEra.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideExhibit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFan.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFAQ.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFeature.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFilmstrip.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFlow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideFunnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGallery.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGauge.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideGrade.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideHalfHero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideHeatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideHero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideHoneycomb.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideIcicle.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideImmersive.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideJourney.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideLedger.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideManifesto.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMarimekko.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMarket.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMasonry.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMatrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMega.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMeter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideMosaic.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideNetwork.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideOrbit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideOutlook.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideOverlayCards.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideOverview.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlidePanorama.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideParallel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlidePhases.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlidePlans.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlidePolaroid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideProcess.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideProfile.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideQuadrant.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideQuote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRadar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRadialBar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRanking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRibbon.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRidgeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRing.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRisk.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRoadmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRose.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideRounds.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideScore.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideScoreboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSection.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSlope.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSpiral.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSplit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSpotlight.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStacked.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStaircase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStat.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStoryboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideStream.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideSunburst.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTakeaway.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTeam.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTestimonial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideThesis.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTier.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTimeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTornado.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTreemap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTrend.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideTypeRiver.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideVenn.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideVersus.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideVertical.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SlideWaterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       `-- SlideZine.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme10/
|   |   |   |   |-- source/
|   |   |   |   |   |-- components/
|   |   |   |   |   |   |-- DeckChart.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- DeckImageSlot.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   `-- DeckPrimitives.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- slides/
|   |   |   |   |   |   |-- Slide01Cover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide02Metrics.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide03Allocation.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- Slide04Gallery.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideAnnotated.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideAreaStack.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideBalance.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideBigStat.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideBoard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideBullet.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideBump.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCalendar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCandles.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCaptioned.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCartogram.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideChapterIndex.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideChecklist.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideClosing.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCollage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCompareImage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCompareMatrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCoverAtmosType.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCoverDawn.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCoverDusk.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCoverField.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCoverHorizon.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCurve.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideCycle.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideDashboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideDisclosure.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideDistribution.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideDiverging.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideDivider.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideDumbbell.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideEditorial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideExhibit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideFAQ.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideFeature.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideFilmstrip.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideFlow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideFunnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideGantt.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideGlossary.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideGoals.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideGrouped.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideHeatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideHive.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideInset.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideIsotype.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideJourney.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideLadder.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideLedger.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideMagazine.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideMarimekko.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideMedallions.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideMegaFigure.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideMeter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideMosaic.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideOrbit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlidePinboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlidePlans.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlidePolar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlidePoster.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlidePrinciples.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideProfile.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlidePyramid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideQuadrant.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideQuilt.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideQuote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideQuoteImage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideRadar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideRadialStack.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideRange.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideRanking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideSankey.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideScatter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideSchedule.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideSectionStatement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideShowcase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideSlope.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideSpark.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideSpectrum.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideStacked.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideStatement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideSteps.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideStrata.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideStream.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideSwimlane.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideTeam.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideTestimonials.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideTimeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideTornado.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideTreemap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideTriptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideVenn.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   |-- SlideVersus.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |   `-- SlideWaterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   `-- module-loader.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme11/
|   |   |   |   |-- source/
|   |   |   |   |   |-- ignBase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide01Cover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide02System.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide03Proof.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide04Outcomes.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide05Triad.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide06Services.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide07Process.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide08Health.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide09Plans.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide10Contact.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide11Section.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide12Metric.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide13Quote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide14Mix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide15Feature.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide16Timeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide17Compare.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide18Gallery.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide19Index.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide20Showcase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide21Funnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide22Voice.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide23Matrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide24Spread.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide25Grid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide26Principles.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide27Radar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide28Split.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide29Roster.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide30Rings.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide31Ledger.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide32Device.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide33Manifesto.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide34Editorial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide35Stack.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide36Bridge.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide37Mosaic.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide38Logos.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide39FAQ.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide40Chapter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide41Triptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide42Beat.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide43Heatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide44Bubble.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide45Roadmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide46Geo.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide47Versus.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide48Voices.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide49Flywheel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide50Closing.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide51Curves.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide52Hero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide53Headline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide54Sheet.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide55Cards.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide56Treemap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide57PainGain.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide58Shift.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide59Pyramid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide60Polaroid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide61Ranking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide62Masthead.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide63Slope.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide64Glossary.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide65Filmstrip.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide66Coda.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide67AppFlow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide68Lollipop.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide69Tally.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide70Bento.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide71Cadence.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide72Bullet.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide73Stripes.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide74Next.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide75Handset.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide76Waffle.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide77Scorecard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide78Annotated.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide79Dumbbell.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide80Pull.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide81Plate.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide82Era.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide83CoverPoster.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide84CoverHero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   |-- Slide85CoverStatement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |   `-- Slide86CoverSplit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- theme12/
|   |   |   |   |-- source/
|   |   |   |   |   `-- src/
|   |   |   |   |       |-- index.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- swBase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwImageSlot.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideAgenda.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideAlbum.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideAreaStack.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideBeforeAfter.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideBento.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideBigNumber.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideBillboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideBubble.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideBullet.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideCalendar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideChecklist.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideContrast.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideCover.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideCoverflow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideCoverGrid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideCoverImage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideCoverType.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideCoverWave.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideDirectory.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideDivider.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideDonut.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideDotPlot.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideDuo.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideEcosystem.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideEditorial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideFaq.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideFilmstrip.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideFullBleed.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideFunnel.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideGalleryWall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideGauges.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideGridWall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideGrowth.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideHeatmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideHero.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideInterlude.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideJoin.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideJourney.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideLayers.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideLogoWall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideLyric.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideMagazine.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideManifesto.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideMatrix.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideMoodboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideMosaic.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideOrgChart.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlidePanorama.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlidePolaroid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlidePostcard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlidePricing.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlidePrinciples.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideProcess.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlidePyramid.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideQuote.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideQuoteImage.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideQuoteWall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideRadar.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideRanking.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideRoadmap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideSankey.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideScoreboard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideScorecard.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideSection.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideShowcase.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideSlope.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideSpecs.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideSpectrum.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideSplit.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideSpotlight.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideStack.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideStackBars.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideStampSheet.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideStat3.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideStatement.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideTable.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideTeam.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideTestimonial.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideTicket.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideTimeline.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideTreemap.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideTriptych.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideVinyl.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideWaterfall.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideWhyNow.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- SwSlideZine.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       |-- swTheme.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |       `-- SwUnicornBackground.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   |-- metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |   `-- runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- client-runtime.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- generated-metadata.js - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- index.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   |-- runtime-helpers.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   |   `-- unicorn-background.jsx - Claude Design 导入主题组件、运行时、素材或登记元数据。
|   |   `-- index.jsx - 项目源码或配置文件。
|   |-- export-pdf/
|   |   `-- screenshot.mjs - 项目源码或配置文件。
|   |-- export-pptx/
|   |   `-- editable.mjs - 项目源码或配置文件。
|   |-- view-model/
|   |   |-- context.jsx - Deck ViewModel 构建层和 React Context。
|   |   `-- index.jsx - Deck ViewModel 构建层和 React Context。
|   |-- control-naming.mjs - 项目源码或配置文件。
|   |-- deckComposer.jsx - 目标 deck 编排器,把用户目标 JSON 计划映射为当前已验收主题页面。
|   |-- options.jsx - 布局选项注册表,只登记当前已验收主题页面。
|   |-- prop-contract-core.mjs - 项目源码或配置文件。
|   |-- propContracts.jsx - 项目源码或配置文件。
|   |-- react-shim.js - 项目源码或配置文件。
|   `-- renderDeck.jsx - 核心渲染器,构建 Deck ViewModel 并把 React slides 注入 HTML 模板。
|-- .gitignore - 项目源码或配置文件。
|-- AGENTS.md - 项目源码或配置文件。
|-- layout-manifest.json - 项目源码或配置文件。
|-- package-lock.json - 项目源码或配置文件。
|-- package.json - 项目源码或配置文件。
|-- README.md - 项目源码或配置文件。
|-- SKILL.md - 项目源码或配置文件。
|-- theme-import-goal-01-04.json - 项目源码或配置文件。
|-- theme-import-goal-05-06.json - 项目源码或配置文件。
|-- theme-import-goal-05.json - 项目源码或配置文件。
|-- theme-import-goal-06-08.json - 项目源码或配置文件。
|-- theme-import-goal-07-08.json - 项目源码或配置文件。
`-- theme-import-goal.json - 项目源码或配置文件。
```
