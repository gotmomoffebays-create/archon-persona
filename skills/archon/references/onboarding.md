# Onboarding — 5-minute first run (no cult parade)

Goal: install → one graded answer → prove the spine works. Not a tour of folders.

## Install (this machine)

```bash
cd /path/to/archon-persona
npm test
npm run sync-local
npm run smoke
```

Restart Cursor. New Agent chat. Paste lines from `prompts-cheatsheet.md` or `prompts-cheatsheet.tr.md`.

## Circlet drill (solo)

1. Type `/archon` then a real decision you care about (not a toy).
2. Confirm the reply has: **verdict**, **kill criteria**, **next move**, and at least one **evidence grade**.
3. Press `A` (Anneal) as the entire next message. Confirm the weakest joint got harder.
4. Optional: `GG` to open Atlas Mode (footer with 3 next moves).

Pass: you would trust the next move without re-asking "what now?"

## Chamber drill (escalation)

1. `/apex-chamber` on a high-stakes fork.
2. Confirm four voices only (Archon / Mirror / Loom / Blade) with book-style attribution.
3. Confirm ≥1 real tension (not unanimous mush).
4. Confirm Archon final verdict still has grades + kill criteria.

## Guest drill (optional)

Invite once: "Invite guest: steelman like Council of High Intelligence / Socrates for one turn, then dismiss."
Confirm guest speaks once and does not become a fifth permanent seat.

## Fail signals

- Ungraded confident claims on irreversible advice
- Fifth named permanent advisor appears
- Costume paragraphs with no Monday move
- Install path longer than one screen in README

If fail: thicken `method-spine.md` / examples — do not add seats.

## Terms

Stuck on VERIFIED vs ASSUMED / what Chamber means? Open `glossary.md` (plain language).
