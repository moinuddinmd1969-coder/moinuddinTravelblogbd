import React, { useState } from 'react';
import {
  MapPin,
  Compass,
  Navigation,
  Train,
  Plane,
  Bus,
  Sparkles,
  ArrowRight,
  Sun,
  ShieldAlert,
  Info,
  Layers
} from 'lucide-react';
import { BANGLADESH_DIVISIONS, FEATURED_DESTINATIONS } from '../data/bangladeshData';

interface InteractiveMapProps {
  onSelectDestination: (destId: string) => void;
  onOpenAiPlanner: (destinationName?: string) => void;
  currency: 'BDT' | 'USD';
  language: 'EN' | 'BN';
}

const MAP_HOTSPOTS = [
  {
    id: 'coxs-bazar',
    name: "Cox's Bazar",
    bengali: "কক্সবাজার",
    division: "Chittagong",
    type: "Coast & Beach",
    x: 78,
    y: 80,
    distance: "395 km",
    duration: "45m Air / 6h Train",
    budgetBDT: "৳6,500 - ৳18,000",
    budgetUSD: "$60 - $160",
    summary: "120 km longest unbroken natural sand beach, Marine Drive, Inani coral reefs.",
    bestTime: "Oct – Mar",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 'sajek-valley',
    name: "Sajek Valley",
    bengali: "সাজেক ভ্যালি",
    division: "Chittagong",
    type: "Clouds & Mountains",
    x: 82,
    y: 50,
    distance: "320 km",
    duration: "6h Bus + 2.5h Chander Gari",
    budgetBDT: "৳5,000 - ৳14,000",
    budgetUSD: "$45 - $125",
    summary: "Sea of clouds floating past wooden balconies, Konglak Peak, bamboo chicken.",
    bestTime: "Sep – Feb",
    image: "https://images.unsplash.com/photo-1628178873041-0f666f7f2b84?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 'sundarbans',
    name: "The Sundarbans",
    bengali: "সুন্দরবন",
    division: "Khulna",
    type: "UNESCO Mangrove",
    x: 38,
    y: 76,
    distance: "280 km",
    duration: "4h Road + 3-Day Cruise",
    budgetBDT: "৳12,000 - ৳28,000",
    budgetUSD: "$110 - $250",
    summary: "World's largest mangrove forest, Royal Bengal Tiger safari, Kotka watchtower.",
    bestTime: "Nov – Mar",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 'saint-martin',
    name: "Saint Martin's Island",
    bengali: "সেন্ট মার্টিন্স দ্বীপ",
    division: "Chittagong",
    type: "Coral Paradise",
    x: 84,
    y: 91,
    distance: "450 km",
    duration: "Overnight Bus + 2h Ship",
    budgetBDT: "৳7,000 - ৳16,000",
    budgetUSD: "$65 - $145",
    summary: "Turquoise coral island, Chera Dwip reef walks, sweet coconut water, seafood BBQ.",
    bestTime: "Nov – Feb",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 'sylhet-tea',
    name: "Sylhet & Sreemangal",
    bengali: "সিলেট ও শ্রীমঙ্গল",
    division: "Sylhet",
    type: "Tea Valleys & Swamp",
    x: 74,
    y: 33,
    distance: "200 km",
    duration: "3.5h Train / 4.5h Bus",
    budgetBDT: "৳4,500 - ৳12,000",
    budgetUSD: "$40 - $110",
    summary: "40+ rolling tea estates, submerged Ratargul freshwater swamp forest, 7-color tea.",
    bestTime: "May – Mar",
    image: "https://images.unsplash.com/photo-1598460599557-4148e6587c6b?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 'bandarban',
    name: "Bandarban Hills",
    bengali: "বান্দরবান",
    division: "Chittagong",
    type: "High Mountain Peaks",
    x: 82,
    y: 67,
    distance: "320 km",
    duration: "7h AC Bus",
    budgetBDT: "৳6,000 - ৳15,000",
    budgetUSD: "$55 - $135",
    summary: "Nilgiri cloud peak, Keokradong trekking, Boga Lake crater, roaring waterfalls.",
    bestTime: "Oct – Mar",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 'kuakata',
    name: "Kuakata Beach",
    bengali: "কুয়াকাটা",
    division: "Barisal",
    type: "Sunrise & Sunset Beach",
    x: 48,
    y: 84,
    distance: "310 km",
    duration: "5h Bus via Padma Bridge",
    budgetBDT: "৳5,000 - ৳12,000",
    budgetUSD: "$45 - $110",
    summary: "Daughter of the Sea where you can watch both sunrise and sunset from the same beach.",
    bestTime: "Oct – Mar",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 'dhaka-heritage',
    name: "Dhaka (Old Town & Heritage)",
    bengali: "ঢাকা ও পানাম নগর",
    division: "Dhaka",
    type: "Mughal & Colonial Heritage",
    x: 54,
    y: 47,
    distance: "Capital City Hub",
    duration: "Central Transit Hub",
    budgetBDT: "৳2,500 - ৳8,000",
    budgetUSD: "$25 - $75",
    summary: "Ahsan Manzil, Lalbagh Fort, Panam City Sonargaon, and Old Dhaka Shahi Kacchi Biryani.",
    bestTime: "Year-round",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 'paharpur',
    name: "Somapura Mahavihara (Paharpur)",
    bengali: "পাহাড়পুর বৌদ্ধ বিহার",
    division: "Rajshahi",
    type: "UNESCO Buddhist Monastery",
    x: 32,
    y: 28,
    distance: "270 km",
    duration: "5h Train from Dhaka",
    budgetBDT: "৳3,500 - ৳9,000",
    budgetUSD: "$30 - $80",
    summary: "8th-century UNESCO Buddhist monastic complex, terracotta plaques, and Mahasthangarh.",
    bestTime: "Oct – Mar",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80"
  }
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  onSelectDestination,
  onOpenAiPlanner,
  currency,
  language
}) => {
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>('coxs-bazar');
  const [activeDivisionFilter, setActiveDivisionFilter] = useState<string>('all');

  const activeHotspot = MAP_HOTSPOTS.find((h) => h.id === selectedHotspotId) || MAP_HOTSPOTS[0];

  const filteredHotspots = activeDivisionFilter === 'all'
    ? MAP_HOTSPOTS
    : MAP_HOTSPOTS.filter((h) => h.division.toLowerCase() === activeDivisionFilter.toLowerCase());

  return (
    <section id="interactive-map" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background aesthetic grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>Interactive Tourism Map of Bangladesh</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Explore 8 Divisions & 64 Districts
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
              Click on the map hotspots to preview live travel distances from Dhaka, transportation options (Shohoz train, Green Line bus, sea ships), estimated budgets, and local highlights.
            </p>
          </div>

          {/* Division Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-800/80 rounded-xl border border-slate-700 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveDivisionFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeDivisionFilter === 'all'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              All Bangladesh
            </button>
            {BANGLADESH_DIVISIONS.slice(0, 5).map((div) => (
              <button
                key={div.id}
                onClick={() => setActiveDivisionFilter(div.name.split(' ')[0])}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeDivisionFilter.toLowerCase() === div.name.split(' ')[0].toLowerCase()
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {div.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Map Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive SVG Canvas Area */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-6 border border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Pin Locator • Tap any marker
              </span>
              <span>Bay of Bengal Coastline & Delta</span>
            </div>

            {/* Custom SVG Map Canvas */}
            <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/3.8] bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center p-4">
              {/* Map SVG background silhouette */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-slate-800/80 fill-emerald-950/40 stroke-emerald-600/30 stroke-[0.8]"
              >
                {/* Stylized Bangladesh geographical boundaries */}
                <path d="M 28 14 Q 38 10 50 18 Q 62 12 72 22 Q 82 28 84 42 Q 88 56 82 72 Q 84 88 82 96 Q 74 90 68 84 Q 52 82 46 88 Q 36 82 34 72 Q 22 74 24 58 Q 20 42 24 30 Z" />

                {/* Major River veins: Padma, Meghna, Jamuna */}
                <path
                  d="M 38 28 Q 44 42 52 50 Q 64 60 62 82"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  opacity="0.6"
                />
                <path
                  d="M 68 24 Q 62 38 54 50 Q 58 66 60 84"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  opacity="0.6"
                />
                {/* Bay of Bengal bottom waves indicator */}
                <text x="35" y="96" fill="#38bdf8" fontSize="3" fontWeight="bold" opacity="0.5">
                  BAY OF BENGAL (বঙ্গোপসাগর)
                </text>
              </svg>

              {/* Hotspot Markers */}
              {filteredHotspots.map((spot) => {
                const isSelected = spot.id === selectedHotspotId;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedHotspotId(spot.id)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                    title={`${spot.name} (${spot.division})`}
                  >
                    {/* Glowing pulse ring */}
                    <div
                      className={`absolute inset-0 rounded-full transition-transform ${
                        isSelected
                          ? 'w-10 h-10 -left-2 -top-2 bg-emerald-500/40 animate-ping'
                          : 'w-6 h-6 -left-0.5 -top-0.5 bg-emerald-400/20 group-hover:scale-150'
                      }`}
                    />

                    {/* Pin Circle */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-300 shadow-lg ${
                        isSelected
                          ? 'w-7 h-7 bg-emerald-500 text-white ring-4 ring-emerald-300/40 scale-110'
                          : 'w-5 h-5 bg-slate-800 border-2 border-emerald-400 text-emerald-400 group-hover:scale-125'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </div>

                    {/* Floating Label */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow-md transition-all ${
                        isSelected
                          ? 'bg-emerald-600 text-white opacity-100 scale-100'
                          : 'bg-slate-900/90 text-slate-300 opacity-80 group-hover:opacity-100 scale-95'
                      }`}
                    >
                      {spot.name.split(' ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" /> Coastal & Beach
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-teal-400" /> Hills & Clouds
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-green-600" /> Mangrove UNESCO
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-400" /> Tea Gardens
              </span>
            </div>
          </div>

          {/* Hotspot Detailed Information Card */}
          <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              {/* Photo & Badge */}
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-4 border border-slate-700">
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider">
                      {activeHotspot.type}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 leading-tight">
                      {activeHotspot.name}
                    </h3>
                  </div>
                  <p className="font-bengali text-amber-300 text-xs font-semibold">
                    {activeHotspot.bengali}
                  </p>
                </div>
              </div>

              {/* Quick Summary */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {activeHotspot.summary}
              </p>

              {/* Transit & Budget Specs Grid */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-900/80 rounded-2xl border border-slate-700/70 text-xs">
                <div>
                  <span className="text-slate-400 block">Distance from Dhaka</span>
                  <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                    <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                    {activeHotspot.distance}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block">Travel Duration</span>
                  <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                    <Train className="w-3.5 h-3.5 text-sky-400" />
                    {activeHotspot.duration}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block">Estimated Budget</span>
                  <span className="font-bold text-amber-300 mt-0.5 block">
                    {currency === 'BDT' ? activeHotspot.budgetBDT : activeHotspot.budgetUSD}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block">Best Season</span>
                  <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    {activeHotspot.bestTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-slate-700">
              <button
                onClick={() => onSelectDestination(activeHotspot.id)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-sm group"
              >
                <span>Read Full {activeHotspot.name} Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenAiPlanner(activeHotspot.name)}
                className="w-full bg-slate-700/70 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs border border-slate-600 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Generate Custom {activeHotspot.name} Itinerary</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
