import React, { useState } from 'react';
import {
  Building2,
  Star,
  MapPin,
  Wifi,
  Coffee,
  Sparkles,
  Check,
  Calendar,
  DollarSign,
  ShieldCheck
} from 'lucide-react';
import { HOTELS_DIRECTORY } from '../data/bangladeshData';
import { Hotel } from '../types';

interface HotelsSectionProps {
  onOpenAiPlanner: (destinationName?: string) => void;
  currency: 'BDT' | 'USD';
  language: 'EN' | 'BN';
}

export const HotelsSection: React.FC<HotelsSectionProps> = ({
  onOpenAiPlanner,
  currency,
  language
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [bookedHotelName, setBookedHotelName] = useState<string | null>(null);

  const types = ['All', 'Luxury Beach Resort', 'Eco Resort', 'Hilltop Cloud Cottage', 'Tea Estate Bungalow'];

  const filteredHotels = selectedType === 'All'
    ? HOTELS_DIRECTORY
    : HOTELS_DIRECTORY.filter((h) => h.type === selectedType);

  const handleBookInquiry = (hotelName: string) => {
    setBookedHotelName(hotelName);
    setTimeout(() => setBookedHotelName(null), 3500);
  };

  return (
    <section id="hotels-stays" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'EN' ? 'Curated Eco-Stays & Luxury Lodges' : 'হোটেল ও রিসোর্ট'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'EN' ? 'Hotels & Eco-Resorts' : 'সেরা হোটেল ও পাহাড়ি কটেজ'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-sans-body">
              {language === 'EN'
                ? "From cliff-edge cloud cottages in Sajek to 5-star beachfront resorts along Cox's Bazar Marine Drive."
                : "সাজেক ভ্যালির মেঘের কটেজ থেকে শুরু করে কক্সবাজার সমুদ্র সৈকত ও সিলেটের মনোরম চা বাগান রিসোর্ট।"}
            </p>
          </div>

          {/* Type Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm max-w-full overflow-x-auto">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedType === t
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700/50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Notification Flash */}
        {bookedHotelName && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-600 text-white shadow-lg flex items-center justify-between animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-300" />
              <span className="text-sm font-semibold">
                Direct booking inquiry initiated for <strong>{bookedHotelName}</strong>. Our local partner concierge will contact you via WhatsApp / Call.
              </span>
            </div>
            <button
              onClick={() => setBookedHotelName(null)}
              className="text-xs underline font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold">
                      {hotel.type}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded-lg flex items-center gap-1 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-5">
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {hotel.destinationName}
                  </p>
                  <h3 className="font-serif-heading text-lg font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                    {hotel.name}
                  </h3>

                  {/* Amenities */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {hotel.amenities.slice(0, 3).map((a, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] rounded-md border border-slate-200 dark:border-slate-600"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Starting from</span>
                    <span className="font-bold text-base text-slate-900 dark:text-white">
                      {currency === 'BDT'
                        ? `৳${hotel.pricePerNightBDT.toLocaleString()}`
                        : `$${hotel.priceUSD}`}
                    </span>
                    <span className="text-[10px] text-slate-500"> / night</span>
                  </div>

                  <button
                    onClick={() => handleBookInquiry(hotel.name)}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Book Stay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
