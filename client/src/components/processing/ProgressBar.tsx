import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      aria-label={`${progress}% complete`}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={progress}
      className="h-2 overflow-hidden rounded-full bg-surface-muted"
      role="progressbar"
    >
      <motion.div
        animate={{ width: `${progress}%` }}
        className="h-full rounded-full bg-primary"
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
    </div>
  );
}
