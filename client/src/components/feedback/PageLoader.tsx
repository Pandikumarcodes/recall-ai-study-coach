import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <div aria-busy="true" aria-live="polite" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 sm:py-9 xl:px-10 xl:py-10">
      <span className="sr-only">Loading page</span>
      <div className="animate-pulse space-y-5">
        <div className="h-8 w-48 rounded-lg bg-surface-muted" />
        <div className="h-5 w-full max-w-lg rounded-lg bg-surface-muted" />
        <motion.div animate={{ opacity: [0.55, 1, 0.55] }} className="h-64 rounded-2xl border border-border bg-surface" transition={{ duration: 1.2, repeat: Infinity }} />
      </div>
    </div>
  );
}
