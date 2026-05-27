import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

const descriptions = {
  '.githooks/pre-commit': '本地 Git pre-commit hook,提交前重生成 README、ADR 和文件作用说明并自动 stage。',
  '.gitignore': '忽略本地依赖、生成产物和系统临时文件。',
  'AGENTS.md': '项目级 Agent 记忆,记录本仓库长期遵守的实现约束。',
  'README.md': '项目入口说明,包含快速开始、当前选项和文档索引。',
  'SKILL.md': '给 Agent 使用的 skill 说明,定义 PPT 生成流程和约束。',
  'assets/motion.min.js': '浏览器端 Motion One 动效 runtime,由渲染器复制到最终产物。',
  'assets/screenshot-backgrounds/style-a/dune.webp': 'Style A 沙丘截图背景资源。',
  'assets/screenshot-backgrounds/style-a/forest-ink.webp': 'Style A 森林墨截图背景资源。',
  'assets/screenshot-backgrounds/style-a/indigo-porcelain.webp': 'Style A 靛蓝瓷截图背景资源。',
  'assets/screenshot-backgrounds/style-a/kraft-paper.webp': 'Style A 牛皮纸截图背景资源。',
  'assets/screenshot-backgrounds/style-a/monocle-classic.webp': 'Style A 墨水经典截图背景资源。',
  'assets/screenshot-backgrounds/style-b/ikb-dot-gradient.webp': 'Style B IKB 蓝截图背景资源。',
  'assets/screenshot-backgrounds/style-b/lemon-green-dot-shadow.webp': 'Style B 柠檬绿截图背景资源。',
  'assets/screenshot-backgrounds/style-b/lemon-grid.webp': 'Style B 柠檬黄截图背景资源。',
  'assets/screenshot-backgrounds/style-b/safety-orange-halftone.webp': 'Style B 安全橙截图背景资源。',
  'assets/template-swiss.html': '静态 PPT HTML 外壳模板,包含 CSS、背景、翻页、导航、预览控制器和动效入口。',
  'docs/ADR.md': '架构决策记录,描述当前生成链路和组件化边界。',
  'docs/project-files.md': '项目文件作用说明,由脚本根据当前文件列表生成。',
  'examples/component-decks/ai-ops-review.jsx': 'AI 运营复盘示例 deck,演示技术/运营复盘主题的页面组合。',
  'examples/component-decks/all-layouts-showcase.jsx': '全部布局总览示例 deck,顺序渲染 A01-A10、S01-S22、S08 登记扩展和组件维度展示页。',
  'examples/component-decks/climate-field-report.jsx': '城市微气候田野报告示例 deck,演示生态/田野主题的页面组合。',
  'examples/component-decks/retail-launch-brief.jsx': '零售新品上市简报示例 deck,演示消费/上市主题的页面组合。',
  'examples/component-decks/swiss-demo.jsx': '组件选项机制 demo deck,可用环境变量切换主题和字体。',
  'package-lock.json': 'npm 依赖锁定文件。',
  'package.json': 'npm 脚本和 React/tsx 依赖声明。',
  'references/checklist.md': '原项目执行检查清单,包含 Style B 生成和 QA 约束。',
  'references/component-workflow.md': '组件选项工作流参考,说明新增选项和 subagent 测试要求。',
  'references/image-prompts.md': '图片生成提示词参考,包含 Style A 与 Style B 的图像槽位要求。',
  'references/layouts.md': 'Style A 电子杂志原始布局说明,登记 A01-A10 的历史来源。',
  'references/layouts-swiss.md': 'Style B Swiss 原始布局说明,登记 S01-S22 与地图扩展使用方式。',
  'references/screenshot-framing.md': '截图入版规范,说明不同风格的背景、裁切、阴影和留边规则。',
  'references/swiss-layout-lock.md': 'Style B Swiss 布局锁定规则,约束只能使用登记布局和扩展。',
  'references/swiss-map-component.md': 'Style B S08 地图插槽扩展说明,定义点位、关系线和控制区契约。',
  'references/themes.md': 'Style A 电子杂志主题色参考。',
  'references/themes-swiss.md': 'Style B Swiss 主题色参考,定义 4 套主题与使用边界。',
  'scripts/render-deck.jsx': '渲染 CLI 入口,把 deck 配置文件输出成静态 HTML。',
  'scripts/update-project-docs.mjs': '文档同步脚本,更新 README、ADR 和项目文件作用说明。',
  'scripts/validate-layout-showcase.mjs': '布局总览覆盖校验器,确保 all-layouts-showcase 穷举 A01-A10、canonical S01-S22 和 Style B 登记扩展。',
  'scripts/validate-swiss-deck.mjs': '静态 deck 校验器,检查合法 layout、图片槽位和禁用模式。',
  'src/components/magazine/A01HeroCover.jsx': 'Hero Cover 页面布局组件,对应 A01。',
  'src/components/magazine/A02ActDivider.jsx': 'Act Divider 页面布局组件,对应 A02。',
  'src/components/magazine/A03BigNumbersGrid.jsx': 'Big Numbers Grid 页面布局组件,对应 A03。',
  'src/components/magazine/A04QuoteImage.jsx': 'Quote + Image 页面布局组件,对应 A04。',
  'src/components/magazine/A05ImageGrid.jsx': 'Image Grid 页面布局组件,对应 A05。',
  'src/components/magazine/A06Pipeline.jsx': 'Pipeline 页面布局组件,对应 A06。',
  'src/components/magazine/A07HeroQuestion.jsx': 'Hero Question 页面布局组件,对应 A07。',
  'src/components/magazine/A08BigQuote.jsx': 'Big Quote 页面布局组件,对应 A08。',
  'src/components/magazine/A09BeforeAfter.jsx': 'Before / After 页面布局组件,对应 A09。',
  'src/components/magazine/A10LeadImageText.jsx': 'Lead Image + Side Text 页面布局组件,对应 A10。',
  'src/components/magazine/index.jsx': 'A01-A10 组件统一导出口,供 LAYOUT_OPTIONS 引用。',
  'src/components/magazine/primitives.jsx': '电子杂志布局共享基础件,包含 slide 外壳、页眉、页脚、图片框和标题块。',
  'src/components/swiss/Closing.jsx': '收尾页组件,对应 SWISS-CLOSING-ASCII。',
  'src/components/swiss/Cover.jsx': '封面组件,对应 SWISS-COVER-ASCII。',
  'src/components/swiss/HBar.jsx': '横向柱状排行组件,对应 S07。',
  'src/components/swiss/ImageHero.jsx': '图片主视觉页组件,对应 S22。',
  'src/components/swiss/KpiTower.jsx': 'KPI 塔组件,对应 S06。',
  'src/components/swiss/S01IndexCover.jsx': 'Index Cover 正文布局组件,对应 S01。',
  'src/components/swiss/S03SplitStatement.jsx': 'Split Statement 正文布局组件,对应 S03。',
  'src/components/swiss/S05ThreeLayers.jsx': 'Three Layers 正文布局组件,对应 S05。',
  'src/components/swiss/S08DuoCompare.jsx': 'Duo Compare 正文布局组件,对应 S08。',
  'src/components/swiss/S08Map.jsx': 'Swiss Map Component 地图插槽扩展,仍对应 S08。',
  'src/components/swiss/S09DotMatrixStatement.jsx': 'Dot Matrix Statement 正文布局组件,对应 S09。',
  'src/components/swiss/S10SplitClosing.jsx': 'Split Closing 正文布局组件,对应 S10。',
  'src/components/swiss/S11HorizontalTimeline.jsx': 'Horizontal Timeline 正文布局组件,对应 S11。',
  'src/components/swiss/S12ManifestoBanner.jsx': 'Manifesto + Ink Banner 正文布局组件,对应 S12。',
  'src/components/swiss/S13ThreeForces.jsx': 'Three Forces 正文布局组件,对应 S13。',
  'src/components/swiss/S14LoopForm.jsx': 'Loop Form 正文布局组件,对应 S14。',
  'src/components/swiss/S15MatrixHeroStat.jsx': 'Matrix + Hero Stat 正文布局组件,对应 S15。',
  'src/components/swiss/S16MultiCardBrief.jsx': 'Multi-card Brief 正文布局组件,对应 S16。',
  'src/components/swiss/S17SystemDiagram.jsx': 'System Diagram 正文布局组件,对应 S17。',
  'src/components/swiss/S18WhyNow.jsx': 'Why Now 正文布局组件,对应 S18。',
  'src/components/swiss/S19FourCards.jsx': 'Four Cards 正文布局组件,对应 S19。',
  'src/components/swiss/S20StackedLedger.jsx': 'Stacked KPI Ledger 正文布局组件,对应 S20。',
  'src/components/swiss/S21TechSpec.jsx': 'Tech Spec Sheet 正文布局组件,对应 S21。',
  'src/components/swiss/SixCells.jsx': '六宫格组件,对应 S04。',
  'src/components/swiss/Timeline.jsx': '纵向时间线 + KPI 组件,对应 S02。',
  'src/components/swiss/index.jsx': 'Swiss 组件统一导出口,供 LAYOUT_OPTIONS 引用。',
  'src/components/swiss/primitives.jsx': 'Swiss 组件共享基础件,包含 slide 外壳、画布卡、页眉、图标和 KPI 行。',
  'src/options.jsx': '选项注册表,集中登记主题色、字体组合、字号、间距、动效和页面版式。',
  'src/renderDeck.jsx': '核心渲染器,把 React slides 注入模板并替换 CSS 变量、注入预览控制器选项。',
};

