import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Recipe } from "@/content/recipes";
import { ChipTag } from "@/components/ui/tag";
import { getRecipeImage } from "@/content/images";

interface RecipeCardProps {
  recipe: Recipe;
  variant?: "purple-tint" | "neutral-dark";
}

/** Recipe card used in the recipe grid: media, title, summary,
 *  fermentation duration, tag chips, and an orange arrow action
 *  described in the design system. */
export function RecipeCard({ recipe, variant = "purple-tint" }: RecipeCardProps) {
  const imgSrc = getRecipeImage(recipe.slug);
  return (
    <article
      className="group flex flex-col rounded-card border border-line-subtle p-[18px] transition-transform duration-[220ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-line-violet"
      style={{
        background:
          variant === "purple-tint"
            ? "var(--gradient-card_purple_tint)"
            : "var(--gradient-card_neutral_dark)",
      }}
    >
      <div className="relative h-[236px] rounded-[16px] overflow-hidden border border-line-subtle bg-page">
        <Image
            src={imgSrc}
            alt={`Foto resep ${recipe.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        <div className="pointer-events-none absolute inset-0 group-hover:bg-black/0 transition-colors" />
        <div
          className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between"
          style={{ background: "var(--gradient-image_overlay_scrim)" }}
        >
          <span className="type-meta text-ink-subtle italic">{recipe.fermentationDuration}</span>
          <Link
            href={`/resep/${recipe.slug}`}
            aria-label={`Buka resep ${recipe.title}`}
            className="icon-circle icon-circle-orange w-[38px] h-[38px]"
          >
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-ink-subtle">
        <Clock size={14} strokeWidth={1.5} />
        <span className="type-meta">Persiapan {recipe.preparationTime}</span>
      </div>
      <h3 className="mt-[10px] type-card-title text-ink">{recipe.title}</h3>
      <p className="mt-[10px] type-body text-ink-muted line-clamp-2">{recipe.summary}</p>
      <ul className="mt-[14px] flex flex-wrap gap-2">
        {recipe.mainIngredients.slice(0, 3).map((ing) => (
          <li key={ing}>
            <ChipTag>{ing}</ChipTag>
          </li>
        ))}
      </ul>
    </article>
  );
}