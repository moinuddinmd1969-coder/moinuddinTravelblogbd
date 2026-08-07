import React from 'react';
import {
  BookOpen,
  Clock,
  Eye,
  Heart,
  MessageSquare,
  ArrowRight,
  User,
  Tag,
  Share2
} from 'lucide-react';
import { LATEST_ARTICLES } from '../data/bangladeshData';
import { Article } from '../types';

interface LatestArticlesProps {
  onOpenArticle: (articleId: string) => void;
  language: 'EN' | 'BN';
}

export const LatestArticles: React.FC<LatestArticlesProps> = ({
  onOpenArticle,
  language
}) => {
  const featuredArticle = LATEST_ARTICLES[0];
  const secondaryArticles = LATEST_ARTICLES.slice(1);

  return (
    <section id="latest-articles" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>{language === 'EN' ? 'Traveler Stories & In-Depth Guides' : 'ভ্রমণ ব্লগ ও গাইড'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'EN' ? 'Latest Travel Articles' : 'সর্বশেষ ভ্রমণ প্রবন্ধ'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-sans-body">
              {language === 'EN'
                ? "Firsthand expedition notes, photography guides, authentic culinary maps, and insider tips from seasoned explorers of Bangladesh."
                : "অভিজ্ঞ পর্যটকদের চোখে দেখা বাংলাদেশের রূপ ও গোপন ট্রেইলসমূহ।"}
            </p>
          </div>
        </div>

        {/* Featured Hero Article */}
        <div className="mb-12">
          <div
            onClick={() => onOpenArticle(featuredArticle.id)}
            className="group cursor-pointer bg-slate-50 dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Featured Image */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Featured Spotlight
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readingTime}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.publishedDate}</span>
                </div>

                <h3 className="font-serif-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-3 font-sans-body">
                  {featuredArticle.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {featuredArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md border border-slate-200 dark:border-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Footer Bar */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      {featuredArticle.author.name}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {featuredArticle.author.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {featuredArticle.viewCount.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => onOpenArticle(art.id)}
              className="cursor-pointer bg-slate-50 dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold">
                      {art.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readingTime}</span>
                    <span>•</span>
                    <span>{art.publishedDate}</span>
                  </div>

                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-2 mt-2 leading-relaxed font-sans-body">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Footer */}
              <div className="p-6 pt-0 border-t border-slate-200/60 dark:border-slate-700/60 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={art.author.avatar}
                    alt={art.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {art.author.name.split(' ')[0]}
                  </span>
                </div>

                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Guide →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
