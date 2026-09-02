/** @type {import("next").NextConfig} */


/*
 * ==========================================================================
 * TEKCORP — NEXT.JS CONFIGURATION
 * ==========================================================================
 *
 * IMPORTANT
 * --------------------------------------------------------------------------
 *
 * LOCAL DEVELOPMENT
 *
 * localhost:3000
 * 127.0.0.1:3000
 *
 * must NEVER be redirected to the production website.
 *
 *
 * PRODUCTION
 *
 * Legacy domains:
 *
 * tekcorpltd.com
 * www.tekcorpltd.com
 * tekcorpllc.com
 * www.tekcorpllc.com
 *
 * redirect permanently to:
 *
 * https://www.tekcorp.ae
 *
 *
 * WEBSITE ROUTING
 *
 * We continue using the existing centralized:
 *
 * app/page.js
 *
 * architecture.
 *
 * Clean browser URLs are internally rewritten to:
 *
 * /?view=...
 *
 * without changing what the visitor sees.
 * ==========================================================================
 */


const IS_PRODUCTION =
  process.env.NODE_ENV ===
  "production";


const CANONICAL_SERVICE_ROUTES = [
  ["web-development", "web-engineering"],
  ["application-development", "application-engineering"],
  ["cms-development", "cms-development"],
  ["ecommerce-development", "ecommerce-development"],
  ["ui-ux-design", "prototyping-ui-ux-design"],
  ["logo-branding", "branding"],
  ["search-engine-optimization", "search-engine-optimization"],
  ["social-media-marketing", "social-media-marketing"],
  ["marketing-strategy", "marketing-strategy"],
  ["google-ads", "google-ads"],
  ["content-marketing", "content-marketing"],
  ["ai-chatbot-development", "ai-chatbots-assistants"],
  ["ai-agent-development", "ai-agents-automation"],
  ["voice-ai-agents", "voice-ai-conversational-agents"],
  ["rag-solutions", "rag-knowledge-base-solutions"],
  ["mcp-server-development", "mcp-server-development-integrations"],
];


const serviceRouteRedirects =
  CANONICAL_SERVICE_ROUTES.flatMap(([publicSlug, view]) => {
    const canonical = `/services/${publicSlug}`;
    const legacyPaths = new Set([
      `/service/${view}`,
      `/service/${publicSlug}`,
      `/services/${view}`,
    ]);

    legacyPaths.delete(canonical);

    return Array.from(legacyPaths, (source) => ({
      source,
      destination: canonical,
      permanent: true,
    }));
  });


