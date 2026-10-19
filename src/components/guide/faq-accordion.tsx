"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface AccordionItemData {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: AccordionItemData[];
  defaultOpenIndex?: number;
  className?: string;
}

/** Single-open FAQ accordion. First item open by default per design
 *  system. Accessible: button + aria-expanded. */
export function FAQAccordion({ items, defaultOpenIndex = 0, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-accordion border transition-colors duration-[220ms]"
            style={{
              background: isOpen
                ? "var(--gradient-accordion_active)"
                : "var(--gradient-accordion_idle)",
              borderColor: isOpen ? "var(--border-orange-soft)" : "var(--border-subtle)",
            }}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex items-center justify-between gap-4 w-full text-left p-6"
              >
                <span className="type-card-title text-ink">{item.question}</span>
                <span
                  className="icon-circle icon-circle-outlined w-7 h-7 flex-shrink-0"
                  aria-hidden="true"
                >
                  {isOpen ? <X size={14} strokeWidth={1.75} /> : <Plus size={14} strokeWidth={1.75} />}
                </span>
              </button>
            </h3>
            {isOpen ? (
              <div className="px-6 pb-6 pt-2">
              <p className="type-body text-ink-soft">{item.answer}</p>
            </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}