#!/usr/bin/env node
import { execFileSync, spawn, spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GENERATED_THEME_PACKS, GENERATED_THEME_PAGES } from '../src/components/themes/generated-metadata.js';
import { inspectLayout } from './skill-workflow-utils.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const tests = [
  ['layout-query returns compact media candidates', testLayoutQuery],
  ['inspect-layout exposes copy/media/count/control contract', testInspectLayout],
  ['write-safe-props preserves default array tail and count', testWriteSafeProps],
  ['media workflow supports planned/provided/image-gen slots', testMediaWorkflow],
  ['deck composer constrains media-aware roles', testDeckComposerMediaRoles],
  ['skill prompt keeps user-visible style and image-slot guidance', testSkillPromptGuidance],
  ['skill prompt covers Codex image-gen and export delivery guidance', testCodexImageGenExportDeliveryGuidance],
  ['theme03 global dark controls avoid ineffective page theme', testTheme03GlobalDarkControls],
  ['skill delivery uses HTTP/HTTPS preview for export support', testHttpPreviewDelivery],
  ['validate-goal-spec rejects unsafe goal shapes', testValidateGoalSpec],
  ['preview panel handles type: images as an image list control', testImagesControl],
  ['control naming stays generic across user and agent contracts', testControlNaming],
];

const failures = [];

for (const [name, fn] of tests) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    failures.push([name, error]);
    console.error(`not ok - ${name}`);
    console.error(`  ${error.message}`);
  }
}

if (failures.length) {
  console.error(`\n${failures.length} skill workflow validation test(s) failed.`);
  process.exit(1);
}

console.log('\nSkill workflow tool validation passed.');

function testLayoutQuery() {
  const result = runJson('scripts/layout-query.mjs', [
    '--theme', 'theme01',
    '--role', 'case',
    '--needs-media',
    '--keyword', '案例',
    '--limit', '5',
  ]);
  assert(Array.isArray(result.layouts), 'expected layouts array');
  assert(result.layouts.length > 0 && result.layouts.length <= 5, 'expected 1..5 layouts');
  assert(JSON.stringify(result).length < 7000, 'layout-query output is too large');
  assert(result.layouts.every(item => item.layout?.startsWith('theme01_')), 'expected theme01 layouts only');
  assert(result.layouts.some(item => item.mediaSlots?.length), 'expected at least one media slot candidate');
}

function testControlNaming() {
  execFileSync('node', ['scripts/validate-control-naming.mjs'], { cwd: ROOT, stdio: 'pipe' });
}

function testInspectLayout() {
  const result = runJson('scripts/inspect-layout.mjs', ['theme01_page020']);
  assert(result.layout === 'theme01_page020', 'unexpected layout');
  assert(result.copyKeys?.includes('title'), 'missing title copy key');
  assert(result.copyKeys?.includes('caption'), 'missing caption copy key');
  assert(result.arrayKeys?.includes('items'), 'missing items array key');
  assert(result.mediaSlots?.some(slot => slot.field === 'images' && slot.countKey === 'imageSlotCount'), 'missing images media slot');
  assert(result.countBindings?.some(binding => binding.key === 'imageSlotCount'), 'missing imageSlotCount binding');
  assert(result.controlKeys?.includes('images'), 'missing images control key');
  assert(JSON.stringify(result).length < 9000, 'inspect-layout output is too large');
}

function testWriteSafeProps() {
  const input = {
    title: '头部案例',
    images: ['hero-a.png', 'hero-b.png'],
    items: [
      { label: 'Alpha', sub: '第一项', amount: '10 亿' },
      { label: 'Beta', sub: '第二项', amount: '8 亿' },
    ],
  };
  const result = runJson('scripts/write-safe-props.mjs', ['theme01_page020', JSON.stringify(input)]);
  assert(!result.errors?.length, `unexpected errors: ${JSON.stringify(result.errors)}`);
  assert(result.props?.imageSlotCount === 2, 'expected imageSlotCount derived from authored images');
  assert(result.props?.images?.length >= 5, 'expected images default tail to be preserved');
  assert(result.props?.items?.length >= 5, 'expected items default tail to be preserved');
  const itemTail = result.props.items.slice(2);
  const tailText = JSON.stringify(itemTail);
  assert(!tailText.includes('xAI') && !tailText.includes('CoreWeave') && !tailText.includes('Figure AI'), 'expected item tail to remove template default copy');
  assert(itemTail[0].label.includes('请'), 'expected neutral editable placeholder in item tail');
  assert(charLength(itemTail[0].label) === charLength('xAI'), 'expected placeholder label length to match default label length');
  assert(charLength(itemTail[0].sub) === charLength('通用大模型'), 'expected placeholder sub length to match default sub length');
  assert(itemTail[0].tone === 'green', 'expected non-copy visual fields to stay intact');
  const unknown = runJson('scripts/write-safe-props.mjs', ['theme01_page020', JSON.stringify({ madeUpProp: true })]);
  assert(unknown.warnings?.some(item => item.includes('madeUpProp')), 'expected unknown prop warning');
}

