# TekCorp — Three New Service Pages

This package adds three service pages based on the supplied TekCorp reference designs while keeping the same Lufga typography, teal brand language, compact section spacing, responsive behavior and restrained hover effects used by the existing service pages.

## New public routes

- `/services/maintenance-support`
- `/services/prototyping-ui-ux-design`
- `/services/quality-assurance-testing`

The package also preserves the existing centralized routes for:

- `/`
- `/Home` and `/home`
- `/About` and `/about`
- `/Contact` and `/contact`
- `/services/web-engineering`
- `/services/application-engineering`

---

## Paste these new component folders

Copy:

`app/main-website-components/MaintenanceSupportPage/`

to:

`tekcorp-main/app/main-website-components/MaintenanceSupportPage/`

Copy:

`app/main-website-components/PrototypingDesignPage/`

to:

`tekcorp-main/app/main-website-components/PrototypingDesignPage/`

Copy:

`app/main-website-components/QualityAssuranceTestingPage/`

to:

`tekcorp-main/app/main-website-components/QualityAssuranceTestingPage/`

---

## Paste these new page-composer folders

- `app/main-website-pages/MaintenanceSupport/`
- `app/main-website-pages/PrototypingDesign/`
- `app/main-website-pages/QualityAssuranceTesting/`

into the same paths under `tekcorp-main/app/main-website-pages/`.

The page composers reuse your existing:

- `_shared/Navbar/Navbar`
- `_shared/ContactSection/ContactSection`
- `_shared/Footer/Footer2`
- `ServiceRecentProjects`

Maintenance and QA include the existing shared ContactSection because the references include that block. The prototyping page follows its reference and goes from Recent Projects directly into Footer2.

---

## Service Projects — separate from Case Studies

The Recent Projects section on service pages is an independent content unit.

This package includes:

- `app/_lib/models/ServiceProject.js`
- `app/_lib/db/serviceProjectsMongo.js`
- `app/_lib/data/serviceProjects.js`
- `app/_lib/data/localServiceProjects.js`
- updated `app/main-website-components/ServiceRecentProjects/`

It does NOT import or modify:

- `CaseStudy.js`
- `caseStudies.js`
- `/case-studies`
- Case Study page components

### Data source behavior

Default:

`SERVICE_PROJECTS_SOURCE=auto`

`auto` tries MongoDB first. If the database is unavailable or no matching published service projects exist, local fallback data is used.

Development-only local mode:

`SERVICE_PROJECTS_SOURCE=local`

Strict database mode:

`SERVICE_PROJECTS_SOURCE=database`

MongoDB URI:

`MONGODB_URI=...`

The MongoDB collection is:

`service_projects`

Example document:

```js
{
  title: "Collaborative App for Creative Teams",
  slug: "creative-team-collaboration",
  category: "Websites & Digital Platforms",
  summary: "A collaborative product experience.",
  services: [
    "prototyping-ui-ux-design"
  ],
  image: {
    src: "https://cdn.example.com/project.png",
    alt: "Collaborative app interface"
  },
  href: "/Contact",
  featured: true,
  order: 1,
  status: "published",
  publishedAt: new Date()
}
```

The same project may be attached to several service pages by adding several values to `services`.

---

## Updated existing files

Replace your current:

- `app/page.js`
- `next.config.mjs`

with the versions in this package.

They add the three new service routes while preserving the routes already present in your project.

After replacing `next.config.mjs`, restart the development server.

---

## Images

Copy the complete folder:

`public/assets/Service-assets/`

into:

`tekcorp-main/public/assets/Service-assets/`

### Maintenance & Support

- `/assets/Service-assets/MaintenanceSupport/dedicated-account-manager.png`
- `/assets/Service-assets/MaintenanceSupport/support-channels.png`

### Prototyping & UI/UX Design

- `/assets/Service-assets/PrototypingDesign/sweet-spot-venn.png`
- `/assets/Service-assets/PrototypingDesign/process-flow.png`
- `/assets/Service-assets/PrototypingDesign/research-sticky-notes.png`

### Quality Assurance & Testing

- `/assets/Service-assets/QualityAssurance/qa-process-illustration.png`
- `/assets/Service-assets/QualityAssurance/qa-specialist.png`

### Local Recent Project fallback images

- `/assets/Service-assets/Projects/project-01.png`
- `/assets/Service-assets/Projects/project-02.png`
- `/assets/Service-assets/Projects/project-03.png`
- `/assets/Service-assets/Projects/project-04.png`

The supplied page-reference crops are included so the layouts work immediately during local testing. When you have original high-resolution artwork, replace the image files using the same filenames. No JSX/CSS changes will be needed.

---

## Navbar mega-menu links

See:

`NAVBAR-SERVICE-LINKS.txt`

This intentionally contains only the three data-level service-link edits so you do not overwrite or destabilize the mega-menu component you already approved.

---

## Design notes

### Maintenance & Support

- centered service hero
- tiered support cards
- real account-manager image area
- responsive support-channel image panel
- delivery/feedback section
- shared ContactSection
- Footer2

### Prototyping & UI/UX Design

- centered service hero
- real Venn-process image instead of a CSS infographic
- four process cards
- real process-flow and research-note images
- six capability cells
- independent database/local Service Projects section
- Footer2

### Quality Assurance & Testing

- centered service hero
- four QA cards arranged around a real process illustration on desktop
- responsive stacked QA flow on mobile
- benefits section with real specialist image
- shared ContactSection
- Footer2

All three pages use restrained hover movement, image-scale effects, reduced-motion support and intentionally tighter section spacing so adjacent sections do not create unnecessary gaps.
