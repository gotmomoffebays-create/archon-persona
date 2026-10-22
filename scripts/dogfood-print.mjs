#!/usr/bin/env node
/**
 * Print GOLDEN prompts for cold dogfood copy-paste.
 * Usage: npm run dogfood          → G1 G3 G7 (minimum)
 *        npm run dogfood -- all   → every G#
 *        npm run dogfood -- G7 G9 → selected
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const golden = readFileSync(join(root, 'evals/GOLDEN.md'), 'utf8');

let sha = 'unknown';
try {
  sha = execSync('git rev-parse --short HEAD', { cwd: root, encoding: 'utf8' }).trim();
} catch {
  /* ignore */
}

const args = process.argv.slice(2).filter((a) => a !== '--');
const wantAll = args.includes('all');
const ids = wantAll
  ? [...golden.matchAll(/^## (G\d+)/gm)].map((m) => m[1])
  : args.length
    ? args.map((a) => a.toUpperCase().replace(/^G?/, 'G'))
    : ['G1', 'G3', 'G7'];

function extract(id) {
  const re = new RegExp(`## ${id}\\b[\\s\\S]*?(?=\\n## G\\d+|\\n## Scoring)`);
  const m = golden.match(re);
  return m ? m[0].trim() : null;
}

const parts = [];
parts.push(`# Cold dogfood sheet — sync commit \`${sha}\``);
parts.push('');
parts.push('1. `npm test && npm run sync-local && npm run smoke`');
parts.push('2. Restart Cursor → **new** Agent chat (no coaching)');
parts.push('3. Paste each block below as the user message');
parts.push('4. Score → append to `evals/RUNLOG.md` (see HOW-TO-RUNLOG.md)');
parts.push('');

for (const id of ids) {
  const block = extract(id);
  if (!block) {
    console.error(`missing ${id} in GOLDEN.md`);
    process.exit(1);
  }
  parts.push('---');
  parts.push('');
  parts.push(block);
  parts.push('');
}

parts.push('---');
parts.push('');
parts.push('## RUNLOG stub (paste into evals/RUNLOG.md)');
parts.push('');
parts.push('```');
parts.push(`### Run ${new Date().toISOString().slice(0, 10)}`);
parts.push(`- Sync commit: ${sha}`);
for (const id of ids) {
  parts.push(`- ${id}: pass/fail — notes:`);
}
parts.push('- Would invoke again tomorrow? Y/N');
parts.push('```');

const text = parts.join('\n') + '\n';
const outPath = join(root, 'evals/DOGFOOD-SHEET.md');
writeFileSync(outPath, text);
process.stdout.write(text);
console.error(`\n(wrote ${outPath})`);
