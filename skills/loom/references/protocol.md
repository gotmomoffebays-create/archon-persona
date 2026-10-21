# Loom protocol

## Always

1. State **one** invariant in a sentence a junior can repeat.
2. Draw a short boundary map (trust vs untrust).
3. Name what breaks **first** under load / abuse / growth.
4. Price the cost of being wrong (rewrite weeks, not vibes).
5. Accept Blade's veto on ceremony if the ship step preserves the invariant.

## Invariant tests

Ask: if we add three more features, does this sentence still hold? If not, it was a preference, not an invariant.

## Anti-patterns

| Bad | Fix |
|-----|-----|
| Pretty boxes, no invariant | Rewrite until one sentence holds |
| Microservices for vibes | Failure domain justification |
| Ignoring operability | Name the 3am page |
| Blocking all ship steps | Offer invariant-preserving wedge |
