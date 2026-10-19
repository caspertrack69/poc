import Image from "next/image";
import { PageContainer } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitCta, TextLinkUnderlined } from "@/components/ui/button";
import { homeHero } from "@/content/home";
import { defaultImages } from "@/content/images";

/** Hero section for the homepage. */
export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,123,63,0.18), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 30%, rgba(124,107,242,0.18), transparent 70%)",
        }}
      />
      <PageContainer className="relative z-10 py-[120px] flex flex-col items-center text-center">
        <Eyebrow>{homeHero.eyebrow}</Eyebrow>
        <h1 id="hero-title" className="type-h1-page-title mt-3 max-w-[720px]">
          {homeHero.title} <span className="text-orange">{homeHero.highlight}</span>
        </h1>
        <p
          className="type-body-large mt-7 max-w-[520px]"
      style={{ color: "var(--text-secondary)" }}
        >
          {homeHero.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <SplitCta href={homeHero.primaryCtaHref}>{homeHero.primaryCtaLabel}</SplitCta>

          <TextLinkUnderlined href={homeHero.secondaryCtaHref}>
            {homeHero.secondaryCtaLabel}
          </TextLinkUnderlined>
        </div>
        <div className="relative mt-14 w-full max-w-[960px] aspect-[2.4/1] rounded-[30px] border border-line-orange-soft overflow-hidden bg-page">
          <Image
            src={defaultImages.hero}
            alt={defaultImages.alt}
            fill
            sizes="(max-width: 1200px) 960px, 100vw"
            className="object-cover"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 60%, rgba(14,14,15,0.85) 100%)",
            }}
          />
        </div>
      </PageContainer>
    </section>
  );
}