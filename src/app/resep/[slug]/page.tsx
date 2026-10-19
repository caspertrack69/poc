import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/ui/container";
import { Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillTag } from "@/components/ui/tag";
import { SplitCta } from "@/components/ui/button";
import { IngredientList } from "@/components/recipe/ingredient-list";
import { EquipmentList } from "@/components/recipe/equipment-list";
import { InstructionStep } from "@/components/guide/instruction-step";
import { RecipeMetadata } from "@/components/recipe/recipe-metadata";
import { RelatedRecipes } from "@/components/recipe/related-recipes";
import { Callout } from "@/components/ui/callout";
import { BackToTop } from "@/components/guide/back-to-top";
import { TableOfContents } from "@/components/guide/table-of-contents";
import { getAllRecipes, getRecipeBySlug } from "@/lib/recipes";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllRecipes().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return {};
  return buildPageMetadata({
    title: recipe.title,
    description: recipe.summary,
    path: `/resep/${slug}`,
  });
}

export default async function ResepDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const tocItems = [
    { id: "metadata", label: "Informasi" },
    { id: "bahan", label: "Bahan" },
    { id: "alat", label: "Alat" },
    { id: "langkah", label: "Langkah Pembuatan" },
    { id: "hasil", label: "Pemeriksaan Hasil" },
    { id: "aplikasi", label: "Pengenceran & Aplikasi" },
    { id: "keselamatan", label: "Catatan Keselamatan" },
  ];

  return (
    <article>
      <PageContainer className="pt-[120px] flex flex-col items-center text-center">
        <Eyebrow>Resep POC</Eyebrow>
        <PillTag className="mt-3 self-center">{recipe.category}</PillTag>
        <h1 className="type-h1-page-title mt-3 max-w-[680px]">{recipe.title}</h1>
        <p className="type-body mt-4 max-w-[520px] text-ink-muted">
          {recipe.summary}
        </p>
      </PageContainer>

      <PageContainer className="mt-[80px] grid tablet:grid-cols-[240px_1fr] gap-[64px]">
        <TableOfContents items={tocItems} className="hidden tablet:block print-hidden" />

        <div className="space-y-[56px]">
          <section id="metadata" className="scroll-mt-[120px]">
            <SectionHeading title="Informasi" align="left" />
            <div className="mt-8">
              <RecipeMetadata
              preparationTime={recipe.preparationTime}
              fermentationDuration={recipe.fermentationDuration}
              estimatedYield={`Sekitar 8-10 liter`}
              targetPlants={recipe.targetPlants}
            />
          </div>
          </section>

          <section id="bahan" className="scroll-mt-[120px]">
            <SectionHeading title="Bahan" align="left" />
            <IngredientList ingredients={recipe.ingredients} className="mt-8" />
            <p className="type-meta mt-4 text-ink-subtle">
              Bahan organik segar menghasilkan kandungan nutrisi yang lebih baik. Hindari bahan berlendir atau berbau busuk.
            </p>
          </section>

          <section id="alat" className="scroll-mt-[120px]">
            <SectionHeading title="Alat" align="left" />
            <EquipmentList equipment={recipe.equipment} className="mt-8" />
          </section>

          <section id="langkah" className="scroll-mt-[120px]">
            <SectionHeading title="Langkah Pembuatan" align="left" />
            <div className="mt-8 space-y-5">
              {recipe.steps.map((s) => (
                <InstructionStep
                  key={s.number}
                  number={s.number}
                  title={s.title}
                  objective={s.description}
                  instructions={s.instructions}
                  successIndicator={s.successIndicator}
                  note={s.note}
                />
              ))}
            </div>
          </section>

          <section id="hasil" className="scroll-mt-[120px]">
            <SectionHeading title="Pemeriksaan Hasil" align="left" />
            <div className="mt-8">
              <Callout variant="success">
                <ul>
                  {recipe.resultCheck.map((c, i) => (
                    <li key={i}>{c}</li>
          ))}
        </ul>
      </Callout>
    </div>
        </section>

          <section id="aplikasi" className="scroll-mt-[120px]">
            <SectionHeading title="Pengenceran & Aplikasi" align="left" />
            <ul className="mt-8 space-y-3">
              {recipe.dilution.map((d, i) => (
                <li key={i} className="flex gap-3 type-body text-ink-muted">
                  <span className="text-violet-400 flex-shrink-0" aria-hidden="true">•</span>
                  <span>{d}</span>
    </li>
  ))}
      </ul>
            <h3 className="type-h3-feature-title mt-8 text-ink">Cara Aplikasi</h3>
        <ul className="mt-4 space-y-3">
                {recipe.application.map((a, i) => (
              <li key={i} className="flex gap-3 type-body text-ink-muted">
            <span className="text-violet-400 flex-shrink-0" aria-hidden="true">•</span>
            <span>{a}</span>
          </li>
          ))}
        </ul>
      </section>
      <section id="keselamatan" className="scroll-mt-[120px]">
      <SectionHeading title="Catatan Keselamatan" align="left" />
      <div className="mt-8">
        {recipe.safetyNotes.map((note, i) => (
        <Callout key={i} variant="safety" className="mt-4">
          <p>{note}</p>
        </Callout>
      ))}
    </div>
        </section>
        </div>
      </PageContainer>

      {recipe.commonMistakes && recipe.commonMistakes.length > 0 ? (
        <Section ariaLabel="Kesalahan umum" className="!py-[80px]">
          <PageContainer>
            <SectionHeading title="Kesalahan Umum pada Resep Ini" align="left" />
            <ul className="mt-8 grid gap-4 tablet:grid-cols-2">
              {recipe.commonMistakes.map((m, i) => (
                <li
                  key={i}
                  className="rounded-card border border-line-subtle bg-raised/40 p-5"
                >
                  <p className="type-body text-ink-soft">{m}</p>
            </li>
          ))}
        </ul>
      </PageContainer>
    </Section>
      ) : null}

      <RelatedRecipes recipe={recipe} />

      <Section ariaLabel="Panduan terkait" className="!py-[80px]">
        <PageContainer>
          <SectionHeading title="Belum Yakin Cara Membuatnya?" align="left" />
          <p className="mt-4 type-body text-ink-muted max-w-[520px]">
            Baca panduan lengkap pembuatan POC sebelum mencoba resep ini.
          </p>
          <div className="mt-6">
            <SplitCta href="/panduan">Buka Panduan</SplitCta>
          </div>
        </PageContainer>
      </Section>

      <BackToTop />
    </article>
  );
}