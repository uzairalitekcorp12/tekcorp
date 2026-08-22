/*
 * ==========================================================================
 * TEKCORP DEVELOPMENT CONTENT FALLBACK
 * ==========================================================================
 *
 * DEV / LOCAL FALLBACK ONLY — NOT YOUR PRODUCTION CMS.
 *
 * Why this file exists:
 * - Local development should still render the complete Insights and
 *   Case Studies layouts when MongoDB is unavailable.
 * - It lets you verify pagination, filtering, detail slugs, galleries and
 *   responsive behavior before production content is ready.
 *
 * PRODUCTION CHECKLIST:
 * 1. Do NOT set USE_LOCAL_DATA=true in production.
 * 2. Production automatically refuses the database-error fallback.
 * 3. Replace/remove these demo records whenever your CMS/database contains
 *    real production content.
 *
 * Image URLs below are demo-only remote images. Your database can use either:
 * - root-relative public paths: /assets/...
 * - HTTPS image URLs
 * ==========================================================================
 */


const DEV_AUTHOR = {
  name:
    "TekCorp Editorial",

  image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80",
};


export const localArticles = [
  {
    _id:
      "local-article-01",

    title:
      "The Architecture Behind Products That Scale",

    slug:
      "architecture-behind-products-that-scale",

    category:
      "Engineering",

    tags: [
      "Architecture",
      "Scalability",
      "Cloud",
    ],

    excerpt:
      "A practical guide to designing digital products that can grow without forcing teams into expensive rewrites.",

    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "Scalable software is not created by adding complexity early. It is created by making clear decisions about boundaries, data ownership, performance and change. The strongest systems remain understandable while the product, team and customer base continue to grow.",
      },

      {
        type:
          "heading",

        text:
          "Start with boundaries that match the business",
      },

      {
        type:
          "paragraph",

        text:
          "Architecture works best when technical boundaries reflect real business responsibilities. Clear modules make ownership easier, reduce accidental coupling and allow future services to be separated only when the operational need is real.",
      },

      {
        type:
          "image",

        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=84",

        alt:
          "Software code displayed on a development monitor",

        text:
          "Maintainability becomes a growth feature when the system is expected to change every week.",
      },

      {
        type:
          "heading",

        text:
          "Design for observability before scale arrives",
      },

      {
        type:
          "paragraph",

        text:
          "Logs, metrics, tracing and meaningful operational dashboards should be part of the platform before traffic becomes difficult to understand. Teams move faster when failures are explainable and recovery paths are already known.",
      },
    ],

    trending:
      true,

    featured:
      true,

    status:
      "published",

    publishedAt:
      "2026-08-18T09:00:00.000Z",

    createdAt:
      "2026-08-18T09:00:00.000Z",
  },

  {
    _id:
      "local-article-02",

    title:
      "How AI Automation Creates Real Operational Leverage",

    slug:
      "ai-automation-operational-leverage",

    category:
      "AI & Automation",

    tags: [
      "AI",
      "Automation",
      "Operations",
    ],

    excerpt:
      "The best automation projects do more than save clicks: they shorten decision cycles and remove repetitive operational drag.",

    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "AI is most valuable when it is connected to a measurable workflow. Instead of beginning with a model, begin with the repeated decision, handoff or research task that is slowing the team down.",
      },

      {
        type:
          "heading",

        text:
          "Automate the workflow, not the demo",
      },

      {
        type:
          "paragraph",

        text:
          "Production automation needs access controls, human review paths, auditability and clear failure states. These details are what turn an impressive prototype into a reliable business capability.",
      },
    ],

    trending:
      true,

    featured:
      true,

    status:
      "published",

    publishedAt:
      "2026-08-16T09:00:00.000Z",

    createdAt:
      "2026-08-16T09:00:00.000Z",
  },

  {
    _id:
      "local-article-03",

    title:
      "Building Better Product Teams Around Clear Outcomes",

    slug:
      "building-product-teams-around-outcomes",

    category:
      "Product",

    tags: [
      "Product Strategy",
      "Teams",
      "Delivery",
    ],

    excerpt:
      "A delivery team performs differently when everyone understands the customer outcome instead of only the assigned ticket.",

    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "High-performing product teams connect customer context, product judgment and engineering constraints early. The result is fewer handoff losses and better decisions before implementation becomes expensive.",
      },

      {
        type:
          "heading",

        text:
          "Make the outcome visible",
      },

      {
        type:
          "paragraph",

        text:
          "A useful product brief explains who needs the change, what problem is being solved, what success looks like and which constraints are non-negotiable. It should create alignment without prescribing every implementation detail.",
      },
    ],

    trending:
      true,

    featured:
      false,

    status:
      "published",

    publishedAt:
      "2026-08-14T09:00:00.000Z",

    createdAt:
      "2026-08-14T09:00:00.000Z",
  },

  {
    _id:
      "local-article-04",

    title:
      "Modern UI Systems: Consistency Without Making Everything Look the Same",

    slug:
      "modern-ui-systems-consistency-without-sameness",

    category:
      "Design",

    tags: [
      "UI/UX",
      "Design Systems",
      "Frontend",
    ],

    excerpt:
      "A useful design system gives teams consistent behavior and reusable decisions while preserving enough flexibility for strong product expression.",

    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "Design systems should reduce repeated decisions, not reduce creativity. Tokens, interaction patterns, spacing rules and component contracts create a shared language that lets designers and engineers spend more time on the parts that are unique.",
      },
    ],

    trending:
      true,

    featured:
      false,

    status:
      "published",

    publishedAt:
      "2026-08-12T09:00:00.000Z",

    createdAt:
      "2026-08-12T09:00:00.000Z",
  },

  {
    _id:
      "local-article-05",

    title:
      "What Reliable Cloud Delivery Looks Like in Practice",

    slug:
      "reliable-cloud-delivery-in-practice",

    category:
      "Cloud",

    tags: [
      "AWS",
      "DevOps",
      "CI/CD",
    ],

    excerpt:
      "Reliable delivery comes from repeatability: environments, deployments, rollback paths and ownership should all be boring in the best possible way.",

    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "The goal of a mature deployment system is confidence. Teams should know what changed, how to verify it, how to observe it and how to recover without improvising under pressure.",
      },
    ],

    trending:
      true,

    featured:
      false,

    status:
      "published",

    publishedAt:
      "2026-08-10T09:00:00.000Z",

    createdAt:
      "2026-08-10T09:00:00.000Z",
  },

  {
    _id:
      "local-article-06",

    title:
      "From Discovery to Delivery: A Practical Software Product Roadmap",

    slug:
      "discovery-to-delivery-product-roadmap",

    category:
      "Product",

    tags: [
      "Discovery",
      "Roadmap",
      "Software",
    ],

    excerpt:
      "A strong roadmap is a sequence of validated decisions, not a long promise about features that have not been tested yet.",

    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "Discovery should reduce uncertainty before the most expensive engineering decisions are made. The roadmap then becomes a practical sequence of experiments, foundations and customer-facing releases.",
      },
    ],

    trending:
      false,

    featured:
      true,

    status:
      "published",

    publishedAt:
      "2026-08-08T09:00:00.000Z",

    createdAt:
      "2026-08-08T09:00:00.000Z",
  },

  {
    _id:
      "local-article-07",

    title:
      "API Design Decisions That Prevent Expensive Integration Problems",

    slug:
      "api-design-prevent-integration-problems",

    category:
      "Engineering",

    tags: [
      "APIs",
      "Integrations",
      "Backend",
    ],

    excerpt:
      "Good APIs make change predictable for both sides of an integration. That means stable contracts, useful errors and intentional versioning.",

    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "Most integration pain is not caused by HTTP. It comes from unclear ownership, unstable payloads, hidden assumptions and ambiguous failure behavior. Contract quality determines how safely two systems can evolve independently.",
      },
    ],

    trending:
      false,

    featured:
      false,

    status:
      "published",

    publishedAt:
      "2026-08-06T09:00:00.000Z",

    createdAt:
      "2026-08-06T09:00:00.000Z",
  },

  {
    _id:
      "local-article-08",

    title:
      "Why Performance Is a Product Experience, Not Just a Technical Metric",

    slug:
      "performance-is-a-product-experience",

    category:
      "Frontend",

    tags: [
      "Performance",
      "Web",
      "UX",
    ],

    excerpt:
      "Speed influences trust, conversion and perceived quality long before a user understands the architecture behind the product.",

    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "Performance should be discussed as part of the product experience. Slow interactions interrupt intent, introduce doubt and make even well-designed interfaces feel less reliable.",
      },
    ],

    trending:
      false,

    featured:
      false,

    status:
      "published",

    publishedAt:
      "2026-08-04T09:00:00.000Z",

    createdAt:
      "2026-08-04T09:00:00.000Z",
  },

  {
    _id:
      "local-article-09",

    title:
      "Choosing What to Automate First in a Growing Business",

    slug:
      "choosing-what-to-automate-first",

    category:
      "AI & Automation",

    tags: [
      "Automation",
      "Operations",
      "ROI",
    ],

    excerpt:
      "The first automation should target a repeatable workflow with a clear owner, clear inputs and a measurable cost of delay.",

    thumbnail:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "Automation portfolios become easier to prioritize when teams compare frequency, time spent, error rate, customer impact and the amount of judgment required. The highest-value opportunity is rarely the loudest one.",
      },
    ],

    trending:
      false,

    featured:
      false,

    status:
      "published",

    publishedAt:
      "2026-08-02T09:00:00.000Z",

    createdAt:
      "2026-08-02T09:00:00.000Z",
  },

  {
    _id:
      "local-article-10",

    title:
      "The Small UX Details That Make Business Software Feel Premium",

    slug:
      "small-ux-details-business-software",

    category:
      "Design",

    tags: [
      "UX",
      "SaaS",
      "Product Design",
    ],

    excerpt:
      "Clear states, predictable forms and thoughtful feedback loops often matter more to perceived product quality than decorative complexity.",

    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=88",

    author:
      DEV_AUTHOR,

    content: [
      {
        type:
          "paragraph",

        text:
          "The feeling of quality is cumulative. Input validation, loading behavior, empty states, keyboard navigation, helpful defaults and useful success messages determine whether a business tool feels intentional.",
      },
    ],

    trending:
      false,

    featured:
      false,

    status:
      "published",

    publishedAt:
      "2026-07-30T09:00:00.000Z",

    createdAt:
      "2026-07-30T09:00:00.000Z",
  },
];


