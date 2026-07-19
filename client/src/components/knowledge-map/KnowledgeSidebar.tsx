import { BrainCircuit, FileQuestion } from "lucide-react";
import { Button } from "../ui/Button";
interface Props {
  node?: { title: string; description: string; importance: string };
}
export function KnowledgeSidebar({ node }: Props) {
  return (
    <aside className="rounded-2xl border border-border bg-surface p-5 shadow-card">
      <h2 className="text-lg font-bold text-text-primary">
        {node ? node.title : "Select a concept"}
      </h2>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        {node
          ? node.description
          : "Click a node in the map to explore its learning details."}
      </p>
      {node && (
        <>
          <dl className="mt-5 space-y-3 border-t border-border pt-4 text-sm">
            <div>
              <dt className="text-text-secondary">Importance</dt>
              <dd className="mt-1 font-bold text-primary">{node.importance}</dd>
            </div>
            <div>
              <dt className="text-text-secondary">Related flashcards</dt>
              <dd className="mt-1 font-semibold text-text-primary">4 cards</dd>
            </div>
            <div>
              <dt className="text-text-secondary">Related quiz questions</dt>
              <dd className="mt-1 font-semibold text-text-primary">
                3 questions
              </dd>
            </div>
          </dl>
          <div className="mt-6 grid gap-2">
            <Button href="/app/study">
              {" "}
              <BrainCircuit size={16} /> Review Flashcards
            </Button>
            <Button href="/app/quiz" variant="secondary">
              <FileQuestion size={16} /> Start Quiz
            </Button>
          </div>
        </>
      )}
    </aside>
  );
}
