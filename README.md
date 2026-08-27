# Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS.

## Concept

The page treats your career like a codebase: the hero is a terminal
session, projects are listed like `ls ./projects`, and experience reads
as a git log with diff-style `+` lines. It's meant to feel like *your*
vernacular as a developer, not a generic template.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit content

Almost everything you need to change lives in **`lib/data.ts`**:

- `projects` — your project list. Add a `metric` (e.g. a PageSpeed score)
  if a project has a concrete win to show off.
- `log` — your experience, styled as commits. Each entry gets a couple
  of "diff" lines describing what you did.
- `social` — your GitHub/LinkedIn/email links.

You generally won't need to touch the components to update content.

## Adding project images

Drop images in `public/img/` and reference them with `next/image` inside
`ProjectCard.tsx` if you want visuals per project (the current version
is text/metric-first, matching the terminal concept — add images only
if a project genuinely needs a screenshot to land).

## Deploying

Push to GitHub, then import the repo at https://vercel.com/new — it
will detect Next.js automatically. Free tier is enough for a portfolio.

## Design tokens

Defined in `tailwind.config.ts`:

- `paper` / `ink` — background and text
- `diff.add` / `diff.del` — the git-diff green/red accent, used for
  metrics, links, and the experience log
- Fonts: IBM Plex Sans (body) + IBM Plex Mono (headings, terminal
  chrome), loaded via `next/font/google` in `app/layout.tsx`
