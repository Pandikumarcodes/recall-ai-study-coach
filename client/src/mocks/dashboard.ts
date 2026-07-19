export const dashboardMock = {
  hero: {
    greeting: "Good morning, Student.",
    eyebrow: "Ready for your next win",
    message:
      "You are building momentum. A focused review today will make tomorrow’s recall easier and keep your knowledge sharp.",
    recallScore: "84%",
    streak: "12 day streak",
    status: "On track",
    nextReview: "Today",
  },
  studyOverview: [
    { icon: "flame", label: "Study streak", value: "12 days", trend: "↑ +2 days", trendTone: "warning" as const, supportingText: "Keep the momentum going", chartHeights: ["h-4", "h-6", "h-5", "h-8", "h-7", "h-10", "h-12"] },
    { icon: "brain", label: "Recall Score", value: "84%", trend: "↑ +8%", trendTone: "success" as const, supportingText: "4 points this week", chartHeights: ["h-5", "h-6", "h-7", "h-6", "h-9", "h-11", "h-13"] },
    { icon: "clock", label: "Weekly study time", value: "6h 40m", trend: "↑ +1h 20m", trendTone: "primary" as const, supportingText: "Of your 8 hour goal", chartHeights: ["h-4", "h-7", "h-6", "h-10", "h-8", "h-12", "h-11"] },
    { icon: "file", label: "Notes uploaded", value: "24", trend: "+6", trendTone: "primary" as const, supportingText: "Across 5 subjects", chartHeights: ["h-3", "h-4", "h-6", "h-5", "h-8", "h-9", "h-11"] },
  ],
  recentMaterials: [
    { icon: "atom", lastStudied: "Today", progressClass: "w-[76%]", recallScore: 82, subject: "Physics", title: "Electric fields and potential" },
    { icon: "landmark", lastStudied: "Yesterday", progressClass: "w-[58%]", recallScore: 68, subject: "History", title: "The French Revolution" },
    { icon: "book", lastStudied: "3 days ago", progressClass: "w-[91%]", recallScore: 94, subject: "Biology", title: "Cellular respiration" },
  ],
  learningInsights: [
    { icon: "alert", label: "Weakest subject", detail: "French Revolution · 68% recall score", tone: "text-warning" },
    { icon: "trophy", label: "Strongest subject", detail: "Cellular respiration · 94% recall score", tone: "text-success" },
    { icon: "calendar", label: "Next revision", detail: "Electric fields · Tomorrow at 9:00 AM", tone: "text-primary" },
  ],
  uploadedNotes: [
    { id: "1", name: "Physics - Electric Fields.pdf", subject: "Physics", uploadedAt: "Today", size: "2.4 MB", status: "Ready" as const },
    { id: "2", name: "Cellular Respiration.docx", subject: "Biology", uploadedAt: "Yesterday", size: "840 KB", status: "Processing" as const },
  ],
};
