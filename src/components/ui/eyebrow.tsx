import { Sparkle } from "lucide-react";
import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}

/** Eyebrow label: violet sparkle icon + short text, displayed above
 *  section headings and feature titles. */
export function Eyebrow({
  children,
  icon,
  className = "",
  as: Component = "span",
}: EyebrowProps) {
  return (
    <Component className={`eyebrow ${className}`}>
      {icon ?? <Sparkle size={16} strokeWidth={1.5} />}
      <span>{children}</span>
    </Component>
  );
}