import React from 'react';
import {
  Compass,
  MapPin,
  PhoneCall,
  Mail,
  ShieldCheck,
  Globe,
  Heart,
  ExternalLink,
  Youtube,
  Instagram,
  Facebook
} from 'lucide-react';
import { BANGLADESH_DIVISIONS } from '../data/bangladeshData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
  language: 'EN' | 'BN';
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenContact,
  language
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Tourism Board Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 p-0.5 shadow-md">
                <div className="w-full h-full bg-emerald-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute w-5 h-5 rounded-full bg-red-600 opacity-90 -right-0.5 -top-0.5 blur-[0.5px]" />
                  <Compass className="w-6 h-6 text-emerald-300 relative z-10" />
                </div>
              </div>
              <div>
                <span className="font-serif-heading font-extrabold text-2xl text-white tracking-tight">
                  Bangla<span className="text-emerald-400">Venture</span>
                </span>
                <p className="text-[11px] text-slate-400 font-sans-body -mt-0.5">
                  Discover Bangladesh • সোনার বাংলা ট্রাভেল
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans-body">
              {language === 'EN'
                ? "The premier SEO-friendly travel magazine and WordPress theme for Bangladesh tourism. Guiding travelers through Cox's Bazar, Sundarbans, Sajek Valley, Saint Martin, and lush Sylhet tea estates."
                : "বাংলাদেশের প্রাকৃতিক সৌন্দর্য ও ঐতিহ্যবাহী পর্যটন স্থানসমূহের নির্ভরযোগ্য ভ্রমণ নির্দেশিকা ও ওয়ার্ডপ্রেস ব্লগ থিম।"}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-slate-900 p-3 rounded-xl border border-slate-800">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>Recognized by Bangladesh Tourism Promotion Standards</span>
            </div>
          </div>

          {/* Col 2: 8 Divisions Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              8 Divisions of Bangladesh
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              {BANGLADESH_DIVISIONS.map((div) => (
                <li key={div.id}>
                  <a
                    href="#interactive-map"
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span>{div.name.split(' ')[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Links & Safety */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="font-serif-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              Travel Logistics
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#travel-guides" className="hover:text-emerald-400 transition-colors">
                  Shohoz Train Guide
                </a>
              </li>
              <li>
                <a href="#travel-guides" className="hover:text-emerald-400 transition-colors">
                  Sajek Army Convoy
                </a>
              </li>
              <li>
                <a href="#hotels-stays" className="hover:text-emerald-400 transition-colors">
                  Eco-Resorts & Cottages
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Privacy Policy & Terms
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Contact & Press Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: 24/7 Helpline & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              24/7 Emergency & Social
            </h4>

            <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-xs space-y-1">
              <span className="text-slate-400 block font-medium">Tourist Police Bangladesh</span>
              <a
                href="tel:999"
                className="font-bold text-emerald-400 text-sm flex items-center gap-1 hover:underline"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call 999 / +880 1769-690740</span>
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400">Follow Our 4K Expeditions:</span>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-red-600 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-pink-600 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & WordPress Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 BanglaVenture. Designed with pride for Bangladesh Tourism. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>WordPress GPLv3 Licensed</span>
            <span>•</span>
            <span>Elementor & Gutenberg 100% Compatible</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
