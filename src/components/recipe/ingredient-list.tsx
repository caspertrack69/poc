interface IngredientListProps {
  ingredients: {
    name: string;
    amount: number;
    unit: string;
    note?: string;
  }[];
  className?: string;
}

/** Two-column responsive ingredient table. */
export function IngredientList({ ingredients, className = "" }: IngredientListProps) {
  return (
    <div className={`rounded-card border border-line-subtle overflow-hidden ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-line-subtle">
            <th className="text-left p-4 type-footer-heading">Bahan</th>
            <th className="text-right p-4 type-footer-heading w-[160px]">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ing) => (
            <tr key={ing.name} className="border-b border-line-subtle last:border-b-0">
              <td className="p-4 align-top">
                <p className="type-body text-ink">{ing.name}</p>
                {ing.note ? (
                  <p className="type-meta mt-1 text-ink-subtle">{ing.note}</p>
                ) : null}
              </td>
              <td className="p-4 text-right align-top type-body text-ink-soft">
                {ing.amount} {ing.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}