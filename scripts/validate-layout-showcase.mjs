#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const optionsFile = 'src/options.jsx';
const showcaseFile = 'examples/component-decks/all-layouts-showcase.jsx';

const options = readFileSync(optionsFile, 'utf8');
const showcase = readFileSync(showcaseFile, 'utf8');

const canonicalLayouts = [...options.matchAll(/^\s*(s\d{2}):\s*\{[\s\S]*?dataLayout:\s*'S(\d{2})'/gm)]
  .map((match) => ({ key: match[1], dataLayout: `S${match[2]}` }))
  .filter((layout) => layout.key === layout.dataLayout.toLowerCase());
const magazineLayouts = [...options.matchAll(/^\s*(a\d{2}):\s*\{[\s\S]*?dataLayout:\s*'A(\d{2})'/gm)]
  .map((match) => ({ key: match[1], dataLayout: `A${match[2]}` }))
  .filter((layout) => layout.key === layout.dataLayout.toLowerCase());

const showcaseKeys = [...showcase.matchAll(/slide\('([^']+)'/g)].map((match) => match[1]);
const showcaseCanonicalKeys = showcaseKeys.filter((key) => /^s\d{2}$/.test(key));
const showcaseMagazineKeys = showcaseKeys.filter((key) => /^a\d{2}$/.test(key));
const expectedKeys = canonicalLayouts.map((layout) => layout.key);
const expectedMagazineKeys = magazineLayouts.map((layout) => layout.key);
const requiredExtensionKeys = ['s08Map'].filter((key) => new RegExp(`^\\s*${key}:\\s*\\{`, 'm').test(options));

const missing = expectedKeys.filter((key) => !showcaseCanonicalKeys.includes(key));
const extra = showcaseCanonicalKeys.filter((key) => !expectedKeys.includes(key));
const duplicates = showcaseCanonicalKeys.filter((key, index) => showcaseCanonicalKeys.indexOf(key) !== index);
const missingMagazine = expectedMagazineKeys.filter((key) => !showcaseMagazineKeys.includes(key));
const extraMagazine = showcaseMagazineKeys.filter((key) => !expectedMagazineKeys.includes(key));
const duplicateMagazine = showcaseMagazineKeys.filter((key, index) => showcaseMagazineKeys.indexOf(key) !== index);
const missingExtensions = requiredExtensionKeys.filter((key) => !showcaseKeys.includes(key));

if (missing.length || extra.length || duplicates.length || missingMagazine.length || extraMagazine.length || duplicateMagazine.length || missingExtensions.length) {
  if (missing.length) console.error(`Missing layout(s) in ${showcaseFile}: ${missing.join(', ')}`);
  if (extra.length) console.error(`Unknown layout(s) in ${showcaseFile}: ${extra.join(', ')}`);
  if (duplicates.length) console.error(`Duplicate layout(s) in ${showcaseFile}: ${[...new Set(duplicates)].join(', ')}`);
  if (missingMagazine.length) console.error(`Missing magazine layout(s) in ${showcaseFile}: ${missingMagazine.join(', ')}`);
  if (extraMagazine.length) console.error(`Unknown magazine layout(s) in ${showcaseFile}: ${extraMagazine.join(', ')}`);
  if (duplicateMagazine.length) console.error(`Duplicate magazine layout(s) in ${showcaseFile}: ${[...new Set(duplicateMagazine)].join(', ')}`);
  if (missingExtensions.length) console.error(`Missing Style B extension(s) in ${showcaseFile}: ${missingExtensions.join(', ')}`);
  process.exit(1);
}

console.log(`Layout showcase covers ${expectedMagazineKeys.length} magazine layout(s): ${expectedMagazineKeys.join(', ') || '(none)'}`);
console.log(`Layout showcase covers ${expectedKeys.length} canonical layout(s): ${expectedKeys.join(', ') || '(none)'}`);
console.log(`Layout showcase covers Style B extension(s): ${requiredExtensionKeys.join(', ') || '(none)'}`);
