import { Network } from "lucide-react";
import { Button } from "../ui/Button";
export function KnowledgeMapPanel() {
  return (
    <section className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center shadow-card">
      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Network size={26} />
      </span>
      <h2 className="mt-5 text-xl font-bold text-text-primary">
        Interactive Knowledge Map
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-secondary">
        Explore the relationships between concepts from your notes in an
        interactive visual map.
      </p>
      <Button className="mt-6" href="#knowledge-map">
        Open Mind Map
      </Button>
    </section>
  );
}
