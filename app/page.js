/*
 * when i wrote this only i and god knows how i wrote that all files
 * and each components and now only God knows ..
 *
 * if you are modifying the application then u will stuck surely
 * kindly increase the below counter then to warn the next person ..
 *
 * Happy coding lol : (
 *
 * TOTAL HOURS WASTED = 572
 */


/*
 * ==========================================================================
 * TEKCORP — MAIN WEBSITE PAGE CONTROLLER
 * ==========================================================================
 *
 * IMPORTANT:
 *
 * We intentionally use ONE:
 *
 * app/page.js
 *
 * to control the main website pages.
 *
 *
 * CURRENT ROUTES
 * --------------------------------------------------------------------------
 *
 * /
 *      -> Existing LandingPage
 *
 * /home
 *      -> New Home page
 *
 * /landing1
 *      -> Landingpage1
 *
 *
 * next.config.mjs performs internal rewrites:
 *
 * /home
 *      -> /?view=home
 *
 * /landing1
 *      -> /?view=landing1
 *
 *
 * The browser URL stays clean.
 *
 * Example:
 *
 * User sees:
 *
 * /home
 *
 * not:
 *
 * /?view=home
 *
 * ==========================================================================
 */


/* ==========================================================================
   EXISTING WEBSITE
   ========================================================================== */

import LandingPage from
  "./landing/LandingPage";


/* ==========================================================================
   NEW HOME PAGE
   ========================================================================== */

import Home from
  "./main-website-pages/Home/Home";


/* ==========================================================================
   LANDING PAGE 1
   ========================================================================== */

import Landingpage1 from
  "./main-website-pages/Landingpage1/Landingpage1";


/* ==========================================================================
   MAIN WEBSITE PAGE REGISTRY
   ==========================================================================

   Every future website page should be registered here.

   Example later:

   import ServicesPage from
     "./main-website-pages/ServicesPage/ServicesPage";

   import CompanyPage from
     "./main-website-pages/CompanyPage/CompanyPage";


   Then add:

   services:
     ServicesPage,

   company:
     CompanyPage,

   ========================================================================== */

const MAIN_WEBSITE_PAGES = {

  home:
    Home,


  landing1:
    Landingpage1,

};


/* ==========================================================================
   PAGE METADATA
   ========================================================================== */

const PAGE_METADATA = {

  home: {

    title:
      "Home",

    description:
      "TekCorp empowers businesses with scalable, efficient and innovative technology solutions.",

  },


  landing1: {

    title:
      "Digital Transformation",

    description:
      "TekCorp digital transformation, engineering, product design, strategic partnerships and software development services.",

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
     REGISTERED PAGE
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
   MAIN PAGE RENDERER
   ========================================================================== */

export default async function Page({
  searchParams,
}) {

  const params =
    await searchParams;


  const view =
    params?.view;


  /*
   * If the requested page exists inside MAIN_WEBSITE_PAGES,
   * render it.
   *
   * Otherwise we fall back to your existing LandingPage.
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