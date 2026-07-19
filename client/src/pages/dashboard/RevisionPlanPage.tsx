import { motion } from "framer-motion";
import { useState } from "react";
import { Achievements } from "../../components/revision/Achievements";
import { RevisionCalendar } from "../../components/revision/RevisionCalendar";
import { RevisionHeader } from "../../components/revision/RevisionHeader";
import { RevisionStats } from "../../components/revision/RevisionStats";
import { RevisionTimeline } from "../../components/revision/RevisionTimeline";
import type { RevisionItem } from "../../components/revision/RevisionCard";
import { PageContainer } from "../../components/layout/PageContainer";
const initialItems: RevisionItem[] = [
  {
    id: "1",
    topic: "Electric fields and potential",
    subject: "Physics",
    difficulty: "Needs review",
    score: 68,
    lastReviewed: "3 days ago",
    nextReview: "Today",
    time: "8 min",
  },
  {
    id: "2",
    topic: "The French Revolution",
    subject: "History",
    difficulty: "Medium",
    score: 74,
    lastReviewed: "5 days ago",
    nextReview: "Today",
    time: "10 min",
  },
  {
    id: "3",
    topic: "Cellular respiration",
    subject: "Biology",
    difficulty: "Strong",
    score: 91,
    lastReviewed: "Yesterday",
    nextReview: "Tomorrow",
    time: "6 min",
  },
];
export function RevisionPlanPage() {
  const [items, setItems] = useState(initialItems);
  const completed = initialItems.length - items.length + 3;
  return (
    <PageContainer>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
      >
        <RevisionHeader />
        <RevisionStats />
        <div className="mt-12 grid gap-5 xl:grid-cols-[1fr_20rem]">
          <div>
            <RevisionTimeline
              items={items}
              onComplete={(id) =>
                setItems((current) => current.filter((item) => item.id !== id))
              }
            />
          </div>
          <aside className="space-y-5">
            <RevisionCalendar />
            <section className="rounded-2xl border border-border bg-surface p-5 shadow-card">
              <h2 className="text-lg font-bold text-text-primary">
                Weekly revision progress
              </h2>
              <p className="mt-4 text-3xl font-bold text-text-primary">
                {completed}/7
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-muted">
                <div className="h-full w-[43%] rounded-full bg-primary" />
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-text-secondary">Current streak</dt>
                  <dd className="mt-1 font-bold text-text-primary">7 days</dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Longest streak</dt>
                  <dd className="mt-1 font-bold text-text-primary">18 days</dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Completion</dt>
                  <dd className="mt-1 font-bold text-primary">43%</dd>
                </div>
              </dl>
            </section>
            <Achievements />
          </aside>
        </div>
      </motion.div>
    </PageContainer>
  );
}
