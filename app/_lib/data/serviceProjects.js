import connectServiceProjectsDatabase from
  "@/app/_lib/db/serviceProjectsMongo";

import ServiceProject from
  "@/app/_lib/models/ServiceProject";

import {
  getLocalServiceProjects,
} from
  "@/app/_lib/data/localServiceProjects";

const VALID_SOURCES = new Set([
  "auto",
  "database",
  "local",
]);

function getConfiguredSource() {
  const configured = String(
    process.env.SERVICE_PROJECTS_SOURCE || "auto",
  )
    .trim()
    .toLowerCase();

  return VALID_SOURCES.has(configured)
    ? configured
    : "auto";
}

function normalizeServiceSlug(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function normalizeLimit(value) {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return 4;
  }

  return Math.min(
    12,
    Math.max(1, Math.floor(parsed)),
  );
}

function serializeProject(project) {
  return {
    id:
      project?._id?.toString?.() ||
      project?.id ||
      project?.slug,

    title:
      project?.title || "Untitled Project",

    slug:
      project?.slug || "",

    category:
      project?.category || "Digital Product",

    summary:
      project?.summary || "",

    services:
      Array.isArray(project?.services)
        ? project.services
        : [],

    image: {
      src:
        project?.image?.src ||
        "/assets/Service-assets/Projects/project-01.png",

      alt:
        project?.image?.alt ||
        project?.title ||
        "TekCorp service project",
    },

    href:
      project?.href || "/Contact",

    featured:
      Boolean(project?.featured),

    order:
      Number(project?.order || 0),
  };
}

async function getDatabaseProjects({
  serviceSlug,
  limit,
}) {
  await connectServiceProjectsDatabase();

  const query = {
    status: "published",
  };

  if (serviceSlug) {
    query.services = serviceSlug;
  }

  const projects = await ServiceProject
    .find(query)
    .sort({
      featured: -1,
      order: 1,
      publishedAt: -1,
      createdAt: -1,
    })
    .limit(limit)
    .lean();

  return projects.map(serializeProject);
}

export async function getServiceProjects({
  serviceSlug,
  limit = 4,
} = {}) {
  const normalizedServiceSlug =
    normalizeServiceSlug(serviceSlug);

  const normalizedLimit =
    normalizeLimit(limit);

  const source =
    getConfiguredSource();

  if (source === "local") {
    return getLocalServiceProjects({
      serviceSlug: normalizedServiceSlug,
      limit: normalizedLimit,
    });
  }

  try {
    const databaseProjects =
      await getDatabaseProjects({
        serviceSlug: normalizedServiceSlug,
        limit: normalizedLimit,
      });

    if (
      databaseProjects.length > 0 ||
      source === "database"
    ) {
      return databaseProjects;
    }
  } catch (error) {
    if (source === "database") {
      throw error;
    }

    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[serviceProjects] Database unavailable. Using local service-project fallback.",
        error?.message || error,
      );
    }
  }

  return getLocalServiceProjects({
    serviceSlug: normalizedServiceSlug,
    limit: normalizedLimit,
  });
}
