/*
 * ==========================================================================
 * TEKCORP — CENTRAL WEBSITE PAGE CONTROLLER
 * ==========================================================================
 *
 * ROOT
 * --------------------------------------------------------------------------
 *
 * /
 *
 * Existing LandingPage
 *
 *
 * MAIN
 * --------------------------------------------------------------------------
 *
 * /home
 * /about
 * /contact
 *
 *
 * SERVICES
 * --------------------------------------------------------------------------
 *
 * /service/...
 *
 *
 * SOLUTIONS
 * --------------------------------------------------------------------------
 *
 * Legacy solution pages are exposed through /service/...
 *
 *
 * PRODUCTS
 * --------------------------------------------------------------------------
 *
 * /products/...
 *
 *
 * IMPORTANT
 * --------------------------------------------------------------------------
 *
 * /case-studies
 * /case-studies/[slug]
 * /insights
 * /insights/[slug]
 *
 * are REAL App Router routes.
 *
 * They are NOT handled by this registry and should NOT be rewritten.
 *
 * ==========================================================================
 */


/* ==========================================================================
   ROOT LANDING PAGE
   ========================================================================== */

import LandingPage from
  "./landing/LandingPage";


/* ==========================================================================
   MAIN WEBSITE
   ========================================================================== */

import Home from
  "./main-website-pages/Home/Home";


import About from
  "./main-website-pages/About/About";


import Contact from
  "./main-website-pages/Contact/Contact";


/* ==========================================================================
   EXISTING DESIGN & ENGINEERING PAGES
   ========================================================================== */

import WebEngineering from
  "./main-website-pages/WebEngineering/WebEngineering";


import ApplicationEngineering from
  "./main-website-pages/ApplicationEngineering/ApplicationEngineering";


import MaintenanceSupport from
  "./main-website-pages/MaintenanceSupport/MaintenanceSupport";


import PrototypingDesign from
  "./main-website-pages/PrototypingDesign/PrototypingDesign";


import QualityAssuranceTesting from
  "./main-website-pages/QualityAssuranceTesting/QualityAssuranceTesting";


/* ==========================================================================
   NEW DESIGN & ENGINEERING
   ========================================================================== */

import CMSDevelopment from
  "./main-website-pages/Services/CMSDevelopment/CMSDevelopment";


import EcommerceDevelopment from
  "./main-website-pages/Services/EcommerceDevelopment/EcommerceDevelopment";


import Branding from
  "./main-website-pages/Services/Branding/Branding";


/* ==========================================================================
   GROWTH & MARKETING
   ========================================================================== */

import SearchEngineOptimization from
  "./main-website-pages/Services/SearchEngineOptimization/SearchEngineOptimization";


import SocialMediaMarketing from
  "./main-website-pages/Services/SocialMediaMarketing/SocialMediaMarketing";


import MarketingStrategy from
  "./main-website-pages/Services/MarketingStrategy/MarketingStrategy";


import GoogleAds from
  "./main-website-pages/Services/GoogleAds/GoogleAds";


import ContentMarketing from
  "./main-website-pages/Services/ContentMarketing/ContentMarketing";


/* ==========================================================================
   AI & AUTOMATION
   ========================================================================== */

import AIChatbotsAssistants from
  "./main-website-pages/Services/AIChatbotsAssistants/AIChatbotsAssistants";


import AIAgentsAutomation from
  "./main-website-pages/Services/AIAgentsAutomation/AIAgentsAutomation";


import VoiceAIConversationalAgents from
  "./main-website-pages/Services/VoiceAIConversationalAgents/VoiceAIConversationalAgents";


import RAGKnowledgeBaseSolutions from
  "./main-website-pages/Services/RAGKnowledgeBaseSolutions/RAGKnowledgeBaseSolutions";


import MCPServerDevelopmentIntegrations from
  "./main-website-pages/Services/MCPServerDevelopmentIntegrations/MCPServerDevelopmentIntegrations";


/* ==========================================================================
   NEW PRODUCTS
   ========================================================================== */

import TekBooks from
  "./main-website-pages/Products/TekBooks/TekBooks";


