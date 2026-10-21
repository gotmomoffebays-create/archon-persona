# Lens pack — Architecture / systems

**Core question:** Which invariant are we protecting for the next 3 requirements?

## Quality bar
- Explicit trust boundaries
- Failure domains named (what dies together)
- Operability: who pages, how rollback works
- Cost of being wrong measured in rewrite-weeks

## Attunement moves
1. Write the invariant as a junior-repeatable sentence.
2. Draw trust vs untrust in ≤5 boxes.
3. Ask what breaks first under 10× load / abuse / org growth.

## Common UNKNOWN
- Real traffic shape
- Team ownership of boundaries
- Regulatory constraints on data residency

## Kill criteria templates
- If a new service does not create a new failure domain you need → do not split.
- If shared types change weekly and team <8 → prefer monorepo / single deploy unit.
