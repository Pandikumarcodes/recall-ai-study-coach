import { ArrowRight, BrainCircuit, ListChecks } from "lucide-react";
import { Button } from "../ui/Button";
import { studySummary } from "../../mocks/summary";
export function SummaryPanel() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
      <article className="rounded-2xl border border-border bg-surface p-6 shadow-card">
        <h2 className="text-xl font-bold text-text-primary">
          AI Generated Summary
        </h2>
        <p className="mt-4 leading-7 text-text-secondary">
          {studySummary.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/app/quiz">
            Start Quiz <ArrowRight size={16} />
          </Button>
          <Button href="/app/study" variant="secondary">
            Review Flashcards
          </Button>
        </div>
      </article>
      <div className="space-y-5">
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-card">
          <h2 className="flex items-center gap-2 font-bold text-text-primary">
            <ListChecks className="text-primary" size={19} /> Key takeaways
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-text-secondary">
            {studySummary.takeaways.map((takeaway) => <li key={takeaway}>• {takeaway}</li>)}
          </ul>
        </article>
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-card">
          <h2 className="flex items-center gap-2 font-bold text-text-primary">
            <BrainCircuit className="text-primary" size={19} /> Important
            concepts
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {studySummary.concepts.map((concept) => (
              <span
                className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                key={concept}
              >
                {concept}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
