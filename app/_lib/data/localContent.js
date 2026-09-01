import "server-only";


/*
 * ==========================================================================
 * DEVELOPMENT / OFFLINE DUMMY CONTENT
 * ==========================================================================
 *
 * This file is used ONLY when:
 *
 * USE_LOCAL_DATA=true
 *
 * or MongoDB fails locally while:
 *
 * ALLOW_LOCAL_DATA_FALLBACK=true
 *
 * Production should use MongoDB and should NOT enable local data mode.
 *
 * The image paths below use assets that already exist in the supplied TekCorp
 * project. No Navbar, Footer, page design or shared component is changed.
 * ==========================================================================
 */


const ARTICLE_IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
];


const CASE_STUDY_IMAGES = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85",
];


const LONG_ARTICLE_BODY =
  "A production content page rarely contains only a short summary. Teams may need to explain the original constraint, the decisions that shaped the implementation, the trade-offs that were accepted and the operational lessons that followed. This longer fixture intentionally exercises readable paragraph rhythm, line wrapping, search indexing and responsive behavior across the editorial detail layout. It also gives future CMS records a representative baseline for content length without requiring a component rewrite.\n\nWhen content becomes more detailed, the page should remain calm and scannable. Headings should create useful pauses, images should stay inside their containers, captions should wrap naturally and long URLs should never push the page wider than the viewport. These are ordinary editorial conditions, so the local content mirrors them during development.";


const LONG_CASE_STUDY_BODY =
  "The project involved several teams, competing priorities and a workflow that had grown over time. Before implementation, TekCorp mapped the main user journeys, clarified ownership across the system and identified the moments where unclear information created repeated work. This made it possible to prioritize the highest-value improvements while keeping the delivery plan practical.\n\nThe final experience needed to work for everyday users as well as internal operators. That meant balancing a clear interface with dependable data handling, responsive behavior, accessible actions and an architecture that could accept future integrations. The case study content intentionally includes multiple paragraphs so the detail page can be evaluated with realistic client-provided copy.";


function makeArticle({
  index,
  title,
  slug,
  category,
  excerpt,
  longContent = false,
  trending = false,
  featured = false,
}) {
  const image =
    ARTICLE_IMAGES[
      index %
      ARTICLE_IMAGES.length
    ];

  const secondImage =
    ARTICLE_IMAGES[
      (
        index +
        2
      ) %
      ARTICLE_IMAGES.length
    ];

  const publishedAt =
    new Date(
      Date.UTC(
        2026,
        7,
        20 -
          index,
        10,
        0,
        0,
      ),
    ).toISOString();


  return {
    _id:
      `local-article-${index}`,

    title,

    slug,

    category,

    tags: [
      category,
      "Technology",
      "Product Engineering",
    ],

    excerpt,

    thumbnail:
      image,

    heroImage:
      image,

    author: {
      name:
        index % 2
          ? "TekCorp Engineering"
          : "TekCorp Editorial",

      image:
        `/assets/About-assets/${(index % 5) + 1}.png`,

      role:
        index % 2
          ? "Software Engineering"
          : "Product Engineering",
    },

    content: [
      {
        type:
          "paragraph",

        text:
          excerpt,
      },

      {
        type:
          "heading",

        text:
          "Turning the challenge into a clear product decision",
      },

      {
        type:
          "paragraph",

        text:
          longContent
            ? LONG_ARTICLE_BODY
            : "Successful digital products connect business goals, user experience and technical decisions early. That creates a roadmap where the product can grow without adding unnecessary complexity every time a new feature is introduced.",
      },

      {
        type:
          "image",

        image:
          secondImage,

        alt:
          `${title} supporting visual`,
      },

      {
        type:
          "heading",

        text:
          "What teams should prioritize next",
      },

      {
        type:
          "paragraph",

        text:
          "Clear ownership, measurable outcomes, maintainable architecture and strong feedback loops make future releases easier. The goal is not only to ship software, but to create a system that keeps supporting the business as requirements change.",
      },
    ],

    trending,

    featured,

    status:
      "published",

    publishedAt,

    createdAt:
      publishedAt,
  };
}


