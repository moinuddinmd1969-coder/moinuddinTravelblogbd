import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Loader2,
  Bot,
  User,
  MapPin,
  Compass,
  Train,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { GuideChatMessage } from '../types';

interface AiGuideChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_QUESTIONS = [
  "How to get to Saint Martin from Dhaka?",
  "How does the Sajek Army Escort convoy work?",
  "Best spot for authentic Old Dhaka Kacchi?",
  "How to book Shohoz train tickets online?"
];

export const AiGuideChatDrawer: React.FC<AiGuideChatDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<GuideChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Salam & Welcome! I am Shanto, your local BanglaVenture AI travel guide. Ask me anything about train schedules, hill tract permits, coastal resorts, or authentic food spots in Bangladesh!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: GuideChatMessage = {
      id: String(Date.now()),
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/ask-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend })
      });

      if (!res.ok) {
        throw new Error('Guide service unavailable.');
      }

      const data = await res.json();
      const botMsg: GuideChatMessage = {
        id: String(Date.now() + 1),
        role: 'assistant',
        content: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat guide error:', err);
      // Realistic fallback response based on common questions
      let fallbackAnswer = "To travel comfortably in Bangladesh, always plan train bookings on Shohoz 10 days in advance (especially for Cox's Bazar Express and Subarna Express). For Sajek Valley, report to the Baghaihat Army camp for the 10:30 AM or 2:30 PM convoy.";
      if (textToSend.toLowerCase().includes('saint martin')) {
        fallbackAnswer = "To reach Saint Martin's Island: Take an overnight AC sleeper bus (Saintmartin Paribahan / Green Line) from Dhaka to Teknaf / Inani jetty, then board the Bay Cruiser or Keari Sindbad ship at 9:30 AM (approx 2 hours to the island).";
      } else if (textToSend.toLowerCase().includes('kacchi')) {
        fallbackAnswer = "For the most legendary Old Dhaka Kacchi Biryani, visit Grand Nawab (Kazi Alauddin Road), Kolkata Kacchi Ghar, or Sultan's Dine. Pair it with Borhani and Shahi Jorda!";
      }

      const fallbackMsg: GuideChatMessage = {
        id: String(Date.now() + 1),
        role: 'assistant',
        content: fallbackAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: "Salam! Chat reset. How else can I assist your journey across Bangladesh?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="p-4 bg-emerald-950 text-white flex items-center justify-between border-b border-emerald-800">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold border-2 border-emerald-400">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-sm text-white">Ask Shanto (AI Local Guide)</h3>
              <span className="text-[10px] bg-emerald-500/30 text-emerald-300 px-1.5 py-0.2 rounded font-mono">
                Live
              </span>
            </div>
            <p className="text-[11px] text-emerald-200">
              Bangladesh Travel Logistics & Insider Tips
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleResetChat}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            title="Reset conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Preset Quick Chips */}
      <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex gap-2 overflow-x-auto text-xs">
        {PRESET_QUESTIONS.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(q)}
            className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 whitespace-nowrap hover:border-emerald-500 hover:text-emerald-600 transition-colors shrink-0"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-100/50 dark:bg-slate-900/50">
        {messages.map((msg) => {
          const isBot = msg.role === 'assistant';
          return (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              {isBot && (
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                  isBot
                    ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
                <span
                  className={`block text-[10px] mt-1.5 ${
                    isBot ? 'text-slate-400' : 'text-emerald-200 text-right'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-2.5 justify-start">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs text-slate-500">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-600" />
              <span>Shanto is thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Ask about trains, resorts, hill permits..."
          className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          disabled={!inputQuery.trim() || isLoading}
          className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50 transition-colors shadow-sm"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
