"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";

/** Navigation: centered pill on desktop, hamburger menu on mobile.
 *  Active link is computed from the current pathname. */
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav aria-label="Utama" className="hidden desktop:flex">
        <ul className="flex items-center gap-1 px-3 h-[50px] rounded-pill border border-line bg-white/[0.02]">
          {siteConfig.navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center px-[22px] h-[50px] type-nav-link transition-colors duration-[220ms] ${active ? "text-ink" : "text-ink-soft hover:text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        aria-expanded={open}
        aria-label="Buka menu"
        className="tablet:hidden icon-circle icon-circle-outlined w-10 h-10"
        onClick={() => setOpen((s) => !s)}
      >
        {open ? <X size={16} strokeWidth={1.75} /> : <Menu size={16} strokeWidth={1.75} />}
      </button>

      {open ? (
        <div
          className="absolute left-0 right-0 top-full bg-surface/95 border-t border-line-subtle tablet:hidden"
          role="dialog"
          aria-modal="true"
        >
          <ul className="mx-auto w-full max-w-[1200px] px-5 py-4 flex flex-col gap-1">
            {siteConfig.navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 px-4 rounded-pill type-nav-link transition-colors duration-[220ms] ${active ? "text-ink" : "text-ink-soft hover:text-ink"}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}