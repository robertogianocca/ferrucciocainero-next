import type { MetadataRoute } from "next";
import { navigation, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...navigation.flatMap((item) => [item.href, ...(item.children ?? []).map((child) => child.href)]),
    "/attualita/",
  ];

  return [...new Set(paths)].map((path) => ({
    url: `${site.url}${path}`,
    priority: path === "/" ? 1 : 0.7,
  }));
}
