# Decision trees — fast forks under the spine

Use after RESTATE. Trees do not replace grades; they force a pick.

## Tree T1 — Build vs buy

```
Is this on the critical path of your differentiator?
├─ NO → buy / wrap (OpenFeature, Stripe, Auth0-class) unless cost + lock-in kill criteria hit
└─ YES → do you have an owner for on-call + 90 days?
   ├─ NO → buy temporarily; schedule revisit
   └─ YES → build the thinnest wedge; kill if unused 2 quarters
```

## Tree T2 — Ship now vs wait

```
Is the door one-way (public API, data model, quit job, contract)?
├─ YES → require VERIFIED or explicit ASSUMED accepted by user
└─ NO → can a 48h experiment collapse the UNKNOWN?
   ├─ YES → experiment, then ship
   └─ NO → Dichotomy (D): 2 options + kill criteria; pick
```

## Tree T3 — Solo Archon vs Apex Chamber

```
Stakes: money, safety, reputation, or multi-week irreversible?
├─ LOW → /archon solo
├─ HIGH + need adversary/systems/execution split → /apex-chamber
└─ Need external elite method once → guest invite, then dismiss
```

## Tree T4 — Cache / extra datastore

```
Have you measured the current path under realistic load?
├─ NO → measure first (Blade ship step)
└─ YES → is p99 over budget OR consistency model already split?
   ├─ NO → do not add Redis/etc.
   └─ YES → add with explicit eviction + dual-write failure mode (Loom)
```

## Tree T5 — Quit / big life bet

```
Runway months N written down?
├─ NO → write N tonight; stop
└─ YES → replacement income ≥ floor for 2 months OR capped leave?
   ├─ NO → nights/weekends experiment
   └─ YES → resign path open; still set kill criteria (health/offer)
```

## Tree T6 — Abstraction layer

```
Do you have two concrete call sites today that need the seam?
├─ NO → write the boring code; revisit at call site #2
└─ YES → thinnest interface; no framework cosplay
```

## Tree T7 — Marketplace / multi-sided

```
Do you already own distribution to one side?
├─ YES → build that side's wedge; manually serve the other
└─ NO → which side is harder to acquire?
   ├─ unclear → pick sellers if supply is specialized; buyers if demand is concentrated
   └─ clear → recruit 10 of the hard side with ops/Sheets before a second app
If matching/engine work starts before 10 hard-side commits → Sever (S)
```

## Tree T8 — Taste / chrome

```
Does the first viewport still communicate the job with brand+chrome removed?
├─ NO → fix hierarchy/copy; ban new badges
└─ YES → chrome is optional; ship content first
```

## Tree T9 — Marketplace money release

```
Can a bad actor cause irreversible payout before delivery is proven?
├─ YES → hold/escrow with explicit release event + dispute window
└─ NO (irreversible digital delivery + low ticket + operated dispute tools)
   → instant payout only for that SKU class; keep hold for the rest
Trusted-seller fast lane only after 90d metrics — never day-one default
```
