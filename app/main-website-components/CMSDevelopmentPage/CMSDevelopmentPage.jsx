import StructuredServicePage from "../StructuredServicePage/StructuredServicePage";

const capabilities = {
  title: "A CMS foundation that keeps publishing fast, flexible and governed.",
  items: [
    { title: "Content Architecture", description: "Model services, products, locations and stories as reusable structured content." },
    { title: "Editorial Experience", description: "Give non-technical teams clear workflows for drafting, reviewing and publishing." },
    { title: "Headless CMS", description: "Deliver content to websites, applications and future channels from one source." },
    { title: "Visual Page Building", description: "Create flexible landing pages from approved sections without breaking the system." },
    { title: "Roles & Approvals", description: "Protect quality with permissions, review stages and traceable publishing controls." },
    { title: "Migration", description: "Move existing content carefully while preserving structure, URLs and search equity." },
    { title: "Integrations", description: "Connect forms, CRM, commerce, search, analytics and operational tools." },
    { title: "Performance", description: "Pair modern content delivery with responsive, accessible frontend engineering." },
  ],
};

const process = {
  title: "A CMS delivery process shaped around content and people",
  steps: [
    {
      number: "01",
      title: "Discovery & Content Architecture",
      description: "We map content types, editorial roles, current pain points and future channels before selecting or configuring the platform.",
      bullets: ["Content inventory and model", "Editorial workflow mapping", "Platform and integration plan"],
      image: "/assets/Service-assets/CMSDevelopment/process-01-v2.png",
      imageAlt: "Tekcorp CMS content architecture workspace",
    },
    {
      number: "02",
      title: "Experience & CMS Engineering",
      description: "Reusable components, preview behavior and governance rules are built alongside the customer-facing experience so authors can work confidently.",
      bullets: ["Reusable page sections", "Preview, roles and approvals", "Frontend and API integration"],
      image: "/assets/Service-assets/CMSDevelopment/process-02-v2.png",
      imageAlt: "Tekcorp CMS editorial experience",
    },
    {
      number: "03",
      title: "Migration, Launch & Evolution",
      description: "Content is migrated, validated and released with training, documentation and a practical plan for continued improvement.",
      bullets: ["Structured content migration", "SEO and publishing validation", "Training and post-launch support"],
      image: "/assets/Service-assets/CMSDevelopment/process-03-v2.png",
      imageAlt: "Tekcorp CMS publishing and governance view",
    },
  ],
};

export default function CMSDevelopmentPage() {
  return (
    <StructuredServicePage
      pageClass="cms-development-page"
      titleId="cms-development-title"
      titleLines={["Flexible CMS Development", "for Faster Publishing"]}
      breadcrumb="CMS Development"
      overview={{
        kicker: "Content operations without technical bottlenecks",
        title: "Manage content without slowing down the experience.",
        paragraphs: [
          "We design CMS platforms around the way your team creates, reviews and publishes content—not around a rigid template.",
          "The result is a maintainable publishing system with clean structure, dependable governance and a fast customer experience.",
        ],
        facts: [
          { value: "Structured", label: "Reusable content models" },
          { value: "Governed", label: "Roles and approvals" },
          { value: "Connected", label: "APIs and integrations" },
          { value: "Fast", label: "Modern delivery" },
        ],
        cta: "Plan your CMS",
        image: "/assets/Service-assets/CMSDevelopment/process-01-v2.png",
        imageAlt: "Tekcorp CMS platform and editorial workspace",
      }}
      capabilities={capabilities}
      process={process}
    />
  );
}
