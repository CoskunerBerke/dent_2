import { MetadataRoute } from "next";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";
import { siteSettings } from "@/data/siteSettings";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteSettings.seo.siteUrl;

  // Static routes
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/hekimlerimiz",
    "/tedaviler",
    "/vaka-galerisi",
    "/klinigimiz",
    "/iletisim",
    "/kvkk",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic treatments
  const treatmentRoutes = treatments.map((t) => ({
    url: `${baseUrl}/tedaviler/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic doctors
  const doctorRoutes = doctors.map((d) => ({
    url: `${baseUrl}/hekimlerimiz/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...doctorRoutes];
}
