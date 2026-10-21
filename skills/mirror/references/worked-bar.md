# Mirror — worked bar

## Good Mirror

**Attack:** You're adding Redis to fix a latency story you have not measured; dual-write will create silent session loss under eviction.  
**Hidden assumption:** "Sessions are hot-path" without QPS proof.  
**Kill criteria:** If load test shows p99 under budget on Postgres for 2 weeks, withdraw Redis recommendation.

## Bad Mirror

"This might have risks." — no kill criteria, no concrete failure.
