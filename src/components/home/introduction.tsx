import { PageContainer, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeIntro } from "@/content/home";

/** Section: 'Apa Itu POC dan Mengapa Perlu Dipelajari'. */
export function Introduction() {
  return (
    <Section ariaLabel="Pengenalan POC">
      <PageContainer>
        <SectionHeading
          as="h2"
          title={homeIntro.heading}
          align="left"
        />
        <div className="mt-10 max-w-[760px] space-y-6">
          <p className="type-lead-paragraph" style={{ color: "var(--text-primary)" }}>
            {homeIntro.lead}
          </p>
          {homeIntro.paragraphs.map((p, i) => (
            <p key={i} className="type-body-large text-ink-muted">
              {p}
            </p>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}