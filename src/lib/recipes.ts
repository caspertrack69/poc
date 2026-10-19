import { recipes, type Recipe } from "@/content/recipes";

/** All recipes, in declared order. */
export function getAllRecipes(): Recipe[] {
  return recipes;
}

/** Fetch a single recipe by its slug, or null if not found. */
export function getRecipeBySlug(slug: string): Recipe | null {
  return recipes.find((r) => r.slug === slug) ?? null;
}

/** Related recipes by slug list. Skips self / missing slugs. */
export function getRelatedRecipes(recipe: Recipe, limit = 2): Recipe[] {
  if (!recipe.relatedRecipes || recipe.relatedRecipes.length === 0) {
    return recipes.filter((r) => r.slug !== recipe.slug).slice(0, limit);
  }
  return recipe.relatedRecipes
    .map((slug) => recipes.find((r) => r.slug === slug))
    .filter((r): r is Recipe => r != null && r.slug !== recipe.slug)
    .slice(0, limit);
}