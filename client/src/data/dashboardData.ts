import { Atom, BookOpen, BrainCircuit, Clock3, FileText, Flame, Landmark } from "lucide-react";
import { dashboardMock } from "../mocks/dashboard";
import type { StudyMaterial, StudyOverviewItem } from "../types/dashboard";

const overviewIcons = { flame: Flame, brain: BrainCircuit, clock: Clock3, file: FileText };
const materialIcons = { atom: Atom, landmark: Landmark, book: BookOpen };

export const studyOverview: StudyOverviewItem[] = dashboardMock.studyOverview.map(
  (item) => ({ ...item, icon: overviewIcons[item.icon as keyof typeof overviewIcons] }),
);

export const recentMaterials: StudyMaterial[] = dashboardMock.recentMaterials.map(
  (item) => ({ ...item, icon: materialIcons[item.icon as keyof typeof materialIcons] }),
);