export const localCaseStudies = [
  {
    _id:
      "local-case-01",

    title:
      "Enterprise Operations Platform",

    slug:
      "enterprise-operations-platform",

    category:
      "Products",

    tags: [
      "UI/UX Design",
      "JavaScript",
      "Websites",
    ],

    shortDescription:
      "A modern operations platform that brought fragmented workflows, reporting and internal coordination into one scalable product.",

    thumbnail:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1900&q=88",

    sections: [
      {
        heading:
          "A clearer operating system for a growing business",

        content:
          "The client needed one product that could replace disconnected operational workflows without creating a rigid experience for different teams.\n\nTekCorp translated the operating model into clear modules, permission boundaries and reusable workflows so the platform could grow without becoming difficult to manage.",
      },

      {
        heading:
          "Product architecture",

        content:
          "We separated core business capabilities into understandable domains, designed consistent data contracts and created a frontend architecture that could support new modules without duplicating the interface layer.",
      },

      {
        heading:
          "Experience design",

        content:
          "Dense operational screens were simplified around decisions, status and exception handling. The design system kept forms, filters, tables and actions predictable across the product.",
      },

      {
        heading:
          "Outcome",

        content:
          "The result was a faster, easier-to-govern platform with clearer ownership and enough technical headroom for future integrations and automation.",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=84",
    ],

    featured:
      true,

    status:
      "published",

    createdAt:
      "2026-08-18T08:00:00.000Z",
  },

  {
    _id:
      "local-case-02",

    title:
      "Conversion-Focused Commerce Experience",

    slug:
      "conversion-focused-commerce-experience",

    category:
      "Websites",

    tags: [
      "UI/UX Design",
      "JavaScript",
      "Products",
    ],

    shortDescription:
      "A responsive commerce experience redesigned around product discovery, purchase confidence and a faster path to checkout.",

    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1900&q=88",

    sections: [
      {
        heading:
          "Designing around buying intent",

        content:
          "The existing journey forced customers through too many decisions before they had enough information to buy confidently. We reorganized discovery, detail and checkout around the questions customers actually needed answered.",
      },

      {
        heading:
          "Frontend delivery",

        content:
          "Reusable content modules, performance-aware media and clearer state management improved both consistency and the team’s ability to publish campaigns quickly.",
      },

      {
        heading:
          "Outcome",

        content:
          "The finished experience was faster, easier to navigate and structured for ongoing experimentation instead of one-time redesign work.",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1500&q=84",
    ],

    featured:
      true,

    status:
      "published",

    createdAt:
      "2026-08-15T08:00:00.000Z",
  },

  {
    _id:
      "local-case-03",

    title:
      "Field Service Mobile Application",

    slug:
      "field-service-mobile-application",

    category:
      "Mobile Applications",

    tags: [
      "Products",
      "UI/UX Design",
      "JavaScript",
    ],

    shortDescription:
      "A mobile workflow for field teams to manage assignments, capture evidence and synchronize operational updates from one place.",

    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1900&q=88",

    sections: [
      {
        heading:
          "Work that happens away from a desk",

        content:
          "The product needed to remain simple under real field conditions: interrupted connectivity, short interaction windows and users moving between jobs throughout the day.",
      },

      {
        heading:
          "Mobile-first workflows",

        content:
          "We reduced task flows to the minimum useful steps, designed clear offline-aware states and made photo capture, notes and status updates feel native to the work.",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1500&q=84",
    ],

    featured:
      true,

    status:
      "published",

    createdAt:
      "2026-08-12T08:00:00.000Z",
  },

  {
    _id:
      "local-case-04",

    title:
      "SaaS Analytics Workspace",

    slug:
      "saas-analytics-workspace",

    category:
      "Products",

    tags: [
      "UI/UX Design",
      "JavaScript",
      "Websites",
    ],

    shortDescription:
      "A flexible analytics workspace that made complex metrics easier to explore, compare and act on.",

    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1900&q=88",

    sections: [
      {
        heading:
          "Making data easier to act on",

        content:
          "The redesign focused on hierarchy and decision-making rather than adding more charts. Users needed to understand what changed, why it mattered and which action came next.",
      },

      {
        heading:
          "Design system",

        content:
          "We created reusable metric, filter, table and comparison patterns that allowed future reporting views to stay consistent.",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1500&q=84",
    ],

    featured:
      false,

    status:
      "published",

    createdAt:
      "2026-08-09T08:00:00.000Z",
  },

  {
    _id:
      "local-case-05",

    title:
      "High-Performance Corporate Website",

    slug:
      "high-performance-corporate-website",

    category:
      "Websites",

    tags: [
      "UI/UX Design",
      "JavaScript",
      "SEO",
    ],

    shortDescription:
      "A modern corporate web platform designed for stronger positioning, faster publishing and better organic discoverability.",

    thumbnail:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1900&q=88",

    sections: [
      {
        heading:
          "Turning a website into a growth platform",

        content:
          "The website was restructured around clear service narratives, proof, conversion paths and a content model that could support long-term SEO rather than static marketing pages.",
      },

      {
        heading:
          "Performance and maintainability",

        content:
          "Page composition, media loading and reusable content patterns were built to keep the experience responsive while making future updates easier for the internal team.",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1500&q=84",
    ],

    featured:
      false,

    status:
      "published",

    createdAt:
      "2026-08-06T08:00:00.000Z",
  },

  {
    _id:
      "local-case-06",

    title:
      "Legacy PHP Platform Modernization",

    slug:
      "legacy-php-platform-modernization",

    category:
      "PHP",

    tags: [
      "Products",
      "Websites",
      "Architecture",
    ],

    shortDescription:
      "A staged modernization program that improved maintainability and delivery speed without forcing a risky full-system rewrite.",

    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1900&q=88",

    sections: [
      {
        heading:
          "Modernization without stopping the business",

        content:
          "The platform contained years of business logic that could not simply be replaced. We mapped the critical boundaries, stabilized high-risk areas and introduced new architecture incrementally.",
      },

      {
        heading:
          "Safer delivery",

        content:
          "Automated checks, clearer module ownership and incremental API boundaries gave the team a path to improve the platform while continuing to release customer-facing work.",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=84",
    ],

    featured:
      false,

    status:
      "published",

    createdAt:
      "2026-08-03T08:00:00.000Z",
  },

  {
    _id:
      "local-case-07",

    title:
      "JavaScript Workflow Automation Suite",

    slug:
      "javascript-workflow-automation-suite",

    category:
      "JavaScript",

    tags: [
      "Products",
      "AI & Automation",
      "Websites",
    ],

    shortDescription:
      "A workflow suite that connected internal systems and removed repetitive handoffs across operational teams.",

    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1900&q=88",

    sections: [
      {
        heading:
          "Connecting work that had become fragmented",

        content:
          "Teams were repeating the same information across systems and manually checking status between handoffs. The solution connected events and actions into one observable workflow.",
      },

      {
        heading:
          "Automation with accountability",

        content:
          "Each automated step retained clear ownership, retry behavior and an audit trail so faster execution did not reduce operational visibility.",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1500&q=84",
    ],

    featured:
      false,

    status:
      "published",

    createdAt:
      "2026-07-31T08:00:00.000Z",
  },

  {
    _id:
      "local-case-08",

    title:
      "Customer Portal Experience Redesign",

    slug:
      "customer-portal-experience-redesign",

    category:
      "UI/UX Design",

    tags: [
      "Products",
      "Websites",
      "JavaScript",
    ],

    shortDescription:
      "A portal redesign that simplified high-frequency customer tasks and made account information easier to understand.",

    thumbnail:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=84",

    heroImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1900&q=88",

    sections: [
      {
        heading:
          "A portal organized around customer intent",

        content:
          "The previous experience mirrored internal systems rather than customer needs. We reorganized the portal around the most common questions and tasks, reducing the amount of interpretation required from users.",
      },

      {
        heading:
          "Interaction quality",

        content:
          "Form behavior, status messaging, empty states and responsive layouts were refined so the experience felt consistent from onboarding through ongoing account management.",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=84",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=84",
    ],

    featured:
      false,

    status:
      "published",

    createdAt:
      "2026-07-28T08:00:00.000Z",
  },
];
