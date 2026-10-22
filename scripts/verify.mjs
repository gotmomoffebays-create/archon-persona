#!/usr/bin/env node
/**
 * Full local verify: tests → dogfood sheet → stats → smoke (agents present).
 */
import { spawnSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const node = process.execPath;

function run(label, args) {
  console.log(`\n== ${label} ==`);
  const r = spawnSync(node, args, { cwd: root, stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

run('test', [join(root, 'tests/content.test.mjs')]);
run('demos', [join(root, 'tests/demos.test.mjs')]);
run('dogfood-parse', [join(root, 'tests/dogfood.test.mjs')]);
run('dogfood sheet', [join(root, 'scripts/dogfood-print.mjs')]);
run('stats', [join(root, 'scripts/spellbook-stats.mjs')]);
run('smoke', [join(root, 'scripts/smoke.mjs')]); // local: requires sync-local once

console.log('\nverify ok — for CI without ~/.agents: npm test && npm run smoke -- --ci');