export const LOCAL_ARTICLES = [
  makeArticle({
    index: 0,
    title:
      "The Ultimate Guide to Building Digital Products That Scale",
    slug:
      "ultimate-guide-digital-products-that-scale",
    category:
      "Product Engineering",
    excerpt:
      "A practical look at the product decisions and engineering habits that help digital products scale without becoming harder to operate.",
    longContent: true,
    trending: true,
    featured: true,
  }),

  makeArticle({
    index: 1,
    title:
      "How Modern Web Platforms Turn Performance Into Growth",
    slug:
      "modern-web-platforms-performance-growth",
    category:
      "Web Engineering",
    excerpt:
      "Performance affects conversion, trust, discoverability and the cost of maintaining a digital product.",
    trending: true,
  }),

  makeArticle({
    index: 2,
    title:
      "AI Automation: Where Businesses Create Real Operational Value",
    slug:
      "ai-automation-real-operational-value",
    category:
      "AI & Automation",
    excerpt:
      "The strongest AI opportunities appear in repetitive decisions, fragmented knowledge and manual workflows.",
    trending: true,
  }),

  makeArticle({
    index: 3,
    title:
      "Design Systems That Keep Product Teams Moving Faster",
    slug:
      "design-systems-product-teams-faster",
    category:
      "UI/UX Design",
    excerpt:
      "A useful design system creates a shared language across product, design and engineering.",
    trending: true,
  }),

  makeArticle({
    index: 4,
    title:
      "Choosing the Right Architecture for a New Software Product",
    slug:
      "choosing-right-software-architecture",
    category:
      "Software Architecture",
    excerpt:
      "Architecture should support the next stage of the business instead of copying systems built for a completely different scale.",
    trending: true,
  }),

  makeArticle({
    index: 5,
    title:
      "What a Strong Product Discovery Phase Should Actually Produce",
    slug:
      "strong-product-discovery-phase",
    category:
      "Product Strategy",
    excerpt:
      "Discovery should reduce uncertainty, align stakeholders and create enough technical clarity to make implementation faster.",
  }),

  makeArticle({
    index: 6,
    title:
      "Why Technical SEO Starts Inside the Product Team",
    slug:
      "technical-seo-product-team",
    category:
      "SEO & Growth",
    excerpt:
      "Search performance improves when frontend architecture, accessibility, performance and structured data are treated as product concerns.",
  }),

  makeArticle({
    index: 7,
    title:
      "Building Secure Multi-Tenant SaaS Platforms",
    slug:
      "secure-multi-tenant-saas-platforms",
    category:
      "SaaS",
    excerpt:
      "Multi-tenancy affects authorization, data boundaries, billing, observability and operational support.",
  }),

  makeArticle({
    index: 8,
    title:
      "Mobile Product Decisions That Matter Before Development Starts",
    slug:
      "mobile-product-decisions-before-development",
    category:
      "Mobile Applications",
    excerpt:
      "Platform strategy, offline behavior, authentication and analytics should be settled before implementation begins.",
  }),

  makeArticle({
    index: 9,
    title:
      "How Integration Architecture Prevents Operational Bottlenecks",
    slug:
      "integration-architecture-operational-bottlenecks",
    category:
      "Integrations",
    excerpt:
      "Well-designed integration boundaries make vendor changes, failures and operational workflows easier to manage.",
  }),

  makeArticle({
    index: 10,
    title:
      "From Prototype to Production: The Engineering Gap Teams Underestimate",
    slug:
      "prototype-to-production-engineering-gap",
    category:
      "Engineering",
    excerpt:
      "A prototype proves an idea. Production software must also handle reliability, security, deployment and real user behavior.",
  }),

  makeArticle({
    index: 11,
    title:
      "Why E-Commerce Growth Depends on More Than Storefront Design",
    slug:
      "ecommerce-growth-beyond-storefront-design",
    category:
      "E-Commerce",
    excerpt:
      "Commerce growth depends on product data, checkout performance, integrations, analytics and the workflows behind the storefront.",
  }),
];


function makeCaseStudy({
  index,
  title,
  slug,
  category,
  tags,
  shortDescription,
  featured = false,
}) {
  const thumbnail =
    CASE_STUDY_IMAGES[
      index %
      CASE_STUDY_IMAGES.length
    ];

  const heroImage =
    CASE_STUDY_IMAGES[
      (
        index +
        1
      ) %
      CASE_STUDY_IMAGES.length
    ];

  return {
    _id:
      `local-case-study-${index}`,

    title,

    slug,

    category,

    tags,

    shortDescription,

    thumbnail,

    heroImage,

    sections: [
      {
        heading:
          "Project overview",

        content:
          `${shortDescription}\n\nTekCorp aligned product goals, user experience and technical architecture before implementation so the solution could support immediate delivery and future growth.`,
      },

      {
        heading:
          "The challenge",

        content:
          `${LONG_CASE_STUDY_BODY}`,
      },

      {
        heading:
          "Our approach",

        content:
          `${LONG_CASE_STUDY_BODY} Discovery, interface design and engineering were treated as one delivery flow. Reusable components, explicit data contracts and measurable acceptance criteria kept the implementation aligned.`,
      },

      {
        heading:
          "The outcome",

        content:
          `${LONG_CASE_STUDY_BODY} The resulting product improved usability, reduced repeated work and established a stronger technical foundation for future releases and integrations.`,
      },
    ],

    gallery: [
      heroImage,
      thumbnail,
      CASE_STUDY_IMAGES[
        (
          index +
          2
        ) %
        CASE_STUDY_IMAGES.length
      ],
    ],

    featured,

    status:
      "published",

    createdAt:
      new Date(
        Date.UTC(
          2026,
          7,
          18 -
            index,
          10,
          0,
          0,
        ),
      ).toISOString(),
  };
}


