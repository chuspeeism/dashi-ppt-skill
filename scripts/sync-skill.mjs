import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILL_ROOT = process.env.DASHI_PPT_SKILL_ROOT || path.join(os.homedir(), '.agents/skills/dashi-ppt-skill');
const sourcePath = path.join(ROOT, 'SKILL.md');
const rootSkillPath = path.join(SKILL_ROOT, 'SKILL.md');
const MIGRATION_ONLY_DIRS = new Set(['uploads', 'screens', 'screenshots', 'shots', 'scratch']);

const themeMetadata = loadThemeMetadata();
const source = renderThemeList(fs.readFileSync(sourcePath, 'utf8'), themeMetadata);

writeIfChanged(sourcePath, source);
fs.rmSync(SKILL_ROOT, { recursive: true, force: true });
syncProjectFiles();
syncReferences();
syncRunnerScript();
syncVersionCheckScript();
syncDistributionFiles();
writeIfChanged(rootSkillPath, renderInstalledSkill(source));

console.log(`Synced SKILL.md to ${SKILL_ROOT}`);

function syncProjectFiles() {
  const projectRoot = path.join(SKILL_ROOT, 'project');
  fs.mkdirSync(projectRoot, { recursive: true });
  const runtimePackage = renderRuntimePackage();
  writeIfChanged(path.join(projectRoot, 'package.json'), JSON.stringify(runtimePackage, null, 2) + '\n');
  writeIfChanged(path.join(projectRoot, 'package-lock.json'), JSON.stringify(renderRuntimePackageLock(runtimePackage), null, 2) + '\n');
  copyPath(path.join(ROOT, 'layout-manifest.json'), path.join(projectRoot, 'layout-manifest.json'));
  copyPath(path.join(ROOT, 'assets/template-swiss.html'), path.join(projectRoot, 'assets/template-swiss.html'));
  copyPath(path.join(ROOT, 'src'), path.join(projectRoot, 'src'));
  copyPath(path.join(ROOT, 'scripts/skill-workflow-utils.mjs'), path.join(projectRoot, 'scripts/skill-workflow-utils.mjs'));
  copyPath(path.join(ROOT, 'scripts/layout-query.mjs'), path.join(projectRoot, 'scripts/layout-query.mjs'));
  copyPath(path.join(ROOT, 'scripts/inspect-layout.mjs'), path.join(projectRoot, 'scripts/inspect-layout.mjs'));
  copyPath(path.join(ROOT, 'scripts/write-safe-props.mjs'), path.join(projectRoot, 'scripts/write-safe-props.mjs'));
  copyPath(path.join(ROOT, 'scripts/validate-goal-spec.mjs'), path.join(projectRoot, 'scripts/validate-goal-spec.mjs'));
  copyPath(path.join(ROOT, 'scripts/validate-skill-workflow-tools.mjs'), path.join(projectRoot, 'scripts/validate-skill-workflow-tools.mjs'));
  copyPath(path.join(ROOT, 'scripts/render-goal-deck.jsx'), path.join(projectRoot, 'scripts/render-goal-deck.jsx'));
  copyPath(path.join(ROOT, 'scripts/serve-preview-https.mjs'), path.join(projectRoot, 'scripts/serve-preview-https.mjs'));
  copyPath(path.join(ROOT, 'scripts/validate-swiss-deck.mjs'), path.join(projectRoot, 'scripts/validate-swiss-deck.mjs'));
  copyPath(path.join(ROOT, 'scripts/validate-goal-copy.mjs'), path.join(projectRoot, 'scripts/validate-goal-copy.mjs'));
}

function renderRuntimePackage() {
  const sourcePackage = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
  return {
    name: 'dashi-ppt-skill-runtime',
    version: sourcePackage.version,
    private: true,
    type: 'module',
    scripts: {
      'layout:query': 'node scripts/layout-query.mjs',
      'inspect:layout': 'node scripts/inspect-layout.mjs',
      'props:safe': 'node scripts/write-safe-props.mjs',
      'validate:goal-spec': 'node scripts/validate-goal-spec.mjs',
      'validate:skill-workflow-tools': 'node scripts/validate-skill-workflow-tools.mjs',
      'render:goal': 'tsx scripts/render-goal-deck.jsx',
      'preview:https': 'node scripts/serve-preview-https.mjs',
      'validate:swiss': 'node scripts/validate-swiss-deck.mjs',
      'validate:goal-copy': 'node scripts/validate-goal-copy.mjs',
    },
    dependencies: sourcePackage.dependencies,
    devDependencies: {
      tsx: sourcePackage.devDependencies?.tsx || '^4.20.0',
      esbuild: '^0.28.0',
    },
  };
}

