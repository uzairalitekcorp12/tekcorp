import Navbar from
  "@/app/_shared/Navbar/Navbar";

import Footer2 from
  "@/app/_shared/Footer/Footer2";

import PrototypingDesignPage from
  "@/app/main-website-components/PrototypingDesignPage/PrototypingDesignPage";

import {
  getServiceProjects,
} from
  "@/app/_lib/data/serviceProjects";

export default async function PrototypingDesign() {
  const projects =
    await getServiceProjects({
      serviceSlug:
        "prototyping-ui-ux-design",

      limit:
        4,
    });

  return (
    <div
      className="tek-service-route"
      data-page="prototyping-ui-ux-design"
    >
      <Navbar
        variant="default"
        initialActiveTab="Our Solutions"
        homeHref="/Home"
        ctaHref="/Contact"
      />

      <main>
        <PrototypingDesignPage
          projects={projects}
        />
      </main>

      <Footer2
        contactHref="/Contact"
      />
    </div>
  );
}
