import { ArrowLeft, ArrowRight } from "lucide-react";

interface StepNavigationItem {
  href: string;
  label: string;
}

interface StepNavigationProps {
  prevItem?: StepNavigationItem;
  nextItem?: StepNavigationItem;
}

const linkClass =
  "group flex items-center gap-4 p-5 rounded-card border border-line-subtle hover:border-line-violet hover:bg-raised/60 transition-colors duration-[220ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] focus-visible:border-line-violet";
const arrowClass =
  "icon-circle icon-circle-outlined w-9 h-9 transition-transform duration-[220ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";
const labelClass = "block type-meta text-ink-subtle";
const valueClass = "mt-1 block type-body text-ink";

/** Prev/next section anchor navigation between guide steps. */
export function StepNavigation({ prevItem, nextItem }: StepNavigationProps) {
  return (
    <nav
      aria-label="Navigasi antar langkah"
      className="mt-12 flex items-center justify-between gap-4"
    >
      {prevItem ? (
        <a href={prevItem.href} className={linkClass}>
          <span
            className={`${arrowClass} group-hover:-translate-x-[2px]`}
            aria-hidden="true"
          >
            <ArrowLeft size={16} strokeWidth={1.75} />
          </span>
          <span>
            <span className={labelClass}>Sebelumnya</span>
            <span className={valueClass}>{prevItem.label}</span>
          </span>
        </a>
      ) : (
        <span aria-hidden="true" />
      )}
      {nextItem ? (
        <a href={nextItem.href} className={`${linkClass} text-right`}>
          <span className="ml-auto">
            <span className={labelClass}>Berikutnya</span>
            <span className={valueClass}>{nextItem.label}</span>
          </span>
          <span
            className={`${arrowClass} group-hover:translate-x-[2px]`}
            aria-hidden="true"
          >
            <ArrowRight size={16} strokeWidth={1.75} />
          </span>
        </a>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}