import React, { useState } from 'react';
import {
  Camera,
  Heart,
  Download,
  X,
  Maximize2,
  MapPin,
  User,
  Share2,
  Sparkles
} from 'lucide-react';
import { PHOTO_GALLERY } from '../data/bangladeshData';
import { GalleryPhoto } from '../types';

interface PhotoGalleryProps {
  language: 'EN' | 'BN';
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [likedIds, setLikedIds] = useState<string[]>([]);

  const categories = [
    'All',
    'Beaches & Sea',
    'Hills & Clouds',
    'Rainforest & Wildlife',
    'Tea Gardens & Rivers',
    'Heritage & Culture'
  ];

  const filteredPhotos = selectedCategory === 'All'
    ? PHOTO_GALLERY
    : PHOTO_GALLERY.filter((p) => p.category === selectedCategory);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="photo-gallery" className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>{language === 'EN' ? 'Visual Chronicles of Bangladesh' : 'ছবিতে বাংলাদেশ'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'EN' ? 'High-Resolution Photo Gallery' : 'ফটোগ্রাফি ও নিসর্গ গ্যালারি'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-sans-body">
              {language === 'EN'
                ? "Experience the golden sunsets of Cox's Bazar, morning cloud seas of Sajek, and the untamed wilderness of the Sundarbans."
                : "কক্সবাজারের রক্তিম সূর্যাস্ত থেকে সাজেকের মেঘের রাজ্য ও সুন্দরবনের বন্য সৌন্দর্য।"}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => {
            const isLiked = likedIds.includes(photo.id);
            return (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-slate-800 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay with photographer info & like button */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-600/90 text-[10px] font-bold uppercase tracking-wider">
                      {photo.category}
                    </span>

                    <button
                      onClick={(e) => toggleLike(photo.id, e)}
                      className="p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-red-500 transition-colors"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>

                  <div>
                    <p className="text-xs text-emerald-300 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {photo.location}
                    </p>
                    <h3 className="font-serif-heading text-sm font-bold text-white line-clamp-1 leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                      Photo by {photo.photographer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[90vh]">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-xs font-bold uppercase">
                  {lightboxPhoto.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {lightboxPhoto.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={lightboxPhoto.image}
                  target="_blank"
                  rel="noreferrer"
                  download="bangladesh-photo.jpg"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1"
                  title="Download High-Res Wallpaper"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Wallpaper</span>
                </a>
                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Photo Viewport */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-slate-950">
              <img
                src={lightboxPhoto.image}
                alt={lightboxPhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-5 border-t border-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-serif-heading text-lg font-bold text-white">
                  {lightboxPhoto.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lightboxPhoto.caption} • Captured by {lightboxPhoto.photographer}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-red-400">
                  <Heart className="w-4 h-4 fill-red-400" />
                  {lightboxPhoto.likes + (likedIds.includes(lightboxPhoto.id) ? 1 : 0)} likes
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
