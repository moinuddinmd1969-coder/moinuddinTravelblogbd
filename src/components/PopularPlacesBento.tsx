import React from 'react';
import { Compass, Sparkles, ArrowRight, Eye, Camera, MapPin } from 'lucide-react';
import { POPULAR_PLACES_BENTO } from '../data/bangladeshData';

interface PopularPlacesBentoProps {
  onSelectDestination: (destId: string) => void;
  language: 'EN' | 'BN';
}

export const PopularPlacesBento: React.FC<PopularPlacesBentoProps> = ({
  onSelectDestination,
  language
}) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Camera className="w-4 h-4 text-emerald-400" />
              <span>{language === 'EN' ? 'Iconic Geological Wonders' : 'আইকনিক পর্যটন স্থান'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {language === 'EN' ? 'Popular Places in Bangladesh' : 'জনপ্রিয় আকর্ষণীয় স্থানসমূহ'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-sans-body">
              {language === 'EN'
                ? "From the world's longest marine drive to submerged freshwater swamp forests and living coral reefs."
                : "বাংলাদেশের সবচেয়ে নয়নাভিরাম ও আকর্ষণীয় স্থানসমূহের একটি রূপরেখা।"}
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]">
          {POPULAR_PLACES_BENTO.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                // Map bento ID to destination ID
                const destMap: Record<string, string> = {
                  'marine-drive': 'coxs-bazar',
                  'konglak-peak': 'sajek-valley',
                  'ratargul-forest': 'sylhet-tea',
                  'chera-dwip': 'saint-martin',
                  'kotka-mangrove': 'sundarbans'
                };
                onSelectDestination(destMap[item.id] || 'coxs-bazar');
              }}
              className={`${item.span} relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-800`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />

              {/* Badges on Top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-slate-200 text-xs font-semibold">
                  {item.stats}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <p className="text-emerald-400 font-semibold text-xs uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.subtitle}
                </p>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 pt-1 font-sans-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
