import { Beaker, ShieldCheck, Eye, Droplet } from "lucide-react";
import { PageContainer, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { essentialTips } from "@/content/home";

const tipIcons = [Beaker, ShieldCheck, Eye, Droplet];

/** Section: 'Tips Penting Pembuatan POC' with 4 cards. */
export function EssentialTips() {
  return (
    <Section ariaLabel="Tips penting">
      <PageContainer>
        <SectionHeading
          eyebrow="Tips Penting"
          title="Hal yang Wajib Diperhatikan Saat Membuat POC"
          align="left"
        />
        <ul className="mt-12 grid gap-6 tablet:grid-cols-2">
          {essentialTips.map((tip, i) => {
            const Icon = tipIcons[i] ?? Beaker;
            return (
              <li
                key={tip.title}
                className="rounded-card border border-line-subtle bg-raised/50 p-6 transition-colors duration-[220ms] hover:border-line-violet"
              >
                <div className="flex items-center gap-4">
                  <span className="icon-circle icon-circle-outlined w-10 h-10">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <h3 className="type-card-title text-ink">{tip.title}</h3>
                </div>
                <p className="mt-4 type-body text-ink-muted">{tip.description}</p>
              </li>
            );
          })}
        </ul>
      </PageContainer>
    </Section>
  );
}