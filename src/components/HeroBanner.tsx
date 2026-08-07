import React, { useState, useEffect } from 'react';
import {
  Compass,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Flame,
  Sun,
  Cloud,
  CheckCircle,
  Play
} from 'lucide-react';
import { HERO_SLIDES, FEATURED_DESTINATIONS } from '../data/bangladeshData';

interface HeroBannerProps {
  onSelectDestination: (destId: string) => void;
  onOpenAiPlanner: (destinationName?: string) => void;
  currency: 'BDT' | 'USD';
  language: 'EN' | 'BN';
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSelectDestination,
  onOpenAiPlanner,
  currency,
  language
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Quick search form state
  const [searchDest, setSearchDest] = useState('coxs-bazar');
  const [tripVibe, setTripVibe] = useState('Coastal Relaxation & Sunset');
  const [travelMonth, setTravelMonth] = useState('Winter (Nov – Feb)');
  const [budgetTier, setBudgetTier] = useState('Standard (৳5k - ৳15k)');

  const slide = HERO_SLIDES[currentSlideIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectDestination(searchDest);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[640px] lg:min-h-[720px] flex flex-col justify-between"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image Carousel with Smooth Transitions */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlideIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'
          } transition-transform duration-[8000ms]`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.08]"
          />
          {/* Natural Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
          <div className={`absolute inset-0 bg-gradient-to-r ${item.accentColor} opacity-50 mix-blend-multiply`} />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 flex-1 flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {slide.badge}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-medium">
            <Sun className="w-3.5 h-3.5 text-amber-300" />
            {slide.weather}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/40 text-sky-200 text-xs font-medium">
            <Calendar className="w-3.5 h-3.5" />
            Best Season: {slide.bestTime}
          </span>
        </div>

        {/* Hero Title & Bengali Calligraphy */}
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <p className="font-bengali text-amber-300/90 text-sm sm:text-base md:text-lg font-medium tracking-wide">
            {slide.bengaliTitle}
          </p>

          <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            {slide.title}
          </h1>

          <p className="text-emerald-300 font-display-title text-base sm:text-xl font-semibold">
            {slide.tagline}
          </p>

          <p className="text-slate-200/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl pt-1">
            {slide.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6">
          <button
            id="hero-explore-guide-btn"
            onClick={() => onSelectDestination(slide.id)}
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-emerald-600/30 transition-all group"
          >
            <span>Explore {slide.title} Guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-generate-itinerary-btn"
            onClick={() => onOpenAiPlanner(slide.title)}
            className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Generate AI Itinerary</span>
          </button>
        </div>

        {/* 5 Landscape Quick Selector Tabs */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {HERO_SLIDES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`text-left p-2.5 rounded-xl transition-all duration-300 ${
                idx === currentSlideIndex
                  ? 'bg-white/20 backdrop-blur-md border border-white/40 shadow-md ring-2 ring-emerald-400'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white truncate">{item.title}</span>
                {idx === currentSlideIndex && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                )}
              </div>
              <p className="text-[10px] text-slate-300/80 truncate">{item.division}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Key Metrics / Bento Preview Bar */}
      <div className="relative z-10 w-full bg-slate-900/90 backdrop-blur-xl border-t border-slate-800/80 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* 4 Key Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">120 km Beach</p>
                <p className="text-[11px] text-slate-400">Cox's Bazar Marine Drive</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">1,800 ft sajék</p>
                <p className="text-[11px] text-slate-400">Sea of Clouds & Peaks</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">10,000 km² UNESCO</p>
                <p className="text-[11px] text-slate-400">Royal Bengal Mangrove</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">40+ Tea Terraces</p>
                <p className="text-[11px] text-slate-400">Sylhet & Sreemangal</p>
              </div>
            </div>
          </div>

          {/* Slider navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              title="Previous Landscape"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              title="Next Landscape"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
