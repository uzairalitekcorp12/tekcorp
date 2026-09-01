/* ========================================================================== 
   TEKCORP — SOLUTION + PRODUCT PAGE CONTENT
   ========================================================================== 

   Keep page content here so the presentation components stay reusable.
   Images are intentionally local paths. Replace the files in /public without
   changing JSX.
   ========================================================================== */

import {
  PRODUCT_PAGE_ASSETS,
  SOLUTION_PAGE_ASSETS,
} from "./pageAssets";

export const SOLUTION_PAGES = {
  "crm-integration": {
    type: "solution",
    slug: "crm-integration",
    title: "CRM Integration",
    eyebrow: "Leading the way in IT solutions",
    breadcrumb: ["TekCorp", "Solutions", "CRM Integration"],
    theme: "crm",
    assets: SOLUTION_PAGE_ASSETS["crm-integration"],
    overview: {
      eyebrow: "What is CRM Integration?",
      title: "CRM Integration",
      description:
        "CRM integration connects your customer relationship platform with the applications, data sources and workflows your teams already use. The result is a unified customer view, fewer manual handoffs and more dependable information across sales, service and operations.",
      ctaLabel: "Learn More",
      ctaHref: "/contact",
    },
    benefitsTitle: "Key Benefits of CRM Integration:",
    benefits: [
      {
        title: "360-Degree Customer View",
        description:
          "Consolidate customer data from multiple sources, understand behavior and preferences, and personalize engagement with greater confidence.",
      },
      {
        title: "Improved Communication",
        description:
          "Keep customer information synchronized across marketing, sales and support teams so every interaction starts with the latest context.",
      },
      {
        title: "Efficient Workflows",
        description:
          "Automate repetitive updates, reduce duplicate data entry and shorten the time between customer actions and team follow-up.",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "Deliver faster, more consistent service across channels with timely information and connected customer journeys.",
      },
    ],
    partnersLabel: "We provide integrations for",
    partners: ["Salesforce", "HubSpot", "Zoho", "Microsoft Dynamics", "Odoo", "Pipedrive"],
    servicesTitle: "Our CRM Integration Services:",
    services: [
      {
        title: "System Integration",
        description:
          "Connect CRM workflows with business applications, websites, support systems and internal tools so information moves reliably between teams.",
      },
      {
        title: "Custom Solutions",
        description:
          "Design CRM integrations around your exact processes, data structures and operational requirements instead of forcing teams into rigid workflows.",
      },
      {
        title: "Data Migration",
        description:
          "Plan and execute structured migration from legacy systems while protecting data quality, consistency and business continuity.",
      },
      {
        title: "API Development",
        description:
          "Build secure APIs and middleware that allow CRM data to move between applications in real time.",
      },
      {
        title: "Automation & Workflow Optimization",
        description:
          "Automate lead routing, follow-ups, notifications and operational tasks to reduce manual effort and improve response times.",
      },
    ],
    cta: {
      title: "Transform Your Customer Relationships Today!",
      description:
        "Unlock more value from your CRM by connecting the systems, data and workflows that shape the customer journey.",
      buttonLabel: "Schedule a Call",
      buttonHref: "/contact",
      variant: "split-person",
    },
  },

  "erp-integration": {
    type: "solution",
    slug: "erp-integration",
    title: "ERP Integration",
    eyebrow: "Leading the way in IT solutions",
    breadcrumb: ["TekCorp", "Solutions", "ERP Integration"],
    theme: "erp",
    assets: SOLUTION_PAGE_ASSETS["erp-integration"],
    overview: {
      eyebrow: "What is ERP Integration?",
      title: "ERP Integration",
      description:
        "ERP integration connects your enterprise resource planning platform with the software that runs the rest of your organization. It reduces data silos, improves coordination and creates a more consistent flow of operational information.",
      ctaLabel: "Learn More",
      ctaHref: "/contact",
      reverse: true,
    },
    benefitsTitle: "Key Benefits of ERP Integration:",
    benefits: [
      {
        title: "Improved Efficiency",
        bullets: ["Automate repetitive tasks.", "Reduce manual data entry errors.", "Accelerate decision-making processes."],
      },
      {
        title: "Enhanced Visibility",
        bullets: ["Real-time access to consolidated data.", "Comprehensive insight into business performance.", "Better forecasting and planning."],
      },
      {
        title: "Cost Savings",
        bullets: ["Reduce redundant tools and manual effort.", "Lower rework caused by inconsistent data.", "Optimize resource allocation."],
      },
      {
        title: "Customer Satisfaction",
        bullets: ["Faster response times.", "More accurate order processing.", "Consistent service through integrated data."],
      },
    ],
    servicesTitle: "Our ERP Integration Services:",
    servicesLayout: "lines",
    servicesImagePosition: "left",
    services: [
      {
        title: "System Integration",
        description:
          "Connect ERP workflows with finance, inventory, sales, operations and supporting applications across the organization.",
      },
      {
        title: "Custom Solutions",
        description:
          "Create tailored integrations and implementation logic around the specific operational needs of your business.",
      },
      {
        title: "Data Migration",
        description:
          "Move data from legacy systems into the ERP environment with validation, mapping and continuity controls.",
      },
      {
        title: "API Development",
        description:
          "Develop APIs for real-time data exchange between ERP modules, cloud systems and third-party applications.",
      },
    ],
    cta: {
      title: "Get Started with ERP Integration Today!",
      description:
        "Connect your ERP with the applications your teams rely on and create a more efficient, visible and coordinated operating environment.",
      buttonLabel: "Schedule a Call",
      buttonHref: "/contact",
      variant: "full-bleed",
    },
  },

  "cloud-devops": {
    type: "solution",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    eyebrow: "Leading the way in IT solutions",
    breadcrumb: ["TekCorp", "Solutions", "Cloud & DevOps"],
    theme: "cloud",
    assets: SOLUTION_PAGE_ASSETS["cloud-devops"],
    overview: {
      title: "Empower Your Business with Cutting-Edge Cloud Infrastructure and DevOps Practices",
      description:
        "Modern cloud architecture and DevOps practices help teams release faster, operate more reliably and scale without unnecessary infrastructure friction. TekCorp combines cloud engineering, automation and delivery practices around your business requirements.",
      ctaLabel: "Learn More",
      ctaHref: "/contact",
      reverse: true,
    },
    servicesTitle: "Our Cloud & DevOps Services",
    darkServices: true,
    services: [
      {
        title: "Cloud Migration & Strategy",
        description: "Assess workloads, migration paths and target architecture for secure and practical cloud adoption.",
      },
      {
        title: "Infrastructure Automation & Orchestration",
        description: "Use infrastructure as code and orchestration to create repeatable, controlled environments.",
      },
      {
        title: "Continuous Integration & Deployment",
        description: "Create dependable CI/CD pipelines that improve release consistency and deployment confidence.",
      },
      {
        title: "Cloud Security & Compliance",
        description: "Apply cloud security controls, access governance and operational safeguards across infrastructure and data.",
      },
    ],
    benefitsTitle: "Key Benefits of Cloud & DevOps Solutions",
    benefits: [
      { title: "Scalability and Flexibility", description: "Scale infrastructure around real demand while keeping environments maintainable." },
      { title: "Agility and Speed", description: "Shorten development and release cycles through automation and delivery discipline." },
      { title: "Reliability and Resilience", description: "Build systems with availability, recovery and operational continuity in mind." },
      { title: "Cost Optimization", description: "Use resource planning, observability and right-sizing to control cloud spending." },
      { title: "Security and Compliance", description: "Strengthen access, configuration and data protection with cloud-native controls." },
    ],
    cta: {
      title: "Transform Your Business with Cloud & DevOps Solutions!",
      description:
        "Modernize how your organization builds, deploys and operates software with a cloud and DevOps approach designed around reliability and growth.",
      buttonLabel: "Schedule a Call",
      buttonHref: "/contact",
      variant: "full-bleed",
    },
  },

  "reports-data-analysis": {
    type: "solution",
    slug: "reports-data-analysis",
    title: "Reports Development & Data Analysis",
    eyebrow: "Leading the way in IT solutions",
    breadcrumb: ["TekCorp", "Solutions", "Reports Development & Data Analysis"],
    theme: "reports",
    assets: SOLUTION_PAGE_ASSETS["reports-data-analysis"],
    overview: {
      title: "Unlock Insights, Drive Decisions — Harnessing the Power of Data",
      description:
        "We turn operational data into reporting, dashboards and analysis that help teams understand performance, identify trends and make better decisions. Our approach combines clear visualization with dependable data preparation and business context.",
      ctaLabel: "Learn More",
      ctaHref: "/contact",
    },
    servicesTitle: "Our Reports Development & Data Analysis Services",
    servicesImagePosition: "left",
    services: [
      { title: "Custom Report Development", description: "Design reporting experiences around operational, management and executive requirements." },
      { title: "Data Visualization & Dashboarding", description: "Transform complex datasets into clear, interactive dashboards and visual reporting." },
      { title: "Advanced Data Analytics", description: "Apply analytical methods to uncover trends, opportunities and operational signals." },
      { title: "Data Integration & Warehousing", description: "Bring information together from multiple systems into a structured reporting foundation." },
    ],
    benefitsTitle: "Key Benefits of Reports Development & Data Analysis",
    benefitsDark: true,
    benefits: [
      { title: "Informed Decision-Making", description: "Give teams timely and dependable information for operational and strategic decisions." },
      { title: "Improved Efficiency", description: "Automate recurring reporting and reduce manual spreadsheet-heavy processes." },
      { title: "Enhanced Visibility", description: "Monitor important indicators and trends through consistent dashboards and reporting views." },
      { title: "Predictive Analytics", description: "Use historical patterns and business context to support forward-looking planning." },
    ],
    cta: {
      title: "Transform Your Data into Actionable Insights Today!",
      description:
        "Create reporting and analytics your teams can actually use to understand performance and make confident decisions.",
      buttonLabel: "Schedule a Call",
      buttonHref: "/contact",
      variant: "graphic",
    },
  },

  "api-integration": {
    type: "solution",
    slug: "api-integration",
    title: "API Integration",
    eyebrow: "Leading the way in IT solutions",
    breadcrumb: ["TekCorp", "Solutions", "API Integration"],
    theme: "api",
    assets: SOLUTION_PAGE_ASSETS["api-integration"],
    overview: {
      eyebrow: "What is API Integration?",
      title: "API Integration",
      description:
        "API integration connects software applications so information, workflows and services can move between systems automatically. TekCorp designs secure integrations that reduce duplication, improve consistency and support scalable digital ecosystems.",
      ctaLabel: "Learn More",
      ctaHref: "/contact",
    },
    benefitsTitle: "Key Benefits of API Integrations:",
    benefits: [
      {
        title: "Enhanced Efficiency",
        bullets: ["Automate workflows and reduce manual intervention.", "Streamline data exchange between applications.", "Improve operational consistency."],
      },
      {
        title: "Real-Time Data Sync",
        bullets: ["Synchronize information between connected platforms.", "Support faster decisions with current data.", "Reduce discrepancies between systems."],
      },
      {
        title: "Scalability and Flexibility",
        bullets: ["Support changing integration needs.", "Connect new applications as the business grows.", "Maintain a flexible integration architecture."],
      },
      {
        title: "Innovation and Collaboration",
        bullets: ["Connect diverse tools and platforms.", "Enable cross-functional workflows.", "Support new features and digital capabilities."],
      },
    ],
    servicesTitle: "Our API Integration Services:",
    servicesLayout: "lines",
    darkServices: true,
    services: [
      { title: "System Integration", description: "Connect business applications into a consistent and efficient digital environment." },
      { title: "Custom API Development", description: "Create purpose-built APIs around your products, processes and integration requirements." },
      { title: "Third-Party Integrations", description: "Integrate external platforms while protecting reliability and maintainability." },
      { title: "Data Security & Compliance", description: "Use secure authentication, permissions and data-handling practices across integrations." },
    ],
    cta: {
      title: "Transform Your Business with Seamless API Integrations!",
      description:
        "Connect your digital ecosystem with secure, maintainable integrations designed around the way your organization actually works.",
      buttonLabel: "Schedule a Call",
      buttonHref: "/contact",
      variant: "contained-cover",
    },
  },
};

