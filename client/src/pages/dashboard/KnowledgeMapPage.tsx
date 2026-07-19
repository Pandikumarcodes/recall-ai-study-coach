import { motion } from "framer-motion";
import { useState } from "react";
import { KnowledgeHeader } from "../../components/knowledge-map/KnowledgeHeader";
import { KnowledgeMapCanvas } from "../../components/knowledge-map/KnowledgeMapCanvas";
import { KnowledgeSidebar } from "../../components/knowledge-map/KnowledgeSidebar";
import { KnowledgeStats } from "../../components/knowledge-map/KnowledgeStats";
import { PageContainer } from "../../components/layout/PageContainer";
interface Selection {
  title: string;
  description: string;
  importance: string;
}
export function KnowledgeMapPage() {
  const [selection, setSelection] = useState<Selection>();
  return (
    <PageContainer>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
      >
        <KnowledgeHeader />
        <KnowledgeStats />
        <div className="mt-12 grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_20rem]">
          <KnowledgeMapCanvas onSelect={setSelection} />
          <KnowledgeSidebar node={selection} />
        </div>
      </motion.div>
    </PageContainer>
  );
}
