import { useState } from "react";
import { quizQuestions } from "../../mocks/quiz";
export function QuizPanel() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const question = quizQuestions[questionIndex];
  const complete = questionIndex === quizQuestions.length;
  const nextQuestion = () => { if (selectedOption === null) return; if (selectedOption === question.answer) setScore((current) => current + 1); setSelectedOption(null); setQuestionIndex((current) => current + 1); };
  const restart = () => { setSelectedOption(null); setQuestionIndex(0); setScore(0); };
  if (complete) return <section className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-6 text-center shadow-card"><p className="text-sm font-bold text-primary">Quiz complete</p><h2 className="mt-3 text-2xl font-bold text-text-primary">You scored {score}/{quizQuestions.length}</h2><button className="mt-6 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse" onClick={restart} type="button">Restart Quiz</button></section>;
  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-primary">Question {questionIndex + 1} of {quizQuestions.length}</p>
        <span className="text-sm text-text-secondary">{Math.round((questionIndex / quizQuestions.length) * 100)}% complete</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted">
        <div className={`h-full rounded-full bg-primary ${questionIndex === 0 ? "w-0" : "w-1/2"}`} />
      </div>
      <h2 className="mt-7 text-xl font-bold leading-8 text-text-primary">
        {question.question}
      </h2>
      <div className="mt-6 space-y-3">
        {question.options.map((option, index) => (
          <button
            className={`w-full rounded-xl border p-4 text-left text-sm font-medium transition ${selectedOption === index ? (index === question.answer ? "border-success bg-success/10 text-success" : "border-danger bg-danger/10 text-danger") : "border-border bg-surface text-text-primary hover:border-primary/30"}`}
            key={option}
            onClick={() => setSelectedOption(index)}
            type="button"
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && <p className="mt-4 text-sm text-text-secondary">{question.explanation}</p>}
      <button className="mt-6 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse disabled:opacity-50" disabled={selectedOption === null} onClick={nextQuestion} type="button">{questionIndex === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}</button>
    </section>
  );
}
