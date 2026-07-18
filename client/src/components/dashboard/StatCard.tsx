import type { StudyOverviewItem } from "../../types/dashboard";

interface StatCardProps {
  item: StudyOverviewItem;
}

export function StatCard({ item }: StatCardProps) {
  const Icon = item.icon;

  return (
    <article className="h-full rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon aria-hidden="true" size={20} />
        </span>
        <span className="rounded-full bg-surface-muted px-2 py-1 text-[11px] font-semibold text-text-secondary">
          This week
        </span>
      </div>
      <p className="mt-6 text-3xl font-bold tracking-[-0.04em] text-text-primary">
        {item.value}
      </p>
      <h3 className="mt-1.5 text-sm font-semibold text-text-primary">
        {item.label}
      </h3>
      <p className="mt-1 text-xs leading-5 text-text-secondary">
        {item.supportingText}
      </p>
    </article>
  );
}
