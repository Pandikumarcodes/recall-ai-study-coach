import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FlashcardPanel } from "../../components/study/FlashcardPanel";
import { KnowledgeMapPanel } from "../../components/study/KnowledgeMapPanel";
import { QuizPanel } from "../../components/study/QuizPanel";
import { StudyHeader } from "../../components/study/StudyHeader";
import { StudyTabs } from "../../components/study/StudyTabs";
import { SummaryPanel } from "../../components/study/SummaryPanel";
import { PageContainer } from "../../components/layout/PageContainer";
type StudyTab = "summary" | "flashcards" | "quiz" | "knowledge-map";
export function StudyPage() {
  const [activeTab, setActiveTab] = useState<StudyTab>("summary");
  const panels = {
    summary: <SummaryPanel />,
    flashcards: <FlashcardPanel />,
    quiz: <QuizPanel />,
    "knowledge-map": <KnowledgeMapPanel />,
  };
  return (
    <PageContainer>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.25 }}
      >
        <StudyHeader />
        <div className="mt-7">
          <StudyTabs activeTab={activeTab} onChange={setActiveTab} />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
            exit={{ opacity: 0, y: -6 }}
            initial={{ opacity: 0, y: 6 }}
            key={activeTab}
            transition={{ duration: 0.2 }}
          >
            {panels[activeTab]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </PageContainer>
  );
}
