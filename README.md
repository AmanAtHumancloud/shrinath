# Shrinath Shikshan Sanstha — Branding website

Next.js 16 · React 19 · Tailwind v4 · framer-motion · TypeScript.

## Setup

```bash
npm install
cp .env.example .env.local
# edit .env.local — at minimum, set NEXT_PUBLIC_WEB3FORMS_KEY
npm run dev
```

Open http://localhost:3000.

## Environment

| Variable | Required | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | yes | Routes the contact + admissions forms to Web3Forms email delivery. Get a free key (no signup beyond an email address) at https://web3forms.com. |
| `NEXT_PUBLIC_SITE_URL` | recommended | Used in metadata, sitemap, and OG URLs. Set to the production domain on deploy. Defaults to `http://localhost:3000`. |

After changing env vars, restart the dev server.

## Forms

Both `ContactForm` and `AdmissionsForm` POST to `https://api.web3forms.com/submit` via `lib/web3forms.ts`. Includes a honeypot field (`botcheck`) and a 2-second client-side throttle. Submissions arrive in the inbox tied to the access key.

If the key is missing, forms still render but show a clear error on submit pointing to setup.

## Map

`app/components/sections/MapEmbed.tsx` embeds the Google Maps short link. If the iframe renders blank (Google occasionally blocks short links via X-Frame-Options), replace `src` with the long-form embed URL from Google Maps → Share → Embed a map.

## Build

```bash
npm run lint
npm run build
npm start
```

## Project map

```
app/
  page.tsx                   # Home
  about/                     # About
  academics/                 # Academics overview + 3 stage subroutes
  admissions/                # Admissions: process, fees, FAQ, form
  gallery/                   # Photo grid + lightbox
  contact/                   # Details + form + map
  components/
    ui/                      # Container, Section, Button, Reveal, etc.
    media/                   # SmartImage, Lightbox, GalleryGrid
    forms/                   # FormShell, FormField, ContactForm, AdmissionsForm
    sections/                # Hero, ProgramCards, Features, etc.
    Navbar.tsx, Footer.tsx, TopBar.tsx, ScrollToTop.tsx
  globals.css                # Tailwind v4 @theme tokens + components
  layout.tsx                 # Fonts, metadata, chrome
  sitemap.ts, robots.ts
lib/
  site.ts, motion.ts, web3forms.ts, images.ts, cn.ts
  data/                      # Static content arrays
public/
  logo.png + 12 photos       # Renamed from generic image*.png to descriptive names
```
