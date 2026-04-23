# CLAUDE.md — danielgrigore.ro Website

This file guides Claude Code on how to help with this website project.

## Overview

This is Daniel Grigore's personal website showcasing his infrastructure consulting practice. Built with **Astro + Tailwind CSS**, deployed as static HTML to his own server.

## Quick Start

```bash
# Install dependencies
npm install

# Development server (live reload)
npm run dev

# Build for production
npm run build

# Deploy to server
rsync -av --delete dist/ user@server:/var/www/danielgrigore.ro/
```

## Project Structure

```
src/
├── pages/              # Website routes
│   ├── index.astro    # Home page (all sections)
│   ├── contact.astro  # Contact page
│   ├── blog/          # Blog route
│   └── work/          # Case studies route
├── layouts/           # Page templates
├── components/        # Reusable components
├── content/           # Markdown files
│   ├── work/         # Case studies
│   └── blog/         # Blog posts
└── styles/           # CSS
```

## Common Tasks

### Add a Blog Post

1. Create file: `src/content/blog/my-post-slug.md`
2. Add YAML frontmatter + markdown:
```yaml
---
title: "Post Title"
description: "Short summary"
slug: my-post-slug
pubDate: "2024-04-23"
---

# Your markdown content

Paragraph text...
```
3. Build: `npm run build`
4. Commit: `git add . && git commit -m "Add blog post: title"`

### Add a Case Study

1. Create file: `src/content/work/project-slug.md`
2. Add YAML frontmatter + markdown (same format as blog)
3. Add card reference to `src/pages/index.astro` (Work section)
4. Add card to `src/pages/work/index.astro` if you want it in the work index
5. Build and commit

**Format for case studies:**
```yaml
---
title: "Project Title"
description: "Brief description"
slug: project-slug
---

## The Problem
...

## The Approach
...

## Implementation
...

## Results
...
```

### Edit Existing Content

- **Home page:** Edit `src/pages/index.astro`
- **Contact page:** Edit `src/pages/contact.astro`
- **Case studies:** Edit files in `src/content/work/`
- **Blog posts:** Edit files in `src/content/blog/`

### Change Colors

Edit `tailwind.config.mjs`:
```javascript
colors: {
  bg: {
    primary: '#0d0d0d',      // Dark background
    surface: '#161616',      // Cards
    border: '#2a2a2a',       // Borders
  },
  text: {
    primary: '#f0f0f0',      // Main text
    secondary: '#888888',    // Dimmed text
  },
  accent: '#3b82f6',         // Blue
}
```

## Git Workflow

```bash
# Edit content
npm run build

# Stage and commit
git add .
git commit -m "message"

# Push to GitHub
git push origin main
```

## Deployment

After pushing to GitHub:
```bash
npm run build
rsync -av --delete dist/ user@server:/var/www/danielgrigore.ro/
```

Or set up automatic deployment via GitHub Actions (not configured yet).

## What Claude Should Know

- **Content lives in Markdown** — Easy to edit via Claude prompts
- **Files are simple and flat** — No database or build complexity
- **Build is fast** — `npm run build` takes <1 second
- **Testing is visual** — Always `npm run dev` and check `http://localhost:3000` when making UI changes
- **Commits should be descriptive** — Use messages like "Add blog post: DNS fundamentals" or "Update services description"
- **No server process** — Just static files, so no need to worry about runtime behavior

## Examples of Good Prompts for Claude

- "Add a blog post about DNS performance tuning"
- "Update the services section to emphasize managed services"
- "Add a new case study about infrastructure modernization"
- "Change the accent color to green and rebuild"
- "Fix the typo in the about section"
- "Create a blog post based on this outline..."
- "Add testimonials from LinkedIn to the social proof section"

## Verification Checklist

After making changes:
- [ ] `npm run build` completes without errors
- [ ] `npm run dev` and check pages look right
- [ ] New links work
- [ ] Mobile layout looks good
- [ ] Color/styling changes are correct
- [ ] Markdown renders properly (no broken formatting)

## Notes

- **Dark theme with blue accent** — Don't change this without good reason (it's part of the brand)
- **Markdown only** — No HTML or JSX needed in content files
- **No need to edit HTML directly** — Use `.astro` files or let Claude know if you need layout changes
- **Keep it simple** — This site succeeds because it's straightforward and maintainable

---

## Quick Reference: File Locations

| What | Where |
|------|-------|
| Home page | `src/pages/index.astro` |
| Contact page | `src/pages/contact.astro` |
| Case studies | `src/content/work/*.md` |
| Blog posts | `src/content/blog/*.md` |
| Colors | `tailwind.config.mjs` |
| Fonts | `tailwind.config.mjs` + `src/styles/global.css` |
| Components | `src/components/*.astro` |
| Layouts | `src/layouts/*.astro` |

---

**Last Updated:** 2024-04-23  
**GitHub:** https://github.com/[user]/danielgrigore.ro (set after creation)
