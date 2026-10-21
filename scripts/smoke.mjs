#!/usr/bin/env node
/**
 * Post-sync smoke: content tests + skill install targets exist on this machine.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const test = spawnSync(process.execPath, [join(root, 'tests/content.test.mjs')], {
  stdio: 'inherit',
});
if (test.status !== 0) process.exit(test.status ?? 1);

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
