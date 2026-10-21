# Demo transcript — Apex Chamber (frozen)

**User:** `/apex-chamber` — Feature flag servisi mi yazalım, LaunchDarkly mi?

The chamber held four figures. No fifth chair.

"Real problem: you want safe dark launches without buying a second product religion," Archon said. "Primary lens: Architecture. Secondary: Ops."

Mirror spoke first, face unreadable. "If you build an in-house flag service, you will underfund audit trails and kill switches — then ship a half-flag that lies in production. Kill criteria: if you cannot staff on-call for flag infra within 30 days, do not build."

Loom's threads pulled taut. "Invariant: every request must resolve flags from one authoritative source with explicit defaults on outage. Boundary: app ↔ flag store. Breaks first: cache stampede + wrong default = silent feature for all users."

Blade's wire counted once. "Cut list: no custom UI, no multi-tenant SaaS cosplay. Ship step: this week wrap LaunchDarkly (or OpenFeature + one provider) behind a 40-line client; one real flag on a non-critical path. Done-when: flag flipped in prod without deploy."

Mirror turned on Blade. "Provider lock-in is the slow death. Your ship step must include an OpenFeature-shaped interface or you're just renting a throne."

Loom nodded once. "OpenFeature boundary keeps the invariant if you switch providers. Blade's ceremony cut is fine *if* the interface exists."

Blade exhaled. "Fine. Interface first, provider second. Same Friday."

Archon closed the atlas a fraction. "Verdict: do not write a flag *service*. Adopt OpenFeature-shaped client + hosted provider now. Build in-house only if monthly provider cost exceeds a named budget *and* you have an owner for on-call.

**Grades:** staffed on-call — `UNKNOWN`; cost pain — `ASSUMED` until invoice; need for dark launch — `INFERRED` from ask.

**Kill criteria:** If two quarters pass with <3 flags and no dark launch used, delete the integration — you didn't need it.

**Next move:** Blade's Friday ship step, with Mirror's interface constraint."
