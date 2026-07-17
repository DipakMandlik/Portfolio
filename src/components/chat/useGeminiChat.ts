import { useCallback, useState } from "react";
import { ChatConfigError, sendChatMessage, type ChatTurn, type SectionId } from "@/lib/gemini-chat";

export type ChatMessage = {
  id: string;
  role: "user" | "model";
  text: string;
  error?: boolean;
};

let messageCounter = 0;
function nextId(): string {
  messageCounter += 1;
  return `msg-${messageCounter}`;
}

function friendlyErrorText(error: unknown): string {
  if (error instanceof ChatConfigError) {
    return "The chat assistant isn't configured on this deployment yet.";
  }
  const status = (error as { status?: number } | undefined)?.status;
  if (status === 429) {
    return "I'm getting a lot of questions right now — please try again in a moment.";
  }
  return "Something went wrong reaching the assistant. Please try again.";
}

export function useGeminiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<SectionId | null>(null);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMessage: ChatMessage = { id: nextId(), role: "user", text: trimmed };
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const history: ChatTurn[] = messages.map((m) => ({ role: m.role, text: m.text }));
        const reply = await sendChatMessage(history, trimmed);
        setMessages((prev) => [...prev, { id: nextId(), role: "model", text: reply.text }]);
        if (reply.navigateTo) {
          setPendingNavigation(reply.navigateTo);
        }
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { id: nextId(), role: "model", text: friendlyErrorText(error), error: true },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading],
  );

  const clearNavigation = useCallback(() => setPendingNavigation(null), []);

  return { messages, isLoading, sendMessage, pendingNavigation, clearNavigation };
}