const nextConfig = {

  /* ==========================================================================
     CORE
     ========================================================================== */

  reactCompiler:
    true,


  poweredByHeader:
    false,


  /* ==========================================================================
     CANONICAL ROUTE + LEGACY DOMAIN REDIRECTS
     ==========================================================================

     IMPORTANT:

     During local development only the route-normalization redirects run.
     Host redirects remain production-only, so:

     http://localhost:3000
     http://localhost:3000/home
     http://localhost:3000/services/google-ads

     will NEVER be redirected to tekcorp.ae.

     ========================================================================== */

  async redirects() {

    const routeRedirects = [
      ...serviceRouteRedirects,


      {
        source:
          "/solutions/:path*",

        destination:
          "/service/:path*",

        permanent:
          true,
      },


      {
        source:
          "/product/:path*",

        destination:
          "/products/:path*",

        permanent:
          true,
      },
    ];

    if (
      !IS_PRODUCTION
    ) {
      return routeRedirects;
    }


    return [

      ...routeRedirects,

      /* ----------------------------------------------------------------------
         TEKCORP LTD → TEKCORP.AE
         ---------------------------------------------------------------------- */

      {
        source:
          "/:path*",

        has: [
          {
            type:
              "host",

            value:
              "(?:www\\.)?tekcorpltd\\.com(?::\\d+)?",
          },
        ],

        destination:
          "https://www.tekcorp.ae/:path*",

        basePath:
          false,

        permanent:
          true,
      },


      /* ----------------------------------------------------------------------
         TEKCORP LLC → TEKCORP.AE
         ---------------------------------------------------------------------- */

      {
        source:
          "/:path*",

        has: [
          {
            type:
              "host",

            value:
              "(?:www\\.)?tekcorpllc\\.com(?::\\d+)?",
          },
        ],

        destination:
          "https://www.tekcorp.ae/:path*",

        basePath:
          false,

        permanent:
          true,
      },

    ];
  },


  /* ==========================================================================
     INTERNAL ROUTING
     ==========================================================================

     These are rewrites, NOT redirects.

     Example:

     Browser:
         /services/google-ads

     Internally:
         /?view=google-ads

     Browser continues displaying:
         /services/google-ads

     ========================================================================== */

  async rewrites() {

    return {
      beforeFiles: [

      ...CANONICAL_SERVICE_ROUTES.map(([publicSlug, view]) => ({
        source: `/services/${publicSlug}`,
        destination: `/?view=${view}`,
      })),

      /* ======================================================================
         MAIN WEBSITE
         ====================================================================== */

      {
        source:
          "/home",

        destination:
          "/?view=home",
      },


      {
        source:
          "/about",

        destination:
          "/?view=about",
      },


      {
        source:
          "/contact",

        destination:
          "/?view=contact",
      },


      /* ======================================================================
         DESIGN & ENGINEERING
         ====================================================================== */

      {
        source:
          "/service/web-engineering",

        destination:
          "/?view=web-engineering",
      },


      {
        source:
          "/service/application-engineering",

        destination:
          "/?view=application-engineering",
      },


      {
        source:
          "/service/maintenance-support",

        destination:
          "/?view=maintenance-support",
      },


      {
        source:
          "/service/prototyping-ui-ux-design",

        destination:
          "/?view=prototyping-ui-ux-design",
      },


      {
        source:
          "/service/quality-assurance-testing",

        destination:
          "/?view=quality-assurance-testing",
      },


      {
        source:
          "/service/cms-development",

        destination:
          "/?view=cms-development",
      },


      {
        source:
          "/service/ecommerce-development",

        destination:
          "/?view=ecommerce-development",
      },


      {
        source:
          "/service/branding",

        destination:
          "/?view=branding",
      },


      /* ======================================================================
         GROWTH & MARKETING
         ====================================================================== */

      {
        source:
          "/service/search-engine-optimization",

        destination:
          "/?view=search-engine-optimization",
      },


      {
        source:
          "/service/social-media-marketing",

        destination:
          "/?view=social-media-marketing",
      },


      {
        source:
          "/service/marketing-strategy",

        destination:
          "/?view=marketing-strategy",
      },


      {
        source:
          "/service/google-ads",

        destination:
          "/?view=google-ads",
      },


      {
        source:
          "/service/content-marketing",

        destination:
          "/?view=content-marketing",
      },


      /* ======================================================================
         AI & AUTOMATION
         ====================================================================== */

      {
        source:
          "/service/ai-chatbots-assistants",

        destination:
          "/?view=ai-chatbots-assistants",
      },


      {
        source:
          "/service/ai-agents-automation",

        destination:
          "/?view=ai-agents-automation",
      },


      {
        source:
          "/service/voice-ai-conversational-agents",

        destination:
          "/?view=voice-ai-conversational-agents",
      },


      {
        source:
          "/service/rag-knowledge-base-solutions",

        destination:
          "/?view=rag-knowledge-base-solutions",
      },


      {
        source:
          "/service/mcp-server-development-integrations",

        destination:
          "/?view=mcp-server-development-integrations",
      },


      /* ======================================================================
         NEW PRODUCTS
         ======================================================================

         Canonical:

         /products/...

         ====================================================================== */

      {
        source:
          "/products/tekbooks",

        destination:
          "/?view=tekbooks",
      },


      {
        source:
          "/products/teklms",

        destination:
          "/?view=teklms",
      },


      /* ======================================================================
         EXISTING SOLUTIONS
         ====================================================================== */

      {
        source:
          "/service/crm-integration",

        destination:
          "/?view=crm-integration",
      },


      {
        source:
          "/service/erp-integration",

        destination:
          "/?view=erp-integration",
      },


      {
        source:
          "/service/cloud-devops",

        destination:
          "/?view=cloud-devops",
      },


      {
        source:
          "/service/reports-data-analysis",

        destination:
          "/?view=reports-data-analysis",
      },


      {
        source:
          "/service/api-integration",

        destination:
          "/?view=api-integration",
      },


      /* ======================================================================
         EXISTING PRODUCTS

         These existing routes are intentionally preserved.
         ====================================================================== */

      {
        source:
          "/products/digital-commerce-software",

        destination:
          "/?view=digital-commerce-software",
      },


      {
        source:
          "/products/task-management-portal",

        destination:
          "/?view=task-management-portal",
      },


      {
        source:
          "/products/employee-management-onboarding-portal",

        destination:
          "/?view=employee-management-onboarding-portal",
      },

      ],
      afterFiles: [],
      fallback: [],
    };
  },

};


export default nextConfig;
