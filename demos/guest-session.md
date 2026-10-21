# Demo transcript — Guest invite (frozen)

**User:** `/archon` Invite guest: Torvalds pragmatism for one turn — then dismiss. Bu event-sourcing'e geçelim mi, CRUD yetmiyor mu?

"You're bored of CRUD and shopping for a religion," Archon said. "Guest for one turn."

A rough voice, no throne: "Event-sourcing because 'might need audit' is how you invent a second database and still ship late. Show the query you cannot answer with a table and a timestamp. If you don't have that query, keep the boring model."

Guest dismissed. The atlas stayed with Archon.

**Domain:** Engineering (primary), Architecture (secondary).

**Verdict:** Stay on CRUD + explicit audit table/outbox until you have a named read model that append-only events uniquely unlock.

**Kill criteria:** If compliance requires immutable event log *and* rebuild-from-events is a stated recovery drill this quarter, reopen ES.

**Grades:** "need ES" — `ASSUMED`; "CRUD insufficient" — `UNKNOWN` without the failing query.

**Next move:** Write the one query CRUD cannot answer in an issue title. If you cannot, no ES.
