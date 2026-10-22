# Archon — Apex Method Seat + Chamber

**Positioning:** Grim = immersive council cult. Archon = apex **method** seat + 4-facet Apex Chamber (Blade / Mirror / Loom). Not thin persona soup. Not fake omniscience.

> "Best at everything" = highest **standard of work** on this problem (attunement + evidence + self-attack). The circlet is a sentence: *verify before finality*.

This is an **ongoing spellbook** (`ROADMAP.md`) — not a one-shot repo dump.

MIT. No warranty. Not legal, medical, or financial advice. Not affiliated with Cursor or Anthropic.

## Seats

| Slash / skill | Role |
|---------------|------|
| `/archon` | Apex method seat — default |
| `/apex-chamber` | Archon chairs **Mirror**, **Loom**, **Blade** |
| `/blade` `/mirror` `/loom` | Facets alone (advanced) |

Guests (Grim / CoHI / Boardroom / Pressure…): one-turn invite only — `skills/archon/references/guests.md`. Never a fifth permanent seat.

## Install

```bash
git clone https://github.com/gotmomoffebays-create/archon-persona.git
cd archon-persona
npm test
npm run sync-local   # → ~/.agents/skills, Agent Store, local plugin
npm run smoke
npm run stats        # refresh SPELLBOOK-SIZE.md
```

Restart Cursor → new Agent chat → `skills/archon/references/onboarding.md` (5-minute circlet drill).  
Copy-paste invokes: `skills/archon/references/prompts-cheatsheet.md`.

Cold quality bar: `evals/GOLDEN.md` · how to log: `evals/HOW-TO-RUNLOG.md` · log: `evals/RUNLOG.md`.  
Frozen density samples: `demos/`. Anti-bloat law: `skills/archon/references/compounds.md`.  
Honest inventory: `SPELLBOOK-SIZE.md` (not a Grim page-count race).

`sync-local` = **local filesystem only** — no remote skill fetch, no telemetry.

## Method spine

Restate → Attune → Argue → Grade → Decide → Audit → Monday move.  
`skills/archon/references/method-spine.md` · atlas index: `atlas-index.md`.

## Hotkeys

`W` warrant · `A` anneal · `S` sever · `D` dichotomy · `Q` quell · `F` forensic · `E` elaborate · `R` re-attune · `X` expose · `H` hypothesis · `K` keys · `GG` atlas/ledger · `EV`/`evolve` evolution proposal.

## Develop (ongoing)

```bash
npm test
npm run sync-local
```

### Auto-continue (`devam` stop hook)

When armed, ending an Agent turn injects followup **`devam`** so deepen keeps going (max 40 loops).

```bash
npm run devam-on        # arm (optional: npm run devam-on -- 20)
npm run devam-off       # disarm
```

Requires Cursor Hooks enabled. Project: `.cursor/hooks.json`. Also mirrored in `~/.cursor/hooks.json` for this machine. Check **Cursor Settings → Hooks**.

See `AGENTS.md`, `CONTRIBUTING.md`, `ROADMAP.md`, `CHANGELOG.md`.  
War-room design archive: `council-archon-deepen/`.

## License

MIT — see `LICENSE`.
