interface InstructionStepProps {
  number: number;
  title: string;
  objective?: string;
  instructions: string[];
  materials?: string[];
  successIndicator?: string;
  note?: string;
  id?: string;
}

/** Numbered step block: displays objective, materials list, instructions,
 *  optional success indicator, and optional note. */
export function InstructionStep({
  number,
  title,
  objective,
  instructions,
  materials,
  successIndicator,
  note,
  id,
}: InstructionStepProps) {
  return (
    <section
      id={id}
      className="rounded-card border border-line-subtle bg-raised/40 p-6 tablet:p-8 scroll-mt-[120px]"
      aria-labelledby={`${id}-title`}
    >
      <header className="flex items-baseline gap-4">
        <span className="type-h2-article-heading text-orange" aria-hidden="true">
          {String(number).padStart(2, "0")}
        </span>
        <h2 id={`${id}-title`} className="type-h2-article-heading text-ink">
          {title}
        </h2>
      </header>

      {objective ? (
        <p className="mt-4 type-body-large max-w-[640px]" style={{ color: "var(--text-secondary)" }}>
          {objective}
        </p>
      ) : null}

      {materials && materials.length > 0 ? (
        <div className="mt-6">
          <p className="type-footer-heading mb-3">Bahan & Alat</p>
          <ul className="flex flex-wrap gap-2">
            {materials.map((m) => (
              <li key={m} className="chip">{m}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <ol className="mt-6 space-y-3 list-none">
        {instructions.map((step, i) => (
          <li
            key={i}
            className="flex gap-3 type-body text-ink-muted"
          >
            <span
              aria-hidden="true"
              className="text-violet-400 flex-shrink-0"
            >
              {i + 1}.
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      {successIndicator ? (
        <div className="mt-6 rounded-accordion border border-line-violet-soft bg-violet-500/10 p-4">
          <p className="type-footer-heading mb-2 text-violet-300">Indikator Keberhasilan</p>
          <p className="type-body text-ink-soft">{successIndicator}</p>
        </div>
      ) : null}

      {note ? (
        <div className="mt-6 rounded-accordion border border-line-orange-soft p-4" style={{ background: "rgba(255,123,63,0.07)" }}>
          <p className="type-footer-heading mb-2 text-orange">Catatan</p>
          <p className="type-body text-ink-soft">{note}</p>
        </div>
      ) : null}
    </section>
  );
}