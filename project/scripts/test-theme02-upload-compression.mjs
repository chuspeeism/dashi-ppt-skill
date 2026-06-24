import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PNG } from 'pngjs';
import { chromium } from 'playwright-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME_CANDIDATES = [
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  path.join(os.homedir(), '.cache/puppeteer/chrome/mac_arm-121.0.6167.85/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'),
  path.join(os.homedir(), '.cache/puppeteer/chrome-headless-shell/mac_arm-121.0.6167.85/chrome-headless-shell-mac-arm64/chrome-headless-shell'),
].filter(Boolean);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function renderGoal(goalPath, outPath) {
  const result = spawnSync('npm', ['run', 'render:goal', '--', goalPath, outPath], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    throw new Error(`render:goal failed\n${result.stdout}\n${result.stderr}`);
  }
}

function chromePath() {
  return CHROME_CANDIDATES.find(candidate => existsSync(candidate));
}

function writeNoisePng(filePath) {
  const width = 1800;
  const height = 1800;
  const png = new PNG({ width, height, colorType: 2 });
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = (width * y + x) << 2;
      png.data[idx] = (x * 17 + y * 13) & 255;
      png.data[idx + 1] = (x * 7 + y * 23) & 255;
      png.data[idx + 2] = (x * 31 + y * 5) & 255;
      png.data[idx + 3] = 255;
    }
  }
  writeFileSync(filePath, PNG.sync.write(png, { colorType: 2 }));
}

async function main() {
  const executablePath = chromePath();
  assert(executablePath, 'Chromium/Chrome executable not found for browser upload test');

  const tmp = mkdtempSync(path.join(os.tmpdir(), 'theme02-upload-'));
  const goalPath = path.join(tmp, 'goal.json');
  const outPath = path.join(tmp, 'ppt/index.html');
  const uploadPath = path.join(tmp, 'large-upload.png');
  writeNoisePng(uploadPath);
  writeFileSync(goalPath, JSON.stringify({
    title: 'Theme02 upload compression test',
    goal: 'Verify large image uploads are compressed before deck state persistence.',
    themePack: 'theme02',
    slides: [{ layout: 'theme02_page030', props: {} }],
  }, null, 2));
  renderGoal(goalPath, outPath);

  const browser = await chromium.launch({ headless: true, executablePath });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const logs = [];
  page.on('console', message => logs.push(`${message.type()}: ${message.text()}`));
  await page.goto(pathToFileURL(outPath).href, { waitUntil: 'domcontentloaded' });
  const activeSlotButton = '#deck > .slide.active .gxn-slot-add';
  await page.waitForSelector(activeSlotButton, { timeout: 10000 });

  await page.locator(activeSlotButton).first().click({ force: true });
  const input = page.locator('input[type="file"]').last();
  await input.waitFor({ state: 'attached', timeout: 5000 });
  await input.setInputFiles(uploadPath);
  await page.waitForTimeout(2500);

  const result = await page.evaluate(() => {
    const slide = document.querySelector('#deck > .slide.active') || document.querySelector('#deck > .slide');
    const state = window.__deckViewModel?.getState?.();
    const props = state?.props?.[slide?.dataset.vmSlideId];
    const stored = localStorage.getItem('dashi-ppt-view-model') || '';
    return {
      renderedImages: slide?.querySelectorAll('.gxn-slot img').length || 0,
      storedLength: stored.length,
      uploadedLength: props?.images?.[0]?.src?.length || 0,
      uploadedType: props?.images?.[0]?.type || '',
      urlStatus: window.__deckUrlStateStatus || {},
    };
  });
  await browser.close();

  assert(result.renderedImages === 1, `expected uploaded image to render, got ${result.renderedImages}`);
  assert(result.uploadedType === 'image/webp', `expected compressed WebP upload, got ${result.uploadedType || 'empty'}`);
  assert(result.uploadedLength > 0 && result.uploadedLength < 1_800_000, `expected compressed image below 1.8MB, got ${result.uploadedLength}`);
  assert(result.storedLength > 0 && result.storedLength < 3_000_000, `expected persisted state below 3MB, got ${result.storedLength}`);
  assert(!logs.some(line => /QuotaExceededError|state could not be persisted/.test(line)), `unexpected persistence warning:\n${logs.join('\n')}`);

  console.log('theme02 upload compression ok');
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
