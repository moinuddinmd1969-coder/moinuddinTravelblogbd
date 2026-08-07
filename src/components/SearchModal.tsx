import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  MapPin,
  BookOpen,
  Utensils,
  ArrowRight,
  Compass
} from 'lucide-react';
import { FEATURED_DESTINATIONS, LATEST_ARTICLES, AUTHENTIC_FOOD_TRAILS } from '../data/bangladeshData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDestination: (destId: string) => void;
  onSelectArticle: (articleId: string) => void;
  language: 'EN' | 'BN';
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDestination,
  onSelectArticle,
  language
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredDests = query.trim()
    ? FEATURED_DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.division.toLowerCase().includes(query.toLowerCase()) ||
          d.bengaliName.includes(query)
      )
    : FEATURED_DESTINATIONS.slice(0, 3);

  const filteredArticles = query.trim()
    ? LATEST_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase())
      )
    : LATEST_ARTICLES.slice(0, 2);

  const filteredFood = query.trim()
    ? AUTHENTIC_FOOD_TRAILS.filter((f) =>
        f.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Cox's Bazar, Sajek, Train tickets, Kacchi Biryani..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-white focus:outline-none placeholder-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Destinations */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Destinations
              </span>
            </div>
            <div className="space-y-1.5">
              {filteredDests.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => {
                    onSelectDestination(dest.id);
                    onClose();
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-slate-800/80 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                        {dest.name}
                      </div>
                      <div className="text-[11px] text-slate-500">{dest.tagline}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                Travel Guides & Stories
              </span>
            </div>
            <div className="space-y-1.5">
              {filteredArticles.map((art) => (
                <button
                  key={art.id}
                  onClick={() => {
                    onSelectArticle(art.id);
                    onClose();
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800/80 flex items-center justify-between group transition-colors"
                >
                  <div>
                    <span className="text-[10px] text-sky-600 font-bold uppercase">
                      {art.category}
                    </span>
                    <div className="font-bold text-slate-900 dark:text-white group-hover:text-sky-600 line-clamp-1">
                      {art.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-600 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Food Trails */}
          {filteredFood.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <span className="flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-amber-600" />
                  Food Trails
                </span>
              </div>
              <div className="space-y-1.5">
                {filteredFood.map((food) => (
                  <div
                    key={food.id}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        {food.name} ({food.bengaliName})
                      </div>
                      <div className="text-[11px] text-slate-500">{food.region}</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">{food.priceRange}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
