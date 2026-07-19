import { motion } from "framer-motion";
import { Copy, RotateCcw } from "lucide-react";
export interface TutorMessage {
  id: string;
  role: "user" | "ai";
  content: string;
}
interface ChatMessageProps {
  message: TutorMessage;
  onRegenerate: () => void;
}
export function ChatMessage({ message, onRegenerate }: ChatMessageProps) {
  const ai = message.role === "ai";
  return (
    <motion.article
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${ai ? "justify-start" : "justify-end"}`}
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${ai ? "rounded-bl-md bg-surface-muted text-text-primary" : "rounded-br-md bg-primary text-text-inverse"}`}
      >
        <p>{message.content}</p>
        {ai && (
          <div className="mt-2 flex gap-1">
            <button
              aria-label="Copy response"
              className="grid size-7 place-items-center rounded-md text-text-secondary hover:bg-surface hover:text-text-primary"
              onClick={() => navigator.clipboard.writeText(message.content)}
              type="button"
            >
              <Copy size={14} />
            </button>
            <button
              aria-label="Regenerate response"
              className="grid size-7 place-items-center rounded-md text-text-secondary hover:bg-surface hover:text-text-primary"
              onClick={onRegenerate}
              type="button"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        )}
      </div>
    </motion.article>
  );
}
