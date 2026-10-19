import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  trailing?: ReactNode;
}

/** Section heading with optional eyebrow, description, and trailing
 *  control (used for the "All posts / sort" split variant). */
export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className = "",
  trailing,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start"} ${className}`}
    >
      {eyebrow ? <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow> : null}
      <Heading className="type-h2-section-title max-w-[640px]">{title}</Heading>
{description ? (
        <p
          className={`type-body mt-4 max-w-[520px] text-ink-muted ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
      {trailing ? <div className="mt-6 w-full">{trailing}</div> : null}
    </div>
  );
}