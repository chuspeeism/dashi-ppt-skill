#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import {
  compactJson,
  getPreferredMediaSlot,
  normalizeProps,
  typedMediaItemForSource,
} from './skill-workflow-utils.mjs';
import { validateGoalSpec } from './validate-goal-spec.mjs';

const argv = process.argv.slice(2);

if (argv.includes('--help') || argv.includes('-h')) {
  printUsage();
  process.exit(0);
}

if (argv[0] === '--goal') {
  runGoal(argv[1], parseGoalOptions(argv.slice(2)));
} else {
  runSingle(argv);
}

function runSingle(args) {
  const [layout, propsArg, ...extraArgs] = args;
  if (!layout || !propsArg) {
    printUsage();
    process.exit(2);
  }

  let props;
  try {
    const source = propsArg.trim().startsWith('{') || propsArg.trim().startsWith('[')
      ? propsArg
      : readFileSync(propsArg, 'utf8');
    props = JSON.parse(source);
  } catch (error) {
    console.error(`Invalid props JSON: ${error.message}`);
    process.exit(2);
  }

  const mediaInput = parseMediaInput(extraArgs);
  let mediaIntent = null;
  let mediaMapping = null;

  if (mediaInput.items.length) {
    const slot = getPreferredMediaSlot(layout, { kind: mediaInput.kind, count: mediaInput.items.length });
    if (!slot) {
      process.stdout.write(compactJson({
        layout,
        props,
        warnings: [],
        errors: [`Layout "${layout}" has no media slot that can hold ${mediaInput.items.length} item(s)`],
      }));
      process.exit(1);
    }
    props = {
      ...props,
      [slot.field]: mediaInput.items,
      ...(slot.countKey ? { [slot.countKey]: mediaInput.items.length } : {}),
    };
    mediaIntent = mediaInput.kind === 'media' ? 'provided-media' : 'provided-images';
    mediaMapping = {
      field: slot.field,
      countKey: slot.countKey,
      count: mediaInput.items.length,
    };
  }

  const result = normalizeProps(layout, props);
  process.stdout.write(compactJson({
    layout,
    mediaIntent,
    mediaMapping,
    ...result,
  }));

  if (result.errors?.length) process.exit(1);
}

function runGoal(goalArg, options = {}) {
  if (!goalArg) {
    printUsage();
    process.exit(2);
  }
  let spec;
  try {
    spec = JSON.parse(readFileSync(goalArg, 'utf8'));
  } catch (error) {
    console.error(`Invalid goal JSON: ${error.message}`);
    process.exit(2);
  }

  const slides = Array.isArray(spec.slides) ? spec.slides : [];
  const normalizedSlides = [];
  const slideResults = slides.map((slide, index) => {
    const layout = slide?.layout;
    const normalized = layout
      ? normalizeProps(layout, slide?.props || {})
      : { warnings: [], errors: ['missing layout'] };
    normalizedSlides.push(layout && !normalized.errors?.length
      ? { ...slide, props: normalized.props }
      : slide);
    return {
      slide: index + 1,
      layout: layout || null,
      warningCount: normalized.warnings?.length || 0,
      errorCount: normalized.errors?.length || 0,
      ...(normalized.warnings?.length ? { warnings: normalized.warnings } : {}),
      ...(normalized.errors?.length ? { errors: normalized.errors } : {}),
    };
  });
  const normalizedSpec = Array.isArray(spec.slides) ? { ...spec, slides: normalizedSlides } : spec;
  const goalSpecErrors = validateGoalSpec(normalizedSpec);
  const propErrors = slideResults.flatMap(item => (item.errors || []).map(error => `slide ${item.slide} ${item.layout || '<missing>'}: ${error}`));
  const ok = goalSpecErrors.length === 0 && propErrors.length === 0;
  if (ok && options.write) writeFileSync(goalArg, compactJson(normalizedSpec));
  const result = {
    goal: goalArg,
    slideCount: slides.length,
    ok,
    ...(ok && options.write ? { written: goalArg } : {}),
    goalSpecErrorCount: goalSpecErrors.length,
    propErrorCount: propErrors.length,
    warningCount: slideResults.reduce((sum, item) => sum + item.warningCount, 0),
    ...(goalSpecErrors.length ? { goalSpecErrors } : {}),
    ...(propErrors.length ? { propErrors } : {}),
    slides: slideResults,
  };
  process.stdout.write(compactJson(result));
  if (!result.ok) process.exit(1);
}

function printUsage() {
  console.error('Usage:');
  console.error('  node scripts/write-safe-props.mjs <layout> <props-json-or-file> [--images <path...>] [--media <path...>]');
  console.error('  node scripts/write-safe-props.mjs --goal <goal-spec.json> [--write]');
}

function parseMediaInput(args) {
  const result = { kind: null, items: [] };
  for (let index = 0; index < args.length; index += 1) {
    const item = args[index];
    if (item !== '--images' && item !== '--media') continue;
    result.kind = item === '--media' ? 'media' : 'images';
    for (let valueIndex = index + 1; valueIndex < args.length && !args[valueIndex].startsWith('--'); valueIndex += 1) {
      result.items.push(result.kind === 'media' ? typedMediaItemForSource(args[valueIndex]) : args[valueIndex]);
      index = valueIndex;
    }
  }
  return result;
}

function parseGoalOptions(args) {
  return {
    write: args.includes('--write'),
  };
}
