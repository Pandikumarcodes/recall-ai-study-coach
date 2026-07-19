import { Check, LoaderCircle } from "lucide-react";

interface ProcessingStepProps {
  active: boolean;
  complete: boolean;
  label: string;
}

export function ProcessingStep({
  active,
  complete,
  label,
}: ProcessingStepProps) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? "bg-primary/10 text-primary" : complete ? "text-text-primary" : "text-text-secondary"}`}
    >
      <span
        className={`grid size-6 place-items-center rounded-full ${complete ? "bg-success text-text-inverse" : active ? "bg-primary text-text-inverse" : "bg-surface-muted"}`}
      >
        {complete ? (
          <Check size={15} />
        ) : active ? (
          <LoaderCircle className="animate-spin" size={15} />
        ) : null}
      </span>
      <span className="font-medium">{label}</span>
    </li>
  );
}
