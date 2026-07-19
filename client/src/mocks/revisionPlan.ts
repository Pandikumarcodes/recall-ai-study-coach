export const revisionPlan = [
  { id: "day-1", topic: "Components · JSX", subject: "React Fundamentals", difficulty: "Needs review", score: 68, lastReviewed: "3 days ago", nextReview: "Today", time: "6 min" },
  { id: "day-2", topic: "Props · State", subject: "React Fundamentals", difficulty: "Needs review", score: 74, lastReviewed: "Yesterday", nextReview: "Day 2", time: "7 min" },
  { id: "day-3", topic: "Hooks", subject: "React Fundamentals", difficulty: "Medium", score: 80, lastReviewed: "Yesterday", nextReview: "Day 3", time: "8 min" },
  { id: "day-4", topic: "Context API", subject: "React Fundamentals", difficulty: "Medium", score: 86, lastReviewed: "Yesterday", nextReview: "Day 4", time: "9 min" },
  { id: "day-5", topic: "Revision", subject: "React Fundamentals", difficulty: "Medium", score: 92, lastReviewed: "Yesterday", nextReview: "Day 5", time: "10 min" },
];

export const revisionPlanMeta = {
  stats: [
    { icon: "todo", label: "Due today", value: "4" },
    { icon: "calendar", label: "Upcoming reviews", value: "12" },
    { icon: "complete", label: "Completed today", value: "3" },
    { icon: "brain", label: "Overall recall", value: "84%" },
  ],
  calendar: [{ label: "Today", count: 4 }, { label: "Tomorrow", count: 3 }, { label: "This week", count: 9 }],
  progress: { completed: 3, total: 7, progressClass: "w-[43%]", currentStreak: "7 days", longestStreak: "18 days", completion: "43%" },
  achievements: [
    { icon: "flame", title: "7 Day Streak", detail: "You are building consistency." },
    { icon: "award", title: "50 Flashcards Reviewed", detail: "Knowledge is compounding." },
    { icon: "brain", title: "Recall Master", detail: "Reached an 85% recall score." },
  ],
};
