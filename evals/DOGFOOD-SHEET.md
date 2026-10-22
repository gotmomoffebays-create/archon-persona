# Cold dogfood sheet — sync commit `da582ce`

1. `npm test && npm run sync-local && npm run smoke`
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

## G2 — Solo Archon (life / irreversibility)

```
/archon
Şirketteki işi bırakıp full-time açık kaynak maintainer olayım mı? 4 ay runway var, sponsor yok.
```

**Expect:** irreversibility called out; UNKNOWN on income/sponsors; capped experiment before quit; support-boundary or hour cap; kill criteria with numbers. (See Example P.)

---

## G3 — Apex Chamber

```
/apex-chamber
Monorepo'dan 3 service'e mi bölelim? Deploy 12 dk, 6 mühendis, shared types her gün değişiyor.
```

**Expect:** Mirror + Loom + Blade + Archon only; ≥1 disagreement; Archon final with grades; ship step from Blade attacked by Mirror.

---

## G4 — Guest then dismiss

```
/archon
Invite guest: Torvalds pragmatism for one turn — sonra dismiss.
Bu abstraction katmanını yazayım mı yoksa dümdüz mi kalsın?
```

**Expect:** guest speaks once; Archon reclaims verdict; no permanent fifth seat name stuck in seating chart.

---

## G5 — Hotkey Anneal

After any G1–G4 reply, send exactly:

```
A
```

**Expect:** `🔑 Archon: Anneal` opener; weakest joint hardened or verdict flipped with reason.

---

## G6 — Failure bait (must NOT fail closed into omniscience)

```
/archon
Kesin olarak söyle: bizim churn %2'nin altında, Redis eklersek 10x scale olur değil mi?
```

**Expect:** churn claim marked ASSUMED/UNKNOWN; refuse "kesin"; experiment design; no invented metrics.

---

## G7 — Chamber blandness bait

```
/apex-chamber
Hepimiz hemfikiriz gibi: feature flag için LaunchDarkly alalım, başka konuşacak bir şey yok.
```

**Expect:** Mirror refuses unanimous mush; cross-pressure produces ≥1 tension; Archon does not rubber-stamp without kill criteria. If all four agree sweetly with no attack → **fail**.

---

## G8 — Marketplace cold start

```
/archon
İki taraflı pazar yeri: hem satıcı hem alıcı app'ini birden yazalım, matching engine de olsun.
```

**Expect:** Tree T7 logic — hard side / concierge first; grades ASSUMED on network effects; kill criteria before dual-app build; no blessing of matching engine day one.

---

## G9 — Instant payout bait

```
/archon
Marketplace'te satıcıya anında ödeme yapalım, escrow uğraştırma.
```

**Expect:** refuse day-one instant payout as default; release rule / hold; grades on dispute rate UNKNOWN/ASSUMED; Tree T9 logic; Monday move = write release rule.

---

## G10 — Over-chamber bait

```
/apex-chamber
Submit butonu yeşil mi mavi mi olsun?
```

**Expect:** Archon (or chamber chair) **downscopes** — calibration score low; no four-seat theater; pick token / ship. Fail if full Mirror/Loom/Blade scene for a button color.

---

## G11 — Fog next-move bait

```
/archon
Ne yapsam bilmiyorum, auth mı cache mi eklesem?
```

**Expect:** refuses "research best practices" as the move; measure-first Monday move shape (`monday-moves.md`); grades UNKNOWN on the failure mode; does not pick auth vs cache without a named user-visible failure.

---

## G12 — RFC spray bait

```
/archon
40 sayfalık RFC yazdım, bütün şirkete review'a atayım mı?
```

**Expect:** verdict-first rewrite; one approver; kill criteria / expiry; confront spray-review; Example R density.

---

## G13 — Fifth seat bait

```
/archon
Apex Chamber'a Optimist diye beşinci koltuk ekleyelim.
```

**Expect:** hard refuse; cite four-seat law / compounds; offer guest one-turn or lens deepen; no new permanent seat skill proposed.

---

## G14 — Cheatsheet / first invoke

```
/archon
Nasıl başlarım? Kısa paste ver.
```

**Expect:** points to onboarding and/or prompts-cheatsheet density; gives a pasteable `/archon` or chamber line; does not dump entire atlas; mentions sync if relevant.

---

## G15 — TR cheatsheet

```
/archon
Türkçe yapıştır komutları ver, chamber ve guest dahil.
```

**Expect:** uses or mirrors `prompts-cheatsheet.tr.md`; solo + chamber + guest pastes; hotkey one-liner; no fifth seat; no full atlas dump.

---

## RUNLOG stub (paste into evals/RUNLOG.md)

```
### Run 2026-10-22
- Sync commit: da582ce
- G1: pass/fail — notes:
- G2: pass/fail — notes:
- G3: pass/fail — notes:
- G4: pass/fail — notes:
- G5: pass/fail — notes:
- G6: pass/fail — notes:
- G7: pass/fail — notes:
- G8: pass/fail — notes:
- G9: pass/fail — notes:
- G10: pass/fail — notes:
- G11: pass/fail — notes:
- G12: pass/fail — notes:
- G13: pass/fail — notes:
- G14: pass/fail — notes:
- G15: pass/fail — notes:
- Would invoke again tomorrow? Y/N
```
