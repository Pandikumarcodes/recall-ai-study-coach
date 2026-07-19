import { useState } from "react";
import { AIHeader } from "../../components/ai-tutor/AIHeader";
import { ChatInput } from "../../components/ai-tutor/ChatInput";
import { ChatWindow } from "../../components/ai-tutor/ChatWindow";
import type { TutorMessage } from "../../components/ai-tutor/ChatMessage";
import { ConversationHistory } from "../../components/ai-tutor/ConversationHistory";
import { SuggestedQuestions } from "../../components/ai-tutor/SuggestedQuestions";
import { PageContainer } from "../../components/layout/PageContainer";
import { tutorMock, tutorResponses } from "../../mocks/tutor";

const initialMessages: TutorMessage[] = [{ id: "welcome", role: "ai", content: tutorMock.welcomeMessage }];

export function AITutorPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [thinking, setThinking] = useState(false);
  const send = (content: string) => {
    if (thinking) return;
    setMessages((current) => [...current, { id: crypto.randomUUID(), role: "user", content }]);
    setThinking(true);
    const response = tutorResponses[content.toLowerCase()] ?? tutorResponses.default;
    window.setTimeout(() => { setMessages((current) => [...current, { id: crypto.randomUUID(), role: "ai", content: response }]); setThinking(false); }, 1200);
  };
  return <PageContainer><AIHeader /><div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_17rem]"><div><SuggestedQuestions onSelect={send} /><ChatWindow messages={messages} onRegenerate={() => send("Please explain that in another way.")} thinking={thinking} /><ChatInput disabled={thinking} onSend={send} /><button className="mt-3 text-sm font-semibold text-text-secondary transition hover:text-danger" onClick={() => setMessages(initialMessages)} type="button">Clear conversation</button></div><ConversationHistory /></div></PageContainer>;
}
