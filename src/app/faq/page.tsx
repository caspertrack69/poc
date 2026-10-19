import type { Metadata } from "next";
import { PageContainer, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitCta } from "@/components/ui/button";
import { FAQAccordion } from "@/components/guide/faq-accordion";
import { faqItems } from "@/content/faq";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Pertanyaan umum seputar pembuatan, penyimpanan, dan penggunaan Pupuk Organik Cair.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <article>
      <PageContainer className="pt-[120px] flex flex-col items-center text-center">
        <Eyebrow>Pertanyaan Umum</Eyebrow>
        <h1 className="type-h1-page-title mt-3">FAQ</h1>
        <p className="type-body mt-4 max-w-[520px] text-ink-muted">
          Hal yang paling sering ditanyakan tentang Pupuk Organik Cair.
        </p>
      </PageContainer>

      <Section ariaLabel="Daftar FAQ">
        <PageContainer className="grid tablet:grid-cols-[350px_1fr] gap-[60px]">
          <div>
            <h2 className="type-h2-section-title">Jawaban Cepat untuk Hal yang Sering Ditanyakan</h2>
            <p className="mt-4 type-body text-ink-muted">
              Topik yang paling sering muncul adalah durasi fermentasi, ciri hasil sehat, dan cara penyimpanan.
          </p>
          <div className="mt-10">
            <p className="type-h3-feature-title text-ink">Masih ada pertanyaan?</p>
              <p className="mt-2 type-meta text-ink-subtle">
                Buka panduan lengkap untuk penjelasan menyeluruh.
          </p>
            <div className="mt-6">
            <SplitCta href="/panduan">Buka Panduan</SplitCta>
          </div>
          </div>
        </div>
        <FAQAccordion items={faqItems} />
      </PageContainer>
    </Section>
  </article>
  );
}