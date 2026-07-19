import { Award, BrainCircuit, Flame } from "lucide-react";
import { revisionPlanMeta } from "../../mocks/revisionPlan";

const achievementIcons = { flame: Flame, award: Award, brain: BrainCircuit };

export function Achievements() {
  return <section className="mt-5 rounded-2xl border border-border bg-surface p-5 shadow-card"><h2 className="text-lg font-bold text-text-primary">Achievements</h2><div className="mt-5 space-y-4">{revisionPlanMeta.achievements.map((achievement) => { const Icon = achievementIcons[achievement.icon as keyof typeof achievementIcons]; return <div className="flex gap-3" key={achievement.title}><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon size={18} /></span><div><h3 className="text-sm font-bold text-text-primary">{achievement.title}</h3><p className="mt-0.5 text-xs text-text-secondary">{achievement.detail}</p></div></div>; })}</div></section>;
}
