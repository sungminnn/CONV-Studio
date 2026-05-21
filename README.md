# CONV Studio

CONV Studio is a conversion-focused landing page for a digital web studio. Instead of presenting a generic agency portfolio, the page is structured around clear business outcomes: KakaoTalk consultation, inquiry form submission, service segmentation, pricing confidence, and trust-building content.

## Highlights

- Built a production-ready Next.js landing page with a mobile-first conversion funnel.
- Structured the page around high-intent sections: problem framing, method, services, trust points, results, pricing, FAQ, and final CTA.
- Created reusable section and UI components for headings, badges, buttons, result cards, pricing cards, and layout elements.
- Added Docker, Docker Compose, Nginx templates, and Certbot configuration for HTTPS deployment.
- Documented product strategy in `docs/conv-studio-plan.md` to connect UX decisions with business goals.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Docker / Docker Compose
- Nginx
- Certbot

## Project Structure

```text
src/
  app/                 # App Router entry, layout, and global styles
  components/
    layout/            # Header, footer, floating Kakao CTA
    sections/          # Landing page sections
    ui/                # Shared presentation components
  lib/site-data.ts     # Centralized page content and CTA data
docs/
  conv-studio-plan.md  # Product and UX strategy document
nginx/                 # HTTP/HTTPS reverse proxy templates
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Docker Deployment

```bash
cp .env.example .env
docker compose up -d --build app nginx
```

For HTTPS, set `DOMAIN` and `LETSENCRYPT_EMAIL` in `.env`, issue a certificate with the included Certbot service, then restart Nginx.

## Resume Notes

This project is useful for demonstrating product-minded frontend development: funnel design, reusable component architecture, deployment readiness, SEO-aware content structure, and business conversion strategy.
