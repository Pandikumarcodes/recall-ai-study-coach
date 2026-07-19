import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useState } from "react";
const cards = [
  {
    front: "What does electric potential measure?",
    back: "The potential energy per unit charge at a point in an electric field.",
  },
  {
    front: "How does field strength change with distance?",
    back: "It decreases with the square of the distance from a point charge.",
  },
];
export function FlashcardPanel() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];
  const changeCard = (direction: number) => {
    setFlipped(false);
    setIndex((current) => (current + direction + cards.length) % cards.length);
  };
  return (
    <section className="mx-auto max-w-2xl">
      <motion.article
        animate={{ rotateY: flipped ? 180 : 0 }}
        className="min-h-72 rounded-2xl border border-border bg-surface p-8 text-center shadow-card"
        transition={{ duration: 0.45 }}
      >
        <p className="text-sm font-bold text-primary">
          Flashcard {index + 1} of {cards.length}
        </p>
        <div className="mt-12">
          <p className="text-sm text-text-secondary">
            {flipped ? "Answer" : "Question"}
          </p>
          <h2 className="mt-3 text-xl font-bold leading-8 text-text-primary">
            {flipped ? card.back : card.front}
          </h2>
        </div>
      </motion.article>
      <div className="mt-5 flex items-center justify-between">
        <button
          aria-label="Previous flashcard"
          className="grid size-10 place-items-center rounded-xl border border-border bg-surface text-text-secondary"
          onClick={() => changeCard(-1)}
          type="button"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse"
          onClick={() => setFlipped((current) => !current)}
          type="button"
        >
          <RotateCcw size={17} /> Flip
        </button>
        <button
          aria-label="Next flashcard"
          className="grid size-10 place-items-center rounded-xl border border-border bg-surface text-text-secondary"
          onClick={() => changeCard(1)}
          type="button"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
