import {
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  ListTodo,
} from "lucide-react";
const stats = [
  { icon: ListTodo, label: "Due today", value: "4" },
  { icon: CalendarClock, label: "Upcoming reviews", value: "12" },
  { icon: CheckCircle2, label: "Completed today", value: "3" },
  { icon: BrainCircuit, label: "Overall recall", value: "84%" },
];
export function RevisionStats() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <article
            className="rounded-2xl border border-border bg-surface p-5 shadow-card"
            key={stat.label}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon size={20} />
            </span>
            <p className="mt-5 text-3xl font-bold tracking-tight text-text-primary">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-semibold text-text-secondary">
              {stat.label}
            </p>
          </article>
        );
      })}
    </div>
  );
}
