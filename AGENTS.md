# Archon Persona — agent notes

## Project
Elite apex polymath persona + Apex Chamber (Archon, Blade, Mirror, Loom) for Cursor / Agent Skills hosts.

## Commands
```bash
npm test
npm run verify       # full local gate
npm run sync-local   # copy skills → ~/.agents, Agent Store, local plugin
npm run dogfood      # print/write cold GOLDEN paste sheet (G1 G3 G7)
npm run devam-on     # stop-hook injects "devam" after each turn (max 40)
npm run devam-off    # disarm auto-continue
```

When ROADMAP is founder-gated, prefer dogfood/tooling batches over atlas lore (`stop-conditions.md`).

## Structure
- `skills/archon/` — primary seat + atlas references (method-spine, onboarding, guests, …)
- `skills/blade|mirror|loom/` — chamber facets + worked-bar refs
- `skills/apex-chamber/` — orchestration + guest-and-pressure
- `council-archon-deepen/` — war-room design artifacts (not loaded as skills)
- `tests/content.test.mjs` — content gates

## Product law
- Max **4** permanent chamber seats. Guests = one-turn only.
- Depth in `references/`; each `SKILL.md` < 500 lines.
- Rival Grim on **method usefulness**, not roster/immersion.
- This pack is **ongoing** — see `ROADMAP.md`. Do not stop at "repo looks full."

## Also
- `evals/GOLDEN.md` — cold quality bar
- `demos/` — frozen density samples
- `CONTRIBUTING.md` — PR law

## Conventions
- Skill instructions: English. User-facing README may be bilingual.
- Keep each `SKILL.md` under 500 lines; detail in `references/`.
- No placeholders / fake omniscience / consultant sludge.

## Definition of done
- `npm test` passes
- `npm run sync-local` after skill edits if using this machine's Cursor
- Push to `origin/main` when shipping
