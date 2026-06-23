# Current Options

## themePack

| themePack | 风格名 | 适配场景 | 适配人群 |
|---|---|---|---|
| `theme01` | 轻拟态风 | 产品介绍、企业汇报、方案说明、轻量级发布 | 创业团队、产品经理、销售顾问、企业内部汇报者 |
| `theme02` | 炫光紫绿风 | 科技发布会、AI/自动驾驶/机器人主题、增长故事、创新项目展示 | 科技公司创始人、技术负责人、品牌市场团队、投资路演团队 |
| `theme03` | 深浅代码风 | 技术方案、开发者大会、系统架构、AI 工程实践 | 工程师、技术管理者、架构师、开发者社区 |
| `theme04` | 玻璃糖果风 | 年轻化品牌、消费产品、创意提案、社媒感内容 | 品牌团队、设计师、内容创作者、消费品团队 |
| `theme05` | 色谱图表风 | 数据报告、市场分析、KPI 复盘、行业研究 | 数据分析师、咨询顾问、研究员、业务负责人 |
| `theme06` | 深色图谱风 | 高密度数据展示、战略分析、科技/金融/产业报告 | 战略团队、投资人、产业研究团队、高管汇报者 |
| `theme07` | 冷白调研风 | 调研报告、白皮书、竞品分析、学术/政策型表达 | 研究机构、咨询团队、政府/高校/智库、B2B 团队 |
| `theme08` | 黑金实验风 | 高端发布、品牌提案、实验性概念、奢华科技叙事 | 高端品牌、创意总监、科技品牌、发布会策划团队 |
| `theme09` | 深蓝杂志风 | 品牌故事、人物访谈、企业形象册、深度专题 | 公关团队、媒体编辑、创始人、企业品牌部 |
| `theme10` | 金色指数风 | 金融数据、投资报告、商业指数、年度榜单 | 投资机构、金融分析师、咨询公司、商业媒体 |
| `theme11` | 高能增长风 | 增长复盘、商业计划、融资路演、市场扩张方案 | 创业者、增长团队、销售团队、VC/PE 路演团队 |
| `theme12` | 声波霓虹风 | 音乐娱乐、潮流活动、直播内容、年轻化发布 | 娱乐品牌、活动策划、内容团队、潮流消费品牌 |

用户没有明确指定风格时,先列出以上风格并询问。

默认风格选择回复只给极简适配提示:

- `theme01` 轻拟态风: 适合 产品介绍 / 企业汇报; 人群 创业团队 / 产品经理
- `theme02` 炫光紫绿风: 适合 科技发布会 / AI/自动驾驶/机器人主题; 人群 科技公司创始人 / 技术负责人
- `theme03` 深浅代码风: 适合 技术方案 / 开发者大会; 人群 工程师 / 技术管理者
- `theme04` 玻璃糖果风: 适合 年轻化品牌 / 消费产品; 人群 品牌团队 / 设计师
- `theme05` 色谱图表风: 适合 数据报告 / 市场分析; 人群 数据分析师 / 咨询顾问
- `theme06` 深色图谱风: 适合 高密度数据展示 / 战略分析; 人群 战略团队 / 投资人
- `theme07` 冷白调研风: 适合 调研报告 / 白皮书; 人群 研究机构 / 咨询团队
- `theme08` 黑金实验风: 适合 高端发布 / 品牌提案; 人群 高端品牌 / 创意总监
- `theme09` 深蓝杂志风: 适合 品牌故事 / 人物访谈; 人群 公关团队 / 媒体编辑
- `theme10` 金色指数风: 适合 金融数据 / 投资报告; 人群 投资机构 / 金融分析师
- `theme11` 高能增长风: 适合 增长复盘 / 商业计划; 人群 创业者 / 增长团队
- `theme12` 声波霓虹风: 适合 音乐娱乐 / 潮流活动; 人群 娱乐品牌 / 活动策划

## slide

面向用户交付的每页使用 `layout` + `props`:

- `layout`: 直接指定页面 key,例如 `theme01_page001` 或 `theme12_page001`。
- `props`: 只填写可见文案/数据内容字段。普通生成不要写样式、结构、数量、显隐、强调、配色、图表或图片槽位控制字段。
- `role`: 只允许草稿阶段辅助选页,渲染前必须换成具体 `layout`。

每套主题的前 5 页都是封面候选。一个 deck 只能使用其中 1 页作为封面,正文页从第 6 页以后选择。

选页先使用 `npm run layout:query -- --theme <themePack> --role <role> --limit 8`。动态背景页用 `--role ambient`。需要图片槽时加 `--needs-media`、`--planned-images <n>`、`--provided-images <n>` 或 `--image-gen`,候选会基于真实 `mediaSlots`;用户给素材时只用 `canPresetMedia: true` 的槽,按 `presetProp` 写路径。

长 deck 先用 `npm run goal:scaffold -- --title <title> --goal <goal> --theme <themePack> --pages <n> --chunk-size 5 --out output/<deck-name>/goal.json` 生成唯一 layout 骨架,再分段补 `props`。输出目录写在当前会话工作目录,不要写入 `<skill-root>/project/output`。

单页契约优先使用 `npm run inspect:layout -- --compact <layout...>`,一次传多个 layout 或多次 `--layout`。`copyBudgets` 给出文案长度预算;`propShapes` 给出 `copy`、对象数组和嵌套数组的内部 key。写 `copy`、`cells`、`items`、`rows` 等对象字段时只使用 `propShapes` 列出的 key,不要凭字段名猜测。写数组、数量或图片时使用 `npm run props:safe -- <layout> '<props-json>' [--images <path...>]`;写完整 `goal.json` 后使用 `npm run props:safe -- --goal <goal-json> --write` 做整份 props 规范化。

图片/视频只写入页面 `props.images` / `props.media`。不要写 `slides[].media`;用户提供本地素材时先运行 `npm run media:stage -- <deck-output-dir-or-ppt-dir> <media-file...>`,再把返回的 `relative` 路径交给 `props:safe --images/--media` 或写入真实 media slot。每个素材最多使用一次。用户明确要求原创视觉图/生图时用 image-gen;未明确生图时先询问用户。需要 image-gen 生成 2 张以上独立图片时,用多个 subagent 并行,不要串行逐张等待;每张图独立生成,不要用一张拼图/素材板再拆分。subagent 只用于生图。用户只计划后续插图时选择并保留带 media slot 的页面。

需要调整卡片/条目数量时,用 `cardCount`、`itemCount`、`stepCount` 等 count 参数控制显示数量。数组字段是模板内容池;只覆盖当前显示的前 N 项。被 count/显隐控制隐藏的尾项可保留“请输入文本”占位。

不要使用旧的 `theme`、`fontSet`、`fontWeight`、`typeScale`、`styleVariant`、token 或开发者模式字段。
