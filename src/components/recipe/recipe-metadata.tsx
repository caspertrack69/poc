import { Clock, CalendarClock, Beaker, Sprout } from "lucide-react";

interface RecipeMetadataProps {
  preparationTime: string;
  fermentationDuration: string;
  estimatedYield: string;
  targetPlants?: string[];
}

interface Row {
  icon: React.ReactNode;
  label: string;
  value: string;
}

/** Quick facts grid (preparation time, fermentation duration, yield,
 *  target plants) shown above recipe steps. */
export function RecipeMetadata({
  preparationTime,
  fermentationDuration,
  estimatedYield,
  targetPlants,
}: RecipeMetadataProps) {
  const rows: Row[] = [
    { icon: <Clock size={16} strokeWidth={1.5} />, label: "Persiapan", value: preparationTime },
    {
      icon: <CalendarClock size={16} strokeWidth={1.5} />,
      label: "Fermentasi",
      value: fermentationDuration,
    },
    { icon: <Beaker size={16} strokeWidth={1.5} />, label: "Hasil", value: estimatedYield },
    {
      icon: <Sprout size={16} strokeWidth={1.5} />,
      label: "Tanaman target",
     value: targetPlants?.join(", ") ?? "-",
    },
  ];
  return (
    <dl className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
      {rows.map((r) => (
        <div key={r.label} className="rounded-card border border-line-subtle bg-raised/40 p-4">
          <dt className="flex items-center gap-2 type-meta text-ink-subtle">
            {r.icon}
            <span>{r.label}</span>
          </dt>
          <dd className="mt-2 type-card-title text-ink">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}