const generatedFiles = ['docs/ADR.md', 'docs/project-files.md'];

const files = [...new Set([
  ...execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], {
  cwd: ROOT,
  encoding: 'utf8',
  })
  .split('\n')
  .map((file) => file.trim())
  .filter(Boolean),
  ...generatedFiles,
])]
  .filter((file) => file !== '.DS_Store')
  .filter((file) => fs.existsSync(path.join(ROOT, file)))
  .sort();

writeFile('docs/project-files.md', renderProjectFiles(files));
writeFile('docs/ADR.md', renderAdr());
updateReadme(files);

function renderProjectFiles(fileList) {
  const tree = renderTree(fileList);
  return `# 项目文件作用说明

本文件由 \`scripts/update-project-docs.mjs\` 生成,用于快速理解当前项目工作树下每个源码文件的主要作用。\`output/\` 是生成产物目录,不纳入源码文件清单。

\`\`\`text
.
${tree}
\`\`\`
`;
}

function renderAdr() {
  return `# ADR

本文件由 \`scripts/update-project-docs.mjs\` 生成,记录当前项目已经采用的架构决策。

## ADR-001: 最终产物保持为静态 HTML

最终交付仍是 \`index.html\`、\`assets/motion.min.js\` 和图片资源。React 只作为生成层使用,不进入浏览器运行时。

## ADR-002: 可变部分使用登记选项多选一

\`theme\` 从 \`THEME_OPTIONS\` 选择,\`fontSet\` 从 \`FONT_OPTIONS\` 选择,每页通过 \`slide(layoutKey, props)\` 从 \`LAYOUT_OPTIONS\` 选择。Agent 不直接手写自由 HTML 页面。

## ADR-003: 模板负责浏览器运行时

\`assets/template-swiss.html\` 负责 CSS 视觉系统、背景、翻页、导航、预览控制器和动效入口。React 组件只生成注入到 \`#deck\` 内的 slide markup。

## ADR-004: 输出目录是生成物

\`output/\` 用于 demo、验证 deck 和截图产物,已加入 \`.gitignore\`,不作为源码提交。

## ADR-005: 提交前同步项目文档

\`.githooks/pre-commit\` 会运行 \`scripts/update-project-docs.mjs\`,并 stage \`README.md\`、\`docs/ADR.md\`、\`docs/project-files.md\`。

## ADR-006: layout-sandbox 分支从空布局 registry 开始

当前分支已清空旧 layout preset。\`src/options.jsx\` 保留空的 \`LAYOUT_OPTIONS\`,后续新增布局时再登记 key、label、dataLayout 和组件。

## ADR-007: 新布局继续按文件拆分

后续每个页面布局仍然独立成一个 JSX 文件。共享能力优先复用 \`src/components/shell/\`、\`text/\`、\`media/\`、\`metrics/\`、\`charts/\`、\`timelines/\`、\`cards/\`、\`decorations/\`、\`diagrams/\`。

## ADR-008: 提交前刷新全布局总览

\`.githooks/pre-commit\` 会运行 \`npm run showcase:update\`。当 registry 为空时,demo 只渲染 sandbox 页;新增布局后,showcase 需要同步覆盖已登记布局。

## ADR-009: 旧布局参考资料保留为历史参考

原项目 Style A / Style B 的参考资料仍在 \`references/\` 与 \`assets/screenshot-backgrounds/\`,但当前分支不再登记旧布局组件。

## ADR-010: 生成底座继续保留

\`assets/template-swiss.html\`、\`src/renderDeck.jsx\`、\`src/tokens/\` 和基础组件目录继续保留,用于承载下一批新布局。

## ADR-011: token 与基础组件按组合维度分类

\`src/tokens/\` 存放主题、字体、字号、间距和动效选项。\`src/components/\` 下按组合职责分为 \`shell/\`、\`text/\`、\`media/\`、\`metrics/\`、\`charts/\`、\`timelines/\`、\`cards/\`、\`decorations/\`、\`diagrams/\`。

## ADR-012: demo 同时覆盖布局穷举和运行时切换

\`examples/component-decks/all-layouts-showcase.jsx\` 当前是空 registry 的 sandbox 预览页。主题、字体、字号、间距这类全局 token 仍由 \`assets/template-swiss.html\` 的预览侧边栏切换。明暗底色归入 theme 的 \`surface\` / \`inverse\` 角色;布局内被高亮的 item 后续继续使用 theme 的 \`focus-*\` 角色。
`;
}

