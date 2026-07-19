export const quizQuestions = [
  {
    id: "q-1",
    question: "Which hook stores component state?",
    options: ["useState", "useMemo", "useRef", "useEffect"],
    answer: 0,
    explanation: "useState declares a reactive state value and its updater.",
  },
  {
    id: "q-2",
    question: "How does data usually flow in React?",
    options: [
      "Child to parent",
      "Parent to child",
      "Between siblings only",
      "From the DOM",
    ],
    answer: 1,
    explanation:
      "React uses one-way data flow from parent components to children through props.",
  },
];
