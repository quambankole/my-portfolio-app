"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

// ---------------------------
// Simple helpers (JS version)
// ---------------------------
function uuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "id-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ---------------------------
// Default FAQ (no‑API fallback)
// ---------------------------
const DEFAULT_KB = [
  {
    q: /who (are|is) (you|quam)|about you|summary|bio/i,
    a: "I'm Quam Bankole — a Mechatronics + Web Developer blending frontend (Next.js/React, Tailwind) with IoT/AI. I like building practical, fast UX and automation tools.",
  },
  {
    q: /projects?|portfolio|what have you built|showcase/i,
    a: "Recent highlights: 1) Meal Notifier web app (notifications + daily meal previews), 2) Log Analyzer for VoteMate (Node + Loki + Grafana), 3) Web scrapers for Canadian political candidates (Puppeteer/Node). Ask about any of these.",
  },
  {
    q: /tech|stack|skills|tools|languages?/i,
    a: "Frontend: Next.js, React, TypeScript, Tailwind. Data/infra: Node.js, Express, MongoDB or MySQL, Grafana/Loki. IoT: Arduino, Raspberry Pi. AI: prompt engineering, RAG/agents (learning).",
  },
  {
    q: /availability|hire|work with you|freelance|open to roles?/i,
    a: "I'm open to roles like Frontend Dev, IoT/Mechatronics + Web, or AI‑assisted dev. Send a message via the contact form or LinkedIn.",
  },
  {
    q: /contact|email|reach you|linkedin/i,
    a: "Best way: use the contact section of the site or message me on LinkedIn. Happy to chat!",
  },
];

// Naive local matcher (JS)
function localAnswer(userText) {
  for (const { q, a } of DEFAULT_KB) {
    if (q.test(userText)) return a;
  }
  return "I might not have that locally. Try asking about my projects, stack, or availability — or enable the OpenAI route for deeper answers.";
}

// ---------------------------
// Component (JS)
// ---------------------------
export default function PortfolioAskChatbot({
  title = "Ask Quam",
  subtitle = "Curious about my projects, skills, or availability?",
  useApi = true, // Set to false to force KB‑only mode
  endpoint = "/api/chat",
  seedMessages = [], // optional custom system or initial assistant msgs
  accentClass = "bg-black text-white",
} = {}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_chat_history");
      if (saved) return JSON.parse(saved);
    }
    return [
      { id: uuid(), role: "assistant", content: subtitle, ts: Date.now() },
      ...seedMessages,
    ];
  });
  const [loading, setLoading] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    if (panelRef.current) {
      panelRef.current.scrollTo({ top: panelRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, open]);

  const chatFn = useMemo(() => {
    if (!useApi) {
      return async (history) => ({ id: uuid(), role: "assistant", content: localAnswer(history[history.length - 1]?.content || "") });
    }
    return async (history) => {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok) {
        const text = await res.text();
        return { id: uuid(), role: "assistant", content: `API error: ${res.status}. ${text}` };
      }
      const data = await res.json();
      return data.message; // expects { message: {id, role:"assistant", content} }
    };
  }, [useApi, endpoint]);

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { id: uuid(), role: "user", content: trimmed, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const reply = await chatFn([...(messages || []), userMsg]);
      setMessages((m) => [...m, reply]);
    } catch (err) {
      const msg = (err && err.message) ? err.message : String(err);
      setMessages((m) => [...m, { id: uuid(), role: "assistant", content: `Oops, something went wrong: ${msg}` }]);
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([{ id: uuid(), role: "assistant", content: subtitle, ts: Date.now() }]);
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle chat"
        className={`fixed bottom-5 right-5 ${accentClass} shadow-xl rounded-full px-5 py-3 text-sm font-medium hover:opacity-90 transition`}
      >
        {open ? "Close" : "Ask Me"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-5 w-[92vw] max-w-md h-[70vh] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
          <div className={`px-4 py-3 ${accentClass} flex items-center justify-between`}>
            <div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="text-xs opacity-80">Ask about projects, stack, or availability</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={clearChat} className="text-xs underline">Reset</button>
            </div>
          </div>

          <div ref={panelRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m) => (
              <div key={m.id} className={`max-w-[85%] ${m.role === 'user' ? 'ml-auto' : ''}`}>
                <div className={`${m.role === 'user' ? 'bg-gray-900 text-white' : 'bg-white'} border border-gray-200 rounded-2xl px-3 py-2 text-sm shadow-sm`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-xs text-gray-500">Thinking…</div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about my work…"
                className="flex-1 px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button onClick={handleSend} className={`px-4 py-2 rounded-xl text-sm font-medium ${accentClass}`}>Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}