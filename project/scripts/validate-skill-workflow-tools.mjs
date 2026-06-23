#!/usr/bin/env node
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import net from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import { GENERATED_THEME_PACKS, GENERATED_THEME_PAGES } from '../src/components/themes/generated-metadata.js';
import {
  ACCEPTED_THEME_KEYS,
  filterAcceptedThemePacks,
} from '../src/accepted-themes.mjs';
import { RUNTIME_ASSET_PATHS } from '../src/runtime-assets.mjs';
import { isSerializedReactElementLike } from '../src/prop-contract-core.mjs';
import { inspectLayout } from './skill-workflow-utils.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ACCEPTED_THEME_PACKS = filterAcceptedThemePacks(GENERATED_THEME_PACKS);

const tests = [
  ['layout-query returns compact media candidates', testLayoutQuery],
  ['inspect-layout exposes copy/media/count/control contract', testInspectLayout],
  ['write-safe-props preserves default array tail and count', testWriteSafeProps],
  ['media workflow supports planned/provided/image-gen slots', testMediaWorkflow],
  ['deck composer constrains media-aware roles', testDeckComposerMediaRoles],
  ['skill prompt keeps user-visible style and image-slot guidance', testSkillPromptGuidance],
  ['skill prompt covers Codex image-gen and export delivery guidance', testCodexImageGenExportDeliveryGuidance],
  ['skill tools expose only accepted themes', testAcceptedThemeExposure],
  ['synced skill output only uses accepted themes and runtime assets', testSyncedSkillOutput],
  ['validate-swiss fails on missing referenced runtime assets', testValidateSwissMissingAsset],
  ['skill delivery uses HTTP/HTTPS preview for export support', testHttpPreviewDelivery],
  ['goal scaffold creates concrete unique deck skeleton', testGoalScaffold],
  ['validate-goal-spec rejects unsafe goal shapes', testValidateGoalSpec],
  ['generated theme metadata has no serialized React defaults', testGeneratedMetadataNoSerializedReactDefaults],
  ['validate-goal-copy rejects neutral placeholder copy', testValidateGoalCopyPlaceholders],
  ['validate-goal-copy ignores hidden nested array tails', testValidateGoalCopyNestedHiddenTails],
  ['checked-in goal examples pass goal spec', testCheckedInGoalExamples],
  ['preview panel handles type: images as an image list control', testImagesControl],
  ['control naming stays generic across user and agent contracts', testControlNaming],
  ['theme12 shared chrome stays deck-neutral', testTheme12SharedChromeNeutral],
  ['theme11 image slots persist uploaded media through deck state', testTheme11ImageSlotStateBridge],
];

const failures = [];

