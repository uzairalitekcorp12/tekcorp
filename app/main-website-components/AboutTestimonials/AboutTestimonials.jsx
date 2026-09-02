import "./AboutTestimonials.css";


/* ==========================================================================
   TESTIMONIAL DATA
   ========================================================================== */

const testimonials = [
  {
    quote:
      "We love Tekcorp! Our designers were using it for their projects, so clients already knew what Tekcorp was and how to use it.",

    name:
      "Darlene Robertson",

    role:
      "Product Manager at Odoo",
  },

  {
    quote:
      "I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but Tekcorp changed my mind.",

    name:
      "Bessie Cooper",

    role:
      "Freelance UX Designer",
  },

  {
    quote:
      "We love Tekcorp! Our designers were using it for their projects, so clients already knew what Tekcorp was and how to use it.",

    name:
      "Arlene McCoy",

    role:
      "Product Designer at Martina.co",
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function AboutTestimonials() {
  return (
    <section
      className="tek-About-testimonials"
      aria-label="Client testimonials"
    >

      <div className="tek-About-shell tek-About-testimonials__grid">

        {testimonials.map(
          (
            testimonial,
            index,
          ) => (

            <blockquote
              className="tek-About-testimonial"
              key={testimonial.name}
              data-reveal="up"
              style={{
                "--tek-About-testimonial-delay":
                  `${index * 90}ms`,
              }}
            >

              {/* ========================================================
                  QUOTE
                  ======================================================== */}

              <p className="tek-About-testimonial__quote">

                &quot;
                {testimonial.quote}
                &quot;

              </p>


              {/* ========================================================
                  PERSON
                  ======================================================== */}

              <footer className="tek-About-testimonial__person">

                <strong>
                  {testimonial.name}
                </strong>


                <span>
                  {testimonial.role}
                </span>

              </footer>

            </blockquote>

          ),
        )}

      </div>

    </section>
  );
}