import React, { useState } from 'react';
import {
  SlidersHorizontal,
  Layout,
  Code2,
  Palette,
  Type,
  FileCode,
  Check,
  X,
  Sparkles,
  Download,
  Copy,
  ExternalLink,
  Package,
  FileCheck
} from 'lucide-react';
import { ThemeSettings } from '../types';
import {
  WP_STYLE_CSS,
  downloadFile,
  downloadCoreThemeZip,
  downloadFullWordPressThemeZip
} from '../data/wpThemeFiles';

interface WpCustomizerBarProps {
  themeSettings: ThemeSettings;
  setThemeSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>;
  onOpenWpThemeModal?: () => void;
}

export const WpCustomizerBar: React.FC<WpCustomizerBarProps> = ({
  themeSettings,
  setThemeSettings,
  onOpenWpThemeModal
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'mode' | 'palette' | 'code'>('code');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isZippingCore, setIsZippingCore] = useState(false);
  const [isZippingFull, setIsZippingFull] = useState(false);

  const schemaJsonLd = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://banglaventure.travel/#website",
      "url": "https://banglaventure.travel/",
      "name": "BanglaVenture",
      "description": "Discover Bangladesh: World's Longest Sea Beach, Sajek Cloud Kingdom & Mangrove Tigers",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://banglaventure.travel/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "TouristDestination",
      "name": "Cox's Bazar Sea Beach",
      "description": "The world's longest unbroken natural sand beach stretching 120 km along the Bay of Bengal.",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.4272,
        "longitude": 92.0058
      },
      "touristType": ["EcoTourism", "BeachTourism", "MarineDrive"]
    }
  ]
}`;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadStyleCss = () => {
    downloadFile('style.css', WP_STYLE_CSS, 'text/css');
  };

  const handleDownloadCoreZip = async () => {
    try {
      setIsZippingCore(true);
      await downloadCoreThemeZip();
    } catch (err) {
      console.error('Error creating core theme zip:', err);
    } finally {
      setIsZippingCore(false);
    }
  };

  const handleDownloadFullZip = async () => {
    try {
      setIsZippingFull(true);
      await downloadFullWordPressThemeZip();
    } catch (err) {
      console.error('Error creating full theme zip:', err);
    } finally {
      setIsZippingFull(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* Trigger floating button */}
      {!isOpen && (
        <button
          id="wp-customizer-trigger-btn"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900 dark:bg-emerald-950 text-white border border-emerald-500/50 shadow-2xl hover:scale-105 transition-all text-xs font-bold"
          title="WordPress Customizer, Elementor Simulator & style.css"
        >
          <FileCode className="w-4 h-4 text-emerald-400" />
          <span>WP Theme &amp; style.css ({themeSettings.wpMode})</span>
        </button>
      )}

      {/* Customizer Panel Drawer */}
      {isOpen && (
        <div className="w-[340px] sm:w-[440px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 animate-in slide-in-from-bottom-3 duration-200 text-slate-900 dark:text-white max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                W
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">WordPress Theme Studio</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Elementor, style.css &amp; ZIP Downloader
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="grid grid-cols-3 gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('code')}
              className={`py-1.5 rounded-lg transition-colors ${
                activeTab === 'code'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              style.css &amp; Files
            </button>
            <button
              onClick={() => setActiveTab('mode')}
              className={`py-1.5 rounded-lg transition-colors ${
                activeTab === 'mode'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              View Mode
            </button>
            <button
              onClick={() => setActiveTab('palette')}
              className={`py-1.5 rounded-lg transition-colors ${
                activeTab === 'palette'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Color Theme
            </button>
          </div>

          {/* Tab 1: WP Code & style.css */}
          {activeTab === 'code' && (
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  WordPress <code className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-1 py-0.5 rounded font-mono">style.css</code>
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopyCode(WP_STYLE_CSS)}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded font-semibold text-[10px] flex items-center gap-1 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={handleDownloadStyleCss}
                    className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-semibold text-[10px] flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className="p-3 bg-slate-950 text-emerald-400 rounded-xl text-[10px] font-mono overflow-x-auto max-h-40 border border-slate-800 leading-tight selection:bg-emerald-800 selection:text-white">
                {WP_STYLE_CSS.slice(0, 800)}...
              </pre>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleDownloadCoreZip}
                  disabled={isZippingCore || isZippingFull}
                  className="bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 font-bold py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors disabled:opacity-50 text-[11px]"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>{isZippingCore ? 'Packaging...' : 'Core ZIP (2 files)'}</span>
                </button>

                <button
                  onClick={handleDownloadFullZip}
                  disabled={isZippingFull || isZippingCore}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors disabled:opacity-50 text-[11px]"
                >
                  <Package className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isZippingFull ? 'Packaging...' : 'Full Theme ZIP'}</span>
                </button>
              </div>

              {onOpenWpThemeModal && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenWpThemeModal();
                  }}
                  className="w-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Open Full Theme Inspector &amp; Code Studio</span>
                </button>
              )}

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span>Direct Stylesheet URL:</span>
                <a href="/style.css" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-mono hover:underline flex items-center gap-1">
                  <span>/style.css</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Tab 2: WP Mode Selector */}
          {activeTab === 'mode' && (
            <div className="space-y-2 text-xs">
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Select visual preview mode for theme builders:
              </p>

              {[
                {
                  id: 'standard',
                  name: 'Standard Theme View',
                  desc: 'Clean production WordPress frontend with full speed.'
                },
                {
                  id: 'elementor',
                  name: 'Elementor Visual Builder Mode',
                  desc: 'Simulates Elementor widget containers and column bounds.'
                },
                {
                  id: 'gutenberg',
                  name: 'Gutenberg Block Editor Preview',
                  desc: 'Displays WordPress block hierarchy and cover blocks.'
                }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() =>
                    setThemeSettings((prev) => ({
                      ...prev,
                      wpMode: m.id as any
                    }))
                  }
                  className={`w-full text-left p-3 rounded-2xl border transition-all ${
                    themeSettings.wpMode === m.id
                      ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/40 ring-1 ring-emerald-500'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>{m.name}</span>
                    {themeSettings.wpMode === m.id && (
                      <Check className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {m.desc}
                  </p>
                </button>
              ))}
            </div>
          )}

          {/* Tab 3: Color Palette Switcher */}
          {activeTab === 'palette' && (
            <div className="space-y-3 text-xs">
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Palette inspired by Bangladesh's natural landscapes:
              </p>

              {[
                {
                  id: 'emerald-blue',
                  name: 'Bengal Emerald & Sky Blue (Default)',
                  colors: ['#059669', '#0284c7', '#ffffff']
                },
                {
                  id: 'sundarbans',
                  name: 'Sundarbans Deep Forest & Amber',
                  colors: ['#065f46', '#d97706', '#0f172a']
                },
                {
                  id: 'sajek-sunset',
                  name: 'Sajek Sunset & Coral Clouds',
                  colors: ['#e11d48', '#f59e0b', '#4f46e5']
                }
              ].map((pal) => (
                <button
                  key={pal.id}
                  onClick={() =>
                    setThemeSettings((prev) => ({
                      ...prev,
                      colorScheme: pal.id as any
                    }))
                  }
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between ${
                    themeSettings.colorScheme === pal.id
                      ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/40'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div>
                    <p className="font-bold">{pal.name}</p>
                    <div className="flex gap-1.5 mt-1.5">
                      {pal.colors.map((c, i) => (
                        <span
                          key={i}
                          style={{ backgroundColor: c }}
                          className="w-4 h-4 rounded-full border border-slate-300 shadow-xs"
                        />
                      ))}
                    </div>
                  </div>
                  {themeSettings.colorScheme === pal.id && (
                    <Check className="w-4 h-4 text-emerald-600" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

