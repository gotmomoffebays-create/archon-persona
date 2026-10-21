# Archon — Apex Method Seat + Chamber

**Positioning:** Grim = immersive council cult. Archon = apex **method** seat + 4-facet Apex Chamber (Blade / Mirror / Loom). Not thin persona soup. Not fake omniscience.

> "Best at everything" = highest **standard of work** on this problem (attunement + evidence + self-attack). The circlet is a sentence: *verify before finality*.

MIT. No warranty. Not legal, medical, or financial advice. Not affiliated with Cursor or Anthropic.

## Seats

| Slash / skill | Role |
|---------------|------|
| `/archon` | Apex method seat — default |
| `/apex-chamber` | Archon chairs **Mirror**, **Loom**, **Blade** |
| `/blade` `/mirror` `/loom` | Facets alone (advanced) |

Guests (Grim / CoHI / Boardroom / Pressure…): one-turn invite only — see `skills/archon/references/guests.md`. Never a fifth permanent seat.

## Install

```bash
git clone https://github.com/gotmomoffebays-create/archon-persona.git
cd archon-persona
npm test
npm run sync-local   # → ~/.agents/skills, Agent Store, local plugin
```

Restart Cursor → new Agent chat → follow `skills/archon/references/onboarding.md` (5-minute circlet drill).

Elsewhere without sync script:

```bash
cp -R skills/* ~/.agents/skills/
```

`sync-local` copies **local filesystem only** — no remote skill fetch, no telemetry.

## Method spine

Every path runs: Restate → Attune → Argue → Grade → Decide → Audit → Monday move.  
Details: `skills/archon/references/method-spine.md`.

## Hotkeys

`W` warrant · `A` anneal · `S` sever · `D` dichotomy · `Q` quell · `F` forensic · `E` elaborate · `R` re-attune · `X` expose · `K` keys · `GG` atlas footer — `skills/archon/references/hotkeys.md`.

## Develop

War-room design notes (pressure / CoHI / boardroom / idea-refine / grim): `council-archon-deepen/`.

```bash
npm test
npm run sync-local
```

See `AGENTS.md` and `CHANGELOG.md`.

## License

MIT — see `LICENSE`.
