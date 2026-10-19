"use client";

import { Printer } from "lucide-react";

/** Triggers window.print() to print the current guide / recipe page. */
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 h-10 px-4 rounded-pill border border-line text-ink-soft type-button-label hover:border-line-violet hover:text-ink transition-colors duration-[220ms] print-hidden"
    >
      <Printer size={16} strokeWidth={1.5} />
      Cetak Panduan
    </button>
  );
}