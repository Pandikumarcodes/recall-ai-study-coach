import { useState } from "react";
import { Send } from "lucide-react";
interface ChatInputProps {
  disabled: boolean;
  onSend: (message: string) => void;
}
export function ChatInput({ disabled, onSend }: ChatInputProps) {
  const [value, setValue] = useState("");
  const send = () => {
    const message = value.trim();
    if (message && !disabled) {
      onSend(message);
      setValue("");
    }
  };
  return (
    <div className="mt-4 rounded-2xl border border-border bg-surface p-2 shadow-card">
      <textarea
        aria-label="Ask AI Tutor"
        className="min-h-20 w-full resize-none bg-transparent px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-secondary"
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send();
          }
        }}
        placeholder="Ask anything about your notes..."
        value={value}
      />
      <div className="flex items-center justify-between px-2 pb-1">
        <span className="text-xs text-text-secondary">
          Enter to send · Shift+Enter for a new line
        </span>
        <button
          aria-label="Send message"
          className="grid size-9 place-items-center rounded-xl bg-primary text-text-inverse transition hover:bg-primary-dark disabled:opacity-50"
          disabled={disabled || !value.trim()}
          onClick={send}
          type="button"
        >
          <Send size={17} />
        </button>
      </div>
    </div>
  );
}
