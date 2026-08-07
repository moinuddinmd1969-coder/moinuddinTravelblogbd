import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { InteractiveMap } from './components/InteractiveMap';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { PopularPlacesBento } from './components/PopularPlacesBento';
import { TravelGuidesTips } from './components/TravelGuidesTips';
import { HotelsSection } from './components/HotelsSection';
import { FoodCultureSection } from './components/FoodCultureSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LatestArticles } from './components/LatestArticles';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

// Interactive Modals & Drawers
import { AiTripPlannerModal } from './components/AiTripPlannerModal';
import { AiGuideChatDrawer } from './components/AiGuideChatDrawer';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { WpCustomizerBar } from './components/WpCustomizerBar';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { ContactModal } from './components/ContactModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { WpThemeModal } from './components/WpThemeModal';

import { ThemeSettings } from './types';

export default function App() {
  // Theme & Customizer settings
  const [themeSettings, setThemeSettings] = useState<ThemeSettings>({
    darkMode: false,
    colorScheme: 'emerald-blue',
    typography: 'plus-jakarta',
    wpMode: 'standard'
  });

  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');
  const [language, setLanguage] = useState<'EN' | 'BN'>('EN');

  // Bookmarks state with localStorage persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bv_bookmarks');
      return saved ? JSON.parse(saved) : ['coxs-bazar', 'sajek-valley'];
    } catch {
      return ['coxs-bazar', 'sajek-valley'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bv_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {}
  }, [bookmarkedIds]);

  // Modal Visibility states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isAiPlannerOpen, setIsAiPlannerOpen] = useState(false);
  const [plannerDestination, setPlannerDestination] = useState<string | undefined>();
  const [isAiGuideOpen, setIsAiGuideOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isWpThemeOpen, setIsWpThemeOpen] = useState(false);

  // Detail Modals
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Bookmark Toggle Helper
  const toggleBookmark = (destId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(destId) ? prev.filter((id) => id !== destId) : [...prev, destId]
    );
  };

  const openAiPlannerWithDest = (destName?: string) => {
    setPlannerDestination(destName);
    setIsAiPlannerOpen(true);
  };

  return (
    <div
      className={`min-h-screen font-sans-body transition-colors duration-200 ${
        themeSettings.darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* WordPress Elementor / Gutenberg Simulation Wrapper */}
      {themeSettings.wpMode === 'elementor' && (
        <div className="bg-amber-500 text-slate-950 text-xs py-1 px-4 font-mono font-bold flex items-center justify-between sticky top-0 z-50 shadow-md">
          <span>⚙️ Elementor Visual Page Builder Mode Active — Drag & Drop Widgets Enabled</span>
          <button
            onClick={() =>
              setThemeSettings((prev) => ({ ...prev, wpMode: 'standard' }))
            }
            className="underline hover:text-white"
          >
            Exit Elementor View
          </button>
        </div>
      )}

      {themeSettings.wpMode === 'gutenberg' && (
        <div className="bg-sky-600 text-white text-xs py-1 px-4 font-mono font-bold flex items-center justify-between sticky top-0 z-50 shadow-md">
          <span>📦 WordPress Gutenberg Block Editor Mode Active (Core Cover / Columns Blocks)</span>
          <button
            onClick={() =>
              setThemeSettings((prev) => ({ ...prev, wpMode: 'standard' }))
            }
            className="underline hover:text-amber-300"
          >
            Exit Gutenberg View
          </button>
        </div>
      )}

      {/* Main Sticky Header */}
      <Header
        themeSettings={themeSettings}
        setThemeSettings={setThemeSettings}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenAiPlanner={openAiPlannerWithDest}
        onOpenAiGuide={() => setIsAiGuideOpen(true)}
        onOpenWpTheme={() => setIsWpThemeOpen(true)}
        onSelectDestination={(id) => setSelectedDestinationId(id)}
        bookmarkedCount={bookmarkedIds.length}
        currency={currency}
        setCurrency={setCurrency}
        language={language}
        setLanguage={setLanguage}
      />

      <main className="relative">
        {/* Full-width Hero Banner with 5 signature landscapes */}
        <HeroBanner
          onSelectDestination={(id) => setSelectedDestinationId(id)}
          onOpenAiPlanner={openAiPlannerWithDest}
          currency={currency}
          language={language}
        />

        {/* Featured Destination Cards Grid */}
        <FeaturedDestinations
          onSelectDestination={(id) => setSelectedDestinationId(id)}
          onToggleBookmark={toggleBookmark}
          bookmarkedIds={bookmarkedIds}
          onOpenAiPlanner={openAiPlannerWithDest}
          currency={currency}
          language={language}
        />

        {/* Interactive Bangladesh Division & Hotspots Vector Map */}
        <InteractiveMap
          onSelectDestination={(id) => setSelectedDestinationId(id)}
          onOpenAiPlanner={openAiPlannerWithDest}
          currency={currency}
          language={language}
        />

        {/* Popular Places Bento Grid */}
        <PopularPlacesBento
          onSelectDestination={(id) => setSelectedDestinationId(id)}
          language={language}
        />

        {/* Travel Guides, Train booking tips on Shohoz & Sajek Army Escort rules */}
        <TravelGuidesTips language={language} />

        {/* Curated Eco-Resorts & Cloud Cottages Directory */}
        <HotelsSection
          onOpenAiPlanner={openAiPlannerWithDest}
          currency={currency}
          language={language}
        />

        {/* Authentic Culinary & Cultural Trails */}
        <FoodCultureSection language={language} />

        {/* High-Resolution Photo Gallery */}
        <PhotoGallery language={language} />

        {/* Latest Travel Articles & SEO Magazine Stories */}
        <LatestArticles
          onOpenArticle={(id) => setSelectedArticleId(id)}
          language={language}
        />

        {/* Sonar Bangla Travel Dispatch Newsletter */}
        <NewsletterSection language={language} />
      </main>

      {/* Comprehensive 4-Column Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        language={language}
      />

      {/* WordPress Customizer Floating Bar */}
      <WpCustomizerBar
        themeSettings={themeSettings}
        setThemeSettings={setThemeSettings}
        onOpenWpThemeModal={() => setIsWpThemeOpen(true)}
      />

      {/* WordPress Theme & style.css Inspector & Downloader Modal */}
      <WpThemeModal
        isOpen={isWpThemeOpen}
        onClose={() => setIsWpThemeOpen(false)}
      />

      {/* Modals & Slide-in Drawers */}
      <AiTripPlannerModal
        isOpen={isAiPlannerOpen}
        onClose={() => setIsAiPlannerOpen(false)}
        initialDestination={plannerDestination}
        currency={currency}
        language={language}
      />

      <AiGuideChatDrawer
        isOpen={isAiGuideOpen}
        onClose={() => setIsAiGuideOpen(false)}
      />

      <DestinationDetailModal
        destinationId={selectedDestinationId}
        onClose={() => setSelectedDestinationId(null)}
        onOpenAiPlanner={openAiPlannerWithDest}
        onToggleBookmark={toggleBookmark}
        isBookmarked={selectedDestinationId ? bookmarkedIds.includes(selectedDestinationId) : false}
        currency={currency}
        language={language}
      />

      <ArticleReaderModal
        articleId={selectedArticleId}
        onClose={() => setSelectedArticleId(null)}
        onSelectAnotherArticle={(id) => setSelectedArticleId(id)}
        language={language}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={(id) => setSelectedDestinationId(id)}
        onSelectArticle={(id) => setSelectedArticleId(id)}
        language={language}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onRemoveBookmark={toggleBookmark}
        onSelectDestination={(id) => setSelectedDestinationId(id)}
        onOpenAiPlanner={() => setIsAiPlannerOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
