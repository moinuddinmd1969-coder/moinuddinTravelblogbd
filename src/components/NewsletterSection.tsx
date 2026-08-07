import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ShieldCheck, Download, Flame } from 'lucide-react';

interface NewsletterSectionProps {
  language: 'EN' | 'BN';
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [interests, setInterests] = useState<string[]>(['Secret Trails', 'Hotel Deals']);

  const toggleInterest = (val: string) => {
    setInterests((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, preferences: interests })
      });
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitted(true); // graceful offline
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-emerald-900/40 backdrop-blur-md rounded-3xl border border-emerald-700/50 p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>{language === 'EN' ? 'Sonar Bangla Travel Dispatch' : 'সোনার বাংলা ট্রাভেল ডিসপ্যাচ'}</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {language === 'EN'
                ? 'Get Secret Trails, Train Alerts & Seasonal Travel Guides'
                : 'গোপন ট্রেইল ও ট্রাভেল গাইড সরাসরি আপনার ইমেইলে'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans-body max-w-xl">
              {language === 'EN'
                ? 'Join 48,000+ explorers receiving our bi-weekly updates on winter train ticket openings, hill tract weather reports, and exclusive discounts for eco-resorts.'
                : 'প্রতি সপ্তাহে পান ট্রেন বুকিং অ্যালার্ট, সাজেক ও কক্সবাজারের হোটেল ডিসকাউন্ট এবং সেরা ভ্রমণ পরামর্শ।'}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-200">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                No Spam, Unsubscribe Anytime
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Free 2026 Bangladesh Guidebook (PDF)
              </span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-emerald-700/60 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-white">
                  Welcome to BanglaVenture!
                </h3>
                <p className="text-xs text-slate-300">
                  We have dispatched the 2026 Bangladesh Travel Guide PDF to <strong>{email}</strong>. Check your inbox!
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-emerald-400 hover:underline font-semibold"
                  >
                    Subscribe another email
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Select your travel interests:
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Secret Trails', 'Hotel Deals', 'Train Schedules', 'Photo Guides'].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 p-2 rounded-xl bg-slate-800 border border-slate-700 cursor-pointer text-slate-300 hover:text-white"
                    >
                      <input
                        type="checkbox"
                        checked={interests.includes(item)}
                        onChange={() => toggleInterest(item)}
                        className="rounded text-emerald-600 focus:ring-0"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isLoading ? 'Subscribing...' : 'Get Free 2026 Travel Guide'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
