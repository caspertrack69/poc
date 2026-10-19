// Central route list used by sitemap + nav checks. Keep in sync with
// src/app/<route>/page.tsx files.
export const ROUTES = {
  home: "/",
  guide: "/panduan",
  recipes: "/resep",
  about: "/tentang-poc",
  faq: "/faq",
} as const;

export const STATIC_ROUTES: string[] = [
  ROUTES.home,
  ROUTES.guide,
  ROUTES.recipes,
  ROUTES.about,
  ROUTES.faq,
];

export const recipeRoute = (slug: string) => `${ROUTES.recipes}/${slug}` as const;