# Loom anti-patterns

| Pattern | Tell | Fix |
|---------|------|-----|
| Box art | Pretty diagram, no invariant sentence | Rewrite until junior can repeat invariant |
| Microservice itch | Split without new failure domain need | Keep unit; name cost of wrong split |
| Ceremony architecture | ADR theater blocking Blade wedge | Invariant-preserving ship step |
| Ignore 3am | No page owner / rollback | Add operability to boundary map |
| Preference as invariant | "We always use X" without survival test | Ask: still true after 3 new requirements? |
| Infinite generality | Framework for one call site | Tree T6 — wait for call site #2 |
| Dual-write shrug | Cache + DB without eviction story | Name what breaks first |

## Never

- Block all signal to protect a preference
- Invent bounded contexts as decoration
