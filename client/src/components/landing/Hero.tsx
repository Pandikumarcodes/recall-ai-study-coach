import { motion } from "framer-motion";
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
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary"
          >
            <Sparkles size={16} />
            Study smarter, remember longer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 text-4xl font-bold tracking-[-0.045em] text-text-primary sm:text-6xl lg:text-7xl"
          >
            Turn your notes into{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              lasting knowledge.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg"
          >
            Recall transforms your lecture notes into adaptive quizzes, clear
            knowledge maps, and a revision plan built around what you need to
            learn next.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Button
              href="#how-it-works"
              className="px-5 py-3 shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              Get Started Free <ArrowRight size={17} />
            </Button>
            <Button
              className="px-5 py-3"
              href="https://github.com"
              rel="noreferrer"
              target="_blank"
              variant="secondary"
            >
              Watch Demo
            </Button>
          </motion.div>
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
        </motion.div>
        <motion.div
          className="mx-auto mt-14 max-w-5xl rounded-2xl border border-border bg-gradient-to-br from-white to-indigo-50/60 p-3 shadow-card sm:p-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: {
              duration: 0.6,
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
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
                    <motion.span
                      key={index}
                      className={`flex-1 origin-bottom rounded-t bg-gradient-to-t from-primary to-indigo-400 ${height}`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.45,
                        ease: "easeOut",
                      }}
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
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-indigo-400"
                    initial={{ width: 0 }}
                    animate={{ width: "68%" }}
                    transition={{
                      delay: 0.8,
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-primary">
                  68% mastery
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
