#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import React from 'react';
import {
  normalizeControlValue,
  normalizePublicControls,
} from '../src/control-naming.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DEFAULT_GOAL = path.join(ROOT, 'theme-import-goal.json');
const THEMES_DIR = path.join(ROOT, 'src/components/themes');
const OUTPUT_DIR = path.join(ROOT, 'output');
const MIGRATION_ONLY_DIRS = new Set(['uploads', 'screens', 'screenshots', 'shots', 'scratch', 'scraps']);
const REMOVED_CONTROL_TYPES = new Set(['text', 'string', 'input', 'url', 'email', 'textarea', 'multiline']);

const STRUCTURAL_BLOCKS = {};

setupDomStubs();

const goalPath = path.resolve(process.argv[2] || DEFAULT_GOAL);
const goal = JSON.parse(fs.readFileSync(goalPath, 'utf8'));
const replaceAllExistingThemes = goal.replaceAllExistingThemes !== false;
const targetedThemeKeys = new Set(goal.themes.map(theme => theme.key));
const existingMetadata = replaceAllExistingThemes ? { themes: [], pages: [] } : readExistingMetadata();
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
cleanGeneratedThemeDirs(replaceAllExistingThemes, targetedThemeKeys);

const report = {
  generatedAt: new Date().toISOString(),
  sourceRoot: goal.sourceRoot,
  themes: [],
};
const integratedThemes = [];
const integratedPages = [];
const blocked = [];
const warnings = [];

for (const theme of goal.themes) {
  const audit = inspectTheme(goal.sourceRoot, theme);
  const themeDir = path.join(THEMES_DIR, theme.key);
  const structuralBlock = STRUCTURAL_BLOCKS[theme.key];
  if (!audit.entryExists) {
    audit.status = 'blocked_for_claude';
    audit.blockReason = 'entry_missing';
    audit.conclusion = `入口文件不存在: ${theme.entry}`;
    blocked.push(blockedItem(theme, audit, '入口文件不存在', audit.conclusion, '按 theme-import-goal.json 中的 entry 文件名补齐或修正源目录文件名。'));
    report.themes.push(audit);
    continue;
  }
  if (structuralBlock) {
    audit.status = 'blocked_for_claude';
    audit.blockReason = structuralBlock.type;
    audit.conclusion = structuralBlock.reason;
    blocked.push(blockedItem(theme, audit, '组件结构不符合迁移标准', structuralBlock.reason, structuralBlock.request));
    report.themes.push(audit);
    continue;
  }

  const backupDir = !replaceAllExistingThemes ? backupThemeDir(themeDir, theme.key) : null;
  try {
    const copiedSourceDir = path.join(themeDir, 'source');
    copyThemeSource(audit.sourceDir, copiedSourceDir, theme.key);
    if (theme.key === 'theme05') pruneTheme05Source(copiedSourceDir);
    if (theme.key === 'theme01') patchTheme01Source(copiedSourceDir);
    if (theme.key === 'theme06') patchTheme06Source(copiedSourceDir);
    if (theme.key === 'theme08') patchTheme08Source(copiedSourceDir);
    if (theme.key === 'theme12') patchTheme12Source(copiedSourceDir);
    const runtimeSourceDir = theme.key === 'theme05' || theme.key === 'theme06'
      ? copiedSourceDir
      : audit.sourceDir;
    generateRuntime(theme, runtimeSourceDir, themeDir);
    if (theme.key === 'theme05') cleanupTheme05Source(copiedSourceDir);
    if (theme.key === 'theme06') cleanupTheme06Source(copiedSourceDir);
    const runtimeModule = await import(`${pathToFileURL(path.join(themeDir, 'runtime.jsx')).href}?t=${Date.now()}`);
    const pages = serializePages(runtimeModule.runtimePages || [], theme);
    if (!pages.length) throw new Error('没有识别到任何页面');
    const contractReview = evaluatePropsContract(pages);
    if (contractReview.blocking) {
      fs.rmSync(themeDir, { recursive: true, force: true });
      restoreThemeDir(backupDir, themeDir);
      audit.status = 'blocked_for_claude';
      audit.blockReason = 'controls_contract_incomplete';
      audit.pageCount = pages.length;
      audit.componentCount = audit.jsxCount;
      audit.conclusion = contractReview.blocking;
      blocked.push(blockedItem(theme, audit, '页面控制契约不完整', contractReview.blocking, '请确保每页组件都通过 controls 暴露可调页面属性。'));
      report.themes.push(audit);
      continue;
    }
    if (contractReview.warning) {
      audit.warning = contractReview.warning;
      warnings.push({ themeKey: theme.key, themeName: theme.name, warning: contractReview.warning });
    }
    writeMetadata(themeDir, pages, theme);
    audit.status = theme.mode === 'replace' ? 'replaced' : 'ready';
    audit.pageCount = pages.length;
    audit.componentCount = audit.jsxCount;
    audit.conclusion = `已接入 ${pages.length} 页`;
    integratedThemes.push({
      key: theme.key,
      displayName: themeDisplayName(theme),
      label: themeDisplayName(theme),
      name: themeDisplayName(theme),
      scenario: theme.scenario || '',
      audience: theme.audience || '',
      mode: theme.mode,
      pageCount: pages.length,
    });
    integratedPages.push(...pages);
    removeThemeBackup(backupDir);
  } catch (error) {
    fs.rmSync(path.join(THEMES_DIR, theme.key), { recursive: true, force: true });
    restoreThemeDir(backupDir, path.join(THEMES_DIR, theme.key));
    audit.status = 'blocked_for_claude';
    audit.blockReason = 'project_import_failed';
    audit.conclusion = error?.message || String(error);
    blocked.push(blockedItem(theme, audit, '项目侧导入失败', audit.conclusion, '保持页面为标准 ES Module,移除无法在项目打包/runtime 中导入的浏览器全局副作用。'));
  }
  report.themes.push(audit);
}

const finalMetadata = mergeMetadata(existingMetadata, integratedThemes, integratedPages, replaceAllExistingThemes);
writeGeneratedMetadata(finalMetadata.themes, finalMetadata.pages);
writeClientRuntime(finalMetadata.themes);
writeAuditReport(report);
writeBlockedReport(blocked);
writeWarningReport(warnings);
writeSummary(goal, integratedThemes, blocked, warnings);

console.log(`Imported ${integratedThemes.length} theme(s), blocked ${blocked.length}.`);

