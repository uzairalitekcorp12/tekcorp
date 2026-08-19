/** @type {import("next").NextConfig} */

const nextConfig = {
  /*
   * ============================================================
   * REACT COMPILER
   * ============================================================
   */

  reactCompiler: true,


  /*
   * ============================================================
   * MAIN WEBSITE ROUTING
   * ============================================================
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
   * The browser continues showing:
   *
   * /Home
   *
   * or:
   *
   * /About
   */

  async rewrites() {
    return [

      /* --------------------------------------------------------
         HOME
         -------------------------------------------------------- */

      {
        source:
          "/Home",

        destination:
          "/?view=home",
      },


      /* --------------------------------------------------------
         ABOUT
         -------------------------------------------------------- */

      {
        source:
          "/About",

        destination:
          "/?view=about",
      },

    ];
  },
};


export default nextConfig;