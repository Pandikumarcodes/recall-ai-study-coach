import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { LearningInsights } from "../components/dashboard/LearningInsights";
import { QuickActions } from "../components/dashboard/QuickActions";
import { RecentMaterials } from "../components/dashboard/RecentMaterials";
import { StudyOverview } from "../components/dashboard/StudyOverview";
import { PageContainer } from "../components/layout/PageContainer";
import { Button } from "../components/ui/Button";
import { recentMaterials } from "../data/dashboardData";

export function DashboardHome() {
  return (
    <PageContainer>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.28 }}
      >
        <section className="relative overflow-hidden rounded-2xl border border-primary/15 bg-primary/[0.045] p-6 shadow-card sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 size-48 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
              <Sparkles aria-hidden="true" size={15} /> Ready for your next win
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.045em] text-text-primary sm:text-4xl">
              Good morning, Student.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-text-secondary">
              You are building a 12-day learning streak. A focused review today
              will make tomorrow’s recall easier.
            </p>
            <Button className="mt-7 px-5 py-3" href="#recent-materials">
              Continue learning <ArrowRight size={17} />
            </Button>
          </div>
        </section>
        <StudyOverview />
        <QuickActions />
        <RecentMaterials materials={recentMaterials} />
        <LearningInsights />
      </motion.div>
    </PageContainer>
  );
}
