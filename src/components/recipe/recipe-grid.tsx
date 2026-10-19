import type { Recipe } from "@/content/recipes";
import { RecipeCard } from "./recipe-card";

interface RecipeGridProps {
  recipes: Recipe[];
  columns?: 2 | 3;
}

/** Responsive grid of recipe cards. */
export function RecipeGrid({ recipes, columns = 3 }: RecipeGridProps) {
  const colsClass =
    columns === 2
      ? "tablet:grid-cols-2"
      : "tablet:grid-cols-2 desktop:grid-cols-3";
  return (
    <ul className={`grid gap-6 ${colsClass}`}>
      {recipes.map((r) => (
        <li key={r.slug}>
          <RecipeCard recipe={r} />
        </li>
      ))}
    </ul>
  );
}