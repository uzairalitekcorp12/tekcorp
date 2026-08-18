import "./HomeBrands.css";


/* ==========================================================================
   TRUSTED BRAND DATA

   LOGOS
   -----
   These can later be replaced with local files:

   /assets/main-website/home/brands/yelp.svg
   /assets/main-website/home/brands/odoo.svg
   etc.

   No component/CSS changes will be required.


   TONE
   ----
   "soft" gives the cell the light-grey background seen
   in selected blocks of the supplied reference.

   Pattern from reference:

   ROW 1
   soft | white | soft | white

   ROW 2
   white | soft | white | soft
   ========================================================================== */

const brands = [
  {
    name: "Yelp",

    logo:
      "https://cdn.simpleicons.org/yelp/181818",

    description:
      "Digital experiences built around stronger customer engagement, dependable technology, and meaningful business growth.",

    tone: "soft",
  },

  {
    name: "Odoo",

    logo:
      "https://cdn.simpleicons.org/odoo/714B67",

    description:
      "Connected business systems designed to simplify operations, improve workflows, and create scalable digital foundations.",

    tone: "plain",
  },

  {
    name: "Shopify",

    logo:
      "https://cdn.simpleicons.org/shopify/95BF47",

    description:
      "Commerce solutions shaped around seamless customer journeys, scalable technology, and high-performing digital experiences.",

    tone: "soft",
  },

  {
    name: "Stripe",

    logo:
      "https://cdn.simpleicons.org/stripe/635BFF",

    description:
      "Reliable payment and technology experiences developed to support secure transactions and modern digital businesses.",

    tone: "plain",
  },

  {
    name: "Amazon AWS",

    logo:
      "/assets/About-assets/amazon.png",

    description:
      "Cloud-enabled solutions created for performance, reliability, secure infrastructure, and long-term product scalability.",

    tone: "plain",
  },

  {
    name: "WordPress",

    logo:
      "https://cdn.simpleicons.org/wordpress/21759B",

    description:
      "Flexible web platforms designed to make content management simple while supporting performance and business growth.",

    tone: "soft",
  },

  {
    name: "Slack",

    logo:
      "/assets/About-assets/slack.png",

    description:
      "Collaborative technology experiences built to improve communication, productivity, and connected digital workflows.",

    tone: "plain",
  },

  {
    name: "Microsoft",

    logo:
      "/assets/About-assets/microsoft.png",

    description:
      "Enterprise technology solutions focused on stronger operations, connected systems, and sustainable digital transformation.",

    tone: "soft",
  },
];


export default function HomeBrands() {
  return (
    <section
      className="tek-home-brands"
      id="trusted-brands"
      aria-labelledby="tek-home-brands-title"
    >
      <div className="tek-home-shell">

        {/* ==================================================================
            SECTION HEADER
            ================================================================== */}

        <header
          className="tek-home-brands__header"
          data-reveal="up"
        >
          <p className="tek-home-brands__kicker">
            Trusted Brands
            <span aria-hidden="true" />
          </p>


          <h2 id="tek-home-brands-title">
            Partnerships we&apos;ve built
          </h2>
        </header>


        {/* ==================================================================
            BRAND GRID
            ================================================================== */}

        <div className="tek-home-brands__grid">

          {brands.map(
            (
              brand,
              index,
            ) => (
              <article
                className={[
                  "tek-home-brand-card",

                  brand.tone === "soft"
                    ? "tek-home-brand-card--soft"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={brand.name}
                data-reveal="up"
                style={{
                  "--tek-home-brand-delay":
                    `${index * 55}ms`,
                }}
              >

                {/* ==========================================================
                    BRAND LOGO
                    ========================================================== */}

                <div className="tek-home-brand-card__logo">

                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    decoding="async"
                  />

                </div>


                {/* ==========================================================
                    DESCRIPTION
                    ========================================================== */}

                <p>
                  {brand.description}
                </p>


                {/* ==========================================================
                    HOVER ACCENT
                    ========================================================== */}

                <span
                  className="tek-home-brand-card__accent"
                  aria-hidden="true"
                />

              </article>
            ),
          )}

        </div>

      </div>
    </section>
  );
}