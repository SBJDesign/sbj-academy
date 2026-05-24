# SBJ Academy

A modern learning platform for free professional courses — branding, business communication, and more.

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | **TypeScript** |
| UI | React 19 + Tailwind CSS 4 |
| Theming | `next-themes` (light / dark) |
| Content | Structured JSON (extracted from legacy HTML) |
| Progress | Browser `localStorage` (per course) |

This replaces the previous all-in-one static HTML files with a proper app structure: typed data, reusable components, routing, and a maintainable codebase.

## Project structure

```
sbj-academy/
├── web/                          # ← Main application (run commands here or from root)
│   ├── src/
│   │   ├── app/                  # Routes: /, /courses, /learn/[slug]
│   │   ├── components/           # Header, course player, quizzes
│   │   ├── content/              # Course JSON (modules, quizzes, lessons)
│   │   └── lib/                  # Types, catalog, progress helpers
│   └── scripts/extract-course.mjs  # Re-import content from legacy HTML
├── courses/                      # Legacy HTML (source for extraction)
├── index.html                    # Legacy static site (archived)
└── package.json                  # Root shortcuts: npm run dev
```

## Quick start

```bash
npm install --prefix web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| URL | Page |
|-----|------|
| `/` | Marketing home |
| `/courses` | Course catalogue |
| `/learn/branding` | Branding Mastery (10 modules) |
| `/learn/business-communication` | Business Communication (15 modules) |

## Updating course content

1. Edit the legacy HTML under `courses/<slug>/index.html` if needed.
2. Re-extract JSON:

```bash
npm run extract-courses
```

3. Rebuild: `npm run build`

## Deploy (Vercel)

**Recommended:** In your Vercel project → **Settings** → **General** → **Root Directory**, set:

```text
web
```

Save, then **Redeploy**. Vercel will run `npm install` and `next build` inside `web/` automatically.

If you keep the repository root as the Vercel root, `vercel.json` at the repo root installs and builds the `web` workspace instead (fixes `npm run build` exit code 127).

```bash
cd web && npm run build && npm run start
```

## Legacy static site

The old `index.html` / `courses.html` / monolithic course files remain for reference. The live app is the Next.js project in `web/`.
