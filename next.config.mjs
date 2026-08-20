/** @type {import("next").NextConfig} */

const nextConfig = {

  /*
   * ==========================================================================
   * REACT COMPILER
   * ==========================================================================
   */

  reactCompiler:
    true,


  /*
   * ==========================================================================
   * PRODUCTION HEADER
   * ==========================================================================
   */

  poweredByHeader:
    false,


  /*
   * ==========================================================================
   * MAIN WEBSITE ROUTING
   * ==========================================================================
   *
   * /
   *
   * is handled directly by:
   *
   * app/page.js
   *
   *
   * /Home
   *
   * internally becomes:
   *
   * /?view=home
   *
   *
   * /About
   *
   * internally becomes:
   *
   * /?view=about
   *
   *
   * /Contact
   *
   * internally becomes:
   *
   * /?view=contact
   *
   *
   * The browser keeps displaying the clean public URL.
   *
   * No separate:
   *
   * app/Home/page.jsx
   * app/About/page.jsx
   * app/Contact/page.jsx
   *
   * is required with this architecture.
   * ==========================================================================
   */

  async rewrites() {
    return [

      /* ----------------------------------------------------------------------
         HOME
         ---------------------------------------------------------------------- */

      {
        source:
          "/Home",

        destination:
          "/?view=home",
      },


      /* ----------------------------------------------------------------------
         ABOUT
         ---------------------------------------------------------------------- */

      {
        source:
          "/About",

        destination:
          "/?view=about",
      },


      /* ----------------------------------------------------------------------
         CONTACT
         ---------------------------------------------------------------------- */

      {
        source:
          "/Contact",

        destination:
          "/?view=contact",
      },

    ];
  },

};


export default nextConfig;