function testMediaWorkflow() {
  const planned = runJson('scripts/layout-query.mjs', [
    '--theme', 'theme01',
    '--role', 'case',
    '--planned-images',
    '--limit', '4',
  ]);
  assert(planned.mediaIntent === 'planned-images', 'expected planned-images media intent');
  assert(planned.layouts.length > 0, 'expected planned image candidates');
  assert(planned.layouts.every(item => item.mediaSlots?.length), 'planned image candidates must all expose media slots');
  assert(planned.layouts.some(item => item.mediaSlots.some(slot => Number(slot.max || 0) >= 3)), 'expected a candidate that can keep 3 image slots');

  const imageGen = runJson('scripts/layout-query.mjs', [
    '--theme', 'theme01',
    '--role', 'image',
    '--image-gen',
    '--limit', '3',
  ]);
  assert(imageGen.mediaIntent === 'image-gen', 'expected image-gen media intent');
  assert(imageGen.layouts.length > 0, 'expected image-gen candidates');
  assert(imageGen.layouts.every(item => item.mediaSlots?.length), 'image-gen candidates must all expose media slots');

  const mediaCount = runJson('scripts/layout-query.mjs', [
    '--theme', 'theme01',
    '--media-count', '3',
    '--limit', '3',
  ]);
  assert(mediaCount.mediaCount === 3, 'expected media-count to be reflected');
  assert(mediaCount.needsMedia === true, 'media-count should mark needsMedia=true');
  assert(mediaCount.layouts.length > 0, 'expected media-count candidates');
  assert(mediaCount.layouts.every(item => item.mediaSlots?.length), 'media-count candidates must all expose media slots');

  const provided = runJson('scripts/write-safe-props.mjs', [
    'theme01_page020',
    JSON.stringify({ title: '提供图片案例' }),
    '--images',
    'a.png',
    'b.png',
    'c.png',
  ]);
  assert(provided.mediaIntent === 'provided-images', 'expected provided-images media intent');
  assert(provided.props?.imageSlotCount === 3, 'provided images should set imageSlotCount=3');
  assert(provided.props?.images?.slice(0, 3).join('|') === 'a.png|b.png|c.png', 'provided images should map to props.images');
  assert(provided.props?.images?.length >= 5, 'provided images should preserve default media tail');

  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-media-goal-'));
  try {
    expectGoalFailure(tmp, 'needs-visual-no-slot.json', {
      title: 'Needs Visual',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page006', needsVisual: true, props: { title: '需要图片' } }],
    }, ['slide 1', 'theme01_page006', 'needsVisual', 'media slot']);

    expectGoalFailure(tmp, 'provided-images-not-written.json', {
      title: 'Provided Images',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', providedImages: ['a.png', 'b.png', 'c.png'], props: { title: '未写入图片' } }],
    }, ['slide 1', 'theme01_page020', 'providedImages', 'props.images']);

    const plannedOk = path.join(tmp, 'planned-ok.json');
    writeFileSync(plannedOk, JSON.stringify({
      title: 'Planned Images',
      goal: 'should pass',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', needsVisual: true, plannedImages: 3, props: { title: '保留图片位' } }],
    }, null, 2));
    execFileSync('node', ['scripts/validate-goal-spec.mjs', plannedOk], { cwd: ROOT, stdio: 'pipe' });

    const imageGenOk = path.join(tmp, 'image-gen-ok.json');
    writeFileSync(imageGenOk, JSON.stringify({
      title: 'Image Gen',
      goal: 'should pass',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', imageGen: true, props: { title: '后续生成图片' } }],
    }, null, 2));
    execFileSync('node', ['scripts/validate-goal-spec.mjs', imageGenOk], { cwd: ROOT, stdio: 'pipe' });
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testDeckComposerMediaRoles() {
  const tsx = path.join(ROOT, 'node_modules', '.bin', 'tsx');
  const script = `
    import { composeDeck } from './src/deckComposer.jsx';
    import { inspectLayout } from './scripts/skill-workflow-utils.mjs';
    const coverDeck = composeDeck({
      title: 'Cover Role',
      goal: 'should use first five pages',
      themePack: 'theme01',
      randomSeed: 'cover-regression-3',
      slides: [{ role: 'cover', props: { title: '封面' } }]
    });
    const coverLayout = coverDeck.slides[0].layout;
    if (!/^theme\\d+_page00[1-5]$/.test(coverLayout)) {
      console.error(JSON.stringify({ role: 'cover', layout: coverLayout }));
      process.exit(4);
    }

    const deck = composeDeck({
      title: 'Media Role',
      goal: 'should use slots',
      themePack: 'theme08',
      randomSeed: 'media-role-regression',
      slides: [{ role: 'image', needsVisual: true, props: { headline: '视觉页' } }]
    });
    const slide = deck.slides[0];
    if (!slide.layout || !slide.layout.startsWith('theme08_')) process.exit(2);
    const details = inspectLayout(slide.layout);
    if (!details?.mediaSlots?.length) {
      console.error(JSON.stringify({ layout: slide.layout, mediaSlots: details?.mediaSlots || [] }));
      process.exit(3);
    }

    const visualCaseDeck = composeDeck({
      title: 'Visual Case',
      goal: 'case role should keep slots when needed',
      themePack: 'theme01',
      randomSeed: 'visual-case-regression',
      slides: [{ role: 'case', needsVisual: true, props: { title: '需要视觉案例' } }]
    });
    const visualCaseSlide = visualCaseDeck.slides[0];
    const visualCaseDetails = inspectLayout(visualCaseSlide.layout);
    if (!visualCaseDetails?.mediaSlots?.length) {
      console.error(JSON.stringify({ role: 'case', layout: visualCaseSlide.layout, mediaSlots: visualCaseDetails?.mediaSlots || [] }));
      process.exit(5);
    }
  `;
  execFileSync(tsx, ['-e', script], { cwd: ROOT, stdio: 'pipe' });
}

function testSkillPromptGuidance() {
  const skill = readFileSync(path.join(ROOT, 'SKILL.md'), 'utf8');
  const sync = readFileSync(path.join(ROOT, 'scripts/sync-skill.mjs'), 'utf8');
  const missing = [];
  if (!skill.includes('assets/skill/theme-style-grid.png')) missing.push('style grid image path');
  if (!(/风格选择提问/.test(skill) && /用户可见回复/.test(skill))) missing.push('user-visible style-choice reply rule');
  if (!/不能只在.*进度/.test(skill)) missing.push('progress-only style image warning');
  if (!(/用户未提供图片/.test(skill) && /询问/.test(skill) && /预留图片槽/.test(skill))) missing.push('ask-to-reserve-image-slots rule');
  for (const term of ['作品集', '品牌', '产品', '案例', '活动', '发布', '社媒', '设计', '人物', '团队', '方案展示']) {
    if (!skill.includes(term)) missing.push(`visual task trigger ${term}`);
  }
  if (!(/不能默认.*图片 slot.*0/.test(skill) || /不能默认.*图片槽.*0/.test(skill))) missing.push('do-not-default-image-slot-count-to-0 rule');
  if (!skill.includes('--planned-images <n>')) missing.push('planned-images workflow guidance');
  if (!skill.includes('--provided-images <n>')) missing.push('provided-images workflow guidance');
  if (!skill.includes('--image-gen')) missing.push('image-gen workflow guidance');
  const styleHintLines = skill.match(/`theme\d+`[^。\n]*适合[:：][^。\n]*人群[:：][^。\n]*/g) || [];
  if (styleHintLines.length !== 12) missing.push('12 short style scene/audience hints in the user-visible style-choice reply');
  for (const theme of GENERATED_THEME_PACKS) {
    const line = styleHintLines.find(item => item.includes(`\`${theme.key}\``)) || '';
    if (!line.includes(theme.displayName)) missing.push(`metadata displayName for ${theme.key}`);
    if (!line.includes(shortThemeText(theme.scenario))) missing.push(`metadata scenario for ${theme.key}`);
    if (!line.includes(shortThemeText(theme.audience))) missing.push(`metadata audience for ${theme.key}`);
  }
  for (const oldName of ['01-轻拟态质感', 'PULSE 色谱图表', '黑金实验质感']) {
    if (skill.includes(oldName)) missing.push(`old theme name ${oldName}`);
  }
  if (!sync.includes('theme-style-grid.png')) missing.push('sync style grid asset handling');
  if (/THEME_CHOICE_HINTS/.test(sync)) missing.push('hardcoded THEME_CHOICE_HINTS table');
  assert(!missing.length, `Skill prompt guidance missing: ${missing.join(', ')}`);
}

function testCodexImageGenExportDeliveryGuidance() {
  const skill = readFileSync(path.join(ROOT, 'SKILL.md'), 'utf8');
  const sync = readFileSync(path.join(ROOT, 'scripts/sync-skill.mjs'), 'utf8');
  const missing = [];
  if (!/Codex\s*环境/.test(skill)) missing.push('Codex environment detection rule');
  if (!/Codex\s*环境[\s\S]{0,160}image-gen[\s\S]{0,120}生成图片/.test(skill)) missing.push('Codex image-gen prompt guidance');
  if (!/询问用户/.test(skill) && !/先询问/.test(skill)) missing.push('ask user before image-gen guidance');
  if (!/(预览\s*(URL|链接|地址)|HTTP 导出地址)/.test(skill)) missing.push('final delivery preview URL requirement');
  if (!/HTML 文件路径/.test(skill)) missing.push('final delivery HTML file path requirement');
  if (!/(本机 HTTP|HTTP\/HTTPS)[\s\S]{0,120}(导出|用于导出).*(PPT|PPTX)/.test(skill)) missing.push('HTTP/HTTPS export-capable delivery distinction');
  if (!/(file:\/\/|本地 HTML)[\s\S]{0,120}不能导出可编辑 PPTX/.test(skill)) missing.push('file local HTML cannot export editable PPTX distinction');
  if (!/HTTP\/HTTPS/.test(sync)) missing.push('synced installed skill preserves HTTP/HTTPS wording');
  assert(!missing.length, `Codex/image-gen/export delivery guidance missing: ${missing.join(', ')}`);
}

function testTheme03GlobalDarkControls() {
  const theme03Layouts = GENERATED_THEME_PAGES.filter(page => page.themeKey === 'theme03').map(page => page.key);
  const missingForceDark = [];
  const pageThemeControls = [];
  for (const layout of theme03Layouts) {
    const details = inspectLayout(layout);
    if (!details?.controlKeys?.includes('forceDark')) missingForceDark.push(layout);
    if (details?.controlKeys?.includes('theme')) pageThemeControls.push(layout);
  }
  assert(!missingForceDark.length, `theme03 layouts missing global forceDark control: ${missingForceDark.slice(0, 8).join(', ')}`);
  assert(!pageThemeControls.length, `theme03 exposes ineffective per-page theme controls: ${pageThemeControls.slice(0, 8).join(', ')}`);

  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-theme03-controls-'));
  let server = null;
  try {
    const goalPath = path.join(tmp, 'goal.json');
    const outPath = path.join(tmp, 'ppt/index.html');
    writeFileSync(goalPath, JSON.stringify({
      title: 'Theme03 Control Smoke',
      goal: 'verify global dark control',
      themePack: 'theme03',
      slides: [
        { layout: 'theme03_page002', props: { forceDark: true, theme: 'light', titleA: '年终', titleAccent: '汇报', titleB: '', titleC: '' } },
        { layout: 'theme03_page006', props: { forceDark: true } },
      ],
    }, null, 2));
    renderGoal(goalPath, outPath);
    const html = readFileSync(outPath, 'utf8');
    const runtime = readFileSync(path.join(tmp, 'ppt/assets/imported-theme-runtime.js'), 'utf8');
    assert(/data-theme-pack="theme03"/.test(html), 'rendered deck should mark theme03 slides');
    assert(/&quot;key&quot;:&quot;forceDark&quot;/.test(html), 'rendered prop controls should expose forceDark');
    assert(!/&quot;key&quot;:&quot;theme&quot;/.test(html), 'rendered prop controls should not expose ineffective per-page theme');
    assert(/theme03-theme-toggle/.test(runtime), 'theme03 runtime should include visible global dark icon toggle');
    assert(/__getTheme03GlobalDark/.test(runtime) && /__setTheme03GlobalDark/.test(runtime), 'theme03 runtime should expose global dark sync bridge');
    assert(/rd-themechange/.test(runtime), 'theme03 runtime should dispatch global dark sync events');

    const port = 48000 + (process.pid % 1000);
    server = startPreviewServer(path.dirname(outPath), port);
    const url = `https://localhost:${port}/`;
    fetchHttpsWithRetry(url);
    runTheme03BrowserProbe(url);
  } finally {
    if (server && !server.killed) server.kill('SIGTERM');
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testHttpPreviewDelivery() {
  const skill = readFileSync(path.join(ROOT, 'SKILL.md'), 'utf8');
  const sync = readFileSync(path.join(ROOT, 'scripts/sync-skill.mjs'), 'utf8');
  const template = readFileSync(path.join(ROOT, 'assets/template-swiss.html'), 'utf8');
  const missing = [];
  if (!/preview:start/.test(skill)) missing.push('skill preview:start workflow');
  if (!/http:\/\/(?:127\.0\.0\.1|localhost):<port>\//.test(skill)) missing.push('local HTTP export URL guidance');
  if (!/不要把\s*`?http:\/\/jadon\.local:<port>\/`?\s*作为最终 HTTP 导出地址/.test(skill)) missing.push('do not use jadon.local HTTP as final export URL rule');
  if (!/HTTP LAN\/jadon\.local[\s\S]{0,80}下载失败/.test(skill)) missing.push('HTTP LAN/jadon.local download failure warning');
  if (!/https:\/\/jadon\.local:<port>\//.test(skill)) missing.push('jadon.local preview URL guidance');
  if (!/HTML 文件路径/.test(skill)) missing.push('HTML file path delivery rule');
  if (!/(本机 HTTP|HTTP 本机)[\s\S]{0,120}(导出|用于导出).*(PPT|PPTX)/.test(skill)) missing.push('local HTTP link exports PPT/PPTX rule');
  if (!/(file:\/\/|本地 HTML)[\s\S]{0,120}不能导出可编辑 PPTX/.test(skill)) missing.push('file/local HTML cannot export editable PPTX rule');
  if (!/preview:start/.test(sync)) missing.push('synced render shell starts preview');
  if (!/DASHI_PPT_PROJECT_ROOT/.test(sync)) missing.push('synced render shell project root override');
  if (!/http:\/\/(?:127\.0\.0\.1|localhost):<port>\//.test(sync)) missing.push('synced installed skill local HTTP wording');
  if (!/location\.protocol\s*===\s*['"]file:/.test(template)) missing.push('file:// PPTX export guard');
  if (!/preview:start/.test(template)) missing.push('file:// export message should point to preview:start');
  if (!/http:\/\/(?:127\.0\.0\.1|localhost):<port>\//.test(template)) missing.push('file:// export message should point to local HTTP');
  assert(!missing.length, `HTTP preview delivery guidance missing: ${missing.join(', ')}`);

  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-http-preview-'));
  const port = 47000 + (process.pid % 1000);
  try {
    const goalPath = path.join(tmp, 'goal.json');
    const outPath = path.join(tmp, 'ppt/index.html');
    writeFileSync(goalPath, JSON.stringify({
      title: 'HTTP Preview Smoke',
      goal: 'verify preview server delivery',
      audience: 'workflow validation',
      owner: 'Dashi Skill',
      randomSeed: 'http-preview-smoke',
      themePack: 'theme01',
      slides: [
        {
          layout: 'theme01_page001',
          props: {
            kicker: 'PREVIEW · SMOKE',
            titleTop: 'HTTP Preview',
            titleBottom: 'Smoke',
            en: 'Delivery Check',
            lead: 'Verify the rendered deck is served through the local HTTP and HTTPS preview URLs.',
            chips: ['HTTP', 'HTTPS', 'Delivery'],
            panelIndex: '01',
            panelEn: 'LOCAL PREVIEW',
            meta: ['Workflow', 'Validation', 'JAD-150'],
            footnote: 'Dashi Skill · Preview delivery smoke',
          },
        },
        {
          layout: 'theme01_page006',
          props: {
            kicker: 'Preview Result',
            value: '200',
            unit: 'OK',
            sub: 'Local HTTP and HTTPS previews respond with the generated deck.',
            highlightWord: 'HTTP',
            secondaries: [
              { value: '2', unit: 'URL', label: 'jadon.local previews' },
              { value: '1', unit: 'PID', label: 'server process' },
              { value: '0', unit: 'file://', label: 'not final delivery' },
            ],
            caption: 'HTTP Preview Smoke · Delivery Check',
          },
        },
      ],
    }, null, 2));
    const skillRoot = path.join(tmp, 'skill');
    execFileSync('node', ['scripts/sync-skill.mjs'], {
      cwd: ROOT,
      env: { ...process.env, DASHI_PPT_SKILL_ROOT: skillRoot },
      stdio: 'pipe',
    });
    const shell = path.join(skillRoot, 'scripts/render_goal_deck.sh');
    const output = execFileSync(shell, [goalPath, outPath], {
      cwd: ROOT,
      env: {
        ...process.env,
        DASHI_PPT_PROJECT_ROOT: ROOT,
        DASHI_PPT_PREVIEW_HOST: '127.0.0.1',
        DASHI_PPT_PREVIEW_PORT: String(port),
      },
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    assert(output.includes(`http://127.0.0.1:${port}/`) || output.includes(`http://localhost:${port}/`), 'render shell should print the final local HTTP export URL');
    assert(!/HTTP preview URL:\s*http:\/\/jadon\.local:/i.test(output), 'render shell must not label jadon.local HTTP as the final HTTP preview URL');
    assert(output.includes(`https://jadon.local:${port}/`), 'render shell should print the final jadon.local HTTPS preview URL');
    const html = fetchHttpsWithRetry(`https://localhost:${port}/`);
    const httpHtml = fetchHttpWithRetry(`http://localhost:${port}/`);
    assert(html.includes('HTTP Preview'), 'HTTPS preview should serve the rendered deck');
    assert(httpHtml.includes('HTTP Preview'), 'HTTP preview should serve the rendered deck on the same port');
    const previewState = JSON.parse(readFileSync(path.join(tmp, 'ppt/.preview-server.json'), 'utf8'));
    assert(
      previewState.httpUrl === `http://127.0.0.1:${port}/` || previewState.httpUrl === `http://localhost:${port}/`,
      'preview state httpUrl should be the local HTTP export URL',
    );
    assert(previewState.jadonHttpUrl === `http://jadon.local:${port}/` || previewState.lanHttpUrl === `http://jadon.local:${port}/`, 'preview state should keep jadon.local HTTP only as a backup field');
    assert(previewState.url === `https://jadon.local:${port}/`, 'preview state should keep jadon.local HTTPS URL');
    assert(previewState.pid, 'preview state should include server pid');
    cleanupPreviewProcess(previewState.pid);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testValidateGoalSpec() {
  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-goal-spec-'));
  try {
    expectGoalFailure(tmp, 'role-only.json', {
      title: 'Role Only',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{ role: 'case' }],
    }, ['slide 1', 'layout', 'role']);

    expectGoalFailure(tmp, 'media-field.json', {
      title: 'Media Field',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', media: { images: ['x.png'] }, props: { title: 'x' } }],
    }, ['slide 1', 'theme01_page020', 'media', 'props.images']);

    expectGoalFailure(tmp, 'top-level-media.json', {
      title: 'Top Level Media',
      goal: 'should fail',
      themePack: 'theme01',
      media: { images: ['x.png'] },
      slides: [{ layout: 'theme01_page020', props: { title: 'x' } }],
    }, ['deck', 'media', 'props.images']);

    expectGoalFailure(tmp, 'unknown-prop.json', {
      title: 'Unknown Prop',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', props: { madeUpProp: 'x' } }],
    }, ['slide 1', 'theme01_page020', 'madeUpProp']);

    expectGoalFailure(tmp, 'multi-cover.json', {
      title: 'Multi Cover',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [
        { layout: 'theme01_page001', props: { title: 'a' } },
        { layout: 'theme01_page002', props: { title: 'b' } },
      ],
    }, ['cover', 'theme01_page001', 'theme01_page002']);

    expectGoalFailure(tmp, 'html-prop.json', {
      title: 'HTML Prop',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', props: { title: '<div>自由 HTML</div>' } }],
    }, ['slide 1', 'theme01_page020', 'title', 'HTML']);

    const validPath = path.join(tmp, 'valid.json');
    writeFileSync(validPath, JSON.stringify({
      title: 'Valid',
      goal: 'should pass',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', props: { title: '头部案例', images: ['x.png'] } }],
    }, null, 2));
    execFileSync('node', ['scripts/validate-goal-spec.mjs', validPath], { cwd: ROOT, stdio: 'pipe' });
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testImagesControl() {
  const source = execFileSync('node', ['-e', `
    const fs = require('fs');
    const src = fs.readFileSync('assets/template-swiss.html', 'utf8');
    if (!/type\\s*===\\s*['"]images['"]/.test(src)) process.exit(2);
    if (!/image-list/.test(src)) process.exit(3);
    if (!/pp-image-list/.test(src)) process.exit(4);
  `], { cwd: ROOT, encoding: 'utf8', stdio: 'pipe' });
  assert(source === '', 'unexpected template probe output');
}

function expectGoalFailure(tmp, name, goal, expectedTerms) {
  const file = path.join(tmp, name);
  writeFileSync(file, JSON.stringify(goal, null, 2));
  const result = spawnSync('node', ['scripts/validate-goal-spec.mjs', file], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  assert(result.status !== 0, `${name} unexpectedly passed`);
  const output = `${result.stdout}\n${result.stderr}`;
  for (const term of expectedTerms) {
    assert(output.includes(term), `${name} missing error term: ${term}\n${output}`);
  }
}

function runJson(script, args) {
  const stdout = execFileSync('node', [script, ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return JSON.parse(stdout);
}

function renderGoal(goalPath, outPath) {
  execFileSync('npm', ['run', 'render:goal', '--', goalPath, outPath], { cwd: ROOT, stdio: 'pipe' });
}

function startPreviewServer(dir, port) {
  return spawn(process.execPath, ['scripts/serve-preview-https.mjs', dir, String(port)], {
    cwd: ROOT,
    env: { ...process.env, HOST: '127.0.0.1' },
    stdio: ['ignore', 'ignore', 'pipe'],
  });
}

function runTheme03BrowserProbe(url) {
  execFileSync(process.execPath, ['--input-type=module', '-e', `
    import { existsSync } from 'node:fs';
    import { chromium } from 'playwright-core';

    const chromePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    if (!existsSync(chromePath)) throw new Error('Chrome executable not found: ' + chromePath);

    const browser = await chromium.launch({ headless: true, executablePath: chromePath });
    try {
      const context = await browser.newContext({
        ignoreHTTPSErrors: true,
        viewport: { width: 1920, height: 1080 },
      });
      const page = await context.newPage();
      page.setDefaultTimeout(5000);
      page.setDefaultNavigationTimeout(8000);
      await page.goto(${JSON.stringify(url)}, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#deck > .slide[data-theme-pack="theme03"]', { timeout: 5000 });
      if (await page.locator('#preview-toggle').getAttribute('aria-expanded') !== 'true') {
        await page.locator('#preview-toggle').click({ force: true });
      }
      await page.waitForFunction(() => {
        const panel = document.querySelector('#preview-props');
        return panel && panel.textContent.includes('全局深色');
      });
      await page.waitForFunction(() => {
        const panel = document.querySelector('#preview-panel');
        if (!panel) return false;
        const rect = panel.getBoundingClientRect();
        const matrix = new DOMMatrixReadOnly(getComputedStyle(panel).transform);
        return Math.abs(rect.right - window.innerWidth) <= 1 && Math.abs(matrix.m41) <= 1;
      });

      const panelText = await page.locator('#preview-props').innerText();
      if (panelText.includes('背景主题') || /(^|\\s)theme(\\s|$)/i.test(panelText)) {
        throw new Error('theme03 side panel still exposes per-page theme control: ' + panelText);
      }
      if (!panelText.includes('全局深色')) throw new Error('theme03 side panel missing global dark control');

      const forceDarkRow = page.locator('#preview-props .preview-prop-row', { hasText: '全局深色' });
      const forceDarkInput = forceDarkRow.locator('input[type="checkbox"]');
      if (await forceDarkInput.count() !== 1) throw new Error('expected one global dark checkbox');
      const forceDarkSwitchBox = await forceDarkRow.locator('.pp-switch').boundingBox();
      const viewport = page.viewportSize();
      if (!forceDarkSwitchBox || forceDarkSwitchBox.width <= 0 || forceDarkSwitchBox.height <= 0) {
        throw new Error('theme03 global dark switch has no visible hit area');
      }
      if (
        viewport &&
        (forceDarkSwitchBox.x < 0 ||
          forceDarkSwitchBox.y < 0 ||
          forceDarkSwitchBox.x + forceDarkSwitchBox.width > viewport.width ||
          forceDarkSwitchBox.y + forceDarkSwitchBox.height > viewport.height)
      ) {
        throw new Error('theme03 global dark switch is outside the viewport: ' + JSON.stringify({ switch: forceDarkSwitchBox, viewport }));
      }

      const toggle = page.locator('.theme03-theme-toggle');
      await toggle.waitFor({ state: 'visible', timeout: 5000 });
      const geometry = await page.evaluate(() => {
        const button = document.querySelector('.theme03-theme-toggle');
        const stage = document.querySelector('#deck-viewport');
        if (!button || !stage) return null;
        const b = button.getBoundingClientRect();
        const s = stage.getBoundingClientRect();
        return {
          button: { left: b.left, top: b.top, right: b.right, bottom: b.bottom, width: b.width, height: b.height },
          stage: { left: s.left, top: s.top, right: s.right, bottom: s.bottom, width: s.width, height: s.height },
          display: getComputedStyle(button).display,
          visibility: getComputedStyle(button).visibility,
          hidden: button.hidden,
        };
      });
      if (!geometry) throw new Error('missing theme03 toggle or deck viewport');
      if (geometry.hidden || geometry.display === 'none' || geometry.visibility === 'hidden') throw new Error('theme03 toggle is hidden');
      if (geometry.button.width <= 0 || geometry.button.height <= 0) throw new Error('theme03 toggle has zero bbox');
      if (
        geometry.button.left < geometry.stage.left ||
        geometry.button.top < geometry.stage.top ||
        geometry.button.right > geometry.stage.right ||
        geometry.button.bottom > geometry.stage.bottom
      ) {
        throw new Error('theme03 toggle is outside the deck stage: ' + JSON.stringify(geometry));
      }

      const before = await page.evaluate(() => ({
        dark: window.__getTheme03GlobalDark?.(),
        bodyDark: document.body.classList.contains('rd-force-dark'),
        pressed: document.querySelector('.theme03-theme-toggle')?.getAttribute('aria-pressed'),
        checked: document.querySelector('#preview-props .preview-prop-row input[type="checkbox"]')?.checked,
      }));

      await toggle.click();
      await page.waitForFunction(previous => window.__getTheme03GlobalDark?.() !== previous, before.dark);
      const afterIcon = await page.evaluate(() => ({
        dark: window.__getTheme03GlobalDark?.(),
        bodyDark: document.body.classList.contains('rd-force-dark'),
        pressed: document.querySelector('.theme03-theme-toggle')?.getAttribute('aria-pressed'),
        checked: document.querySelector('#preview-props .preview-prop-row input[type="checkbox"]')?.checked,
      }));
      if (afterIcon.dark === before.dark) throw new Error('icon click did not change global dark state');
      if (afterIcon.bodyDark !== afterIcon.dark) throw new Error('body dark class did not sync with icon click');
      if (afterIcon.checked !== afterIcon.dark) throw new Error('side panel checkbox did not sync after icon click');
      if (afterIcon.pressed !== String(afterIcon.dark)) throw new Error('icon aria-pressed did not sync after icon click');
      await page.waitForFunction(() => document.documentElement.dataset.themeVt !== 'active');

      const forceDarkSwitchBoxAfterIcon = await forceDarkRow.locator('.pp-switch').boundingBox();
      if (!forceDarkSwitchBoxAfterIcon) throw new Error('theme03 global dark switch disappeared after icon click');
      await page.waitForFunction(({ x, y }) => {
        return document.elementFromPoint(x, y)?.matches?.('#preview-props .preview-prop-row input[type="checkbox"]');
      }, {
        x: forceDarkSwitchBoxAfterIcon.x + forceDarkSwitchBoxAfterIcon.width / 2,
        y: forceDarkSwitchBoxAfterIcon.y + forceDarkSwitchBoxAfterIcon.height / 2,
      });
      await page.mouse.click(
        forceDarkSwitchBoxAfterIcon.x + forceDarkSwitchBoxAfterIcon.width / 2,
        forceDarkSwitchBoxAfterIcon.y + forceDarkSwitchBoxAfterIcon.height / 2,
      );
      await page.waitForFunction(previous => window.__getTheme03GlobalDark?.() !== previous, afterIcon.dark);
      const afterPanel = await page.evaluate(() => ({
        dark: window.__getTheme03GlobalDark?.(),
        bodyDark: document.body.classList.contains('rd-force-dark'),
        pressed: document.querySelector('.theme03-theme-toggle')?.getAttribute('aria-pressed'),
        checked: document.querySelector('#preview-props .preview-prop-row input[type="checkbox"]')?.checked,
      }));
      if (afterPanel.dark === afterIcon.dark) throw new Error('side panel click did not change global dark state');
      if (afterPanel.bodyDark !== afterPanel.dark) throw new Error('body dark class did not sync with panel click');
      if (afterPanel.checked !== afterPanel.dark) throw new Error('side panel checkbox state is stale after panel click');
      if (afterPanel.pressed !== String(afterPanel.dark)) throw new Error('icon aria-pressed did not sync after panel click');
    } finally {
      await browser.close();
    }
  `], { cwd: ROOT, stdio: 'pipe', timeout: 30000 });
}

function cleanupPreviewProcess(pid) {
  const value = Number(pid);
  if (!Number.isFinite(value) || value <= 0) return;
  try {
    process.kill(value, 'SIGTERM');
  } catch {}
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function charLength(value) {
  return Array.from(String(value || '')).length;
}

function shortThemeText(value) {
  return String(value || '')
    .split(/[、,，]/)
    .map(item => item.trim())
    .filter(Boolean)
    .slice(0, 2)
    .join(' / ');
}

function fetchHttpsWithRetry(url) {
  let lastError = null;
  for (let attempt = 0; attempt < 12; attempt += 1) {
    try {
      return execFileSync(process.execPath, ['-e', `
        const https = require('node:https');
        https.get(${JSON.stringify(url)}, { rejectUnauthorized: false }, response => {
          let body = '';
          response.setEncoding('utf8');
          response.on('data', chunk => { body += chunk; });
          response.on('end', () => {
            if (response.statusCode !== 200) {
              console.error('status=' + response.statusCode);
              process.exit(2);
            }
            process.stdout.write(body);
          });
        }).on('error', error => {
          console.error(error.message);
          process.exit(1);
        });
      `], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 5000 });
    } catch (error) {
      lastError = error;
      sleep(250);
    }
  }
  throw new Error(`HTTPS preview did not respond: ${lastError?.stderr || lastError?.message || 'unknown error'}`);
}

function fetchHttpWithRetry(url) {
  let lastError = null;
  for (let attempt = 0; attempt < 12; attempt += 1) {
    try {
      return execFileSync(process.execPath, ['-e', `
        const http = require('node:http');
        http.get(${JSON.stringify(url)}, response => {
          let body = '';
          response.setEncoding('utf8');
          response.on('data', chunk => { body += chunk; });
          response.on('end', () => {
            if (response.statusCode !== 200) {
              console.error('status=' + response.statusCode);
              process.exit(2);
            }
            process.stdout.write(body);
          });
        }).on('error', error => {
          console.error(error.message);
          process.exit(1);
        });
      `], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 5000 });
    } catch (error) {
      lastError = error;
      sleep(250);
    }
  }
  throw new Error(`HTTP preview did not respond: ${lastError?.stderr || lastError?.message || 'unknown error'}`);
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
