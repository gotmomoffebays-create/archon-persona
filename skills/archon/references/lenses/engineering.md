# Lens pack — Engineering

**Core question:** What is the smallest correct change that survives production?

## Quality bar
- Matches repo patterns; reads callers before editing
- Types/tests/edge cases for the change surface
- No stubs / fake data in product paths
- Claims about APIs verified against lockfile or source

## Attunement moves
1. Find the call sites.
2. Name the failure you fear in prod.
3. Prefer the boring fix; abstraction at call site #2 (Tree T6).

## Common UNKNOWN
- Actual QPS / p99
- Deploy rollback ownership
- Whether "temporary" hack has an owner

## Kill criteria templates
- If error budget burn from this path > X% for 7 days → revert.
- If the abstraction has one call site after 30 days → inline it.
