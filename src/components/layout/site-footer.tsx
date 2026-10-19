import Link from "next/link";
import { Camera, Play, MessageCircle, Hash } from "lucide-react";
import { siteConfig } from "@/content/site";
import { PageContainer } from "@/components/ui/container";

const socialIcon: Record<string, React.ReactNode> = {
  Instagram: <Camera size={18} strokeWidth={1.75} />,
  YouTube: <Play size={18} strokeWidth={1.75} />,
  Facebook: <MessageCircle size={18} strokeWidth={1.75} />,
  X: <Hash size={18} strokeWidth={1.75} />,
};

type FooterLink = { label: string; href: string };

const linkColumns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Navigasi",
    links: siteConfig.navigation.map((item) => ({
      label: item.label,
      href: item.href,
    })),
  },
  {
    heading: "Sumber",
    links: [
      { label: "Panduan Pembuatan", href: "/panduan" },
      { label: "Resep POC", href: "/resep" },
      { label: "Tentang POC", href: "/tentang-poc" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Hubungi",
    links: [
      { label: "Email", href: `mailto:` + siteConfig.contact.email },
      ...siteConfig.social.map((s) => ({ label: s.label, href: s.href })),
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      className="relative mt-[140px] overflow-hidden border-t border-line-subtle print-hidden"
      style={{ background: "var(--gradient-footer_bg)" }}
    >
      <PageContainer className="relative z-10 pt-[80px]">
        <div className="flex flex-col tablet:flex-row gap-12 tablet:gap-8 pb-12">
          <div className="flex-1 max-w-[260px]">
            <p className="type-banner-title text-ink">{siteConfig.tagline}</p>
            <ul className="mt-6 flex items-center gap-4">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="icon-circle icon-circle-outlined w-10 h-10"
                    aria-label={`${s.label} (buka di tab baru)`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcon[s.label] ?? null}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="grid grid-cols-2 tablet:grid-cols-3 gap-8 flex-1" aria-label="Footer">
            {linkColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="type-footer-heading mb-4">{col.heading}</h3>
        <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={`${col.heading}-${l.label}`}>
                      <Link
                        href={l.href}
                        className="type-footer-link text-ink-muted hover:text-ink transition-colors duration-[220ms]"
                      >
                        {l.label}
                      </Link>
                  </li>
                ))}
              </ul>
            </div>
            ))}
          </nav>
        </div>
      </PageContainer>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 bottom-[-1.2em] leading-none"
      >
        <div
          className="mx-auto w-[75%] font-display"
          style={{
            color: "var(--decor-wordmark)",
            fontSize: "clamp(80px, 14vw, 280px)",
            lineHeight: 1,
          }}
        >
          {siteConfig.name}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-20 w-[200px] h-[120px] opacity-60 hidden tablet:block"
        style={{
          backgroundImage:
            "linear-gradient(var(--decor-pattern-lines) 1px, transparent 1px), linear-gradient(90deg, var(--decor-pattern-lines) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top left, black, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top left, black, transparent 80%)",
        }}
      />

      <PageContainer className="relative z-10">
        <div className="border-t border-line-subtle py-6">
          <p className="type-legal-small text-center">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Konten edukatif, sebagian data perlu validasi pemilik proyek.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}