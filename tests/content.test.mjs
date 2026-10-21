import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let passed = 0;
function ok(cond, msg) {
  assert.ok(cond, msg);
  passed++;
}

const seats = ['archon', 'blade', 'mirror', 'loom', 'apex-chamber'];
for (const s of seats) {
  const skill = join(root, 'skills', s, 'SKILL.md');
  ok(existsSync(skill), `missing ${s}/SKILL.md`);
  const t = readFileSync(skill, 'utf8');
  ok(t.startsWith('---'), `${s} needs frontmatter`);
  ok(/^name:\s+/m.test(t), `${s} needs name`);
  ok(/description:/m.test(t), `${s} needs description`);
  ok(!/TODO: implement/i.test(t), `${s} has TODO stub`);
  ok(!/(^|\n)\s*(Sure!|Happy to help)/i.test(t), `${s} has banned sludge opener`);
  const lines = t.split('\n').length;
  ok(lines < 500, `${s} SKILL.md must be <500 lines (got ${lines})`);
}

const archon = readFileSync(join(root, 'skills/archon/SKILL.md'), 'utf8');
ok(/method-spine|P5|Domain Attunement/i.test(archon), 'archon protocols present');
ok(/method-spine\.md/.test(archon), 'archon points at method-spine');

const refs = [
  'domain-lenses.md',
  'self-audit.md',
  'hotkeys.md',
  'worked-examples.md',
  'voice-and-lore.md',
  'failure-modes.md',
  'method-spine.md',
  'onboarding.md',
  'guests.md',
];
for (const r of refs) {
  ok(existsSync(join(root, 'skills/archon/references', r)), `missing ref ${r}`);
}

for (const facet of ['blade', 'mirror', 'loom']) {
  ok(
    existsSync(join(root, 'skills', facet, 'references', 'worked-bar.md')),
    `${facet} needs worked-bar`,
  );
}

ok(
  existsSync(join(root, 'skills/apex-chamber/references/guest-and-pressure.md')),
  'chamber guest-and-pressure',
);

const hotkeys = readFileSync(join(root, 'skills/archon/references/hotkeys.md'), 'utf8');
for (const k of ['W', 'A', 'S', 'D', 'Q', 'F', 'K', 'GG']) {
  ok(new RegExp(`\\b${k}\\b`).test(hotkeys), `hotkey ${k}`);
}

const chamber = readFileSync(join(root, 'skills/apex-chamber/SKILL.md'), 'utf8');
ok(/Mirror/i.test(chamber) && /Blade/i.test(chamber) && /Loom/i.test(chamber), 'chamber seats named');
ok(/four|4 seats|Max four/i.test(chamber), 'four-seat cap stated');
ok(
  /Max four|four seats|Four seats/i.test(chamber) && /never a fifth|No fifth|not a fifth/i.test(chamber),
  'four-seat law + fifth ban stated',
);

const spine = readFileSync(join(root, 'skills/archon/references/method-spine.md'), 'utf8');
ok(/VERIFIED|INFERRED|ASSUMED|UNKNOWN/.test(spine), 'evidence ladder');
ok(/RESTATE|ATTUNE|GRADE|AUDIT/i.test(spine), 'spine steps');

const readme = readFileSync(join(root, 'README.md'), 'utf8');
ok(/method/i.test(readme) && /Grim/i.test(readme), 'README positioning vs Grim');
ok(/MIT|no warranty|not.*advice/i.test(readme), 'README legal hygiene');

ok(existsSync(join(root, 'LICENSE')), 'LICENSE');
ok(existsSync(join(root, '.cursor-plugin/plugin.json')), 'plugin.json');
ok(existsSync(join(root, 'council-archon-deepen/verdict.md')), 'war-room verdict archived');

console.log(`ok ${passed} checks`);
