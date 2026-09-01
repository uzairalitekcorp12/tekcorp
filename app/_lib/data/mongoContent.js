import "server-only";


function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function firstText(...values) {
  for (const value of values.flat()) {
    const text = textValue(value);

    if (text) {
      return text;
    }
  }

  return "";
}


function objectValue(value) {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value
    : null;
}


function objectText(value) {
  if (typeof value === "string") {
    return value.trim();
  }

  if (Array.isArray(value)) {
    return value
      .map(objectText)
      .filter(Boolean)
      .join("\n\n");
  }

  const source = objectValue(value);

  if (!source) {
    return "";
  }

  return firstText(
    source.text,
    source.content,
    source.description,
    source.body,
    source.paragraph,
    source.copy,
    source.value,
  );
}


function imageValue(value) {
  if (typeof value === "string") {
    return value.trim();
  }

  const source = objectValue(value);

  return source
    ? firstText(
        source.url,
        source.src,
        source.image,
        source.imageUrl,
        source.image_url,
      )
    : "";
}


function toIsoDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? textValue(value)
    : date.toISOString();
}


function objectIdValue(value) {
  return value == null
    ? ""
    : String(value);
}


export function createSlug(value, fallback = "") {
  const source = textValue(value);

  if (!source) {
    return textValue(fallback);
  }

  return source
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^https?:\/\/[^/]+/i, "")
    .replace(/^\/?(?:insights|case-studies)\//i, "")
    .replace(/[?#].*$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 200)
    .replace(/-+$/g, "") || textValue(fallback);
}


export function isPublishedRecord(record) {
  const status = textValue(record?.status).toLowerCase();

  if (status) {
    return [
      "published",
      "publish",
      "active",
      "live",
    ].includes(status);
  }

  return record?.published !== false;
}


function normalizeTags(values) {
  const tags = values
    .flat()
    .flatMap((value) => {
      if (typeof value === "string") {
        return [value];
      }

      if (Array.isArray(value)) {
        return normalizeTags(value);
      }

      const source = objectValue(value);

      return source
        ? [
            firstText(
              source.name,
              source.title,
              source.label,
              source.technology,
              source.value,
            ),
          ]
        : [];
    })
    .map(textValue)
    .filter(Boolean);

  return Array.from(
    new Map(
      tags.map((tag) => [
        tag.toLowerCase(),
        tag,
      ]),
    ).values(),
  );
}


function paragraphBlocks(value) {
  return textValue(value)
    .split(/\r?\n\s*\r?\n/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text) => ({
      type: "paragraph",
      text,
    }));
}


function normalizeBlogBlock(entry) {
  if (typeof entry === "string") {
    const text = textValue(entry);

    return paragraphBlocks(text);
  }

  const source = objectValue(entry);

  if (!source) {
    return [];
  }

  const kind = firstText(
    source.type,
    source.blockType,
    source.kind,
  ).toLowerCase();

  const heading = firstText(
    source.heading,
    source.subheading,
    source.sub_heading,
    source.headingText,
    source.heading_text,
    source.title,
  );

  const body = firstText(
    source.text,
    source.content,
    source.paragraph,
    source.description,
    source.body,
    source.copy,
  );

  const image = imageValue(
    source.image ||
      source.imageUrl ||
      source.image_url ||
      source.media ||
      source.src,
  );

  const caption = firstText(
    source.caption,
    source.alt,
    source.imageAlt,
    source.image_alt,
  );

  if (
    image ||
    kind === "image" ||
    kind === "photo"
  ) {
    const blocks = image
      ? [
          {
            type: "image",
            image,
            alt: caption,
            text: caption,
          },
        ]
      : [];

    if (body && body !== caption) {
      blocks.push(
        ...paragraphBlocks(body),
      );
    }

    return blocks;
  }

  if (
    kind === "heading" ||
    kind === "title" ||
    /^h[1-6]$/.test(kind)
  ) {
    const text = heading || body;

    return text
      ? [
          {
            type: "heading",
            text,
          },
        ]
      : [];
  }

  const blocks = [];

  if (heading && body && heading !== body) {
    blocks.push({
      type: "heading",
      text: heading,
    });
  }

  if (body || heading) {
    blocks.push(
      ...paragraphBlocks(body || heading),
    );
  }

  return blocks;
}


function normalizeBlogContent(value) {
  return Array.isArray(value)
    ? value.flatMap(normalizeBlogBlock)
    : [];
}


function normalizeCaseSection([key, value]) {
  const source = objectValue(value);
  const fallbackHeading = String(key)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim();

  const heading = source
    ? firstText(
        source.heading,
        source.title,
        source.label,
        source.name,
        fallbackHeading,
      )
    : fallbackHeading;

  const content = source
    ? objectText(
        source.content ||
          source.description ||
          source.text ||
          source.body ||
          source.paragraph ||
          source.copy ||
          source.details,
      )
    : objectText(value);

  return heading || content
    ? {
        heading,
        content,
      }
    : null;
}


function normalizeCaseSections(value) {
  const entries = Array.isArray(value)
    ? value.map((section, index) => [
        `Section ${index + 1}`,
        section,
      ])
    : Object.entries(objectValue(value) || {});

  return entries
    .map(normalizeCaseSection)
    .filter(Boolean);
}


function toParagraphs(value) {
  const source = Array.isArray(value)
    ? value.map(objectText).filter(Boolean)
    : [objectText(value)].filter(Boolean);

  return source.flatMap((paragraph) =>
    paragraph
      .split(/\r?\n\s*\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean),
  );
}


function normalizeTextBlocks(value) {
  return Array.isArray(value)
    ? value
        .map((block) => {
          const source = objectValue(block) || {};
          const title = firstText(
            source.title,
            source.heading,
            source.label,
          );
          const text = objectText(
            source.text ||
              source.content ||
              source.description ||
              source.paragraph ||
              block,
          );

          return title || text
            ? {
                title,
                text,
                icon: imageValue(source.icon),
              }
            : null;
        })
        .filter(Boolean)
    : [];
}


function normalizeMetrics(value) {
  return Array.isArray(value)
    ? value
        .map((metric) => {
          const source = objectValue(metric) || {};
          const valueText = firstText(
            source.value,
            source.metric,
            source.number,
          );
          const label = firstText(
            source.label,
            source.title,
            source.text,
          );

          return valueText || label
            ? {
                value: valueText,
                label,
              }
            : null;
        })
        .filter(Boolean)
    : [];
}


function normalizeProblems(value) {
  const source = objectValue(value) || {};
  const problems = normalizeTextBlocks(source.problems).map(
    (problem, index) => {
      const raw = objectValue(source.problems?.[index]) || {};

      return {
        ...problem,
        variant: firstText(raw.variant, "small"),
        highlighted: Boolean(raw.highlighted),
      };
    },
  );

  return {
    kicker: firstText(source.kicker, "Case Study"),
    heading: firstText(source.heading),
    leftParas: toParagraphs(source.leftParas),
    rightHeading: firstText(source.rightHeading),
    problems,
  };
}


function normalizeStructuredCaseStudySections(value) {
  const source = objectValue(value) || {};
  const impact = objectValue(source.impact) || {};
  const process = objectValue(source.process) || {};
  const result = objectValue(source.result) || {};

  return {
    problems: normalizeProblems(source.problems),
    impact: {
      metrics: normalizeMetrics(impact.metrics),
      collageImage: imageValue(impact.collageImage),
      blocks: normalizeTextBlocks(impact.blocks),
    },
    process: {
      heading: firstText(process.heading),
      steps: normalizeTextBlocks(process.steps),
    },
    result: {
      heading: firstText(result.heading),
      paras: toParagraphs(result.paras),
      mediaImage: imageValue(result.mediaImage),
      mediaVideo: firstText(result.mediaVideo),
      metrics: normalizeMetrics(result.metrics),
    },
  };
}


function normalizeTechnologies(value) {
  return Array.isArray(value)
    ? value
        .map((technology) => {
          const source = objectValue(technology);
          const name = source
            ? firstText(
                source.name,
                source.title,
                source.label,
                source.technology,
              )
            : textValue(technology);

          return name
            ? {
                name,
                icon: source
                  ? imageValue(source.icon)
                  : "",
              }
            : null;
        })
        .filter(Boolean)
    : [];
}


function normalizeGallery(value) {
  const images = Array.isArray(value)
    ? value.map(imageValue)
    : [];

  return Array.from(
    new Set(
      images.filter(Boolean),
    ),
  );
}


export function normalizeMongoBlog(record) {
  const title = firstText(record?.title, record?.name);
  const id = objectIdValue(record?._id);
  const slug = createSlug(
    firstText(record?.slug, record?.slug_url),
    createSlug(title, `blog-${id.slice(-8)}`),
  );

  if (!title || !slug) {
    return null;
  }

  const image = imageValue(
    record?.blog_image ||
      record?.thumbnail ||
      record?.heroImage ||
      record?.image,
  );

  return {
    _id: id,
    title,
    slug,
    category: firstText(record?.category, record?.categoryName),
    tags: normalizeTags([record?.tags, record?.keywords]),
    excerpt: firstText(
      record?.brief_paragraph,
      record?.excerpt,
      record?.summary,
      record?.description,
    ),
    metaTitle: firstText(record?.metaTitle, record?.meta_title),
    metaDescription: firstText(
      record?.metaDescription,
      record?.meta_description,
    ),
    canonicalLink: firstText(
      record?.canonicalLink,
      record?.canonical_link,
    ),
    thumbnail: image,
    heroImage: imageValue(record?.heroImage) || image,
    author: objectValue(record?.author) || undefined,
    content: normalizeBlogContent(
      record?.blogs_content ||
        record?.content ||
        record?.blocks,
    ),
    trending: Boolean(record?.trending),
    featured: Boolean(record?.featured),
    status: "published",
    publishedAt: toIsoDate(
      record?.publishedAt ||
        record?.published_date ||
        record?.publishedDate,
    ),
    createdAt: toIsoDate(record?.createdAt),
    updatedAt: toIsoDate(record?.updatedAt),
  };
}


export function normalizeMongoCaseStudy(record) {
  const id = objectIdValue(record?._id);
  const client = firstText(record?.clientName, record?.client);
  const title = firstText(
    record?.heroHeading,
    record?.title,
    client,
  );
  const slug = createSlug(
    firstText(record?.slug, record?.slug_url),
    createSlug(client || title, `case-study-${id.slice(-8)}`),
  );

  if (!title || !slug) {
    return null;
  }

  const image = imageValue(
    record?.bannerImage ||
      record?.thumbnail ||
      record?.heroImage ||
      record?.image,
  );

  return {
    _id: id,
    title,
    slug,
    client,
    category: firstText(
      record?.industry,
      record?.category,
      record?.category1,
      "Case Study",
    ),
    tags: normalizeTags([
      record?.tags,
      record?.technologies,
      record?.category1,
      record?.category2,
      record?.category3,
      record?.category4,
    ]),
    shortDescription: firstText(
      record?.industryText,
      record?.shortDescription,
      record?.description,
      record?.summary,
    ),
    thumbnail: image,
    heroImage: imageValue(record?.heroImage) || image,
    sections: normalizeCaseSections(record?.sections),
    structuredSections:
      normalizeStructuredCaseStudySections(record?.sections),
    gallery: normalizeGallery(
      record?.gallery ||
        record?.images ||
        record?.projectImages,
    ),
    technologies: normalizeTechnologies(record?.technologies),
    video: firstText(record?.video),
    featured: Boolean(record?.featured),
    status: "published",
    createdAt: toIsoDate(record?.createdAt),
    updatedAt: toIsoDate(record?.updatedAt),
  };
}


export function ensureUniqueSlugs(records) {
  const counts = new Map();

  records.forEach((record) => {
    counts.set(
      record.slug,
      (counts.get(record.slug) || 0) + 1,
    );
  });

  return records.map((record) => {
    if (counts.get(record.slug) === 1) {
      return record;
    }

    const suffix = record._id.slice(-8);

    return {
      ...record,
      slug: suffix
        ? `${record.slug}-${suffix}`
        : record.slug,
    };
  });
}


export function newestFirst(first, second) {
  const firstDate = new Date(
    first.publishedAt ||
      first.createdAt ||
      0,
  ).getTime();
  const secondDate = new Date(
    second.publishedAt ||
      second.createdAt ||
      0,
  ).getTime();

  return secondDate - firstDate;
}


export {
  textValue,
  toIsoDate,
};