function renderRuntimePackageLock(runtimePackage) {
  const sourceLockPath = path.join(ROOT, 'package-lock.json');
  const sourceLock = JSON.parse(fs.readFileSync(sourceLockPath, 'utf8'));
  sourceLock.name = runtimePackage.name;
  sourceLock.version = runtimePackage.version;
  sourceLock.packages = sourceLock.packages || {};
  sourceLock.packages[''] = {
    name: runtimePackage.name,
    version: runtimePackage.version,
    dependencies: runtimePackage.dependencies,
    devDependencies: runtimePackage.devDependencies,
  };
  return sourceLock;
}

function syncReferences() {
  const refsRoot = path.join(SKILL_ROOT, 'references');
  const examplesRoot = path.join(refsRoot, 'examples');
  const firstLayout = themeMetadata.packs[0] ? `${themeMetadata.packs[0].key}_page001` : 'theme01_page001';
  const lastLayout = themeMetadata.packs.at(-1) ? `${themeMetadata.packs.at(-1).key}_page001` : firstLayout;
  fs.mkdirSync(examplesRoot, { recursive: true });
  writeIfChanged(path.join(examplesRoot, 'annual-review.json'), JSON.stringify(renderExampleGoal({
    title: 'AI 融资年度回顾',
    goal: '面向投资团队汇报 AI 融资年度进展、关键变化和下一步判断',
    audience: '投资团队',
    owner: '研究团队',
    themePack: 'theme08',
    layouts: ['theme08_page001', 'theme08_page006', 'theme08_page018', 'theme08_page030', 'theme08_page074'],
  }), null, 2) + '\n');
  writeIfChanged(path.join(examplesRoot, 'portfolio.json'), JSON.stringify(renderExampleGoal({
    title: 'AI 产品组合策略',
    goal: '面向管理层说明 AI 产品组合的优先级、投入节奏和落地路径',
    audience: '管理层',
    owner: '产品策略团队',
    themePack: 'theme10',
    layouts: ['theme10_page001', 'theme10_page006', 'theme10_page021', 'theme10_page044', 'theme10_page095'],
  }), null, 2) + '\n');
  writeIfChanged(path.join(refsRoot, 'options.md'), renderOptionsReference(themeMetadata));
  writeIfChanged(path.join(refsRoot, 'layout-pool.md'), renderLayoutPoolReference(themeMetadata));
  writeIfChanged(path.join(refsRoot, 'layout-roles.md'), `# Layout Roles

\`role\` 只用于草稿阶段理解页面功能。面向用户交付前,必须把每页换成具体 \`layout\`。

| role | 用途 |
|---|---|
| \`cover\` | 封面,只能从当前主题前 5 页中选 1 页 |
| \`statement\` | 摘要、论点、金句、核心判断 |
| \`breakdown\` | 目录、结构拆解、篇章卡、问答结构 |
| \`transition\` | 章节分隔、附录分隔 |
| \`context\` | 市场背景、定位矩阵、区域画像、批注说明 |
| \`metrics\` | 核心数字、指标、计量条、计分榜 |
| \`trend\` | 资金流、时间线、阶段、季度走势 |
| \`comparison\` | 交叉透视、同比、对决、表格、多维对比 |
| \`distribution\` | 比例带、轮次、漏斗、市占、梯队、结构演变 |
| \`relationship\` | 联投、层级、网络、交集、径向关系 |
| \`case\` | 典型案例、分屏、分镜、影像速写、人物证言 |
| \`image\` | 全景、拼贴、陈列、画廊、图片主导页 |
| \`process\` | 产业链、流向、用途、阶段、实施路径 |
| \`risks\` | 风险研判、预测、关键问答 |
| \`observation\` | 投资展望、核心结论、观点引述、专题洞察 |
| \`actions\` | 应用落地、方案、路线、下一步 |
| \`result\` | 核心结论、数字海报、核心要点 |
| \`team\` | 团队、关于我们 |
| \`closing\` | 结尾页 |

直接指定页面时使用当前 key,例如 \`${firstLayout}\`、\`${lastLayout}\`。
`);
  writeIfChanged(path.join(refsRoot, 'goal-spec.schema.json'), JSON.stringify({
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    title: 'Dashi PPT Goal Spec',
    type: 'object',
    required: ['title', 'goal'],
    additionalProperties: true,
    properties: {
      title: { type: 'string' },
      goal: { type: 'string' },
      audience: { type: 'string' },
      owner: { type: 'string' },
      randomSeed: { type: 'string' },
      pageCount: { type: 'number' },
      themePack: { type: 'string', enum: themeMetadata.packs.map(theme => theme.key) },
      text: { type: 'object', additionalProperties: { type: 'string' } },
      media: false,
      props: { type: 'object' },
      slides: {
        type: 'array',
        items: {
          type: 'object',
          required: ['layout'],
          properties: {
            id: { type: 'string' },
            key: { type: 'string' },
            slideKey: { type: 'string' },
            logicalIndex: { type: 'number' },
            layout: { type: 'string' },
            props: { type: 'object' },
            media: false,
            copy: { type: 'object' },
            needsVisual: { type: 'boolean' },
            imageGen: { type: 'boolean' },
            needsImageGen: { type: 'boolean' },
            plannedImages: { type: ['boolean', 'number'] },
            providedImages: {
              oneOf: [
                { type: 'boolean' },
                { type: 'array', items: { type: 'string' } },
              ],
            },
          },
          additionalProperties: true,
        },
      },
    },
  }, null, 2) + '\n');
}

