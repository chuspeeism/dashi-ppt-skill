---
name: dashi-ppt-skill
description: 根据用户目标随机组合已接入主题页面,生成可离线打开和导出的静态 HTML PPT。
---

# PPT 生成 Skill

生成静态 HTML 横向翻页 PPT。根据用户输入先整理 JSON 计划,再调用本地生成器输出 `index.html` 和 `assets/`。

## 版本

当前版本: `0.1.2`

每次完成用户请求、准备最终回复前,运行:

```bash
node scripts/check_latest_version.mjs
```

如果脚本有输出,把输出内容附在最终回复末尾提醒用户更新;如果脚本无输出或检查失败,保持静默,不要提版本检查。

## 生成原则

本 Skill 是模板编排器。默认目标是快速、稳定地把用户需求套入已登记页面组件,输出可离线打开的 HTML PPT。

默认模式是“锁模板填文案”:保留所选页面组件的原始视觉、结构、数量、显隐、强调、配色、图表类型和图片槽位,只替换可见文字内容。除非用户明确要求调整页面属性,不要改任何非文案 props。

默认不做视觉精修,不做截图审美判断,不因为普通断行或局部排版不完美反复返工。只有用户明确要求“视觉精修”“100% 检查”“帮我调到满意”时,才进入视觉 QA 流程。

## 使用规则

- 运行生成器需要 Node.js 18+ 和 npm;首次生成时渲染脚本会在 Skill 内置 `project/` 目录安装依赖。
- 开始阶段先判断当前是否为 Codex 环境,例如 Codex 桌面/CLI 会话或工具列表可用 `image_gen`。如果是 Codex 环境,在确认风格和图片意图时必须询问用户是否需要通过 image-gen 生成图片配到 PPT 中;用户同意后再生成图片,并在选页时使用 `--image-gen`。
- 开始阶段先确认用户想要的风格。用户没有明确指定时,如果当前环境支持图片展示,风格选择提问的用户可见回复必须嵌入 `assets/skill/theme-style-grid.png`;发送前把 Skill 根目录展开成绝对路径,例如 `![风格选择参考](<skill-root>/assets/skill/theme-style-grid.png)`。不能只在内部进度提示中提到这张图,不要只发文字编号让用户选。默认风格选择回复必须包含风格图、12 个风格短名称和极简“适合/人群”提示;只有用户需要详细解释时再读取 `references/options.md`。
- 当前可选风格: `theme01` 轻拟态风、`theme02` 炫光紫绿风、`theme03` 深浅代码风、`theme04` 玻璃糖果风、`theme05` 色谱图表风、`theme06` 深色图谱风、`theme07` 冷白调研风、`theme08` 黑金实验风、`theme09` 深蓝杂志风、`theme10` 金色指数风、`theme11` 高能增长风、`theme12` 声波霓虹风。
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
- 不使用旧 token、旧主题、旧图片 slot、旧风格分支或旧入场动画控制。
- 普通生成不要直接打开大型 `layout-manifest.json` 或 `generated-metadata.js`。选页先运行 `npm run layout:query -- --theme <themePack> --role <role> --limit 8`;需要图片槽时加 `--needs-media`、`--planned-images <n>`、`--provided-images <n>` 或 `--image-gen`。`layout:query` 已输出候选页的 `copyKeys` 和 `mediaSlots`;不要为每一页机械运行 `inspect:layout`。
- 只有选中页面字段不清楚、需要数组/count、或要写图片/媒体时,才运行 `npm run inspect:layout -- <layout>`;只有写复杂数组或图片 props 时,才运行 `npm run props:safe -- <layout> '<props-json>' [--images <path...>]`。
- 图片和视频的真实写入点是页面 `props.images` / `props.media`;不要写顶层 `media` 或 `slides[].media`。用户未提供图片时,如果任务类型可能需要视觉素材,例如作品集、品牌、产品、案例、活动、发布、社媒、设计、人物、团队、方案展示等,必须先询问是否预留图片槽;用户确认不需要时才选纯文案页或隐藏图片槽。不能默认把图片 slot 数量设为 0。用户说要预留图片时使用 `--planned-images <n>`,用户提供图片时使用 `--provided-images <n>`,需要 image-gen 时先询问用户是否同意并使用 `--image-gen`。
- 元素出现动画使用 Claude Design 页面组件自带的原生效果。
- 页面切换动画可以在预览控制面板里调整。
- 面向用户交付的 deck 默认不显示风格/主题切换选项;风格切换只保留在内部调试 demo 页面。用户明确要求保留主题切换时,在 goal 顶层写 `preview: {"themeSwitcher": true}`。
- 不手写自由 HTML slide;面向用户交付的每页必须写 `layout` + `props`。`role` 只允许在草稿阶段辅助选页,渲染前必须换成具体 `layout`。
- 每套主题的前 5 页 `themeXX_page001` 到 `themeXX_page005` 都是封面候选。一个 deck 只能从前 5 页中选择 1 页作为封面,不要同时使用多个封面页;正文页从第 6 页以后选择。
- 面向用户交付的 deck 不能只写 `role` 后依赖页面默认文案。除非用户明确要默认 demo,每一页都必须写和用户主题对应的 `props` 文案。
- 优先只写 `layout:query` 或 `inspect:layout` 暴露的文案字段。用户明确要求调整数量、显隐、强调、颜色、图表或图片槽时,才写对应 control props,并用 `props:safe` 保留数组默认尾部。
- 不要改页面元数据、组件源码、className、CSS、样式字段或默认视觉结构来完成内容填充。只在 `props` 内填写内容和用户明确要求的页面属性。
- 允许用顶层 `text` 覆盖可见文字槽位,但只用于替换文字内容。不要在普通生成中启动浏览器批量抽取全页面文本槽位;只有用户明确要求“彻底清除所有模板默认文案/逐页校对可见文案”时才做运行时槽位抽取。
- 禁止复用 `output/` 里已有的旧 `goal.json` 或旧 HTML。每次请求都新建本次输出目录和本次 JSON 计划。
- 最终交付必须同时给本次请求的本机 HTTP 导出地址、HTTPS/局域网备用预览地址和对应 HTML 文件路径,例如 `http://127.0.0.1:<port>/`、`https://jadon.local:<port>/` 和 `output/<deck-name>/ppt/index.html`。用于导出 PPT/PPTX 的 HTTP 预览地址必须给本机地址,优先 `http://127.0.0.1:<port>/` 或 `http://localhost:<port>/`;不要把 `http://jadon.local:<port>/` 作为最终 HTTP 导出地址给用户。`jadon.local` 可以作为 HTTPS 或局域网浏览备用地址,但必须提示 HTTP LAN/jadon.local 可能导致下载失败,不作为导出主入口。必须明确说明本机 HTTP 链接可用于导出 HTML/PDF/PPT/PPTX,直接打开本地 HTML 路径或 `file://` 只能浏览,不能导出可编辑 PPTX。不要返回 `theme-preview` 或其它调试页。
- 如果输出正文里出现与用户主题无关的默认文案,例如 AI Capital / 投融资 / SoundWave / 声浪 / Key Metrics / Roadmap / End of Report 等,必须重写 JSON 后重新渲染,不能交付。

