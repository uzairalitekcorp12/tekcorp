import StructuredServicePage from "../StructuredServicePage/StructuredServicePage";

const capabilities = {
  title: "Everything a modern commerce operation needs to sell and scale.",
  items: [
    { title: "Storefront Engineering", description: "Responsive, high-performance shopping experiences designed around product discovery." },
    { title: "Checkout & Payments", description: "Clear checkout journeys with dependable payment, tax and transaction logic." },
    { title: "Catalogue Management", description: "Flexible product, pricing, variant and collection structures for growing catalogues." },
    { title: "Inventory & Fulfilment", description: "Connect availability, orders, shipping and back-office operational workflows." },
    { title: "Customer Accounts", description: "Useful account, order-history and service experiences that support retention." },
    { title: "Commerce Integrations", description: "Connect ERP, CRM, payment, logistics, analytics and marketing systems." },
    { title: "Conversion Optimization", description: "Remove friction from important product, cart and checkout interactions." },
    { title: "Analytics & Growth", description: "Measure acquisition, product behavior, revenue and repeat-purchase signals." },
  ],
};

const process = {
  title: "From commerce strategy to a dependable buying experience",
  steps: [
    {
      number: "01",
      title: "Discovery & Commerce Strategy",
      description: "We connect customer journeys, catalogue needs, commercial priorities and operational constraints into one delivery plan.",
      bullets: ["Customer and purchase journeys", "Catalogue and operational requirements", "Platform and integration architecture"],
      image: "/assets/Service-assets/EcommerceDevelopment/process-01-v2.png",
      imageAlt: "Tekcorp ecommerce planning and storefront experience",
    },
    {
      number: "02",
      title: "Storefront & Platform Engineering",
      description: "The customer experience and operational platform are engineered together, from product discovery through payment and fulfilment.",
      bullets: ["Responsive storefront system", "Checkout and payment flows", "Inventory and fulfilment connections"],
      image: "/assets/Service-assets/EcommerceDevelopment/process-02-v2.png",
      imageAlt: "Tekcorp ecommerce storefront and checkout workflow",
    },
    {
      number: "03",
      title: "Launch, Measure & Improve",
      description: "We validate the complete order journey, release with monitoring and use commercial data to guide the next improvements.",
      bullets: ["End-to-end transaction testing", "Analytics and conversion tracking", "Optimization and product evolution"],
      image: "/assets/Service-assets/EcommerceDevelopment/process-03-v2.png",
      imageAlt: "Tekcorp ecommerce operations and analytics workspace",
    },
  ],
};

export default function EcommerceDevelopmentPage() {
  return (
    <StructuredServicePage
      pageClass="ecommerce-development-page"
      titleId="ecommerce-development-title"
      titleLines={["Ecommerce Platforms Built", "to Convert and Scale"]}
      breadcrumb="Ecommerce Development"
      overview={{
        kicker: "Storefront and operations working as one",
        title: "Build a commerce platform that performs beyond checkout.",
        paragraphs: [
          "We create ecommerce experiences that connect product discovery and conversion with the operational systems behind every order.",
          "Customers get a clear, fast buying journey while your team gets a platform designed for catalogue growth, fulfilment and measurable improvement.",
        ],
        facts: [
          { value: "Fast", label: "Responsive storefront" },
          { value: "Connected", label: "Commerce operations" },
          { value: "Secure", label: "Payments and data" },
          { value: "Measurable", label: "Revenue journeys" },
        ],
        cta: "Discuss your commerce platform",
        image: "/assets/Service-assets/EcommerceDevelopment/process-01-v2.png",
        imageAlt: "Tekcorp ecommerce storefront and operations platform",
      }}
      capabilities={capabilities}
      process={process}
    />
  );
}
