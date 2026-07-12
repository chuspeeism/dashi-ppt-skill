#!/usr/bin/env node
/**
 * Unit tests for version comparison logic (extracted from check_latest_version.mjs).
 * Run: node --test tests/check-version.test.mjs
 */
import { describe, it } from 'node:test';
import assert from 'node:assert';

// Version parsing and comparison — extracted for testability
function parseVersion(version) {
  return String(version)
    .replace(/^v/i, '')
    .split(/[.-]/)
    .map((part) => Number.parseInt(part, 10))
    .filter(Number.isFinite);
}

function compareVersions(a, b) {
  const left = parseVersion(a);
  const right = parseVersion(b);
  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    const delta = (left[index] || 0) - (right[index] || 0);
    if (delta !== 0) return delta;
  }
  return 0;
}

describe('version comparison', () => {
  const cases = [
    // [a, b, expected] — negative means a < b, positive means a > b, 0 = equal
    ['0.4.0', '0.3.0', 1],
    ['0.3.0', '0.3.0', 0],
    ['0.2.9', '0.3.0', -1],
    ['1.0.0', '0.9.9', 1],
    ['0.10.0', '0.9.0', 1],
    ['0.3.1', '0.3.0', 1],
    ['v0.3.0', '0.3.0', 0],
    ['0.3.0-beta', '0.3.0', 0], // pre-release suffix ignored
    ['0.3.0', '0.3.0-beta', 0],
    ['1.2.3', '1.2.4', -1],
    ['2.0.0', '1.99.99', 1],
  ];

  for (const [a, b, expected] of cases) {
    it(`compare("${a}", "${b}") = ${expected > 0 ? '>' : expected < 0 ? '<' : '='}`, () => {
      const result = compareVersions(a, b);
      assert.strictEqual(
        Math.sign(result),
        Math.sign(expected),
        `Expected compareVersions("${a}", "${b}") to have sign ${Math.sign(expected)}, got ${result}`
      );
    });
  }
});

describe('parseVersion', () => {
  it('parses simple semver', () => {
    assert.deepStrictEqual(parseVersion('0.3.0'), [0, 3, 0]);
  });

  it('strips v prefix', () => {
    assert.deepStrictEqual(parseVersion('v1.2.3'), [1, 2, 3]);
  });

  it('handles unknown format gracefully', () => {
    // Non-parseable parts become NaN and are filtered out
    const result = parseVersion('unknown');
    assert.deepStrictEqual(result, []);
  });
});
