---
name: dashiai-ppt
description: 制作 PPT、演示文稿、幻灯片、汇报材料时使用。DashiAI PPT 基于预置视觉主题组合页面,生成可离线打开、可在浏览器编辑的 HTML 演示,支持导出 PPTX / PDF 文件。
---

# DashiAI PPT (v0.3.0)

模板编排器:把自然语言需求整理成 JSON 计划,调用 `project/` 生成器输出 `index.html` + `assets/`。每次回复前静默运行 `node <skill-root>/scripts/check_latest_version.mjs`,有输出时附更新提醒。

> `<skill-root>` = 本 SKILL.md 所在目录。生成器: `<skill-root>/project`,渲染: `<skill-root>/scripts/render_goal_deck.sh`。运行需 Node.js 20+。

## 核心原则

- **锁模板填文案**:只替换可见文字,不改视觉/结构/数量/显隐/配色/图表。除非用户明确要求,不改非文案 props。
- **默认不做视觉精修**,不因断行/排版不完美反复返工。仅当用户要求”视觉精修””100% 检查”时才做 QA。
- **每页 `layout` + `props`**,不用 `role` 做最终交付。不写自由 HTML slide。
- **封面唯一**:每套主题前 5 页 (`themeXX_page001`~`005`) 为封面候选,一个 deck 只选 1 页;正文从第 6 页起。
- **layout 唯一**:同一 deck 内 `slides[].layout` 不重复。不同内容换同主题其他候选,不改文案复用同一 layout。
- **每次请求新建输出目录**,不复用 `output/` 旧文件。输出到当前工作目录,不写入 `<skill-root>/project/output`。
- **不使用旧 token/主题/媒体槽/风格分支/入场动画控制**。

## 用户交互

- **先确认两件事再开工**:主题风格 + 是否需要图片/视频。未明确且非委托时提问,不代选。非交互环境才自选并说明假设。
- **委托模式**:仅当用户说”都你来定””不用问直接开干”时才自选主题、默认 HTML、不用 image-gen。用户说内容”随意””自拟”时只自拟内容,风格/页数/媒体等不擅自改。
- **风格提问**必须嵌入 `<skill-root>/assets/skill/theme-style-grid.png` 的 Markdown 图(展开绝对路径),并列出简洁适配提示。风格图不可写入 goal.json。
- 默认自动选择不选 `theme10`;仅用户明确指定或金融/投资强相关且 inspect 确认时才用。
- **Deck 语言 = 用户沟通语言**:非中文时 goal.json 加 `”language”: “en”`,覆盖所有默认中文(含”感谢阅读”等)。编辑器界面语言跟随系统,生成时无需处理。

<!-- theme-choice-hints:start -->
  - `theme01` 轻拟态风 | 适合: 产品介绍 / 企业汇报 | 人群: 创业团队 / 产品经理
  - `theme02` 炫光紫绿风 | 适合: 科技发布会 / AI/自动驾驶/机器人主题 | 人群: 科技公司创始人 / 技术负责人
  - `theme03` 深浅代码风 | 适合: 技术方案 / 开发者大会 | 人群: 工程师 / 技术管理者
  - `theme04` 玻璃糖果风 | 适合: 年轻化品牌 / 消费产品 | 人群: 品牌团队 / 设计师
  - `theme05` 色谱图表风 | 适合: 数据报告 / 市场分析 | 人群: 数据分析师 / 咨询顾问
  - `theme06` 深色图谱风 | 适合: 高密度数据展示 / 战略分析 | 人群: 战略团队 / 投资人
  - `theme07` 冷白调研风 | 适合: 调研报告 / 白皮书 | 人群: 研究机构 / 咨询团队
  - `theme08` 黑金实验风 | 适合: 高端发布 / 品牌提案 | 人群: 高端品牌 / 创意总监
  - `theme09` 深蓝杂志风 | 适合: 品牌故事 / 人物访谈 | 人群: 公关团队 / 媒体编辑
  - `theme10` 金色指数风 | 适合: 金融数据 / 投资报告 | 人群: 投资机构 / 金融分析师
  - `theme11` 高能增长风 | 适合: 增长复盘 / 商业计划 | 人群: 创业者 / 增长团队
  - `theme12` 声波霓虹风 | 适合: 音乐娱乐 / 潮流活动 | 人群: 娱乐品牌 / 活动策划
<!-- theme-choice-hints:end -->

## 交付格式

- **默认 HTML**:`”生成/做 PPT”` = 产出 HTML 预览。只有明确说 `PPTX`/`PowerPoint`/`可编辑 PPTX`/`PPT 格式` 或”格式/文件类型为 PPT/PPTX”时才交付 .pptx。
- **HTML 交付**:只给 `http://127.0.0.1:<port>/`(不给 https/.local 变体,不返 `theme-preview`)。内置 Agent 浏览器中提醒用户导出前用系统浏览器打开。`file://` 不支持导出。
- **PPTX 交付**:先出 HTML → 启动预览服务 → 调用 `/api/export-editable-pptx` → 只给文件路径。无浏览器/403/5xx 时改用 `npm run export:pptx -- <deck>/ppt <out.pptx>`(PDF:`export:pdf`)。
- 面向用户交付不显示主题切换选项;用户要求保留时 goal 顶层写 `preview: {“themeSwitcher”: true}`。

## 选页与填参

