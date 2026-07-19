type StudyTab = "summary" | "flashcards" | "quiz" | "knowledge-map";
interface StudyTabsProps {
  activeTab: StudyTab;
  onChange: (tab: StudyTab) => void;
}
const tabs: { id: StudyTab; label: string }[] = [
  { id: "summary", label: "Summary" },
  { id: "flashcards", label: "Flashcards" },
  { id: "quiz", label: "Quiz" },
  { id: "knowledge-map", label: "Knowledge Map" },
];
export function StudyTabs({ activeTab, onChange }: StudyTabsProps) {
  return (
    <div
      aria-label="Study content"
      className="flex gap-1 overflow-x-auto rounded-xl border border-border bg-surface-muted p-1"
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          aria-selected={activeTab === tab.id}
          className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition ${activeTab === tab.id ? "bg-surface text-primary shadow-sm" : "text-text-secondary hover:text-text-primary"}`}
          key={tab.id}
          onClick={() => onChange(tab.id)}
          role="tab"
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
