"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { findAnswer } from "@/lib/faqSearch";
import { suggestedQuestions } from "@/content/botKnowledge";

const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

type Message = {
  role: "user" | "bot";
  text: string;
};

const GREETING: Message = {
  role: "bot",
  text: "Hi! I'm a rule-based assistant trained on this portfolio's content. Ask me about Adelio's current job, projects, skills, or education.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function send(question: string) {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    const delay = 600;
    setTimeout(() => {
      const answer = findAnswer(trimmed);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
      setTyping(false);
    }, delay);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: APPLE_EASE }}
            className="mb-4 w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl bg-[var(--nav-blur-bg)] backdrop-blur-xl border border-hairline shadow-xl overflow-hidden flex flex-col"
            style={{ height: 460 }}
          >
            <div className="px-4 py-3 border-b border-hairline flex items-center justify-between shrink-0">
              <span className="text-[14px] font-medium">Portfolio Assistant</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-muted hover:text-foreground transition-colors text-[18px] leading-none"
              >
                ×
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[14px] leading-relaxed ${
                      m.role === "user"
                        ? "bg-accent text-white"
                        : "bg-surface text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-surface rounded-2xl px-3.5 py-2.5 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {messages.length === 1 && !typing && (
                <div className="flex flex-col gap-2 pt-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="text-left text-[13px] rounded-full bg-surface hover:bg-background border border-hairline px-3 py-1.5 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-hairline p-3 flex gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                className="flex-1 min-w-0 rounded-full bg-surface px-3.5 py-2 text-[14px] outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
                className="rounded-full bg-accent text-white w-9 h-9 shrink-0 flex items-center justify-center disabled:opacity-40 transition-opacity"
              >
                ↑
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-14 h-14 rounded-full bg-accent text-white shadow-lg flex items-center justify-center text-[22px]"
      >
        {open ? "×" : "💬"}
      </motion.button>
    </div>
  );
}
