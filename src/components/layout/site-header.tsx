import Link from "next/link";
import { siteConfig } from "@/content/site";
import { PageContainer } from "@/components/ui/container";
import { SplitCta } from "@/components/ui/button";
import { SiteNav } from "./site-nav";

/** Top-level site header: logo (left) + centered nav pill + split CTA (right).
 *  The nav pill collapses to a hamburger below the tablet breakpoint. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-page/80 backdrop-blur-md print-hidden">
      <PageContainer className="relative flex items-center justify-between gap-4 py-[24px]">
        <Link
          href="/"
          className="font-display text-ink text-[28px] leading-none tracking-tight uppercase"
          aria-label={`${siteConfig.name} beranda`}
        >
          {siteConfig.name}
        </Link>
        <SiteNav />
        <div className="hidden desktop:inline-flex">
          <SplitCta href="/panduan">Mulai Panduan</SplitCta>
        </div>
      </PageContainer>
    </header>
  );
}