# Setup & Quick Start

Your website is built with **Astro** — a modern static site generator that creates pure HTML files. No databases, no servers, just fast static files.

## What You Have

```
danielgrigore.ro/
├── src/               # Source files
│   ├── pages/        # Website pages (index, contact, work, blog)
│   ├── layouts/      # Page templates
│   ├── components/   # Reusable components
│   ├── content/      # Markdown case studies and blog posts
│   └── styles/       # Global CSS
├── dist/             # Generated static HTML (ready to deploy)
├── public/           # Static assets
├── package.json      # Dependencies
├── astro.config.mjs  # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## Local Development

### 1. Install Dependencies
```bash
cd ~/Documents/daniel-grigore-website
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

Visit `http://localhost:3000` (or whatever port Astro tells you).

You'll see live updates as you edit files.

### 3. Build for Production
```bash
npm run build
```

Creates optimized static files in `dist/`.

## Editing Content

### Home Page
Edit `src/pages/index.astro` — this is your main page with all sections (Hero, About, Services, Work, Social Proof).

### Services
Change the 3 service cards in the Services section of `src/pages/index.astro`.

### Case Studies
Add/edit markdown files in `src/content/work/`:
- `glpi-service-desk.md`
- `powerdns-multitenant.md`
- `remote-vpn.md`
- `dokuwiki-knowledge-base.md`
- `proxmox-cluster.md`

They automatically become pages at `/work/[slug]`.

**Format:**
```markdown
---
title: "Project Title"
description: "Short summary"
slug: my-slug
---

# Your markdown content here

## Section Heading

Paragraph text...
```

### Blog Posts
Add markdown files in `src/content/blog/` — same format as case studies.

They automatically become pages at `/blog/[slug]`.

### Contact Page
Edit `src/pages/contact.astro` — phone, email, location, etc.

## Design Changes

### Colors
Edit `tailwind.config.mjs`:
- `#0d0d0d` — background (dark)
- `#161616` — surface (cards)
- `#2a2a2a` — border
- `#f0f0f0` — text
- `#888888` — text secondary
- `#3b82f6` — accent (blue)

### Typography
Edit `src/styles/global.css` and `tailwind.config.mjs` for fonts, sizes, line heights.

### Layout
Edit `src/layouts/BaseLayout.astro` for nav, footer, overall structure.

## Deployment

See `DEPLOYMENT.md` for detailed instructions.

**Quick version:**
```bash
npm run build
rsync -av --delete dist/ user@server:/var/www/danielgrigore.ro/
```

## Customization Ideas

### Add a Blog Post
1. Create `src/content/blog/my-first-post.md`
2. Add YAML frontmatter (title, description, pubDate, slug)
3. Write markdown
4. Run `npm run build`
5. New post appears at `/blog/my-first-post`

### Change Domain
1. Update `site` in `astro.config.mjs`
2. Update email/phone in contact page and footer
3. Update Nginx config with your domain

### Add More Case Studies
1. Add markdown file to `src/content/work/`
2. Add a CaseStudyCard component reference in `src/pages/index.astro` (Work section)
3. Add a card to `src/pages/work/index.astro` if you want it in the work index

### Custom Styling
All colors use Tailwind utilities. Examples:
- `bg-bg-primary` — dark background
- `text-accent` — blue text
- `border-bg-border` — subtle border

Modify `tailwind.config.mjs` to change the color values.

## No Build Server Needed

Your server just needs to:
1. Serve static files (Nginx, Apache, anything)
2. Have HTTPS (Let's Encrypt, free)

**You build locally, deploy static files.** Zero runtime complexity.

## Questions?

- **Astro docs:** https://docs.astro.build
- **Tailwind docs:** https://tailwindcss.com/docs
- **Nginx docs:** https://nginx.org/en/docs/

Your site is simple and yours to maintain — no vendor lock-in, just static HTML and your own server.
