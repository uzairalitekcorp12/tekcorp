/*
 * when i wrote this only i and god knows how i wrote that all files
 * and each components and now only God knows ..
 *
 * if you are modifying the application then u will stuck surely
 * kindly increase the below counter then to warn the next person ..
 *
 * Happy coding lol : (
 *
 * TOTAL HOURS WASTED = 573
 */


/*
 * ==========================================================================
 * TEKCORP — MAIN WEBSITE PAGE CONTROLLER
 * ==========================================================================
 *
 * MAIN WEBSITE ROUTES
 *
 * /
 *      -> Existing/current website page
 *
 * /Home
 *      -> New Home page
 *
 * /About
 *      -> About page
 *
 *
 * We intentionally continue using one central:
 *
 * app/page.js
 *
 * /Home and /About are internally rewritten by next.config.mjs.
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
 * IMPORTANT:
 *
 * There is NO Landingpage1 page or route anymore.
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
   MAIN WEBSITE PAGE REGISTRY
   ========================================================================== */

const MAIN_WEBSITE_PAGES = {
  home:
    Home,

  about:
    About,
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
};


/* ==========================================================================
   GENERATE METADATA
   ========================================================================== */

export async function generateMetadata({
  searchParams,
}) {
  const params =
    await searchParams;


  const view =
    params?.view;


  /* ------------------------------------------------------------------------
     HOME / ABOUT
     ------------------------------------------------------------------------ */

  if (
    view &&
    PAGE_METADATA[view]
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
    params?.view;


  /*
   * If /Home or /About is requested,
   * render its registered page.
   *
   * Otherwise:
   *
   * /
   *
   * renders the existing current LandingPage.
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