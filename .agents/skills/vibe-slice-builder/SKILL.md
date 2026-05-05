---
name: vibe-slice-builder
description: Ship a thin but real vertical slice fast. Use when the user wants to build, iterate, prototype, or "just make it work" on a feature without over-planning. Best for frontend pages, small product flows, UI interactions, and scoped app features where fast visible progress matters more than perfect architecture.
---

# Vibe Slice Builder

Build momentum by shipping the smallest visible, testable slice first. Do not disappear into architecture work unless the user explicitly asks for it.

## Workflow

1. Find the thinnest insertion point.
2. Build one end-to-end slice that can be seen or exercised.
3. Verify quickly.
4. Refine only the parts that are now real.

## Step 1: Find The Thinnest Slice

- Prefer a path that touches the fewest files.
- If the request is broad, pick the main screen or primary interaction.
- Avoid framework-wide setup unless the feature cannot exist without it.

Good first slices:
- one landing page section
- one modal flow
- one dashboard card with real data wiring
- one form path with optimistic success state

Bad first slices:
- full design system rebuild
- global refactor before feature exists
- elaborate abstractions with no user-visible result

## Step 2: Build One Real Path

- Make one happy path work end to end.
- Stub secondary states only if needed to keep progress visible.
- Choose readable code over premature generalization.
- Keep TODOs local and obvious.

## Step 3: Verify Quickly

- Run the shortest command that proves the slice works.
- For UI, prefer a browser check or screenshot.
- For logic, prefer one focused test or one reproducible command.

If verification is expensive, reduce scope and verify a smaller unit.

## Step 4: Refine After It Exists

Only after the slice is real:
- tighten spacing, copy, and interaction feedback
- cover loading, empty, and error states
- remove obvious duplication if it now hurts iteration

## Guardrails

- Keep changes scoped.
- Avoid broad renames during the first pass.
- If a blocker appears, downscope instead of stalling.
- If the feature starts expanding, ship the first visible milestone and stop.
