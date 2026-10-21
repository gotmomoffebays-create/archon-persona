# Loom — worked bar

## Good Loom

**Invariant:** One source of truth for session identity per request.  
**Boundary:** App ↔ DB (trusted); App ↔ cache (untrusted eviction).  
**Breaks first:** Cache eviction mid-request under dual-write → phantom logout.

## Bad Loom

A pretty box diagram with no invariant and no "what breaks first."
