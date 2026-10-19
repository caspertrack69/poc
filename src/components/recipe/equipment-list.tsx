import { Beaker } from "lucide-react";

interface EquipmentListProps {
  equipment: string[];
  className?: string;
}

/** Equipment list as bordered rows with icon + label. */
export function EquipmentList({ equipment, className = "" }: EquipmentListProps) {
  return (
    <ul className={`grid gap-3 tablet:grid-cols-2 ${className}`}>
      {equipment.map((e) => (
        <li
          key={e}
          className="flex items-center gap-3 rounded-card border border-line-subtle bg-raised/40 px-5 py-4"
        >
          <span className="icon-circle icon-circle-outlined w-7 h-7 flex-shrink-0">
            <Beaker size={14} strokeWidth={1.5} />
          </span>
          <span className="type-body text-ink-soft">{e}</span>
        </li>
      ))}
    </ul>
  );
}