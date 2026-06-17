#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';

const file = process.argv[2];
const allowExperimental = process.argv.includes('--allow-experimental');

if (!file) {
  console.error('Usage: node scripts/validate-swiss-deck.mjs <index.html> [--allow-experimental]');
  process.exit(2);
}

const html = readFileSync(file, 'utf8');
const htmlForSlides = html.replace(/<!--[\s\S]*?-->/g, '');
const errors = [];
const warnings = [];

const manifestFile = 'layout-manifest.json';
const optionsFile = 'src/options.jsx';
const registeredLayouts = [
  ...(existsSync(manifestFile)
    ? Object.values(JSON.parse(readFileSync(manifestFile, 'utf8')).layouts || {}).map((layout) => layout.dataLayout).filter(Boolean)
    : []),
  ...(existsSync(optionsFile)
    ? [...readFileSync(optionsFile, 'utf8').matchAll(/dataLayout:\s*'([^']+)'/g)].map((match) => match[1])
    : []),
];
const allowedLayouts = new Set(registeredLayouts.length ? registeredLayouts : ['SANDBOX']);

const slideRe = /<section\b[^>]*class="[^"]*\bslide\b[^"]*"[^>]*>[\s\S]*?<\/section>/g;
const slides = [...htmlForSlides.matchAll(slideRe)].map((m, idx) => ({ idx: idx + 1, html: m[0], tag: m[0].match(/<section\b[^>]*>/)?.[0] ?? '' }));

if (!slides.length) {
  errors.push('No <section class="slide"> pages found.');
}

if (html.includes('#deck .slide') || /\b\w*deck\w*\.querySelectorAll\(['"]\.slide/.test(html)) {
  errors.push('Deck runtime uses descendant .slide selectors. Use only #deck direct children so imported theme internals cannot be treated as pages.');
}

const downloadBlobStart = html.indexOf('function downloadBlob');
const downloadBlobEnd = downloadBlobStart >= 0 ? html.indexOf('function releaseRetainedDownloadUrls', downloadBlobStart) : -1;
const downloadBlobSource = downloadBlobStart >= 0 && downloadBlobEnd > downloadBlobStart
  ? html.slice(downloadBlobStart, downloadBlobEnd)
  : '';
if (downloadBlobSource.includes('URL.revokeObjectURL')) {
  errors.push('Deck export download revokes blob URLs inside downloadBlob. Keep blob URLs alive until page unload so LAN downloads can finish.');
}

if (/\.writeFile\s*\(\s*\{\s*fileName:/.test(html)) {
  errors.push('Deck export uses library writeFile download. Generate a blob and pass it through downloadBlob so LAN downloads can finish.');
}

const pdfExportStart = html.indexOf('window.__exportDeckPdf =');
const pdfExportEnd = pdfExportStart >= 0 ? html.indexOf('window.__exportDeckPptx', pdfExportStart) : -1;
const pdfExportSource = pdfExportStart >= 0 && pdfExportEnd > pdfExportStart
  ? html.slice(pdfExportStart, pdfExportEnd)
  : '';
if (!/\/api\/export-pdf/.test(pdfExportSource) || !/startServerExportDownload\s*\(/.test(pdfExportSource)) {
  errors.push('PDF export must use the local screenshot PDF service and trigger a browser download.');
}

if (/runBrowserPrint\s*\(|window\.print\s*\(/.test(pdfExportSource)) {
  errors.push('PDF export must not use the browser print flow as its default path.');
}

if (!/buildPdfExportSnapshot/.test(pdfExportSource)) {
  errors.push('PDF export must send the current deck state to the screenshot PDF service.');
}

if (!html.includes('deck-export-cancel')) {
  errors.push('Deck export overlay is missing a cancel button.');
}

if (!/function isPointInsideDeckStage\(/.test(html)) {
  errors.push('Deck right-click handling must use a stage hit test so the black border keeps the browser default context menu.');
}

if (/deck\.addEventListener\(['"]contextmenu['"],\s*\w+\s*=>\s*\w+\.preventDefault\(\)\s*\)/.test(html)) {
  errors.push('Deck contextmenu handler blocks the whole deck without checking the PPT content stage.');
}

if (!/contextmenu[\s\S]{0,500}isPointInsideDeckStage|isPointInsideDeckStage[\s\S]{0,500}contextmenu/.test(html)) {
  errors.push('Deck contextmenu handler must check isPointInsideDeckStage before preventing the browser menu.');
}

const overviewThumbStart = html.indexOf('function renderOverviewThumb');
const overviewThumbEnd = overviewThumbStart >= 0 ? html.indexOf('function scheduleOverviewThumbQueue', overviewThumbStart) : -1;
const overviewThumbSource = overviewThumbStart >= 0 && overviewThumbEnd > overviewThumbStart
  ? html.slice(overviewThumbStart, overviewThumbEnd)
  : '';
const overviewDomPreviewStart = html.indexOf('function createOverviewDomPreview');
const overviewDomPreviewEnd = overviewDomPreviewStart >= 0 ? html.indexOf('function getOverviewPreviewCost', overviewDomPreviewStart) : -1;
const overviewDomPreviewSource = overviewDomPreviewStart >= 0 && overviewDomPreviewEnd > overviewDomPreviewStart
  ? html.slice(overviewDomPreviewStart, overviewDomPreviewEnd)
  : '';
const overviewSourceSizeStart = html.indexOf('function getOverviewSourceSize');
const overviewSourceSizeEnd = overviewSourceSizeStart >= 0 ? html.indexOf('function fitOverviewThumb', overviewSourceSizeStart) : -1;
const overviewSourceSizeSource = overviewSourceSizeStart >= 0 && overviewSourceSizeEnd > overviewSourceSizeStart
  ? html.slice(overviewSourceSizeStart, overviewSourceSizeEnd)
  : '';
if (!/renderOverviewThumbDomPreview/.test(overviewThumbSource) || !/rememberOverviewThumbFromDom/.test(html)) {
  errors.push('Overview thumbnails must use the controlled DOM clone thumbnail path with stable cache reuse.');
}

if (!/cloneNode\(true\)/.test(overviewDomPreviewSource)
  || !/querySelectorAll\(['"]script,style,template,noscript['"]\)/.test(overviewDomPreviewSource)
  || !/querySelectorAll\(['"]iframe,video['"]\)/.test(overviewDomPreviewSource)
  || !/style\.animation\s*=\s*['"]none['"]/.test(overviewDomPreviewSource)
  || !/style\.transition\s*=\s*['"]none['"]/.test(overviewDomPreviewSource)
  || !/contain:layout paint style/.test(overviewDomPreviewSource)) {
  errors.push('Overview DOM clone thumbnails must be clipped, staticized, animation-free, and paint-contained.');
}

if (/visualSlots|textSlots|fillText\s*\(|foreignObject|makeOverviewThumbSvg/.test(overviewDomPreviewSource)) {
  errors.push('Overview thumbnail main path must not synthesize summary cards or use SVG foreignObject.');
}

if (/Math\.min\(\s*deckW\s*\|\|\s*innerWidth\s*,\s*960\s*\)/.test(overviewSourceSizeSource)
  || !/width\s*:\s*1920/.test(overviewSourceSizeSource)
  || !/height\s*:\s*1080/.test(overviewSourceSizeSource)
  || !/--deck-scale:1/.test(overviewDomPreviewSource)
  || !/overviewSourceWidth/.test(overviewDomPreviewSource)) {
  errors.push('Overview DOM clone thumbnails must use the full 1920x1080 source canvas instead of a cropped viewport-sized source.');
}

const commitSlideStart = html.indexOf('function commitSlideIndex');
const commitSlideEnd = commitSlideStart >= 0 ? html.indexOf('function go', commitSlideStart) : -1;
const commitSlideSource = commitSlideStart >= 0 && commitSlideEnd > commitSlideStart
  ? html.slice(commitSlideStart, commitSlideEnd)
  : '';
const goStart = html.indexOf('function go');
const goEnd = goStart >= 0 ? html.indexOf('function moveSlide', goStart) : -1;
const goSource = goStart >= 0 && goEnd > goStart
  ? html.slice(goStart, goEnd)
  : '';
if (!/function prepareSlideForTransition\(/.test(html) || !/function preloadAdjacentSlides\(/.test(html)) {
  errors.push('Page transitions must prepare/preload target slides before animating so first-time pages do not enter as blank frames.');
}

const transitionCallIndex = goSource.indexOf('window.__playPageTransition');
const prepareCallIndex = goSource.indexOf('prepareSlideForTransition(nextSlide');
if (transitionCallIndex >= 0 && (prepareCallIndex < 0 || prepareCallIndex > transitionCallIndex)) {
  errors.push('go() must call prepareSlideForTransition(nextSlide) before starting __playPageTransition.');
}

const activeRenderIndex = commitSlideSource.indexOf('ensureRuntimeSlideRendered(el)');
const adjacentPreloadIndex = commitSlideSource.indexOf('preloadAdjacentSlides(idx');
if (adjacentPreloadIndex < 0 || (activeRenderIndex >= 0 && adjacentPreloadIndex < activeRenderIndex)) {
  errors.push('commitSlideIndex() must preload adjacent slides after the active slide is rendered.');
}

if (!/theme05_page048/.test(goSource)) {
  errors.push('theme05 page 48 must skip global page transition on entry to avoid its abnormal full-page scale animation.');
}

if (/theme06_page048/.test(goSource)) {
  errors.push('Page transition skip still targets theme06_page048; JAD-94 scope is theme05_page048.');
}

const pulseMeterFile = 'src/components/themes/theme05/source/components/esm/PulseMeter.jsx';
const pulseMeterSource = existsSync(pulseMeterFile) ? readFileSync(pulseMeterFile, 'utf8') : html;
if (!/pulse-meter--no-motion/.test(pulseMeterSource) || !/pulse-meter--no-motion[\s\S]{0,500}transition:\s*none\s*!important/.test(pulseMeterSource) || !/pulse-meter--no-motion[\s\S]{0,500}animation:\s*none\s*!important/.test(pulseMeterSource)) {
  errors.push('theme05 page 48 must disable its internal component motion, not only the global page transition.');
}

const transitionRuntimeStart = html.indexOf('window.__playPageTransition = function');
const transitionRuntimeEnd = transitionRuntimeStart >= 0 ? html.indexOf('</script>', transitionRuntimeStart) : -1;
const transitionRuntimeSource = transitionRuntimeStart >= 0 && transitionRuntimeEnd > transitionRuntimeStart
  ? html.slice(transitionRuntimeStart, transitionRuntimeEnd)
  : '';
if (!/function prepareTransitionClone\(/.test(html) || !/data-transition-role/.test(html) || !/animation-play-state\s*:\s*paused/i.test(html)) {
  errors.push('Page transition target clone must be prepared in the slide entrance initial state instead of the completed state.');
}

if (/next\.classList\.add\(['"]active['"]\)[\s\S]{0,260}next\.removeAttribute\(['"]data-deck-active['"]\)/.test(transitionRuntimeSource)) {
  errors.push('Page transition target clone removes data-deck-active directly, which shows entrance-animation completed state and can cause B→A→B.');
}

if (!/prepareTransitionClone\(\s*nextSlide\s*,\s*['"]next['"]/.test(transitionRuntimeSource)) {
  errors.push('__playPageTransition must build the target clone through prepareTransitionClone(nextSlide, "next").');
}

if (!/function startTransitionSlideEnter\(/.test(html) || !/__transitionEnteredSlide/.test(html)) {
  errors.push('Page transition lifecycle must start the real target slide entrance animation during the transition and remember it for commit.');
}

if (!/data-enter-motion/.test(html) || !/page-transition-stage\[data-enter-motion=["']running["']\]/.test(html)) {
  errors.push('Page transition target clone must release its paused entrance animation at the scheduled transition midpoint.');
}

if (!/\.add\(\s*startTargetEnter\s*,\s*0\.[23]/.test(transitionRuntimeSource)) {
  errors.push('liquidMorph must start target slide entrance motion around the transition midpoint, not only after commit.');
}

if (!/transitionEntered[\s\S]{0,500}__playSlide/.test(commitSlideSource) || !/!transitionEntered/.test(commitSlideSource)) {
  errors.push('commitSlideIndex() must not replay target slide entrance animation after it already started during page transition.');
}

const overviewBuildStart = html.indexOf('function buildOverview');
const overviewBuildEnd = overviewBuildStart >= 0 ? html.indexOf('function refreshRailCatalog', overviewBuildStart) : -1;
const overviewBuildSource = overviewBuildStart >= 0 && overviewBuildEnd > overviewBuildStart
  ? html.slice(overviewBuildStart, overviewBuildEnd)
  : '';
const overviewDropStart = html.indexOf("grid.addEventListener('drop'");
const overviewDropEnd = overviewDropStart >= 0 ? html.indexOf("});", overviewDropStart) : -1;
const overviewDropSource = overviewDropStart >= 0 && overviewDropEnd > overviewDropStart
  ? html.slice(overviewDropStart, overviewDropEnd)
  : '';
const overviewDropSlotStart = html.indexOf('function getOverviewDropSlot');
const overviewDropSlotEnd = overviewDropSlotStart >= 0 ? html.indexOf('function showOverviewDropMarker', overviewDropSlotStart) : -1;
const overviewDropSlotSource = overviewDropSlotStart >= 0 && overviewDropSlotEnd > overviewDropSlotStart
  ? html.slice(overviewDropSlotStart, overviewDropSlotEnd)
  : '';
const overviewScheduleStart = html.indexOf('function scheduleOverviewThumbQueue');
const overviewScheduleEnd = overviewScheduleStart >= 0 ? html.indexOf('function queueOverviewThumb', overviewScheduleStart) : -1;
const overviewScheduleSource = overviewScheduleStart >= 0 && overviewScheduleEnd > overviewScheduleStart
  ? html.slice(overviewScheduleStart, overviewScheduleEnd)
  : '';
const overviewFallbackStart = html.indexOf('function renderOverviewThumbFallback');
const overviewFallbackEnd = overviewFallbackStart >= 0 ? html.indexOf('async function renderOverviewThumb', overviewFallbackStart) : -1;
const overviewFallbackSource = overviewFallbackStart >= 0 && overviewFallbackEnd > overviewFallbackStart
  ? html.slice(overviewFallbackStart, overviewFallbackEnd)
  : '';
const overviewCacheKeyStart = html.indexOf('function getOverviewThumbCacheKey');
const overviewCacheKeyEnd = overviewCacheKeyStart >= 0 ? html.indexOf('function markOverviewThumbDirty', overviewCacheKeyStart) : -1;
const overviewCacheKeySource = overviewCacheKeyStart >= 0 && overviewCacheKeyEnd > overviewCacheKeyStart
  ? html.slice(overviewCacheKeyStart, overviewCacheKeyEnd)
  : '';
const overviewDragOverStart = html.indexOf("grid.addEventListener('dragover'");
const overviewDragOverEnd = overviewDragOverStart >= 0 ? html.indexOf("});", overviewDragOverStart) : -1;
const overviewDragOverSource = overviewDragOverStart >= 0 && overviewDragOverEnd > overviewDragOverStart
  ? html.slice(overviewDragOverStart, overviewDragOverEnd)
  : '';
if (!/OVERVIEW_CARD_WIDTH/.test(html) || !/className\s*=\s*['"]rail-grid['"]/.test(overviewBuildSource) || !/grid-template-columns:1fr/.test(overviewBuildSource)) {
  errors.push('Slide rail must use fixed-size vertical thumbnail cards instead of the old full-screen overview grid.');
}

if (!/data-rail-card/.test(html) && !/dataset\.railCard/.test(html)) {
  errors.push('Slide rail cards must be represented as first-class catalog items.');
}

if (!/data-overview-frame/.test(html) || !/data-overview-label/.test(html) || !/data-rail-frame/.test(html)) {
  errors.push('Slide rail cards must keep the selected border outside the thumbnail and move page numbers below the image.');
}

if (/position:absolute;left:0;bottom:0/.test(overviewBuildSource)) {
  errors.push('Overview page number label is still overlaid on the thumbnail image.');
}

if (/ov\.appendChild\(createOverviewProgress/.test(overviewBuildSource)) {
  errors.push('Slide rail must not show the old sticky overview progress bar.');
}

if (/buildOverview\(/.test(overviewDropSource) || !/applyOverviewReorderLocally/.test(html)) {
  errors.push('Overview drag/drop reorder must update the overview DOM locally instead of rebuilding the whole overview.');
}

if (/best\.before\s*\?\s*best\.rect\.left\s*:\s*best\.rect\.right/.test(overviewDropSlotSource)
  || !/kind:\s*['"]horizontal['"]/.test(overviewDropSlotSource)
  || !/previous\.bottom\s*\+\s*next\.top/.test(overviewDropSlotSource)) {
  errors.push('Slide rail drop marker must sit horizontally between vertical cards.');
}

if (!/overviewBuiltSignature/.test(html) || !/refreshOverviewCards/.test(html)) {
  errors.push('Overview should reuse its existing DOM on reopen and refresh lightweight state instead of rebuilding every time.');
}

if (/queueAllOverviewThumbs\(\)/.test(overviewBuildSource) || /queueAllOverviewThumbs\(\)/.test(html)) {
  errors.push('Overview must not enqueue all thumbnails on open; only visible and nearby cards should be prioritized.');
}

if (!/overviewThumbRunId/.test(html) || !/cancelOverviewThumbQueue\(/.test(html)) {
  errors.push('Overview thumbnail generation must have a cancellation token so stale background work can be abandoned.');
}

if (!/time-sliced/.test(overviewScheduleSource) || /timeRemaining\s*:\s*\(\)\s*=>\s*16/.test(overviewScheduleSource) || /requestIdleCallback/.test(overviewScheduleSource) || /Promise\.allSettled\(tasks\)/.test(html) || /count\s*<\s*2/.test(html)) {
  errors.push('Overview thumbnail queue must use an honest time-sliced deferred queue, not fake idle deadlines or concurrent browser captures.');
}

if (!/queueNearbyOverviewThumbs\(/.test(html) || !/OVERVIEW_THUMB_NEAR_MARGIN/.test(html)) {
  errors.push('Overview should queue visible thumbnails and a small nearby buffer instead of the full deck.');
}

if (!/pauseOverviewThumbs\(\)[\s\S]{0,300}overviewDragFrom/.test(overviewBuildSource) || !/pauseOverviewThumbs\(\)[\s\S]{0,260}go\(targetIndex/.test(overviewBuildSource)) {
  errors.push('Slide rail drag and page click interactions must pause thumbnail generation before user interaction work.');
}

if (!/deckMode/.test(html) || !/body\.dataset\.mode/.test(html) || /window\.__toggleOverview\s*=|function\s+(openOverview|closeOverview|toggleOverview)\b|overview-on|var\s+overviewOn|let\s+overviewOn|const\s+overviewOn/.test(html)) {
  errors.push('Deck UI must expose only edit/present modes and must not keep the legacy overview mode path.');
}

if (!/window\.__getOverviewPerfState\s*=/.test(html) || !/window\.__resetOverviewPerfMarks\s*=/.test(html)) {
  errors.push('Overview performance validation needs window.__getOverviewPerfState and window.__resetOverviewPerfMarks debug APIs.');
}

if (!/overviewPerfMarks/.test(html) || !/captures/.test(html) || !/layoutReads/.test(html) || !/drops/.test(html)) {
  errors.push('Overview performance marks must record captures, layout reads, and drop phases for executable validation.');
}

if (!/overviewThumbPauseUntil/.test(html) || !/function deferOverviewThumbs\(/.test(html)) {
  errors.push('Overview thumbnail queue must expose an interaction deferral window through overviewThumbPauseUntil and deferOverviewThumbs().');
}

if (/requestIdleCallback[\s\S]{0,160}\{\s*timeout\s*:/.test(overviewScheduleSource)) {
  errors.push('Overview thumbnail queue must not use requestIdleCallback timeout to force screenshot work during interaction windows.');
}

if (/cloneNode\(true\)/.test(overviewFallbackSource) && /overviewRendered\s*=\s*['"]true['"]/.test(overviewFallbackSource)) {
  errors.push('Overview thumbnail fallback must not mark an unsanitized raw DOM clone as rendered.');
}

if (!/budgetMs/.test(overviewScheduleSource) || !/sliceStartAt/.test(overviewScheduleSource) || !/overviewThumbPauseUntil/.test(overviewScheduleSource)) {
  errors.push('Overview thumbnail queue must enforce a time-sliced budget and the interaction pause window before thumbnail work.');
}

if (!/activeThemePack/.test(overviewCacheKeySource) || !/(getSlideVmId|dataset\.vmSlideId)/.test(overviewCacheKeySource) || !/overviewThumbRevision/.test(overviewCacheKeySource) || !/OVERVIEW_THUMB_WIDTH/.test(overviewCacheKeySource) || !/OVERVIEW_THUMB_HEIGHT/.test(overviewCacheKeySource)) {
  errors.push('Overview thumbnail cache key must include theme pack, stable slide id, revision, and thumbnail size.');
}

if (/getOverviewSlideKey\(slide\)/.test(overviewCacheKeySource) || /overview-\s*\+/.test(overviewCacheKeySource)) {
  errors.push('Overview thumbnail cache key must not depend on runtime overview-N ids or card creation order.');
}

if (!/overviewDragRects/.test(html) || !/recordOverviewLayoutRead/.test(html)) {
  errors.push('Overview drag must cache card rects at dragstart and record layout reads for performance validation.');
}

if (/getOverviewDropSlot\(e,\s*grid\)/.test(overviewDragOverSource) && /getBoundingClientRect/.test(overviewDropSlotSource)) {
  errors.push('Overview dragover must use cached card rects instead of reading every card layout on each event.');
}

if (!/requestAnimationFrame/.test(overviewDragOverSource) || !/overviewDragOverQueued/.test(html)) {
  errors.push('Overview dragover must be throttled with requestAnimationFrame.');
}

if (!/scheduleOverviewDeckCommit/.test(html)) {
  errors.push('Overview drop must update the overview DOM first and schedule the real deck order commit later.');
}

if (/moveCatalogSlide\(/.test(overviewDropSource) && overviewDropSource.indexOf('moveCatalogSlide(') < overviewDropSource.indexOf('applyOverviewReorderLocally')) {
  errors.push('Overview drop currently commits real deck order before local overview DOM update.');
}

slides.forEach((slide) => {
  const layout = slide.tag.match(/\bdata-layout="([^"]+)"/)?.[1];

  if (!layout) {
    errors.push(`Slide ${slide.idx}: missing data-layout.`);
  } else if (!allowedLayouts.has(layout)) {
    errors.push(`Slide ${slide.idx}: data-layout="${layout}" is not registered in the project layout registry.`);
  }

  if (!allowExperimental && /\bdata-layout="P2[34]\b|Swiss Image Split|Swiss Evidence Grid|swiss-img-split|swiss-img-grid/.test(slide.html)) {
    errors.push(`Slide ${slide.idx}: uses experimental P23/P24 image structure. Use S22 or S15/S16 image-grid adaptations instead.`);
  }

  const isMagazine = /^A\d{2}$/.test(layout);
  const isStatement = isMagazine || layout === 'S03' || layout === 'S09' || layout === 'S10' || layout === 'SWISS-COVER-ASCII' || layout === 'SWISS-CLOSING-ASCII';
  const topChunk = slide.html.slice(0, 1800);

  const isSwissLayout = isMagazine || /^S\d{2}$/.test(layout) || /^SWISS-/.test(layout);
  const isImportedThemeLayout = /^THEME\d{2}-\d{3}$/.test(layout || '');

  if (isSwissLayout && !isStatement && /text-align\s*:\s*center/i.test(topChunk)) {
    errors.push(`Slide ${slide.idx}: top title area contains text-align:center. Swiss body titles should stay left aligned.`);
  }

  if (isSwissLayout && !isStatement && /align-self\s*:\s*center/i.test(topChunk) && /<h[12]\b/i.test(topChunk)) {
    errors.push(`Slide ${slide.idx}: top heading appears vertically/centrally aligned. Use the original left-top title skeleton.`);
  }

  if (isSwissLayout && !isStatement && /grid-template-columns\s*:\s*[0-9.]+fr\s+[0-9.]+fr/i.test(topChunk) && /<h[12]\b/i.test(topChunk)) {
    warnings.push(`Slide ${slide.idx}: heading inside a custom fr/fr grid. Confirm this is copied from the original Sxx skeleton, not a centered title hack.`);
  }

  if (!isImportedThemeLayout && /<svg\b[\s\S]*?<text\b/i.test(slide.html)) {
    errors.push(`Slide ${slide.idx}: SVG contains visible <text>. Put labels in HTML grid/captions, keep SVG for geometry only.`);
  }

});

if (warnings.length) {
  console.warn('Warnings:');
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error('Swiss deck validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Swiss deck validation passed: ${slides.length} slide(s).`);
