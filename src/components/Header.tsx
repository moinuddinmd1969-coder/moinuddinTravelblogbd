import React, { useState, useEffect } from 'react';
import {
  Compass,
  MapPin,
  Search,
  Bookmark,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  Globe,
  SlidersHorizontal,
  Flame,
  CheckCircle2,
  FileCode,
  Download
} from 'lucide-react';
import { BANGLADESH_DIVISIONS, FEATURED_DESTINATIONS } from '../data/bangladeshData';
import { ThemeSettings } from '../types';

interface HeaderProps {
  themeSettings: ThemeSettings;
  setThemeSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  onOpenAiPlanner: (destinationName?: string) => void;
  onOpenAiGuide: () => void;
  onOpenWpTheme?: () => void;
  onSelectDestination: (destId: string) => void;
  bookmarkedCount: number;
  currency: 'BDT' | 'USD';
  setCurrency: React.Dispatch<React.SetStateAction<'BDT' | 'USD'>>;
  language: 'EN' | 'BN';
  setLanguage: React.Dispatch<React.SetStateAction<'EN' | 'BN'>>;
}

export const Header: React.FC<HeaderProps> = ({
  themeSettings,
  setThemeSettings,
  onOpenSearch,
  onOpenBookmarks,
  onOpenAiPlanner,
  onOpenAiGuide,
  onOpenWpTheme,
  onSelectDestination,
  bookmarkedCount,
  currency,
  setCurrency,
  language,
  setLanguage
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setThemeSettings((prev) => {
      const nextDark = !prev.darkMode;
      if (nextDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { ...prev, darkMode: nextDark };
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification & Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Breaking travel alert / Seasonal notice */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-emerald-600 text-white font-semibold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider flex items-center gap-1 shrink-0">
              <Flame className="w-3 h-3 text-amber-300 animate-pulse" /> Travel Alert
            </span>
            <p className="truncate text-slate-300">
              {language === 'EN'
                ? "Winter 2026 Tourist Trains & Ships now open: Cox's Bazar Express, Saint Martin Sea Cruise & Sajek Convoy."
                : "শীতকালীন ২০২৬ পর্যটন ট্রেন ও জাহাজ বুকিং শুরু: কক্সবাজার এক্সপ্রেস, সেন্ট মার্টিন ক্রুজ ও সাজেক কনভয়।"}
            </p>
          </div>

          {/* Right utility items */}
          <div className="flex items-center gap-3 shrink-0">
            {/* WordPress Theme / style.css trigger */}
            {onOpenWpTheme && (
              <button
                id="header-wp-style-btn"
                onClick={onOpenWpTheme}
                className="flex items-center gap-1 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-white px-2 py-0.5 rounded border border-emerald-700/50 text-[11px] font-mono transition-colors"
                title="View & Download WordPress style.css"
              >
                <FileCode className="w-3 h-3 text-emerald-400" />
                <span className="font-bold">style.css</span>
              </button>
            )}

            {/* Currency selector */}
            <div className="flex items-center bg-slate-800 rounded px-1.5 py-0.5 border border-slate-700">
              <button
                id="currency-bdt-btn"
                onClick={() => setCurrency('BDT')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  currency === 'BDT' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                ৳ BDT
              </button>
              <button
                id="currency-usd-btn"
                onClick={() => setCurrency('USD')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  currency === 'USD' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Language toggle */}
            <button
              id="lang-toggle-btn"
              onClick={() => setLanguage(language === 'EN' ? 'BN' : 'EN')}
              className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-semibold">{language === 'EN' ? 'বাংলা' : 'English'}</span>
            </button>

            {/* Emergency Hotline */}
            <a
              href="tel:999"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Tourist Police 999</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 p-0.5 shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-emerald-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  {/* Bangladesh flag aesthetic sun */}
                  <div className="absolute w-5 h-5 rounded-full bg-red-600 opacity-90 -right-0.5 -top-0.5 blur-[0.5px]"></div>
                  <Compass className="w-6 h-6 text-emerald-300 relative z-10 animate-spin-slow" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                    Bangla<span className="text-emerald-600 dark:text-emerald-400">Venture</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-300/40">
                    WP Theme
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans-body -mt-0.5 hidden sm:block">
                  Discover Bangladesh • সোনার বাংলা ট্রাভেল
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <a
                href="#home"
                className="px-3 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
              >
                {language === 'EN' ? 'Home' : 'হোম'}
              </a>

              {/* Destinations Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDestinationsDropdownOpen(true)}
                onMouseLeave={() => setDestinationsDropdownOpen(false)}
              >
                <button
                  id="nav-destinations-btn"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <span>{language === 'EN' ? 'Destinations' : 'গন্তব্য'}</span>
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </button>

                {destinationsDropdownOpen && (
                  <div className="absolute top-full left-0 w-[580px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 grid grid-cols-12 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="col-span-7">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Signature Landscapes
                        </span>
                        <a
                          href="#destinations"
                          className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                        >
                          View All (64 Districts) →
                        </a>
                      </div>
                      <div className="space-y-1">
                        {FEATURED_DESTINATIONS.slice(0, 4).map((dest) => (
                          <button
                            key={dest.id}
                            onClick={() => {
                              onSelectDestination(dest.id);
                              setDestinationsDropdownOpen(false);
                            }}
                            className="w-full text-left p-2 rounded-xl hover:bg-emerald-50/80 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-3 group"
                          >
                            <img
                              src={dest.heroImage}
                              alt={dest.name}
                              className="w-11 h-11 rounded-lg object-cover group-hover:scale-105 transition-transform"
                            />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                                  {dest.name}
                                </span>
                                <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-medium bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.2 rounded">
                                  {dest.division}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                                {dest.tagline}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 flex flex-col justify-between border border-slate-100 dark:border-slate-800">
                      <div>
                        <div className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-200 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Explore by Division</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          {BANGLADESH_DIVISIONS.slice(0, 6).map((div) => (
                            <a
                              key={div.id}
                              href="#interactive-map"
                              onClick={() => setDestinationsDropdownOpen(false)}
                              className="px-2 py-1 rounded text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-emerald-600 font-medium"
                            >
                              {div.name.split(' ')[0]}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-200 dark:border-slate-700 mt-2">
                        <button
                          onClick={() => {
                            setDestinationsDropdownOpen(false);
                            onOpenAiPlanner();
                          }}
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          <span>AI Trip Generator</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#interactive-map"
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                {language === 'EN' ? 'Map' : 'মানচিত্র'}
              </a>

              <a
                href="#travel-guides"
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                {language === 'EN' ? 'Travel Guides' : 'গাইড'}
              </a>

              <a
                href="#hotels-stays"
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                {language === 'EN' ? 'Hotels & Stays' : 'হোটেল'}
              </a>

              <a
                href="#food-culture"
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                {language === 'EN' ? 'Food & Culture' : 'খাবার ও উৎসব'}
              </a>

              <a
                href="#photo-gallery"
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                {language === 'EN' ? 'Gallery' : 'গ্যালারি'}
              </a>

              <a
                href="#latest-articles"
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                {language === 'EN' ? 'Blog' : 'ব্লগ'}
              </a>
            </div>

            {/* Right Action Icons & Controls */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Search button */}
              <button
                id="search-open-btn"
                onClick={onOpenSearch}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
                title="Search destinations, articles, food (Cmd+K)"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Bookmarks */}
              <button
                id="bookmarks-open-btn"
                onClick={onOpenBookmarks}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
                title="Saved trips and bookmarks"
              >
                <Bookmark className="w-5 h-5" />
                {bookmarkedCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {bookmarkedCount}
                  </span>
                )}
              </button>

              {/* Dark / Light mode toggle */}
              <button
                id="dark-mode-toggle-btn"
                onClick={toggleDarkMode}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={themeSettings.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {themeSettings.darkMode ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>

              {/* WordPress Theme / style.css trigger */}
              {onOpenWpTheme && (
                <button
                  id="main-nav-wp-style-btn"
                  onClick={onOpenWpTheme}
                  className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700 transition-colors shadow-xs"
                  title="Inspect WordPress style.css & Theme Package"
                >
                  <FileCode className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>WordPress style.css</span>
                </button>
              )}

              {/* AI Local Guide Chat trigger */}
              <button
                id="ai-guide-chat-btn"
                onClick={onOpenAiGuide}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Ask Guide Shanto</span>
              </button>

              {/* Plan Trip AI Button */}
              <button
                id="plan-trip-cta-btn"
                onClick={() => onOpenAiPlanner()}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-500 hover:to-teal-700 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{language === 'EN' ? 'Plan My Trip' : 'ভ্রমণ পরিকল্পনা'}</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiPlanner();
                }}
                className="col-span-2 bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>AI Bangladesh Trip Planner</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiGuide();
                }}
                className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5"
              >
                <span>Ask Guide Shanto</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
              {onOpenWpTheme && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWpTheme();
                  }}
                  className="col-span-2 bg-slate-900 text-emerald-300 font-mono font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-2 border border-emerald-500/40"
                >
                  <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WordPress style.css &amp; Theme Files</span>
                </button>
              )}
            </div>

            <div className="space-y-1 font-medium text-sm text-slate-700 dark:text-slate-200">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                Home
              </a>
              <a
                href="#destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                Featured Destinations (Cox's Bazar, Sajek, Sundarbans)
              </a>
              <a
                href="#interactive-map"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                Interactive Bangladesh Division Map
              </a>
              <a
                href="#travel-guides"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                Travel Guides & Train Booking
              </a>
              <a
                href="#hotels-stays"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                Hotels & Eco Cottages
              </a>
              <a
                href="#food-culture"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                Authentic Food Trails & Culture
              </a>
              <a
                href="#photo-gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                Photo Gallery
              </a>
              <a
                href="#latest-articles"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                Travel Blog & Stories
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
