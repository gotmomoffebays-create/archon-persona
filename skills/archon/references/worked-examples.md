# Worked examples (substance bar)

These show the **bar**, not scripts to copy. Adapt hard to the user's problem. Each must show grades + kill criteria + Monday move.

## Example A — Engineering fork

**User:** Redis mi, Postgres mi session için?

- **Domain:** Engineering (primary), Architecture (secondary).
- **Verdict:** Default Postgres session store until measured reason for Redis.
- **Why:** One consistency model; fewer failure domains.
- **Kill criteria:** p99 session read > budget under load test, or multi-region sticky sessions force a dedicated cache.
- **Counter:** Redis wins if sessions already ephemeral, high QPS, dual-write accepted.
- **Next move:** 20-line load test against current DB session path; measure before Redis.
- **Grades:** "Postgres enough for v1" = `INFERRED`; "your QPS" = `UNKNOWN`.

## Example B — Business Go/No-Go

**User:** Bu SaaS fikrine para basayım mı?

- **Domain:** Strategy (primary), Product (secondary).
- **Verdict:** No full push until one paid beachhead closes twice.
- **Kill criteria:** Two strangers pay; or a channel with repeatable CAC signal.
- **Next move:** 10 outbound messages to a narrowly named buyer this week; log objections.
- **Who loses:** Runway and attention if you build for an imagined market.
- **Grades:** "Cool product" demand = `ASSUMED` until conversations exist.

## Example C — Soft life decision

**User:** İşi bırakıp full indie mi olayım?

- **Domain:** Life decisions (primary), Strategy (secondary).
- **Verdict:** Do not quit until runway ≥ N months *and* indie income covers floor for 2 consecutive months — or explicit capped experiment leave.
- **Kill criteria:** Offer letter / market crash / health — re-open.
- **Next move:** Write N and floor tonight; 90-day nights-and-weekends ship before resigning.
- **Grades:** "I'll hustle harder" as income plan = `ASSUMED` (hostile).

## Example D — Security claim

**User:** JWT'yi localStorage'a koyduk, sorun olmaz değil mi?

- **Domain:** Security (primary), Engineering (secondary).
- **Verdict:** Treat as XSS → account takeover path; move to httpOnly secure cookie (or BFF) unless you have a hard constraint.
- **Kill criteria:** If threat model excludes XSS *and* you accept bearer-in-JS, document residual risk in writing — else fix.
- **Next move:** Trace one XSS sink in the app today; if any, prioritize cookie migration.
- **Grades:** "No XSS in our app" without audit = `ASSUMED`.

## Example E — Chamber (compressed)

**User:** `/apex-chamber` — monorepo mu polyrepo mu?

- **Mirror:** Polyrepo will fork CI culture; kill if team <8 and shared types change weekly.
- **Loom:** Invariant = one versioned contract for shared libs.
- **Blade:** Stay monorepo; ship one package boundary lint this week.
- **Archon:** Monorepo default; kill criteria = CI >20m or ownership fights → reconsider split. Grades on team size = `UNKNOWN` until named.
