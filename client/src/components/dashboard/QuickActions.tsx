import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, FileUp, Map, MessageCircle } from "lucide-react";

const actions = [
  {
    action: "Upload Now",
    description: "Add PDF, DOCX or study material.",
    icon: FileUp,
    label: "Upload notes",
    to: "/app/notes",
  },
  {
    action: "Start Quiz",
    description: "Practice what you've learned.",
    icon: BrainCircuit,
    label: "Generate quiz",
    to: "/app/quiz",
  },
  {
    action: "Explore Map",
    description: "Visualize concept connections.",
    icon: Map,
    label: "Open mind map",
    to: "/app/knowledge-map",
  },
  {
    action: "Open AI Tutor",
    description: "Ask questions about your notes.",
    icon: MessageCircle,
    label: "Ask AI tutor",
    to: "/app/ai-tutor",
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
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.a
              className="group relative flex min-h-52 flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-card transition-colors duration-200 hover:border-primary/30 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={action.to}
              initial={{ opacity: 0, y: 8 }}
              key={action.label}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              whileHover={{ y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div aria-hidden="true" className="absolute -right-8 -top-8 size-24 rounded-full bg-primary/5 blur-2xl transition group-hover:bg-primary/10" />
              <motion.span className="relative grid size-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-text-inverse" transition={{ duration: 0.2 }} whileHover={{ rotate: -6, scale: 1.08 }}>
                <Icon aria-hidden="true" size={20} />
              </motion.span>
              <h3 className="relative mt-5 text-base font-bold text-text-primary">
                {action.label}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-text-secondary">
                {action.description}
              </p>
              <span className="relative mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-primary">{action.action}<span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowRight size={17} /></span></span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
