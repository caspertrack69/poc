import { PageContainer, Section } from "@/components/ui/container";
import { SolidPill, TextLinkUnderlined } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { homeClosingCta } from "@/content/home";

/** Closing CTA: violet gradient banner with title and two CTAs. */
export function ClosingCTA() {
  return (
    <Section ariaLabel="Ajakan menutup">
      <PageContainer>
        <div
          className="relative overflow-hidden rounded-[28px] border border-line-subtle py-16 tablet:py-[80px]"
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
          <div className="relative z-10 flex flex-col items-center text-center px-5">
            <Eyebrow>{homeClosingCta.eyebrow}</Eyebrow>
            <h2 className="type-banner-title mt-3 max-w-[480px]">{homeClosingCta.title}</h2>
            <p className="mt-4 type-body max-w-[440px]" style={{ color: "rgba(255,255,255,0.8)" }}>
              {homeClosingCta.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <SolidPill href={homeClosingCta.primaryCtaHref}>
                {homeClosingCta.primaryCtaLabel}
              </SolidPill>
              <TextLinkUnderlined href={homeClosingCta.secondaryCtaHref}>
                {homeClosingCta.secondaryCtaLabel}
              </TextLinkUnderlined>
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}