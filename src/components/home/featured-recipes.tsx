import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { recipes } from "@/content/recipes";
import { featureCardData } from "@/content/home";
import { getRecipeImage } from "@/content/images";
import { PageContainer, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillTag } from "@/components/ui/tag";
import { RecipeGrid } from "@/components/recipe/recipe-grid";
import { SplitCta } from "@/components/ui/button";
import { DividerWithEndDots } from "@/components/ui/divider";

/** Section: featured recipe card (split layout) + recipe grid below. */
export function FeaturedRecipes() {
  return (
    <Section ariaLabel="Resep pilihan">
      <PageContainer>
        <div
          className="rounded-container border border-line-subtle p-[18px] grid tablet:grid-cols-2 gap-6 tablet:gap-8"
          style={{ background: "var(--gradient-feature_card)" }}
        >
          <div className="relative rounded-[16px] min-h-[300px] tablet:min-h-[460px] border border-line-subtle overflow-hidden bg-page">
            <Image
              src={getRecipeImage("poc-limbah-buah")}
              alt="Foto resep unggulan: POC dari limbah buah"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center py-[46px] tablet:pl-[60px]">
            <Eyebrow>{featureCardData.eyebrow}</Eyebrow>
            <PillTag className="mt-3 self-start">{featureCardData.pill}</PillTag>
            <h3 className="type-h3-feature-title mt-4 text-ink max-w-[360px]">
              {featureCardData.title}
            </h3>
            <p className="type-body-large mt-4 text-ink-muted max-w-[420px]">
              {featureCardData.description}
            </p>
            <div className="mt-7">
              <SplitCta href={featureCardData.ctaHref}>{featureCardData.ctaLabel}</SplitCta>
            </div>
            <DividerWithEndDots className="mt-10 max-w-[350px]" />
            <p className="type-meta text-ink-subtle mt-4">
              {recipes.length} resep tersedia. Mulai dari bahan limbah dapur hingga resep khusus berbasis buah tertentu.
            </p>
          </div>
        </div>

        <div className="mt-[140px] flex items-center justify-between gap-6">
          <h2 className="type-h2-section-title">Resep Lainnya</h2>
          <Link
            href="/resep"
            className="hidden tablet:inline-flex items-center gap-2 type-button-label text-ink-soft hover:text-ink transition-colors"
          >
            Lihat semua
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </div>

        <RecipeGrid recipes={recipes.slice(0, 3)} columns={3} />

        <div className="mt-12 flex justify-center">
          <SplitCta href="/resep">Lihat Semua Resep</SplitCta>
        </div>
      </PageContainer>
    </Section>
  );
}