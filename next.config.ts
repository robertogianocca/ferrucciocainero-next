import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Keep the URL format of the original WordPress site (/biography/, /media/foto/ …).
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Legacy WordPress URLs
      { source: "/home", destination: "/", permanent: true },
      { source: "/2024/07/09/953", destination: "/attualita/", permanent: true },
      { source: "/events/:slug", destination: "/calendario/", permanent: true },
      {
        source: "/wp-content/uploads/2020/04/curriculum.pdf",
        destination: "/downloads/cv/ferruccio-cainero-curriculum.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2020/04/lebenslauf.pdf",
        destination: "/downloads/cv/ferruccio-cainero-lebenslauf.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
