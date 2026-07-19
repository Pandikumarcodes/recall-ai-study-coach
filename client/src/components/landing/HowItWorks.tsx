import {
  ArrowRight,
  BookOpenText,
  CircleCheckBig,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/Button";

const steps = [
  {
    icon: BookOpenText,
    title: "Share your notes",
    description: "Paste a lecture, study guide, or reading into Recall.",
  },
  {
    icon: Sparkles,
    title: "Make sense of it",
    description:
      "Recall identifies key concepts and creates focused questions.",
  },
  {
    icon: CircleCheckBig,
    title: "Build real mastery",
    description:
      "Practice, get feedback, and follow a plan that keeps you on track.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28" id="how-it-works">
      <div className="mx-auto max-w-7xl rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-12 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-soft">
            Simple by design
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From scattered notes to a study system that works.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="relative" key={step.title}>
                <span className="grid size-11 place-items-center rounded-xl bg-text-inverse/10 text-primary-soft">
                  <Icon size={21} />
                </span>
                <p className="mt-6 text-sm font-bold text-primary-soft">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-text-inverse-secondary">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute right-0 top-20 hidden translate-x-1/2 text-text-inverse-secondary/40 md:block"
                    size={20}
                  />
                )}
              </article>
            );
          })}
        </div>

        <Button
          href="/app/dashboard"
          className="px-5 py-3 shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
        >
          Start learning with Recall
          <ArrowRight size={17} />
        </Button>
      </div>
    </section>
  );
}
