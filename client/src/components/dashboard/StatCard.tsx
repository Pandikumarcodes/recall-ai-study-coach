import type { StudyOverviewItem } from "../../types/dashboard";

interface StatCardProps {
  item: StudyOverviewItem;
}

export function StatCard({ item }: StatCardProps) {
  const Icon = item.icon;
  const toneClasses = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
  };
  const chartClasses = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
  };

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 size-28 rounded-full bg-primary/5 blur-2xl transition group-hover:bg-primary/10"
      />
      <div className="flex items-start justify-between gap-3">
        <span
          className={`grid size-10 place-items-center rounded-xl ${toneClasses[item.trendTone]}`}
        >
          <Icon aria-hidden="true" size={20} />
        </span>
        <span className="rounded-full bg-surface-muted px-2 py-1 text-[11px] font-semibold text-text-secondary">
          This week
        </span>
      </div>
      <p className="relative mt-6 text-3xl font-bold tracking-[-0.045em] text-text-primary">
        {item.value}
      </p>
      <h3 className="relative mt-1.5 text-sm font-semibold text-text-primary">
        {item.label}
      </h3>
      <p className="relative mt-1 text-xs leading-5 text-text-secondary">
        {item.supportingText}
      </p>
      <div className="relative mt-5 flex items-end justify-between gap-4">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${toneClasses[item.trendTone]}`}
        >
          {item.trend} this week
        </span>
        <div
          aria-label={`${item.label} weekly trend`}
          className="flex h-13 items-end gap-1"
          role="img"
        >
          {item.chartHeights.map((height, index) => (
            <span
              className={`w-1.5 rounded-t-sm ${index === item.chartHeights.length - 1 ? "opacity-100" : "opacity-40"} ${height} ${chartClasses[item.trendTone]}`}
              key={`${item.label}-${index}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
