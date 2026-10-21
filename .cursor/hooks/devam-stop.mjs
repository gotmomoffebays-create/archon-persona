#!/usr/bin/env node
/**
 * Stop hook: when the agent ends a turn and devam is armed, inject followup "devam"
 * so Archon deepen keeps going until max_iterations or devam-off.
 *
 * API: stdin JSON { status, loop_count, ... }
 * stdout: { followup_message } to continue, or {} / empty to stop
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.env.CURSOR_PROJECT_DIR || process.cwd();
const statePath = join(root, '.cursor', 'devam.state.json');

function readStdin() {
  try {
    return JSON.parse(readFileSync(0, 'utf8') || '{}');
  } catch {
    return {};
  }
}

function out(obj) {
  process.stdout.write(JSON.stringify(obj));
}

const input = readStdin();
const status = input.status || 'completed';

// Never force-continue on abort/error
if (status === 'aborted' || status === 'error') {
  out({});
  process.exit(0);
}

if (!existsSync(statePath)) {
  out({});
  process.exit(0);
}

let state;
try {
  state = JSON.parse(readFileSync(statePath, 'utf8'));
} catch {
  out({});
  process.exit(0);
}

if (!state.active) {
  out({});
  process.exit(0);
}

const max = Number(state.max_iterations) || 40;
const iteration = Number(state.iteration) || 0;
const loopCount = Number(input.loop_count) || 0;

if (iteration >= max || loopCount >= max) {
  state.active = false;
  state.stopped_reason = `max_iterations (${max})`;
  writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');
  console.error(`[devam] max iterations ${max} — stopping auto-continue`);
  out({});
  process.exit(0);
}

state.iteration = iteration + 1;
state.last_loop_count = loopCount;
state.updated_at = new Date().toISOString();
mkdirSync(join(root, '.cursor'), { recursive: true });
writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');

const prompt =
  state.prompt ||
  'devam — Archon spellbook deepen. ROADMAP.md next open items. Do not declare finished. npm test + sync-local when you ship a batch. Stop only if user said dur/iptal or devam.state active=false.';

const followup = [
  `devam`,
  ``,
  `[devam auto #${state.iteration}/${max} — stop: node scripts/devam-off.mjs]`,
  prompt,
].join('\n');

out({ followup_message: followup });
process.exit(0);
