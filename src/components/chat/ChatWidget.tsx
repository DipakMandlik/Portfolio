import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useGeminiChat } from "@/components/chat/useGeminiChat";
import { useSectionHighlight } from "@/components/chat/SectionHighlight";
import { scrollToSection } from "@/components/chat/scrollToSection";
import { TypingIndicator } from "@/components/chat/TypingIndicator";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const reduce = useReducedMotion();
  const { messages, isLoading, sendMessage, pendingNavigation, clearNavigation } = useGeminiChat();
  const { trigger, overlay } = useSectionHighlight();
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pendingNavigation) return;
    const sectionId = pendingNavigation;
    scrollToSection(sectionId, () => trigger(sectionId));
    clearNavigation();
  }, [pendingNavigation, trigger, clearNavigation]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const text = draft;
    setDraft("");
    void sendMessage(text);
  }

  return (
    <>
      {overlay}
      <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Chat with an AI guide about Dipak"
              initial={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 }}
              transition={{ duration: reduce ? 0.15 : 0.3, ease: EASE }}
              className="flex h-[520px] w-[360px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_30px_rgba(10,10,11,0.12)]"
            >
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div>
                  <p className="font-display text-sm text-ink">Ask about Dipak</p>
                  <p className="text-xs text-ink-soft">AI guide · powered by Gemini</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="rounded-full p-1.5 text-ink-soft transition-colors hover:bg-bg-porcelain hover:text-ink"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div
                ref={logRef}
                role="log"
                aria-live="polite"
                className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
              >
                {messages.length === 0 && (
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Hi! Ask me anything about Dipak — his experience, projects, skills, education,
                    or awards — and I'll walk you through the site.
                  </p>
                )}
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={
                      "max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed " +
                      (m.role === "user"
                        ? "ml-auto bg-blue text-white"
                        : m.error
                          ? "bg-red-50 text-red-700"
                          : "bg-bg-porcelain text-ink")
                    }
                  >
                    {m.text}
                  </div>
                ))}
                {isLoading && <TypingIndicator />}
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 border-t border-line p-3"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask a question…"
                  className="flex-1 rounded-full border border-line bg-bg-base px-4 py-2 text-sm text-ink outline-none focus:border-blue"
                />
                <button
                  type="submit"
                  disabled={isLoading || !draft.trim()}
                  aria-label="Send message"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue text-white transition-colors hover:bg-blue-deep disabled:opacity-40"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close chat" : "Open chat with an AI guide"}
          whileTap={{ scale: 0.95 }}
          className="flex size-14 items-center justify-center rounded-full bg-blue text-white shadow-[0_8px_30px_rgba(10,10,11,0.18)] transition-colors hover:bg-blue-deep"
        >
          {isOpen ? <X className="size-6" /> : <MessageCircle className="size-6" />}
        </motion.button>
      </div>
    </>
  );
}
