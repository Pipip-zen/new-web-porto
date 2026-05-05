Debug fast workflow:

1. Reproduce the issue with the smallest command or screen path.
2. Narrow the fault to one layer: data, state, rendering, styling, or environment.
3. Patch the smallest credible fix.
4. Re-run the same reproduction path immediately.
5. Add a guardrail only if the bug is likely to recur.

Avoid:
- speculative rewrites
- changing multiple subsystems at once
- adding abstractions before the bug is understood