import TekLMS from
  "./main-website-pages/Products/TekLMS/TekLMS";


/* ==========================================================================
   EXISTING SOLUTIONS
   ========================================================================== */

import CRMIntegration from
  "./main-website-pages/Solutions/CRMIntegration/CRMIntegration";


import ERPIntegration from
  "./main-website-pages/Solutions/ERPIntegration/ERPIntegration";


import CloudDevOps from
  "./main-website-pages/Solutions/CloudDevOps/CloudDevOps";


import ReportsDataAnalysis from
  "./main-website-pages/Solutions/ReportsDataAnalysis/ReportsDataAnalysis";


import APIIntegration from
  "./main-website-pages/Solutions/APIIntegration/APIIntegration";


/* ==========================================================================
   EXISTING PRODUCTS
   ========================================================================== */

import DigitalCommerceSoftware from
  "./main-website-pages/Products/DigitalCommerceSoftware/DigitalCommerceSoftware";


import TaskManagementPortal from
  "./main-website-pages/Products/TaskManagementPortal/TaskManagementPortal";


import EmployeeManagementOnboardingPortal from
  "./main-website-pages/Products/EmployeeManagementOnboardingPortal/EmployeeManagementOnboardingPortal";


/* ==========================================================================
   DATABASE CONTENT
   ========================================================================== */

import {
  getLatestArticles,
} from "./_lib/data/articles";


import {
  getCaseStudies,
} from "./_lib/data/caseStudies";


/*
 * Homepage and selected service content can be read from MongoDB at
 * request time.
 */

export const dynamic =
  "force-dynamic";


/* ==========================================================================
   PAGE REGISTRY
   ========================================================================== */

const MAIN_WEBSITE_PAGES = {

  /* ========================================================================
     MAIN
     ======================================================================== */

  home:
    Home,


  about:
    About,


  contact:
    Contact,


  /* ========================================================================
     DESIGN & ENGINEERING
     ======================================================================== */

  "web-engineering":
    WebEngineering,


  "application-engineering":
    ApplicationEngineering,


  "maintenance-support":
    MaintenanceSupport,


  "prototyping-ui-ux-design":
    PrototypingDesign,


  "quality-assurance-testing":
    QualityAssuranceTesting,


  "cms-development":
    CMSDevelopment,


  "ecommerce-development":
    EcommerceDevelopment,


  branding:
    Branding,


  /* ========================================================================
     GROWTH & MARKETING
     ======================================================================== */

  "search-engine-optimization":
    SearchEngineOptimization,


  "social-media-marketing":
    SocialMediaMarketing,


  "marketing-strategy":
    MarketingStrategy,


  "google-ads":
    GoogleAds,


  "content-marketing":
    ContentMarketing,


  /* ========================================================================
     AI & AUTOMATION
     ======================================================================== */

  "ai-chatbots-assistants":
    AIChatbotsAssistants,


  "ai-agents-automation":
    AIAgentsAutomation,


  "voice-ai-conversational-agents":
    VoiceAIConversationalAgents,


  "rag-knowledge-base-solutions":
    RAGKnowledgeBaseSolutions,


  "mcp-server-development-integrations":
    MCPServerDevelopmentIntegrations,


  /* ========================================================================
     PRODUCTS
     ======================================================================== */

  tekbooks:
    TekBooks,


  teklms:
    TekLMS,


  /* ========================================================================
     EXISTING SOLUTIONS
     ======================================================================== */

  "crm-integration":
    CRMIntegration,


  "erp-integration":
    ERPIntegration,


  "cloud-devops":
    CloudDevOps,


  "reports-data-analysis":
    ReportsDataAnalysis,


  "api-integration":
    APIIntegration,


  /* ========================================================================
     EXISTING PRODUCTS
     ======================================================================== */

  "digital-commerce-software":
    DigitalCommerceSoftware,


  "task-management-portal":
    TaskManagementPortal,


  "employee-management-onboarding-portal":
    EmployeeManagementOnboardingPortal,

};


/* ==========================================================================
   PAGE METADATA
   ========================================================================== */

