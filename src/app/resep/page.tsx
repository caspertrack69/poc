import type { Metadata } from "next";
import { PageContainer, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RecipeGrid } from "@/components/recipe/recipe-grid";
import { SplitCta } from "@/components/ui/button";
import { getAllRecipes } from "@/lib/recipes";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Resep POC",
  description:
    "Koleksi resep Pupuk Organik Cair berbasis bahan organik yang umum ditemui di dapur: limbah buah, limbah sayur, dan kulit pisang.",
  path: "/resep",
});

export default function ResepPage() {
  const recipes = getAllRecipes();
  return (
    <article>
      <PageContainer className="pt-[120px] flex flex-col items-center text-center">
        <Eyebrow>Koleksi Resep</Eyebrow>
        <h1 className="type-h1-page-title mt-3">Resep Pupuk Organik Cair</h1>
        <p className="type-body mt-4 max-w-[520px] text-ink-muted">
          Pilih resep sesuai bahan yang tersedia di rumah. Setiap resep memuat bahan, alat, langkah, indikator hasil, dan catatan keselamatan.
        </p>
      </PageContainer>

      <Section ariaLabel="Resep tersedia">
        <PageContainer>
          <SectionHeading title="Semua Resep" align="left" />
          <RecipeGrid recipes={recipes} columns={3} />
          <div className="mt-12 flex justify-center">
            <SplitCta href="/panduan">Lihat Panduan Pembuatan</SplitCta>
          </div>
        </PageContainer>
      </Section>
    </article>
  );
}