---
name: polish-pass
description: Run a focused final refinement pass on existing work. Use when a page, component, or feature already works and now needs visual polish, responsive cleanup, accessibility fixes, tighter copy, or performance smell checks before it feels shippable.
---

# Polish Pass

Make working output feel intentional. Focus on the highest-leverage fixes, not endless tweaking.

## Checklist Order

Run this pass in order:
1. visual hierarchy
2. interaction states
3. responsive layout
4. accessibility basics
5. obvious performance smells

## 1. Visual Hierarchy

Check:
- spacing rhythm
- typography contrast and scale
- primary action clarity
- copy that is shorter and more specific

Prefer a few decisive fixes over many tiny nudges.

## 2. Interaction States

Ensure the main path has:
- hover and focus states
- disabled or pending states where relevant
- empty and error states if user-facing
- success feedback for important actions

## 3. Responsive Layout

Check narrow screens first.

Look for:
- clipped text
- overflow
- awkward wrapping
- tap targets that are too small
- desktop layouts that feel empty or stretched

## 4. Accessibility Basics

At minimum, check:
- semantic elements
- labels for interactive controls
- alt text for meaningful images
- keyboard reachability
- visible focus
- sufficient contrast

## 5. Performance Smells

Do not do deep optimization by default. Only fix obvious issues such as:
- unnecessary client-heavy rendering
- avoidable rerenders
- large work in render paths
- obvious fetch waterfalls

## Stop Rule

Stop when the experience feels coherent and ready to show someone else. Do not keep polishing once improvements become hard to notice.
