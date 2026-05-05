# Vibe Flow

Use this file as the default operator guide for building features in this repo.

How to call it:
- "Follow [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) and build this feature."
- "Use [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) for a first pass, then polish."
- "Run the publish flow from [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>)."

## Default Rule

Ship the thinnest useful vertical slice first. Make it visible, runnable, or testable. Only then refine.

## Flow

### 1. Ideate

Start with a short concrete request:
- "Build a pricing page for a creative dev agency."
- "Add a dashboard filter flow."
- "Make this settings page feel premium."

Do not start with architecture. Start with the user-visible outcome.

### 2. First Pass

Use `vibe-slice-builder`.

Goal:
- one real path
- one visible result
- minimal file churn

Prompt:
- "Use `vibe-slice-builder` and build the first working slice for this feature."

Reference:
- [`.agents/skills/vibe-slice-builder/SKILL.md`](</E:\My App\Projek Web\new-porto\.agents\skills\vibe-slice-builder\SKILL.md>)

### 3. UI Direction

Use `frontend-design` when the interface needs a strong aesthetic direction.

Prompt:
- "Use `frontend-design` and make this feel intentional, distinctive, and production-grade."

Reference:
- [`.agents/skills/frontend-design/SKILL.md`](</E:\My App\Projek Web\new-porto\.agents\skills\frontend-design\SKILL.md>)

### 4. Layout And System Cleanup

Use `web-design-guidelines` when the feature exists but the hierarchy, spacing, or visual system still feels weak.

Prompt:
- "Use `web-design-guidelines` and tighten the layout, hierarchy, and visual consistency."

Reference:
- [`.agents/skills/web-design-guidelines/SKILL.md`](</E:\My App\Projek Web\new-porto\.agents\skills\web-design-guidelines\SKILL.md>)

### 5. React Or Next.js Pass

Use `vercel-react-best-practices` when touching React or Next.js code.

Goal:
- avoid obvious waterfalls
- avoid unnecessary rerenders
- avoid wasteful client-heavy patterns

Prompt:
- "Use `vercel-react-best-practices` and clean up this React implementation."

Reference:
- [`.agents/skills/vercel-react-best-practices/SKILL.md`](</E:\My App\Projek Web\new-porto\.agents\skills\vercel-react-best-practices\SKILL.md>)

### 6. Debug Fast

When something breaks, use the fast debug loop.

Reference:
- [`.agents/workflows/debug-fast.md`](</E:\My App\Projek Web\new-porto\.agents\workflows\debug-fast.md>)

Prompt:
- "Follow `debug-fast.md` and fix this issue with the smallest credible patch."

### 7. Browser Verification

Use `webapp-testing` when the app is runnable locally and you want browser-level verification.

Prompt:
- "Use `webapp-testing` and verify the main flow for this feature."

Reference:
- [`.agents/skills/webapp-testing/SKILL.md`](</E:\My App\Projek Web\new-porto\.agents\skills\webapp-testing\SKILL.md>)

### 8. Polish Before Ship

Use `polish-pass` after the feature works.

Check:
- visual hierarchy
- hover/focus/loading/error states
- mobile responsiveness
- accessibility basics
- obvious performance smells

Prompt:
- "Use `polish-pass` and make this ready to ship."

References:
- [`.agents/skills/polish-pass/SKILL.md`](</E:\My App\Projek Web\new-porto\.agents\skills\polish-pass\SKILL.md>)
- [`.agents/skills/accessibility/SKILL.md`](</E:\My App\Projek Web\new-porto\.agents\skills\accessibility\SKILL.md>)
- [`.agents/workflows/polish-before-ship.md`](</E:\My App\Projek Web\new-porto\.agents\workflows\polish-before-ship.md>)

### 9. Commit

Generate a terse commit subject from staged changes:

```powershell
.\.agents\tools\caveman-commit.ps1
```

Or commit directly:

```powershell
git commit -m "$(& '.\.agents\tools\caveman-commit.ps1')"
```

Reference:
- [`.agents/tools/caveman-commit.ps1`](</E:\My App\Projek Web\new-porto\.agents\tools\caveman-commit.ps1>)

### 10. Publish

Standard flow:

```powershell
git add .
git commit -m "$(& '.\.agents\tools\caveman-commit.ps1')"
git push
```

## Short Modes

### Build Mode

Use when starting from zero.

Prompt:
- "Follow [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) in build mode. Start with the thinnest useful slice."

### Polish Mode

Use when the feature already works.

Prompt:
- "Follow [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) in polish mode. Skip ideation and first-pass work."

### Debug Mode

Use when behavior is broken.

Prompt:
- "Follow [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) in debug mode and keep the fix small."

## Fast Prompts

- "Follow [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) and build a first pass for this feature."
- "Follow [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) and make this page feel premium."
- "Follow [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) and ship this from slice to polish."
- "Follow [VIBE_FLOW.md](</E:\My App\Projek Web\new-porto\VIBE_FLOW.md>) and run the publish checklist."

## Stop Conditions

Stop the pass when:
- the main user path works
- the UI feels intentional
- mobile is not broken
- obvious accessibility issues are handled
- the next improvements would be minor rather than structural
