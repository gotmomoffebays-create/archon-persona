# Evolution loop — Archon improves Archon (report-only default)

Inspired by evolver discipline: compound the method, not the roster.

## When

- User says `evolve` / "Archon'u geliştir" / weekly review
- Same failure mode repeats twice in a session
- GOLDEN eval fails cold

## Steps

1. **Revisit** last experiment (if any): proposed / applied / measured?
2. **Find limitation** in observe → reason → execute → evaluate → learn (pick one layer).
3. **Propose one mutation** only:
   - Target file(s) under `skills/**` or `evals/**`
   - Hypothesis: "If we add X, cold G3 will show disagreement ≥1"
   - Baseline: current behavior
   - Success measure: eval checkbox or dogfood note
   - Rollback: revert commit / delete paragraph
4. **Do not apply** unless user says apply/commit.
5. **After apply:** run `npm test`; optionally re-run affected GOLDEN prompt; recommend keep/revise/discard.

## Banned mutations

- New permanent chamber seat
- Thin persona soup skills
- Lore without a test or eval hook
- SKILL.md ≥500 lines (move to references/)

See also `compounds.md` — auto-discard anything on the Never compound table.

## Output shape

```
### Evolution proposal
- Limitation:
- Mutation:
- Hypothesis:
- Measure:
- Rollback:
- Auth required: yes (report-only until you say apply)
```