const PAGE_METADATA = {

  home: {
    title:
      "Home",

    canonical:
      "/home",

    description:
      "TekCorp builds scalable software, digital products, AI systems and technology solutions for modern businesses.",
  },


  about: {
    title:
      "About Us",

    canonical:
      "/about",

    description:
      "Learn about TekCorp, our technology expertise, engineering approach, partnerships and team.",
  },


  contact: {
    title:
      "Contact Us",

    canonical:
      "/contact",

    description:
      "Talk with TekCorp about your next software, AI, digital product, engineering or growth project.",
  },


  /* ========================================================================
     DESIGN & ENGINEERING
     ======================================================================== */

  "web-engineering": {
    title:
      "Web Engineering Services",

    canonical:
      "/service/web-engineering",

    description:
      "Build scalable, secure and high-performance web platforms with TekCorp web engineering services.",
  },


  "application-engineering": {
    title:
      "Application Engineering Services",

    canonical:
      "/service/application-engineering",

    description:
      "Build reliable mobile, desktop and cross-platform applications with TekCorp.",
  },


  "maintenance-support": {
    title:
      "Maintenance & Support Services",

    canonical:
      "/service/maintenance-support",

    description:
      "Keep business-critical systems reliable through structured maintenance, support and ongoing optimization.",
  },


  "prototyping-ui-ux-design": {
    title:
      "Prototyping & UI/UX Design",

    canonical:
      "/service/prototyping-ui-ux-design",

    description:
      "Create intuitive digital experiences with TekCorp UI/UX design, research and prototyping services.",
  },


  "quality-assurance-testing": {
    title:
      "Quality Assurance & Testing",

    canonical:
      "/service/quality-assurance-testing",

    description:
      "Improve release confidence with structured quality assurance, software testing and validation.",
  },


  "cms-development": {
    title:
      "CMS Development Services",

    canonical:
      "/service/cms-development",

    description:
      "Build flexible content management systems for publishing, governance, integrations and business growth.",
  },


  "ecommerce-development": {
    title:
      "Ecommerce Development Services",

    canonical:
      "/service/ecommerce-development",

    description:
      "Build secure and conversion-focused ecommerce platforms with integrated operations and payments.",
  },


  branding: {
    title:
      "Logo & Branding Services",

    canonical:
      "/service/branding",

    description:
      "Create a distinctive logo and brand system connecting strategy, visual identity, messaging and digital experiences.",
  },


  /* ========================================================================
     GROWTH & MARKETING
     ======================================================================== */

  "search-engine-optimization": {
    title:
      "Search Engine Optimization",

    canonical:
      "/service/search-engine-optimization",

    description:
      "Increase organic visibility through technical SEO, content optimization and measurable search strategies.",
  },


  "social-media-marketing": {
    title:
      "Social Media Marketing",

    canonical:
      "/service/social-media-marketing",

    description:
      "Build stronger audiences through strategic social media campaigns, content and performance optimization.",
  },


  "marketing-strategy": {
    title:
      "Marketing Strategy",

    canonical:
      "/service/marketing-strategy",

    description:
      "Create focused marketing strategies connecting positioning, audiences, channels and measurable business growth.",
  },


  "google-ads": {
    title:
      "Google Ads Management",

    canonical:
      "/service/google-ads",

    description:
      "Reach high-intent customers with structured Google Ads campaigns focused on measurable performance.",
  },


  "content-marketing": {
    title:
      "Content Marketing",

    canonical:
      "/service/content-marketing",

    description:
      "Build authority and customer demand through research-led content strategy and execution.",
  },


  /* ========================================================================
     AI
     ======================================================================== */

  "ai-chatbots-assistants": {
    title:
      "AI Chatbots & Assistants",

    canonical:
      "/service/ai-chatbots-assistants",

    description:
      "Build intelligent AI assistants that help customers and teams retrieve information and complete workflows.",
  },


  "ai-agents-automation": {
    title:
      "AI Agents & Automation",

    canonical:
      "/service/ai-agents-automation",

    description:
      "Automate multi-step operational workflows using AI agents integrated with approved systems and tools.",
  },


  "voice-ai-conversational-agents": {
    title:
      "Voice AI & Conversational Agents",

    canonical:
      "/service/voice-ai-conversational-agents",

    description:
      "Create natural voice AI experiences for customer service, qualification and operational workflows.",
  },


  "rag-knowledge-base-solutions": {
    title:
      "RAG & Knowledge Base Solutions",

    canonical:
      "/service/rag-knowledge-base-solutions",

    description:
      "Connect AI systems to trusted organizational knowledge using retrieval augmented generation.",
  },


  "mcp-server-development-integrations": {
    title:
      "MCP Server Development & Integrations",

    canonical:
      "/service/mcp-server-development-integrations",

    description:
      "Develop Model Context Protocol servers and integrations connecting AI applications to approved tools and data.",
  },


  /* ========================================================================
     NEW PRODUCTS
     ======================================================================== */

  tekbooks: {
    title:
      "TekBooks — Bookkeeping Software for SMEs",

    canonical:
      "/products/tekbooks",

    description:
      "TekBooks helps SMEs manage bookkeeping, transactions, financial records and essential reporting workflows.",
  },


  teklms: {
    title:
      "TekLMS — Learning Management System",

    canonical:
      "/products/teklms",

    description:
      "TekLMS helps institutes and academies manage courses, learners, assessments, content and learning operations.",
  },


  /* ========================================================================
     EXISTING SOLUTIONS
     ======================================================================== */

  "crm-integration": {
    title:
      "CRM Integration",

    canonical:
      "/service/crm-integration",

    description:
      "Connect customer systems, applications and data with TekCorp CRM integration solutions.",
  },


  "erp-integration": {
    title:
      "ERP Integration",

    canonical:
      "/service/erp-integration",

    description:
      "Connect enterprise applications, workflows and data through reliable ERP integrations.",
  },


  "cloud-devops": {
    title:
      "Cloud & DevOps",

    canonical:
      "/service/cloud-devops",

    description:
      "Modernize infrastructure and delivery pipelines with TekCorp Cloud and DevOps solutions.",
  },


  "reports-data-analysis": {
    title:
      "Reports Development & Data Analysis",

    canonical:
      "/service/reports-data-analysis",

    description:
      "Turn operational data into dashboards, reports and actionable business insights.",
  },


  "api-integration": {
    title:
      "API Integration",

    canonical:
      "/service/api-integration",

    description:
      "Connect software platforms through secure, reliable and scalable API integrations.",
  },


  /* ========================================================================
     EXISTING PRODUCTS
     ======================================================================== */

  "digital-commerce-software": {
    title:
      "Digital Commerce Software",

    canonical:
      "/products/digital-commerce-software",

    description:
      "Explore TekCorp digital commerce software for modern ecommerce operations.",
  },


  "task-management-portal": {
    title:
      "Task Management Portal",

    canonical:
      "/products/task-management-portal",

    description:
      "Improve workflow visibility, task management and team productivity.",
  },


  "employee-management-onboarding-portal": {
    title:
      "Employee Management & Onboarding Portal",

    canonical:
      "/products/employee-management-onboarding-portal",

    description:
      "Streamline employee administration, onboarding and workforce management.",
  },

};


