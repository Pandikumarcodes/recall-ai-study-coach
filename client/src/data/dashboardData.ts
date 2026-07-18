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
    icon: Flame,
    label: "Study streak",
    supportingText: "Keep the momentum going",
    value: "12 days",
  },
  {
    icon: BrainCircuit,
    label: "Recall Score",
    supportingText: "4 points this week",
    value: "84%",
  },
  {
    icon: Clock3,
    label: "Weekly study time",
    supportingText: "Of your 8 hour goal",
    value: "6h 40m",
  },
  {
    icon: FileText,
    label: "Notes uploaded",
    supportingText: "Across 5 subjects",
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
