import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path with trailing slash, e.g. "/media/foto/" */
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
};

/**
 * Builds per-page metadata. Next.js replaces (not merges) the `openGraph`
 * object of the root layout, so every page gets the full set here.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = site.ogImage,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "it_CH",
      alternateLocale: ["de_CH"],
      url: path,
      title: `${title} – ${site.name}`,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} – ${site.name}`,
      description,
      images: [image.url],
    },
  };
}
