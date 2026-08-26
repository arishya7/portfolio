# Arishya Jindal — Portfolio

Live site: https://arishya7.github.io/portfolio

## Structure

- `index.html` — page markup
- `style.css` — all styling
- `script.js` — project data + tab/router logic + image fallback rendering + lightbox
- `images/` — project, co-curricular and site photos
- `assets/resume.pdf` — résumé, linked from the Resume buttons
- `demos/atm-replenishment.html` — the standalone ATM Replenishment simulation, linked live from its project card

Images are optional at any point in time: if a file isn't there yet, the page
shows a "+ Add ___" placeholder instead of a broken image. Project card
thumbnails and gallery images use `object-fit: contain` (not crop), so
screenshots/slides show in full rather than getting cut off.

## Image status

All project, About and co-curricular photos are filled in. Resume PDF is in.

## Known gaps / things flagged along the way

- **Aquaponics Monitoring** → project removed per your instruction. Its one photo (`images/projects/aquaponics .jpg`) is still sitting in the folder, unused, in case you want it back later.
- **Influencer Dashboard** → live link is Mummy's Market's internal server address (`http://mummysmarket.synology.me:8501/`) — added since you confirmed that's fine.
- **Social Listening Dashboard** → no live link added. The one given is a temporary Cloudflare tunnel URL that would likely be dead by the time anyone clicks it — send a stable one if you get it.
- **CoolRide** → lost the original "setup day" candid photo to a sequencing mistake on my end early on. Gallery uses the impact/routing poster + the award photo instead. Resend the setup-day shot if you still want it in.
- **ATM Replenishment** → the actual interactive HTML tool you built (`~/SAD/main.html`) is copied into the repo at `demos/atm-replenishment.html` and linked live from the project card, since it's self-contained (no external requests) and uses simulated ATM data.
- **Aumovio** → the two internal-tooling screenshots (`aumovio-2.jpg`, `aumovio-3.jpg`) are wired into the gallery per your go-ahead. They do show a real internal username and file paths in the UI — you've confirmed twice that's fine, just flagging it's genuinely visible if you ever change your mind.

## Local preview

Any static server works, e.g.:
```
python3 -m http.server 8000
```
then open http://localhost:8000

## Deploy

Push to `main` on GitHub — Pages is configured to serve from the repo root, so changes go live within a minute or two of pushing.
