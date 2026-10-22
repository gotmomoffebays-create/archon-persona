# How to fill `RUNLOG.md` from a cold chat

Founder dogfood — do this once per sync SHA you care about.

## Steps

1. `cd` archon-persona → `npm test && npm run sync-local && npm run smoke`
2. **Restart Cursor** (or new Agent chat) so skills reload.
3. Open a **new** Agent chat. Do not paste coaching from demos.
4. Run prompts from `GOLDEN.md` (G1, G3, G7 minimum; ideally G1–G12).
5. For each, score the checklist at the bottom of `GOLDEN.md`.
6. Append a block to `RUNLOG.md`:

```
### Run YYYY-MM-DD
- Sync commit: <git rev-parse --short HEAD>
- G1: pass/fail — notes:
- G2: pass/fail — notes:
- G3: pass/fail — notes:
- G7: pass/fail — notes:  (Evolution-001 measure)
- G9: pass/fail — notes:
- G10: pass/fail — notes:
- G11: pass/fail — notes:
- Would invoke again tomorrow? Y/N
```

7. If G7 fails → open `EVOLUTION-001.md`, mark **revise** (not keep).
8. If G1+G3 pass and you'd invoke again → dogfood gate progressing.

## Ban

- Pasting demo transcripts into the chat as "the answer"
- Coaching the model mid-eval ("don't forget grades")
- Marking pass without reading for kill criteria + Monday move
