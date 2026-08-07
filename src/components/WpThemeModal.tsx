import React, { useState, useMemo } from 'react';
import {
  X,
  FileCode,
  Download,
  Copy,
  Check,
  Package,
  Layers,
  Code2,
  Sliders,
  ExternalLink,
  Sparkles,
  Search,
  FileText,
  FolderArchive,
  Info,
  ChevronRight,
  Terminal,
  CheckCircle2,
  ArrowDownToLine,
  FileCheck
} from 'lucide-react';
import {
  WP_STYLE_CSS,
  WP_FUNCTIONS_PHP,
  THEME_FILES_LIST,
  ThemeFileMeta,
  downloadFile,
  downloadCoreThemeZip,
  downloadFullWordPressThemeZip
} from '../data/wpThemeFiles';

interface WpThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const WpThemeModal: React.FC<WpThemeModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'style'
}) => {
  const [activeFileKey, setActiveFileKey] = useState<string>(initialTab);
  const [copied, setCopied] = useState(false);
  const [isZippingCore, setIsZippingCore] = useState(false);
  const [isZippingFull, setIsZippingFull] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeViewMode, setActiveViewMode] = useState<'code' | 'archive' | 'instructions'>('code');

  const fileMap = useMemo(() => {
    const map: Record<string, ThemeFileMeta> = {};
    THEME_FILES_LIST.forEach((f) => {
      map[f.key] = f;
    });
    return map;
  }, []);

  if (!isOpen) return null;

  const current = fileMap[activeFileKey] || THEME_FILES_LIST[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSingle = (file?: ThemeFileMeta) => {
    const target = file || current;
    const mime =
      target.ext === 'css'
        ? 'text/css'
        : target.ext === 'json'
        ? 'application/json'
        : target.ext === 'php'
        ? 'application/x-httpd-php'
        : 'text/plain';
    downloadFile(target.name, target.content, mime);
  };

  const handleDownloadCoreZip = async () => {
    try {
      setIsZippingCore(true);
      await downloadCoreThemeZip();
    } catch (err) {
      console.error('Error generating core theme zip:', err);
    } finally {
      setIsZippingCore(false);
    }
  };

  const handleDownloadFullZip = async () => {
    try {
      setIsZippingFull(true);
      await downloadFullWordPressThemeZip();
    } catch (err) {
      console.error('Error generating full theme zip:', err);
    } finally {
      setIsZippingFull(false);
    }
  };

  const filteredLines = current.content.split('\n');
  const searchMatchesCount = searchQuery
    ? filteredLines.filter((l) => l.toLowerCase().includes(searchQuery.toLowerCase())).length
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-6xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden text-slate-900 dark:text-white">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/70 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-bold shadow-md">
              <FolderArchive className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif-heading font-extrabold text-lg sm:text-xl leading-tight">
                  WordPress Theme Generator &amp; <span className="text-emerald-600 dark:text-emerald-400">style.css</span>
                </h3>
                <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300/40">
                  v2.6.0 GPLv3
                </span>
                <span className="hidden sm:inline-block bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300/40">
                  Elementor &amp; Gutenberg Ready
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Generate and download installable WordPress ZIP packages with the newly created <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded font-bold text-slate-800 dark:text-slate-200">style.css</code> and standard <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded font-bold text-slate-800 dark:text-slate-200">functions.php</code>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Core Theme ZIP */}
            <button
              onClick={handleDownloadCoreZip}
              disabled={isZippingCore || isZippingFull}
              className="hidden lg:flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 text-xs font-bold py-2 px-3 rounded-xl shadow-xs transition-all disabled:opacity-50"
              title="Download Core Theme ZIP with style.css + functions.php"
            >
              <FileCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{isZippingCore ? 'Packaging Core...' : 'Core ZIP (style.css + functions.php)'}</span>
            </button>

            {/* Download Complete Theme ZIP */}
            <button
              onClick={handleDownloadFullZip}
              disabled={isZippingFull || isZippingCore}
              className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-md transition-all disabled:opacity-50"
              title="Download full WordPress Theme ZIP installable package"
            >
              <Package className="w-4 h-4 text-amber-300" />
              <span>{isZippingFull ? 'Packaging Full...' : 'Download Full Theme ZIP'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Bar & Download Banner */}
        <div className="px-4 sm:px-6 py-2.5 bg-emerald-50/80 dark:bg-emerald-950/40 border-b border-emerald-100 dark:border-emerald-900/40 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Main Mode Switcher */}
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
            <button
              onClick={() => setActiveViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all ${
                activeViewMode === 'code'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code Inspector</span>
            </button>
            <button
              onClick={() => setActiveViewMode('archive')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all ${
                activeViewMode === 'archive'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>ZIP Archive Contents ({THEME_FILES_LIST.length} files)</span>
            </button>
            <button
              onClick={() => setActiveViewMode('instructions')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all ${
                activeViewMode === 'instructions'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Install Guide</span>
            </button>
          </div>

          {/* Quick ZIP Action Shortcuts */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCoreZip}
              disabled={isZippingCore}
              className="flex items-center gap-1 text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/50 hover:bg-emerald-200 dark:hover:bg-emerald-800 font-semibold px-2.5 py-1 rounded-lg border border-emerald-300/60 dark:border-emerald-700/60 transition-colors"
            >
              <ArrowDownToLine className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Core ZIP (style.css + functions.php)</span>
            </button>

            <button
              onClick={handleDownloadFullZip}
              disabled={isZippingFull}
              className="flex items-center gap-1 text-teal-800 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/50 hover:bg-teal-200 dark:hover:bg-teal-800 font-semibold px-2.5 py-1 rounded-lg border border-teal-300/60 dark:border-teal-700/60 transition-colors"
            >
              <Package className="w-3 h-3 text-teal-600 dark:text-teal-400" />
              <span>Full Theme ZIP</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Code Inspector */}
        {activeViewMode === 'code' && (
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {/* File Tab Selector & Search Toolbar */}
            <div className="px-4 sm:px-6 py-2.5 border-b border-slate-100 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950/40 flex flex-wrap items-center justify-between gap-3">
              {/* File selector tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
                {THEME_FILES_LIST.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => {
                      setActiveFileKey(f.key);
                      setSearchQuery('');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all shrink-0 ${
                      activeFileKey === f.key
                        ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/30'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 opacity-80" />
                    <span>{f.name}</span>
                    {f.isCore && (
                      <span className="bg-amber-400 text-slate-950 text-[9px] font-sans px-1 rounded font-extrabold uppercase">
                        Core
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Search & Code Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search in ${current.name}...`}
                    className="pl-8 pr-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 w-36 sm:w-48"
                  />
                  {searchQuery && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-mono">
                      {searchMatchesCount}
                    </span>
                  )}
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-xs py-1.5 px-3 rounded-xl transition-colors shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : `Copy ${current.name}`}</span>
                </button>

                <button
                  onClick={() => handleDownloadSingle()}
                  className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-1.5 px-3 rounded-xl transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download {current.name}</span>
                </button>
              </div>
            </div>

            {/* File Description Header */}
            <div className="px-6 py-2 bg-emerald-50/40 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/30 flex items-center justify-between text-xs text-emerald-900 dark:text-emerald-300">
              <div className="flex items-center gap-2 truncate">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="font-bold">{current.name}:</span>
                <span className="text-slate-600 dark:text-slate-400 truncate">{current.desc}</span>
              </div>
              <div className="hidden md:flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 font-mono shrink-0">
                <span>Est. Size: {current.sizeEstimate}</span>
                {current.key === 'style' && (
                  <span>
                    Direct URL:{' '}
                    <a
                      href="/style.css"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      /style.css
                    </a>
                  </span>
                )}
              </div>
            </div>

            {/* Code Content Area with Line Numbers and Highlighting */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed selection:bg-emerald-700 selection:text-white">
              <pre className="overflow-x-auto">
                <code>
                  {filteredLines.map((line, idx) => {
                    const isMatch = searchQuery && line.toLowerCase().includes(searchQuery.toLowerCase());
                    const isComment =
                      line.trim().startsWith('/*') ||
                      line.trim().startsWith('*') ||
                      line.trim().startsWith('//') ||
                      line.trim().startsWith('#');
                    const isHeaderTag =
                      line.includes('Theme Name:') ||
                      line.includes('Author:') ||
                      line.includes('Version:') ||
                      line.includes('Description:') ||
                      line.includes('Requires at least:') ||
                      line.includes('Requires PHP:');

                    return (
                      <div
                        key={idx}
                        className={`flex hover:bg-slate-900/80 transition-colors ${
                          isMatch ? 'bg-amber-950/60 border-l-2 border-amber-400' : ''
                        }`}
                      >
                        <span className="w-10 select-none text-slate-600 text-right pr-4 shrink-0 font-mono">
                          {idx + 1}
                        </span>
                        <span
                          className={`flex-1 ${
                            isHeaderTag
                              ? 'text-amber-300 font-bold'
                              : isComment
                              ? 'text-slate-500 italic'
                              : line.includes(':root') || line.includes('@') || line.includes('function ')
                              ? 'text-emerald-400 font-bold'
                              : line.includes('--bv-') || line.includes('add_theme_support') || line.includes('register_post_type')
                              ? 'text-teal-300'
                              : line.includes('{') || line.includes('}')
                              ? 'text-amber-400'
                              : 'text-slate-200'
                          }`}
                        >
                          {line || ' '}
                        </span>
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
          </div>
        )}

        {/* View Mode 2: ZIP Archive Contents & Bundle Overview */}
        {activeViewMode === 'archive' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Top Download Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1: Core Theme ZIP */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-200 dark:border-emerald-800/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Core WordPress Package
                    </span>
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 font-mono">
                      ~21.2 KB
                    </span>
                  </div>
                  <h4 className="font-serif-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                    banglaventure-core-theme.zip
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Contains the essential newly generated <code className="font-bold text-emerald-700 dark:text-emerald-400">style.css</code> and standard <code className="font-bold text-emerald-700 dark:text-emerald-400">functions.php</code> with custom post types, menus, and GPLv3 documentation.
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Includes: style.css, functions.php, readme.txt</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Ready for WordPress 6.2+
                  </span>
                  <button
                    onClick={handleDownloadCoreZip}
                    disabled={isZippingCore}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-xl flex items-center gap-2 shadow-sm transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isZippingCore ? 'Generating...' : 'Download Core ZIP'}</span>
                  </button>
                </div>
              </div>

              {/* Card 2: Full Theme Suite ZIP */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-amber-400 text-slate-950 font-mono text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                      Complete Theme Suite
                    </span>
                    <span className="text-xs font-bold text-amber-300 font-mono">
                      ~28.8 KB ({THEME_FILES_LIST.length} Files)
                    </span>
                  </div>
                  <h4 className="font-serif-heading font-extrabold text-base sm:text-lg text-white">
                    banglaventure-wordpress-theme.zip
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Complete theme package with <code className="text-emerald-300 font-bold">style.css</code>, <code className="text-emerald-300 font-bold">functions.php</code>, Full Site Editing <code className="text-teal-300 font-bold">theme.json</code>, header, footer, index, and readme.
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full Gutenberg FSE &amp; Elementor Compatibility</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400">
                    GPLv3 Free &amp; Open Source
                  </span>
                  <button
                    onClick={handleDownloadFullZip}
                    disabled={isZippingFull}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs py-2 px-4 rounded-xl flex items-center gap-2 shadow-sm transition-all"
                  >
                    <Package className="w-3.5 h-3.5 text-amber-300" />
                    <span>{isZippingFull ? 'Packaging...' : 'Download Full ZIP'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Archive File Manifest Table */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <FolderArchive className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>ZIP Archive File Tree (/banglaventure/)</span>
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Click any file below to inspect its source code or download individually.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-lg">
                  {THEME_FILES_LIST.length} Files Included
                </span>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {THEME_FILES_LIST.map((f) => (
                  <div
                    key={f.key}
                    className="p-3 sm:p-4 hover:bg-slate-100/70 dark:hover:bg-slate-800/50 flex flex-wrap items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className={`p-2 rounded-xl text-xs font-mono font-bold shrink-0 ${
                        f.key === 'style'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : f.key === 'functions'
                          ? 'bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-300 dark:border-teal-800'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}>
                        <FileCode className="w-4 h-4" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                            {f.name}
                          </span>
                          <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-sans text-[10px] font-semibold px-2 py-0.5 rounded-md">
                            {f.tag}
                          </span>
                          {f.isCore && (
                            <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-300/40">
                              Core Requirement
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                          {f.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-slate-400 font-mono pr-2 hidden sm:inline">
                        {f.sizeEstimate}
                      </span>
                      <button
                        onClick={() => {
                          setActiveFileKey(f.key);
                          setActiveViewMode('code');
                        }}
                        className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        Inspect Code
                      </button>
                      <button
                        onClick={() => handleDownloadSingle(f)}
                        className="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 shadow-xs transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        <span className="hidden sm:inline">Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View Mode 3: WordPress Installation Instructions */}
        {activeViewMode === 'instructions' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="font-serif-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>How to Install BanglaVenture in WordPress</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                    1
                  </div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Download the ZIP</h5>
                  <p className="text-slate-600 dark:text-slate-400">
                    Click <strong>Download Full Theme ZIP</strong> or <strong>Core ZIP</strong> above to get the installable archive file.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                    2
                  </div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Upload in WP-Admin</h5>
                  <p className="text-slate-600 dark:text-slate-400">
                    In your WordPress Dashboard, navigate to <code>Appearance &gt; Themes &gt; Add New &gt; Upload Theme</code> and choose the ZIP file.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                    3
                  </div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Activate &amp; Customize</h5>
                  <p className="text-slate-600 dark:text-slate-400">
                    Click <strong>Activate</strong>. Use <code>Appearance &gt; Customize</code> or the Gutenberg Full Site Editor to tune color palettes and layout.
                  </p>
                </div>
              </div>

              {/* Manual Directory Path */}
              <div className="p-3 bg-slate-950 text-slate-300 rounded-xl font-mono text-xs space-y-1">
                <span className="text-slate-500">// Manual FTP / Localhost Directory Installation Path:</span>
                <p className="text-emerald-400 font-bold">
                  /wp-content/themes/banglaventure/style.css
                </p>
                <p className="text-emerald-400 font-bold">
                  /wp-content/themes/banglaventure/functions.php
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>WordPress 6.7 / PHP 7.4+ Compatible • 100% Valid CSS3 &amp; PHP</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/style.css"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold px-2 py-1"
            >
              <span>Open raw /style.css</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleDownloadCoreZip}
              disabled={isZippingCore}
              className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold py-2 px-3 rounded-xl flex items-center gap-1.5 shadow-xs transition-all disabled:opacity-50"
            >
              <FileCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{isZippingCore ? 'Packaging Core...' : 'Core ZIP'}</span>
            </button>

            <button
              onClick={handleDownloadFullZip}
              disabled={isZippingFull}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl flex items-center gap-1.5 shadow-sm transition-all disabled:opacity-50"
            >
              <Package className="w-4 h-4 text-amber-300" />
              <span>{isZippingFull ? 'Generating...' : 'Download Full Theme Package (.zip)'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

