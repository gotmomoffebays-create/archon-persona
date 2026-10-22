#!/usr/bin/env node
/**
 * One-shot: verify (local) → sync-local → dogfood sheet → print human next steps.
 */
import { spawnSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, existsSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const node = process.execPath;

function run(args, inherit = true) {
  const r = spawnSync(node, args, {
    cwd: root,
    stdio: inherit ? 'inherit' : 'pipe',
    encoding: 'utf8',
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
  return r;
}

console.log('== verify ==');
run([join(root, 'scripts/verify.mjs')]);

console.log('\n== sync-local ==');
run([join(root, 'scripts/sync-local.mjs')]);

console.log('\n== dogfood ==');
run([join(root, 'scripts/dogfood-print.mjs')]);

const sheet = join(root, 'evals/DOGFOOD-SHEET.md');
const head = existsSync(sheet) ? readFileSync(sheet, 'utf8').split('\n').slice(0, 6).join('\n') : '';

console.log(`
========================================
DOGFOOD READY
========================================
1. Restart Cursor (or ensure skills reloaded)
2. Open a NEW Agent chat — no coaching, no demos pasted as answers
3. Open: ${sheet}
4. Paste G1, then G3, then G7 as user messages
5. Fill evals/RUNLOG.md (stub is at bottom of the sheet)

${head}
========================================
`);
