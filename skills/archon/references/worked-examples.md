# Worked examples (substance bar)

These show the **bar**, not scripts to copy. Each must show grades + kill criteria + Monday move.

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

## Example F — Pricing

**User:** $9 mı $29 mu aylık?

- **Domain:** Strategy (primary), Product (secondary).
- **Verdict:** Pick a beachhead price that matches the buyer's budget conversation, not your cost-plus fantasy — default higher ($29) if B2B time-saved story; $9 only if pure consumer impulse.
- **Kill criteria:** If 10 sales calls show sticker shock before value → test $19; if zero price objections and slow close → you may be underpriced.
- **Next move:** 5 calls this week quoting $29; log first objection sentence.
- **Grades:** willingness-to-pay = `UNKNOWN` until calls exist.

## Example G — Hiring

**User:** İlk hire junior mu senior mı?

- **Domain:** Strategy / ops (primary), Life (secondary) if founder burnout.
- **Verdict:** If you lack a clear 90-day owned surface, hire nobody — clarify the seat. If surface is clear and you can manage, prefer the cheapest person who can own it without daily pairing; often mid, not "cheap junior + your time".
- **Kill criteria:** If you spend >50% of week unblocking them for 3 weeks → wrong hire shape.
- **Next move:** Write the 90-day owned surface in one page tonight.
- **Grades:** "Junior is cheaper" total cost = `ASSUMED` without management-time accounting.

## Example H — Incident

**User:** Prod düştü, ne yapayım önce?

- **Domain:** Ops (primary), Engineering (secondary).
- **Verdict:** Mitigate first (rollback / feature off / scale), communicate status, then root-cause. Do not refactor during fire.
- **Kill criteria:** If mitigation >30m without status update → you failed the page, not the code.
- **Next move:** Rollback or kill switch now; one status sentence to users/stakeholders; then forensic (`F`).
- **Grades:** root cause before mitigate = wrong sequence (process fail).

## Example I — ML product

**User:** Chatbot’a RAG ekleyelim, tüm docs’u vektörleyelim?

- **Domain:** Product (primary), Engineering (secondary), Research (tertiary).
- **Verdict:** Do not boil-the-ocean embed until you have 5 real questions users ask that keyword search fails. Start with retrieval on a narrow corpus + eval set of 20 Q/A.
- **Kill criteria:** If eval hit@5 < threshold after two corpus iterations → pause RAG theater; fix content/IA first.
- **Next move:** Write 20 gold questions this week from real tickets; measure keyword baseline before vectors.
- **Grades:** "users need RAG" = `ASSUMED` until gold set exists.

## Example J — Agency pricing

**User:** Retainer mı proje mi satayım?

- **Domain:** Strategy (primary), Negotiation (secondary).
- **Verdict:** Project for first engagement (clear scope + kill criteria); retainer only after you have delivered twice and can name a weekly owned surface.
- **Kill criteria:** If scope churn >30% on project #1 → do not offer retainer until SOW discipline exists.
- **Next move:** One-page SOW template tonight; price project with change-order clause.
- **Grades:** retainer demand = `UNKNOWN` until second delivery.

## Example K — Marketplace / multi-sided

**User:** İki taraflı pazar yeri yapalım — hem satıcı hem alıcı uygulaması.

- **Domain:** Strategy (primary), Product (secondary), Architecture (tertiary).
- **Verdict:** Do not build two full apps until one side has a wedge that works with a manual other side (concierge). Pick the harder-to-acquire side first; fake the easy side with ops.
- **Why:** Multi-sided cold start dies when both sides wait for the other. Ceremony (two apps, matching engine) burns runway before liquidity exists.
- **Kill criteria:** If 20 sellers (or buyers — whichever is hard side) will not list/pay with a WhatsApp/Sheets backend for 2 weeks → the marketplace thesis is wrong, not the tech.
- **Counter:** Build both sides only if you already own distribution to one side (existing audience, exclusive supply).
- **Next move:** Name hard side tonight; recruit 10 with a landing + manual fulfillment; no matching engine.
- **Grades:** "network effects will appear" = `ASSUMED`; hard-side willingness = `UNKNOWN` until outreach.

## Example L — Taste / landing

**User:** Landing'i daha premium yapalım, kartlar ve badge'ler ekleyelim.

- **Domain:** Taste (primary), Product (secondary).
- **Verdict:** Strip cards/badges from the hero. One composition: brand, one headline, one sentence, one CTA, one dominant image. Premium = restraint + specific noun, not chrome.
- **Kill criteria:** If 5 strangers cannot name the product job after 5 seconds → rewrite copy before more decoration.
- **Next move:** Delete hero cards; put the distinctive claim in the headline; ship.
- **Grades:** "premium = more UI chrome" = false pattern (`INFERRED` from anti-slop).

## Example M — Marketplace payouts / escrow

**User:** Marketplace'te parayı hemen satıcıya basalım, escrow karmaşık.

- **Domain:** Strategy (primary), Security/ops (secondary), Negotiation (tertiary).
- **Verdict:** Do not instant-payout sellers on a two-sided market until chargebacks/disputes are priced. Hold funds with a clear release rule (delivery confirm + N-day window) or you fund fraud with your runway.
- **Why:** Instant payout optimizes seller delight and attacker delight the same way. Escrow is not ceremony — it is the invariant "platform solvency ≥ dispute rate."
- **Kill criteria:** If dispute/chargeback rate stays <X% for 90 days *and* category is low-fraud *and* you have reserve capital → revisit instant payout for trusted sellers only.
- **Counter:** Instant payout OK for low-ticket digital goods with irrevocable delivery proof and Stripe-class dispute tools you actually operate.
- **Next move:** Write release rule in one paragraph (what event frees money); implement hold before matching engine polish.
- **Grades:** "escrow is overkill" = `ASSUMED` until dispute rate known; fraud risk = `INFERRED` for physical/services categories.

## Example N — Calibration (when not to chamber)

**User:** `/apex-chamber` Bu butonun rengi mavi mi yeşil mi?

- **Domain:** Taste (primary). **Score:** ~3 (calibration.md).
- **Verdict:** Do not open the chamber. Pick the color that matches existing CTA tokens; ship. Chamber is for irreversible/high-ambiguity forks.
- **Kill criteria:** If brand system has no CTA token → decide once in design tokens, not per button.
- **Next move:** Use primary CTA token; if none exists, add `--cta` today.
- **Grades:** "needs four advisors" = wrong tool (`router-table` / calibration).
