export const SERVICE_PAGES = {
  "web-engineering": {
    title: "Web Engineering Services",
    description:
      "Build scalable, secure and high-performance web platforms with TekCorp web engineering services covering architecture, frontend, backend, APIs and cloud delivery.",
  },
  "application-engineering": {
    title: "Application Engineering Services",
    description:
      "Build reliable mobile, desktop and cross-platform applications with TekCorp application engineering services and scalable software architecture.",
  },
  "maintenance-support": {
    title: "Maintenance & Support Services",
    description:
      "Keep critical digital systems reliable with TekCorp maintenance and support services, dedicated technical ownership, monitoring and continuous optimization.",
  },
  "prototyping-ui-ux-design": {
    title: "Prototyping & UI/UX Design Services",
    description:
      "Validate digital product ideas through TekCorp UI/UX design and prototyping services, including research, wireframes, user journeys and high-fidelity interfaces.",
  },
  "quality-assurance-testing": {
    title: "Quality Assurance & Software Testing Services",
    description:
      "Improve software quality and release confidence with TekCorp QA and testing services covering test strategy, execution, validation and reporting.",
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES);

export function getServicePage(slug) {
  return SERVICE_PAGES[slug] || null;
}
