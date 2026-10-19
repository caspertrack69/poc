"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

interface TocClientProps {
  items: TocItem[];
  className?: string;
}

/** Client-side TOC implementation: uses IntersectionObserver to mark the
 *  currently visible section as active. */
export function TocClient({ items, className = "" }: TocClientProps) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: [0, 1] }
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      const target = el as HTMLElement | null;
      if (target) observer.observe(target);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Daftar isi" className={`sticky top-[120px] ${className}`}>
      <h2 className="type-h3-contents-heading text-ink mb-[22px]">Daftar Isi</h2>
      <ul className="space-y-[18px]">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block pl-3 type-body transition-colors duration-[220ms] border-l-[2px] ${isActive ? "text-violet-400 border-violet-400" : "text-ink-soft hover:text-ink border-line-subtle"}`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}