function updateReadme(fileList) {
  const readmePath = path.join(ROOT, 'README.md');
  const readme = fs.readFileSync(readmePath, 'utf8');
  const section = renderReadmeSection(fileList);
  fs.writeFileSync(readmePath, replaceSection(readme, 'project-docs', section));
}

function renderReadmeSection(fileList) {
  const sourceCount = fileList.length;
  return `## 项目文档

以下文档由 \`npm run docs:update\` 同步,提交前也会由 \`.githooks/pre-commit\` 自动更新。

提交前 hook 还会运行 \`npm run showcase:update\`,确保 \`all-layouts-showcase.jsx\` 覆盖全部 \`A01-A10\`、\`S01-S22\` 和 Style B 登记扩展,并刷新 \`output/all-components-showcase/ppt/index.html\`。

- [ADR](docs/ADR.md): 当前架构决策记录
- [项目文件作用说明](docs/project-files.md): 当前 ${sourceCount} 个源码文件的主要作用
`;
}

function replaceSection(content, name, body) {
  const start = `<!-- ${name}:start -->`;
  const end = `<!-- ${name}:end -->`;
  const block = `${start}\n${body.trim()}\n${end}`;
  const pattern = new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}`);

  if (pattern.test(content)) {
    return content.replace(pattern, block);
  }

  return `${content.trim()}\n\n${block}\n`;
}

function describe(file) {
  if (descriptions[file]) return descriptions[file];
  if (file.startsWith('assets/')) return '静态模板或浏览器运行时资源。';
  if (file.startsWith('docs/')) return '项目文档。';
  if (file.startsWith('examples/component-decks/')) return '组件化 deck 示例配置。';
  if (file.startsWith('references/')) return 'Agent 或开发者参考资料。';
  if (file.startsWith('scripts/')) return '本地命令脚本。';
  if (file.startsWith('src/tokens/')) return '组件生成层 token 选项。';
  if (file.startsWith('src/components/shell/')) return '页面外壳组件,负责 slide、画布、页眉、页脚和背景装饰。';
  if (file.startsWith('src/components/text/')) return '文本表达组件,负责 kicker、标题、引用和 meta 信息。';
  if (file.startsWith('src/components/media/')) return '媒体组件,负责图片框、截图槽位和图片网格。';
  if (file.startsWith('src/components/metrics/')) return '指标组件,负责 KPI 行、数据卡和数字网格。';
  if (file.startsWith('src/components/charts/')) return '图表组件,负责条形图等数据可视化块。';
  if (file.startsWith('src/components/timelines/')) return '时间线与流程组件。';
  if (file.startsWith('src/components/cards/')) return '卡片组件。';
  if (file.startsWith('src/components/decorations/')) return '装饰组件,包含图标和分割线等视觉元素。';
  if (file.startsWith('src/components/diagrams/')) return '图解组件,负责地图、关系图和系统图等结构表达。';
  if (file.startsWith('src/')) return 'React 生成层源码。';
  return '项目源码或配置文件。';
}

function renderTree(fileList) {
  const root = { children: new Map() };

  for (const file of fileList) {
    let cursor = root;
    const parts = file.split('/');

    parts.forEach((part, index) => {
      if (!cursor.children.has(part)) {
        cursor.children.set(part, {
          name: part,
          path: parts.slice(0, index + 1).join('/'),
          children: new Map(),
          isFile: index === parts.length - 1,
        });
      }
      cursor = cursor.children.get(part);
    });
  }

  return renderTreeNode(root).join('\n');
}

function renderTreeNode(node, prefix = '') {
  const entries = [...node.children.values()].sort((a, b) => {
    if (a.isFile !== b.isFile) return a.isFile ? 1 : -1;
    return a.name.localeCompare(b.name);
  });

  return entries.flatMap((entry, index) => {
    const isLast = index === entries.length - 1;
    const marker = isLast ? '`-- ' : '|-- ';
    const nextPrefix = `${prefix}${isLast ? '    ' : '|   '}`;

    if (entry.isFile) {
      return [`${prefix}${marker}${entry.name} - ${describe(entry.path)}`];
    }

    return [
      `${prefix}${marker}${entry.name}/`,
      ...renderTreeNode(entry, nextPrefix),
    ];
  });
}

function writeFile(relativePath, content) {
  const filePath = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
