import type { MetadataRoute } from "next";

const baseUrl = "https://portfolio-meriem-zemane.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add one entry per page you have, for example:
    { url: `${baseUrl}`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: new Date(), priority: 0.8 },
  ];
}
