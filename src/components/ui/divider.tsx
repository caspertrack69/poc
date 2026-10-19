/** Horizontal divider with tiny dot terminals used inside cards and
 *  between feature card description/author row. */
export function DividerWithEndDots({ className = "" }: { className?: string }) {
  return <div className={`divider-dots ${className}`} role="presentation" />;
}