/* ==========================================================================
   ROUTES THAT CAN RECEIVE PROJECT DATA
   ========================================================================== */

const PROJECT_AWARE_VIEWS =
  new Set([
    "web-engineering",
    "application-engineering",
    "maintenance-support",
    "prototyping-ui-ux-design",
    "quality-assurance-testing",
  ]);


/* ==========================================================================
   HELPERS
   ========================================================================== */

function hasOwn(
  object,
  key,
) {

  return Object.prototype.hasOwnProperty.call(
    object,
    key,
  );

}


function getView(
  params,
) {

  const rawView =
    Array.isArray(
      params?.view,
    )
      ? params.view[0]
      : params?.view;


  if (
    typeof rawView !==
    "string"
  ) {
    return "";
  }


  return rawView
    .trim()
    .toLowerCase();

}


/* ==========================================================================
   SAFE DATABASE HELPERS

   Very important for local development.

   If MongoDB is unavailable locally, a DB-backed section should become empty
   instead of taking down the complete page.
   ========================================================================== */

async function getSafeHomeData() {

  const [
    articleResult,
    projectResult,
  ] =
    await Promise.allSettled([

      getLatestArticles({
        limit:
          8,
      }),


      getCaseStudies({
        page:
          1,

        limit:
          12,
      }),

    ]);


  const articles =
    articleResult.status ===
      "fulfilled" &&
    Array.isArray(
      articleResult.value,
    )
      ? articleResult.value
      : [];


  const projects =
    projectResult.status ===
      "fulfilled" &&
    Array.isArray(
      projectResult.value?.caseStudies,
    )
      ? projectResult.value.caseStudies
      : [];


  return {
    articles,
    projects,
  };

}


