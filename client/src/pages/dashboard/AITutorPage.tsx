import { useState } from "react";
import { AIHeader } from "../../components/ai-tutor/AIHeader";
import { ChatInput } from "../../components/ai-tutor/ChatInput";
import { ChatWindow } from "../../components/ai-tutor/ChatWindow";
import type { TutorMessage } from "../../components/ai-tutor/ChatMessage";
import { ConversationHistory } from "../../components/ai-tutor/ConversationHistory";
import { SuggestedQuestions } from "../../components/ai-tutor/SuggestedQuestions";
import { PageContainer } from "../../components/layout/PageContainer";

const initialMessages: TutorMessage[] = [
  {
    id: "welcome",
    role: "ai",
    content:
      "I’m ready to help you understand Electric fields and potential. Ask me for an explanation, example, or practice question.",
  },
];
const reply =
  "Electric fields describe how a charged object influences the space around it. A positive test charge moves in the direction of the field, while a negative charge moves in the opposite direction. Think of it like a map of the push or pull experienced by another charge.";

export function AITutorPage() {
  const [messages, setMessages] = useState(initialMessages);
  const send = (content: string) => {
    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", content },
      { id: crypto.randomUUID(), role: "ai", content: reply },
    ]);
  };
  return (
    <PageContainer>
      <AIHeader />
      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_17rem]">
        <div>
          <SuggestedQuestions onSelect={send} />
          <ChatWindow
            messages={messages}
            onRegenerate={() => send("Please explain that in another way.")}
          />
          <ChatInput disabled={false} onSend={send} />
          <button
            className="mt-3 text-sm font-semibold text-text-secondary transition hover:text-danger"
            onClick={() => setMessages(initialMessages)}
            type="button"
          >
            Clear conversation
          </button>
        </div>
        <ConversationHistory />
      </div>
    </PageContainer>
  );
}
