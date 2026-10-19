import { X } from "lucide-react";
import { PageContainer, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { commonMistakes } from "@/content/home";

/** Section: 'Kesalahan Umum' with 5 cards. */
export function CommonMistakes() {
  return (
    <Section ariaLabel="Kesalahan umum">
      <PageContainer>
        <SectionHeading
          eyebrow="Kesalahan Umum"
          title="Lima Hal yang Sering Diabaikan"
          align="left"
        />
        <ul className="mt-12 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
          {commonMistakes.map((m) => (
            <li
              key={m.title}
              className="rounded-card border border-line-subtle bg-raised/40 p-6 transition-colors duration-[220ms] hover:border-line-violet"
            >
              <div className="flex items-start gap-3">
                <span className="icon-circle icon-circle-orange w-7 h-7 mt-1" aria-hidden="true">
                  <X size={14} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="type-card-title text-ink">{m.title}</h3>
                  <p className="mt-2 type-body text-ink-muted">{m.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </PageContainer>
    </Section>
  );
}