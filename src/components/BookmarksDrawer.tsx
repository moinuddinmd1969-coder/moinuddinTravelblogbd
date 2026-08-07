import React from 'react';
import { Bookmark, X, Trash2, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { FEATURED_DESTINATIONS } from '../data/bangladeshData';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onRemoveBookmark: (id: string) => void;
  onSelectDestination: (id: string) => void;
  onOpenAiPlanner: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onRemoveBookmark,
  onSelectDestination,
  onOpenAiPlanner
}) => {
  if (!isOpen) return null;

  const bookmarkedDestinations = FEATURED_DESTINATIONS.filter((d) =>
    bookmarkedIds.includes(d.id)
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-emerald-600 fill-current" />
            <h3 className="font-serif-heading text-lg font-bold text-slate-900 dark:text-white">
              Saved Trips & Wishlist ({bookmarkedDestinations.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {bookmarkedDestinations.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Bookmark className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
              <h4 className="font-bold text-slate-700 dark:text-slate-300">
                No Bookmarks Yet
              </h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Click the bookmark icon on any destination or article to save it for your next trip to Bangladesh.
              </p>
            </div>
          ) : (
            bookmarkedDestinations.map((dest) => (
              <div
                key={dest.id}
                className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 group"
              >
                <div
                  onClick={() => {
                    onSelectDestination(dest.id);
                    onClose();
                  }}
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600">
                      {dest.name}
                    </h5>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{dest.division} Division</p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveBookmark(dest.id)}
                  className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                  title="Remove from bookmarks"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        {bookmarkedDestinations.length > 0 && (
          <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <button
              onClick={() => {
                onClose();
                onOpenAiPlanner();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md text-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Plan Trip with Saved Places</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
