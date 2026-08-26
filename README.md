# Arishya Jindal — Portfolio

Live site: https://arishya7.github.io/portfolio

## Structure

- `index.html` — page markup
- `style.css` — all styling
- `script.js` — project data + tab/router logic + image fallback rendering
- `images/` — project, co-curricular and site photos
- `assets/resume.pdf` — drop your resume here (not added yet)
- `demos/atm-replenishment.html` — the standalone ATM Replenishment simulation, linked live from its project card

Images are optional at any point in time: if a file isn't there yet, the page
shows a "+ Add ___" placeholder instead of a broken image.

## Image status

All project, About and co-curricular photos are filled in except:

- `images/site/profile.jpg` — About page photo, not added yet
- Signify's second gallery slot ("Award photo" with Singtel) — not added yet
- Résumé PDF at `assets/resume.pdf` — not added yet

## Known gaps / things flagged along the way

- **Aumovio** → two screenshots you dropped in (`aumovio automation.png`, `aumovio compare pipeline.png`, still sitting in `images/projects/` unused) show real internal usernames, file paths and proprietary requirement/module names from the company's DOORS tooling. Not wired into the site — get these sanitized/cleared before publishing. The safe team photo is used in their place for now.
- **Aquaponics Monitoring** → project removed per your instruction. Its one photo (`images/projects/aquaponics .jpg`) is still sitting in the folder, unused, in case you want it back later.
- **Influencer Dashboard** → live link is Mummy's Market's internal server address (`http://mummysmarket.synology.me:8501/`) — added since you resent it after the flag, but it's worth double-checking that's meant to be public.
- **Social Listening Dashboard** → no live link added. The one given is a temporary Cloudflare tunnel URL that would likely be dead by the time anyone clicks it — send a stable one if you get it.
- **CoolRide** → lost the "setup day" candid photo to a sequencing mistake on my end (deleted the source before finalizing, then overwrote its copy). Gallery now uses the impact/routing poster + the award photo instead. Resend the setup-day shot if you still want it in.
- **ATM Replenishment** → the actual interactive HTML tool you built (`~/SAD/main.html`) is copied into the repo at `demos/atm-replenishment.html` and linked live from the project card, since it's self-contained (no external requests) and uses simulated ATM data. Say the word if you'd rather it not be public and I'll pull it and fall back to a screenshot.

## Local preview

Any static server works, e.g.:
```
python3 -m http.server 8000
```
then open http://localhost:8000

## Deploy

Push to `main` on GitHub — Pages is configured to serve from the repo root, so changes go live within a minute or two of pushing.
