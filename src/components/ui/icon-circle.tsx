import type { ReactNode } from "react";

interface IconCircleProps {
  variant: "orange" | "outlined";
  size?: number;
  icon: ReactNode;
  className?: string;
  label?: string;
}

/** Round icon container used inside CTAs, on cards, for share, and for
 *  carousel arrows. The "orange" variant is the warm action colour; the
 *  "outlined" variant is for secondary actions (share, social, prev arrow). */
export function IconCircle({
  variant,
  size = 40,
  icon,
  className = "",
  label,
}: IconCircleProps) {
  const variantClass = variant === "orange" ? "icon-circle-orange" : "icon-circle-outlined";
  const style: React.CSSProperties = { width: size, height: size };
  return (
    <span
      className={`icon-circle ${variantClass} ${className}`}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {icon}
    </span>
  );
}