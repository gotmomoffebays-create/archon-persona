# Stop conditions — when to end a deepen / devam loop

For pack authors and `devam` auto-continue — not for end-user product decisions.

## Stop deepening content when

1. ROADMAP open items are only founder-gated (cold RUNLOG, dogfood war-room).
2. Last two batches only added synonyms without new failure classes.
3. `npm run stats` line growth without new GOLDEN or Example letter.
4. User said `devam-off` / dur / gece bitti.

## Still deepen when

- A GOLDEN fails cold (Evolution revise)
- A new failure class appeared in dogfood notes
- SKILL.md drifted toward &gt;400 lines (split to references)
- Install/sync broke

## devam hook

- Armed: `npm run devam-on`
- Disarmed: `npm run devam-off`
- Max iterations in `.cursor/devam.state.json` (default 40)

Ending an Agent turn while armed injects followup `devam`. That is intentional pressure — not a reason to ship soup.
