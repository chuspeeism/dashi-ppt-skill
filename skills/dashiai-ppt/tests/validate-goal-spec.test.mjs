#!/usr/bin/env node
/**
 * Smoke tests for validate-goal-spec.mjs.
 * Run: node --test tests/validate-goal-spec.test.mjs
 */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROJECT = path.resolve(HERE, '..', 'project');

// Dynamic import because the script uses ESM with relative imports
const { validateGoalSpec } = await import(
  path.join(PROJECT, 'scripts/validate-goal-spec.mjs')
);

function loadFixture(name) {
  return JSON.parse(
    fs.readFileSync(path.join(HERE, 'fixtures', name), 'utf8')
  );
}

describe('validateGoalSpec', () => {
  it('passes a valid goal spec', () => {
    const spec = loadFixture('valid-goal.json');
    const errors = validateGoalSpec(spec);
    assert.deepStrictEqual(errors, []);
  });

  it('rejects empty slides', () => {
    const errors = validateGoalSpec({ slides: [] });
    assert.ok(errors.length > 0, 'should have errors for empty slides');
    assert.ok(
      errors.some((e) => e.includes('non-empty')),
      'should mention non-empty slides'
    );
  });

  it('rejects unknown themePack', () => {
    const errors = validateGoalSpec({
      themePack: 'theme99',
      slides: [{ layout: 'theme01_page001', props: {} }],
    });
    assert.ok(
      errors.some((e) => e.includes('unknown or unavailable themePack')),
      'should flag unknown theme'
    );
  });

  it('rejects duplicate layouts', () => {
    const errors = validateGoalSpec({
      themePack: 'theme01',
      slides: [
        { layout: 'theme01_page006', props: { title: 'Page One' } },
        { layout: 'theme01_page006', props: { title: 'Page Two' } },
      ],
    });
    assert.ok(
      errors.some((e) => e.includes('duplicate layout')),
      'should flag duplicate layout'
    );
  });

  it('rejects multiple covers', () => {
    const errors = validateGoalSpec({
      themePack: 'theme01',
      slides: [
        { layout: 'theme01_page001', props: {} },
        { layout: 'theme01_page002', props: {} },
      ],
    });
    assert.ok(
      errors.some((e) => e.includes('only one cover candidate')),
      'should flag multiple covers'
    );
  });

  it('rejects unknown layout', () => {
    const errors = validateGoalSpec({
      themePack: 'theme01',
      slides: [{ layout: 'nonexistent_page999', props: {} }],
    });
    assert.ok(
      errors.some((e) => e.includes('unknown layout')),
      'should flag unknown layout'
    );
  });

  it('accepts language field', () => {
    const spec = loadFixture('valid-goal.json');
    spec.language = 'en';
    const errors = validateGoalSpec(spec);
    assert.deepStrictEqual(errors, []);
  });

  it('rejects unsupported language', () => {
    const spec = loadFixture('valid-goal.json');
    spec.language = 'fr';
    const errors = validateGoalSpec(spec);
    assert.ok(
      errors.some((e) => e.includes('unsupported')),
      'should flag unsupported language'
    );
  });

  it('rejects top-level media field in deck', () => {
    const spec = {
      slides: [{ layout: 'theme01_page001', props: {} }],
      media: [{ src: 'test.png' }],
    };
    const errors = validateGoalSpec(spec);
    assert.ok(
      errors.some((e) => e.includes('top-level media')),
      'should flag top-level media'
    );
  });
});
