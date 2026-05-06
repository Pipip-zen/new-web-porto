import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://rafifnuha.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/works/${project.slug}`,
    lastModified: new Date(`${project.year}-12-31`),
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...staticRoutes, ...projectRoutes];
}
