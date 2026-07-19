import { useEffect, useRef } from "react";
import { ChatMessage, type TutorMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
interface ChatWindowProps {
  messages: TutorMessage[];
  onRegenerate: () => void;
  thinking: boolean;
}
export function ChatWindow({ messages, onRegenerate, thinking }: ChatWindowProps) {
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);
  return (
    <section
      aria-label="Conversation"
      className="mt-7 h-[26rem] overflow-y-auto rounded-2xl border border-border bg-surface p-4 shadow-card sm:p-5"
    >
      <div className="space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onRegenerate={onRegenerate}
          />
        ))}
        {thinking && <TypingIndicator />}
        <div ref={endRef} />
      </div>
    </section>
  );
}
