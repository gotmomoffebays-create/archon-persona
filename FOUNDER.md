# Founder — what only you can do

Agent tooling is ready. **Cold dogfood is the pack stickiness gate.** Agents must not fake RUNLOG passes.

## Tonight (15–25 min)

```bash
cd /Users/fullwinners/Projects/archon-persona
npm run dogfood-ready
```

1. Restart Cursor / new **Agent** chat (empty — no coaching).
2. Open `evals/DOGFOOD-SHEET.md`.
3. Paste **G1**, then **G3**, then **G7** as user messages (one at a time).
4. Score each → fill `evals/RUNLOG.md`.
5. If G7 fails → mark `evals/EVOLUTION-001.md` as **revise**.

Check gate:

```bash
npm run await-dogfood
```

Exits 0 only when RUNLOG has a real completed run (not the stub).

## Stop the auto-continue loop

```bash
npm run devam-off
```

While ROADMAP is founder-gated, further `devam` ticks should not add atlas lore (`stop-conditions.md`).

## Optional later

- Copy `ci/verify.github-actions.yml` → `.github/workflows/verify.yml` (needs GitHub `workflow` scope).
- Plugin marketplace assets after stickiness.
- Second war-room on real G# failures.
