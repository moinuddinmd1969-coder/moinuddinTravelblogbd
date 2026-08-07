import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Eye,
  Heart,
  Share2,
  Bookmark,
  MessageSquare,
  Star,
  Send,
  Check,
  User,
  Compass,
  ArrowLeft,
  ThumbsUp,
  Tag
} from 'lucide-react';
import { LATEST_ARTICLES } from '../data/bangladeshData';
import { Article, CommentItem } from '../types';

interface ArticleReaderModalProps {
  articleId: string | null;
  onClose: () => void;
  onSelectAnotherArticle: (id: string) => void;
  language: 'EN' | 'BN';
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  articleId,
  onClose,
  onSelectAnotherArticle,
  language
}) => {
  const article = LATEST_ARTICLES.find((a) => a.id === articleId) || LATEST_ARTICLES[0];

  const [comments, setComments] = useState<CommentItem[]>([]);
  const [commenterName, setCommenterName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentRating, setCommentRating] = useState(5);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [likesCount, setLikesCount] = useState(142);
  const [hasLiked, setHasLiked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (article) {
      // Fetch initial comments from backend
      fetch(`/api/comments?articleId=${article.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setComments(data);
          } else {
            // Seed initial realistic comments
            setComments([
              {
                id: '1',
                authorName: 'Tanvir Hossain',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
                date: '2 days ago',
                rating: 5,
                comment: 'This guide helped me plan my Cox’s Bazar to Saint Martin trip seamlessly! The train timing tips for the Cox’s Bazar Express on Shohoz were spot on.',
                likes: 12
              },
              {
                id: '2',
                authorName: 'Sarah Jenkins',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
                date: '4 days ago',
                rating: 5,
                comment: 'Beautifully written article! Sajek Valley was mystical with the floating clouds. Highly recommend following the army escort guidelines mentioned here.',
                likes: 8
              }
            ]);
          }
        })
        .catch(() => {
          // Fallback initial comments
          setComments([
            {
              id: '1',
              authorName: 'Tanvir Hossain',
              avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
              date: '2 days ago',
              rating: 5,
              comment: 'This guide helped me plan my Cox’s Bazar to Saint Martin trip seamlessly! The train timing tips for the Cox’s Bazar Express on Shohoz were spot on.',
              likes: 12
            }
          ]);
        });
    }
  }, [article]);

  if (!articleId || !article) return null;

  const handleLike = () => {
    if (hasLiked) {
      setLikesCount((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commenterName.trim() || !commentText.trim()) return;

    setIsSubmittingComment(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: article.id,
          authorName: commenterName,
          comment: commentText,
          rating: commentRating
        })
      });

      const newC = await res.json();
      setComments((prev) => [newC, ...prev]);
      setCommenterName('');
      setCommentText('');
    } catch (err) {
      const fallbackC: CommentItem = {
        id: String(Date.now()),
        authorName: commenterName,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        date: 'Just now',
        rating: commentRating,
        comment: commentText,
        likes: 0
      };
      setComments((prev) => [fallbackC, ...prev]);
      setCommenterName('');
      setCommentText('');
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const relatedArticles = LATEST_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-4 max-h-[94vh] flex flex-col">
        {/* Sticky Header Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={onClose}
              className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-emerald-600 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </button>
            <span>/</span>
            <span className="text-emerald-600 font-bold">{article.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                hasLiked
                  ? 'bg-red-50 text-red-600 dark:bg-red-950/60'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-red-500 text-red-500' : ''}`} />
              <span>{likesCount}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 text-xs font-semibold flex items-center gap-1"
              title="Share or copy article link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reader Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1">
          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
              <span>•</span>
              <span>{article.publishedDate}</span>
            </div>

            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
              {article.title}
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-sans-body">
              {article.excerpt}
            </p>

            {/* Author Box */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
              />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Written by {article.author.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {article.author.role} • Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-lg border border-slate-200 dark:border-slate-800">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Table of Contents Box */}
          {article.tableOfContents && (
            <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Table of Contents:
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                {article.tableOfContents.map((toc, idx) => (
                  <li key={idx} className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{toc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Article Body Text */}
          <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 font-sans-body space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              {article.content}
            </p>
            <p>
              Traveling across Bangladesh offers an intimate encounter with nature and hospitality unlike anywhere else in South Asia. Whether taking the newly inaugurated Cox's Bazar Express train through scenic river corridors or navigating the tight mangrove creeks of Kotka in Sundarbans with local forest guards, every district holds its own rhythm.
            </p>
            <blockquote className="p-4 border-l-4 border-emerald-500 bg-slate-50 dark:bg-slate-800/80 rounded-r-xl italic font-serif-heading text-slate-700 dark:text-slate-300 my-6">
              "To see Bangladesh is to witness endless emerald greenery meeting the mighty rivers that feed the largest delta on earth."
            </blockquote>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full border border-slate-200 dark:border-slate-700"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Real-time Comments Section */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-heading text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Traveler Discussions ({comments.length})</span>
              </h3>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Leave a Review / Tip:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name / Traveler Handle"
                  value={commenterName}
                  onChange={(e) => setCommenterName(e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />

                <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2">
                  <span className="text-xs text-slate-500">Rating:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setCommentRating(star)}
                        className="p-0.5"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            star <= commentRating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <textarea
                placeholder="Share your personal experience, hotel recommendations, or questions about this destination..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={3}
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmittingComment}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmittingComment ? 'Posting...' : 'Post Comment'}</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={c.avatar}
                        alt={c.authorName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">
                          {c.authorName}
                        </p>
                        <p className="text-[10px] text-slate-400">{c.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: c.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-10">
                    {c.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles Cards */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="font-serif-heading text-xl font-bold text-slate-900 dark:text-white">
              Related Travel Guides
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectAnotherArticle(rel.id)}
                  className="cursor-pointer p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex gap-3 hover:border-emerald-500 transition-colors group"
                >
                  <img
                    src={rel.coverImage}
                    alt={rel.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <span className="text-[10px] text-emerald-600 font-bold uppercase">
                      {rel.category}
                    </span>
                    <h5 className="font-serif-heading text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 line-clamp-2 mt-0.5">
                      {rel.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      {rel.readingTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
