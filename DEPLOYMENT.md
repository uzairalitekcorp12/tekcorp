# Deployment checklist

## Runtime

- Node.js 20.19 or newer is required.
- Install with `npm ci` so `package-lock.json` is authoritative.
- Validate with `npm run lint` and `npm run build` before deployment.
- Start a self-hosted production build with `npm run start`.

## Required environment variables

Copy the names from `.env.example` into the deployment environment. A live
deployment should configure `MONGODB_URI`, keep `USE_LOCAL_DATA=false`, and set
`NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before building.

`NEXT_PUBLIC_SITE_URL` is embedded at build time. Rebuild after changing it.

## Content modes

- Articles, insights, case studies, and contact submissions use MongoDB in
  production.
- Local content fallback is intended for development and preview work.
- Contact submissions intentionally fail instead of reporting false success
  when durable production storage is unavailable.
- `SERVICE_PROJECTS_SOURCE=auto` uses MongoDB when available and bundled local
  project cards otherwise. Use `database` if a deployment must fail closed.

## Routes

Canonical website routes are lowercase:

- `/home`, `/about`, `/contact`
- `/services/web-engineering`
- `/services/application-engineering`
- `/services/maintenance-support`
- `/services/prototyping-ui-ux-design`
- `/services/quality-assurance-testing`
- `/case-studies` and `/case-studies/[slug]`
- `/insights` and `/insights/[slug]`

Legacy uppercase `/Home`, `/About`, and `/Contact` URLs remain supported.

Article and case-study slugs must contain lowercase letters, numbers, and
single hyphen-separated segments. Invalid or unpublished slugs return the
route-specific 404 page.