function renderExampleGoal({ title, goal, audience, owner, themePack, layouts }) {
  return {
    title,
    goal,
    audience,
    owner,
    randomSeed: `${themePack}-example`,
    pageCount: layouts.length,
    themePack,
    slides: layouts.map((layout, index) => ({
      layout,
      props: {
        kicker: index === 0 ? '示例封面' : `示例页面 ${index + 1}`,
        title: index === 0 ? title : `${title} · ${index + 1}`,
        subtitle: goal,
        lead: goal,
        note: `${audience} / ${owner}`,
      },
    })),
  };
}

function renderInstalledSkill(content) {
  const version = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version;
  let output = content
    .replace(/\n## 版本\n[\s\S]*?(?=\n## 生成原则)/, '\n')
    .replace(/^name: .+$/m, 'name: dashi-ppt-skill')
    .replace(
      '生成静态 HTML 横向翻页 PPT。根据用户输入先整理 JSON 计划,再调用本地生成器输出 `index.html` 和 `assets/`。',
      '生成静态 HTML 横向翻页 PPT。使用本 skill 时,先把用户的自然语言需求整理成 JSON 计划,再调用本地项目生成器输出 `index.html` 和 `assets/`。'
    );

  output = output.replace(
    '\n## 生成原则',
    `\n## 版本\n\n当前版本: \`${version}\`\n\n每次完成用户请求、准备最终回复前,运行:\n\n\`\`\`bash\nnode <skill-root>/scripts/check_latest_version.mjs\n\`\`\`\n\n如果脚本有输出,把输出内容附在最终回复末尾提醒用户更新;如果脚本无输出或检查失败,保持静默,不要提版本检查。\n\n## Skill 目录\n\n当前 \`SKILL.md\` 所在目录就是 Skill 根目录,下文记为 \`<skill-root>\`。\n\n内置生成器目录:\n\n\`<skill-root>/project\`\n\n渲染脚本:\n\n\`<skill-root>/scripts/render_goal_deck.sh\`\n\n版本检查脚本:\n\n\`<skill-root>/scripts/check_latest_version.mjs\`\n\n## 生成原则`
  );

  output = output.replace(
    [
      '7. 运行 `npm run render:goal -- output/<deck-name>/goal.json output/<deck-name>/ppt/index.html`。',
      '8. 运行 `npm run validate:swiss -- output/<deck-name>/ppt/index.html`。',
      '9. 运行 `npm run validate:goal-copy -- output/<deck-name>/goal.json output/<deck-name>/ppt/index.html`。',
      '10. 两项校验通过后返回本地预览路径或当前服务地址。',
    ].join('\n'),
    [
      '7. 运行渲染脚本输出 `output/<deck-name>/ppt/index.html`;脚本会使用 Skill 内置生成器,不要切回外部项目目录。',
      '8. 确认脚本完成 `validate:swiss` 和 `validate:goal-copy`。',
      '9. 运行 `node <skill-root>/scripts/check_latest_version.mjs` 做静默版本检查。',
      '10. 两项校验通过后把本地 HTML 路径或预览地址返回给用户;只有版本检查脚本有输出时才附加更新提醒。',
    ].join('\n')
  );

  output = output.replace(
    '\n## JSON 结构',
    `\n示例命令:\n\n\`\`\`bash\n<skill-root>/scripts/render_goal_deck.sh \\\n  output/client-review/goal.json \\\n  output/client-review/ppt/index.html\n\`\`\`\n\n## JSON 结构`
  );

  return output;
}

function syncDistributionFiles() {
  writeIfChanged(path.join(SKILL_ROOT, 'README.md'), renderReadme(themeMetadata));
  writeIfChanged(path.join(SKILL_ROOT, '.gitignore'), renderGitignore());
}

function renderReadme({ packs }) {
  const version = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version;
  const themes = packs.map(theme => `- ${theme.label} (${theme.pageCount} 页)`).join('\n');
  return `# Dashi PPT Skill

Dashi PPT Skill 是一个本地 PPT 生成助手。你给它一个汇报目标、受众、页数和内容重点,它会从已接入的视觉页面中组合出一份可离线打开、可翻页、可编辑和可导出的 HTML PPT。

当前版本: \`${version}\`

## 它适合做什么

- 行业研究、融资复盘、竞品分析和趋势报告
- 项目汇报、方案展示、路演材料和内部培训
- 需要快速形成结构完整、视觉统一、可继续编辑的演示文稿

## 你会得到什么

- 一份本地 HTML PPT,打开后即可横向翻页
- 预览页里可以继续改文字、换图片/视频、调整页面属性
- 可以导出 HTML、PDF 或 PPTX
- 所有输出都保存在本机,适合继续归档、修改或交付

## 怎么使用

安装后,在 Codex/Agent 里说明要使用 \`dashi-ppt-skill\`,然后直接描述你想做的 PPT:

- 主题和目标
- 面向谁汇报
- 希望几页
- 想突出的结论或内容
- 偏好的视觉风格

如果你没有指定风格,Skill 会先列出可选风格让你选择,不会直接替你决定。

## 当前风格

当前包含 ${packs.length} 套已接入风格:

${themes}

每套风格都有独立的页面结构和视觉语言,适合不同类型的报告和展示场景。

## 安装说明

把整个 \`dashi-ppt-skill\` 目录放到本机 Skill 目录中,然后重新打开会话即可使用。

本机需要能运行 Node.js 18+ 和 npm。首次生成时依赖会自动准备。

## 更新提醒

Skill 会在完成任务后静默检查是否有新版本。没有新版本时不会打扰你;有新版本时才会在回复末尾提醒更新。
`;
}

function renderGitignore() {
  return `.DS_Store
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

node_modules/
project/node_modules/

output/
project/output/

uploads/
screens/
screenshots/
shots/
scratch/
`;
}

function renderThemeList(content, { packs }) {
  const list = packs.map(theme => `  - \`${theme.key}\`: ${theme.label}`).join('\n');
  return content.replace(
    /- 当前可选风格:\n(?:  - `[^`]+`: .+\n)+/,
    `- 当前可选风格:\n${list}\n`,
  );
}

function syncRunnerScript() {
  const scriptPath = path.join(SKILL_ROOT, 'scripts/render_goal_deck.sh');
  writeIfChanged(scriptPath, `#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../project" && pwd)"
CALLER_CWD="$(pwd)"

if [[ $# -ne 2 ]]; then
  echo "Usage: render_goal_deck.sh <goal-spec.json> <output/ppt/index.html>" >&2
  exit 2
fi

SPEC_PATH="$1"
OUT_PATH="$2"

if [[ "$SPEC_PATH" != /* ]]; then
  SPEC_PATH="$CALLER_CWD/$SPEC_PATH"
fi

if [[ "$OUT_PATH" != /* ]]; then
  OUT_PATH="$CALLER_CWD/$OUT_PATH"
fi

cd "$PROJECT_ROOT"
if [[ ! -d node_modules || package.json -nt node_modules/.package-lock.json || package-lock.json -nt node_modules/.package-lock.json ]]; then
  npm install
fi
mkdir -p "$(dirname "$OUT_PATH")"
npm run validate:goal-spec -- "$SPEC_PATH"
npm run render:goal -- "$SPEC_PATH" "$OUT_PATH"
npm run validate:swiss -- "$OUT_PATH"
npm run validate:goal-copy -- "$SPEC_PATH" "$OUT_PATH"
`);
  fs.chmodSync(scriptPath, 0o755);
}

function syncVersionCheckScript() {
  const scriptPath = path.join(SKILL_ROOT, 'scripts/check_latest_version.mjs');
  copyPath(path.join(ROOT, 'scripts/check_latest_version.mjs'), scriptPath);
  fs.chmodSync(scriptPath, 0o755);
}

function loadThemeMetadata() {
  const file = path.join(ROOT, 'src/components/themes/generated-metadata.js');
  const text = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  return {
    packs: parseExportedJson(text, 'GENERATED_THEME_PACKS'),
    pages: parseExportedJson(text, 'GENERATED_THEME_PAGES'),
  };
}

function parseExportedJson(text, name) {
  const match = text.match(new RegExp(`export const ${name} = ([\\s\\S]*?);\\n`));
  if (!match) return [];
  return JSON.parse(match[1]);
}

function renderOptionsReference({ packs }) {
  const themes = packs.map(theme => `- \`${theme.key}\`: ${theme.label}`).join('\n');
  const firstLayout = packs[0] ? `${packs[0].key}_page001` : 'theme01_page001';
  const lastLayout = packs.at(-1) ? `${packs.at(-1).key}_page001` : firstLayout;
  return `# Current Options

## themePack

${themes}

用户没有明确指定风格时,先列出以上风格并询问。

## slide

面向用户交付的每页使用 \`layout\` + \`props\`:

- \`layout\`: 直接指定页面 key,例如 \`${firstLayout}\` 或 \`${lastLayout}\`。
- \`props\`: 只填写可见文案/数据内容字段。普通生成不要写样式、结构、数量、显隐、强调、配色、图表或图片槽位控制字段。
- \`role\`: 只允许草稿阶段辅助选页,渲染前必须换成具体 \`layout\`。

每套主题的前 5 页都是封面候选。一个 deck 只能使用其中 1 页作为封面,正文页从第 6 页以后选择。

选页先使用 \`npm run layout:query -- --theme <themePack> --role <role> --limit 8\`。需要图片槽时加 \`--needs-media\`、\`--planned-images <n>\`、\`--provided-images <n>\` 或 \`--image-gen\`,候选会基于真实 \`mediaSlots\`。

单页契约使用 \`npm run inspect:layout -- <layout>\`。写数组、数量或图片时使用 \`npm run props:safe -- <layout> '<props-json>' [--images <path...>]\`。

图片/视频只写入页面 \`props.images\` / \`props.media\`。不要写 \`slides[].media\`;用户提供图片时先用 \`props:safe --images\` 写入真实 slot。需要 image-gen 时先询问用户,用户只计划后续插图时选择并保留带 media slot 的页面。

需要调整卡片/条目数量时,用 \`cardCount\`、\`itemCount\`、\`stepCount\` 等 count 参数控制显示数量。数组字段是模板内容池,不要为了隐藏元素而截短 \`cards\`、\`items\`、\`steps\`、\`stats\` 等数组;只覆盖当前显示的前 N 项,保留后续默认项供控制面板加回。

不要使用旧的 \`theme\`、\`fontSet\`、\`fontWeight\`、\`typeScale\`、\`styleVariant\`、token 或开发者模式字段。
`;
}

function renderLayoutPoolReference({ packs, pages }) {
  const sections = packs.map(theme => {
    const themePages = pages.filter(page => page.themeKey === theme.key);
    const first = themePages[0]?.key || `${theme.key}_page001`;
    const last = themePages.at(-1)?.key || first;
    return `## ${theme.key}

- 主题名: ${theme.name}
- 页面数: ${theme.pageCount}
- 页面 key: \`${first}\` 到 \`${last}\`
- 封面候选: \`${theme.key}_page001\` 到 \`${theme.key}_page005\`,一个 deck 只选 1 页
- 视觉来源: \`<skill-root>/project/src/components/themes/${theme.key}\``;
  }).join('\n\n');

  return `# Layout Pool

当前主题包互相独立,主题之间页面数量、文案和视觉结构互不对应。

${sections}

## Selection Procedure

1. 先根据用户要求确认 \`themePack\`;没有明确风格时先询问。
2. 根据用户内容拆出页面角色,例如: cover -> statement -> breakdown -> metrics -> actions -> closing。
3. 先从当前主题前 5 页中选 1 页作为封面;不要在同一个 deck 中使用多个前 5 页封面候选。
4. 正文页从第 6 页以后选择具体 \`layout\`,不要在最终 JSON 里只写 \`role\`。
5. 默认锁定模板结构,只填写文案/数据内容字段;不要按 \`controls\` 改样式或结构。
6. 同一页只承载一个主要信息角色,信息过多时压缩文字、拆页或换 layout。
7. 只有用户明确要求调整页面属性时,才读取 \`layout-manifest.json\` 并按 \`controls\` / \`countBindings\` 填对应 props。
8. 调整数量时通过 count 参数控制显示数量,不要截短数组;数组要保留模板默认尾部,保证用户后续能在控制面板加回。
`;
}

function writeIfChanged(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8') === content) return;
  fs.writeFileSync(filePath, content);
}

function copyPath(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, {
    recursive: true,
    filter: source => !source.split(path.sep).some(part => MIGRATION_ONLY_DIRS.has(part.toLowerCase())),
  });
}
