import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BrainCircuit, CheckCircle2, Sparkles } from "lucide-react";
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
        <section className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary/[0.045] px-6 py-8 shadow-card sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div aria-hidden="true" className="absolute -right-20 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 left-1/3 size-56 rounded-full bg-success/10 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -14 }} transition={{ duration: 0.35 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary"><Sparkles aria-hidden="true" size={15} /> Ready for your next win</span>
              <div className="mt-5 flex flex-wrap items-center gap-3"><h1 className="text-3xl font-bold tracking-[-0.05em] text-text-primary sm:text-4xl lg:text-5xl">Good morning, Student.</h1><span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1.5 text-xs font-bold text-success"><CheckCircle2 size={15} /> 12 day streak</span></div>
              <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">You are building momentum. A focused review today will make tomorrow’s recall easier and keep your knowledge sharp.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button className="px-5 py-3" href="/app/study">Continue Learning <ArrowRight size={17} /></Button><Button className="px-5 py-3" href="/app/notes" variant="secondary"><BookOpen size={17} /> Upload Notes</Button></div>
            </motion.div>
            <motion.div animate={{ opacity: 1, y: 0 }} className="relative mx-auto w-full max-w-sm" initial={{ opacity: 0, y: 16 }} transition={{ delay: 0.12, duration: 0.4 }}>
              <div className="rounded-3xl border border-primary/15 bg-surface/80 p-5 shadow-card backdrop-blur"><div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-primary text-text-inverse"><BrainCircuit size={22} /></span><span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-bold text-success">On track</span></div><div className="mt-8 rounded-2xl bg-surface-muted p-5"><div className="flex items-end justify-center gap-2"><span className="h-12 w-5 rounded-t bg-primary/35" /><span className="h-20 w-5 rounded-t bg-primary/55" /><span className="h-16 w-5 rounded-t bg-primary/70" /><span className="h-28 w-5 rounded-t bg-primary" /><span className="h-22 w-5 rounded-t bg-primary/55" /></div><p className="mt-4 text-center text-sm font-semibold text-text-primary">Your recall is growing</p></div></div>
              <motion.div animate={{ y: [0, -5, 0] }} className="absolute -left-5 top-14 rounded-2xl border border-border bg-surface px-3 py-2 shadow-card" transition={{ duration: 3, repeat: Infinity }}><p className="text-xs font-bold text-primary">84% Recall score</p></motion.div>
              <motion.div animate={{ y: [0, 5, 0] }} className="absolute -right-3 bottom-7 rounded-2xl border border-border bg-surface px-3 py-2 shadow-card" transition={{ duration: 3.4, repeat: Infinity }}><p className="text-xs font-bold text-text-primary">Next review · Today</p></motion.div>
            </motion.div>
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
