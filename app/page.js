/*
 * when i wrote this only i and god knows how i wrote that all files
 * and each components and now only God knows ..
 *
 * if you are modifying the application then u will stuck surely
 * kindly increase the below counter then to warn the next person ..
 *
 * Happy coding lol : (
 *
 * TOTAL HOURS WASTED = 575
 */

/*
 * ========================================================================== 
 * TEKCORP — CENTRAL MAIN WEBSITE PAGE CONTROLLER
 * ========================================================================== 
 *
 * PUBLIC MAIN WEBSITE ROUTES
 * --------------------------------------------------------------------------
 * /
 *      -> Existing/current LandingPage
 *
 * /Home
 *      -> Home page
 *
 * /About
 *      -> About page
 *
 * /Contact
 *      -> Contact page
 *
 * /services/web-engineering
 *      -> Web Engineering service page
 *
 * /services/application-engineering
 *      -> Application Engineering service page
 *
 * /services/maintenance-support
 *      -> Maintenance & Support service page
 *
 * /services/prototyping-ui-ux-design
 *      -> Prototyping & UI/UX Design service page
 *
 * /services/quality-assurance-testing
 *      -> Quality Assurance & Testing service page
 *
 * next.config.mjs rewrites these public URLs into internal `view` values.
 * The public browser URL remains clean and SEO-friendly.
 * ========================================================================== 
 */

import LandingPage from
  "./landing/LandingPage";

import Home from
  "./main-website-pages/Home/Home";

import About from
  "./main-website-pages/About/About";

import Contact from
  "./main-website-pages/Contact/Contact";

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
import { getLatestArticles } from "./_lib/data/articles";
import { getCaseStudies } from "./_lib/data/caseStudies";

const MAIN_WEBSITE_PAGES = {
  home:
    Home,

  about:
    About,

  contact:
    Contact,

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
};

const PAGE_METADATA = {
  home: {
    title:
      "Home",

    canonical:
      "/home",

    description:
      "TekCorp delivers digital transformation, software engineering, product development and scalable technology solutions.",
  },

  about: {
    title:
      "About Us",

    canonical:
      "/about",

    description:
      "Learn about TekCorp, our mission, ambition, team, technology partnerships and approach to building scalable digital solutions.",
  },

  contact: {
    title:
      "Contact Us",

    canonical:
      "/contact",

    description:
      "Start a conversation with TekCorp about your next website, software, AI, mobile, e-commerce or digital transformation project.",
  },

  "web-engineering": {
    title:
      "Web Engineering Services",

    canonical:
      "/services/web-engineering",

    description:
      "Build fast, scalable and maintainable web platforms with TekCorp web engineering services, from architecture and frontend systems to APIs, performance and delivery.",
  },

  "application-engineering": {
    title:
      "Application Engineering Services",

    canonical:
      "/services/application-engineering",

    description:
      "Design and engineer reliable mobile, desktop and cross-platform applications with scalable architecture, polished user experiences and maintainable delivery practices.",
  },

  "maintenance-support": {
    title:
      "Maintenance & Support Services",

    canonical:
      "/services/maintenance-support",

    description:
      "Keep digital products reliable with TekCorp maintenance and support services, including tiered technical support, dedicated service ownership, monitoring and ongoing optimization.",
  },

  "prototyping-ui-ux-design": {
    title:
      "Prototyping & UI/UX Design Services",

    canonical:
      "/services/prototyping-ui-ux-design",

    description:
      "Validate ideas faster with TekCorp prototyping and UI/UX design services covering discovery, user flows, wireframes, research, high-fidelity interfaces and design systems.",
  },

  "quality-assurance-testing": {
    title:
      "Quality Assurance & Software Testing Services",

    canonical:
      "/services/quality-assurance-testing",

    description:
      "Improve product quality and release confidence with TekCorp quality assurance and software testing services, from requirements analysis and test planning to execution and reporting.",
  },
};

const SERVICE_VIEWS = new Set([
  "web-engineering",
  "application-engineering",
  "maintenance-support",
  "prototyping-ui-ux-design",
  "quality-assurance-testing",
]);

function getView(params) {
  const rawView =
    params?.view;

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

export async function generateMetadata({
  searchParams,
}) {
  const params =
    await searchParams;

  const view =
    getView(params);

  if (
    view &&
    Object.hasOwn(
      PAGE_METADATA,
      view,
    )
  ) {
    const page =
      PAGE_METADATA[view];

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

  return {
    title: {
      absolute:
        "TekCorp - Empowering Innovation",
    },

    description:
      "Digital Systems That Power Business Growth",
  };
}

export default async function Page({
  searchParams,
}) {
  const params =
    await searchParams;

  const view =
    getView(params);

  const SelectedPage =
    Object.hasOwn(
      MAIN_WEBSITE_PAGES,
      view,
    )
      ? MAIN_WEBSITE_PAGES[view]
      : LandingPage;

  if (view === "home") {
    const [articles, projectResult] = await Promise.all([
      getLatestArticles({ limit: 8 }),
      getCaseStudies({ page: 1, limit: 12 }),
    ]);

    return (
      <Home
        articles={articles}
        projects={projectResult.caseStudies}
      />
    );
  }

  if (SERVICE_VIEWS.has(view)) {
    const projectResult = await getCaseStudies({ page: 1, limit: 12 });
    return <SelectedPage projects={projectResult.caseStudies} />;
  }

  return (
    <SelectedPage />
  );
}
