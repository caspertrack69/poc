import { TocClient } from "./table-of-contents.client";

interface TableOfContentsItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  className?: string;
}

/** Sticky table of contents for the /panduan and recipe detail pages.
 *  The client implementation handles active-section highlighting via
 *  IntersectionObserver. */
export function TableOfContents({ items, className = "" }: TableOfContentsProps) {
  return <TocClient items={items} className={className} />;
}