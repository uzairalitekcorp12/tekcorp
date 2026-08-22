const IMAGE_LIBRARY = [
  {
    keys: [
      "ai",
      "automation",
      "data",
      "machine",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
  },

  {
    keys: [
      "web",
      "website",
      "javascript",
      "frontend",
      "engineering",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85",
  },

  {
    keys: [
      "mobile",
      "app",
      "application",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1800&q=85",
  },

  {
    keys: [
      "ui",
      "ux",
      "design",
      "prototype",
    ],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85",
  },

  {
    keys: [
      "commerce",
      "e-commerce",
      "marketplace",
      "growth",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
  },

  {
    keys: [
      "saas",
      "dashboard",
      "portal",
      "product",
      "software",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
  },
];


const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
];


function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function stableIndex(value, length) {
  const text =
    textValue(value);

  const total =
    [...text].reduce(
      (sum, character) =>
        sum + character.charCodeAt(0),
      0,
    );

  return length
    ? total % length
    : 0;
}


export function contentImage(
  item,
  fallback = "article",
) {
  const source =
    [
      item?.title,
      item?.category,
      ...(Array.isArray(item?.tags)
        ? item.tags
        : []),
    ]
      .map(textValue)
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

  const matched =
    IMAGE_LIBRARY.find(
      (entry) =>
        entry.keys.some(
          (key) =>
            source.includes(key),
        ),
    );

  if (matched) {
    return matched.image;
  }

  return DEFAULT_IMAGES[
    stableIndex(
      `${fallback}-${item?.slug || item?.title}`,
      DEFAULT_IMAGES.length,
    )
  ];
}
