import React, { useState } from 'react';
import {
  MapPin,
  Star,
  Clock,
  Compass,
  ArrowRight,
  Bookmark,
  Sun,
  ShieldCheck,
  Sparkles,
  Check
} from 'lucide-react';
import { FEATURED_DESTINATIONS } from '../data/bangladeshData';
import { Destination } from '../types';

interface FeaturedDestinationsProps {
  onSelectDestination: (destId: string) => void;
  onToggleBookmark: (destId: string) => void;
  bookmarkedIds: string[];
  onOpenAiPlanner: (destinationName?: string) => void;
  currency: 'BDT' | 'USD';
  language: 'EN' | 'BN';
}

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  onSelectDestination,
  onToggleBookmark,
  bookmarkedIds,
  onOpenAiPlanner,
  currency,
  language
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'EN' ? 'All Top Destinations' : 'সব গন্তব্য' },
    { id: 'Chittagong', label: language === 'EN' ? "Chittagong (Cox's Bazar & Hills)" : 'চট্টগ্রাম ও পাহাড়' },
    { id: 'Sylhet', label: language === 'EN' ? 'Sylhet & Tea Estates' : 'সিলেট ও চা বাগান' },
    { id: 'Khulna', label: language === 'EN' ? 'The Sundarbans Mangrove' : 'সুন্দরবন ও খুলনা' }
  ];

  const filtered = selectedCategory === 'all'
    ? FEATURED_DESTINATIONS
    : FEATURED_DESTINATIONS.filter((d) => d.division.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="destinations" className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>{language === 'EN' ? 'Natural Wonders of Bangladesh' : 'সোনার বাংলার প্রাকৃতিক বিস্ময়'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'EN' ? 'Signature Travel Destinations' : 'প্রধান ভ্রমণ গন্তব্যসমূহ'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-sans-body">
              {language === 'EN'
                ? "From the world's longest unbroken sea beach to floating cloud valleys and UNESCO mangrove forests, discover the crown jewels of Bangladesh tourism."
                : "বিশ্বের দীর্ঘতম সমুদ্র সৈকত থেকে মেঘের রাজ্য ও সুন্দরবনের গহীন ম্যানগ্রোভ অরণ্য — বাংলাদেশের সেরা ভ্রমণ অভিজ্ঞতা।"}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((dest) => {
            const isBookmarked = bookmarkedIds.includes(dest.id);
            return (
              <div
                key={dest.id}
                className="bg-white dark:bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Hero Image with Overlay Badges */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Top Bar on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {dest.division}
                    </span>

                    <button
                      onClick={() => onToggleBookmark(dest.id)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all ${
                        isBookmarked
                          ? 'bg-emerald-600 text-white ring-2 ring-white'
                          : 'bg-slate-900/60 text-white hover:bg-emerald-600'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Save to Favorites'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom Bar on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="font-bengali text-amber-300 text-xs font-semibold">
                        {dest.bengaliName}
                      </p>
                      <h3 className="font-serif-heading text-xl font-bold leading-tight">
                        {dest.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-lg text-xs font-bold">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{dest.rating}</span>
                      <span className="text-[10px] opacity-80">({dest.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed font-sans-body">
                      {dest.description}
                    </p>

                    {/* Key Highlights bullet chips */}
                    <div className="mt-3 space-y-1.5">
                      {dest.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs & Travel Duration Pill */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Travel Time</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                        {dest.travelDuration.split('/')[0]}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[11px]">Estimated Cost</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 line-clamp-1">
                        {dest.estimatedBudget.split('/')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectDestination(dest.id)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all group-hover:shadow-md"
                    >
                      <span>Explore Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onOpenAiPlanner(dest.name)}
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 hover:text-emerald-600 transition-colors"
                      title="Generate AI Itinerary"
                    >
                      <Sparkles className="w-4 h-4 text-amber-500" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
