import { ArrowRight, BrainCircuit, ListChecks } from "lucide-react";
import { Button } from "../ui/Button";
export function SummaryPanel() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
      <article className="rounded-2xl border border-border bg-surface p-6 shadow-card">
        <h2 className="text-xl font-bold text-text-primary">
          AI Generated Summary
        </h2>
        <p className="mt-4 leading-7 text-text-secondary">
          Electric fields describe the force that a charged object would exert
          on other charges around it. Electric potential measures the energy
          available to move a charge through that field. Together, they provide
          a powerful model for understanding charge interactions without
          tracking every force individually.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#quiz">
            Start Quiz <ArrowRight size={16} />
          </Button>
          <Button href="#flashcards" variant="secondary">
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
            <li>• Field strength depends on charge and distance.</li>
            <li>• Potential is energy per unit charge.</li>
            <li>• Equipotential lines never intersect.</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-card">
          <h2 className="flex items-center gap-2 font-bold text-text-primary">
            <BrainCircuit className="text-primary" size={19} /> Important
            concepts
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Coulomb's law",
              "Electric field",
              "Potential difference",
              "Equipotential",
            ].map((concept) => (
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