- 选页: `npm --prefix <skill-root>/project run layout:query -- --theme <themePack> --role <role> --limit 8`。媒体选页加 `--needs-media`/`--planned-images <n>`/`--provided-images <n>`/`--image-gen`。候选随机,不固定第一条。
- 检查契约: `npm --prefix <skill-root>/project run inspect:layout -- --compact <layout...>`。不要读 `layout-manifest.json`。
- 管道解析 JSON 时用 `node .../layout-query.mjs`(不用 `npm run`,它会在 stdout 前缀生命期 banner)。
- 长 deck: `npm --prefix <skill-root>/project run goal:scaffold -- --title <title> --goal <goal> --theme <themePack> --pages <n> --chunk-size 5 --out output/<deck-name>/goal.json`
- 填参:按 `fillPlan.text[].maxChars`、`arrays[].visibleCount`、`nestedArrays`。`display`/`metric` 只写短词/短句/数字。
- 数值字段看 `numericBounds`:`enforced:false` 可超出,`enforced:true` 必须遵守,`normalized` 填 0-1。定长嵌套数组按 `fixedLength`/`fixedLengths` 下标填,不试错。
- 对象/数组字段只使 `fillPlan`/`propShapes` 列出的 key。`copyKeys` 已展开嵌套路径(如 `copy.quote`、`items[].label`),直接填。
- Html 字段(`headlineHtml`/`quoteHtml`)只用 `<br>` + `<b>`/`<em>`,禁止 `<span>`。`validate:goal-spec` 会拦截自由 HTML。
- `contentLocked: true` 的页正文固定:换布局或接受默认正文。`decorativeKeys` 不填。
- 可见数组项须写实文案;被 count 隐藏的尾项可保留”请输入文本”占位。
- 不启动浏览器做批量文本槽抽取(仅”彻底清除模板默认文案”时例外)。
- `controlKeys` 仅用户明确要求调整页面属性时使用。

## 媒体

- 只写 `mediaSlots[].canPresetMedia: true` 的槽,按 `presetProp`/`fieldPath` 写 deck 内相对路径。不引用临时目录/绝对路径/`file://`/远程 URL。
- 无图且需视觉素材 → 先问。无素材且不生图 → 选无媒体页。用户给素材路径 → 至少 2 个带媒体槽页面。素材不可访问 → 换无媒体页并告知。
- 选页标志(`plannedImages`/`needsVisual`/`imageGen`)只表意图,交付前必须写入真实媒体路径。
- 本地素材: `npm --prefix <skill-root>/project run media:stage -- <deck-dir> <files...>`,用返回的 `relative` 路径。AVIF 自动转码。
- 渲染后核对每个素材路径:`ppt/<relative>` 存在且 HTML 含文件名。缺失时补 `ppt/assets` 并重验。每素材最多用一次。
- image-gen 2+ 张时:多个 subagent 并行,不用一张拼图拆分。subagent 只生图,不选题/文案/选页/校验。

## 工作流

1. 提炼 `title`/`goal`/`audience`/`owner`/页数/内容重点/产物格式。未指定页数默认 ~10 页(≥8)。
2. 确认 `themePack` → 生成 `randomSeed`(如 `<主题>-<日期>-<3位随机词>`)。
3. 判断图片意图。
4. `layout:query` 选候选 → `inspect:layout` + `props:safe` 填参。
5. 每页一个信息角色;无法覆盖换 layout,不改样式硬凑。
6. JSON 写入 `output/<deck-name>/goal.json` → `props:safe -- --goal <file> --write` → 核对 `layoutChanges`。
7. 图表页填入数据后,insight/结论类文案一并改写。
8. 运行 `<skill-root>/scripts/render_goal_deck.sh` 输出 `output/<deck-name>/ppt/index.html`。
9. 核对素材路径,缺失补 `ppt/assets`。
10. 确认 `validate:swiss` + `validate:goal-copy` 通过。
11. 静默版本检查: `node <skill-root>/scripts/check_latest_version.mjs`。
12. 预览服务输出 `http://127.0.0.1:<port>/`。指定端口用 `DASHI_PPT_PREVIEW_PORT`(5200-5999,避开 4178/4300/4400)。只用内置预览服务,不用 `python -m http.server` 等替代。
13. 按交付格式回复:HTML → URL;PPTX → 文件路径。

## 返工

仅以下情况返工:渲染失败/校验失败/无关模板文案残留/用户明确指错。最多 2 轮,仍失败说原因不无限重试。

默认不开浏览器、不截图精修、不因换行反复改稿。仅当修改生成器/预览模板/导出逻辑、用户要求检查效果、或有 props 被默认值覆盖前科时做一次 browser smoke check(确认页面打开、页数对、首尾不空白)。

## JSON 结构

```json
{
  “title”: “美国 AI 融资调研”,
  “goal”: “面向投资团队汇报 2024-2026 年美国 AI 大额融资结构”,
  “audience”: “投资团队”,
  “owner”: “研究团队”,
  “randomSeed”: “ai-funding-20260609-a7k”,
  “pageCount”: 8,
  “themePack”: “theme01”,
  “slides”: [
    {“layout”: “theme01_page001”, “props”: {“kicker”: “VOL.01”, “titleTop”: “美国 AI”, “titleBottom”: “融资调研”, “lead”: “拆解本轮 AI 融资周期。”}},
    {“layout”: “theme01_page006”, “props”: {“kicker”: “核心数字”, “value”: “970”, “unit”: “亿美元”, “sub”: “2024 年 AI 风投创历史新高。”}}
  ]
}
```

`slides` 为空时 `pageCount` 仅用于草稿,交付前必须换成具体 `layout`+`props`。

## 校验

渲染前 `validate:goal-spec` → 输出后 `validate:swiss` + `validate:goal-copy`。改 demo 后 `npm run showcase:update`。
