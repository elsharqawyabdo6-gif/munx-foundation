import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export function constructMetadata({
  title,
  description,
  path = "",
  image = siteConfig.ogImage,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description ?? siteConfig.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: title ?? siteConfig.title,
      description: description ?? siteConfig.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.title,
      description: description ?? siteConfig.description,
      images: [image],
    },
  };
}

export function generateJsonLd(schema: Record<string, unknown>) {
  return {
    __html: JSON.stringify(schema),
  };
}
