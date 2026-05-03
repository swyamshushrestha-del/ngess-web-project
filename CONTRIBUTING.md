# Git Workflow — New Galaxy School Website

Follow this workflow for **every update** pushed to GitHub.

---

## Step-by-Step Workflow

```
Idea → Branch → Build → README (if needed) → Commit → ✅ Verify with owner → Merge → Push
```

> **⚠️ Rule:** Before any `git push`, Copilot must show a summary and get explicit approval:
> - Branch name
> - Commit message(s)
> - Files changed
>
> **No push happens without a thumbs-up.**

### 1. 🌿 Create a Branch

**Never work directly on `main`.**

```bash
# New feature
git checkout -b feature/short-description

# Bug fix
git checkout -b fix/short-description

# Content/copy update
git checkout -b content/short-description

# UI/style update
git checkout -b style/short-description
```

**Branch naming examples:**
- `feature/add-events-page`
- `fix/navbar-mobile-overlap`
- `content/update-principal-message`
- `style/hero-section-animation`

---

### 2. 🔨 Build & Commit

Make atomic commits — one logical change per commit.

**Commit format:**
```
type(scope): short description

Optional longer description.
```

| Type | When to use |
|------|------------|
| `feat` | New page, component, or feature |
| `fix` | Bug or visual fix |
| `style` | Design / CSS changes |
| `content` | Text, images, data updates |
| `chore` | Config, cleanup, dependencies |
| `docs` | README or documentation only |

```bash
git add -A
git commit -m "feat(gallery): add video highlights section"
```

---

### 3. 📝 Update README (if applicable)

Update `README.md` if you:
- Add a new page
- Change the tech stack
- Change the design system
- Add new public images

---

### 4. 🔀 Merge to Main

```bash
git checkout main
git merge feature/your-branch-name
git branch -d feature/your-branch-name   # clean up
```

---

### 5. 🚀 Push to GitHub

```bash
git push origin main
```

> Only use `--force` if you have a very specific reason (e.g., rewriting history after a mistake). **Avoid it by default.**

---

### 6. 🏷️ Tag Milestone Releases

When a major version is done (e.g., all pages complete):

```bash
git tag -a v1.0.0 -m "v1.0.0 — Full website launch"
git push origin v1.0.0
```

---

## Branch Structure

```
main          ← production-ready, always deployable
├── feature/* ← new features
├── fix/*     ← bug fixes
├── style/*   ← UI/design changes
└── content/* ← copy/image/data updates
```

---

## Quick Reference

```bash
# Start a new change
git checkout -b feature/my-feature

# Check status
git status

# Commit
git add -A && git commit -m "feat(section): description"

# Merge & push
git checkout main && git merge feature/my-feature && git push origin main

# Tag a release
git tag -a v1.x.x -m "description" && git push origin v1.x.x
```
