import React, { useState } from 'react';
import { Utensils, Sparkles, MapPin, Tag, Heart, Flame, Calendar, Award } from 'lucide-react';
import { AUTHENTIC_FOOD_TRAILS, CULTURE_STORIES } from '../data/bangladeshData';

interface FoodCultureSectionProps {
  language: 'EN' | 'BN';
}

export const FoodCultureSection: React.FC<FoodCultureSectionProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'food' | 'culture'>('food');

  return (
    <section id="food-culture" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Utensils className="w-4 h-4 text-emerald-600" />
              <span>{language === 'EN' ? 'Taste & Heritage of Bengal' : 'খাদ্য ও সংস্কৃতি'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'EN' ? 'Authentic Culinary & Cultural Trails' : 'ঐতিহ্যবাহী খাবার ও উৎসব'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-sans-body">
              {language === 'EN'
                ? "From the aromatic saffron handis of Old Dhaka Kacchi to sizzling Padma Hilsa and vibrant Shakrain rooftop festivals."
                : "পুরান ঢাকার শাহী কাচ্চি, পদ্মার ইলিশ ভাজা এবং শ্রীমঙ্গলের বিখ্যাত সাতরঙা চায়ের অনন্য স্বাদ।"}
            </p>
          </div>

          {/* Toggle between Food Trails & Culture Stories */}
          <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('food')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'food'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Culinary Trails (খাবার)
            </button>
            <button
              onClick={() => setActiveTab('culture')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'culture'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Festivals & Heritage (উৎসব)
            </button>
          </div>
        </div>

        {/* Tab 1: Food Trails Grid */}
        {activeTab === 'food' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {AUTHENTIC_FOOD_TRAILS.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">
                        {item.region.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="font-bengali text-xs text-amber-600 dark:text-amber-400 font-semibold">
                      {item.bengaliName}
                    </p>
                    <h3 className="font-serif-heading text-lg font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 font-sans-body line-clamp-3">
                      {item.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/60">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Must-Try Spots:
                      </p>
                      <p className="text-xs text-slate-800 dark:text-slate-200 font-medium line-clamp-2">
                        {item.mustTrySpots.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">
                      {item.priceRange}
                    </span>
                    <span className="text-[10px] text-slate-500">Avg Price</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Culture & Festivals Grid */}
        {activeTab === 'culture' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULTURE_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider">
                      {story.season}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="font-bengali text-xs text-amber-600 dark:text-amber-400 font-semibold">
                    {story.bengaliName}
                  </p>
                  <h3 className="font-serif-heading text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans-body">
                    {story.summary}
                  </p>

                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                    <span className="font-bold text-slate-400 block mb-0.5">Key Tradition:</span>
                    <span className="text-slate-800 dark:text-slate-200">{story.keyTradition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