function inspectTheme(sourceRoot, theme) {
  const sourceDir = path.join(sourceRoot, theme.source);
  const entryPath = path.join(sourceDir, theme.entry);
  const files = fs.existsSync(sourceDir) ? walk(sourceDir) : [];
  const textFiles = files.filter(file => /\.(jsx?|tsx?|html|css)$/i.test(file));
  const joined = textFiles.map(readTextSafe).join('\n');
  const entryText = fs.existsSync(entryPath) ? fs.readFileSync(entryPath, 'utf8') : '';
  return {
    key: theme.key,
    name: theme.name,
    source: theme.source,
    sourceDir,
    entry: theme.entry,
    entryExists: fs.existsSync(entryPath),
    alternateEntries: files
      .filter(file => /\.html$/i.test(file))
      .map(file => path.relative(sourceDir, file)),
    mode: theme.mode,
    totalFiles: files.length,
    jsxCount: files.filter(file => /\.jsx$/i.test(file)).length,
    jsCount: files.filter(file => /\.js$/i.test(file)).length,
    assetCount: files.filter(file => /\.(png|jpe?g|webp|svg|gif|mp4|mov)$/i.test(file)).length,
    hasAbsolutePaths: /\/Volumes\/|\/Users\/|\/Downloads\/|file:\/\//.test(joined),
    hasIndependentJsx: files.some(file => /\.jsx$/i.test(file)),
    hasControls: /\bcontrols\b|slideSpec|Tweaks|tweaks|\.META\s*=/.test(joined),
    hasMediaSlots: /slot|Slot|imageSlots|videoSlots|mediaCount|imageCount|uploads|upload/i.test(joined),
    entrySlideHints: {
      sections: count(/<section\b/gi, entryText),
      dataSlide: count(/data-slide/gi, entryText),
      deckSlide: count(/deck-slide/gi, entryText),
      slideClass: count(/class=["'][^"']*slide/gi, entryText),
    },
    pageCount: 0,
    componentCount: 0,
    status: 'needs_adapter',
    conclusion: '',
  };
}

function copyThemeSource(fromDir, toDir, themeKey) {
  fs.rmSync(toDir, { recursive: true, force: true });
  for (const file of walk(fromDir)) {
    const rel = path.relative(fromDir, file);
    if (shouldSkipSourceFile(rel, themeKey)) continue;
    const target = path.join(toDir, rel);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(file, target);
  }
}

function pruneTheme05Source(sourceDir) {
  const componentsDir = path.join(sourceDir, 'components');
  if (!fs.existsSync(componentsDir)) return;
  const esmDir = path.join(componentsDir, 'esm');
  if (!fs.existsSync(esmDir)) {
    generateTheme05EsmComponents(sourceDir);
    return;
  }
  for (const name of fs.readdirSync(componentsDir)) {
    if (name !== 'esm') fs.rmSync(path.join(componentsDir, name), { recursive: true, force: true });
  }
  for (const file of walk(esmDir).filter(file => file.endsWith('.jsx'))) {
    replaceInFile(file, text => {
      let next = text;
      if (/^const controls\b/m.test(next)) {
        next = next.replace(/^export const controls = [^\n]+;\n/m, 'export { controls };\n');
      }
      if (/^const defaults\b/m.test(next)) {
        next = next.replace(/^export const defaults = [^\n]+;\n/m, 'export { defaults };\n');
      }
      return next;
    });
  }
}

function generateTheme05EsmComponents(sourceDir) {
  const componentsDir = path.join(sourceDir, 'components');
  const esmDir = path.join(componentsDir, 'esm');
  fs.mkdirSync(esmDir, { recursive: true });

  const appText = fs.readFileSync(path.join(componentsDir, 'pulse-app.jsx'), 'utf8');
  const slides = [
    'PulseImageFrame',
    ...[...appText.matchAll(/\{\s*id:\s*["'][^"']+["'],\s*label:\s*["'][^"']+["'],\s*Comp:\s*window\.([A-Za-z0-9_]+)\s*\}/g)]
      .map(match => match[1]),
  ];
  const exCoverText = fs.readFileSync(path.join(componentsDir, 'PulseExCovers.jsx'), 'utf8');

  for (const componentName of slides) {
    const sourceFile = path.join(componentsDir, `${componentName}.jsx`);
    const sourceText = fs.existsSync(sourceFile)
      ? fs.readFileSync(sourceFile, 'utf8')
      : componentName.startsWith('PulseExCover')
        ? exCoverText
        : null;
    if (!sourceText) continue;

    const isImageFrame = componentName === 'PulseImageFrame';
    const patchedSourceText = isImageFrame ? sourceText : attachTheme05CopyDefaults(sourceText, componentName);
    const wrapper = [
      "import React from 'react';",
      isImageFrame ? '' : "import './PulseImageFrame.jsx';",
      "const window = globalThis.__theme05Window || (globalThis.__theme05Window = {});",
      'globalThis.React = React;',
      isImageFrame ? '' : theme05CopyWrapperSource(),
      '',
      patchedSourceText,
      '',
      `const Component = window.${componentName};`,
      `if (!Component) throw new Error('Missing theme05 component ${componentName}');`,
      isImageFrame
        ? 'export const controls = Component.controls || [];\nexport const defaults = Component.defaults || Component.defaultProps || {};\nexport default Component;'
        : 'const WrappedComponent = withTheme05Copy(Component);\nexport const controls = WrappedComponent.controls || [];\nexport const defaults = WrappedComponent.defaults || {};\nexport default WrappedComponent;',
      '',
    ].filter(line => line !== '').join('\n');
    fs.writeFileSync(path.join(esmDir, `${componentName}.jsx`), wrapper);
  }
}

function attachTheme05CopyDefaults(sourceText, componentName) {
  const fallbackCopy = theme05FallbackCopy(componentName);
  const copyExpr = /const\s+COPY\s*=/.test(sourceText)
    ? 'COPY'
    : fallbackCopy
      ? JSON.stringify(fallbackCopy, null, 2)
      : '';
  if (!copyExpr) return sourceText;

  const assignment = [
    `${componentName}.copyDefaults = ${copyExpr};`,
    `${componentName}.defaults = { ...(${componentName}.defaults || {}), copy: ${copyExpr} };`,
    '',
  ].join('\n  ');
  const direct = `window.${componentName} = ${componentName};`;
  if (sourceText.includes(direct)) {
    return sourceText.replace(direct, `${assignment}${direct}`);
  }
  const guarded = `if (typeof window !== "undefined") window.${componentName} = ${componentName};`;
  if (sourceText.includes(guarded)) {
    return sourceText.replace(guarded, `${assignment}${guarded}`);
  }
  return sourceText;
}

function theme05FallbackCopy(componentName) {
  const copies = {
    PulseExCover1: {
      brand: '智造',
      brandEn: 'SMARTWORKS',
      meta: ['INDUSTRY 4.0', '2026 — 2027', 'COMPUTER INTEGRATED'],
      kicker: '智能化改造实施方案 · Implementation Plan',
      titleTop: '精益智造',
      titleBottom: '提质增效',
      subtitle: '2026 生产基地智能化改造实施方案',
      subtitleEn: 'Lean Manufacturing · Quality & Efficiency Upgrade',
      railHead: 'PROGRAM',
      specs: [
        { k: '指标 01', v: '降本', vn: 'Cost Down' },
        { k: '指标 02', v: '提效', vn: 'Efficiency' },
        { k: '指标 03', v: '革新', vn: 'Innovation' },
        { k: '指标 04', v: '突围', vn: 'Breakthrough' },
      ],
      footer: 'FILE · LEAN-2026 / REV.A',
    },
    PulseExCover2: {
      top: 'PULSE® BRAND LAB · FULL-FUNNEL MARKETING',
      number: 'NO. 02',
      caption: '2026 年度全平台品牌整合营销方案',
      titleTop: '创意破圈',
      titleBottom: '流量赋能',
      banner: '内容驱动传播 · 创意引爆市场',
      bannerEn: 'Content Drives Reach · Idea Ignites Market',
    },
    PulseExCover3: {
      brand: '链网',
      brandEn: 'SUPPLY-NET',
      meta: 'GROUP SUPPLY CHAIN · STRATEGY 03 / 04',
      year: '2026—2028',
      summary: '打通物流脉络 构筑产业护城河',
      summaryEn: 'Connect The Network · Build The Moat',
      kicker: '集团供应链体系三年发展战略',
      titleTop: '链通全国',
      titleBottom: '高效履约',
      subtitle: 'Three-Year Supply Chain Development Strategy',
    },
    PulseExCover4: {
      setup: 'SETUP · RETAIL OPS',
      cornerLeft: '门店运营培训',
      cornerRight: 'SHEET 04 / 04',
      titleTop: '把握消费趋势',
      titleBottom: '激活终端潜力',
      subtitle: '全国零售门店运营管理暨营销实战培训',
      menu: [
        { label: '消费趋势 TREND SENSING', tag: 'ON' },
        { label: '终端潜力 STORE POTENTIAL', tag: 'ON' },
        { label: '运营管理 OPS MANAGEMENT', tag: '16TH' },
        { label: '营销实战 FIELD MARKETING', tag: '+6 DB' },
      ],
      slogan: '用心服务客户，实干创造业绩',
      foot: 'PRESS (MENU) TO BEGIN · SERVE WITH HEART, ACHIEVE BY ACTION',
    },
  };
  return copies[componentName] || null;
}

function theme05CopyWrapperSource() {
  return `function withTheme05Copy(Component) {
  const defaultCopy = Component.copyDefaults || Component.defaults?.copy || null;
  function Theme05CopyWrapped(props = {}) {
    const copy = mergeTheme05Copy(defaultCopy, props.copy);
    const element = Component({ ...props, copy });
    return replaceTheme05Text(element, theme05ReplacementMap(defaultCopy, copy));
  }
  Theme05CopyWrapped.controls = Component.controls || [];
  Theme05CopyWrapped.defaults = { ...(Component.defaults || {}), ...(defaultCopy ? { copy: defaultCopy } : {}) };
  return Theme05CopyWrapped;
}

function mergeTheme05Copy(base, override) {
  if (!base || typeof base !== 'object') return override || base;
  if (!override || typeof override !== 'object') return base;
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;
  const next = { ...base };
  for (const [key, value] of Object.entries(override)) {
    next[key] = base[key] && typeof base[key] === 'object' && value && typeof value === 'object'
      ? mergeTheme05Copy(base[key], value)
      : value;
  }
  return next;
}

function theme05ReplacementMap(base, copy, map = new Map()) {
  if (!base || !copy) return map;
  if (typeof base === 'string' || typeof base === 'number') {
    const from = String(base).replace(/\\u00a0/g, ' ');
    const to = typeof copy === 'string' || typeof copy === 'number' ? String(copy) : copy;
    if (from && to !== undefined && to !== null && (!map.has(from) || String(to) !== from)) map.set(from, to);
    return map;
  }
  if (Array.isArray(base) && Array.isArray(copy)) {
    base.forEach((item, index) => theme05ReplacementMap(item, copy[index], map));
    return map;
  }
  if (typeof base === 'object' && typeof copy === 'object') {
    Object.keys(base).forEach(key => theme05ReplacementMap(base[key], copy[key], map));
  }
  return map;
}

function replaceTheme05Text(node, replacements) {
  if (!replacements?.size) return node;
  if (typeof node === 'string' || typeof node === 'number') {
    return replacements.get(String(node).replace(/\\u00a0/g, ' ')) ?? node;
  }
  if (Array.isArray(node)) return node.map(child => replaceTheme05Text(child, replacements));
  if (!React.isValidElement(node)) return node;
  const nextProps = {};
  let changed = false;
  for (const key of ['children', 'label', 'placeholder', 'title', 'alt', 'aria-label']) {
    if (!(key in node.props)) continue;
    const next = replaceTheme05Text(node.props[key], replacements);
    if (next !== node.props[key]) {
      nextProps[key] = next;
      changed = true;
    }
  }
  return changed ? React.cloneElement(node, nextProps) : node;
}
`;
}

function cleanupTheme05Source(sourceDir) {
  const componentsDir = path.join(sourceDir, 'components');
  if (!fs.existsSync(componentsDir)) return;
  for (const name of fs.readdirSync(componentsDir)) {
    if (name !== 'esm') fs.rmSync(path.join(componentsDir, name), { recursive: true, force: true });
  }
}

function cleanupTheme06Source(sourceDir) {
  fs.rmSync(path.join(sourceDir, 'index.html'), { force: true });
  fs.rmSync(path.join(sourceDir, 'preview.html'), { force: true });
  fs.rmSync(path.join(sourceDir, 'slides/_preview.jsx'), { force: true });
}

function shouldSkipSourceFile(rel, themeKey) {
  const parts = rel.split(path.sep);
  if (parts.some(part => part.startsWith('.'))) return true;
  if (parts.some(part => MIGRATION_ONLY_DIRS.has(part.toLowerCase()))) return true;
  const base = path.basename(rel);
  if (base === 'audit-offenders.txt') return true;
  if (base.toLowerCase().endsWith('.identifier')) return true;
  if (/\.html$/i.test(base)) return themeKey !== 'theme06';
  if (/\.md$/i.test(base)) return true;
  if (['deck-stage.js', 'tweaks-panel.jsx', 'preview-loader.js', 'preview.jsx', 'DeckApp.jsx', 'Tweaks.jsx', 'ignDemo.jsx'].includes(base)) return true;
  if (base === 'image-slot.js' && themeKey !== 'theme04' && themeKey !== 'theme08') return true;
  if (base === 'app.jsx' || (base === '_preview.jsx' && themeKey !== 'theme06')) return true;
  return false;
}

function patchTheme01Source(sourceDir) {
  const slidesDir = path.join(sourceDir, 'slides');
  const indexFile = path.join(slidesDir, 'index.jsx');
  replaceInFile(indexFile, text => text
    .replace(/import Slide03bTrendGlass[^\n]*\n/, '')
    .replace(/import SlideStaggerCards[^\n]*\n/, '')
    .replace(/import SlideFlowCascade[^\n]*\n/, '')
    .replace(/import SlideTriadOrbit[^\n]*\n/, '')
    .replace(/import SlideIsoBars[^\n]*\n/, '')
    .replace('  Slide03bTrendGlass, Slide13Monthly, Slide14CaseBrief, Slide15Conclusion,\n', '  Slide13Monthly, Slide14CaseBrief, Slide15Conclusion,\n')
    .replace('  SlideStaggerCards, SlideFlowCascade, SlideTriadOrbit,\n', '')
    .replace('  SlideHeatmap, SlideGrowthBars, SlideHeroOverlay, SlideKpiDial, SlideEvilBars, SlideIsoBars,\n', '  SlideHeatmap, SlideGrowthBars, SlideHeroOverlay, SlideKpiDial, SlideEvilBars,\n')
    .replace(/  \{ id: 'trend-glass'[^\n]*\n/, '')
    .replace(/  \{ id: 'flow-chain'[^\n]*\n/, '')
    .replace(/  \{ id: 'four-types'[^\n]*\n/, '')
    .replace(/  \{ id: 'triad'[^\n]*\n/, '')
    .replace(/  \{ id: 'iso-bars'[^\n]*\n/, ''));
  for (const name of [
    'Slide03bTrendGlass.jsx',
    'SlideFlowCascade.jsx',
    'SlideStaggerCards.jsx',
    'SlideTriadOrbit.jsx',
    'SlideIsoBars.jsx',
  ]) {
    fs.rmSync(path.join(slidesDir, name), { force: true });
  }
  replaceInFile(path.join(slidesDir, 'SlideKit.jsx'), text => {
    if (text.includes('onPointerDown: stopSlotNavigation')) return text;
    return text
      .replace(
        '  const hostProps = interactive ? {\n',
        '  const stopSlotNavigation = (e) => { e.stopPropagation(); };\n  const hostProps = interactive ? {\n',
      )
      .replace(
        "    onClick: (e) => { e.stopPropagation(); actions.pick(slot); },\n",
        "    onPointerDown: stopSlotNavigation,\n    onMouseDown: stopSlotNavigation,\n    onClick: (e) => { e.stopPropagation(); actions.pick(slot); },\n    onDoubleClick: stopSlotNavigation,\n    onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); setHover(true); },\n    onDragLeave: () => setHover(false),\n    onDrop: (e) => {\n      e.preventDefault();\n      e.stopPropagation();\n      setHover(false);\n      actions.drop && actions.drop(slot, e.dataTransfer.files && e.dataTransfer.files[0]);\n    },\n",
      );
  });
  replaceInFile(path.join(slidesDir, 'SlideHeroOverlay.jsx'), text => text
    .replace(
      "style={{ position: 'absolute', inset: 0, background:\n            'linear-gradient(75deg",
      "style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background:\n            'linear-gradient(75deg",
    )
    .replace(
      "style={{ position: 'absolute', inset: 0, background:\n            'linear-gradient(0deg",
      "style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background:\n            'linear-gradient(0deg",
    ));
  replaceInFile(path.join(slidesDir, 'SlideImageFeature.jsx'), text => text.replace(
    "<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg",
    "<div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(90deg",
  ));
  replaceInFile(path.join(slidesDir, 'SlideStickerWall.jsx'), text => text.replace(
    /\/\/ SlideStickerWall[^\n]*\n\/\/ design language from uploads\/[^\n]*\n\/\/ black\/white\/fluorescent tones[^\n]*\n/,
    '',
  ));
  replaceInFile(path.join(slidesDir, 'SlideQuote.jsx'), text => text.replace(
    /\/\/ Visual language \(drawn from uploads\/[^\n]*\n\/\/ system [^\n]*\n\/\/ sticker[^\n]*\n/,
    '',
  ));
}

function patchTheme12Source(sourceDir) {
  const baseFile = path.join(sourceDir, 'src/swBase.jsx');
  replaceInFile(baseFile, text => {
    if (text.includes('export function swDeckSection')) return text;
    return text
      .replace(
        'function swRevealTargets(root) {',
        "export function swDeckSection(root) {\n  return root?.closest?.('[data-deck-slide], .slide');\n}\n\nfunction swRevealTargets(root) {",
      )
      .replace(
        "    const section = root.closest('[data-deck-slide]') || root.parentElement;\n    if (!section || !section.hasAttribute || !section.hasAttribute('data-deck-slide')) {",
        '    const section = swDeckSection(root);\n    if (!section) {',
      );
  });

  replaceInFile(path.join(sourceDir, 'src/SwSlideCoverWave.jsx'), text => {
    if (text.includes('swDeckSection')) return text;
    return text
      .replace(
        "import { SlideRoot, Bar, Footer, Hl, renderSwText } from './swBase.jsx';",
        "import { SlideRoot, Bar, Footer, Hl, renderSwText, swDeckSection } from './swBase.jsx';",
      )
      .replace("    const section = root.closest('[data-deck-slide]');", '    const section = swDeckSection(root);');
  });

  replaceInFile(path.join(sourceDir, 'src/SwSlideManifesto.jsx'), text => {
    if (text.includes('swDeckSection')) return text;
    return text
      .replace(
        "import { SlideRoot, Bar, Footer, Kicker, Hl, Shape, renderSwText } from './swBase.jsx';",
        "import { SlideRoot, Bar, Footer, Kicker, Hl, Shape, renderSwText, swDeckSection } from './swBase.jsx';",
      )
      .replace(
        "  const [entered, setEntered] = React.useState(false);\n  React.useEffect(() => { injectCoverAnim(); const t = setTimeout(() => setEntered(true), 40); return () => clearTimeout(t); }, []);",
        "  const rootRef = React.useRef(null);\n  const [entered, setEntered] = React.useState(false);\n  React.useEffect(() => { injectCoverAnim(); }, []);\n  React.useEffect(() => {\n    const root = rootRef.current;\n    if (!root) return;\n    const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;\n    if (reduce) { setEntered(true); return; }\n    const section = swDeckSection(root);\n    if (!section) { const t = setTimeout(() => setEntered(true), 40); return () => clearTimeout(t); }\n    const sync = () => setEntered(section.hasAttribute('data-deck-active'));\n    sync();\n    const mo = new MutationObserver(sync);\n    mo.observe(section, { attributes: true, attributeFilter: ['data-deck-active'] });\n    return () => mo.disconnect();\n  }, []);",
      )
      .replace(
        "    <SlideRoot bg={C.blush} color={C.ink} className={'sw-cover-root' + (entered ? ' is-in' : '')}>",
        "    <SlideRoot bg={C.blush} color={C.ink} className={'sw-cover-root' + (entered ? ' is-in' : '')}>\n      <div ref={rootRef} data-sw-no-reveal=\"\" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />",
      );
  });
}

function patchTheme06Source(sourceDir) {
  replaceInFile(path.join(sourceDir, 'slides/kit.jsx'), text => {
    if (text.includes('const readStored = () =>')) return text;
    return text
      .replace(
        "  const key = 'kx-img-' + id;\n  const [data, setData] = React.useState(null);\n",
        "  const key = 'kx-img-' + id;\n  const readStored = () => {\n    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }\n  };\n  const [data, setData] = React.useState(readStored);\n",
      )
      .replace(
        "  React.useEffect(() => {\n    try { const raw = localStorage.getItem(key); if (raw) setData(JSON.parse(raw)); } catch (e) {}\n  }, [key]);\n",
        "  React.useEffect(() => {\n    setData(readStored());\n  }, [key]);\n",
      )
      .replace(
        '  // adaptive aspect-ratio: container follows the image\'s natural ratio (clamped)\n  const ar = data ? data.ratio : 1.6;\n',
        '  // adaptive aspect-ratio: container follows the image\'s natural ratio (clamped)\n  const stopSlotNavigation = (e) => { e.stopPropagation(); };\n  const currentData = data || readStored();\n  const ar = currentData ? currentData.ratio : 1.6;\n',
      )
      .replace(
        "    onClick: () => inputRef.current && inputRef.current.click(),\n    onDragOver: (e) => { e.preventDefault(); setDrag(true); },\n    onDragLeave: () => setDrag(false),\n    onDrop: (e) => { e.preventDefault(); setDrag(false); accept(e.dataTransfer.files[0]); },\n  },\n    data ? h('img', { src: data.src, alt: '' })\n",
        "    onPointerDown: stopSlotNavigation,\n    onMouseDown: stopSlotNavigation,\n    onClick: (e) => { e.stopPropagation(); inputRef.current && inputRef.current.click(); },\n    onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); setDrag(true); },\n    onDragLeave: () => setDrag(false),\n    onDrop: (e) => { e.preventDefault(); e.stopPropagation(); setDrag(false); accept(e.dataTransfer.files[0]); },\n  },\n    currentData ? h('img', { src: currentData.src, alt: '' })\n",
      );
  });
}

function patchTheme08Source(sourceDir) {
  replaceInFile(path.join(sourceDir, 'components/AclPrimitives.jsx'), text => {
    if (text.includes('const readStored = () =>')) return text;
    return text
      .replace(
        '  const key = \'acl-slot-\' + id;\n  const [data, setData] = React.useState(null);\n',
        '  const key = \'acl-slot-\' + id;\n  const readStored = () => {\n    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : null; } catch (e) { return null; }\n  };\n  const [data, setData] = React.useState(readStored);\n',
      )
      .replace(
        '  React.useEffect(() => {\n    try { const s = localStorage.getItem(key); if (s) setData(JSON.parse(s)); } catch (e) {}\n  }, [key]);\n',
        '  React.useEffect(() => {\n    setData(readStored());\n  }, [key]);\n',
      )
      .replace(
        '  const aspect = data ? data.w / data.h : ratio;\n',
        '  const stopSlotNavigation = (e) => { e.stopPropagation(); };\n  const openPicker = (e) => {\n    e.stopPropagation();\n    inputRef.current && inputRef.current.click();\n  };\n\n  const currentData = data || readStored();\n  const aspect = currentData ? currentData.w / currentData.h : ratio;\n',
      )
      .replace(
        '         style={{ width: w, height: h, transform: `rotate(${rotate}deg)` }}\n         onDragOver={(e) => { e.preventDefault(); setDrag(true); }}\n         onDragLeave={() => setDrag(false)}\n         onDrop={(e) => { e.preventDefault(); setDrag(false);\n',
        '         style={{ width: w, height: h, transform: `rotate(${rotate}deg)` }}\n         onPointerDown={stopSlotNavigation}\n         onMouseDown={stopSlotNavigation}\n         onClick={openPicker}\n         onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setDrag(true); }}\n         onDragLeave={(e) => { e.stopPropagation(); setDrag(false); }}\n         onDrop={(e) => { e.preventDefault(); e.stopPropagation(); setDrag(false);\n',
      )
      .replace(
        '        {data\n          ? <img className="acl-slot__img" src={data.src} alt="" />\n',
        '        {currentData\n          ? <img className="acl-slot__img" src={currentData.src} alt="" />\n',
      )
      .replace(
        '        {data && <div className="acl-slot__hint" onClick={() => save(null)}>清除 ✕</div>}\n',
        '        {currentData && <div className="acl-slot__hint" onClick={(e) => { e.stopPropagation(); save(null); }}>清除 ✕</div>}\n',
      );
  });
}

function replaceInFile(file, replacer) {
  if (!fs.existsSync(file)) return;
  const before = fs.readFileSync(file, 'utf8');
  const after = replacer(before);
  if (after !== before) fs.writeFileSync(file, after);
}

function generateRuntime(theme, sourceDir, themeDir) {
  fs.mkdirSync(themeDir, { recursive: true });
  const layoutPrefix = theme.key.toUpperCase();
  let code;
  if (theme.key === 'theme01') {
    code = registryRuntime(theme, layoutPrefix, './source/slides/index.jsx', 'slides');
  } else if (theme.key === 'theme05') {
    code = theme05Runtime(theme, layoutPrefix, sourceDir);
  } else if (theme.key === 'theme03') {
    code = theme03Runtime(theme, layoutPrefix, sourceDir);
  } else if (theme.key === 'theme12') {
    code = registryRuntime(theme, layoutPrefix, './source/src/index.js', 'swSlides');
  } else if (theme.key === 'theme02') {
    code = theme02Runtime(theme, layoutPrefix, sourceDir);
    code = code
      .replace("emphasis: 'default'", "emphasis: 'ticket'")
      .replace(
        "default: 'default', options: [['default', '默认发光'], ['ticket', '炫光票卡']]",
        "default: 'ticket', options: [['default', '默认发光'], ['ticket', '炫光票卡']]",
      );
  } else if (theme.key === 'theme06') {
    code = theme06Runtime(theme, layoutPrefix, sourceDir);
  } else if (theme.key === 'theme11') {
    code = previewArrayRuntime(theme, layoutPrefix, sourceDir, 'ignDemo.jsx', 'PAGES');
  } else if (theme.key === 'theme04') {
    code = metaArrayRuntime(theme, layoutPrefix, sourceDir, 'app.jsx', 'SLIDES');
  } else if (theme.key === 'theme10') {
    code = theme10Runtime(theme, layoutPrefix, sourceDir);
  } else if (theme.key === 'theme07') {
    code = dataPageRuntime(theme, layoutPrefix, sourceDir, { includeStaticCovers: true });
  } else if (theme.key === 'theme08') {
    code = pageFilesRuntime(theme, layoutPrefix, sourceDir);
  } else if (theme.key === 'theme09') {
    code = slideSpecRuntime(theme, layoutPrefix, sourceDir);
  } else {
    throw new Error(`No runtime generator for ${theme.key}`);
  }
  fs.writeFileSync(path.join(themeDir, 'runtime.jsx'), code);
}

function registryRuntime(theme, layoutPrefix, importPath, exportName) {
  return `import { normalizeRuntimePages } from '../runtime-helpers.jsx';\nimport { ${exportName} as rawPages } from '${importPath}';\n\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n`;
}

function theme06Runtime(theme, layoutPrefix, sourceDir) {
  const baseRuntime = previewArrayRuntime(theme, layoutPrefix, sourceDir, 'slides/_preview.jsx', 'SLIDES', { exportRuntime: false });
  const staticCovers = extractStaticCovers(sourceDir, theme.entry, section => /\bcv\b/.test(section.className));
  const staticCss = extractStaticCoverCss(sourceDir, theme.entry, css => /\bcv\b|--cv-/.test(css));
  return `${baseRuntime}\n${staticHtmlRuntimeBlock(staticCovers, staticCss)}\n\nconst rawPages = [...staticPages, ...sourcePages];\n\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n`;
}

function theme05Runtime(theme, layoutPrefix, sourceDir) {
  const appText = fs.readFileSync(path.join(sourceDir, 'components/pulse-app.jsx'), 'utf8');
  const slides = [...appText.matchAll(/\{\s*id:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["'],\s*Comp:\s*window\.([A-Za-z0-9_]+)\s*\}/g)]
    .map(match => ({ id: match[1], label: match[2], component: match[3] }))
    .filter(slide => fs.existsSync(path.join(sourceDir, 'components/esm', `${slide.component}.jsx`)));
  const importLines = slides.map((slide, index) => `import * as M${index} from './source/components/esm/${slide.component}.jsx';`);
  const items = slides.map((slide, index) => `  { id: '${slide.id}', label: ${JSON.stringify(slide.label)}, module: M${index} }`);
  const css = [
    fs.readFileSync(path.join(sourceDir, 'styles/pulse-deck.css'), 'utf8'),
    fs.readFileSync(path.join(sourceDir, 'styles/exc-covers.css'), 'utf8'),
  ].join('\n');
  return `import React from 'react';\nimport { normalizeRuntimePages } from '../runtime-helpers.jsx';\n${importLines.join('\n')}\n\nconst THEME05_BASE_CSS = ${JSON.stringify(css)};\nconst modules = [\n${items.join(',\n')}\n];\n\nconst rawPages = modules.map(entry => ({\n  id: entry.id,\n  label: entry.label,\n  Component: withTheme05Base(entry.module.default),\n  controls: entry.module.controls || entry.module.default?.controls || [],\n  defaultProps: entry.module.defaults || entry.module.defaultProps || entry.module.default?.defaults || {},\n}));\n\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n\nfunction withTheme05Base(Component) {\n  return function Theme05Page(props) {\n    return React.createElement(\n      React.Fragment,\n      null,\n      React.createElement('style', null, THEME05_BASE_CSS),\n      React.createElement(Component, props),\n    );\n  };\n}\n`;
}

function theme03Runtime(theme, layoutPrefix, sourceDir) {
  const css = fs.readFileSync(path.join(sourceDir, 'src/theme.css'), 'utf8');
  const forceDarkCss = `
body.rd-force-dark .rd-slide,
.theme03-force-dark .rd-slide { --rd-bg:#161513; --rd-ink:#f3f2ee; --rd-ink-2:#b8b6b0; --rd-ink-3:#84827c; --rd-line:rgba(243,242,238,0.22); --rd-line-2:rgba(243,242,238,0.10); --rd-panel:#f3f2ee; }
body.rd-force-dark .rd-slide .rd-tag--lime,
.theme03-force-dark .rd-slide .rd-tag--lime { color:#161513; }
.theme03-theme-shell { position:absolute; inset:0; width:100%; height:100%; }
.theme03-theme-toggle { position:fixed; top:calc(var(--deck-top, 0px) + 22px); left:calc(var(--deck-left, 0px) + var(--deck-w, 100vw) - 78px); right:auto; z-index:23; width:56px; height:56px; padding:0; display:inline-flex; align-items:center; justify-content:center; background:#2742ec; color:#f3f5ff; border:2px solid #161513; border-radius:0; cursor:pointer; box-shadow:4px 4px 0 rgba(22,21,19,.85); transition:transform .12s ease, box-shadow .12s ease, background .15s ease; }
body.overview-on .theme03-theme-toggle,
body.exporting-deck .theme03-theme-toggle { display:none!important; pointer-events:none!important; }
.theme03-theme-toggle:hover { transform:translate(-1px,-1px); box-shadow:5px 5px 0 rgba(22,21,19,.85); }
.theme03-theme-toggle:active { transform:translate(2px,2px); box-shadow:1px 1px 0 rgba(22,21,19,.85); }
body.rd-force-dark .theme03-theme-toggle { background:#c2f53d; color:#161513; border-color:#f3f2ee; box-shadow:4px 4px 0 rgba(243,242,238,.35); }
body.rd-force-dark .theme03-theme-toggle:hover { box-shadow:5px 5px 0 rgba(243,242,238,.35); }
.theme03-theme-toggle svg { width:24px; height:24px; display:block; }
.theme03-theme-toggle .ic-sun { display:none; }
body.rd-force-dark .theme03-theme-toggle .ic-moon { display:none; }
body.rd-force-dark .theme03-theme-toggle .ic-sun { display:block; }
::view-transition-old(root),
::view-transition-new(root) { animation:none; mix-blend-mode:normal; }
html[data-theme-vt="active"]::view-transition-group(root) { animation-duration:var(--theme-vt-dur, 550ms); }
`;
  return `import React from 'react';
import { normalizeRuntimePages } from '../runtime-helpers.jsx';
import { SLIDES as sourcePages } from './source/src/registry.js';
import { setRDDark } from './source/src/theme.js';

const THEME03_BASE_CSS = ${JSON.stringify(css)};
const THEME03_FORCE_DARK_CSS = ${JSON.stringify(forceDarkCss)};
const THEME03_FORCE_DARK_CONTROL = {
  key: 'forceDark',
  type: 'toggle',
  label: '全局深色',
  default: true,
  description: '复刻 Claude Design 右上角深浅配色切换。',
};
let theme03GlobalDark = null;
const theme03GlobalListeners = new Set();

const rawPages = sourcePages.map(entry => ({
  ...entry,
  Component: withTheme03Base(entry.Component),
  controls: [THEME03_FORCE_DARK_CONTROL, ...(entry.controls || [])],
  defaultProps: { ...(entry.defaultProps || entry.defaults || {}), forceDark: true },
}));

export const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });

function withTheme03Base(Component) {
  return function Theme03Page(props = {}) {
    const { forceDark = true, ...componentProps } = props;
    const [dark, setDark] = React.useState(() => theme03ReadInitialDark(forceDark !== false));
    const mountedRef = React.useRef(false);

    React.useEffect(() => {
      const listener = next => setDark(next);
      theme03GlobalListeners.add(listener);
      return () => theme03GlobalListeners.delete(listener);
    }, []);

    React.useEffect(() => {
      if (!mountedRef.current) {
        mountedRef.current = true;
        return;
      }
      theme03SetGlobalDark(forceDark !== false);
    }, [forceDark]);

    setRDDark(dark);

    return React.createElement(
      React.Fragment,
      null,
      React.createElement('style', null, THEME03_BASE_CSS),
      React.createElement('style', null, THEME03_FORCE_DARK_CSS),
      React.createElement(
        'div',
        { className: 'theme03-theme-shell' + (dark ? ' theme03-force-dark' : '') },
        React.createElement(Component, componentProps),
        React.createElement(Theme03GlobalToggle),
      ),
    );
  };
}

function Theme03GlobalToggle() {
  React.useEffect(() => {
    theme03ToggleMounts += 1;
    theme03EnsureToggleButton();
    theme03SyncToggleButton();
    return () => {
      theme03ToggleMounts -= 1;
      if (theme03ToggleMounts <= 0) theme03RemoveToggleButton();
    };
  }, []);
  return null;
}

let theme03ToggleButton = null;
let theme03ToggleMounts = 0;
let theme03ToggleObserver = null;
let theme03ToggleEventsBound = false;

function theme03ShouldShowToggle() {
  if (typeof document === 'undefined') return false;
  if (document.body?.classList.contains('overview-on') || document.body?.classList.contains('exporting-deck')) return false;
  try {
    const options = JSON.parse(document.getElementById('preview-options')?.textContent || '{}');
    const activeThemePack = document.documentElement.dataset.themePack;
    const activeSlide = document.querySelector('[data-theme-pack="theme03"][data-deck-active]');
    return Boolean(options.themePacks?.theme03 && (activeThemePack === 'theme03' || activeSlide));
  } catch {
    return false;
  }
}

function theme03ReadInitialDark(fallback) {
  if (theme03GlobalDark !== null) return theme03GlobalDark;
  theme03GlobalDark = fallback;
  try {
    const stored = window.localStorage.getItem('rd-theme');
    if (stored === 'light') theme03GlobalDark = false;
    if (stored === 'dark') theme03GlobalDark = true;
  } catch {}
  setRDDark(theme03GlobalDark);
  theme03ApplyBodyDarkClass(theme03GlobalDark);
  return theme03GlobalDark;
}

function theme03ToggleDark(next, button) {
  const run = () => theme03SetGlobalDark(next);
  if (!button || typeof document === 'undefined' || document.hidden || typeof document.startViewTransition !== 'function') { run(); return; }
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const maxR = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const clip = ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + maxR + 'px at ' + x + 'px ' + y + 'px)'];
  const root = document.documentElement;
  root.dataset.themeVt = 'active';
  root.style.setProperty('--theme-vt-dur', '550ms');
  const cleanup = () => {
    delete root.dataset.themeVt;
    root.style.removeProperty('--theme-vt-dur');
  };
  let transition;
  try { transition = document.startViewTransition(run); }
  catch { run(); cleanup(); return; }
  if (transition.finished && transition.finished.then) {
    transition.finished.then(cleanup, () => { run(); cleanup(); });
  } else {
    cleanup();
  }
  if (transition.ready && transition.ready.then) {
    transition.ready.then(() => {
      document.documentElement.animate({ clipPath: clip }, {
        duration: 550,
        easing: 'ease-in-out',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      });
    }, () => {});
  }
}

function theme03SetGlobalDark(next) {
  theme03GlobalDark = Boolean(next);
  setRDDark(theme03GlobalDark);
  theme03ApplyBodyDarkClass(theme03GlobalDark);
  try {
    window.localStorage.setItem('rd-theme', theme03GlobalDark ? 'dark' : 'light');
  } catch {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('rd-themechange', { detail: { dark: theme03GlobalDark } }));
  }
  theme03GlobalListeners.forEach(listener => listener(theme03GlobalDark));
  theme03SyncToggleButton();
}

function theme03ApplyBodyDarkClass(dark) {
  if (typeof document === 'undefined') return;
  document.body?.classList.toggle('rd-force-dark', Boolean(dark));
}

function theme03EnsureToggleButton() {
  if (typeof document === 'undefined' || theme03ToggleButton) return theme03ToggleButton;
  const button = document.createElement('button');
  button.id = 'theme-toggle';
  button.type = 'button';
  button.className = 'theme03-theme-toggle';
  button.setAttribute('aria-label', '切换深浅主题');
  button.title = '切换深浅主题';
  button.innerHTML = '<svg class="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path></svg><svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"></path></svg>';
  button.addEventListener('click', theme03ToggleButtonClick);
  document.body.appendChild(button);
  theme03ToggleButton = button;
  theme03BindToggleVisibilityEvents();
  return button;
}

function theme03ToggleButtonClick(event) {
  event.stopPropagation();
  theme03ToggleDark(!theme03GlobalDark, theme03ToggleButton);
}

function theme03SyncToggleButton() {
  if (!theme03ToggleButton) return;
  const visible = theme03ShouldShowToggle();
  theme03ToggleButton.hidden = !visible;
  theme03ToggleButton.style.display = visible ? 'inline-flex' : 'none';
  theme03ToggleButton.setAttribute('aria-pressed', String(Boolean(theme03GlobalDark)));
  theme03ApplyBodyDarkClass(theme03GlobalDark);
}

function theme03BindToggleVisibilityEvents() {
  if (theme03ToggleEventsBound || typeof window === 'undefined') return;
  theme03ToggleEventsBound = true;
  window.addEventListener('swiss-slide-change', theme03SyncToggleButton);
  window.addEventListener('storage', theme03SyncToggleButton);
  if (typeof MutationObserver !== 'undefined') {
    theme03ToggleObserver = new MutationObserver(theme03SyncToggleButton);
    theme03ToggleObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme-pack'] });
  }
}

function theme03RemoveToggleButton() {
  if (!theme03ToggleButton) return;
  theme03ToggleButton.removeEventListener('click', theme03ToggleButtonClick);
  theme03ToggleButton.remove();
  theme03ToggleButton = null;
  if (theme03ToggleObserver) {
    theme03ToggleObserver.disconnect();
    theme03ToggleObserver = null;
  }
  if (theme03ToggleEventsBound && typeof window !== 'undefined') {
    window.removeEventListener('swiss-slide-change', theme03SyncToggleButton);
    window.removeEventListener('storage', theme03SyncToggleButton);
    theme03ToggleEventsBound = false;
  }
}
`;
}

function previewArrayRuntime(theme, layoutPrefix, sourceDir, sourceFile, arrayName, options = {}) {
  const abs = path.join(sourceDir, sourceFile);
  const text = fs.readFileSync(abs, 'utf8');
  const arrayLiteral = extractArrayLiteral(text, arrayName);
  const importLines = extractAdjustedImports(text, path.dirname(sourceFile));
  const pagesName = options.exportRuntime === false ? 'sourcePages' : 'rawPages';
  const exportLine = options.exportRuntime === false
    ? ''
    : `\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n`;
  return `import React from 'react';\nimport { normalizeRuntimePages } from '../runtime-helpers.jsx';\n${importLines.join('\n')}\n\nconst ${pagesName} = ${arrayLiteral};\n${exportLine}`;
}

function theme02Runtime(theme, layoutPrefix, sourceDir) {
  const sourceFile = 'src/preview/app.jsx';
  const abs = path.join(sourceDir, sourceFile);
  const text = fs.readFileSync(abs, 'utf8');
  const arrayLiteral = extractArrayLiteral(text, 'SLIDES');
  const importLines = extractAdjustedImports(text, path.dirname(sourceFile));
  return `import React from 'react';\nimport { normalizeRuntimePages } from '../runtime-helpers.jsx';\n${importLines.join('\n')}\n\nconst THEME02_DECK_DEFAULTS = {\n  scheme: 'green',\n  emphasis: 'default',\n  breath: 55,\n  magnet: true,\n  aurora: true,\n  auroraSpeed: 1,\n};\n\nconst THEME02_DECK_CONTROLS = [\n  { key: 'scheme', type: 'enum', label: '配色方案', default: 'green', options: [['green', '霓虹绿'], ['violet', '炫光紫']], desc: '切换整页炫光配色。' },\n  { key: 'emphasis', type: 'enum', label: '强调卡片', default: 'default', options: [['default', '默认发光'], ['ticket', '炫光票卡']], desc: '切换焦点卡片的发光质感。' },\n  { key: 'breath', type: 'slider', label: '内光呼吸感', default: 55, min: 0, max: 100, step: 1, desc: '炫光票卡模式下的内光呼吸强度。' },\n  { key: 'magnet', type: 'toggle', label: '磁吸悬停', default: true, desc: '焦点卡片跟随指针产生轻微位移和倾斜。' },\n  { key: 'aurora', type: 'toggle', label: '渐变流光', default: true, desc: '开启标题、数字和图表重点元素的流光渐变。' },\n  { key: 'auroraSpeed', type: 'slider', label: '流光速度', default: 1, min: 0.4, max: 3, step: 0.1, desc: '流光动画速度。' },\n];\n\nconst sourcePages = ${arrayLiteral};\nconst rawPages = sourcePages.map((entry, index) => ({\n  ...entry,\n  Comp: withTheme02Deck(entry.Comp),\n  controls: [...THEME02_DECK_CONTROLS, ...(entry.controls || [])],\n  defaults: {\n    ...(entry.defaults || {}),\n    ...THEME02_DECK_DEFAULTS,\n    index: index === 0 ? null : String(index).padStart(2, '0') + ' / ' + (sourcePages.length - 1),\n  },\n}));\n\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n\nfunction theme02SchemeProps(deck) {\n  const selected = GXN_SCHEMES[deck.scheme] || GXN_SCHEMES.green;\n  return {\n    ...(selected.chart || {}),\n    palette: selected.palette,\n    aurora: deck.aurora ? selected.aurora : null,\n    auroraSpeed: deck.auroraSpeed,\n  };\n}\n\nfunction scopedDeckCss(css, scopeClass) {\n  return css.replaceAll('.gxn-theme', '.' + scopeClass + ' .gxn-theme');\n}\n\nfunction withTheme02Deck(Component) {\n  return function Theme02Page(props = {}) {\n    const {\n      scheme = THEME02_DECK_DEFAULTS.scheme,\n      emphasis = THEME02_DECK_DEFAULTS.emphasis,\n      breath = THEME02_DECK_DEFAULTS.breath,\n      magnet = THEME02_DECK_DEFAULTS.magnet,\n      aurora = THEME02_DECK_DEFAULTS.aurora,\n      auroraSpeed = THEME02_DECK_DEFAULTS.auroraSpeed,\n      gxnScheme,\n      ...componentProps\n    } = props;\n    const deck = {\n      scheme: scheme === 'violet' ? 'violet' : 'green',\n      emphasis: emphasis === 'ticket' ? 'ticket' : 'default',\n      breath,\n      magnet: magnet !== false,\n      aurora: aurora !== false,\n      auroraSpeed,\n    };\n    const scopeClass = 'theme02-deck-scope-' + deck.scheme;\n    const rootRef = React.useRef(null);\n    React.useEffect(() => {\n      if (deck.magnet === false) return undefined;\n      const root = rootRef.current;\n      if (!root) return undefined;\n      const reach = 210;\n      const pull = 0.22;\n      const maxShift = 30;\n      const maxTilt = 6.5;\n      const clamp = (value, max) => Math.max(-max, Math.min(max, value));\n      let mx = 0;\n      let my = 0;\n      let hasPointer = false;\n      let pending = false;\n      const apply = () => {\n        pending = false;\n        root.querySelectorAll('.gxn-panel.is-focus').forEach(card => {\n          const active = card.closest('[data-deck-active]');\n          const slide = card.closest('.gxn-slide');\n          const rect = card.getBoundingClientRect();\n          let tx = 0;\n          let ty = 0;\n          let rx = 0;\n          let ry = 0;\n          if (hasPointer && active && slide && rect.width) {\n            const scale = slide.getBoundingClientRect().width / slide.offsetWidth || 1;\n            const cx = rect.left + rect.width / 2;\n            const cy = rect.top + rect.height / 2;\n            const dx = mx - cx;\n            const dy = my - cy;\n            const dist = Math.hypot(dx, dy);\n            const influence = Math.max(rect.width, rect.height) / 2 + reach;\n            if (dist < influence) {\n              const factor = 1 - dist / influence;\n              tx = clamp((dx * pull * factor) / scale, maxShift);\n              ty = clamp((dy * pull * factor) / scale, maxShift);\n              ry = clamp((dx / (rect.width / 2)) * maxTilt * factor, maxTilt);\n              rx = clamp((-dy / (rect.height / 2)) * maxTilt * factor, maxTilt);\n            }\n          }\n          card.style.setProperty('--gxn-mx', tx.toFixed(2) + 'px');\n          card.style.setProperty('--gxn-my', ty.toFixed(2) + 'px');\n          card.style.setProperty('--gxn-rx', rx.toFixed(2) + 'deg');\n          card.style.setProperty('--gxn-ry', ry.toFixed(2) + 'deg');\n        });\n      };\n      const schedule = () => {\n        if (!pending) {\n          pending = true;\n          requestAnimationFrame(apply);\n        }\n      };\n      const onMove = event => {\n        mx = event.clientX;\n        my = event.clientY;\n        hasPointer = true;\n        schedule();\n      };\n      const onLeave = () => {\n        hasPointer = false;\n        schedule();\n      };\n      window.addEventListener('pointermove', onMove, { passive: true });\n      window.addEventListener('blur', onLeave);\n      document.addEventListener('mouseleave', onLeave);\n      return () => {\n        window.removeEventListener('pointermove', onMove);\n        window.removeEventListener('blur', onLeave);\n        document.removeEventListener('mouseleave', onLeave);\n        root.querySelectorAll('.gxn-panel.is-focus').forEach(card => {\n          ['--gxn-mx', '--gxn-my', '--gxn-rx', '--gxn-ry'].forEach(prop => card.style.removeProperty(prop));\n        });\n      };\n    }, [deck.magnet]);\n    const css = scopedDeckCss(deckOverrideCSS(deck), scopeClass);\n    return React.createElement(\n      React.Fragment,\n      null,\n      React.createElement('style', null, css),\n      React.createElement(\n        'div',\n        { ref: rootRef, className: scopeClass, style: { position: 'absolute', inset: 0, width: '100%', height: '100%' } },\n        React.createElement(Component, { ...componentProps, gxnScheme: gxnScheme || theme02SchemeProps(deck) }),\n      ),\n    );\n  };\n}\n`;
}

function metaArrayRuntime(theme, layoutPrefix, sourceDir, sourceFile, arrayName) {
  const abs = path.join(sourceDir, sourceFile);
  const text = fs.readFileSync(abs, 'utf8');
  const arrayLiteral = extractArrayLiteral(text, arrayName);
  const importLines = text
    .split('\n')
    .filter(line => /^import\s+\{\s*meta\s+as\s+/.test(line))
    .map(line => line.replace(/from ['"]\.\/([^'"]+)['"];/, "from './source/$1';"));
  return `import React from 'react';\nimport { normalizeRuntimePages } from '../runtime-helpers.jsx';\nimport './source/image-slot.js';\n${importLines.join('\n')}\n\nconst THEME04_BASE_CSS = ${JSON.stringify(theme04BaseCss())};\nconst rawPages = ${arrayLiteral}.map(entry => ({\n  ...entry,\n  Component: withTheme04Base(entry.Component),\n}));\n\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n\nfunction withTheme04Base(Component) {\n  return function Theme04Page(props) {\n    return React.createElement(\n      React.Fragment,\n      null,\n      React.createElement('style', null, THEME04_BASE_CSS),\n      React.createElement(Component, props),\n    );\n  };\n}\n`;
}

function theme04BaseCss() {
  return `.xhs-base{width:1920px;height:1080px;position:relative;overflow:hidden;box-sizing:border-box;font-family:"Noto Sans SC",-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;background:#000;color:#fff;-webkit-font-smoothing:antialiased}.xhs-base *{box-sizing:border-box}`;
}

function theme10Runtime(theme, layoutPrefix, sourceDir) {
  const appText = fs.readFileSync(path.join(sourceDir, 'app.jsx'), 'utf8');
  const html = fs.readFileSync(path.join(sourceDir, theme.entry), 'utf8');
  const arrayLiteral = extractArrayLiteral(appText, 'SLIDES');
  const importLines = appText
    .split('\n')
    .filter(line => /^import\s+\{\s*Slide/.test(line))
    .map(line => line.replace(/from ['"]\.\/([^'"]+)['"];/, "from './source/$1';"));
  const labels = [...html.matchAll(/<section\b[^>]*data-label=["']([^"']*)["']/g)].map(match => match[1]);
  return `import React from 'react';\nimport { normalizeRuntimePages } from '../runtime-helpers.jsx';\n${importLines.join('\n')}\n\nconst THEME10_BASE_CSS = ${JSON.stringify(theme10BaseCss(sourceDir, theme.entry))};\nconst THEMED = new Set(['coverdusk', 'coverfield', 'coveratmostype', 'coverhorizon', 'coverdawn', 'cover', 'chapter', 'sectionstatement', 'quote', 'imagequote', 'fullimg', 'statement', 'bigstat', 'closing', 'showcase', 'poster', 'megafigure', 'divider']);\nconst TONE_DEFAULTS = { ledger: 'light', plans: 'light', principles: 'light', spark: 'light', journey: 'light', capmatrix: 'light', funnel: 'light', checklist: 'light', grouped: 'light', swimlane: 'light', schedule: 'light', pyramid: 'light', glossary: 'light', spectrum: 'light', allocation: 'light', bullet: 'light', team: 'light', steps: 'light', editorial: 'light', magazine: 'light', feature: 'light', faq: 'light', heatmap: 'light', exhibit: 'light', dumbbell: 'light', slope: 'light', curve: 'light', waterfall: 'light', gantt: 'light', ranking: 'light', calendar: 'light', radar: 'light', meter: 'light', mosaic: 'light', cartogram: 'light', board: 'light' };\nconst TONE_CONTROL = { key: 'tone', type: 'radio', label: '页面底色', default: 'dark', options: [['dark', '深色'], ['light', '浅色']], description: '整页深色或浅色底。' };\nconst SECTION_LABELS = ${JSON.stringify(labels, null, 2)};\nconst SLIDES = ${arrayLiteral};\n\nconst rawPages = SLIDES.map((entry, index) => {\n  const meta = entry.C?.META || {};\n  const themed = THEMED.has(entry.id);\n  const tone = TONE_DEFAULTS[entry.id] || 'dark';\n  return {\n    id: entry.id || meta.id,\n    label: SECTION_LABELS[index] || meta.title || entry.id || meta.id,\n    Component: withTheme10Base(entry.C),\n    controls: themed ? (meta.controls || []) : [{ ...TONE_CONTROL, default: tone }, ...(meta.controls || [])],\n    defaultProps: {\n      ...(meta.defaults || {}),\n      ...(entry.content || {}),\n      idPrefix: entry.id,\n      ...(themed ? {} : { tone }),\n    },\n  };\n});\n\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n\nfunction withTheme10Base(Component) {\n  return function Theme10Page(props = {}) {\n    const { tone, ...componentProps } = props;\n    return React.createElement(\n      React.Fragment,\n      null,\n      React.createElement('style', null, THEME10_BASE_CSS),\n      React.createElement(\n        'div',\n        { className: 'ds-slidewrap deck-theme' + (tone === 'light' ? ' tone-light' : '') },\n        React.createElement(Component, componentProps),\n      ),\n    );\n  };\n}\n`;
}

function theme10BaseCss(sourceDir, entry) {
  const html = fs.readFileSync(path.join(sourceDir, entry), 'utf8');
  const style = /<style>([\s\S]*?)<\/style>/.exec(html)?.[1] || '';
  const motionStart = style.indexOf('@keyframes ds-rise');
  const start = style.indexOf('.deck-theme{');
  const end = style.indexOf('  html,body');
  const motion = motionStart >= 0
    ? style.slice(motionStart).replaceAll('section[data-deck-active]', '[data-deck-active]')
    : '';
  const scoped = start >= 0 && end > start ? style.slice(start, end) : '';
  return `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500&family=Noto+Sans+SC:wght@300;400;500&display=swap');\n.deck-theme,.deck-theme *{box-sizing:border-box;}\n${motion}\n${scoped.replace('  *{box-sizing:border-box;}', '')}`;
}

function dataPageRuntime(theme, layoutPrefix, sourceDir, options = {}) {
  const html = fs.readFileSync(path.join(sourceDir, theme.entry), 'utf8');
  const seen = new Map();
  const sections = extractHtmlSections(html);
  sections.forEach((section, index) => {
    const dataPage = firstAttr(section.innerHtml, 'data-page');
    if (!dataPage || !section.label) return;
    if (!seen.has(dataPage)) {
      seen.set(dataPage, { dataPage, label: section.label || dataPage, index });
    }
  });
  const pages = [...seen.values()].filter(page => fs.existsSync(path.join(sourceDir, 'src/pages', `${page.dataPage}.jsx`)));
  const imports = pages.map((page, index) => `import * as M${index} from './source/src/pages/${page.dataPage}.jsx';`);
  const items = pages.map((page, index) => `  { id: '${slug(page.dataPage)}', label: ${JSON.stringify(page.label)}, module: M${index} }`);
  const staticCovers = options.includeStaticCovers
    ? extractStaticCovers(sourceDir, theme.entry, section => Boolean(section.label) && !/data-page=/.test(section.html))
    : [];
  const staticCss = staticCovers.length
    ? extractStaticCoverCss(sourceDir, theme.entry, css => /\.cvpack|cover-slide/.test(css))
    : '';
  return `import React from 'react';\nimport { normalizeRuntimePages } from '../runtime-helpers.jsx';\n${imports.join('\n')}\n\nconst modules = [\n${items.join(',\n')}\n];\n\nconst dynamicPages = modules.map(entry => ({\n  id: entry.id,\n  label: entry.label,\n  Component: entry.module.default,\n  controls: entry.module.controls || entry.module.default?.controls || [],\n  defaultProps: entry.module.defaultProps || entry.module.defaults || entry.module.default?.defaultProps || entry.module.default?.defaults || {},\n}));\n\n${staticHtmlRuntimeBlock(staticCovers, staticCss)}\n\nconst rawPages = [...staticPages, ...dynamicPages];\n\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n`;
}

function staticHtmlRuntimeBlock(staticCovers, css) {
  return `const STATIC_HTML_CSS = ${JSON.stringify(css)};\nconst staticCoverData = ${JSON.stringify(staticCovers, null, 2)};\n\nconst staticPages = staticCoverData.map(entry => ({\n  id: entry.id,\n  label: entry.label,\n  staticHtml: true,\n  Component: makeStaticHtmlComponent(entry),\n}));\n\nfunction makeStaticHtmlComponent(entry) {\n  return function StaticHtmlPage() {\n    return React.createElement(\n      React.Fragment,\n      null,\n      STATIC_HTML_CSS ? React.createElement('style', null, STATIC_HTML_CSS) : null,\n      React.createElement('div', {\n        className: ['imported-static-cover', entry.className].filter(Boolean).join(' '),\n        style: { position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' },\n        dangerouslySetInnerHTML: { __html: entry.innerHtml },\n      }),\n    );\n  };\n}`;
}

function pageFilesRuntime(theme, layoutPrefix, sourceDir) {
  const html = fs.readFileSync(path.join(sourceDir, theme.entry), 'utf8');
  const files = extractStringArrayAfter(html, 'PAGE_FILES');
  const labels = [...html.matchAll(/\{\s*key:\s*['"]([^'"]+)['"],\s*label:\s*['"]([^'"]+)['"]/g)]
    .map(match => ({ key: match[1], label: match[2] }));
  const imports = [
    "import React from 'react';",
    fs.existsSync(path.join(sourceDir, 'image-slot.js')) ? "import './source/image-slot.js';" : '',
    "import { AclTheme } from './source/components/AclPrimitives.jsx';",
    ...files.map((file, index) => `import * as M${index} from './source/${file}';`),
  ].filter(Boolean);
  const items = files.map((file, index) => {
    const meta = labels[index] || { key: `p${index + 1}`, label: path.basename(file, '.jsx') };
    return `  { id: '${meta.key}', label: ${JSON.stringify(meta.label)}, module: M${index} }`;
  });
  return `import { normalizeRuntimePages } from '../runtime-helpers.jsx';\n${imports.join('\n')}\n\nconst modules = [\n${items.join(',\n')}\n];\n\nconst rawPages = modules.map(entry => ({\n  id: entry.id,\n  label: entry.label,\n  Component: withAclTheme(entry.module.default),\n  controls: entry.module.controls || entry.module.default?.controls || [],\n  defaultProps: entry.module.defaults || entry.module.defaultProps || entry.module.default?.defaults || {},\n}));\n\nexport const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });\n\nfunction withAclTheme(Component) {\n  return function Theme08Page(props) {\n    return React.createElement(\n      React.Fragment,\n      null,\n      React.createElement(AclTheme),\n      React.createElement(Component, props),\n    );\n  };\n}\n`;
}

function slideSpecRuntime(theme, layoutPrefix, sourceDir) {
  const appText = fs.readFileSync(path.join(sourceDir, 'slides/app.jsx'), 'utf8');
  const html = fs.readFileSync(path.join(sourceDir, theme.entry), 'utf8');
  const importLines = appText
    .split('\n')
    .filter(line => /^import \* as M_/.test(line))
    .map(line => line.replace(/from ['"]\.\/([^'"]+)['"];/, "from './source/slides/$1';"));
  const modulesLiteral = extractArrayLiteral(appText, 'MODULES');
  const sections = [...html.matchAll(/<section\b[^>]*data-label=["']([^"']*)["'][^>]*id=["']slot-([^"']+)["'][^>]*class=["']([^"']*)["']/g)]
    .map(match => ({ label: match[1], slot: match[2], bgClass: match[3] || '' }));
  return `import React from 'react';
import { normalizeRuntimePages } from '../runtime-helpers.jsx';
${importLines.join('\n')}

const MODULES = ${modulesLiteral};
const REGISTRY = {};
MODULES.forEach(module => {
  if (module?.slideSpec) REGISTRY[module.slideSpec.slot] = { Component: module.default, spec: module.slideSpec };
});
const ORDERED = ${JSON.stringify(sections, null, 2)};
const rawPages = ORDERED.map(section => {
  const entry = REGISTRY[section.slot];
  if (!entry) return null;
  return {
    id: section.slot,
    label: section.label,
    bgClass: section.bgClass,
    Component: withDkScope(entry.Component),
    spec: entry.spec,
    controls: entry.spec.controls || [],
    defaultProps: defaultsFromSpec(entry.spec),
  };
}).filter(Boolean);

export const runtimePages = normalizeRuntimePages(rawPages, { themeKey: '${theme.key}', layoutPrefix: '${layoutPrefix}' });

function defaultsFromSpec(spec) {
  const defaults = { ...(spec.defaults || {}) };
  (spec.controls || []).forEach(control => {
    const key = control.prop || control.key;
    if (!key || control.type === 'labelType' || control.type === 'focus') return;
    if (defaults[key] !== undefined) return;
    defaults[key] = typeof control.default === 'function' ? undefined : control.default;
  });
  return defaults;
}

function withDkScope(Component) {
  return function Theme09Page(props = {}) {
    const activeRef = React.useRef(null);
    React.useEffect(() => {
      const activeRoot = activeRef.current;
      if (!activeRoot) return;
      const section = activeRoot.closest('[data-deck-slide], .slide');
      if (!section) {
        activeRoot.setAttribute('data-deck-active', '');
        return;
      }
      const sync = () => {
        if (section.hasAttribute('data-deck-active')) activeRoot.setAttribute('data-deck-active', '');
        else activeRoot.removeAttribute('data-deck-active');
      };
      sync();
      const observer = new MutationObserver(sync);
      observer.observe(section, { attributes: true, attributeFilter: ['data-deck-active'] });
      return () => observer.disconnect();
    }, []);
    return React.createElement(
      'div',
      { className: 'dk-scope', style: { position: 'absolute', inset: 0, width: '100%', height: '100%' } },
      React.createElement(
        'div',
        { ref: activeRef, style: { position: 'absolute', inset: 0, width: '100%', height: '100%' } },
        React.createElement(Component, props),
      ),
    );
  };
}
`;
}

function extractAdjustedImports(text, sourceFileDir) {
  return text
    .split('\n')
    .filter(line => /^import\s/.test(line) && !line.includes('react') && !line.includes('react-dom') && !line.includes('tweaks') && !line.includes('controls.jsx'))
    .map(line => line.replace(/from ['"]([^'"]+)['"];/, (_, importPath) => {
      if (!importPath.startsWith('.')) return `from '${importPath}';`;
      const resolved = path.posix.normalize(path.posix.join(sourceFileDir.replaceAll(path.sep, '/'), importPath));
      return `from './source/${resolved}';`;
    }));
}

function extractArrayLiteral(text, name) {
  const marker = `${name} = [`;
  let start = text.indexOf(`const ${marker}`);
  if (start < 0) start = text.indexOf(`export const ${marker}`);
  if (start < 0) throw new Error(`Cannot find array ${name}`);
  const bracketStart = text.indexOf('[', start);
  let depth = 0;
  let inString = null;
  let escaped = false;
  for (let i = bracketStart; i < text.length; i += 1) {
    const ch = text[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === inString) inString = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      continue;
    }
    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) return text.slice(bracketStart, i + 1);
    }
  }
  throw new Error(`Unclosed array ${name}`);
}

function extractStringArrayAfter(text, name) {
  const arrayLiteral = extractArrayLiteral(text, name);
  return [...arrayLiteral.matchAll(/['"]([^'"]+\.jsx)['"]/g)].map(match => match[1]);
}

function extractStaticCovers(sourceDir, entry, predicate) {
  const html = fs.readFileSync(path.join(sourceDir, entry), 'utf8');
  return extractHtmlSections(html)
    .filter(predicate)
    .map((section, index) => ({
      id: `static-cover-${String(index + 1).padStart(2, '0')}`,
      label: section.label || `静态封面 ${index + 1}`,
      className: section.className,
      innerHtml: section.innerHtml,
    }));
}

function extractStaticCoverCss(sourceDir, entry, predicate) {
  const html = fs.readFileSync(path.join(sourceDir, entry), 'utf8');
  const imports = extractStylesheetImports(html);
  const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map(match => match[1])
    .filter(predicate)
    .join('\n')
    .replaceAll(/deck-stage\s*>\s*section/g, '.imported-static-cover');
  const base = '.imported-static-cover{box-sizing:border-box}.imported-static-cover *{box-sizing:border-box}';
  return [...imports, base, css].join('\n');
}

function extractStylesheetImports(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)]
    .map(match => match[0])
    .filter(tag => /rel=["']stylesheet["']/i.test(tag))
    .map(tag => firstAttr(tag, 'href'))
    .filter(Boolean)
    .map(href => `@import url(${JSON.stringify(href)});`);
}

function extractHtmlSections(html) {
  return [...html.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi)].map(match => {
    const attrs = match[1] || '';
    const html = match[0];
    return {
      attrs,
      html,
      innerHtml: match[2] || '',
      className: firstAttr(attrs, 'class') || '',
      label: firstAttr(attrs, 'data-screen-label') || firstAttr(attrs, 'data-label') || '',
    };
  });
}

function firstAttr(text, name) {
  const match = new RegExp(`${name}=["']([^"']*)["']`, 'i').exec(text);
  return match?.[1] || '';
}

function serializePages(runtimePages, theme) {
  return runtimePages.map(page => ({
    key: page.key,
    themeKey: page.themeKey,
    pageNumber: page.pageNumber,
    layout: page.layout,
    slot: page.slot,
    label: page.label,
    bgClass: page.bgClass || '',
    staticHtml: page.staticHtml || undefined,
    controls: serializeControls(page.controls || []),
    defaultProps: serializeValue(page.defaultProps || {}) || {},
  }));
}

function serializeControls(controls) {
  const normalized = (controls || []).filter(control => !isRemovedControl(control)).map(control => {
    const key = control.key || control.prop;
    if (!key) return null;
    return {
      key,
      prop: control.prop,
      label: control.label || key,
      type: control.type,
      default: serializeValue(control.default ?? control.def),
      def: serializeValue(control.def),
      min: serializeValue(control.min),
      max: serializeValue(control.max),
      step: serializeValue(control.step),
      options: normalizeControlValue(serializeValue(controlOptions(control))),
      countKey: control.countKey,
      countIndex: control.countIndex,
      maxFromKey: control.maxFromKey,
      dependsOn: serializeValue(control.dependsOn),
      dependsOnValue: serializeValue(control.dependsOnValue),
      dependsOnValues: serializeValue(control.dependsOnValues),
      desc: control.desc || control.describe || control.description,
    };
  }).filter(Boolean);
  return normalizePublicControls(normalized);
}

function isRemovedControl(control) {
  return REMOVED_CONTROL_TYPES.has(String(control?.type || '').toLowerCase());
}

function controlOptions(control) {
  if (Array.isArray(control.options) && Array.isArray(control.optionLabels)) {
    return control.options.map((option, index) => [option, control.optionLabels[index] ?? option]);
  }
  if (Array.isArray(control.options)) {
    return control.options.map(option => {
      if (Array.isArray(option)) return option;
      if (option && typeof option === 'object' && 'value' in option) {
        const normalized = { value: option.value, label: option.label ?? option.value };
        if (option.image || option.src) normalized.image = option.image || option.src;
        return normalized;
      }
      return option;
    });
  }
  return control.options;
}

function evaluatePropsContract(pages) {
  const editablePages = pages.filter(page => !page.staticHtml);
  const missingTextProps = editablePages.filter(page => textWeight(page.defaultProps) < 20);
  const missingControls = editablePages.filter(page => !(page.controls || []).length);
  const blocking = [];
  const warnings = [];
  if (missingTextProps.length) {
    warnings.push(`${missingTextProps.length}/${pages.length} 页没有足够的 props 文案/数据默认值,例如 ${samplePages(missingTextProps)}`);
  }
  if (missingControls.length) {
    blocking.push(`${missingControls.length}/${pages.length} 页没有 controls,例如 ${samplePages(missingControls)}`);
  }
  return {
    blocking: blocking.join('; '),
    warning: warnings.join('; '),
  };
}

function textWeight(value) {
  const text = JSON.stringify(value || '');
  return (text.match(/[\u4e00-\u9fa5]/g) || []).length + (text.match(/[A-Za-z]{3,}/g) || []).length;
}

function samplePages(pages) {
  return pages.slice(0, 3).map(page => `${page.key} ${page.label}`).join('、');
}

function writeMetadata(themeDir, pages, theme) {
  fs.writeFileSync(
    path.join(themeDir, 'metadata.js'),
    `export const theme = ${JSON.stringify(themePackMetadata(theme), null, 2)};\nexport const pages = ${JSON.stringify(pages, null, 2)};\n`,
  );
}

function themePackMetadata(theme) {
  const displayName = themeDisplayName(theme);
  return {
    key: theme.key,
    displayName,
    label: displayName,
    name: displayName,
    scenario: theme.scenario || '',
    audience: theme.audience || '',
    mode: theme.mode,
  };
}

function themeDisplayName(theme) {
  return theme.displayName || theme.label || theme.name || theme.key;
}

function writeGeneratedMetadata(themes, pages) {
  fs.writeFileSync(
    path.join(THEMES_DIR, 'generated-metadata.js'),
    `export const GENERATED_THEME_PACKS = ${JSON.stringify(themes, null, 2)};\n\nexport const GENERATED_THEME_PAGES = ${JSON.stringify(pages, null, 2)};\n`,
  );
}

function readExistingMetadata() {
  const file = path.join(THEMES_DIR, 'generated-metadata.js');
  if (!fs.existsSync(file)) return { themes: [], pages: [] };
  const text = fs.readFileSync(file, 'utf8');
  return {
    themes: parseExportedJson(text, 'GENERATED_THEME_PACKS'),
    pages: parseExportedJson(text, 'GENERATED_THEME_PAGES'),
  };
}

function parseExportedJson(text, name) {
  const match = text.match(new RegExp(`export const ${name} = ([\\s\\S]*?);\\n`));
  return match ? JSON.parse(match[1]) : [];
}

function mergeMetadata(existing, themes, pages, replaceAll) {
  if (replaceAll) return { themes, pages };
  const changed = new Set(themes.map(theme => theme.key));
  const mergedThemes = [
    ...existing.themes.filter(theme => !changed.has(theme.key)),
    ...themes,
  ].sort(compareThemeKeys);
  const mergedPages = mergedThemes.flatMap(theme => {
    const source = changed.has(theme.key) ? pages : existing.pages;
    return source
      .filter(page => page.themeKey === theme.key)
      .sort((a, b) => (a.pageNumber || 0) - (b.pageNumber || 0));
  });
  return { themes: mergedThemes, pages: mergedPages };
}

function compareThemeKeys(a, b) {
  const left = Number(String(a.key || '').replace(/\D/g, ''));
  const right = Number(String(b.key || '').replace(/\D/g, ''));
  if (Number.isFinite(left) && Number.isFinite(right) && left !== right) return left - right;
  return String(a.key).localeCompare(String(b.key));
}

function writeClientRuntime(themes) {
  const imports = themes
    .map(theme => `import { runtimePages as ${theme.key}Pages } from './${theme.key}/runtime.jsx';`)
    .join('\n');
  const spreads = themes.map(theme => `  ...${theme.key}Pages,`).join('\n');
  fs.writeFileSync(path.join(THEMES_DIR, 'client-runtime.jsx'), `import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { ImageSlotActions as theme01ImageSlotActions } from './theme01/source/slides/SlideKit.jsx';
import { ImageSlotMediaContext as theme03ImageSlotMediaContext } from './theme03/source/src/ImageSlot.jsx';
${imports}

const mountedRoots = new WeakMap();
const rootMediaApis = new WeakMap();
const runtimePages = [
${spreads}
];
const entriesByKey = new Map(runtimePages.map(page => [page.key, page]));

function readJson(value, fallback) {
  try {
    return JSON.parse(value || '') || fallback;
  } catch {
    return fallback;
  }
}

function getRootApi(root) {
  let api = mountedRoots.get(root);
  if (!api) {
    api = createRoot(root);
    mountedRoots.set(root, api);
  }
  return api;
}

function toArray(value) {
  return Array.isArray(value) ? [...value] : [];
}

function stripRuntimeProps(props) {
  const next = {};
  for (const [key, value] of Object.entries(props || {})) {
    if (typeof value !== 'function') next[key] = value;
  }
  return next;
}

function readMediaFile(file) {
  return new Promise(resolve => {
    if (!file || !/^(image|video)\//.test(file.type || '')) {
      resolve(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const src = reader.result;
      if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.muted = true;
        video.onloadedmetadata = () => resolve({
          src,
          type: file.type,
          kind: 'video',
          ratio: video.videoWidth && video.videoHeight ? video.videoWidth / video.videoHeight : null,
        });
        video.onerror = () => resolve({ src, type: file.type, kind: 'video', ratio: null });
        video.src = src;
        return;
      }
      const img = new Image();
      img.onload = () => resolve({ src, type: file.type, kind: 'image', ratio: img.naturalWidth / img.naturalHeight });
      img.onerror = () => resolve({ src, type: file.type, kind: 'image', ratio: null });
      img.src = src;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

function mediaItem(value) {
  if (!value) return null;
  if (typeof value === 'string') return { src: value, kind: value.startsWith('data:video/') ? 'video' : 'image' };
  if (typeof value === 'object' && value.src) {
    const kind = value.kind || (String(value.type || value.src).startsWith('video/') || String(value.src).startsWith('data:video/') ? 'video' : 'image');
    return { ...value, kind };
  }
  return null;
}

function mediaWithAspect(value, ar) {
  const item = mediaItem(value);
  if (!item?.src) return null;
  return { ...item, ar: ar ?? item.ar ?? item.ratio ?? null, ratio: item.ratio ?? ar ?? null };
}

function mediaSrc(value) {
  return mediaItem(value)?.src || '';
}

function renderMedia(value, props = {}) {
  const item = mediaItem(value);
  if (!item?.src) return null;
  if (item.kind === 'video') {
    return <video src={item.src} muted playsInline loop autoPlay preload="metadata" {...props} />;
  }
  return <img src={item.src} alt="" {...props} />;
}

function createMediaApi(slide, baseProps) {
  function updateList(key, index, value) {
    const slideId = slide.dataset.vmSlideId;
    const currentProps = window.__deckViewModel?.getState?.().props?.[slideId] || {};
    const sourceProps = { ...baseProps, ...currentProps };
    const nextList = toArray(sourceProps[key]);
    const previousValue = nextList[index] || null;
    nextList[index] = value || null;
    const nextProps = stripRuntimeProps({ ...sourceProps, [key]: nextList });
    window.__dashiUndo?.push?.({
      label: 'media',
      undo: () => updateList(key, index, previousValue),
    });
    window.__deckViewModel?.setProps?.(slideId, nextProps);
    renderImportedThemeSlide(slide, nextProps);
    window.__initEditableText?.(slide);
    window.__syncActiveEffects?.(slide);
  }

  async function acceptFile(key, index, file) {
    const data = await readMediaFile(file);
    if (data?.src) updateList(key, index, data);
  }

  function pick(key, index) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/mp4,video/webm,video/quicktime,video/*';
    input.style.display = 'none';
    input.addEventListener('change', () => {
      acceptFile(key, index, input.files && input.files[0]).finally(() => input.remove());
    }, { once: true });
    document.body.appendChild(input);
    input.click();
  }

  return {
    get: (key, index) => {
      const slideId = slide.dataset.vmSlideId;
      const currentProps = window.__deckViewModel?.getState?.().props?.[slideId] || {};
      const sourceProps = { ...baseProps, ...currentProps };
      return toArray(sourceProps[key])[index] || null;
    },
    set: updateList,
    acceptFile,
    pick,
  };
}

function HostImageSlot({ mediaApi, index, options = {} }) {
  const [over, setOver] = React.useState(false);
  const value = mediaApi.get('images', index);
  const filled = !!mediaSrc(value);
  const aspectRatio = options.ratioAR || (options.ratio ? String(options.ratio) : undefined);
  const stopSlotNavigation = event => event.stopPropagation();
  const drop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOver(false);
    mediaApi.acceptFile('images', index, event.dataTransfer.files && event.dataTransfer.files[0]);
  };

  return (
    <div
      data-dashi-host-image-slot="true"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 0,
        aspectRatio,
        overflow: 'hidden',
        cursor: 'pointer',
        background: filled
          ? 'transparent'
          : 'repeating-linear-gradient(135deg, rgba(0,0,0,.08) 0 12px, rgba(0,0,0,.03) 12px 24px)',
        outline: over ? '3px solid rgba(143,227,39,.85)' : '1px dashed rgba(0,0,0,.25)',
        outlineOffset: over ? -3 : -1,
      }}
      onClick={(event) => {
        event.stopPropagation();
        mediaApi.pick('images', index);
      }}
      onPointerDown={stopSlotNavigation}
      onMouseDown={stopSlotNavigation}
      onDragOver={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setOver(true);
      }}
      onDragLeave={(event) => {
        event.stopPropagation();
        setOver(false);
      }}
      onDrop={drop}
    >
      {filled ? (
        <>
          {renderMedia(value, {
            style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
          })}
          <button
            type="button"
            aria-label="Clear media"
            onClick={(event) => {
              event.stopPropagation();
              mediaApi.set('images', index, null);
            }}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              width: 34,
              height: 34,
              border: 0,
              borderRadius: '50%',
              background: 'rgba(0,0,0,.55)',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 20,
              lineHeight: '34px',
            }}
          >×</button>
        </>
      ) : (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'monospace',
          fontSize: 22,
          letterSpacing: '.08em',
          color: 'rgba(0,0,0,.48)',
          textAlign: 'center',
          padding: 18,
        }}>
          DROP MEDIA
        </div>
      )}
    </div>
  );
}

function withMediaHostProps(slide, baseProps) {
  const mediaApi = createMediaApi(slide, baseProps);
  return {
    ...baseProps,
    images: toArray(baseProps.images),
    media: toArray(baseProps.media),
    onSlotActivate: index => mediaApi.pick('images', index),
    onSlotClear: index => mediaApi.set('images', index, null),
    onActivate: index => mediaApi.pick('images', index),
    onClear: index => mediaApi.set('images', index, null),
    onImageChange: (index, src, ar) => mediaApi.set('images', index, mediaWithAspect(src, ar)),
    onMediaChange: (index, src) => mediaApi.set('media', index, src),
    renderSlot: (index, options) => (
      <HostImageSlot mediaApi={mediaApi} index={index} options={options} />
    ),
    __mediaApi: mediaApi,
  };
}

function withImageProviders(element, mediaApi) {
  const theme01Value = {
      pick: index => mediaApi.pick('images', index),
      clear: index => mediaApi.set('images', index, null),
      drop: (index, file) => mediaApi.acceptFile('images', index, file),
  };
  const theme03Value = {
    get: index => mediaApi.get('images', index),
    set: (index, value) => mediaApi.set('images', index, value),
    pick: index => mediaApi.pick('images', index),
    drop: (index, file) => mediaApi.acceptFile('images', index, file),
  };
  return React.createElement(theme01ImageSlotActions.Provider, { value: theme01Value },
    React.createElement(theme03ImageSlotMediaContext.Provider, { value: theme03Value }, element),
  );
}

function getGxnSlotIndex(root, slot) {
  const slots = [...root.querySelectorAll('.gxn-slot')];
  const index = slots.indexOf(slot);
  return index < 0 ? 0 : index;
}

function bindRenderedImageSlots(root, mediaApi) {
  rootMediaApis.set(root, mediaApi);
  if (root.dataset.mediaSlotsBound === 'true') return;
  root.dataset.mediaSlotsBound = 'true';

  root.addEventListener('dragover', event => {
    const slot = event.target.closest?.('.gxn-slot');
    if (!slot || !root.contains(slot)) return;
    event.preventDefault();
    slot.classList.add('is-dashi-drag-over');
  });

  root.addEventListener('dragleave', event => {
    const slot = event.target.closest?.('.gxn-slot');
    if (slot && root.contains(slot)) slot.classList.remove('is-dashi-drag-over');
  });

  root.addEventListener('drop', event => {
    const slot = event.target.closest?.('.gxn-slot');
    if (!slot || !root.contains(slot)) return;
    event.preventDefault();
    slot.classList.remove('is-dashi-drag-over');
    const file = event.dataTransfer?.files?.[0];
    rootMediaApis.get(root)?.acceptFile('images', getGxnSlotIndex(root, slot), file);
  });
}

function renderImportedThemeSlide(slide, values = {}) {
  const root = slide?.querySelector?.('.imported-theme-root');
  if (!root) return false;
  const entry = entriesByKey.get(root.dataset.pageKey);
  if (!entry?.Component) return false;
  const defaults = readJson(root.dataset.propDefaults, {});
  const baseProps = {
    ...(entry.defaultProps || {}),
    ...defaults,
    ...(values || {}),
  };
  const componentProps = withMediaHostProps(slide, stripRuntimeProps(baseProps));
  flushSync(() => {
    getRootApi(root).render(withImageProviders(
      React.createElement(entry.Component, componentProps),
      componentProps.__mediaApi,
    ));
  });
  bindRenderedImageSlots(root, componentProps.__mediaApi);
  root.dataset.importedThemeRuntime = 'true';
  return true;
}

function renderImportedThemeSlides(scope = document) {
  scope.querySelectorAll?.('.slide.imported-theme-slide').forEach(slide => {
    renderImportedThemeSlide(slide);
  });
}

function renderRuntimeSlide(slide, values = {}) {
  return renderImportedThemeSlide(slide, values);
}

function renderRuntimeSlides(scope = document) {
  renderImportedThemeSlides(scope);
}

window.__renderImportedThemeSlide = renderImportedThemeSlide;
window.__renderImportedThemeSlides = renderImportedThemeSlides;
window.__renderRuntimeSlide = renderRuntimeSlide;
window.__renderRuntimeSlides = renderRuntimeSlides;
`);
}

function writeAuditReport(report) {
  fs.writeFileSync(path.join(OUTPUT_DIR, 'theme-audit-report.json'), `${JSON.stringify(report, null, 2)}\n`);
}

function writeBlockedReport(items) {
  const body = items.length
    ? items.map(item => `## ${item.themeKey} / ${item.themeName}\n\n问题类型: ${item.type}\n\n当前问题:\n${item.problem}\n\n为什么不能项目侧硬适配:\n${item.cannotAdapt}\n\nClaude Design 返修要求:\n${item.request}\n\n返修验收:\n返修后重新运行 \`npm run themes:import -- theme-import-goal.json\`,该主题进入已接入主题列表且页面数大于 0。\n`).join('\n')
    : '本轮没有需要 Claude Design 返修的主题。\n';
  fs.writeFileSync(path.join(OUTPUT_DIR, 'blocked-for-claude.md'), body);
}

function writeWarningReport(items) {
  const body = items.length
    ? items.map(item => `## ${item.themeKey} / ${item.themeName}\n\n${item.warning}\n\n说明:\n该主题已接入项目和预览。后续如需 Skill 更稳定地自动替换整页文案,建议继续让 Claude Design 把所有可见正文/数据默认值补进 defaultProps。\n`).join('\n')
    : '本轮没有主题质量警告。\n';
  fs.writeFileSync(path.join(OUTPUT_DIR, 'theme-quality-warnings.md'), body);
}

function writeSummary(goal, themes, blockedItems, warningItems) {
  const lines = [
    '# Theme Import Summary',
    '',
    `原始主题数: ${goal.themes.length}`,
    `已接入主题数: ${themes.length}`,
    `替换现有主题数: ${themes.filter(theme => theme.mode === 'replace').length}`,
    `待 Claude Design 返修主题数: ${blockedItems.length}`,
    `已接入但有质量警告主题数: ${warningItems.length}`,
    '',
    '## 已接入主题',
    '',
    ...themes.map(theme => `- ${theme.key} ${theme.name}: ${theme.pageCount} 页`),
    '',
    '## 待返修主题',
    '',
    ...(blockedItems.length ? blockedItems.map(item => `- ${item.themeKey} ${item.themeName}: ${item.problem}`) : ['- 无']),
    '',
    '## 已接入但有质量警告',
    '',
    ...(warningItems.length ? warningItems.map(item => `- ${item.themeKey} ${item.themeName}: ${item.warning}`) : ['- 无']),
    '',
    '## 校验命令',
    '',
    '- npm run manifest:update',
    '- npm test',
    '- npm run showcase:update',
    '- npm run render:themes',
    '- npm run skill:sync',
  ];
  fs.writeFileSync(path.join(OUTPUT_DIR, 'theme-import-summary.md'), `${lines.join('\n')}\n`);
}

function blockedItem(theme, audit, type, problem, request) {
  return {
    themeKey: theme.key,
    themeName: theme.name,
    type,
    problem,
    cannotAdapt: '硬拆 DOM、字符串替换或浏览器全局模拟会破坏页面组件黑盒原则,后续 Skill 无法稳定控制页面属性。',
    request,
    audit,
  };
}

function cleanGeneratedThemeDirs(replaceAll, themeKeys) {
  fs.mkdirSync(THEMES_DIR, { recursive: true });
  if (replaceAll) {
    for (const name of fs.readdirSync(THEMES_DIR)) {
      if (/^theme\d\d$/.test(name)) fs.rmSync(path.join(THEMES_DIR, name), { recursive: true, force: true });
    }
    fs.rmSync(path.join(THEMES_DIR, 'generated-metadata.js'), { force: true });
  }
}

function backupThemeDir(themeDir, themeKey) {
  if (!fs.existsSync(themeDir)) return null;
  const backupDir = path.join(OUTPUT_DIR, `.theme-backup-${themeKey}-${process.pid}`);
  fs.rmSync(backupDir, { recursive: true, force: true });
  fs.cpSync(themeDir, backupDir, { recursive: true });
  return backupDir;
}

function restoreThemeDir(backupDir, themeDir) {
  if (!backupDir || !fs.existsSync(backupDir)) return;
  fs.rmSync(themeDir, { recursive: true, force: true });
  fs.cpSync(backupDir, themeDir, { recursive: true });
  removeThemeBackup(backupDir);
}

function removeThemeBackup(backupDir) {
  if (backupDir) fs.rmSync(backupDir, { recursive: true, force: true });
}

function setupDomStubs() {
  globalThis.React = React;
  globalThis.window = globalThis.window || {};
  globalThis.window.React = React;
  globalThis.window.ReactDOM = globalThis.window.ReactDOM || {};
  globalThis.document = globalThis.document || {
    getElementById() { return null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    createElement() {
      return {
        style: {},
        dataset: {},
        setAttribute() {},
        appendChild() {},
        remove() {},
        set textContent(value) { this._textContent = value; },
        get textContent() { return this._textContent || ''; },
      };
    },
    head: { appendChild() {} },
    body: { appendChild() {} },
    addEventListener() {},
  };
  if (!globalThis.navigator) {
    Object.defineProperty(globalThis, 'navigator', { value: { userAgent: 'node' }, configurable: true });
  }
  globalThis.customElements = globalThis.customElements || { define() {}, get() { return null; } };
  globalThis.HTMLElement = globalThis.HTMLElement || class {};
}

function serializeValue(value) {
  if (value == null || ['string', 'number', 'boolean'].includes(typeof value)) return value;
  if (Array.isArray(value)) return value.map(serializeValue);
  if (typeof value !== 'object') return undefined;
  return Object.fromEntries(
    Object.entries(value)
      .map(([key, item]) => [key, serializeValue(item)])
      .filter(([, item]) => item !== undefined),
  );
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file, out);
    else out.push(file);
  }
  return out;
}

function readTextSafe(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

function count(pattern, text) {
  return (text.match(pattern) || []).length;
}

function slug(value) {
  return String(value).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
}
