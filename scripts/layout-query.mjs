#!/usr/bin/env node
import {
  compactJson,
  listLayouts,
  parseArgs,
} from './skill-workflow-utils.mjs';

const args = parseArgs(process.argv.slice(2));
const mediaIntent = getMediaIntent(args);
const mediaCount = getMediaCount(args);
const result = {
  theme: args.theme || null,
  role: args.role || args.use || null,
  keyword: args.keyword || args.q || null,
  needsMedia: args['needs-media'] === true || args.media === true || Boolean(mediaIntent) || Boolean(mediaCount),
  mediaIntent,
  mediaCount,
  limit: Number(args.limit || 12),
};

const layouts = listLayouts({
  theme: result.theme,
  role: result.role,
  keyword: result.keyword,
  needsMedia: result.needsMedia,
  plannedImages: args['planned-images'],
  providedImages: args['provided-images'],
  imageGen: args['image-gen'] === true || args.imageGen === true,
  needsVisual: args['needs-visual'] === true || args.needsVisual === true,
  mediaCount: result.mediaCount,
  limit: result.limit,
});

process.stdout.write(compactJson({
  ...result,
  count: layouts.length,
  layouts,
}));

function getMediaIntent(args) {
  if (args['provided-images']) return 'provided-images';
  if (args['planned-images']) return 'planned-images';
  if (args['image-gen'] === true || args.imageGen === true) return 'image-gen';
  if (args['needs-visual'] === true || args.needsVisual === true) return 'needs-visual';
  return null;
}

function getMediaCount(args) {
  const explicit = Number(args['media-count'] || args.mediaCount);
  if (Number.isFinite(explicit) && explicit > 0) return Math.round(explicit);
  for (const key of ['provided-images', 'planned-images']) {
    const count = Number(args[key]);
    if (Number.isFinite(count) && count > 0) return Math.round(count);
  }
  return null;
}
