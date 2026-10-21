import { readFileSync, existsSync, readdirSync } from 'node:fs';
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
ok(/method-spine\.md/.test(archon), 'archon points at method-spine');
ok(/atlas-index/.test(archon), 'archon points at atlas-index');

const archonRefs = [
  'domain-lenses.md',
  'self-audit.md',
  'hotkeys.md',
  'worked-examples.md',
  'voice-and-lore.md',
  'failure-modes.md',
  'method-spine.md',
  'onboarding.md',
  'guests.md',
  'decision-trees.md',
  'anti-patterns.md',
  'session-ledger.md',
  'evolution-loop.md',
  'router-table.md',
  'atlas-index.md',
  'calibration.md',
  'evidence-recipes.md',
  'confrontation.md',
];
for (const r of archonRefs) {
  ok(existsSync(join(root, 'skills/archon/references', r)), `missing ref ${r}`);
}

for (const lens of [
  'engineering',
  'security',
  'product',
  'life',
  'strategy',
  'ops',
  'research',
  'negotiation',
  'taste',
  'architecture',
]) {
  ok(
    existsSync(join(root, 'skills/archon/references/lenses', `${lens}.md`)),
    `lens pack ${lens}`,
  );
}
const golden = readFileSync(join(root, 'evals/GOLDEN.md'), 'utf8');
ok(/G7/i.test(golden), 'GOLDEN has G7');
ok(/G8/i.test(golden), 'GOLDEN has G8');
ok(/G9/i.test(golden) && /G10/i.test(golden), 'GOLDEN has G9+G10');
ok(
  /unanimity bait|hepimiz hemfikiriz|re-pressure/i.test(
    readFileSync(join(root, 'skills/apex-chamber/SKILL.md'), 'utf8'),
  ),
  'chamber unanimity bait rule',
);
ok(existsSync(join(root, 'evals/EVOLUTION-001.md')), 'evolution-001');
ok(existsSync(join(root, 'demos/marketplace-wedge.md')), 'marketplace demo');
ok(
  /Tree T7/i.test(readFileSync(join(root, 'skills/archon/references/decision-trees.md'), 'utf8')),
  'Tree T7 marketplace',
);
ok(existsSync(join(root, '.cursor/hooks.json')), 'project hooks.json');
ok(existsSync(join(root, '.cursor/hooks/devam-stop.mjs')), 'devam-stop hook');
ok(existsSync(join(root, 'scripts/devam-on.mjs')), 'devam-on');
ok(existsSync(join(root, 'scripts/devam-off.mjs')), 'devam-off');
ok(existsSync(join(root, 'skills/archon/references/hotkeys.tr.md')), 'hotkeys.tr');
ok(existsSync(join(root, 'demos/g7-blandness-bait.md')), 'g7 demo');

for (const facet of ['blade', 'mirror', 'loom']) {
  ok(existsSync(join(root, 'skills', facet, 'references', 'worked-bar.md')), `${facet} worked-bar`);
  ok(existsSync(join(root, 'skills', facet, 'references', 'protocol.md')), `${facet} protocol`);
  ok(existsSync(join(root, 'skills', facet, 'references', 'anti-patterns.md')), `${facet} anti-patterns`);
}

for (const f of ['guest-and-pressure.md', 'scene-craft.md', 'escalation.md']) {
  ok(existsSync(join(root, 'skills/apex-chamber/references', f)), `chamber ${f}`);
}

const hotkeys = readFileSync(join(root, 'skills/archon/references/hotkeys.md'), 'utf8');
for (const k of ['W', 'A', 'S', 'D', 'Q', 'F', 'K', 'GG', 'H', 'EV']) {
  ok(new RegExp(`\\b${k}\\b`).test(hotkeys), `hotkey ${k}`);
}

const chamber = readFileSync(join(root, 'skills/apex-chamber/SKILL.md'), 'utf8');
ok(/Mirror/i.test(chamber) && /Blade/i.test(chamber) && /Loom/i.test(chamber), 'chamber seats named');
ok(/four|4 seats|Max four|Four seats/i.test(chamber), 'four-seat cap stated');
ok(/never a fifth|No fifth|not a fifth/i.test(chamber), 'fifth ban stated');
ok(/scene-craft/.test(chamber), 'chamber points at scene-craft');

const spine = readFileSync(join(root, 'skills/archon/references/method-spine.md'), 'utf8');
ok(/VERIFIED|INFERRED|ASSUMED|UNKNOWN/.test(spine), 'evidence ladder');
ok(/RESTATE|ATTUNE|GRADE|AUDIT/i.test(spine), 'spine steps');

const examples = readFileSync(join(root, 'skills/archon/references/worked-examples.md'), 'utf8');
ok((examples.match(/^## Example /gm) || []).length >= 12, '≥12 worked examples');
ok(/Example O/i.test(examples), 'example O');
ok((examples.match(/^## Example /gm) || []).length >= 14, '≥14 worked examples');
ok(
  /Tree T9/i.test(readFileSync(join(root, 'skills/archon/references/decision-trees.md'), 'utf8')),
  'Tree T9',
);
ok(existsSync(join(root, 'demos/g9-instant-payout.md')), 'g9 demo');
ok(existsSync(join(root, 'demos/g10-over-chamber.md')), 'g10 demo');
ok(
  /evidence-recipes/.test(readFileSync(join(root, 'skills/archon/references/method-spine.md'), 'utf8')),
  'spine links evidence-recipes',
);

const readme = readFileSync(join(root, 'README.md'), 'utf8');
ok(/method/i.test(readme) && /Grim/i.test(readme), 'README positioning vs Grim');
ok(/MIT|no warranty|not.*advice/i.test(readme), 'README legal hygiene');
ok(/ROADMAP|evals\/GOLDEN/i.test(readme), 'README points at ongoing work');

ok(existsSync(join(root, 'LICENSE')), 'LICENSE');
ok(existsSync(join(root, 'CONTRIBUTING.md')), 'CONTRIBUTING');
ok(existsSync(join(root, 'ROADMAP.md')), 'ROADMAP');
ok(existsSync(join(root, 'evals/GOLDEN.md')), 'GOLDEN evals');
ok(existsSync(join(root, 'evals/RUNLOG.md')), 'RUNLOG');
ok(existsSync(join(root, 'demos/solo-archon-session.md')), 'demo solo');
ok(existsSync(join(root, 'demos/apex-chamber-session.md')), 'demo chamber');
ok(existsSync(join(root, 'demos/guest-session.md')), 'demo guest');
ok(existsSync(join(root, 'council-archon-deepen/verdict.md')), 'war-room verdict');
ok(existsSync(join(root, '.cursor-plugin/plugin.json')), 'plugin.json');

// No accidental fifth seat skill folder
const skillDirs = readdirSync(join(root, 'skills'));
ok(skillDirs.length === 5, `exactly 5 skill dirs (got ${skillDirs.join(',')})`);

console.log(`ok ${passed} checks`);