export const PRODUCT_PAGES = {
  "digital-commerce-software": {
    type: "product",
    slug: "digital-commerce-software",
    title: "Digital Commerce Software",
    eyebrow: "Leading the way in IT solutions",
    breadcrumb: ["TekCorp", "Products", "Digital Commerce Software"],
    assets: PRODUCT_PAGE_ASSETS["digital-commerce-software"],
    introTitle: "Elevate Your Online Business with Cutting-Edge Digital Commerce Software",
    introDescription:
      "Our Digital Commerce Software is designed to create a reliable, user-friendly online buying experience while giving your team the operational tools needed to manage products, orders, payments and growth.",
    ctaLabel: "Get It Now",
    ctaHref: "/contact",
    features: [
      { title: "Intuitive User Interface", description: "Create a clear shopping journey with responsive navigation and product discovery." },
      { title: "Multi-Channel Selling", description: "Support storefront, social and marketplace experiences from a connected operating model." },
      { title: "Secure Payment Gateways", description: "Integrate trusted payment options while protecting sensitive transaction data." },
      { title: "Advanced Inventory Management", description: "Maintain visibility into stock levels, product availability and operational updates." },
      { title: "Comprehensive Analytics & Reporting", description: "Track sales, customer behavior and commercial performance through structured reporting." },
      { title: "Scalability", description: "Grow products, customers and channels without rebuilding the platform from the ground up." },
    ],
    whyTitle: "Why Choose Digital Commerce Software",
    whyItems: [
      { title: "Reliability", description: "A stable, maintainable foundation designed for consistent commercial operations." },
      { title: "Customization", description: "Adapt workflows, branding and experiences around the way your business operates." },
      { title: "Expert Support", description: "Work with a technical team that can support improvements and ongoing evolution." },
    ],
  },

  "task-management-portal": {
    type: "product",
    slug: "task-management-portal",
    title: "Task Management Portal",
    eyebrow: "Leading the way in IT solutions",
    breadcrumb: ["TekCorp", "Products", "Task Management Portal"],
    assets: PRODUCT_PAGE_ASSETS["task-management-portal"],
    introTitle: "Streamline Your Tasks and Boost Productivity with Task Management Portal",
    introDescription:
      "Our Task Management Portal helps teams organize work, assign ownership, track deadlines and improve visibility across projects without creating unnecessary process overhead.",
    ctaLabel: "Get It Now",
    ctaHref: "/contact",
    features: [
      { title: "Intuitive Task Dashboard", description: "See tasks, priorities and progress in one central workspace." },
      { title: "Task Creation & Assignment", description: "Create work, assign responsibility, set dates and keep important details attached to each task." },
      { title: "Collaborative Workspaces", description: "Give teams and departments shared visibility while keeping work organized." },
      { title: "Deadline Management", description: "Track due dates, dependencies and completion status across projects." },
      { title: "Task Tracking & Reporting", description: "Monitor progress, bottlenecks and workload distribution with practical reporting." },
      { title: "Customization & Flexibility", description: "Configure workflows and views around different business processes and teams." },
    ],
    whyTitle: "Why Choose Task Management Portal?",
    whyItems: [
      { title: "Efficiency", description: "Reduce coordination overhead and keep important work visible." },
      { title: "Collaboration", description: "Create shared ownership and transparency across teams and projects." },
      { title: "Scalability", description: "Support growing teams and increasingly complex workflows without losing clarity." },
    ],
  },

  "employee-management-onboarding-portal": {
    type: "product",
    slug: "employee-management-onboarding-portal",
    title: "Employee Management & Onboarding Registration Portal",
    eyebrow: "Leading the way in IT solutions",
    breadcrumb: ["TekCorp", "Products", "Employee Management & Onboarding Registration Portal"],
    assets: PRODUCT_PAGE_ASSETS["employee-management-onboarding-portal"],
    introTitle: "Revolutionize Your Employee Onboarding Experience Today!",
    introDescription:
      "The Employee Management & Onboarding Registration Portal centralizes onboarding tasks, employee information, documents and workflow coordination so HR teams can create a more consistent employee experience.",
    ctaLabel: "Get It Now",
    ctaHref: "/contact",
    features: [
      { title: "User-Friendly Registration Process", description: "Guide new employees through essential onboarding information and required documentation." },
      { title: "Customizable Onboarding Workflows", description: "Configure steps, departments and responsibilities around the way your organization operates." },
      { title: "Document Management System", description: "Centralize policies, forms and employment records in a structured workspace." },
      { title: "Automated Notifications & Reminders", description: "Keep onboarding tasks moving with timely reminders for employees and internal teams." },
      { title: "Integration with HR Systems", description: "Connect onboarding information with other workforce and business platforms." },
      { title: "Training & Development Resources", description: "Provide access to orientation material, learning content and role-specific resources." },
    ],
    whyTitle: "Why Choose Employee Management & Onboarding Registration Portal?",
    whyItems: [
      { title: "Engagement", description: "Create a smoother first experience and clearer communication for new employees." },
      { title: "Compliance", description: "Keep required policies, records and onboarding steps organized and traceable." },
      { title: "Efficiency", description: "Reduce administrative overhead through structured workflows and automation." },
    ],
  },
};

export const PRODUCT_SHOWCASE_ITEMS = Object.values(PRODUCT_PAGES).map((page) => ({
  id: page.slug,
  client: "TEKCORP PRODUCT",
  title: page.title,
  category: "Business Platform",
  image: page.assets.hero.src,
  imageAlt: page.assets.hero.alt,
  description: page.introDescription,
  href: `/products/${page.slug}`,
  actionLabel: "Explore Product",
}));

export const SOLUTION_SHOWCASE_ITEMS = Object.values(SOLUTION_PAGES).map((page) => ({
  id: page.slug,
  client: "TEKCORP SOLUTION",
  title: page.title,
  category: "Business Solution",
  image: page.assets.hero.src,
  imageAlt: page.assets.hero.alt,
  description: page.overview.description,
  href: `/service/${page.slug}`,
  actionLabel: "Explore Solution",
}));

export function getSolutionPage(slug) {
  return SOLUTION_PAGES[slug] || null;
}

export function getProductPage(slug) {
  return PRODUCT_PAGES[slug] || null;
}
