import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const demosDir = join(root, 'demos');
let passed = 0;
function ok(c, m) {
  assert.ok(c, m);
  passed++;
}

ok(existsSync(demosDir), 'demos dir');
const files = readdirSync(demosDir).filter((f) => f.endsWith('.md'));
ok(files.length >= 8, `≥8 demos (got ${files.length})`);

for (const f of files) {
  const t = readFileSync(join(demosDir, f), 'utf8');
  ok(/Kill criteria|kill criteria/i.test(t), `${f} has kill criteria`);
  ok(/Next move|Verdict/i.test(t), `${f} has verdict or next move`);
  ok(!/(^|\n)\s*(Sure!|Happy to help)/i.test(t), `${f} no sludge opener`);
}

console.log(`ok ${passed} demo checks`);
