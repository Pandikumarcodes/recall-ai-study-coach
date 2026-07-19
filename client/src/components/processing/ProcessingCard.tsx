import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { ProcessingStep } from "./ProcessingStep";

interface ProcessingCardProps {
  activeStep: number;
  progress: number;
  steps: string[];
}

export function ProcessingCard({
  activeStep,
  progress,
  steps,
}: ProcessingCardProps) {
  const complete = progress === 100;
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-card sm:p-9"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.3 }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 size-52 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative">
        <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Sparkles size={23} />
        </span>
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {complete
            ? "Your study materials are ready!"
            : "Creating your study materials"}
        </h1>
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          {complete
            ? "Taking you to your new study workspace…"
            : "Recall is turning your notes into a personalized learning experience."}
        </p>
        <div className="mt-7">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-text-primary">
              {progress}% complete
            </span>
            <span className="text-text-secondary">
              {complete
                ? "Complete"
                : `About ${Math.max(1, Math.ceil((100 - progress) / 12))} min remaining`}
            </span>
          </div>
          <div className="mt-3">
            <ProgressBar progress={progress} />
          </div>
        </div>
        <ol className="mt-7 space-y-1">
          {steps.map((step, index) => (
            <ProcessingStep
              active={!complete && index === activeStep}
              complete={complete || index < activeStep}
              key={step}
              label={step}
            />
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
