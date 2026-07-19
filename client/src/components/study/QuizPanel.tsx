import { useState } from "react";
import { Button } from "../ui/Button";
const options = [
  "The energy per unit charge",
  "The force per unit charge",
  "The total electrical charge",
  "The rate of current flow",
];
export function QuizPanel() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-primary">Question 2 of 10</p>
        <span className="text-sm text-text-secondary">20% complete</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted">
        <div className="h-full w-1/5 rounded-full bg-primary" />
      </div>
      <h2 className="mt-7 text-xl font-bold leading-8 text-text-primary">
        What does electric potential represent at a point in an electric field?
      </h2>
      <div className="mt-6 space-y-3">
        {options.map((option, index) => (
          <button
            className={`w-full rounded-xl border p-4 text-left text-sm font-medium transition ${selectedOption === index ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface text-text-primary hover:border-primary/30"}`}
            key={option}
            onClick={() => setSelectedOption(index)}
            type="button"
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
      <Button className="mt-6" href="/app/revision-plan">
        Next Question
      </Button>
    </section>
  );
}
