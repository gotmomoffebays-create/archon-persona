#!/usr/bin/env node
/**
 * Exit 0 if evals/RUNLOG.md contains a completed cold run.
 * Exit 1 with instructions otherwise (founder gate).
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const runlog = join(root, 'evals/RUNLOG.md');

if (!existsSync(runlog)) {
  fail('missing evals/RUNLOG.md');
}

const text = readFileSync(runlog, 'utf8');

// Completed run: a ### Run dated heading + at least one G1: pass or fail (not stub underscores only)
const hasDatedRun = /^### Run \d{4}-\d{2}-\d{2}/m.test(text);
const hasScored =
  /^-\s*G1:\s*(pass|fail)\b/im.test(text) ||
  /^-\s*G3:\s*(pass|fail)\b/im.test(text) ||
  /^-\s*G7:\s*(pass|fail)\b/im.test(text);

if (hasDatedRun && hasScored) {
  console.log('await-dogfood ok — RUNLOG has a scored cold run');
  process.exit(0);
}

fail(
  [
    'No completed cold RUNLOG yet (founder gate).',
    '',
    'Do this:',
    '  npm run dogfood-ready',
    '  → new Agent chat → paste G1, G3, G7 from evals/DOGFOOD-SHEET.md',
    '  → fill evals/RUNLOG.md with real pass/fail lines',
    '',
    'Then re-run: npm run await-dogfood',
    '',
    'See FOUNDER.md',
  ].join('\n'),
);

function fail(msg) {
  console.error(msg);
  process.exit(1);
}
