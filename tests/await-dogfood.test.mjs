import { spawnSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let passed = 0;
function ok(c, m) {
  assert.ok(c, m);
  passed++;
}

const script = join(root, 'scripts/await-dogfood.mjs');
ok(existsSync(script), 'await-dogfood.mjs');
ok(existsSync(join(root, 'FOUNDER.md')), 'FOUNDER.md');

const r = spawnSync(process.execPath, [script], { cwd: root, encoding: 'utf8' });
// Until founder fills RUNLOG, this must fail closed
ok(r.status === 1, `await-dogfood exits 1 before dogfood (got ${r.status})`);
ok(/dogfood-ready|RUNLOG|FOUNDER/i.test(r.stderr + r.stdout), 'prints instructions');

console.log(`ok ${passed} await-dogfood checks`);
