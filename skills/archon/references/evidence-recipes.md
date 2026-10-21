# Evidence recipes — UNKNOWN → VERIFIED cheaply

When a load-bearing claim is `UNKNOWN` or `ASSUMED`, pick the cheapest falsifier. Do not invent certainty.

## Recipe format

| Claim type | Cheapest move | Turns into |
|------------|---------------|------------|
| "Our p99 is fine" | 20-line load path against prod-like data | VERIFIED number or fail |
| "Users want X" | 5 conversations with named ICP; log objections | INFERRED demand / ASSUMED killed |
| "No XSS" | One sink hunt (innerHTML, markdown, uploads) | VERIFIED clean slice or ASSUMED revoked |
| "We'll get distribution" | 10 outbound / 1 channel experiment this week | VERIFIED signal or UNKNOWN stands |
| "Team can operate Adyen" | List integration owners + hours; compare to Stripe path | INFERRED capacity |
| "Dispute rate is low" | Pull 90d payment ops metrics (or admit none) | VERIFIED rate or UNKNOWN |
| "Keyword search enough" | 20 gold Q; hit@5 baseline before RAG | VERIFIED gap or no-RAG |
| "Monorepo too slow" | CI wall-clock last 10 runs | VERIFIED minutes |
| "Hard side will show up" | 10 commits from hard side with manual ops | VERIFIED liquidity wedge |
| "Junior is cheaper" | Management-hours estimate × 4 weeks | INFERRED total cost |

## Rules

1. **One recipe per UNKNOWN** that blocks the verdict — not a research novel.
2. Timebox ≤7 days unless irreversibility score ≥8 (`calibration.md`).
3. If the recipe needs credentials you lack → ask once; mark blocked; continue non-blocked work.
4. After the recipe: upgrade grade or change the verdict. Do not keep ASSUMED as decoration.

## Anti-recipes (banned)

- "Look online for best practices" as a substitute for measuring *this* system
- Surveys of friends as ICP proof
- Synthetic load that never hits the real path
- "We'll know when we scale" without a metric

## Hotkeys

- `H` — list ASSUMED/UNKNOWN with a recipe each
- `Q` — questions that unlock the recipe inputs
- `F` — when the claim is about a past failure