## 工作流

1. 提炼用户目标: `title`、`goal`、`audience`、`owner`、页数和内容重点。
2. 确认 `themePack`。用户未指定时先询问风格;用户选定后生成 `randomSeed`,例如 `<主题>-<日期>-<3位随机词>`,保证随机选页可复现。
3. 判断图片意图:如果当前是 Codex 环境,先询问用户是否需要通过 image-gen 生成图片配到 PPT 中;用户已给图片用 `--provided-images <n>`;用户计划后续配图用 `--planned-images <n>`;需要生图用 `--image-gen` 并先询问。用户未提供图片但任务天然需要视觉素材时,先问是否预留图片槽,不要默认把图片 slot 设为 0。
4. 快路径:用 `layout:query` 选候选,直接用其 `copyKeys` 写普通文字 props。只有字段不清楚、数组/count 或图片/媒体时,再用 `inspect:layout` / `props:safe`。
5. 每页只承载一个主要信息角色。无法安全覆盖的页面优先换 layout,不要改样式字段硬凑。
6. 把 JSON 写入本次工作目录的 `output/<deck-name>/goal.json`;渲染前必须通过 goal spec 校验。
7. 运行 `npm run render:goal -- output/<deck-name>/goal.json output/<deck-name>/ppt/index.html`。
8. 运行 `npm run validate:swiss -- output/<deck-name>/ppt/index.html`。
9. 运行 `npm run validate:goal-copy -- output/<deck-name>/goal.json output/<deck-name>/ppt/index.html`。
10. 从项目目录启动本地 HTTP/HTTPS 预览服务: `npm run preview:start -- output/<deck-name>/ppt <port>`。
11. 最终回复必须给本机 HTTP 导出地址、HTTPS/局域网备用预览地址和 HTML 文件路径,并说明本机 HTTP 链接可用于导出 PPT/PPTX,`http://jadon.local:<port>/` 这类 HTTP LAN/jadon.local 地址可能导致下载失败且不作为导出主入口,直接打开本地 HTML 或 `file://` 不能导出可编辑 PPTX。

