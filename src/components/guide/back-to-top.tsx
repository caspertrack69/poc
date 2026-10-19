"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating back-to-top button. Shows once the user has scrolled past
 *  ~800px. Hidden in print. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      className="fixed right-6 bottom-6 icon-circle icon-circle-outlined w-12 h-12 z-40 print-hidden"
    >
      <ArrowUp size={16} strokeWidth={1.75} />
    </button>
  );
}