# ADR

本文件由 `scripts/update-project-docs.mjs` 生成,记录当前项目已经采用的架构决策。

## ADR-001: 最终产物保持为静态 HTML

最终交付仍是 `index.html`、`assets/motion.min.js` 和图片资源。React 只作为生成层使用,不进入浏览器运行时。

## ADR-002: 可变部分使用登记选项多选一

`theme` 从 `THEME_OPTIONS` 选择,`fontSet` 从 `FONT_OPTIONS` 选择,每页通过 `slide(layoutKey, props)` 从 `LAYOUT_OPTIONS` 选择。Agent 不直接手写自由 HTML 页面。

## ADR-003: 模板负责浏览器运行时

`assets/template-swiss.html` 负责 CSS 视觉系统、背景、翻页、导航、预览控制器和动效入口。React 组件只生成注入到 `#deck` 内的 slide markup。

## ADR-004: 输出目录是生成物

`output/` 用于 demo、验证 deck 和截图产物,已加入 `.gitignore`,不作为源码提交。

## ADR-005: 提交前同步项目文档

`.githooks/pre-commit` 会运行 `scripts/update-project-docs.mjs`,并 stage `README.md`、`docs/ADR.md`、`docs/project-files.md`。

## ADR-006: layout-sandbox 分支从空布局 registry 开始

当前分支已清空旧 layout preset。`src/options.jsx` 保留空的 `LAYOUT_OPTIONS`,后续新增布局时再登记 key、label、dataLayout 和组件。

## ADR-007: 新布局继续按文件拆分

后续每个页面布局仍然独立成一个 JSX 文件。共享能力优先复用 `src/components/shell/`、`text/`、`media/`、`metrics/`、`charts/`、`timelines/`、`cards/`、`decorations/`、`diagrams/`。

## ADR-008: 提交前刷新全布局总览

`.githooks/pre-commit` 会运行 `npm run showcase:update`。当 registry 为空时,demo 只渲染 sandbox 页;新增布局后,showcase 需要同步覆盖已登记布局。

## ADR-009: 旧布局参考资料保留为历史参考

原项目 Style A / Style B 的参考资料仍在 `references/` 与 `assets/screenshot-backgrounds/`,但当前分支不再登记旧布局组件。

## ADR-010: 生成底座继续保留

`assets/template-swiss.html`、`src/renderDeck.jsx`、`src/tokens/` 和基础组件目录继续保留,用于承载下一批新布局。

## ADR-011: token 与基础组件按组合维度分类

`src/tokens/` 存放主题、字体、字号、间距和动效选项。`src/components/` 下按组合职责分为 `shell/`、`text/`、`media/`、`metrics/`、`charts/`、`timelines/`、`cards/`、`decorations/`、`diagrams/`。

## ADR-012: demo 同时覆盖布局穷举和运行时切换

`examples/component-decks/all-layouts-showcase.jsx` 当前是空 registry 的 sandbox 预览页。主题、字体、字号、间距这类全局 token 仍由 `assets/template-swiss.html` 的预览侧边栏切换。明暗底色归入 theme 的 `surface` / `inverse` 角色;布局内被高亮的 item 后续继续使用 theme 的 `focus-*` 角色。
