import { CircleDot, GitFork, GraduationCap, TriangleAlert } from "lucide-react";
const stats = [
  { icon: CircleDot, label: "Total concepts", value: "9" },
  { icon: GitFork, label: "Connections", value: "8" },
  { icon: GraduationCap, label: "Mastered", value: "4" },
  { icon: TriangleAlert, label: "Needs review", value: "2" },
];
export function KnowledgeStats() {
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
            <p className="mt-5 text-3xl font-bold text-text-primary">
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
