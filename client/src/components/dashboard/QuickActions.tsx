import { BrainCircuit, FileUp, Map, MessageCircle } from "lucide-react";

const actions = [
  {
    description: "Add a lecture or study guide",
    icon: FileUp,
    label: "Upload notes",
  },
  {
    description: "Practice what you know",
    icon: BrainCircuit,
    label: "Generate quiz",
  },
  {
    description: "See how concepts connect",
    icon: Map,
    label: "Open mind map",
  },
  {
    description: "Get help with a tough topic",
    icon: MessageCircle,
    label: "Ask AI tutor",
  },
];

export function QuickActions() {
  return (
    <section aria-labelledby="quick-actions-heading" className="mt-12 sm:mt-14">
      <h2
        className="text-xl font-bold tracking-tight"
        id="quick-actions-heading"
      >
        Quick actions
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              className="group rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href="#recent-materials"
              key={action.label}
            >
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-text-inverse">
                <Icon aria-hidden="true" size={20} />
              </span>
              <h3 className="mt-4 text-sm font-bold text-text-primary">
                {action.label}
              </h3>
              <p className="mt-1 text-xs leading-5 text-text-secondary">
                {action.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
