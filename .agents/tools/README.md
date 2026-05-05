`caveman-commit.ps1` generates a terse Conventional Commit subject from staged
Git changes and does not run `git commit`.

Usage:

```powershell
git add .
.\.agents\tools\caveman-commit.ps1
.\.agents\tools\caveman-commit.ps1 -Copy
git commit -m "$(& '.\.agents\tools\caveman-commit.ps1')"
```

Notes:
- Run it inside a Git repo.
- It reads staged changes only.
- Output is a single Caveman-style subject line.
