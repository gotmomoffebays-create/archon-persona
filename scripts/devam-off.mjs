#!/usr/bin/env node
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const statePath = join(root, '.cursor', 'devam.state.json');
mkdirSync(join(root, '.cursor'), { recursive: true });
const prev = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : {};
const state = {
  ...prev,
  active: false,
  stopped_reason: 'manual devam-off',
  updated_at: new Date().toISOString(),
};
writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');
console.log('devam OFF — stop hook will not inject followups');
