import { Sparkle } from "lucide-react";
import { PageContainer, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { howItWorks } from "@/content/home";

/** Section: ringkasan tahapan pembuatan POC dalam 5 langkah. */
export function HowItWorks() {
  return (
    <Section ariaLabel="Tahapan Pembuatan POC">
      <PageContainer>
        <div className="flex flex-col items-center text-center">
          <Eyebrow icon={<Sparkle size={16} strokeWidth={1.5} />}>Cara Kerja</Eyebrow>
          <h2 className="type-h2-section-title max-w-[600px]">
            Lima Tahapan Pembuatan POC
          </h2>
          <p className="type-body mt-4 max-w-[520px] text-ink-muted">
            Setiap tahap punya indikator keberhasilan yang bisa diamati langsung tanpa alat khusus.
          </p>
        </div>
        <ol className="mt-16 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
          {howItWorks.map((step) => (
            <li
              key={step.number}
              className="rounded-card border border-line-subtle bg-raised/60 p-6 transition-colors duration-[220ms] hover:border-line-violet"
            >
              <div className="type-h3-feature-title text-orange" aria-hidden="true">
                {step.number}
              </div>
              <h3 className="type-card-title mt-4 text-ink">{step.title}</h3>
              <p className="type-body mt-3 text-ink-muted">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center">
          <a href="/panduan" className="type-button-label text-ink underline decoration-1 underline-offset-[3px] hover:text-orange-hover transition-colors duration-[220ms]">
            Lihat panduan lengkap
          </a>
        </div>
      </PageContainer>
    </Section>
  );
}