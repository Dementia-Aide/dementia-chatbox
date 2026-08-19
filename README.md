# DementiaAide Assistant (MVP)

A standalone chatbox that gives caregivers plain-language dementia-care guidance. Extracted from the larger DementiaAide project — this is just the rule-based advice engine (`analyzeCareQuery`) wrapped in a minimal chat UI, with no backend, no database, and no external API calls.

## Run locally

With Docker (recommended — works identically on Mac and Windows):

```bash
docker compose up
```

Then open http://localhost:5173.

Without Docker:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` to GitHub Pages. Enable Pages in the repo settings (Settings → Pages → Source: GitHub Actions) once the repo is created.
