import { CircleDot, GitFork, GraduationCap, TriangleAlert } from "lucide-react";
import { knowledgeMap } from "../../mocks/knowledgeMap";

const stats = [
  { icon: CircleDot, label: "Total concepts", value: String(1 + knowledgeMap.branches.length + knowledgeMap.branches.reduce((total, branch) => total + branch.children.length, 0)) },
  { icon: GitFork, label: "Connections", value: String(knowledgeMap.branches.length + knowledgeMap.branches.reduce((total, branch) => total + branch.children.length, 0)) },
  { icon: GraduationCap, label: "Mastered", value: String(knowledgeMap.stats.mastered) },
  { icon: TriangleAlert, label: "Needs review", value: String(knowledgeMap.stats.needsReview) },
];
export function KnowledgeStats() { return <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map((stat) => { const Icon = stat.icon; return <article className="rounded-2xl border border-border bg-surface p-5 shadow-card" key={stat.label}><span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon size={20} /></span><p className="mt-5 text-3xl font-bold text-text-primary">{stat.value}</p><p className="mt-1 text-sm font-semibold text-text-secondary">{stat.label}</p></article>; })}</div>; }
