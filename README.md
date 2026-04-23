# danielgrigore.ro

Personal website for Daniel Grigore — Infrastructure Consultant.

**Tech Stack:** Astro + Tailwind CSS, static HTML generation.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` (Astro will tell you the exact port).

## Build

```bash
npm run build
```

Outputs static files to `dist/`. These are ready to deploy to any web server.

## Deployment to Your Server

```bash
# Build locally
npm run build

# Copy dist/ to your server
rsync -av dist/ user@server:/var/www/danielgrigore.ro/
```

Or use a simple shell script to automate this.

## Structure

- `src/pages/` — Routes (index, contact, blog, work pages)
- `src/layouts/` — Page layouts (BaseLayout, PostLayout)
- `src/components/` — Reusable components (ServiceCard, CaseStudyCard)
- `src/content/` — Markdown content (case studies in `work/`, blog posts in `blog/`)
- `src/styles/` — Global CSS with Tailwind directives

## Adding Content

### Case Studies
Add a markdown file in `src/content/work/`. It will be automatically available at `/work/[slug]`.

### Blog Posts
Add a markdown file in `src/content/blog/`. It will be automatically available at `/blog/[slug]`.

Both support YAML frontmatter:
```yaml
---
title: "Post Title"
description: "Short description"
slug: my-post-slug
pubDate: "2024-04-23" (optional, for blog posts)
---

Your markdown content here...
```

## Customization

Colors are defined in `tailwind.config.mjs`:
- `#0d0d0d` — background
- `#161616` — surface (cards)
- `#2a2a2a` — border
- `#f0f0f0` — text primary
- `#888888` — text secondary
- `#3b82f6` — accent (blue)

To change colors, update `theme.extend.colors` in the config.
