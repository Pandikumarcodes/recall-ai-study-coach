import { motion } from "framer-motion";
import { useState } from "react";
import { Achievements } from "../../components/revision/Achievements";
import { RevisionCalendar } from "../../components/revision/RevisionCalendar";
import { RevisionHeader } from "../../components/revision/RevisionHeader";
import { RevisionStats } from "../../components/revision/RevisionStats";
import { RevisionTimeline } from "../../components/revision/RevisionTimeline";
import type { RevisionItem } from "../../components/revision/RevisionCard";
import { PageContainer } from "../../components/layout/PageContainer";
import { revisionPlan, revisionPlanMeta } from "../../mocks/revisionPlan";

const initialItems: RevisionItem[] = revisionPlan;

export function RevisionPlanPage() {
  const [items, setItems] = useState(initialItems);
  const completed = revisionPlanMeta.progress.completed + initialItems.length - items.length;

  return <PageContainer><motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.25 }}><RevisionHeader /><RevisionStats /><div className="mt-12 grid gap-5 xl:grid-cols-[1fr_20rem]"><div><RevisionTimeline items={items} onComplete={(id) => setItems((current) => current.filter((item) => item.id !== id))} /></div><aside className="space-y-5"><RevisionCalendar /><section className="rounded-2xl border border-border bg-surface p-5 shadow-card"><h2 className="text-lg font-bold text-text-primary">Weekly revision progress</h2><p className="mt-4 text-3xl font-bold text-text-primary">{completed}/{revisionPlanMeta.progress.total}</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-muted"><div className={`h-full rounded-full bg-primary ${revisionPlanMeta.progress.progressClass}`} /></div><dl className="mt-5 grid grid-cols-2 gap-4 text-sm"><div><dt className="text-text-secondary">Current streak</dt><dd className="mt-1 font-bold text-text-primary">{revisionPlanMeta.progress.currentStreak}</dd></div><div><dt className="text-text-secondary">Longest streak</dt><dd className="mt-1 font-bold text-text-primary">{revisionPlanMeta.progress.longestStreak}</dd></div><div><dt className="text-text-secondary">Completion</dt><dd className="mt-1 font-bold text-primary">{revisionPlanMeta.progress.completion}</dd></div></dl></section><Achievements /></aside></div></motion.div></PageContainer>;
}