async function getSafeProjects() {

  try {

    const result =
      await getCaseStudies({
        page:
          1,

        limit:
          12,
      });


    return Array.isArray(
      result?.caseStudies,
    )
      ? result.caseStudies
      : [];

  } catch {

    return [];

  }

}


/* ==========================================================================
   METADATA
   ========================================================================== */

export async function generateMetadata({
  searchParams,
}) {

  const params =
    await searchParams;


  const view =
    getView(
      params,
    );


  if (
    view &&
    hasOwn(
      PAGE_METADATA,
      view,
    )
  ) {

    const page =
      PAGE_METADATA[
        view
      ];


    return {

      title:
        page.title,


      description:
        page.description,


      alternates: {
        canonical:
          page.canonical,
      },


      openGraph: {

        title:
          `${page.title} | TekCorp`,


        description:
          page.description,


        url:
          page.canonical,


        siteName:
          "TekCorp",


        type:
          "website",

      },


      twitter: {

        card:
          "summary_large_image",


        title:
          `${page.title} | TekCorp`,


        description:
          page.description,

      },

    };

  }


  /* ========================================================================
     ROOT LANDING PAGE
     ======================================================================== */

  return {

    title: {
      absolute:
        "TekCorp - Empowering Innovation",
    },


    description:
      "Digital Systems That Power Business Growth",


    alternates: {
      canonical:
        "/",
    },


    openGraph: {

      title:
        "TekCorp - Empowering Innovation",


      description:
        "Digital Systems That Power Business Growth",


      url:
        "/",


      siteName:
        "TekCorp",


      type:
        "website",

    },


    twitter: {

      card:
        "summary_large_image",


      title:
        "TekCorp - Empowering Innovation",


      description:
        "Digital Systems That Power Business Growth",

    },

  };

}


/* ==========================================================================
   MAIN PAGE RENDERER
   ========================================================================== */

export default async function LandingRoute({
  searchParams,
}) {

  const params =
    await searchParams;


  const view =
    getView(
      params,
    );


  /* ========================================================================
     ROOT

     http://localhost:3000/
     ======================================================================== */

  if (
    !view
  ) {

    return (
      <LandingPage />
    );

  }


  /* ========================================================================
     UNKNOWN VIEW

     Fail safely rather than crashing.
     ======================================================================== */

  if (
    !hasOwn(
      MAIN_WEBSITE_PAGES,
      view,
    )
  ) {

    return (
      <LandingPage />
    );

  }


  /* ========================================================================
     HOME

     DB failures are handled safely for local development.
     ======================================================================== */

  if (
    view ===
    "home"
  ) {

    const {
      articles,
      projects,
    } =
      await getSafeHomeData();


    return (
      <Home
        articles={
          articles
        }
        projects={
          projects
        }
      />
    );

  }


  /* ========================================================================
     SELECT PAGE
     ======================================================================== */

  const SelectedPage =
    MAIN_WEBSITE_PAGES[
      view
    ];


  /* ========================================================================
     PROJECT-AWARE SERVICE PAGES
     ======================================================================== */

  if (
    PROJECT_AWARE_VIEWS.has(
      view,
    )
  ) {

    const projects =
      await getSafeProjects();


    return (
      <SelectedPage
        projects={
          projects
        }
      />
    );

  }


  /* ========================================================================
     STANDARD PAGE
     ======================================================================== */

  return (
    <SelectedPage />
  );

}
