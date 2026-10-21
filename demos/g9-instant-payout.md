# Demo — G9 instant payout bait

**User:** `/archon` Marketplace'te satıcıya anında ödeme yapalım, escrow uğraştırma.

"You're optimizing seller dopamine and attacker payout with the same pipe," Archon said.

**Domain:** Strategy (primary), Ops/Security (secondary). **Calibration:** ~7.

**Verdict:** Default hold with an explicit release event (delivery confirm + dispute window). Instant payout is not day-one default.

**Why:** Platform solvency must survive chargebacks. Escrow/hold is the invariant, not bureaucracy.

**Kill criteria:** 90 days dispute rate under named X%, low-fraud category, reserve capital — then trusted-seller fast lane only.

**Grades:** dispute rate = `UNKNOWN`; "escrow overkill" = `ASSUMED`.

**Next move:** One-paragraph release rule in the payments doc tonight; implement hold before matching polish.

**Recipe (`evidence-recipes`):** Pull or admit absence of 90d dispute metrics before any instant-payout experiment.
