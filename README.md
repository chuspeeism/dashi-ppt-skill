# Dashi PPT Skill · 大师 PPT / 网页 PPT / 可编辑 PPTX

![GitHub stars](https://img.shields.io/github/stars/chuspeeism/dashi-ppt-skill?style=flat-square)
![Skill](https://img.shields.io/badge/Skill-Agent-111111?style=flat-square)
![HTML Deck](https://img.shields.io/badge/HTML-Deck-0A7CFF?style=flat-square)
![PPTX Export](https://img.shields.io/badge/PPTX-%E5%8F%AF%E7%BC%96%E8%BE%91%E5%AF%BC%E5%87%BA-D24726?style=flat-square)
![Claude Code](https://img.shields.io/badge/Claude%20Code-Supported-6B5B95?style=flat-square)
![Codex](https://img.shields.io/badge/Codex-Supported-222222?style=flat-square)
![豆包](https://img.shields.io/badge/%E8%B1%86%E5%8C%85-Supported-3370FF?style=flat-square)
![Marvis](https://img.shields.io/badge/Marvis-Supported-FF5A5F?style=flat-square)
![Workbuddy](https://img.shields.io/badge/Workbuddy-Supported-2EA44F?style=flat-square)
![Dumate](https://img.shields.io/badge/Dumate-Supported-F59E0B?style=flat-square)
![Qclaw](https://img.shields.io/badge/Qclaw-Supported-14B8A6?style=flat-square)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue?style=flat-square)](./LICENSE)

[English](./README.en.md) · [简体中文](README.md)

一个真正适合职场人的 PPT Skill。把文档丢给你的 AI Agent，每一页都自带编辑控制台的 PPT Skill——不满意的地方直接在浏览器里改，改完还能一键导出成真实的、可编辑的 PPTX。

- 12 套视觉主题
- 1020 个版式页面
- 8576 个可调控件

![生成效果演示](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/hero-result.gif)

## ❤️赞助商

<table>
<tr>
<td width="180"><a href="https://slidesign.cn/"><img src="assets/partners/logos/slidesign.png" alt="夺幕传媒 SLIDESIGN" width="150"></a></td>
<td>感谢夺幕传媒 SLIDESIGN 赞助了本项目！夺幕传媒 SLIDESIGN 是一家专注发布会与战略表达的演示咨询公司，为企业提供演示咨询、发布会 Keynote / PPT、产品发布会视觉全案、品牌视觉、影视动画与活动空间服务。了解更多请访问 <a href="https://slidesign.cn/">slidesign.cn</a>。</td>
</tr>
</table>

## 12 套内置视觉主题

Skill 会展示预览让你选择主题，可以随时让 Agent 整套换掉。下面每套主题的预览，都是从它自己的版式库里挑出的 4 个正文版式（图表、分析模型、卡片、目录等），全部由这个 Skill 真实渲染，非示意图：

|  |  |
|---|---|
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme01.jpg" width="440" alt="轻拟态风内页预览"><br>**theme01**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme02.jpg" width="440" alt="炫光紫绿风内页预览"><br>**theme02**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme03.jpg" width="440" alt="深浅代码风内页预览"><br>**theme03**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme04.jpg" width="440" alt="玻璃糖果风内页预览"><br>**theme04**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme05.jpg" width="440" alt="色谱图表风内页预览"><br>**theme05**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme06.jpg" width="440" alt="深色图谱风内页预览"><br>**theme06**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme07.jpg" width="440" alt="冷白调研风内页预览"><br>**theme07**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme08.jpg" width="440" alt="黑金实验风内页预览"><br>**theme08**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme09.jpg" width="440" alt="深蓝杂志风内页预览"><br>**theme09**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme10.jpg" width="440" alt="金色指数风内页预览"><br>**theme10**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme11.jpg" width="440" alt="高能增长风内页预览"><br>**theme11**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme12.jpg" width="440" alt="声波霓虹风内页预览"><br>**theme12**<br> |

## 快速开始

**一键安装/更新**：

```bash
npx dashi-ppt-skill@latest
```
国内网络:
```bash
npx --registry=https://registry.npmmirror.com dashi-ppt-skill@latest
```
安装和更新是同一条命令,重跑即原地更新(已装依赖自动保留)。
让 AI Agent 帮你安装：

```text
帮我安装 skill：npx dashi-ppt-skill@latest，国内镜像 npx --registry=https://registry.npmmirror.com dashi-ppt-skill@latest
```

环境要求：Node.js 20+ 和 npm；导出 PPTX / PDF 需要本机装有 Chrome / Chromium / Edge。

## 效果

- **12套主题**：覆盖多种 PPT 使用场景和风格
- **1020个版式**：每套主题独立的页面结构和视觉语言，20 种页面角色（封面、目录、指标、趋势、对比、流程、风险、结尾……）
- **图表与分析模型**：雷达图、瀑布图、矩形树图、漏斗、热力图、桑基图、甘特图，以及 SWOT、波特五力、PEST、商业模式画布、双钻模型等分析模型版式
- **自带控制台**：滑杆、开关、下拉——换布局、调模块数量、换配色、换页面重点
- **文字可编辑**：点击任意文字就地修改
- **媒体替换**：点击或拖拽替换媒体槽，文字资料也会自动预留图片占位符
- **一键导出**：HTML离线包 / PDF / 可编辑 PPTX

## 适用场景

**合适**：行业研究 / 融资复盘 / 竞品分析 / 趋势报告 / 项目汇报 / 方案展示 / 路演材料 / 内部培训——需要快速形成结构完整、视觉统一、还能继续改的演示文稿

**不合适**：需要逐像素手工定制视觉的场景

## HTML 与导出能力

- **适配 Agent 能力**：HTML / Agent 能直接读、改、校验；每一页由"版式 + 文案字段"构成
- **表现力更高**：入场动画、翻页动画、交互控件、明暗模式切换等
- **产物即编辑器**：结果为网页版 PPT 编辑器——翻页、改字、换图、调版式，打开就能用
- **导出PPTX**：一键导出成真实的 PPTX——逐节点还原、文字保持可编辑

HTML 版与导出 PPTX 版的逐页对比：

![HTML 与导出 PPTX 逐页对比](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/html-vs-pptx.gif)

## 平台支持

> 下表只列出已实测的平台，不代表"仅限这些"。

| 平台 | 状态 | 说明 |
|------|------|------|
| Claude Code | 支持 ||
| Codex | 支持 | 可调用生图能力补充配图 |
| 豆包 | 支持 | 需要启动办公模式 |
| Marvis / Workbuddy / Dumate / Qclaw | 支持 | skill 文件放在任意位置、读取 `SKILL.md` 即可 |
| Cursor / 其他本地 Agent | 可用 | 需要能读写文件并执行 shell 命令 |
| 普通网页 Chatbot | 不推荐 | 生成器需要本地 Node.js 环境 |

## 使用流程

把手头的文档丢进去，直接说要做 PPT，等待几分钟就能生成一份完整的 PPT：

1. 描述需求 — 主题、受众、页数、想突出的结论
2. 选风格 — Skill 会展示 12 套风格预览让你选择；同时确认是否需要图片 / 视频
3. 自动组稿 — Skill 把需求整理成结构化的内容，并设计对应的 PPT 方案
4. 随手编辑 — 改文字、换图片、调模块数量、换配色，改动自动保存
5. 交付 — 可以选择让 Agent 换风格调细节；满意导出需要的格式

![图片占位符一键填图](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/image-placeholder.gif)

## 生成后编辑

> 生成之后如何编辑，比生成本身更重要

设计调节：每页都附带一个控制台，20 多个维度的编辑空间——内容、布局、模块数量、页面重点、预设配色、翻页动画；
文字编辑:任意文本点击即可编辑；
图片、视频槽：点击或拖拽即可替换，上传自动压缩。

| 点击任意文字就地编辑 | 加图片 |
|---|---|
| ![点击文字就地编辑，装饰元素随字数自适应](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/text-edit.gif) | ![向页面插入图片](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/add-image.gif) |

### 控制台改：布局、模块数量、图表、配色

拖动控制台右侧的滑杆，就能自定义页面中模块的数量；页面的逻辑重点也可以通过滑杆调换，帮你把握演讲节奏。

| 拖滑杆增减模块 | 换布局 |
|---|---|
| ![拖动滑杆调节目录、表格、多项式、图片数量](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/slider-edit.gif) | ![一句话切换页面布局](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/layout-switch.gif) |

| 换图表 | 风格内配色切换 |
|---|---|
| ![一句话更换图表类型](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/chart-switch.gif) | ![每套风格内支持局部配色调换](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/palette-switch.gif) |

### 翻页动画

9种切换动画可以随意选择

![翻页过渡动画效果](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/transitions.gif)

### 其他

- 左侧缩略图目录支持拖拽重排页面，页面可跳过 / 删除 / 复制
- 顶栏一键进入放映模式、切换明暗主题、重置全部改动

图表版式：

![多种图表版式展示](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/layouts-tour.gif)

分析模型与专业版式

![内置分析模型版式](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/analysis-models.png)

高频使用的目录页、表格页、数字海报页、图文页：

![常用版式](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/common-layouts.png)

## 导出

![一键导出可编辑 PPT](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/export-pptx.gif)

可以跨过 HTML 的中间态，直接跟 Agent 说"用这个 skill 生成 PPT 格式的文件"，从提示词一步到 PPTX。

命令行导出：

```bash
npm --prefix <project目录> run export:pptx -- <PPT输出目录>/ppt 输出.pptx
npm --prefix <project目录> run export:pdf  -- <PPT输出目录>/ppt
```

## FAQ

**能导出可编辑的 PPTX 吗？**
> 能。虽然 PPT 无法拥有 HTML 的全量能力，但我们尽最大可能保留了可编辑性。

**生成一套 PPT 大概消耗多少 token？**
> 一套 10 页的 PPT 实测约 10 万 token（随文档长度和往返修改次数浮动）。按 Codex 5 小时额度窗口粗算，大约够生成 10 套

**可以自定义xxx？**
> 当前自定义样式仅限于特定范围。这是有意为之：稳定的产出比自由的选色更重要。

**需要联网吗？我的内容安全吗？**

> 内容层面零上传：你的文档和 PPT 内容不会发送到任何服务器，生成、编辑、导出都在本机完成，成品离线可开。会联网的只有两件事：首次生成时 npm 自动安装依赖；完成任务后的静默版本检查（只拉取最新版本号，不上传任何内容）。另外本地预览服务默认在同一局域网内可访问，仅供浏览，导出接口只对本机开放。

**无法导出 PPTX？**

> 导出 PPTX / PDF 需要本机 Chrome / Chromium / Edge（可用 `CHROME_PATH` 环境变量指定）。

## 开源协议 License

本项目采用 **GNU Affero General Public License v3.0（AGPL-3.0）** 开源——这是 OSI 认证开源协议中 copyleft 效力最强的一个。你可以自由使用、修改、分发本项目（包括商业用途）；但如果你分发修改版，或基于本项目及其修改版通过网络对外提供服务（如 SaaS），必须以 AGPL-3.0 向用户公开完整的对应源代码。

**例外**：子包 `project/packages/html-deck-to-pptx`（导出引擎）为**专有组件**，仅授权作为本 skill 的组成部分使用，不得单独提取、复制或再分发（详见该目录下的 LICENSE；其 v0.2.7 及之前的历史版本曾以 MIT 发布，该授权仅对历史版本有效）。

Copyright (c) 2026 [chuspeeism](https://github.com/chuspeeism)。完整协议文本见根目录 [LICENSE](LICENSE) 文件。如需 AGPL-3.0 之外的商业授权，请联系作者。

## Star History

<a href="https://www.star-history.com/?repos=chuspeeism%2Fdashi-ppt-skill&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&theme=dark&legend=top-left&sealed_token=MpgO76zZLzPPs8bi8jDFZyG1b8gYNbtA8RQhnghNJ0wtwmM9UwUwNiBiy0rtx1stNTntfSl1TJCqxLCMvnTKnj6He8CPK9MYawX-G8i4x4HabmaLVCC0gg" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&legend=top-left&sealed_token=MpgO76zZLzPPs8bi8jDFZyG1b8gYNbtA8RQhnghNJ0wtwmM9UwUwNiBiy0rtx1stNTntfSl1TJCqxLCMvnTKnj6He8CPK9MYawX-G8i4x4HabmaLVCC0gg" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&legend=top-left&sealed_token=MpgO76zZLzPPs8bi8jDFZyG1b8gYNbtA8RQhnghNJ0wtwmM9UwUwNiBiy0rtx1stNTntfSl1TJCqxLCMvnTKnj6He8CPK9MYawX-G8i4x4HabmaLVCC0gg" />
 </picture>
</a>
