import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centered 1200px container with responsive gutters per design system. */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-5 tablet:px-10 desktop:px-[120px] ${className}`}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "main" | "article";
  id?: string;
  ariaLabel?: string;
}

/** Vertical rhythm wrapper for top-level home/article sections. */
export function Section({
  children,
  className = "",
  as: Component = "section",
  id,
  ariaLabel,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={`py-[96px] ${className}`}
    >
      {children}
    </Component>
  );
}