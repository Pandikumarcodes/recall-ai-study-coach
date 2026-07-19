import { Clock3 } from "lucide-react";
import { Button } from "../ui/Button";
export interface RevisionItem {
  id: string;
  topic: string;
  subject: string;
  difficulty: string;
  score: number;
  lastReviewed: string;
  nextReview: string;
  time: string;
}
interface Props {
  item: RevisionItem;
  onComplete: (id: string) => void;
}
export function RevisionCard({ item, onComplete }: Props) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-card">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-primary">
            {item.subject}
          </p>
          <h3 className="mt-1 text-lg font-bold text-text-primary">
            {item.topic}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-warning/10 px-2.5 py-1 font-bold text-warning">
              {item.difficulty}
            </span>
            <span className="rounded-full bg-success/10 px-2.5 py-1 font-bold text-success">
              {item.score}% recall
            </span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm text-text-secondary">
          <Clock3 size={16} /> {item.time}
        </span>
      </div>
      <div className="mt-5 grid gap-3 border-t border-border pt-4 text-sm text-text-secondary sm:grid-cols-2">
        <p>
          Last reviewed:{" "}
          <span className="font-semibold text-text-primary">
            {item.lastReviewed}
          </span>
        </p>
        <p>
          Next review:{" "}
          <span className="font-semibold text-text-primary">
            {item.nextReview}
          </span>
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button href="#revision">Review Now</Button>
        <Button href="#revision" variant="secondary">
          Skip
        </Button>
        <button
          className="rounded-xl px-3 py-2 text-sm font-semibold text-text-secondary transition hover:bg-surface-muted"
          onClick={() => onComplete(item.id)}
          type="button"
        >
          Mark Complete
        </button>
      </div>
    </article>
  );
}
