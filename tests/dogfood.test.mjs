import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let passed = 0;
function ok(c, m) {
  assert.ok(c, m);
  passed++;
}

const script = join(root, 'scripts/dogfood-print.mjs');
ok(existsSync(script), 'dogfood-print.mjs');

const r = spawnSync(process.execPath, [script], {
  cwd: root,
  encoding: 'utf8',
});
ok(r.status === 0, `dogfood exit 0 (got ${r.status})`);
ok(/G1/i.test(r.stdout) && /G3/i.test(r.stdout) && /G7/i.test(r.stdout), 'stdout has G1 G3 G7');
ok(/Sync commit|sync commit/i.test(r.stdout), 'stdout has sync commit');
ok(/RUNLOG stub/i.test(r.stdout), 'stdout has RUNLOG stub');

const sheet = join(root, 'evals/DOGFOOD-SHEET.md');
ok(existsSync(sheet), 'DOGFOOD-SHEET.md written');
const body = readFileSync(sheet, 'utf8');
ok(body.includes('/archon') || body.includes('/apex-chamber'), 'sheet has slash invoke');
ok(!/Sure!|Happy to help/i.test(body), 'sheet no sludge');

const all = spawnSync(process.execPath, [script, 'all'], {
  cwd: root,
  encoding: 'utf8',
});
ok(all.status === 0, 'dogfood all exit 0');
const gCount = (all.stdout.match(/^## G\d+/gm) || []).length;
ok(gCount >= 10, `dogfood all has ≥10 G sections (got ${gCount})`);

console.log(`ok ${passed} dogfood checks`);
