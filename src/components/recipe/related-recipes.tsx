import type { Recipe } from "@/content/recipes";
import { getRelatedRecipes } from "@/lib/recipes";
import { PageContainer, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RecipeGrid } from "@/components/recipe/recipe-grid";

interface RelatedRecipesProps {
  recipe: Recipe;
}

/** "Resep terkait" block: 2 related recipes using the recipe grid. */
export function RelatedRecipes({ recipe }: RelatedRecipesProps) {
  const related = getRelatedRecipes(recipe, 2);
  if (related.length === 0) return null;
  return (
    <Section ariaLabel="Resep terkait" className="!py-[80px]">
      <PageContainer>
        <SectionHeading title="Resep Terkait" align="left" />
        <RecipeGrid recipes={related} columns={2} />
      </PageContainer>
    </Section>
  );
}