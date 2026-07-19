export const tutorMock = {
  currentMaterial: "React Fundamentals",
  welcomeMessage:
    "I’m ready to help you understand React Fundamentals. Ask me for an explanation, example, or practice question.",
  suggestedQuestions: [
    "Explain this chapter",
    "Summarize the difficult topics",
    "Give real-world examples",
    "Create practice questions",
    "Help me remember this concept",
  ],
  history: {
    today: ["React Hooks explained", "Component composition review"],
    yesterday: ["Props and state quiz"],
  },
};
export const tutorResponses: Record<string, string> = {
  "explain react hooks":
    "React Hooks are functions that let function components use state and lifecycle-like behavior. For example, useState stores a value, while useEffect runs side effects after React updates the page.",
  default:
    "Let’s break that down. Start by identifying the component, the data it receives through props, and any state that changes over time. I can also create a short example or practice question for this topic.",
};
