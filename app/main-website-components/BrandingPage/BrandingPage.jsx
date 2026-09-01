import StructuredServicePage from "../StructuredServicePage/StructuredServicePage";

const capabilities = {
  title: "A practical identity system—not a folder of disconnected design files.",
  items: [
    { title: "Brand Discovery", description: "Clarify audiences, market context, ambitions and the ideas the brand should own." },
    { title: "Logo Design", description: "Create an original, recognizable mark with practical lockups and usage rules." },
    { title: "Visual Identity", description: "Define typography, color, imagery and graphic principles that work together." },
    { title: "Verbal Identity", description: "Shape messaging, tone and narrative so the brand sounds as coherent as it looks." },
    { title: "Brand Guidelines", description: "Give teams clear, usable guidance for consistent day-to-day application." },
    { title: "Digital Application", description: "Translate the identity into websites, products and responsive interfaces." },
    { title: "Campaign Systems", description: "Create adaptable rules for launches, social content and marketing moments." },
    { title: "Brand Evolution", description: "Refresh an existing identity without losing the recognition already earned." },
  ],
};

const process = {
  title: "From strategic clarity to a recognizable identity system",
  steps: [
    {
      number: "01",
      title: "Discovery & Brand Direction",
      description: "We define the audience, competitive context, brand idea and creative criteria before visual exploration begins.",
      bullets: ["Stakeholder and market discovery", "Positioning and brand attributes", "Creative direction and success criteria"],
      image: "/assets/Service-assets/Branding/process-01-v2.png",
      imageAlt: "Tekcorp logo and branding discovery board",
    },
    {
      number: "02",
      title: "Logo & Identity Design",
      description: "Logo concepts are refined into a flexible identity with typography, color and graphic principles designed to work together.",
      bullets: ["Original logo and lockups", "Typography and color system", "Graphic and imagery direction"],
      image: "/assets/Service-assets/Branding/process-02-v2.png",
      imageAlt: "Tekcorp logo and visual identity system",
    },
    {
      number: "03",
      title: "Application & Brand Toolkit",
      description: "The chosen direction is tested across real customer touchpoints and documented so teams can use it confidently.",
      bullets: ["Digital and campaign applications", "Logo files and reusable templates", "Practical brand guidelines"],
      image: "/assets/Service-assets/Branding/process-03-v2.png",
      imageAlt: "Tekcorp logo and branding application toolkit",
    },
  ],
};

export default function BrandingPage() {
  return (
    <StructuredServicePage
      pageClass="logo-branding-page"
      titleId="logo-branding-title"
      titleLines={["Logo & Branding Systems", "Built for Recognition"]}
      breadcrumb="Logo & Branding"
      overview={{
        kicker: "A clear identity with room to grow",
        title: "Be recognizable before people read the name.",
        paragraphs: [
          "We connect positioning, logo design and visual language into one coherent identity built around how the business wants to be understood.",
          "Every decision is tested against real applications, giving your team a brand system that is distinctive, useful and easier to maintain.",
        ],
        facts: [
          { value: "Distinct", label: "Original logo direction" },
          { value: "Coherent", label: "Identity system" },
          { value: "Practical", label: "Real applications" },
          { value: "Scalable", label: "Guidelines and tools" },
        ],
        cta: "Start a logo & branding project",
        image: "/assets/Service-assets/Branding/process-01-v2.png",
        imageAlt: "Tekcorp logo and branding identity presentation",
      }}
      capabilities={capabilities}
      process={process}
    />
  );
}
