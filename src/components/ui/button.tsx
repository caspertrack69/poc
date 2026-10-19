import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface SplitCtaProps {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

/** The signature split CTA: a label pill with a detached circular arrow
 *  button touching its right edge. Used for navbar CTA, feature card CTA,
 *  and "load more" type actions. */
export function SplitCta({ href, children, className = "", icon }: SplitCtaProps) {
  return (
    <Link href={href} className={`group inline-flex items-center ${className}`} data-split-inline>
      <span
        className="inline-flex items-center h-10 px-[18px] rounded-pill bg-orange text-ink type-button-label transition-colors duration-[220ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:bg-orange-hover group-active:bg-orange-pressed group-active:scale-[0.98]"
        data-split-label
      >
        {children}
      </span>
      <span
        className="icon-circle icon-circle-orange w-10 h-10 -ml-[2px] transition-transform duration-[220ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        aria-hidden="true"
        data-split-icon
      >
        {icon ?? <ArrowUpRight size={16} strokeWidth={1.75} />}
      </span>
    </Link>
  );
}

interface SolidPillProps {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

/** Filled orange pill used for primary actions like form submit and CTA banner. */
export function SolidPill({
  href,
  children,
  onClick,
  type = "button",
  className = "",
}: SolidPillProps) {
  const cls =
    "inline-flex items-center justify-center h-[42px] px-[22px] rounded-pill bg-orange text-ink type-button-label transition-colors duration-[220ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:bg-orange-hover active:bg-orange-pressed active:scale-[0.98] " +
    className;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

interface TextLinkUnderlinedProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Underlined white text link used as a secondary action next to a
 *  solid pill (e.g. in CTA banners). */
export function TextLinkUnderlined({
  href,
  children,
  className = "",
}: TextLinkUnderlinedProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center type-button-label text-ink underline decoration-1 underline-offset-[3px] hover:text-orange-hover transition-colors duration-[220ms] ${className}`}
    >
      {children}
    </Link>
  );
}