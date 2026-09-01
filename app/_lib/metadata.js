export function buildPageMetadata({
  title,
  description,
  canonical,
  image,
}) {
  const images = image ? [{ url: image }] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | TekCorp`,
      description,
      url: canonical,
      siteName: "TekCorp",
      type: "website",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | TekCorp`,
      description,
      ...(images ? { images } : {}),
    },
  };
}
