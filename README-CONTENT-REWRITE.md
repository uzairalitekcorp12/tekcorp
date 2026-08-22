# TekCorp Content Pages Rewrite

This package follows the supplied project structure and removes the old main-page naming conflict.

## Current naming

- **Home** is the canonical main customer-facing page
- **About** is the canonical company page
- No generated route imports the legacy landing controller
- `/` and `/Home` render `main-website-pages/Home/Home.jsx`
- `/About` renders `main-website-pages/About/About.jsx`

## Canonical routes

- `/`
- `/Home`
- `/About`
- `/Contact`
- `/WebEngineering`
- `/ApplicationEngineering`
- `/insights`
- `/insights/[slug]`
- `/case-studies`
- `/case-studies/[slug]`

## Offline / local development

`app/_lib/data/localContent.js` contains development-only demo records.

The demo records use:
`public/assets/content-demo/*.svg`

For forced local mode:

```env
USE_LOCAL_DATA=true
```

For normal local development:

```env
USE_LOCAL_DATA=false
ALLOW_LOCAL_DATA_FALLBACK=true
```

This tries MongoDB first and falls back to demo data only outside production.

Production must keep `USE_LOCAL_DATA=false`. Automatic fallback is also disabled in production.

## Insights

- Server-side GET search: `/insights?search=architecture`
- Search covers title, excerpt, category, tags, author and article text
- Pagination keeps the search query
- Five trending records keep the reference two-row mosaic intact
- Six regular records keep the reference 3 x 2 grid intact
- Any larger dataset continues through pagination

## Case Studies

- Server-side category filtering
- A case study matches both its primary `category` and its `tags`
- Filter links produce shareable URLs such as:
  `/case-studies?category=UI%2FUX+Design`
- Six records keep the reference 2 x 3 layout intact
- More records continue through pagination
- Cards preserve the canonical Mongoose slug

## Detail pages

Article detail:
- author/date panel
- share buttons
- copy-link button
- structured content blocks
- trending sidebar
- subscription intent routes to `/Contact`
- six More Blogs cards

Case-study detail:
- reference-style centered title hero
- large project media
- two-column story
- structured sections
- two-column gallery
- project-aware `/Contact` CTA

## Shared components included

- Navbar rewritten with Home / About naming
- Footer2
- ContactSection with real server action
- CmsImage
- ContentPagination
- ContentRouteLoading
- ContentRouteState

## Important

The existing `app/landing/` directory from your repository is not required by these generated routes. It may remain temporarily for migration safety, but `app/page.js` no longer imports it.
