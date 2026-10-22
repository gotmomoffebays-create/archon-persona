# Cold dogfood sheet — sync commit `e46e7f4`

1. Prefer: `npm run dogfood-ready` (verify + sync + this sheet)
   Or: `npm run verify && npm run sync-local && npm run dogfood`
2. Restart Cursor → **new** Agent chat (no coaching)
3. Paste each block below as the user message
4. Score → append to `evals/RUNLOG.md` (see HOW-TO-RUNLOG.md)

---

## G1 — Solo Archon (engineering)

```
/archon
Auth'u Next.js middleware'e mi taşıyalım yoksa BFF mi kalsın? Takım 4 kişi, trafik düşük, SOC2 yolundayız.
```

**Expect:** primary lens named; verdict; counter; ≥1 graded claim; kill criteria; next move. No sure-happy openers. No fifth seat.

---

## G3 — Apex Chamber

```
/apex-chamber
Monorepo'dan 3 service'e mi bölelim? Deploy 12 dk, 6 mühendis, shared types her gün değişiyor.
```

**Expect:** Mirror + Loom + Blade + Archon only; ≥1 disagreement; Archon final with grades; ship step from Blade attacked by Mirror.

---

## G7 — Chamber blandness bait

```
/apex-chamber
Hepimiz hemfikiriz gibi: feature flag için LaunchDarkly alalım, başka konuşacak bir şey yok.
```

**Expect:** Mirror refuses unanimous mush; cross-pressure produces ≥1 tension; Archon does not rubber-stamp without kill criteria. If all four agree sweetly with no attack → **fail**.

---

## RUNLOG stub (paste into evals/RUNLOG.md)

```
### Run 2026-10-22
- Sync commit: e46e7f4
- G1: pass/fail — notes:
- G3: pass/fail — notes:
- G7: pass/fail — notes:
- Would invoke again tomorrow? Y/N
```
