export const localServiceProjects = [
  {
    id: "local-spring-labs",
    title: "Spring Labs - Disrupting How Financial Info Is Shared.",
    slug: "spring-labs-financial-platform",
    category: "Websites & Digital Platforms",
    summary: "A collaborative financial information platform experience.",
    services: [
      "web-engineering",
      "prototyping-ui-ux-design",
    ],
    image: {
      src: "/assets/Service-assets/Projects/project-01.png",
      alt: "Spring Labs collaborative platform interface",
    },
    href: "/Contact",
    featured: true,
    order: 1,
  },
  {
    id: "local-healto",
    title: "Healto - Evolving Healthcare Systems",
    slug: "healto-healthcare-platform",
    category: "Websites & Digital Platforms",
    summary: "A modern healthcare product interface and information experience.",
    services: [
      "application-engineering",
      "prototyping-ui-ux-design",
    ],
    image: {
      src: "/assets/Service-assets/Projects/project-02.png",
      alt: "Healto healthcare system interface",
    },
    href: "/Contact",
    featured: true,
    order: 2,
  },
  {
    id: "local-product-dashboard",
    title: "Operational Product Dashboard",
    slug: "operational-product-dashboard",
    category: "Product Design & Analytics",
    summary: "A data-rich interface designed for fast decisions and clear workflows.",
    services: [
      "web-engineering",
      "application-engineering",
      "prototyping-ui-ux-design",
    ],
    image: {
      src: "/assets/Service-assets/Projects/project-03.png",
      alt: "Operational product dashboard interface",
    },
    href: "/Contact",
    featured: false,
    order: 3,
  },
  {
    id: "local-collaboration",
    title: "Collaborative App for Creative Teams",
    slug: "creative-team-collaboration",
    category: "Websites & Digital Platforms",
    summary: "A collaborative workspace with a focused, easy-to-understand product experience.",
    services: [
      "prototyping-ui-ux-design",
      "application-engineering",
    ],
    image: {
      src: "/assets/Service-assets/Projects/project-04.png",
      alt: "Collaborative application for creative teams",
    },
    href: "/Contact",
    featured: false,
    order: 4,
  },
];

export function getLocalServiceProjects({
  serviceSlug,
  limit = 4,
} = {}) {
  const normalizedServiceSlug =
    String(serviceSlug || "")
      .trim()
      .toLowerCase();

  const filtered = normalizedServiceSlug
    ? localServiceProjects.filter((project) =>
        project.services.includes(normalizedServiceSlug),
      )
    : localServiceProjects;

  return filtered
    .slice()
    .sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      return a.order - b.order;
    })
    .slice(0, Math.max(1, limit));
}
