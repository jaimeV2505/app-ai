"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const suggestions = [
  "Design a 9-night aurora-first itinerary for two, max €28k",
  "Lofoten yacht charter with Michelin dining — July 2026",
  "Family-friendly Lapland with private husky lodge",
];

export function TravelPlanner() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to Nordic Explorer Intelligence. I'm your private travel architect — share dates, budget, travel style, and I'll compose a corridor-level itinerary with live availability signals.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    setInput("");
    setError(null);
    setMessages((m) => [...m, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      if (!res.ok) {
        const detail =
          typeof data.detail === "string"
            ? data.detail
            : JSON.stringify(data.detail);
        throw new Error(detail || "Planner unavailable");
      }
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connection error");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col lg:h-[calc(100vh-6rem)]">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 p-3 ring-1 ring-white/15">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-3xl md:text-4xl">AI Travel Planner</h1>
            <p className="text-muted-foreground">
              Spatial itinerary engine · v3.2 · Nordic corridor trained
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel-strong flex min-h-0 flex-1 flex-col overflow-hidden rounded-4xl">
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "ml-auto border border-primary/20 bg-primary/10 text-foreground"
                      : "mr-auto glass-panel text-foreground/90"
                  )}
                >
                  {msg.content}
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-sm text-muted-foreground"
              >
                Composing your itinerary…
              </motion.p>
            )}
          </div>
        </ScrollArea>

        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2 border-t border-white/10 px-6 py-4">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => sendMessage(s)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {error && (
          <p className="px-6 text-sm text-aurora-rose">{error}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex gap-3 border-t border-white/10 p-4 md:p-6"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your dream Nordic journey…"
            disabled={loading}
            className="flex-1"
          />
          <Button type="submit" disabled={loading || !input.trim()} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
