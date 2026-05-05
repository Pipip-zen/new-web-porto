Favor fast visible progress over abstract planning.

Repo-local workflow:
- Build the smallest useful vertical slice first.
- Prefer visible UI changes, runnable outputs, and short feedback loops.
- Keep edits scoped; avoid broad refactors unless the user asks for them.
- After the first working draft, run a polish pass for UX, responsiveness, accessibility, and obvious performance issues.
- When frontend work is requested, prefer the vendored skills in `.agents/skills` before improvising from scratch.

Skill routing:
- Use `frontend-design` for new pages, components, and visual redesigns.
- Use `web-design-guidelines` to sharpen hierarchy, layout, and visual systems.
- Use `vercel-react-best-practices` when writing or reviewing React or Next.js code.
- Use `webapp-testing` when a local app needs browser verification.
- Use `accessibility` and `polish-pass` before calling UI work done.
- Use `vibe-slice-builder` when the user wants a feature shipped quickly with minimal churn.

Communication:
- Be concise and concrete.
- Show progress through working artifacts, not long explanations.
- Offer options only when they materially change cost, speed, or quality.