export const LOCAL_CASE_STUDIES = [
  makeCaseStudy({
    index: 0,
    title:
      "Digital Commerce Platform for a Growing Consumer Brand",
    slug:
      "digital-commerce-platform-consumer-brand",
    category:
      "Websites",
    tags: [
      "Products",
      "UI/UX Design",
      "JavaScript",
    ],
    shortDescription:
      "A conversion-focused commerce platform built to improve product discovery, checkout performance and operational flexibility.",
    featured: true,
  }),

  makeCaseStudy({
    index: 1,
    title:
      "Customer Operations Portal for a Service Business",
    slug:
      "customer-operations-portal-service-business",
    category:
      "Products",
    tags: [
      "PHP",
      "UI/UX Design",
      "Websites",
    ],
    shortDescription:
      "A centralized operations portal replacing fragmented workflows with a clearer customer and internal service experience.",
    featured: true,
  }),

  makeCaseStudy({
    index: 2,
    title:
      "Mobile Experience for Distributed Field Teams",
    slug:
      "mobile-experience-distributed-field-teams",
    category:
      "Mobile Applications",
    tags: [
      "Products",
      "UI/UX Design",
      "JavaScript",
    ],
    shortDescription:
      "A mobile-first product giving distributed teams faster access to tasks, customer information and field reporting.",
  }),

  makeCaseStudy({
    index: 3,
    title:
      "Modern Marketing Website and Content Platform",
    slug:
      "modern-marketing-website-content-platform",
    category:
      "Websites",
    tags: [
      "UI/UX Design",
      "JavaScript",
      "SEO & Growth",
    ],
    shortDescription:
      "A faster marketing platform designed around content performance, lead generation and easier internal publishing.",
  }),

  makeCaseStudy({
    index: 4,
    title:
      "Workflow Automation for Back-Office Operations",
    slug:
      "workflow-automation-back-office-operations",
    category:
      "Products",
    tags: [
      "AI & Automation",
      "PHP",
      "JavaScript",
    ],
    shortDescription:
      "An internal workflow system reducing repeated data entry and improving traceability across teams.",
  }),

  makeCaseStudy({
    index: 5,
    title:
      "Design System for a Multi-Module SaaS Platform",
    slug:
      "design-system-multi-module-saas-platform",
    category:
      "UI/UX Design",
    tags: [
      "Products",
      "Websites",
      "JavaScript",
    ],
    shortDescription:
      "A reusable interface system improving consistency and reducing delivery time across a growing SaaS product.",
  }),

  makeCaseStudy({
    index: 6,
    title:
      "B2B Client Portal with Role-Based Workflows",
    slug:
      "b2b-client-portal-role-based-workflows",
    category:
      "Products",
    tags: [
      "PHP",
      "Websites",
      "UI/UX Design",
    ],
    shortDescription:
      "A secure client portal with structured permissions, account workflows and centralized service visibility.",
  }),

  makeCaseStudy({
    index: 7,
    title:
      "Performance Rebuild for a High-Traffic Website",
    slug:
      "performance-rebuild-high-traffic-website",
    category:
      "Websites",
    tags: [
      "JavaScript",
      "SEO & Growth",
      "UI/UX Design",
    ],
    shortDescription:
      "A frontend and content architecture rebuild focused on speed, discoverability and maintainability.",
  }),

  makeCaseStudy({
    index: 8,
    title:
      "Marketplace Mobile App with Real-Time Operations",
    slug:
      "marketplace-mobile-app-real-time-operations",
    category:
      "Mobile Applications",
    tags: [
      "Products",
      "JavaScript",
      "UI/UX Design",
    ],
    shortDescription:
      "A mobile marketplace connected to real-time operational workflows, customer updates and transaction events.",
  }),

  makeCaseStudy({
    index: 9,
    title:
      "Analytics Dashboard for Executive Decision Making",
    slug:
      "analytics-dashboard-executive-decision-making",
    category:
      "Products",
    tags: [
      "UI/UX Design",
      "JavaScript",
      "Data",
    ],
    shortDescription:
      "An executive dashboard transforming fragmented operational data into a clearer decision-making experience.",
  }),

  makeCaseStudy({
    index: 10,
    title:
      "Website Experience for a Professional Services Firm",
    slug:
      "website-experience-professional-services-firm",
    category:
      "Websites",
    tags: [
      "UI/UX Design",
      "SEO & Growth",
      "JavaScript",
    ],
    shortDescription:
      "A professional-services website built around positioning, credibility, discoverability and lead conversion.",
  }),

  makeCaseStudy({
    index: 11,
    title:
      "Legacy PHP Workflow Modernization",
    slug:
      "legacy-php-workflow-modernization",
    category:
      "PHP",
    tags: [
      "Products",
      "Websites",
      "UI/UX Design",
    ],
    shortDescription:
      "A phased modernization of a legacy PHP workflow improving maintainability without a high-risk full rewrite.",
  }),
];


export function cloneLocalData(value) {
  return JSON.parse(
    JSON.stringify(
      value,
    ),
  );
}
