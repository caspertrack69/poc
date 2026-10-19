import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { STATIC_ROUTES, recipeRoute } from "@/lib/routes";
import { getAllRecipes } from "@/lib/recipes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
  const recipeEntries: MetadataRoute.Sitemap = getAllRecipes().map((r) => ({
    url: new URL(recipeRoute(r.slug), siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));
  return [...staticEntries, ...recipeEntries];
}