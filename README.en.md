# Dashi PPT Skill · Web Decks / Per-Page Console / Editable PPTX Export

![GitHub stars](https://img.shields.io/github/stars/chuspeeism/dashi-ppt-skill?style=flat-square)
![Skill](https://img.shields.io/badge/Skill-Agent-111111?style=flat-square)
![HTML Deck](https://img.shields.io/badge/HTML-Deck-0A7CFF?style=flat-square)
![PPTX Export](https://img.shields.io/badge/PPTX-Editable%20Export-D24726?style=flat-square)
![Claude Code](https://img.shields.io/badge/Claude%20Code-Supported-6B5B95?style=flat-square)
![Codex](https://img.shields.io/badge/Codex-Supported-222222?style=flat-square)
![Doubao](https://img.shields.io/badge/Doubao-Supported-3370FF?style=flat-square)
![Marvis](https://img.shields.io/badge/Marvis-Supported-FF5A5F?style=flat-square)
![Workbuddy](https://img.shields.io/badge/Workbuddy-Supported-2EA44F?style=flat-square)
![Dumate](https://img.shields.io/badge/Dumate-Supported-F59E0B?style=flat-square)
![Qclaw](https://img.shields.io/badge/Qclaw-Supported-14B8A6?style=flat-square)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue?style=flat-square)](./LICENSE)

> 🌏 **中文版：[README.md](./README.md)**

A PPT skill built for people who actually present at work. Hand a document to your AI agent and get back a deck where every page carries its own editing console — fix whatever you don't like right in the browser, then export a real, editable PPTX with one click.

- 12 visual themes
- 1,020 layout pages
- 8,576 tunable controls

![Generated deck demo](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/hero-result.gif)

## ❤️Sponsor

<table>
<tr>
<td width="180"><a href="https://slidesign.cn/"><img src="assets/partners/logos/slidesign.png" alt="SLIDESIGN" width="150"></a></td>
<td>Thanks to SLIDESIGN for sponsoring this project! SLIDESIGN is a presentation consultancy focused on launch events and strategic communication, offering presentation consulting, Keynote and PPT design for launches, end-to-end launch event visuals, brand design, film and motion graphics, and event space services. Learn more at <a href="https://slidesign.cn/">slidesign.cn</a>.</td>
</tr>
</table>

## 12 Built-in Visual Themes

The skill shows you theme previews to pick from, and you can ask the agent to restyle the whole deck at any time. Each preview below shows 4 body layouts (charts, analysis frameworks, cards, table of contents, etc.) drawn from that theme's own layout library — all really rendered by this skill, not mockups:

|  |  |
|---|---|
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme01.jpg" width="440" alt="theme01 preview"><br>**theme01**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme02.jpg" width="440" alt="theme02 preview"><br>**theme02**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme03.jpg" width="440" alt="theme03 preview"><br>**theme03**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme04.jpg" width="440" alt="theme04 preview"><br>**theme04**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme05.jpg" width="440" alt="theme05 preview"><br>**theme05**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme06.jpg" width="440" alt="theme06 preview"><br>**theme06**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme07.jpg" width="440" alt="theme07 preview"><br>**theme07**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme08.jpg" width="440" alt="theme08 preview"><br>**theme08**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme09.jpg" width="440" alt="theme09 preview"><br>**theme09**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme10.jpg" width="440" alt="theme10 preview"><br>**theme10**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme11.jpg" width="440" alt="theme11 preview"><br>**theme11**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme12.jpg" width="440" alt="theme12 preview"><br>**theme12**<br> |

## Get Started in 30 Seconds

**One command to install or update** (it detects common skills directories automatically, installs into every one it finds, and keeps already-installed dependencies):

```bash
npx dashi-ppt-skill@latest
```

Use `--dir <path>` to target a specific skills directory (e.g. `--dir ~/.claude/skills`). Install and update are the same command — re-running it updates in place.

Or hand this to your AI agent:

```text
Install the dashi-ppt skill for me: npx dashi-ppt-skill@latest
```

Requirements: Node.js 20+ and npm; exporting PPTX / PDF requires Chrome / Chromium / Edge installed locally.

## What You Get

- **12 themes** covering a wide range of presentation scenarios and styles
- **1,020 layouts**: each theme has its own page structures and visual language, across 20 page roles (cover, TOC, metrics, trends, comparison, flow, risks, ending…)
- **Charts & analysis frameworks**: radar, waterfall, treemap, funnel, heatmap, Sankey, Gantt — plus SWOT, Porter's Five Forces, PEST, Business Model Canvas, Double Diamond and more as ready-made layouts
- **A console on every page**: sliders, toggles, dropdowns — switch layouts, tune module counts, change palettes, shift the page's emphasis
- **Editable text**: click any text to edit in place
- **Media replacement**: click or drag to fill media slots; text-only source material automatically reserves image placeholders
- **One-click export**: offline HTML bundle / PDF / genuinely editable PPTX

## Good Fit / Not a Fit

**Good fit**: industry research / funding reviews / competitive analysis / trend reports / project updates / proposals / pitch decks / internal training — anything that needs a structurally complete, visually consistent deck you can keep editing.

**Not a fit**: pixel-by-pixel hand-crafted visual design.

## HTML and Export

- **Built for agents**: HTML is something agents can read, modify, and validate directly; every page is "layout + copy fields"
- **More expressive**: entrance animations, page transitions, interactive controls, light/dark switching
- **The output is the editor**: what you get is a web-based deck editor — flip, edit text, swap images, adjust layouts, ready the moment it opens
- **PPTX export**: one click produces a real PPTX — reconstructed node by node, text stays editable

HTML deck vs. exported PPTX, page by page:

![HTML vs exported PPTX](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/html-vs-pptx.gif)

## Platform Support

> The table lists platforms we have actually tested — it is not an exhaustive list.

| Platform | Status | Notes |
|------|------|------|
| Claude Code | Supported ||
| Codex | Supported | Can call image generation to fill visuals |
| Doubao | Supported | Requires office mode |
| Marvis / Workbuddy / Dumate / Qclaw | Supported | Drop the skill anywhere and point them at `SKILL.md` |
| Cursor / other local agents | Usable | Needs file read/write and shell access |
| Plain web chatbots | Not recommended | The generator needs a local Node.js environment |

## How It Works

Throw in whatever document you have, say you want a deck, and get a complete deck minutes later:

1. Describe the ask — topic, audience, page count, the conclusions to highlight
2. Pick a style — the skill shows previews of the 12 themes; confirm whether you need images / video
3. Auto-drafting — the skill structures your content and designs the deck around it
4. Edit as you go — text, images, module counts, palettes; every change auto-saves
5. Deliver — ask the agent to restyle or fine-tune; export to whatever format you need

![Image placeholders filled in one step](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/image-placeholder.gif)

## Editing After Generation

> How a deck edits after generation matters more than the generation itself.

Design controls: every page ships with a console — 20+ dimensions of editing room covering content, layout, module counts, page emphasis, preset palettes, and transitions. Text: click any text to edit. Image / video slots: click or drag to replace; uploads are compressed automatically.

| Click any text to edit in place | Add images |
|---|---|
| ![Click-to-edit text; decorations adapt to length](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/text-edit.gif) | ![Insert images into a page](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/add-image.gif) |

### Console edits: layout, module count, charts, palettes

Drag the sliders on the right-hand console to change how many modules a page shows; the page's logical emphasis can be shifted the same way to match your talk track.

| Drag sliders to add/remove modules | Switch layouts |
|---|---|
| ![Sliders adjust TOC, tables, lists, image counts](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/slider-edit.gif) | ![Switch a page layout with one sentence](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/layout-switch.gif) |

| Switch charts | Palette switching within a theme |
|---|---|
| ![Switch chart types with one sentence](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/chart-switch.gif) | ![Local palette switching inside each theme](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/palette-switch.gif) |

### Page transitions

9 transition styles to choose from:

![Page transition effects](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/transitions.gif)

### And more

- The thumbnail rail on the left supports drag-to-reorder; pages can be skipped / deleted / duplicated
- Top bar: one-click presentation mode, light/dark switching, reset-all

Chart layouts:

![Chart layout tour](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/layouts-tour.gif)

Analysis frameworks and specialist layouts:

![Built-in analysis framework layouts](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/analysis-models.png)

High-frequency layouts — TOC, tables, number posters, image-and-text:

![Common layouts](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/common-layouts.png)

## Export

![One-click editable PPTX export](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/export-pptx.gif)

You can also skip the HTML intermediate entirely — tell the agent "use this skill to produce a PPT file" and go from prompt to PPTX in one step.

Command-line export:

```bash
npm --prefix <project-dir> run export:pptx -- <deck-output-dir>/ppt out.pptx
npm --prefix <project-dir> run export:pdf  -- <deck-output-dir>/ppt
```

## FAQ

**Can it export an editable PPTX?**
> Yes. PPT can't carry every capability HTML has, but we preserve as much editability as possible.

**How many tokens does a deck cost?**
> A 10-page deck measures around 100k tokens (varies with document length and editing rounds). Roughly 10 decks per Codex 5-hour quota window.

**Can I customize …?**
> Custom styling is intentionally limited to a defined range: stable output matters more than free-form color picking.

**Does it need the network? Is my content safe?**
> Zero content upload: your documents and deck content never leave your machine — generation, editing, and export all run locally, and the output opens offline. Only two things touch the network: npm dependency installation on first generation, and a silent version check after tasks complete (it only fetches the latest version number, nothing is uploaded). The local preview server is reachable within your LAN for viewing only; export endpoints are local-only.

**PPTX export fails?**
> Exporting PPTX / PDF requires a local Chrome / Chromium / Edge (point to it with the `CHROME_PATH` environment variable if needed).

## License

This project is open-sourced under the **GNU Affero General Public License v3.0 (AGPL-3.0)** — the strongest copyleft license among OSI-approved licenses. You may freely use, modify, and distribute this project (including commercially); but if you distribute a modified version, or provide a network service based on this project or its modifications (e.g. SaaS), you must make the complete corresponding source code available to users under AGPL-3.0.

**Exception**: the subpackage `project/packages/html-deck-to-pptx` (the export engine) is a **proprietary component**, licensed for use only as an integrated part of this skill — extracting, copying, or redistributing it separately is prohibited (see the LICENSE in that directory; versions up to v0.2.7 were historically published under MIT, and that grant applies to those versions only).

Copyright (c) 2026 [chuspeeism](https://github.com/chuspeeism). Full license text in the root [LICENSE](LICENSE) file. For commercial licensing beyond AGPL-3.0, contact the author.

## Star History
<a href="https://www.star-history.com/?repos=chuspeeism%2Fdashi-ppt-skill&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&theme=dark&legend=top-left&sealed_token=U3gRkm794u4qnXIGSGM51xweW2r79vR1G0kp9AcwlAYR6O_QGdKwI8ZFD9cbI4ZVWU9KmXQn2n74NAJRcwu2X0O3tiB3IOc4U5R44dR5CjTadftJPQZq3Q" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&legend=top-left&sealed_token=U3gRkm794u4qnXIGSGM51xweW2r79vR1G0kp9AcwlAYR6O_QGdKwI8ZFD9cbI4ZVWU9KmXQn2n74NAJRcwu2X0O3tiB3IOc4U5R44dR5CjTadftJPQZq3Q" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&legend=top-left&sealed_token=U3gRkm794u4qnXIGSGM51xweW2r79vR1G0kp9AcwlAYR6O_QGdKwI8ZFD9cbI4ZVWU9KmXQn2n74NAJRcwu2X0O3tiB3IOc4U5R44dR5CjTadftJPQZq3Q" />
 </picture>
</a>
