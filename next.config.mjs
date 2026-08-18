/** @type {import("next").NextConfig} */

const nextConfig = {
  /*
   * ============================================================
   * REACT COMPILER
   * ============================================================
   *
   * Keep React Compiler enabled.
   */

  reactCompiler: true,


  /*
   * ============================================================
   * MAIN WEBSITE ROUTING
   * ============================================================
   *
   * IMPORTANT:
   *
   * We are intentionally using ONE central:
   *
   * app/page.js
   *
   * We are NOT creating route folders like:
   *
   * app/home/page.js
   * app/landing1/page.js
   *
   *
   * Instead, Next.js rewrites clean browser URLs into
   * internal query-based routes handled by app/page.js.
   *
   *
   * Browser URL:
   *
   * /home
   *
   * Internally becomes:
   *
   * /?view=home
   *
   *
   * Browser URL:
   *
   * /landing1
   *
   * Internally becomes:
   *
   * /?view=landing1
   *
   *
   * IMPORTANT:
   *
   * The visitor still sees the clean URL:
   *
   * /home
   *
   * or:
   *
   * /landing1
   *
   * They will NOT see:
   *
   * /?view=home
   *
   * or:
   *
   * /?view=landing1
   */

  async rewrites() {
    return [

      /*
       * --------------------------------------------------------
       * HOME PAGE
       * --------------------------------------------------------
       *
       * Browser:
       *
       * /home
       *
       * Internal:
       *
       * /?view=home
       *
       * app/page.js then renders:
       *
       * Home.jsx
       */

      {
        source: "/home",

        destination: "/?view=home",
      },


      /*
       * --------------------------------------------------------
       * LANDING PAGE 1
       * --------------------------------------------------------
       *
       * Browser:
       *
       * /landing1
       *
       * Internal:
       *
       * /?view=landing1
       *
       * app/page.js then renders:
       *
       * Landingpage1.jsx
       */

      {
        source: "/landing1",

        destination: "/?view=landing1",
      },


      /*
       * --------------------------------------------------------
       * FUTURE MAIN WEBSITE PAGES
       * --------------------------------------------------------
       *
       * Add future routes here using the exact same pattern.
       *
       *
       * Example:
       *
       * {
       *   source: "/about",
       *   destination: "/?view=about",
       * },
       *
       *
       * {
       *   source: "/services",
       *   destination: "/?view=services",
       * },
       *
       *
       * {
       *   source: "/portfolio",
       *   destination: "/?view=portfolio",
       * },
       *
       *
       * {
       *   source: "/contact",
       *   destination: "/?view=contact",
       * },
       *
       *
       * Then register those pages inside:
       *
       * app/page.js
       *
       * Example:
       *
       * const MAIN_WEBSITE_PAGES = {
       *
       *   home: Home,
       *
       *   landing1: Landingpage1,
       *
       *   about: AboutPage,
       *
       *   services: ServicesPage,
       *
       *   portfolio: PortfolioPage,
       *
       *   contact: ContactPage,
       *
       * };
       */
    ];
  },
};


export default nextConfig;