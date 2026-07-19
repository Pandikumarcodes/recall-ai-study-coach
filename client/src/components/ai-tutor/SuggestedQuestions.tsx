const questions = [
  "Explain this chapter",
  "Summarize the difficult topics",
  "Give real-world examples",
  "Create practice questions",
  "Help me remember this concept",
];
interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}
export function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <section aria-label="Suggested questions" className="mt-7">
      <p className="text-sm font-semibold text-text-primary">
        Suggested questions
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {questions.map((question) => (
          <button
            className="rounded-full border border-border bg-surface px-3 py-2 text-sm text-text-secondary transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
            key={question}
            onClick={() => onSelect(question)}
            type="button"
          >
            {question}
          </button>
        ))}
      </div>
    </section>
  );
}
