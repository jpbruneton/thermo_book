# Thermodynamics Book Website

A Next.js website for hosting a physics book — free online reading with KaTeX math rendering + per-chapter PDF download.

## Tech Stack

- **Next.js 14** (App Router) — framework
- **TypeScript** — type safety
- **Tailwind CSS** — utility styling
- **KaTeX** — math rendering (via CDN in globals.css)
- **Vercel** — deployment target
- **GitHub** — source hosting

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 2. Environment

Set `NEXT_PUBLIC_SITE_URL` to your public origin (no trailing slash) for canonical
links, sitemap, robots, and JSON-LD. Locally it defaults to `http://localhost:3000`;
on Vercel set it under **Project Settings → Environment Variables**. See `.env.example`.

---

## Customising the Book

### Update Book Metadata

Edit **`lib/chapters.ts`** — the `bookMeta` object at the top (title, subtitle, author,
description, keywords). UI strings live in **`lib/i18n.ts`**.

### Add / Edit Chapters

Each theme/lesson is an object in the `themes` array in `lib/chapters.ts`. The `texFile`
field points at the `.tex` source under `content/tex/`; the `pdfFile` field names the PDF
served from `public/pdfs/`.

### Add PDFs

Place chapter PDFs in **`public/pdfs/`**; the filename must match the `pdfFile` field in
`lib/chapters.ts`. The app checks that files exist at build time.

---

## Deployment (Vercel + GitHub)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"** and import your GitHub repository
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable
4. Leave the rest as default (Next.js is auto-detected) and click **"Deploy"**

Vercel auto-deploys on every `git push` to `main`.

---

## Math Rendering Notes

- The site loads **KaTeX CSS** via CDN in `globals.css`
- Web chapter content uses HTML with inline `$...$` and display `$$...$$` notation

---

## Exercise PDFs (library + legacy `exo.tex`)

The script merges, for a given book theme number `N`, all exercise sources in order: legacy `content/tex/themeN_fr/exo.tex` (or `_en`) if present, then every `exercices*.tex` in `exercises_library_fr` (or `_en`) whose `\theme{N}` matches. It runs `pdflatex`, writes first under `scripts/latex-tmp/`, then copies the PDF to `public/pdfs/`.

**Outputs**

| File | Meaning |
|------|---------|
| `public/pdfs/exo_themeN_fr.pdf` | French, with solutions (default) |
| `public/pdfs/exo_themeN_fr_sans_solutions.pdf` | French, statements only: strips `solution`, `indice`, `indication`, `hint` |
| `public/pdfs/exo_themeN_en.pdf` | English, with solutions |
| `public/pdfs/exo_themeN_en_sans_solutions.pdf` | English, statements only (same stripping as FR `_sans_solutions`) |

For a single theme, build both variants with `--both`. For `--all`, both variants are produced by default (unless you pass `--sans-solutions` only).

**Requirements**

- A LaTeX install (e.g. MiKTeX) with `pdflatex` on your `PATH`, **or** set `PDFLATEX` / `MIKTEX_PDFLATEX` to the full path of `pdflatex.exe` (PowerShell: `$env:PDFLATEX = "C:\...\pdflatex.exe"`).
- Close the target PDF in viewers (Adobe, IDE preview) before rebuilding; otherwise the copy step to `public/pdfs/` can fail on Windows.

**Commands** (from repo root)

```bash
# One theme, French (default), with solutions
npm run build:exo-pdf -- 2 fr

# One theme, English
npm run build:exo-pdf -- 2 en

# French, statements only
npm run build:exo-pdf -- 2 fr --sans-solutions

# With solutions + without (two PDFs for FR)
npm run build:exo-pdf -- 2 fr --both

# All non-empty themes: FR + EN, two PDFs per theme×language by default
npm run build:exo-pdf -- --all

# All themes, statements-only PDFs only (no “avec corrigés” pass)
npm run build:exo-pdf -- --all --sans-solutions

# All themes, French only (or English only) — still produces avec + sans per theme
npm run build:exo-pdf -- --all fr
npm run build:exo-pdf -- --all en
```

Equivalent without npm: `node scripts/build-exercises-pdf.mjs …` with the same arguments after `--` when using `npm run`.

Commit generated PDFs under `public/pdfs/` if the site should offer downloads in production (the app checks that files exist at build time).

## License

© 2026 Jean-Philippe Bruneton. All rights reserved.
