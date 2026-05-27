# Project Memory

## Swiss 组件组织

- 页面布局组件必须各自独立:一个布局一个 JSX 文件。Swiss 布局放在 `src/components/swiss/`,电子杂志布局放在 `src/components/magazine/`。
- token 统一放在 `src/tokens/`:主题、字体、字号、间距、动效都从这里导出,不要再塞回 `src/options.jsx`。
- 明暗底色归入主题 token 的 `surface` / `inverse` 角色,不要做独立 light/dark 预览选项;布局里某个 item 的高亮统一走 `focus-*` 角色。
- `layout-sandbox` 分支已经清空旧 layout preset;从空的 `LAYOUT_OPTIONS` 开始添加新布局。
- 可组合基础组件按职责放在 `src/components/shell/`、`text/`、`media/`、`metrics/`、`charts/`、`timelines/`、`cards/`、`decorations/`、`diagrams/`。`magazine/` 和 `swiss/` 只保留布局 preset。
- 对应布局目录的 `primitives.jsx` 只做兼容薄封装,优先复用上面的分类组件。
- 新增布局时,先新增独立组件文件,再从对应目录的 `index.jsx` 导出,最后登记到 `src/options.jsx` 的 `LAYOUT_OPTIONS`。
- 不要把多个页面布局重新合并到一个大组件文件里。
- 原始 Swiss 正文布局使用 `s01` 到 `s22` 作为 canonical key;旧语义 key 只用于示例兼容。
- 原始电子杂志风布局补入统一 registry 后使用 `a01` 到 `a10`,输出 `data-layout="A01"` 到 `A10`。
- `s08Map` 是原项目登记的 S08 地图插槽扩展,仍使用 `data-layout="S08"`;不要把它当成新 S 编号。
- 每次提交前必须刷新全布局总览:`npm run showcase:update` 会检查 `all-layouts-showcase.jsx` 覆盖全部 `a01`-`a10`、canonical Swiss 布局和 Style B 登记扩展,并重生成当前 demo HTML。
