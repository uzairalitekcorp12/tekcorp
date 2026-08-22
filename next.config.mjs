const rewrites = [
  {
    source: "/home",
    destination: "/?view=home",
  },
  {
    source: "/Home",
    destination: "/?view=home",
  },
  {
    source: "/about",
    destination: "/?view=about",
  },
  {
    source: "/About",
    destination: "/?view=about",
  },
  {
    source: "/contact",
    destination: "/?view=contact",
  },
  {
    source: "/Contact",
    destination: "/?view=contact",
  },
  {
    source: "/services/web-engineering",
    destination: "/?view=web-engineering",
  },
  {
    source: "/services/application-engineering",
    destination: "/?view=application-engineering",
  },
  {
    source: "/services/maintenance-support",
    destination: "/?view=maintenance-support",
  },
  {
    source: "/services/prototyping-ui-ux-design",
    destination: "/?view=prototyping-ui-ux-design",
  },
  {
    source: "/services/quality-assurance-testing",
    destination: "/?view=quality-assurance-testing",
  },
];


const nextConfig = {
  async rewrites() {
    return rewrites;
  },
};


export default nextConfig;
