import {
  BookOpen,
  BrainCircuit,
  Clock3,
  FileText,
  Flame,
  Trophy,
} from "lucide-react";
const stats = [
  { icon: Flame, value: "12", label: "Study Streak" },
  { icon: BrainCircuit, value: "84%", label: "Recall Score" },
  { icon: FileText, value: "24", label: "Notes Uploaded" },
  { icon: Trophy, value: "18", label: "Quizzes Completed" },
  { icon: Clock3, value: "42h", label: "Study Hours" },
  { icon: BookOpen, value: "356", label: "Flashcards Reviewed" },
];
export function ProfileStats() {
  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <article
            className="rounded-2xl border border-border bg-surface p-5 shadow-card"
            key={stat.label}
          >
            <div className="flex justify-between">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon size={20} />
              </span>
              <span className="text-xs text-text-secondary">All time</span>
            </div>
            <p className="mt-5 text-3xl font-bold text-text-primary">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-semibold text-text-secondary">
              {stat.label}
            </p>
          </article>
        );
      })}
    </section>
  );
}
