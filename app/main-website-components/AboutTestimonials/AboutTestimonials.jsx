import "./AboutTestimonials.css";


/* ==========================================================================
   TESTIMONIAL DATA
   ========================================================================== */

const testimonials = [
  {
    quote:
      "We love TekCorp! Our designers were using it for their projects, so clients already knew what TekCorp was and how to use it.",

    name:
      "Darlene Robertson",

    role:
      "Product Manager at Odoo",
  },

  {
    quote:
      "I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but TekCorp changed my mind.",

    name:
      "Bessie Cooper",

    role:
      "Freelance UX Designer",
  },

  {
    quote:
      "We love TekCorp! Our designers were using it for their projects, so clients already knew what TekCorp was and how to use it.",

    name:
      "Arlene McCoy",

    role:
      "Product Designer at Martina.co",
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeTestimonials() {
  return (
    <section
      className="tek-home-testimonials"
      aria-label="Client testimonials"
    >

      <div className="tek-home-shell tek-home-testimonials__grid">

        {testimonials.map(
          (
            testimonial,
            index,
          ) => (

            <blockquote
              className="tek-home-testimonial"
              key={testimonial.name}
              data-reveal="up"
              style={{
                "--tek-home-testimonial-delay":
                  `${index * 90}ms`,
              }}
            >

              {/* ========================================================
                  QUOTE
                  ======================================================== */}

              <p className="tek-home-testimonial__quote">

                &quot;
                {testimonial.quote}
                &quot;

              </p>


              {/* ========================================================
                  PERSON
                  ======================================================== */}

              <footer className="tek-home-testimonial__person">

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