## 返工与浏览器检查

只在以下情况返工:渲染失败、`validate:swiss` 失败、`validate:goal-copy` 失败、输出中出现明显不属于用户主题的模板文案、用户明确指出某页内容有问题。

默认最多修复 2 轮。仍失败时说明阻塞原因,不要继续无边界尝试。

默认不打开浏览器,不创建 Chrome profile,不抽取全量文本槽位。只有修改了生成器/预览模板/导出逻辑、用户明确要求检查页面效果,或上一轮出现过运行后 props 被默认值覆盖的问题时,才做一次浏览器 smoke check。

浏览器 smoke check 只确认页面能打开、页数正确、首尾页不是空白。不要默认截图精修,不要因为普通换行问题反复改稿。

## JSON 结构

```json
{
  "title": "美国 AI 融资调研",
  "goal": "面向投资团队汇报 2024-2026 年美国 AI 大额融资结构、资本流向和后续判断",
  "audience": "投资团队 / 产业研究团队",
  "owner": "研究团队",
  "randomSeed": "ai-funding-20260609-a7k",
  "pageCount": 8,
  "themePack": "theme01",
  "slides": [
    {"layout": "theme01_page001", "props": {"kicker": "融资调研 · VOL.01", "titleTop": "美国 AI", "titleBottom": "融资调研", "lead": "从资本体量、赛道结构和典型公司拆解本轮 AI 融资周期。"}},
    {"layout": "theme01_page006", "props": {"kicker": "核心数字", "value": "970", "unit": "亿美元", "sub": "2024 年美国 AI 风险投资规模创历史新高。"}},
    {"layout": "theme01_page010", "props": {"kicker": "# 研究方法", "title": "横纵分析法", "cn": "用时间维度和赛道维度交叉识别融资变化。"}},
    {"layout": "theme01_page030", "props": {"kicker": "# 典型案例", "title": "里程碑 · 头部公司融资节奏"}},
    {"layout": "theme01_page089", "props": {"kicker": "# 附录", "title": "数据来源与研究说明"}}
  ]
}
```

如果 `slides` 为空,`pageCount` 只适合临时草稿预览。面向用户交付前,必须改成具体 `layout` + 对应 `props`。

## 页面角色

`role` 只用于草稿选页,最终 JSON 必须落成具体 `layout`。角色说明见 `references/layout-roles.md`;真实候选以 `layout:query` 输出为准。

`cover` 只能从当前主题前 5 页选择。`image` / `media` 候选基于真实 `mediaSlots`,不是页面标题关键词。

可以直接指定页面:

```json
{"layout": "theme01_page030", "props": {"title": "典型案例"}}
```

## 交付能力

生成后的预览页支持翻页、打开侧边栏编辑文本、调整页面 props、替换 Claude 页面自带图片 slot、切换页面切换动画、导出 HTML/PDF/PPTX。面向用户交付的页面底部不显示页码标识、翻页引导、圆点导航或索引提示。

## 页面属性契约

普通生成不要读 `layout-manifest.json`。先用 `layout:query` 输出的候选摘要。只有需要更细契约时,再用 `inspect:layout` 看单页契约:

- `copyKeys`: 可安全改写的文案/数据字段。
- `mediaSlots`: 图片/视频写入字段、count key、默认数量和最大数量。
- `countBindings`: 数量参数与数组字段的绑定。
- `controlKeys`: 右侧面板可操作字段。

需要写数组、数量或图片时,用 `props:safe` 输出归一化 props。它会保留数组默认尾部,并根据 `props.images` / `props.media` 派生对应 count。

## 校验

- 渲染前必须运行 `validate:goal-spec`。
- 输出后必须运行 `validate:swiss`。
- 输出后必须运行 `validate:goal-copy`。
- 改动展示 demo 后运行 `npm run showcase:update`。
