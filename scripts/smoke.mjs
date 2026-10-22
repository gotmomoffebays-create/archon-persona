#!/usr/bin/env node
/**
 * Post-sync smoke: all tests + (unless --ci) skill install targets on this machine.
 */
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ci = process.argv.includes('--ci') || process.env.CI === 'true' || process.env.ARCHON_CI === '1';

for (const rel of [
  'tests/content.test.mjs',
  'tests/demos.test.mjs',
  'tests/dogfood.test.mjs',
  'tests/await-dogfood.test.mjs',
]) {
  const test = spawnSync(process.execPath, [join(root, rel)], { stdio: 'inherit' });
  if (test.status !== 0) process.exit(test.status ?? 1);
}

if (ci) {
  console.log('smoke ok — tests green (CI mode: skip ~/.agents check)');
  process.exit(0);
}

const seats = ['archon', 'blade', 'mirror', 'loom', 'apex-chamber'];
const agents = join(homedir(), '.agents', 'skills');
let missing = 0;
for (const s of seats) {
  const p = join(agents, s, 'SKILL.md');
  if (!existsSync(p)) {
    console.error('missing sync target', p);
    missing++;
  }
}
if (missing) {
  console.error(`smoke: ${missing} seats not in ~/.agents/skills — run npm run sync-local`);
  process.exit(1);
}
console.log('smoke ok — tests green, ~/.agents/skills seats present');
