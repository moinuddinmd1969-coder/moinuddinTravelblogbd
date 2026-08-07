import React, { useState } from 'react';
import {
  Train,
  ShieldAlert,
  Smartphone,
  Backpack,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Compass,
  FileText
} from 'lucide-react';
import { TRAVEL_TIPS } from '../data/bangladeshData';
import { TravelTip } from '../types';

interface TravelGuidesTipsProps {
  language: 'EN' | 'BN';
}

export const TravelGuidesTips: React.FC<TravelGuidesTipsProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<string>('Train & Transport');
  const [copiedTipId, setCopiedTipId] = useState<string | null>(null);

  const categories = [
    'Train & Transport',
    'Permits & Hill Tracts',
    'SIM & Payments',
    'Packing & Gear'
  ];

  const handleCopyTips = (tip: TravelTip) => {
    const text = `${tip.title}\n\n${tip.description}\n\nKey Points:\n` +
      tip.keyPoints.map((p) => `- ${p}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedTipId(tip.id);
    setTimeout(() => setCopiedTipId(null), 2000);
  };

  return (
    <section id="travel-guides" className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>{language === 'EN' ? 'Essential Traveler Handbook' : 'প্রয়োজনীয় ভ্রমণ নির্দেশিকা'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'EN' ? 'Bangladesh Travel Tips & Guides' : 'ভ্রমণ টিপস ও ট্রানজিট গাইড'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-sans-body">
              {language === 'EN'
                ? "Navigating Bangladesh with confidence: train ticket bookings on Shohoz, army hill convoy rules, local SIMs, and seasonal packing gear."
                : "সহজ টিকিট বুকিং, সাজেক সেনা এসকর্ট, লোকাল সিম ও নিরাপদ ভ্রমণের যাবতীয় টিপস।"}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Travel Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAVEL_TIPS.filter((t) => activeTab === 'all' || t.category === activeTab || categories.indexOf(t.category) !== -1).map((tip) => {
            const isCopied = copiedTipId === tip.id;
            return (
              <div
                key={tip.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        tip.importance === 'Crucial'
                          ? 'bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-300/40'
                          : 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40'
                      }`}
                    >
                      {tip.importance}
                    </span>

                    <button
                      onClick={() => handleCopyTips(tip)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      title="Copy travel checklist to clipboard"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {tip.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-sans-body">
                    {tip.description}
                  </p>

                  <div className="space-y-2.5 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Checklist / Action Points:
                    </p>
                    {tip.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">Category: {tip.category}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Verified for 2026 Season
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
