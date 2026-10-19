import Link from "next/link";
import { PageContainer } from "@/components/ui/container";
import { SplitCta } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section aria-label="Halaman tidak ditemukan" className="py-[140px]">
      <PageContainer className="flex flex-col items-center text-center">
        <p className="eyebrow">404</p>
        <h1 className="type-h1-page-title mt-3">Halaman Tidak Ditemukan</h1>
        <p className="type-body mt-4 max-w-[440px] text-ink-muted">
          Maaf, halaman yang Anda cari tidak tersedia. Kembali ke beranda atau mulai panduan pembuatan POC.
        </p>
        <div className="mt-10">
          <SplitCta href="/">Kembali ke Beranda</SplitCta>
        </div>
        <p className="type-meta mt-8 text-ink-subtle">
          Atau kunjungi{" "}
          <Link href="/panduan" className="text-violet-400 underline underline-offset-2">
            panduan pembuatan
          </Link>{" "}
          atau{" "}
          <Link href="/resep" className="text-violet-400 underline underline-offset-2">
            resep POC
          </Link>
          .
        </p>
      </PageContainer>
    </section>
  );
}