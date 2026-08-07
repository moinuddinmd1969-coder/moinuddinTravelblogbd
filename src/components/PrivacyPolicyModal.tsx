import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-serif-heading text-lg font-bold text-slate-900 dark:text-white">
              Privacy Policy & WordPress Compliance
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans-body leading-relaxed">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              1. Overview & Data Security
            </h4>
            <p>
              BanglaVenture respects your travel privacy. We do not sell or monetize personal subscriber emails or itinerary query data. All AI Tour Planning and guide conversations are processed server-side in compliance with Google Gemini security standards.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              2. Cookies & Local Bookmarks Storage
            </h4>
            <p>
              Your saved bookmarks and wishlists are stored locally in your browser’s cache to guarantee fast offline access. We do not place third-party advertising tracking cookies.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              3. WordPress GPL Theme Licensing
            </h4>
            <p>
              The BanglaVenture WordPress Theme is distributed under the GNU General Public License v3.0. You are free to modify, customize, and deploy it across travel agencies, hotel booking portals, or personal tourism blogs.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              4. Emergency & Safety Notice
            </h4>
            <p>
              While we provide verified information regarding hill tract permits, Sajek Army Convoy timings, and coastal sea conditions, travelers are always advised to verify live weather updates with the Bangladesh Meteorological Department and Tourist Police (999).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
