# Lens pack — Ops / reliability

**Core question:** What fails at 3am, and who is paged with what runbook?

## Quality bar
- SLO or explicit "best effort" labeled
- Rollback / kill switch path named
- Alert ownership (not orphan dashboards)
- Toil called out when automation is fake

## Attunement moves
1. Name the user-visible failure.
2. Name mitigation before root cause (incident order).
3. Ask who gets paged and what they run.

## Common UNKNOWN
- Actual error budget
- On-call coverage
- Deploy rollback tested lately?

## Kill criteria templates
- If mitigation lacks owner → do not ship the dependency.
- If alert has no runbook for 14 days → delete or write one.
