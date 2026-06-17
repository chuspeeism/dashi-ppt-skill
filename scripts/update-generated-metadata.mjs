#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  normalizePublicControls,
} from '../src/control-naming.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const THEMES_DIR = path.join(ROOT, 'src/components/themes');

const generated = await import(pathToFileURL(path.join(THEMES_DIR, 'generated-metadata.js')).href);
const generatedOrder = new Map((generated.GENERATED_THEME_PACKS || []).map((theme, index) => [theme.key, index]));
const themeDirs = readdirSync(THEMES_DIR, { withFileTypes: true })
  .filter(entry => entry.isDirectory() && /^theme\d+$/.test(entry.name))
  .map(entry => entry.name)
  .sort((a, b) => (generatedOrder.get(a) ?? 999) - (generatedOrder.get(b) ?? 999) || a.localeCompare(b));

const themes = [];
const pages = [];

for (const themeKey of themeDirs) {
  const metadataFile = path.join(THEMES_DIR, themeKey, 'metadata.js');
  if (!readFileSafe(metadataFile)) continue;
  const module = await import(`${pathToFileURL(metadataFile).href}?t=${Date.now()}`);
  if (!module.theme || !Array.isArray(module.pages) || !module.pages.length) continue;
  const normalizedPages = module.pages.map(page => ({
    ...page,
    controls: normalizePageControls(page),
  }));
  const theme = {
    ...module.theme,
    pageCount: normalizedPages.length,
  };
  themes.push(theme);
  pages.push(...normalizedPages);
  writeFileSync(
    metadataFile,
    `export const theme = ${JSON.stringify(stripPageCount(theme), null, 2)};\nexport const pages = ${JSON.stringify(normalizedPages, null, 2)};\n`,
  );
}

writeFileSync(
  path.join(THEMES_DIR, 'generated-metadata.js'),
  `export const GENERATED_THEME_PACKS = ${JSON.stringify(themes, null, 2)};\n\nexport const GENERATED_THEME_PAGES = ${JSON.stringify(pages, null, 2)};\n`,
);

console.log(`Updated generated metadata for ${themes.length} theme(s), ${pages.length} page(s).`);

function normalizePageControls(page) {
  return normalizePublicControls(page.controls || [], { layout: page.key, themeKey: page.themeKey })
    .map(control => Object.fromEntries(Object.entries(control).filter(([, value]) => value !== undefined)));
}

function stripPageCount(theme) {
  const { pageCount, ...rest } = theme;
  return rest;
}

function readFileSafe(file) {
  try {
    return readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}
