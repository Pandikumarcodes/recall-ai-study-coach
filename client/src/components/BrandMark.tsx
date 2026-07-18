interface BrandMarkProps {
  light?: boolean;
}

export function BrandMark({ light = false }: BrandMarkProps) {
  return (
    <a
      aria-label="Recall home"
      className="inline-flex items-center gap-2"
      href="#top"
    >
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-black text-white shadow-sm">
        R
      </span>
      <span
        className={`text-lg font-bold tracking-tight ${light ? "text-white" : "text-text-primary"}`}
      >
        Recall
      </span>
    </a>
  );
}
