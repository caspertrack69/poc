import type { ReactNode } from "react";
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";

interface CalloutProps {
  title?: string;
  children: ReactNode;
  variant: "info" | "safety" | "success";
  className?: string;
}

const variantConfig = {
  info: {
    icon: Info,
    border: "var(--border-violet-soft)",
    chip: "Pemberitahuan",
    chipClass: "chip", // violet pill
  },
  safety: {
    icon: AlertTriangle,
    border: "var(--border-orange-soft)",
    chip: "Keselamatan",
    chipClass: "chip", // also violet — orange is reserved for actions
  },
  success: {
    icon: CheckCircle2,
    border: "var(--border-violet-soft)",
    chip: "Indikator",
    chipClass: "chip",
  },
} as const;

/** Inline callout box used inside guides and recipes. Variants:
 *  - info: neutral note
 *  - safety: keselamatan / perhatian khusus
 *  - success: indikator keberhasilan
 *
 *  Body text is sentence-case muted ink; border uses the design system's
 *  translucent violet/orange soft borders. */
export function Callout({ title, children, variant, className = "" }: CalloutProps) {
  const cfg = variantConfig[variant];
  const Icon = cfg.icon;
  return (
    <aside
      className={`rounded-[20px] border border-line-violet-soft bg-raised/60 p-5 ${className}`}
      style={{ borderColor: cfg.border }}
    >
      <header className="flex items-center gap-3 mb-3">
        <span className="icon-circle icon-circle-outlined w-7 h-7">
          <Icon size={14} strokeWidth={1.75} />
        </span>
        <span className={cfg.chipClass}>{cfg.chip}</span>
      </header>
      {title ? <p className="type-card-title mb-2 text-ink">{title}</p> : null}
      <div className="type-body text-ink-soft space-y-2">{children}</div>
    </aside>
  );
}