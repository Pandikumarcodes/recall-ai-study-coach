import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  description: string;
  icon: LucideIcon;
  title: string;
}

export function EmptyState({
  description,
  icon: Icon,
  title,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface p-8 text-center shadow-card sm:p-10">
      <span className="mx-auto grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon aria-hidden="true" size={21} />
      </span>
      <h3 className="mt-4 text-base font-bold text-text-primary">{title}</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-text-secondary">
        {description}
      </p>
    </div>
  );
}
