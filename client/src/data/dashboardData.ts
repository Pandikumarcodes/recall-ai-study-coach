import {
  Atom,
  BookOpen,
  BrainCircuit,
  Clock3,
  FileText,
  Flame,
  Landmark,
} from "lucide-react";
import type { StudyMaterial, StudyOverviewItem } from "../types/dashboard";

export const studyOverview: StudyOverviewItem[] = [
  {
    chartHeights: ["h-4", "h-6", "h-5", "h-8", "h-7", "h-10", "h-12"],
    icon: Flame,
    label: "Study streak",
    supportingText: "Keep the momentum going",
    trend: "↑ +2 days",
    trendTone: "warning",
    value: "12 days",
  },
  {
    chartHeights: ["h-5", "h-6", "h-7", "h-6", "h-9", "h-11", "h-13"],
    icon: BrainCircuit,
    label: "Recall Score",
    supportingText: "4 points this week",
    trend: "↑ +8%",
    trendTone: "success",
    value: "84%",
  },
  {
    chartHeights: ["h-4", "h-7", "h-6", "h-10", "h-8", "h-12", "h-11"],
    icon: Clock3,
    label: "Weekly study time",
    supportingText: "Of your 8 hour goal",
    trend: "↑ +1h 20m",
    trendTone: "primary",
    value: "6h 40m",
  },
  {
    chartHeights: ["h-3", "h-4", "h-6", "h-5", "h-8", "h-9", "h-11"],
    icon: FileText,
    label: "Notes uploaded",
    supportingText: "Across 5 subjects",
    trend: "+6",
    trendTone: "primary",
    value: "24",
  },
];

export const recentMaterials: StudyMaterial[] = [
  {
    icon: Atom,
    lastStudied: "Today",
    progressClass: "w-[76%]",
    recallScore: 82,
    subject: "Physics",
    title: "Electric fields and potential",
  },
  {
    icon: Landmark,
    lastStudied: "Yesterday",
    progressClass: "w-[58%]",
    recallScore: 68,
    subject: "History",
    title: "The French Revolution",
  },
  {
    icon: BookOpen,
    lastStudied: "3 days ago",
    progressClass: "w-[91%]",
    recallScore: 94,
    subject: "Biology",
    title: "Cellular respiration",
  },
];
