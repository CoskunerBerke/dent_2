import { MetadataRoute } from "next";
import { siteSettings } from "@/data/siteSettings";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteSettings.seo.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
