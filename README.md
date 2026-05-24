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

The Next.js app lives in **`web/`**. Configure the Vercel project like this:

1. **Settings** → **General** → **Root Directory** → `web` → Save  
2. **Settings** → **General** → **Framework Preset** → **Next.js** (should auto-detect after step 1)  
3. **Settings** → **General** → **Output Directory** → **clear any override** (remove `public` if it is set — that is for static sites, not Next.js)  
4. **Build & Development Settings** → leave **Build Command** and **Install Command** at their defaults (`next build` / `npm install`)  
5. **Deployments** → **Redeploy**

| Symptom | Fix |
|--------|-----|
| `npm run build` exit **127** | Root Directory not `web`, or dependencies not installed in `web/` |
| No Output Directory named **`public`** | Clear **Output Directory** override; use Framework **Next.js**, not “Other” |

```bash
cd web && npm run build && npm run start
```

## Legacy static site

The old `index.html` / `courses.html` / monolithic course files remain for reference. The live app is the Next.js project in `web/`.
