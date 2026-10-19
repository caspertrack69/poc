import { HeroSection } from "@/components/home/hero-section";
import { Introduction } from "@/components/home/introduction";
import { HowItWorks } from "@/components/home/how-it-works";
import { FeaturedRecipes } from "@/components/home/featured-recipes";
import { EssentialTips } from "@/components/home/essential-tips";
import { CommonMistakes } from "@/components/home/common-mistakes";
import { ClosingCTA } from "@/components/home/closing-cta";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Beranda",
  description:
    "Pusat edukasi pembuatan Pupuk Organik Cair (POC) — panduan, resep, dan tips praktis untuk petani dan pemula.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <HowItWorks />
      <FeaturedRecipes />
      <EssentialTips />
      <CommonMistakes />
      <ClosingCTA />
    </>
  );
}