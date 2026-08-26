# Arishya Jindal — Portfolio

Live site: https://arishya7.github.io/portfolio

## Structure

- `index.html` — page markup
- `style.css` — all styling
- `script.js` — project data + tab/router logic + image fallback rendering
- `images/` — drop photos here (see naming below)
- `assets/resume.pdf` — drop your resume here

Images are optional at any point in time: if a file isn't there yet, the page
shows a "+ Add ___" placeholder instead of a broken image. Add files with the
exact name below and refresh — no code changes needed.

## Image checklist

### Site
- `images/site/profile.jpg` — About page photo

### Co-curricular
- `images/cocurricular/greenprint.jpg`
- `images/cocurricular/steamunity.jpg`

### Project thumbnails (card view)
- `images/projects/coolride-thumb.jpg`
- `images/projects/aumovio-thumb.jpg`
- `images/projects/databusters-thumb.jpg`
- `images/projects/caretech-thumb.jpg`
- `images/projects/signify-thumb.jpg`
- `images/projects/urop-thumb.jpg`
- `images/projects/hotel-thumb.jpg`
- `images/projects/qube-thumb.jpg`
- `images/projects/foodsec-thumb.jpg`

### Project detail galleries
Numbered in the order they should appear, per project:
- `images/projects/coolride-1.jpg`, `coolride-2.jpg`
- `images/projects/aumovio-1.jpg`
- `images/projects/databusters-1.jpg`, `databusters-2.jpg`
- `images/projects/caretech-1.jpg`, `caretech-2.jpg`
- `images/projects/signify-1.jpg`, `signify-2.jpg`
- `images/projects/urop-1.jpg`
- `images/projects/hotel-1.jpg`, `hotel-2.jpg`
- `images/projects/qube-1.jpg`
- `images/projects/foodsec-1.jpg`

## Still-placeholder links

These currently point to `#` and need real URLs — give them to Claude to wire up, or edit directly:
- Blog link (nav actions + footer) — Notion blog URL
- Project links inside `script.js` → each project's `links: [...]` array (live app / demo / repo / report URLs)

## Local preview

Any static server works, e.g.:
```
python3 -m http.server 8000
```
then open http://localhost:8000

## Deploy

Push to `main` on GitHub — Pages is configured to serve from the repo root, so changes go live within a minute or two of pushing.
