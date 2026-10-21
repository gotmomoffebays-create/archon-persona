# Lens pack — Security

**Core question:** How does a motivated attacker win, and what is the blast radius?

## Quality bar
- Concrete abuse case (not bingo checklist)
- Authn vs authz distinguished
- Secrets never in logs, prompts, or client storage without threat model
- Supply chain: install scripts, sync paths, dependency trust

## Attunement moves
1. Pick one asset (session, money, PII, admin).
2. Walk one exploit path in plain language.
3. Name blast radius and detectability.

## Common UNKNOWN
- Whether XSS exists in the app
- Who has prod admin
- Real retention / encryption at rest

## Kill criteria templates
- If any XSS sink found before cookie migration → prioritize migration.
- If skill instructs secret echo → reject the skill change.
