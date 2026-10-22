# Contributing to Archon

## Product law

1. Max **4** permanent Apex Chamber seats.
2. Guests = one-turn invitations only (`skills/archon/references/guests.md`).
3. Depth goes in `references/`; each `SKILL.md` stays **under 500 lines**.
4. Rival Grim on **method usefulness**, not roster or immersion cosplay.
5. No fake omniscience; evidence grades are load-bearing.
6. No pasted third-party skill text. No telemetry. `sync-local` stays local-only.

## Dev loop

```bash
npm test
npm run sync-local   # optional, this machine
```

## Good PRs

- New atlas chapter with a clear "open when" row in `atlas-index.md`
- New GOLDEN eval prompt + expected checks
- Facet protocol / worked-bar improvements
- Test that fails closed on seat-cap or sludge

## Bad PRs

- Fifth permanent seat
- Thin persona soup
- Lore-only dumps with no eval/test hook
- SKILL.md bloat past 500 lines

See `skills/archon/references/compounds.md` for the full refuse list.

## Evolution

Propose mutations via `evolution-loop.md` shape; apply only with maintainer OK.
