import type { RevisionItem } from "./RevisionCard";
import { RevisionCard } from "./RevisionCard";
interface Props {
  items: RevisionItem[];
  onComplete: (id: string) => void;
}
export function RevisionTimeline({ items, onComplete }: Props) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-text-primary">Revision schedule</h2>
      <p className="mt-1 text-sm text-text-secondary">
        Focus on these concepts to strengthen long-term recall.
      </p>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <RevisionCard item={item} key={item.id} onComplete={onComplete} />
        ))}
      </div>
    </section>
  );
}
