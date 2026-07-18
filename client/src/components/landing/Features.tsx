import { motion } from "framer-motion";
import { Brain, CalendarClock, Map, NotebookPen } from "lucide-react";

const features = [
  {
    icon: NotebookPen,
    title: "Notes, understood",
    description:
      "Paste any lecture note and get the concepts that matter most, neatly organized.",
  },
  {
    icon: Brain,
    title: "Adaptive quizzes",
    description:
      "Practice questions adjust to your performance so every answer moves you forward.",
  },
  {
    icon: Map,
    title: "Knowledge maps",
    description:
      "See how ideas connect and spot the gaps that deserve your attention.",
  },
  {
    icon: CalendarClock,
    title: "Timely revision",
    description:
      "Get a focused revision plan that brings the right topic back at the right time.",
  },
];

export function Features() {
  return (
    <section
      className="border-y border-border bg-surface px-5 py-20 sm:px-8 sm:py-28"
      id="features"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <span className=" inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Built for retention
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Your personal loop for learning better.
          </h2>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            Recall turns passive reading into a simple habit of understanding,
            retrieving, and revising.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                className="rounded-2xl border border-border bg-white/[0.02] p-6 shadow-card transition-shadow hover:-translate-y-1"
                initial={{ opacity: 0, y: 10 }}
                key={feature.title}
                transition={{ delay: index * 0.06, duration: 0.3 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={21} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
