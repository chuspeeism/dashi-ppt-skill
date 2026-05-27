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

const optionsFile = 'src/options.jsx';
const registeredLayouts = existsSync(optionsFile)
  ? [...readFileSync(optionsFile, 'utf8').matchAll(/dataLayout:\s*'([^']+)'/g)].map((match) => match[1])
  : [];
const allowedLayouts = new Set(registeredLayouts.length ? registeredLayouts : ['SANDBOX']);

const slideRe = /<section\b[^>]*class="[^"]*\bslide\b[^"]*"[^>]*>[\s\S]*?<\/section>/g;
const slides = [...htmlForSlides.matchAll(slideRe)].map((m, idx) => ({ idx: idx + 1, html: m[0], tag: m[0].match(/<section\b[^>]*>/)?.[0] ?? '' }));

if (!slides.length) {
  errors.push('No <section class="slide"> pages found.');
}

slides.forEach((slide) => {
  const layout = slide.tag.match(/\bdata-layout="([^"]+)"/)?.[1];

  if (!layout) {
    errors.push(`Slide ${slide.idx}: missing data-layout.`);
  } else if (!allowedLayouts.has(layout)) {
    errors.push(`Slide ${slide.idx}: data-layout="${layout}" is not registered in src/options.jsx.`);
  }

  if (!allowExperimental && /\bdata-layout="P2[34]\b|Swiss Image Split|Swiss Evidence Grid|swiss-img-split|swiss-img-grid/.test(slide.html)) {
    errors.push(`Slide ${slide.idx}: uses experimental P23/P24 image structure. Use S22 or S15/S16 image-grid adaptations instead.`);
  }

  const isMagazine = /^A\d{2}$/.test(layout);
  const isStatement = isMagazine || layout === 'S03' || layout === 'S09' || layout === 'S10' || layout === 'SWISS-COVER-ASCII' || layout === 'SWISS-CLOSING-ASCII';
  const topChunk = slide.html.slice(0, 1800);

  if (!isStatement && /text-align\s*:\s*center/i.test(topChunk)) {
    errors.push(`Slide ${slide.idx}: top title area contains text-align:center. Swiss body titles should stay left aligned.`);
  }

  if (!isStatement && /align-self\s*:\s*center/i.test(topChunk) && /<h[12]\b/i.test(topChunk)) {
    errors.push(`Slide ${slide.idx}: top heading appears vertically/centrally aligned. Use the original left-top title skeleton.`);
  }

  if (!isStatement && /grid-template-columns\s*:\s*[0-9.]+fr\s+[0-9.]+fr/i.test(topChunk) && /<h[12]\b/i.test(topChunk)) {
    warnings.push(`Slide ${slide.idx}: heading inside a custom fr/fr grid. Confirm this is copied from the original Sxx skeleton, not a centered title hack.`);
  }

  if (/<svg\b[\s\S]*?<text\b/i.test(slide.html)) {
    errors.push(`Slide ${slide.idx}: SVG contains visible <text>. Put labels in HTML grid/captions, keep SVG for geometry only.`);
  }

  const localImages = [...slide.html.matchAll(/<img\b[^>]*src="images\//g)];
  localImages.forEach((_, imageIndex) => {
    const imgTag = slide.html.slice(_.index, slide.html.indexOf('>', _.index) + 1);
    if (!/\bdata-image-slot="/.test(imgTag)) {
      errors.push(`Slide ${slide.idx}: local image ${imageIndex + 1} missing data-image-slot. Bind every image to a layout slot such as s22-hero-21x9 or s15-grid-21x9.`);
    }
  });

  const frameImageRe = /<div\b(?=[^>]*\bclass="([^"]*\bframe-img\b[^"]*)")[^>]*>\s*<img\b(?=[^>]*\bdata-image-slot="([^"]+)")[^>]*>/g;
  const frameImages = [...slide.html.matchAll(frameImageRe)];
  frameImages.forEach((match) => {
    const className = match[1];
    const slot = match[2];
    const frameTag = match[0].match(/^<div\b[^>]*>/)?.[0] ?? '';
    if (/^s1[56]-(?:grid|brief)-21x9$/.test(slot)) {
      if (/\bfit-contain\b/.test(className)) {
        errors.push(`Slide ${slide.idx}: ${slot} uses fit-contain. Regenerated S15/S16 21:9 images should fill the slot with .frame-img.r-21x9.`);
      }
      if (!/\br-21x9\b/.test(className)) {
        errors.push(`Slide ${slide.idx}: ${slot} must use .frame-img.r-21x9 so the image slot controls the visible size.`);
      }
      if (/height\s*:\s*\d+(?:\.\d+)?vh/i.test(frameTag)) {
        errors.push(`Slide ${slide.idx}: ${slot} frame has a fixed vh height. Use aspect-ratio .r-21x9 instead of shrinking long images into a short slot.`);
      }
    }
  });

  if (layout === 'S22') {
    if (!/data-image-slot="s22-hero-21x9"/.test(slide.html)) {
      errors.push(`Slide ${slide.idx}: S22 must use data-image-slot="s22-hero-21x9".`);
    }
    if (/object-position\s*:\s*top center/i.test(slide.html)) {
      errors.push(`Slide ${slide.idx}: S22 photo uses object-position:top center, which commonly crops faces. Use center 35% or center center.`);
    }
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
