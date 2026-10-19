import type { Metadata } from "next";
import { Clock, CalendarClock, Beaker } from "lucide-react";
import { PageContainer } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IngredientList } from "@/components/recipe/ingredient-list";
import { EquipmentList } from "@/components/recipe/equipment-list";
import { InstructionStep } from "@/components/guide/instruction-step";
import { StepNavigation } from "@/components/guide/step-navigation";
import { TableOfContents } from "@/components/guide/table-of-contents";
import { BackToTop } from "@/components/guide/back-to-top";
import { PrintButton } from "@/components/guide/print-button";
import { buildPageMetadata } from "@/lib/seo";
import {
  guideSummary,
  guideIngredients,
  guideEquipment,
  guideSteps,
  guideSections,
  guideFaq,
} from "@/content/guide";

export const metadata: Metadata = buildPageMetadata({
  title: "Panduan Pembuatan POC",
  description:
    "Panduan langkah demi langkah membuat Pupuk Organik Cair: dari persiapan bahan, fermentasi, hingga aplikasi pada tanaman.",
  path: "/panduan",
});

const tocItems = [
  { id: "ringkasan", label: "Ringkasan" },
  { id: "bahan-alat", label: "Bahan & Alat" },
  ...guideSteps.map((s) => ({ id: s.anchor, label: `${s.number}. ${s.title}` })),
  ...guideSections.map((s) => ({ id: s.id, label: s.heading })),
  { id: "faq", label: "FAQ" },
];

export default function PanduanPage() {
  const summaryCards = [
    {
      icon: <Clock size={16} strokeWidth={1.5} />,
      label: "Persiapan",
      value: guideSummary.preparationTime,
    },
    {
      icon: <CalendarClock size={16} strokeWidth={1.5} />,
      label: "Fermentasi",
      value: guideSummary.fermentationDuration,
    },
    {
      icon: <Beaker size={16} strokeWidth={1.5} />,
      label: "Hasil",
      value: guideSummary.yieldEstimate,
    },
  ];

  return (
    <article>
      <PageContainer className="pt-[120px] flex flex-col items-center text-center">
        <Eyebrow>Panduan Lengkap</Eyebrow>
        <h1 className="type-h1-page-title mt-3">Panduan Pembuatan POC</h1>
        <p className="type-body mt-4 max-w-[520px] text-ink-muted">
          Ikuti lima tahapan ini secara berurutan untuk membuat Pupuk Organik Cair yang aman dan layak pakai.
        </p>
        <dl className="mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4 w-full max-w-[820px] items-stretch">
          {summaryCards.map((c) => (
            <div
              key={c.label}
              className="flex flex-col rounded-card border border-line-subtle bg-raised/40 p-5 text-left transition-colors duration-[220ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-line-violet hover:bg-raised/60"
            >
              <dt className="flex items-center gap-2 type-meta text-ink-subtle">
                <span className="text-violet-400" aria-hidden="true">{c.icon}</span>
                <span>{c.label}</span>
              </dt>
              <dd className="mt-3 type-card-title text-ink">{c.value}</dd>
            </div>
          ))}
        </dl>
      </PageContainer>

      <PageContainer className="mt-[80px] grid tablet:grid-cols-[240px_1fr] gap-[64px]">
        <TableOfContents items={tocItems} className="hidden tablet:block print-hidden" />

        <div className="space-y-[56px]">
          <section id="ringkasan" className="scroll-mt-[120px]">
            <SectionHeading title="Ringkasan" align="left" />
            <p className="mt-6 type-body-large text-ink-muted">
              Panduan ini menghasilkan sekitar 8-10 liter POC siap pakai dari takaran dasar. Bila pertama kali mencoba, mulailah dengan setengah takaran.
            </p>
            <p className="mt-4 type-body text-ink-muted">
              Proses dibagi menjadi lima tahap: persiapan bahan, pencampuran, fermentasi, pemeriksaan hasil, dan pengenceran-aplikasi.
            </p>
          </section>

          <section id="bahan-alat" className="scroll-mt-[120px]">
            <SectionHeading title="Bahan & Alat" align="left" />
            <div className="mt-8 grid gap-8">
              <div>
                <p className="type-footer-heading mb-4">Bahan</p>
                <IngredientList
                  ingredients={guideIngredients.map((i) => ({
                    name: i.name,
                    amount: parseFloat(i.amount.split(" ")[0]) || 0,
                    unit: i.amount.split(" ").slice(1).join(" ") || "unit",
                    note: i.note,
                  }))}
                />
              </div>
              <div>
                <p className="type-footer-heading mb-4">Alat</p>
                <EquipmentList equipment={guideEquipment} />
              </div>
            </div>
          </section>

          {guideSteps.map((step) => (
            <InstructionStep
              key={step.number}
              id={step.anchor}
              number={step.number}
              title={step.title}
              objective={step.objective}
              materials={step.materials}
              instructions={step.instructions}
              successIndicator={step.successIndicator}
              note={step.note}
            />
          ))}

          {guideSections.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-[120px]">
              <SectionHeading title={sec.heading} align="left" />
              <ul className="mt-6 space-y-3">
                {sec.body.map((line, i) => (
              <li key={i} className="flex gap-3 type-body text-ink-muted">
                <span className="text-violet-400 flex-shrink-0" aria-hidden="true">•</span>
                <span>{line}</span>
      </li>
    ))}
        </ul>
      </section>
          ))}

          <section id="faq" className="scroll-mt-[120px]">
            <SectionHeading title="FAQ Panduan" align="left" />
            <dl className="mt-8 space-y-6">
        {guideFaq.map((item) => (
              <div key={item.question}>
                <dt className="type-card-title text-ink">{item.question}</dt>
          <dd className="mt-2 type-body text-ink-muted">{item.answer}</dd>
        </div>
      ))}
    </dl>
        </section>

          <StepNavigation
            prevItem={{ href: "/", label: "Beranda" }}
            nextItem={{ href: "/resep", label: "Resep POC" }}
          />
        </div>
      </PageContainer>

      <BackToTop />
      <PageContainer className="mt-[80px]">
        <div
          className="relative overflow-hidden rounded-[28px] border border-line-subtle py-12 tablet:py-16 px-5 text-center print-hidden"
          style={{ background: "var(--gradient-cta_banner_violet)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[35%] opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 0%, rgba(255,255,255,0.06) 1px, transparent 1.5px)",
              backgroundSize: "14px 14px",
              maskImage: "linear-gradient(to top, black, transparent)",
              WebkitMaskImage: "linear-gradient(to top, black, transparent)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <Eyebrow>Referensi Offline</Eyebrow>
            <h2 className="type-banner-title mt-3 max-w-[480px]">Cetak Panduan Ini</h2>
            <p className="mt-4 type-body max-w-[440px]" style={{ color: "rgba(255,255,255,0.8)" }}>
              Simpan panduan sebagai referensi offline saat membuat POC di dapur atau kebun.
            </p>
            <div className="mt-8">
              <PrintButton />
            </div>
          </div>
        </div>
      </PageContainer>
    </article>
  );
}