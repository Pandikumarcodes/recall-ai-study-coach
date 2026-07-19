import { ArrowRight, BrainCircuit, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

const chartHeights = ["h-9", "h-13", "h-11", "h-18", "h-15", "h-22", "h-24"];

export function Hero() {
  return (
    <section
      className="relative isolate px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
      id="top"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-16 -z-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
            <Sparkles size={16} />
            Study smarter, remember longer
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.045em] text-text-primary sm:text-6xl lg:text-7xl">
            Turn your notes into{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              lasting knowledge.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            Recall transforms your lecture notes into adaptive quizzes, clear
            knowledge maps, and a revision plan built around what you need to
            learn next.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href="/app/dashboard"
              className="px-5 py-3 shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              Get Started Free <ArrowRight size={17} />
            </Button>
            <Button
              className="px-5 py-3"
              href="/app/dashboard"
              rel="noreferrer"
              target="_blank"
              variant="secondary"
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-text-secondary">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="text-success" size={16} />
              Personalized practice
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="text-success" size={16} />
              Progress you can see
            </span>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-5xl rounded-2xl border border-border bg-gradient-to-br from-white to-indigo-50/60 p-3 shadow-card sm:p-5">
          <div className="overflow-hidden rounded-xl border border-border bg-surface-muted/60">
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
              <span className="size-2 rounded-full bg-danger/70" />
              <span className="size-2 rounded-full bg-warning/70" />
              <span className="size-2 rounded-full bg-success/70" />
              <span className="ml-2 text-xs font-medium text-text-secondary">
                Your learning dashboard
              </span>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[1.1fr_0.9fr] sm:p-6">
              <div className="rounded-xl border border-border bg-surface p-5 text-left">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Weekly progress</p>
                  <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-bold text-success">
                    +18%
                  </span>
                </div>
                <div
                  aria-label="Weekly study activity chart"
                  className="mt-6 flex items-end gap-2"
                >
                  {chartHeights.map((height, index) => (
                    <span
                      key={index}
                      className={`flex-1 origin-bottom rounded-t bg-gradient-to-t from-primary to-indigo-400 ${height}`}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-xs text-text-secondary">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>
              <div className="rounded-xl border border-primary/15 bg-primary/[0.035] p-5 text-left">
                <div className="flex items-center gap-2 text-primary">
                  <BrainCircuit size={19} />
                  <p className="text-sm font-bold">Next best review</p>
                </div>
                <p className="mt-4 font-semibold text-text-primary">
                  Cellular respiration
                </p>
                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  A quick quiz will strengthen this concept before it fades.
                </p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-indigo-400" />
                </div>
                <p className="mt-2 text-xs font-semibold text-primary">
                  68% mastery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
