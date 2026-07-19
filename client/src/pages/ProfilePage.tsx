import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  FileUp,
  GraduationCap,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { AchievementGallery } from "../components/profile/AchievementGallery";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import { ProfileStats } from "../components/profile/ProfileStats";
import { PageContainer } from "../components/layout/PageContainer";
import { Button } from "../components/ui/Button";
const activity = [
  {
    icon: FileUp,
    title: "Uploaded Biology Notes",
    description: "Cellular respiration chapter",
    time: "12 minutes ago",
  },
  {
    icon: CheckCircle2,
    title: "Completed Physics Quiz",
    description: "Electric Fields · scored 9/10",
    time: "Yesterday",
  },
  {
    icon: Sparkles,
    title: "Generated Flashcards",
    description: "Created 24 cards from your notes",
    time: "2 days ago",
  },
  {
    icon: PlayCircle,
    title: "Finished Revision Session",
    description: "French Revolution review",
    time: "3 days ago",
  },
];
const bars = ["h-12", "h-20", "h-16", "h-28", "h-24", "h-32", "h-18"];
export function ProfilePage() {
  return (
    <PageContainer>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
      >
        <ProfileHeader />
        <ProfileStats />
        <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_22rem]">
          <div className="space-y-5">
            <section className="rounded-2xl border border-border bg-surface p-5 shadow-card">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-text-primary">
                  Weekly Learning Activity
                </h2>
                <span className="text-sm font-semibold text-primary">
                  6h 40m total
                </span>
              </div>
              <div className="mt-8 flex h-36 items-end justify-between gap-3">
                {bars.map((height, index) => (
                  <span
                    className={`flex-1 rounded-t-lg bg-primary/80 ${height}`}
                    key={index}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-xs text-text-secondary">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </section>
            <section className="rounded-2xl border border-border bg-surface p-5 shadow-card">
              <h2 className="text-lg font-bold text-text-primary">
                Current Learning Goals
              </h2>
              {[
                { title: "Upload 5 Notes", percentage: 80 },
                { title: "Complete 20 Quizzes", percentage: 55 },
                { title: "Review 100 Flashcards", percentage: 72 },
              ].map((goal) => (
                <div className="mt-5" key={goal.title}>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-text-primary">
                      {goal.title}
                    </span>
                    <span className="text-primary">
                      {goal.percentage}% complete
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-muted">
                    <motion.div
                      animate={{ width: `${goal.percentage}%` }}
                      className="h-full rounded-full bg-primary"
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </section>
            <AchievementGallery />
          </div>
          <aside className="space-y-5">
            <section className="rounded-2xl border border-border bg-surface p-5 shadow-card">
              <h2 className="text-lg font-bold text-text-primary">
                Recent Activity
              </h2>
              <ol className="mt-5 space-y-4">
                {activity.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      className="flex gap-3"
                      initial={{ opacity: 0, x: 6 }}
                      key={item.title}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">
                          {item.title}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {item.description} · {item.time}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </section>
            <section className="rounded-2xl border border-border bg-surface p-5 shadow-card">
              <h2 className="text-lg font-bold text-text-primary">
                Quick Actions
              </h2>
              <div className="mt-5 grid gap-2">
                <Button href="/app/study">
                  <PlayCircle size={16} /> Continue Learning
                </Button>
                <Button href="/app/notes" variant="secondary">
                  <FileUp size={16} /> Upload Notes
                </Button>
                <Button href="/app/quiz" variant="secondary">
                  <GraduationCap size={16} /> Generate Quiz
                </Button>
                <Button href="/app/ai-tutor" variant="secondary">
                  <Bot size={16} /> Open AI Tutor
                </Button>
              </div>
            </section>
          </aside>
        </div>
      </motion.div>
    </PageContainer>
  );
}
