import { ArrowUpRight } from "lucide-react";
import type { StudyMaterial } from "../../types/dashboard";

interface StudyMaterialCardProps {
  material: StudyMaterial;
}

export function StudyMaterialCard({ material }: StudyMaterialCardProps) {
  const Icon = material.icon;

  return (
    <article className="h-full rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon aria-hidden="true" size={20} />
        </span>
        <a
          aria-label={`Open ${material.title}`}
          className="grid size-8 place-items-center rounded-lg text-text-secondary transition hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          href="#main-content"
        >
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-primary">
        {material.subject}
      </p>
      <h3 className="mt-2 text-base font-bold leading-6 text-text-primary">
        {material.title}
      </h3>
      <p className="mt-2 text-xs text-text-secondary">
        Last studied {material.lastStudied}
      </p>
      <div className="mt-6 flex items-center justify-between text-xs">
        <span className="font-semibold text-text-primary">Recall score</span>
        <span className="font-bold text-primary">{material.recallScore}%</span>
      </div>
      <div
        aria-label="Study progress"
        className="mt-2 h-2 overflow-hidden rounded-full bg-surface-muted"
      >
        <div
          className={`h-full rounded-full bg-primary ${material.progressClass}`}
        />
      </div>
    </article>
  );
}
