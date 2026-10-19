interface StepNavigationItem {
  href: string;
  label: string;
}

interface StepNavigationProps {
  prevItem?: StepNavigationItem;
  nextItem?: StepNavigationItem;
}

/** Prev/next section anchor navigation between guide steps. */
export function StepNavigation({ prevItem, nextItem }: StepNavigationProps) {
  return (
    <nav
      aria-label="Navigasi antar langkah"
      className="mt-12 flex items-center justify-between gap-4"
    >
      {prevItem ? (
        <a
          href={prevItem.href}
          className="flex items-center gap-3 p-4 rounded-card border border-line-subtle hover:border-line-violet transition-colors duration-[220ms]"
        >
          <span className="text-violet-400" aria-hidden="true">←</span>
          <span>
            <span className="block type-meta text-ink-subtle">Sebelumnya</span>
            <span className="type-body text-ink">{prevItem.label}</span>
          </span>
        </a>
      ) : (
        <span aria-hidden="true" />
      )}
      {nextItem ? (
        <a
          href={nextItem.href}
          className="flex items-center gap-3 p-4 rounded-card border border-line-subtle hover:border-line-violet transition-colors duration-[220ms] text-right"
        >
          <span className="ml-auto">
            <span className="block type-meta text-ink-subtle">Berikutnya</span>
            <span className="type-body text-ink">{nextItem.label}</span>
          </span>
          <span className="text-violet-400" aria-hidden="true">→</span>
        </a>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}