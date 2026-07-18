import { motion } from "framer-motion";
import { studyOverview } from "../../data/dashboardData";
import { StatCard } from "./StatCard";

export function StudyOverview() {
  return (
    <section
      aria-labelledby="study-overview-heading"
      className="mt-12 sm:mt-14"
    >
      <h2
        className="text-xl font-bold tracking-tight"
        id="study-overview-heading"
      >
        Study overview
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {studyOverview.map((item, index) => (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 8 }}
            key={item.label}
            transition={{ delay: index * 0.05, duration: 0.2 }}
          >
            <StatCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
