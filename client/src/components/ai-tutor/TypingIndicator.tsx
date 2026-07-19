import { motion } from "framer-motion";
export function TypingIndicator() {
  return (
    <div
      aria-label="AI Tutor is thinking"
      className="flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-md bg-surface-muted px-4 py-3"
    >
      <span className="sr-only">AI Tutor is thinking</span>
      {[0, 1, 2].map((dot) => (
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          className="size-1.5 rounded-full bg-primary"
          key={dot}
          transition={{ delay: dot * 0.14, duration: 0.7, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
