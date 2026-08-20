/*
 * when i wrote this only i and god knows how i wrote that all files
 * and each components and now only God knows ..
 *
 * if you are modifying the application then u will stuck surely
 * kindly increase the below counter then to warn the next person ..
 *
 * Happy coding lol : (
 *
 * TOTAL HOURS WASTED = 574
 */


/*
 * ==========================================================================
 * TEKCORP — MAIN WEBSITE PAGE CONTROLLER
 * ==========================================================================
 *
 * MAIN WEBSITE ROUTES
 *
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
 *
 * We intentionally continue using one central:
 *
 * app/page.js
 *
 *
 * /Home, /About and /Contact are internally rewritten by:
 *
 * next.config.mjs
 *
 *
 * Browser:
 *
 * /Home
 *
 * Internal:
 *
 * /?view=home
 *
 *
 * Browser:
 *
 * /About
 *
 * Internal:
 *
 * /?view=about
 *
 *
 * Browser:
 *
 * /Contact
 *
 * Internal:
 *
 * /?view=contact
 *
 *
 * IMPORTANT:
 *
 * There is no separate App Router folder route required for these
 * main-website pages while this centralized routing architecture is used.
 * ==========================================================================
 */


/* ==========================================================================
   CURRENT ROOT WEBSITE
   ========================================================================== */

import LandingPage from
  "./landing/LandingPage";


/* ==========================================================================
   HOME PAGE
   ========================================================================== */

import Home from
  "./main-website-pages/Home/Home";


/* ==========================================================================
   ABOUT PAGE
   ========================================================================== */

import About from
  "./main-website-pages/About/About";


/* ==========================================================================
   CONTACT PAGE
   ========================================================================== */

import Contact from
  "./main-website-pages/Contact/Contact";


/* ==========================================================================
   MAIN WEBSITE PAGE REGISTRY
   ========================================================================== */

const MAIN_WEBSITE_PAGES = {
  home:
    Home,

  about:
    About,

  contact:
    Contact,
};


/* ==========================================================================
   PAGE METADATA
   ========================================================================== */

const PAGE_METADATA = {
  home: {
    title:
      "Home",

    description:
      "TekCorp delivers digital transformation, software engineering, product development and scalable technology solutions.",
  },


  about: {
    title:
      "About Us",

    description:
      "Learn about TekCorp, our mission, ambition, team, technology partnerships and approach to building scalable digital solutions.",
  },


  contact: {
    title:
      "Contact Us",

    description:
      "Start a conversation with TekCorp about your next website, software, AI, mobile, e-commerce or digital transformation project.",
  },
};


/* ==========================================================================
   VIEW NORMALIZER
   ========================================================================== */

function getView(
  params,
) {
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


/* ==========================================================================
   GENERATE METADATA
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


  /* ------------------------------------------------------------------------
     REGISTERED MAIN WEBSITE PAGE
     ------------------------------------------------------------------------ */

  if (
    view &&
    PAGE_METADATA[
      view
    ]
  ) {
    return {
      title:
        PAGE_METADATA[
          view
        ].title,

      description:
        PAGE_METADATA[
          view
        ].description,
    };
  }


  /* ------------------------------------------------------------------------
     EXISTING ROOT WEBSITE
     ------------------------------------------------------------------------ */

  return {
    title: {
      absolute:
        "TekCorp - Empowering Innovation",
    },

    description:
      "Digital Systems That Power Business Growth",
  };
}


/* ==========================================================================
   PAGE RENDERER
   ========================================================================== */

export default async function Page({
  searchParams,
}) {
  const params =
    await searchParams;


  const view =
    getView(
      params,
    );


  /*
   * Registered rewritten pages:
   *
   * /Home
   * /About
   * /Contact
   *
   * render from MAIN_WEBSITE_PAGES.
   *
   * Anything else — including "/" — keeps rendering
   * the existing LandingPage.
   */

  const SelectedPage =
    MAIN_WEBSITE_PAGES[
      view
    ] ||
    LandingPage;


  return (
    <SelectedPage />
  );
}
