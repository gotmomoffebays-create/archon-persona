#!/usr/bin/env node
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const statePath = join(root, '.cursor', 'devam.state.json');
const max = Number(process.argv[2]) || 40;

mkdirSync(join(root, '.cursor'), { recursive: true });
const prev = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : {};
const state = {
  ...prev,
  active: true,
  iteration: 0,
  max_iterations: max,
  prompt:
    prev.prompt ||
    'devam — Archon deepen. ROADMAP open items. Ship next batch. npm test + sync. Do not declare pack finished.',
  updated_at: new Date().toISOString(),
  stopped_reason: null,
};
writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');
console.log(`devam ON — max ${max} auto-continues. Stop: node scripts/devam-off.mjs`);
