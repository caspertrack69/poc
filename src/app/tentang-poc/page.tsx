import type { Metadata } from "next";
import { PageContainer, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Callout } from "@/components/ui/callout";
import { aboutContent } from "@/content/about";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tentang POC",
  description:
    "Penjelasan edukatif tentang Pupuk Organik Cair: definisi, bahan, prinsip fermentasi, dan keterbatasannya.",
  path: "/tentang-poc",
});

export default function TentangPocPage() {
  return (
    <article>
      <PageContainer className="pt-[120px] flex flex-col items-center text-center">
        <Eyebrow>Edukasi</Eyebrow>
        <h1 className="type-h1-page-title mt-3">Tentang Pupuk Organik Cair</h1>
        <p className="type-body mt-4 max-w-[520px] text-ink-muted">
          Memahami dasar POC agar pembuatan dan aplikasinya lebih tepat.
        </p>
      </PageContainer>

      <Section ariaLabel="Tentang POC">
        <PageContainer className="max-w-[760px]">
          <div className="space-y-[56px]">
            {aboutContent.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="scroll-mt-[120px]"
                aria-labelledby={`${sec.id}-title`}
              >
                <h2 id={`${sec.id}-title`} className="type-h2-section-title">
                  {sec.heading}
                </h2>
                <div className="mt-6 space-y-4">
                  {sec.body.map((p, i) => (
                    <p key={i} className="type-body-large text-ink-muted">{p}</p>
                  ))}
                </div>
              </section>
            ))}
            <Callout variant="info">
              <p>
                POC bukan pengganti nutrisi lengkap. Untuk pertumbuhan optimal, padukan dengan kompos atau pupuk organik padat.
              </p>
            </Callout>
          </div>
        </PageContainer>
      </Section>
    </article>
  );
}