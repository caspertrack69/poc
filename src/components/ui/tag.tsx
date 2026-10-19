interface PillTagProps {
  children: string;
  className?: string;
}

/** Large violet-outlined pill used as a category label above titles
 *  (feature card, article hero, recipe hero). */
export function PillTag({ children, className = "" }: PillTagProps) {
  return (
    <span className={`pill-tag ${className}`} data-category-pill>
      {children}
    </span>
  );
}

interface ChipTagProps {
  children: string;
  className?: string;
}

/** Small violet-outlined chip used on blog/recipe cards. */
export function ChipTag({ children, className = "" }: ChipTagProps) {
  return (
    <span className={`chip ${className}`} data-chip>
      {children}
    </span>
  );
}