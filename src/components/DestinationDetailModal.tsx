import React from 'react';
import {
  X,
  MapPin,
  Star,
  Clock,
  Compass,
  Train,
  Plane,
  Bus,
  ShieldCheck,
  Utensils,
  Sun,
  Sparkles,
  ArrowRight,
  Bookmark,
  CheckCircle2
} from 'lucide-react';
import { FEATURED_DESTINATIONS } from '../data/bangladeshData';
import { Destination } from '../types';

interface DestinationDetailModalProps {
  destinationId: string | null;
  onClose: () => void;
  onOpenAiPlanner: (destName: string) => void;
  onToggleBookmark: (destId: string) => void;
  isBookmarked: boolean;
  currency: 'BDT' | 'USD';
  language: 'EN' | 'BN';
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destinationId,
  onClose,
  onOpenAiPlanner,
  onToggleBookmark,
  isBookmarked,
  currency,
  language
}) => {
  const destination = FEATURED_DESTINATIONS.find((d) => d.id === destinationId) || FEATURED_DESTINATIONS[0];

  if (!destinationId || !destination) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-4 max-h-[94vh] flex flex-col">
        {/* Hero Banner inside modal */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden shrink-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-bold uppercase tracking-wider shadow-md">
              {destination.division} Division
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleBookmark(destination.id)}
                className={`p-2 rounded-xl backdrop-blur-md transition-colors ${
                  isBookmarked
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-900/60 text-white hover:bg-emerald-600'
                }`}
                title={isBookmarked ? 'Bookmarked' : 'Bookmark'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Title on Hero */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="font-bengali text-amber-300 text-sm font-semibold">
              {destination.bengaliName}
            </p>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-extrabold leading-tight">
              {destination.name}
            </h2>
            <p className="text-emerald-300 text-xs sm:text-sm font-semibold mt-0.5">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Key Facts Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Best Season</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                {destination.bestTimeToVisit}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block font-medium">Distance from Dhaka</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                {destination.distanceDhaka || destination.distanceFromDhaka || 'Direct transit'}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block font-medium">Travel Duration</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                {destination.travelDuration?.split('/')[0] || 'Direct Route'}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block font-medium">Estimated Budget</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400 mt-0.5 block">
                {currency === 'BDT' ? destination.estimatedBudget?.split('/')[0] : '$60 - $160'}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-serif-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
              About the Destination
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans-body">
              {destination.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="font-serif-heading text-lg font-bold text-slate-900 dark:text-white mb-3">
              Must-Experience Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.highlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How to Reach & Transit Logistics */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
            <h3 className="font-serif-heading text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Train className="w-5 h-5 text-emerald-600" />
              <span>How to Reach from Dhaka</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-0.5">By Train (Shohoz):</span>
                <p className="text-slate-600 dark:text-slate-400">
                  {destination.travelRoutes?.byTrain || destination.howToReach?.byTrain || "Connect via Kamalapur Railway Station to regional hub."}
                </p>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-0.5">By Air & Road:</span>
                <p className="text-slate-600 dark:text-slate-400">
                  {destination.travelRoutes?.byAir || destination.travelRoutes?.byBus || destination.howToReach?.byAir || destination.howToReach?.byBus || 'AC Sleeper Bus / Flight options available daily.'}
                </p>
              </div>
            </div>
          </div>

          {/* Food & Safety Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50/60 dark:bg-amber-950/30 rounded-2xl border border-amber-200/60 dark:border-amber-800/40 text-xs">
              <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 mb-1 text-sm">
                <Utensils className="w-4 h-4 text-amber-600" />
                Must-Try Local Food
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {(destination.foodSpecialties || destination.mustTryFood || []).join(', ') || 'Fresh seafood, local pithe, and traditional curries.'}
              </p>
            </div>

            <div className="p-4 bg-sky-50/60 dark:bg-sky-950/30 rounded-2xl border border-sky-200/60 dark:border-sky-800/40 text-xs">
              <span className="font-bold text-sky-900 dark:text-sky-300 flex items-center gap-1.5 mb-1 text-sm">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Safety & Local Protocol
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {Array.isArray(destination.safetyTips) ? destination.safetyTips.join('. ') : destination.safetyTips}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenAiPlanner(destination.name);
              }}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Generate AI Itinerary for {destination.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
