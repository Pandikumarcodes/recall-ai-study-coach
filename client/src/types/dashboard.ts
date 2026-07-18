import type { LucideIcon } from "lucide-react";

export interface StudyMaterial {
  icon: LucideIcon;
  lastStudied: string;
  progressClass: string;
  recallScore: number;
  subject: string;
  title: string;
}

export interface StudyOverviewItem {
  icon: LucideIcon;
  label: string;
  supportingText: string;
  value: string;
}