for (const [name, fn] of tests) {
  try {
    await fn();
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

  const ambient = runJson('scripts/layout-query.mjs', [
    '--theme', 'theme12',
    '--role', 'ambient',
    '--limit', '5',
  ]);
  assert(ambient.layouts.length > 0, 'expected ambient background candidates');
  assert(ambient.layouts.every(item => item.roles?.includes('ambient')), 'ambient candidates should expose ambient role');
}

function testControlNaming() {
  const result = spawnSync('node', ['scripts/validate-control-naming.mjs'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (result.status === 0) return;
  const output = `${result.stdout}\n${result.stderr}`;
  const failures = output
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('- '))
    .map(line => line.slice(2));
  assert(failures.length, `Control naming validation failed:\n${output.trim()}`);
  const unexpected = failures.filter(line => {
    const match = line.match(/^inspect-layout missing (theme\d+)_page\d+$/);
    return !match || ACCEPTED_THEME_KEYS.includes(match[1]);
  });
  assert(!unexpected.length, `Control naming validation failed:\n${unexpected.join('\n')}`);
}

function testInspectLayout() {
  const help = spawnSync('node', ['scripts/inspect-layout.mjs', '--help'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  assert(help.status === 0 && `${help.stdout}\n${help.stderr}`.includes('Usage:'), 'inspect-layout --help should print usage');

  const result = runJson('scripts/inspect-layout.mjs', ['theme01_page020']);
  assert(result.layout === 'theme01_page020', 'unexpected layout');
  assert(result.copyKeys?.includes('title'), 'missing title copy key');
  assert(result.copyKeys?.includes('caption'), 'missing caption copy key');
  assert(result.arrayKeys?.includes('items'), 'missing items array key');
  assert(result.mediaSlots?.some(slot => slot.field === 'images' && slot.countKey === 'imageSlotCount'), 'missing images media slot');
  assert(result.countBindings?.some(binding => binding.key === 'imageSlotCount'), 'missing imageSlotCount binding');
  assert(result.controlKeys?.includes('images'), 'missing images control key');
  assert(result.copyBudgets?.title?.density === 'display', 'inspect-layout should expose display copy budget for title');
  assert(Number(result.copyBudgets?.title?.maxChars) > 0, 'inspect-layout should expose title maxChars');
  assert(JSON.stringify(result).length < 9000, 'inspect-layout output is too large');

  const quadrant = runJson('scripts/inspect-layout.mjs', ['theme01_page031']);
  assert(quadrant.propShapes?.quadrants?.[0]?.title === 'string', 'inspect-layout should expose array item shape');
  assert(quadrant.propShapes?.quadrants?.[0]?.chips?.[0] === 'string', 'inspect-layout should expose nested array shape');

  const compactQuadrant = runJson('scripts/inspect-layout.mjs', ['--compact', 'theme01_page031']);
  assert(compactQuadrant.propShapes?.quadrants?.[0]?.title === 'string', 'compact inspect-layout should expose array item shape');
  assert(compactQuadrant.propShapes?.quadrants?.[0]?.chips?.[0] === 'string', 'compact inspect-layout should expose nested array shape');
  assert(Number(compactQuadrant.copyBudgets?.title?.maxChars) > 0, 'compact inspect-layout should expose copy budgets');
  assert(JSON.stringify(compactQuadrant).length < 5000, 'compact inspect-layout output is too large');

  const statement = runJson('scripts/inspect-layout.mjs', ['theme05_page037']);
  const statementJson = JSON.stringify(statement);
  assert(statement.propShapes?.copy?.quote === 'string', 'theme05 statement quote should be exposed as a string, not React internals');
  assert(!/copy\\.quote\\.props|_owner|_store|ref/.test(statementJson), 'inspect-layout should not expose serialized React element internals');

  const multi = runJson('scripts/inspect-layout.mjs', ['--layout', 'theme01_page020', '--layout=theme01_page031']);
  assert(Array.isArray(multi.layouts) && multi.layouts.length === 2, 'inspect-layout should support multiple layouts');
  assert(multi.layouts[0].layout === 'theme01_page020' && multi.layouts[1].layout === 'theme01_page031', 'inspect-layout multi output should keep requested layouts');
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
  assert(result.props?.images?.join('|') === 'hero-a.png|hero-b.png', 'expected authored images to stay explicit without default image tail');
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

  const backgroundMedia = runJson('scripts/write-safe-props.mjs', ['theme12_page020', JSON.stringify({
    media: ['assets/user-media/hero.webp'],
  })]);
  assert(backgroundMedia.props?.backgroundMode === 'media', 'authored media should switch supported backgroundMode to media');

  const videoMedia = runJson('scripts/write-safe-props.mjs', [
    'theme11_page063',
    JSON.stringify({ title: '视频封面' }),
    '--media',
    'assets/user-media/hero.mp4',
    'assets/user-media/poster.png',
  ]);
  assert(videoMedia.mediaIntent === 'provided-media', 'expected provided-media media intent');
  assert(videoMedia.props?.images?.[0]?.src === 'assets/user-media/hero.mp4', 'props:safe --media should keep video src');
  assert(videoMedia.props?.images?.[0]?.kind === 'video', 'props:safe --media should type video items');
  assert(videoMedia.props?.images?.[0]?.type === 'video/mp4', 'props:safe --media should infer video mime type');
  assert(videoMedia.props?.images?.[1]?.kind === 'image', 'props:safe --media should type image items');
  assert(videoMedia.props?.images?.[1]?.type === 'image/png', 'props:safe --media should infer image mime type');

  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-props-goal-'));
  try {
    const goalPath = path.join(tmp, 'goal.json');
    writeFileSync(goalPath, JSON.stringify({
      title: 'Props Safe Goal',
      goal: 'should pass whole-goal props safety check',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', props: { title: '整份检查', images: ['x.png'] } }],
    }, null, 2));
    const goalSafe = runJson('scripts/write-safe-props.mjs', ['--goal', goalPath]);
    assert(goalSafe.ok === true && goalSafe.slideCount === 1, 'props:safe --goal should validate a complete goal');

    const writableGoalPath = path.join(tmp, 'writable-goal.json');
    writeFileSync(writableGoalPath, JSON.stringify({
      title: 'Writable Props Safe Goal',
      goal: 'should normalize whole-goal props in place',
      themePack: 'theme12',
      slides: [{
        layout: 'theme12_page003',
        props: {
          title: '夜场招商',
          media: ['assets/user-media/recap.mp4'],
        },
      }],
    }, null, 2));
    const writtenSafe = runJson('scripts/write-safe-props.mjs', ['--goal', writableGoalPath, '--write']);
    const writtenGoal = JSON.parse(readFileSync(writableGoalPath, 'utf8'));
    const writtenMedia = writtenGoal.slides?.[0]?.props?.media?.[0];
    assert(writtenSafe.written === writableGoalPath, 'props:safe --goal --write should report the written file');
    assert(writtenMedia?.src === 'assets/user-media/recap.mp4', 'props:safe --write should normalize video media src');
    assert(writtenMedia?.kind === 'video', 'props:safe --write should normalize video media kind');
    assert(writtenMedia?.type === 'video/mp4', 'props:safe --write should infer video mime type');
    execFileSync('node', ['scripts/validate-goal-spec.mjs', writableGoalPath], { cwd: ROOT, stdio: 'pipe' });

    const badGoalPath = path.join(tmp, 'bad-goal.json');
    writeFileSync(badGoalPath, JSON.stringify({
      title: 'Bad Props Safe Goal',
      goal: 'should fail whole-goal props safety check',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', props: { madeUpProp: true } }],
    }, null, 2));
    const badGoal = spawnSync('node', ['scripts/write-safe-props.mjs', '--goal', badGoalPath], {
      cwd: ROOT,
      encoding: 'utf8',
    });
    assert(badGoal.status !== 0, 'props:safe --goal should fail on unsafe goal props');
    assert(`${badGoal.stdout}\n${badGoal.stderr}`.includes('madeUpProp'), 'props:safe --goal failure should mention bad prop');
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }

  const badNested = spawnSync('node', ['scripts/write-safe-props.mjs', 'theme01_page031', JSON.stringify({
    quadrants: [{ name: '高频低风险', desc: '错误字段应该被拒绝' }],
  })], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  assert(badNested.status !== 0, 'expected malformed nested array props to fail');
  assert(`${badNested.stdout}\n${badNested.stderr}`.includes('props.quadrants[0].name'), 'expected nested prop shape error for quadrants[0].name');
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
  assert(provided.props?.images?.length === 3, 'provided images should stay explicit without default media tail');

  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-media-goal-'));
  try {
    const pngPath = path.join(tmp, 'Sample Media.png');
    const png = new PNG({ width: 1, height: 1 });
    png.data[0] = 255;
    png.data[3] = 255;
    writeFileSync(pngPath, PNG.sync.write(png));
    const staged = runJson('scripts/stage-media.mjs', [path.join(tmp, 'ppt'), pngPath]);
    assert(staged.items?.[0]?.relative === 'assets/user-media/sample-media.png', 'media:stage should copy image assets with stable relative paths');
    assert(existsSync(path.join(tmp, 'ppt/assets/user-media/sample-media.png')), 'media:stage should write under ppt assets directory');

    const stagedFromDeckRoot = runJson('scripts/stage-media.mjs', [path.join(tmp, 'deck-root'), pngPath]);
    assert(stagedFromDeckRoot.outDir === path.join(tmp, 'deck-root/ppt'), 'media:stage should treat a deck root as deck-root/ppt');
    assert(existsSync(path.join(tmp, 'deck-root/ppt/assets/user-media/sample-media.png')), 'media:stage deck root mode should write under ppt assets directory');

    const avifPath = path.join(tmp, 'sample-media.avif');
    if (tryCreateAvif(pngPath, avifPath)) {
      const stagedAvif = runJson('scripts/stage-media.mjs', [path.join(tmp, 'ppt-avif'), avifPath]);
      assert(stagedAvif.items?.[0]?.convertedFrom === 'avif', 'media:stage should report AVIF conversion');
      assert(/\.(webp|png)$/.test(stagedAvif.items?.[0]?.relative || ''), 'media:stage should convert AVIF to a browser-safe image');
    }

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
  if (!skill.includes('<skill-root>/assets/skill/theme-style-grid.png')) missing.push('style grid absolute skill-root path');
  if (!(/Markdown 图片/.test(skill) && /绝对路径/.test(skill))) missing.push('style grid markdown absolute-path guidance');
  if (!(/风格选择提问/.test(skill) && /用户可见回复/.test(skill))) missing.push('user-visible style-choice reply rule');
  if (!/不能只在.*进度/.test(skill)) missing.push('progress-only style image warning');
  if (!(/视觉素材任务/.test(skill) && /先问/.test(skill) && /预留图片槽/.test(skill))) missing.push('ask-to-reserve-image-slots rule');
  if (!(/不能默认.*图片 slot.*0/.test(skill) || /不能默认.*图片槽.*0/.test(skill))) missing.push('do-not-default-image-slot-count-to-0 rule');
  if (!(/文案长度/.test(skill) && /短词/.test(skill) && /短句/.test(skill))) missing.push('copy length guidance');
  if (!(/copyBudgets/.test(skill) && /display/.test(skill) && /metric/.test(skill))) missing.push('copyBudgets display/metric guidance');
  if (!(/media:stage/.test(skill) && /relative/.test(skill) && /AVIF/.test(skill))) missing.push('media:stage AVIF relative-path guidance');
  if (!(/本次 deck 目录/.test(skill) && /deck 内相对路径/.test(skill) && /外部绝对路径/.test(skill))) missing.push('deck-local media path guidance');
  if (!(/渲染后核对/.test(skill) && /ppt\/<relative>/.test(skill) && /HTML 包含文件名/.test(skill))) missing.push('post-render media path check guidance');
  if (!(/缺失时只补最终 `ppt\/assets`/.test(skill) && /重跑校验/.test(skill))) missing.push('post-render media repair scope guidance');
  if (!(/props:safe -- --goal/.test(skill) || /props:safe --goal/.test(skill))) missing.push('whole-goal props:safe guidance');
  if (!(/goal:scaffold/.test(skill) && /唯一 layout 骨架/.test(skill))) missing.push('goal scaffold guidance');
  if (!(/可见数组项/.test(skill) && /隐藏的尾项/.test(skill) && /请输入文本/.test(skill))) missing.push('visible-vs-hidden placeholder guidance');
  if (!(/图片\/视频素材每个最多使用一次/.test(skill) && /不要重复填充同一素材/.test(skill))) missing.push('provided media one-time-use guidance');
  if (!(/素材用完/.test(skill) && /媒体插槽留空/.test(skill) && /无媒体插槽页面/.test(skill))) missing.push('media exhausted empty-or-no-media guidance');
  if (!(/subagent/.test(skill) && /并行/.test(skill) && /不要串行/.test(skill))) missing.push('parallel image generation guidance');
  if (!(/subagent 只用于生图/.test(skill) && /不用于选题、文案、选页或校验/.test(skill))) missing.push('subagents only for image generation guidance');
  if (!(/输出目录/.test(skill) && /当前会话工作目录/.test(skill) && /<skill-root>\/project\/output/.test(skill))) missing.push('output should stay in current thread working directory');
  if (!(/ambient/.test(skill) && /动态背景页/.test(skill))) missing.push('ambient background page guidance');
  if (!skill.includes('--planned-images <n>')) missing.push('planned-images workflow guidance');
  if (!skill.includes('--provided-images <n>')) missing.push('provided-images workflow guidance');
  if (!skill.includes('--image-gen')) missing.push('image-gen workflow guidance');
  if (!(/canPresetMedia/.test(skill) && /presetProp/.test(skill))) missing.push('preset media slot guidance');
  for (const term of ['随意', '自拟', '你来定', '不用问', '直接开干']) {
    if (!skill.includes(term)) missing.push(`delegated no-question mode term ${term}`);
  }
  if (!/已验收主题[\s\S]{0,80}默认 HTML[\s\S]{0,80}默认不使用 image-gen/.test(skill)) {
    missing.push('delegated mode defaults to accepted themes, no image-gen, and HTML');
  }
  const styleHintLines = skill.match(/`theme\d+`[^。\n]*适合[:：][^。\n]*人群[:：][^。\n]*/g) || [];
  if (styleHintLines.length !== ACCEPTED_THEME_KEYS.length) missing.push('accepted-theme short style scene/audience hints in the user-visible style-choice reply');
  for (const theme of ACCEPTED_THEME_PACKS) {
    const line = styleHintLines.find(item => item.includes(`\`${theme.key}\``)) || '';
    if (!line.includes(theme.displayName)) missing.push(`metadata displayName for ${theme.key}`);
    if (!line.includes(shortThemeText(theme.scenario))) missing.push(`metadata scenario for ${theme.key}`);
    if (!line.includes(shortThemeText(theme.audience))) missing.push(`metadata audience for ${theme.key}`);
  }
  for (const theme of GENERATED_THEME_PACKS.filter(item => !ACCEPTED_THEME_KEYS.includes(item.key))) {
    if (skill.includes(`\`${theme.key}\``)) missing.push(`unaccepted theme exposed in SKILL.md: ${theme.key}`);
  }
  for (const oldName of ['01-轻拟态质感', 'PULSE 色谱图表', '黑金实验质感']) {
    if (skill.includes(oldName)) missing.push(`old theme name ${oldName}`);
  }
  if (!sync.includes('theme-style-grid.png')) missing.push('sync style grid asset handling');
  if (!(/copyBudgets/.test(sync) && /media:stage/.test(sync) && /props:safe -- --goal/.test(sync))) missing.push('sync reference copy/media/whole-goal props tool guidance');
  if (!(/goal:scaffold/.test(sync) && /唯一 layout 骨架/.test(sync))) missing.push('sync reference goal scaffold guidance');
  if (!(/当前会话工作目录/.test(sync) && /<skill-root>\/project\/output/.test(sync))) missing.push('sync reference current-thread output guidance');
  if (!(/ambient/.test(sync) && /动态背景/.test(sync))) missing.push('sync reference ambient background guidance');
  if (!(/subagent/.test(sync) && /并行/.test(sync) && /只用于生图/.test(sync))) missing.push('sync reference parallel image-gen guidance');
  if (!(/隐藏的尾项/.test(sync) && /请输入文本/.test(sync))) missing.push('sync reference hidden placeholder guidance');
  if (!(/canPresetMedia/.test(sync) && /presetProp/.test(sync))) missing.push('sync reference preset media guidance');
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
  if (!/(预览\s*(URL|链接|地址)|本机 HTTP)/.test(skill)) missing.push('final delivery preview URL requirement');
  if (!/HTML 文件路径/.test(skill)) missing.push('final delivery HTML file path requirement');
  if (!/本机 HTTP[\s\S]{0,80}导出[\s\S]{0,80}(PPT|PPTX)/.test(skill)) missing.push('HTTP export-capable delivery distinction');
  if (!/(file:\/\/|本地 HTML)[\s\S]{0,120}不能导出可编辑 PPTX/.test(skill)) missing.push('file local HTML cannot export editable PPTX distinction');
  if (!/交付格式[\s\S]{0,80}默认 HTML/.test(skill)) missing.push('default HTML delivery state');
  if (!/“生成 PPT”[\s\S]{0,80}“做 PPT”[\s\S]{0,80}“制作 ppt”[\s\S]{0,80}PPT 呈现形态/.test(skill)) missing.push('plain PPT request defaults to HTML guidance');
  for (const term of ['PPTX', 'PowerPoint', '可编辑 PPTX', '导出 PPTX', 'PPT 格式', '格式/文件类型为 PPT/PPTX']) {
    if (!skill.includes(term)) missing.push(`explicit PPTX file trigger ${term}`);
  }
  if (!/PPTX 文件[\s\S]{0,80}先生成 HTML[\s\S]{0,80}HTTP 导出服务/.test(skill)) missing.push('PPTX follows HTML-first export flow');
  if (!/PPTX 交付[\s\S]{0,80}只给 PPTX 文件路径或下载结果/.test(skill)) missing.push('PPTX final reply hides HTML delivery');
  if (!/HTTP\/HTTPS/.test(sync)) missing.push('synced installed skill preserves HTTP/HTTPS wording');
  if (!/playwright-core/.test(sync)) missing.push('synced runtime keeps PPTX export browser dependency');
  assert(!missing.length, `Codex/image-gen/export delivery guidance missing: ${missing.join(', ')}`);
}

function testAcceptedThemeExposure() {
  const themeQuery = runJson('scripts/layout-query.mjs', ['--role', 'cover', '--limit', '50']);
  assert(themeQuery.layouts.length > 0, 'expected accepted theme layouts');
  assert(themeQuery.layouts.every(item => ACCEPTED_THEME_KEYS.includes(item.theme)), 'layout-query should only expose accepted themes');
  for (const themeKey of ACCEPTED_THEME_KEYS) {
    const result = runJson('scripts/layout-query.mjs', ['--theme', themeKey, '--role', 'cover', '--limit', '5']);
    assert(result.layouts.some(item => item.theme === themeKey), `layout-query should expose ${themeKey}`);
    const firstLayout = result.layouts[0]?.layout || `${themeKey}_page001`;
    const inspected = runJson('scripts/inspect-layout.mjs', [firstLayout]);
    assert(inspected.theme === themeKey, `inspect-layout should expose ${themeKey}`);
  }
}

function testSyncedSkillOutput() {
  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-synced-skill-'));
  const skillRoot = path.join(tmp, 'skill');
  try {
    const scratchFile = path.join(skillRoot, 'scratch/keep.txt');
    const localNoteFile = path.join(skillRoot, 'local-note.txt');
    const syncManifestFile = path.join(skillRoot, '.sync-manifest.json');
    mkdirSync(path.dirname(scratchFile), { recursive: true });
    writeFileSync(scratchFile, 'keep');
    writeFileSync(localNoteFile, 'keep');
    writeFileSync(syncManifestFile, '{"version":1,"files":["old"]}\n');

    execFileSync('node', ['scripts/sync-skill.mjs'], {
      cwd: ROOT,
      env: { ...process.env, DASHI_PPT_SKILL_ROOT: skillRoot },
      stdio: 'pipe',
    });
    assert(existsSync(scratchFile), 'skill sync should preserve scratch files under an installed skill root');
    assert(existsSync(localNoteFile), 'skill sync should preserve unrelated installed skill files');
    assert(!existsSync(syncManifestFile), 'skill sync should not keep a diff-noisy sync manifest in the installed skill root');

    const visibleTextFiles = [
      'SKILL.md',
      'README.md',
      'references/options.md',
      'references/layout-pool.md',
      'references/layout-roles.md',
    ];
    for (const file of visibleTextFiles) {
      assertAcceptedThemeText(readFileSync(path.join(skillRoot, file), 'utf8'), file);
    }
    const styleGrid = PNG.sync.read(readFileSync(path.join(skillRoot, 'assets/skill/theme-style-grid.png')));
    assert(styleGrid.height <= Math.ceil(styleGrid.width / ACCEPTED_THEME_KEYS.length), 'synced style grid should be cropped to accepted themes');

    const schema = JSON.parse(readFileSync(path.join(skillRoot, 'references/goal-spec.schema.json'), 'utf8'));
    assert(
      JSON.stringify(schema.properties?.themePack?.enum || []) === JSON.stringify(ACCEPTED_THEME_KEYS),
      'synced schema themePack enum should contain only accepted themes',
    );
    assertAcceptedThemeText(JSON.stringify(schema), 'references/goal-spec.schema.json');

    const examplesRoot = path.join(skillRoot, 'references/examples');
    for (const file of readdirSync(examplesRoot).filter(item => item.endsWith('.json'))) {
      const examplePath = path.join(examplesRoot, file);
      const example = JSON.parse(readFileSync(examplePath, 'utf8'));
      assert(ACCEPTED_THEME_KEYS.includes(example.themePack), `${file} uses unaccepted themePack ${example.themePack}`);
      for (const slide of example.slides || []) {
        const themeKey = String(slide.layout || '').split('_')[0];
        assert(ACCEPTED_THEME_KEYS.includes(themeKey), `${file} uses unaccepted layout ${slide.layout}`);
      }
      assertAcceptedThemeText(JSON.stringify(example), `references/examples/${file}`);
      execFileSync('node', ['scripts/validate-goal-spec.mjs', examplePath], { cwd: ROOT, stdio: 'pipe' });
    }

    const installedMetadata = readFileSync(path.join(skillRoot, 'project/src/components/themes/generated-metadata.js'), 'utf8');
    assertAcceptedThemeText(installedMetadata, 'project/src/components/themes/generated-metadata.js');

    const installedManifest = JSON.parse(readFileSync(path.join(skillRoot, 'project/layout-manifest.json'), 'utf8'));
    for (const [layoutKey, record] of Object.entries(installedManifest.layouts || {})) {
      const themeKey = record?.themePack || record?.themeKey || layoutKey.split('_')[0];
      assert(ACCEPTED_THEME_KEYS.includes(themeKey), `synced layout manifest exposes unaccepted layout ${layoutKey}`);
    }
    assertAcceptedThemeText(JSON.stringify(installedManifest), 'project/layout-manifest.json');

    const projectAssetFiles = listFiles(path.join(skillRoot, 'project/assets'))
      .map(file => path.relative(path.join(skillRoot, 'project'), file).split(path.sep).join('/'));
    for (const file of projectAssetFiles) {
      assert(
        RUNTIME_ASSET_PATHS.some(assetPath => file === assetPath || file.startsWith(`${assetPath}/`)),
        `synced project copied non-runtime asset ${file}`,
      );
    }
    assert(
      !existsSync(path.join(skillRoot, 'project/assets/skill/theme-style-grid.png')),
      'synced project should not copy the full assets/skill directory',
    );
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testValidateSwissMissingAsset() {
  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-missing-asset-'));
  try {
    const goalPath = path.join(tmp, 'goal.json');
    const outPath = path.join(tmp, 'ppt/index.html');
    writeFileSync(goalPath, JSON.stringify({
      title: 'Missing Asset Smoke',
      goal: 'validate swiss should fail when a referenced runtime asset is missing',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page001', props: { kicker: 'ASSET', titleTop: 'Missing', titleBottom: 'Asset' } }],
    }, null, 2));

    execFileSync('npm', ['run', 'render:goal', '--', goalPath, outPath], { cwd: ROOT, stdio: 'pipe' });
    execFileSync('npm', ['run', 'validate:swiss', '--', outPath], { cwd: ROOT, stdio: 'pipe' });
    rmSync(path.join(tmp, 'ppt/assets/ui-icons/sidebar.svg'), { force: true });

    const result = spawnSync('npm', ['run', 'validate:swiss', '--', outPath], {
      cwd: ROOT,
      encoding: 'utf8',
    });
    assert(result.status !== 0, 'validate:swiss should fail after deleting a referenced runtime asset');
    assert(`${result.stdout}\n${result.stderr}`.includes('assets/ui-icons/sidebar.svg'), 'missing asset error should mention sidebar.svg');
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

async function testHttpPreviewDelivery() {
  const skill = readFileSync(path.join(ROOT, 'SKILL.md'), 'utf8');
  const sync = readFileSync(path.join(ROOT, 'scripts/sync-skill.mjs'), 'utf8');
  const template = readFileSync(path.join(ROOT, 'assets/template-swiss.html'), 'utf8');
  const missing = [];
  if (!/preview:start/.test(skill)) missing.push('skill preview:start workflow');
  if (!/http:\/\/(?:127\.0\.0\.1|localhost):<port>\//.test(skill)) missing.push('local HTTP export URL guidance');
  if (!/http:\/\/jadon\.local:<port>\/[\s\S]{0,40}不作导出主入口/.test(skill)) missing.push('do not use jadon.local HTTP as final export URL rule');
  if (!/http:\/\/jadon\.local:<port>\/[\s\S]{0,40}不作导出主入口/.test(skill)) missing.push('jadon.local HTTP is not export entry');
  if (!/https:\/\/jadon\.local:<port>\//.test(skill)) missing.push('jadon.local preview URL guidance');
  if (!/HTML 文件路径/.test(skill)) missing.push('HTML file path delivery rule');
  if (!/本机 HTTP[\s\S]{0,80}导出[\s\S]{0,80}(PPT|PPTX)/.test(skill)) missing.push('local HTTP link exports PPT/PPTX rule');
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
      owner: 'DashAI PPT',
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
            meta: [
              { label: 'MODE', value: 'Workflow' },
              { label: 'CHECK', value: 'Validation' },
              { label: 'ID', value: 'JAD-150' },
            ],
            footnote: 'DashAI PPT · Preview delivery smoke',
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
    assert(existsSync(path.join(skillRoot, 'project/assets/ui-icons/sidebar.svg')), 'synced skill project should include UI icons');
    assert(existsSync(path.join(skillRoot, 'project/assets/social-icons/github.svg')), 'synced skill project should include social icons');
    assert(existsSync(path.join(skillRoot, 'project/assets/skill/dashiai-ppt-favicon.png')), 'synced skill project should include favicon asset');
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

    const occupiedRoot = path.join(tmp, 'occupied/ppt');
    mkdirSync(occupiedRoot, { recursive: true });
    writeFileSync(path.join(occupiedRoot, 'index.html'), '<!doctype html><title>Occupied Ports</title>');
    const occupiedPort = 48500 + (process.pid % 300);
    const occupiedServers = await listenContiguousPorts(occupiedPort, 45);
    try {
      const occupiedOutput = execFileSync('node', ['scripts/start-preview-server.mjs', occupiedRoot, String(occupiedPort)], {
        cwd: ROOT,
        env: { ...process.env, DASHI_PPT_PREVIEW_HOST: '127.0.0.1' },
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      });
      const occupiedState = JSON.parse(readFileSync(path.join(occupiedRoot, '.preview-server.json'), 'utf8'));
      assert(occupiedState.port >= occupiedPort + 45, `preview should scan beyond 40 occupied ports, got ${occupiedState.port}`);
      assert(occupiedOutput.includes(`:${occupiedState.port}/`), 'preview output should mention the selected fallback port');
      cleanupPreviewProcess(occupiedState.pid);
    } finally {
      closeServers(occupiedServers);
    }
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testGoalScaffold() {
  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-goal-scaffold-'));
  try {
    for (const themeKey of ACCEPTED_THEME_KEYS) {
      const goalPath = path.join(tmp, `${themeKey}.json`);
      execFileSync('npm', ['run', 'goal:scaffold', '--',
        '--title', '20 页骨架',
        '--goal', '验证长 deck 先生成具体 layout 骨架',
        '--theme', themeKey,
        '--pages', '20',
        '--chunk-size', '5',
        '--out', goalPath,
      ], { cwd: ROOT, stdio: 'pipe' });
      const spec = JSON.parse(readFileSync(goalPath, 'utf8'));
      assert(spec.themePack === themeKey, 'scaffold should preserve requested theme');
      assert(spec.pageCount === 20, 'scaffold should preserve requested page count');
      assert(spec.slides?.length === 20, 'scaffold should create 20 slides');
      assert(spec.slides.every(slide => slide.layout?.startsWith(`${themeKey}_`)), 'scaffold should use requested theme layouts');
      assert(spec.slides.every(slide => !slide.role && slide.props && typeof slide.props === 'object'), 'scaffold should output concrete layouts with props objects');
      assert(new Set(spec.slides.map(slide => slide.layout)).size === spec.slides.length, 'scaffold should not repeat layouts');
      const coverLayouts = spec.slides.map(slide => slide.layout).filter(layout => new RegExp(`^${themeKey}_page00[1-5]$`).test(layout));
      assert(coverLayouts.length === 1, `scaffold should use exactly one cover candidate for ${themeKey}, got ${coverLayouts.join(', ')}`);
      execFileSync('node', ['scripts/validate-goal-spec.mjs', goalPath], { cwd: ROOT, stdio: 'pipe' });

      const chunks = readdirSync(tmp).filter(file => new RegExp(`^${themeKey}\\.part-\\d+\\.json$`).test(file)).sort();
      assert(chunks.length === 4, `scaffold should create 4 chunk files for ${themeKey}, got ${chunks.join(', ')}`);
      const chunkSlides = chunks.flatMap(file => JSON.parse(readFileSync(path.join(tmp, file), 'utf8')).slides || []);
      assert(JSON.stringify(chunkSlides.map(slide => slide.layout)) === JSON.stringify(spec.slides.map(slide => slide.layout)), 'chunk files should preserve slide order');
      assert(chunks.every(file => (JSON.parse(readFileSync(path.join(tmp, file), 'utf8')).slides || []).length <= 5), 'chunk files should honor chunk size');
    }

    const goalPath = path.join(tmp, 'theme09-media.json');
    execFileSync('npm', ['run', 'goal:scaffold', '--',
      '--title', '20 页骨架',
      '--goal', '验证长 deck 先生成具体 layout 骨架',
      '--theme', 'theme09',
      '--pages', '20',
      '--chunk-size', '5',
      '--out', goalPath,
    ], { cwd: ROOT, stdio: 'pipe' });
    const spec = JSON.parse(readFileSync(goalPath, 'utf8'));
    assert(spec.themePack === 'theme09', 'scaffold should preserve requested theme');
    assert(spec.pageCount === 20, 'scaffold should preserve requested page count');
    assert(spec.slides?.length === 20, 'scaffold should create 20 slides');
    assert(spec.slides.every(slide => slide.layout?.startsWith('theme09_')), 'scaffold should use requested theme layouts');
    assert(spec.slides.every(slide => !slide.role && slide.props && typeof slide.props === 'object'), 'scaffold should output concrete layouts with props objects');
    assert(new Set(spec.slides.map(slide => slide.layout)).size === spec.slides.length, 'scaffold should not repeat layouts');
    const coverLayouts = spec.slides.map(slide => slide.layout).filter(layout => /^theme09_page00[1-5]$/.test(layout));
    assert(coverLayouts.length === 1, `scaffold should use exactly one cover candidate, got ${coverLayouts.join(', ')}`);
    execFileSync('node', ['scripts/validate-goal-spec.mjs', goalPath], { cwd: ROOT, stdio: 'pipe' });

    const chunks = readdirSync(tmp).filter(file => /^theme09-media\.part-\d+\.json$/.test(file)).sort();
    assert(chunks.length === 4, `scaffold should create 4 chunk files, got ${chunks.join(', ')}`);
    const chunkSlides = chunks.flatMap(file => JSON.parse(readFileSync(path.join(tmp, file), 'utf8')).slides || []);
    assert(JSON.stringify(chunkSlides.map(slide => slide.layout)) === JSON.stringify(spec.slides.map(slide => slide.layout)), 'chunk files should preserve slide order');
    assert(chunks.every(file => (JSON.parse(readFileSync(path.join(tmp, file), 'utf8')).slides || []).length <= 5), 'chunk files should honor chunk size');
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

    expectGoalFailure(tmp, 'unknown-nested-prop.json', {
      title: 'Unknown Nested Prop',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page031', props: { quadrants: [{ name: '高频低风险', desc: '错误字段应该被拒绝' }] } }],
    }, ['slide 1', 'theme01_page031', 'props.quadrants[0].name']);

    expectGoalFailure(tmp, 'multi-cover.json', {
      title: 'Multi Cover',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [
        { layout: 'theme01_page001', props: { title: 'a' } },
        { layout: 'theme01_page002', props: { title: 'b' } },
      ],
    }, ['cover', 'theme01_page001', 'theme01_page002']);

    expectGoalFailure(tmp, 'duplicate-layout.json', {
      title: 'Duplicate Layout',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [
        { layout: 'theme01_page020', props: { title: '第一页' } },
        { layout: 'theme01_page020', props: { title: '第二页' } },
      ],
    }, ['duplicate layout', 'theme01_page020']);

    expectGoalFailure(tmp, 'html-prop.json', {
      title: 'HTML Prop',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', props: { title: '<div>自由 HTML</div>' } }],
    }, ['slide 1', 'theme01_page020', 'title', 'HTML']);

    expectGoalFailure(tmp, 'duplicate-media.json', {
      title: 'Duplicate Media',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [
        { layout: 'theme01_page020', props: { title: '媒体一', images: ['assets/user-media/a.png'] } },
        { layout: 'theme01_page026', props: { title: '媒体二', images: ['assets/user-media/a.png'] } },
      ],
    }, ['media asset', 'assets/user-media/a.png', 'used 2 times']);

    expectGoalFailure(tmp, 'long-display-copy.json', {
      title: 'Long Display Copy',
      goal: 'should fail',
      themePack: 'theme01',
      slides: [{
        layout: 'theme01_page020',
        props: { title: '这是一个被故意写得非常非常非常非常非常非常非常非常非常长的大标题文案' },
      }],
    }, ['display copy', 'too long']);

    expectGoalFailure(tmp, 'serialized-react-copy.json', {
      title: 'Serialized React Copy',
      goal: 'should fail',
      themePack: 'theme05',
      slides: [{
        layout: 'theme05_page037',
        props: {
          copy: {
            quote: {
              type: 'span',
              key: null,
              ref: null,
              props: { children: '错误结构' },
              _owner: null,
              _store: {},
            },
          },
        },
      }],
    }, ['serialized React element', 'props.copy.quote']);

    expectGoalFailure(tmp, 'media-field-string.json', {
      title: 'Media Field String',
      goal: 'should fail',
      themePack: 'theme09',
      slides: [{ layout: 'theme09_page026', props: { images: 'assets/user-media/a.png' } }],
    }, ['props.images', 'expected array']);

    expectGoalFailure(tmp, 'media-field-object.json', {
      title: 'Media Field Object',
      goal: 'should fail',
      themePack: 'theme12',
      slides: [{ layout: 'theme12_page003', props: { media: { src: 'assets/user-media/a.png' } } }],
    }, ['props.media', 'expected array']);

    expectGoalFailure(tmp, 'media-item-without-src.json', {
      title: 'Media Item Without Src',
      goal: 'should fail',
      themePack: 'theme11',
      slides: [{ layout: 'theme11_page063', props: { images: [{ url: 'assets/user-media/a.png' }] } }],
    }, ['props.images[0]', 'src']);

    expectGoalFailure(tmp, 'video-string-media-item.json', {
      title: 'Video String Media Item',
      goal: 'should fail',
      themePack: 'theme12',
      slides: [{ layout: 'theme12_page003', props: { media: ['assets/user-media/clip.mp4'] } }],
    }, ['props.media[0]', 'video']);

    const validPath = path.join(tmp, 'valid.json');
    writeFileSync(validPath, JSON.stringify({
      title: 'Valid',
      goal: 'should pass',
      themePack: 'theme01',
      slides: [{ layout: 'theme01_page020', props: { title: '头部案例', images: ['x.png'] } }],
    }, null, 2));
    execFileSync('node', ['scripts/validate-goal-spec.mjs', validPath], { cwd: ROOT, stdio: 'pipe' });

    const explicitReusePath = path.join(tmp, 'explicit-reuse.json');
    writeFileSync(explicitReusePath, JSON.stringify({
      title: 'Explicit Reuse',
      goal: 'should pass when reuse is explicit',
      themePack: 'theme01',
      allowMediaReuse: true,
      slides: [
        { layout: 'theme01_page020', props: { title: '复用一', images: ['x.png'] } },
        { layout: 'theme01_page026', props: { title: '复用二', images: ['x.png'] } },
      ],
    }, null, 2));
    execFileSync('node', ['scripts/validate-goal-spec.mjs', explicitReusePath], { cwd: ROOT, stdio: 'pipe' });
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testGeneratedMetadataNoSerializedReactDefaults() {
  const offenders = [];
  for (const page of GENERATED_THEME_PAGES) {
    if (!ACCEPTED_THEME_KEYS.includes(page.themeKey)) continue;
    assertNoSerializedReactDefaults(page.defaultProps, `${page.key}.defaultProps`, offenders);
  }
  assert(offenders.length === 0, `generated metadata exposes serialized React defaults: ${offenders.slice(0, 8).join(', ')}`);
}

function testValidateGoalCopyPlaceholders() {
  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-goal-copy-placeholder-'));
  try {
    const hiddenGoalPath = path.join(tmp, 'hidden-tail.json');
    const hiddenOutPath = path.join(tmp, 'hidden-tail/ppt/index.html');
    const normalized = runJson('scripts/write-safe-props.mjs', ['theme01_page020', JSON.stringify({
      kicker: '# CHECK',
      title: '占位校验',
      en: 'Hidden Tail Check',
      cn: '隐藏尾项占位校验',
      images: ['x.png'],
      items: [{ label: 'Alpha', sub: '已写正文', amount: '1' }],
      caption: '当前只显示一个卡片,尾项留给面板恢复。',
    })]);
    assert(JSON.stringify(normalized.props).includes('请输入文本'), 'test setup should produce neutral placeholder copy');
    writeFileSync(hiddenGoalPath, JSON.stringify({
      title: '占位校验',
      goal: '验证隐藏尾项占位不会被误判为可见残留',
      themePack: 'theme01',
      slides: [{
        layout: 'theme01_page020',
        props: normalized.props,
      }],
    }, null, 2));
    execFileSync('npm', ['run', 'render:goal', '--', hiddenGoalPath, hiddenOutPath], { cwd: ROOT, stdio: 'pipe' });
    execFileSync('npm', ['run', 'validate:goal-copy', '--', hiddenGoalPath, hiddenOutPath], { cwd: ROOT, stdio: 'pipe' });

    const visibleGoalPath = path.join(tmp, 'visible-placeholder.json');
    const visibleOutPath = path.join(tmp, 'visible-placeholder/ppt/index.html');
    writeFileSync(visibleGoalPath, JSON.stringify({
      title: '可见占位校验',
      goal: '验证交付校验会拦截可见占位文案',
      themePack: 'theme01',
      slides: [{
        layout: 'theme01_page001',
        props: {
          kicker: 'CHECK',
          titleTop: '请输入文本',
          titleBottom: 'Visible',
          lead: '用于验证实际画面里的占位文本仍会失败。',
        },
      }],
    }, null, 2));
    execFileSync('npm', ['run', 'render:goal', '--', visibleGoalPath, visibleOutPath], { cwd: ROOT, stdio: 'pipe' });
    const result = spawnSync('npm', ['run', 'validate:goal-copy', '--', visibleGoalPath, visibleOutPath], {
      cwd: ROOT,
      encoding: 'utf8',
    });
    assert(result.status !== 0, 'validate:goal-copy should fail when rendered deck still contains neutral placeholder copy');
    assert(`${result.stdout}\n${result.stderr}`.includes('请输入文本'), 'placeholder failure should mention 请输入文本');
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testValidateGoalCopyNestedHiddenTails() {
  const tmp = mkdtempSync(path.join(tmpdir(), 'dashi-goal-copy-nested-placeholder-'));
  try {
    const contract = runJson('scripts/inspect-layout.mjs', ['theme11_page027']);
    assert(
      contract.countBindings?.some(binding => binding.key === 'featureCount' && binding.arrays?.includes('plans[].feats')),
      'theme11_page027 should bind featureCount to nested plans[].feats',
    );

    const normalized = runJson('scripts/write-safe-props.mjs', ['theme11_page027', JSON.stringify({
      headingHtml: '商业化套餐',
      noteHtml: '每张套餐只显示四条权益',
      planCount: 3,
      featureCount: 4,
      plans: [
        { name: 'Starter', en: 'Starter', cur: '¥', amt: '9k', per: '/ 月', feats: ['路线推荐', '社群挑战', '基础看板', '活动报名'] },
        { name: 'Growth', en: 'Growth', cur: '¥', amt: '29k', per: '/ 月', feats: ['城市领队', '品牌任务', '赞助权益', '增长复盘'] },
        { name: 'Scale', en: 'Scale', cur: '', amt: '定制', per: '按城市计费', feats: ['多城运营', '企业合作', '数据接口', '专属支持'] },
      ],
    })]);
    assert(JSON.stringify(normalized.props).includes('请输入文本'), 'test setup should keep neutral nested tail placeholders');

    const goalPath = path.join(tmp, 'nested-hidden-tail.json');
    const outPath = path.join(tmp, 'nested-hidden-tail/ppt/index.html');
    writeFileSync(goalPath, JSON.stringify({
      title: '嵌套隐藏尾项校验',
      goal: '验证被 featureCount 隐藏的套餐权益占位不会被误判',
      themePack: 'theme11',
      slides: [{ layout: 'theme11_page027', props: normalized.props }],
    }, null, 2));
    execFileSync('npm', ['run', 'render:goal', '--', goalPath, outPath], { cwd: ROOT, stdio: 'pipe' });
    execFileSync('npm', ['run', 'validate:goal-copy', '--', goalPath, outPath], { cwd: ROOT, stdio: 'pipe' });
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function testCheckedInGoalExamples() {
  const examplesRoot = path.join(ROOT, 'examples/goal-decks');
  for (const file of readdirSync(examplesRoot).filter(item => item.endsWith('.json'))) {
    execFileSync('node', ['scripts/validate-goal-spec.mjs', path.join(examplesRoot, file)], { cwd: ROOT, stdio: 'pipe' });
  }
}

function testImagesControl() {
  const source = execFileSync('node', ['-e', `
    const fs = require('fs');
    const src = fs.readFileSync('assets/template-swiss.html', 'utf8');
    if (!/type\\s*===\\s*['"]images['"]/.test(src)) process.exit(2);
    if (!/image-list/.test(src)) process.exit(3);
  `], { cwd: ROOT, encoding: 'utf8', stdio: 'pipe' });
  assert(source === '', 'unexpected template probe output');
}

function testTheme12SharedChromeNeutral() {
  const swBase = readFileSync(path.join(ROOT, 'src/components/themes/theme12/source/src/swBase.jsx'), 'utf8');
  assert(!swBase.includes('声浪 SOUNDWAVE'), 'theme12 shared Bar/Footer should not hardcode SoundWave brand');
  assert(!swBase.includes('Independent Music OS</div>'), 'theme12 shared Footer should not hardcode music OS footer');
  assert(swBase.includes('CREATIVE SYSTEM'), 'theme12 shared chrome should keep a neutral default label');
}

function testTheme11ImageSlotStateBridge() {
  const source = readFileSync(path.join(ROOT, 'src/components/themes/theme11/source/ignBase.jsx'), 'utf8');
  const runtime = readFileSync(path.join(ROOT, 'src/components/themes/client-runtime.jsx'), 'utf8');
  assert(/IgnisImageSlotMediaContext/.test(source), 'theme11 ImageSlot must expose a media context');
  assert(/useContext\(IgnisImageSlotMediaContext\)/.test(source), 'theme11 ImageSlot must read the media context');
  assert(/mediaBridge[\s\S]{0,120}\.set\?\./.test(source), 'theme11 ImageSlot uploads must write to deck media state');
  assert(/IgnisImageSlotMediaContext/.test(runtime), 'client runtime must import the theme11 media context');
  assert(/theme11ImageSlotMediaContext\.Provider/.test(runtime), 'client runtime must provide the theme11 media context');
}

function assertNoSerializedReactDefaults(value, pathName, offenders) {
  if (!value || typeof value !== 'object') return;
  if (isSerializedReactElementLike(value)) {
    offenders.push(pathName);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertNoSerializedReactDefaults(item, `${pathName}[${index}]`, offenders));
    return;
  }
  Object.entries(value).forEach(([key, item]) => assertNoSerializedReactDefaults(item, `${pathName}.${key}`, offenders));
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

function assertAcceptedThemeText(text, label) {
  for (const theme of GENERATED_THEME_PACKS.filter(item => !ACCEPTED_THEME_KEYS.includes(item.key))) {
    assert(!text.includes(theme.key), `${label} exposes unaccepted theme ${theme.key}`);
  }
}

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(file));
    } else if (entry.isFile()) {
      files.push(file);
    }
  }
  return files;
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

async function listenContiguousPorts(start, count) {
  const servers = [];
  try {
    for (let offset = 0; offset < count; offset += 1) {
      const server = net.createServer();
      await new Promise((resolve, reject) => {
        server.once('error', reject);
        server.listen(start + offset, '127.0.0.1', resolve);
      });
      servers.push(server);
    }
    return servers;
  } catch (error) {
    closeServers(servers);
    throw error;
  }
}

function closeServers(servers) {
  for (const server of servers || []) {
    try {
      server.close();
    } catch {}
  }
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function tryCreateAvif(source, target) {
  const commands = [
    ['magick', [source, target]],
    ['sips', ['-s', 'format', 'avif', source, '--out', target]],
  ];
  for (const [command, args] of commands) {
    const result = spawnSync(command, args, { encoding: 'utf8' });
    if (result.status === 0 && existsSync(target)) return true;
  }
  return false;
}
