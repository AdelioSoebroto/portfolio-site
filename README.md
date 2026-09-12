# Portfolio Site

Project 1 of a 6-month, one-project-a-month roadmap. A personal site and blog
that documents the whole build in public.

## What it does

- Home page with a short intro, featured projects, and latest posts
- `/projects` — the full 6-month roadmap with status, dates, and skills per project
- `/blog` — write-ups published as MDX, one per project as it ships
- `/about` — the philosophy behind the roadmap

## Why it's built this way

- **Next.js App Router + TypeScript** — the most in-demand React setup, and
  the router/data-fetching patterns here (server components, `generateStaticParams`)
  carry directly into every later project.
- **MDX for blog posts** — write posts in Markdown with embeddable React
  when needed, no external CMS to manage for a single-author blog.
- **Tailwind CSS** — fast to iterate on without a component library
  dependency to learn on day one.
- **Projects data as a typed TS file** (`src/content/projects.ts`) rather than
  a database — this site has no dynamic content that needs one yet; a real
  database shows up starting with Project 2.

## Tech stack

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS 4 · MDX
(`next-mdx-remote`) · gray-matter for frontmatter

## Running locally

```bash
npm install
npm run dev
```

## Status

In progress — Sep 14–Oct 4, 2026 (Month 1 of 6). See `/projects` on the live
site for the full roadmap.
