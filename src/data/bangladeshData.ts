import { Destination, Article, TravelTip, Hotel, FoodItem, CultureStory, GalleryPhoto } from '../types';

export const HERO_SLIDES = [
  {
    id: 'coxs-bazar',
    title: "Cox's Bazar",
    bengaliTitle: "কক্সবাজার — বিশ্বের দীর্ঘতম অবিচ্ছিন্ন সমুদ্র সৈকত",
    tagline: "World's Longest Natural Unbroken Sea Beach (120 km)",
    division: "Chittagong",
    badge: "Coastal Wonder",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1600&auto=format&fit=crop&q=85",
    description: "Witness the golden sunset melting into the Bay of Bengal along the 80km scenic Marine Drive, from Inani coral reefs to Himchari waterfalls.",
    weather: "27°C • Sunny Breezes",
    bestTime: "Oct – Mar",
    travelDuration: "45m Air / 7h AC Bus",
    accentColor: "from-sky-600/90 via-emerald-800/80 to-slate-950/90"
  },
  {
    id: 'sajek-valley',
    title: "Sajek Valley",
    bengaliTitle: "সাজেক ভ্যালি — মেঘের রাজ্য ও পাহাড়ের রানী",
    tagline: "The Realm of Clouds & Lush Green Hilltops",
    division: "Chittagong (Rangamati)",
    badge: "Mountain Hideaway",
    image: "https://images.unsplash.com/photo-1628178873041-0f666f7f2b84?w=1600&auto=format&fit=crop&q=85",
    description: "Perched 1,800 feet above sea level, Sajek offers a surreal experience where fluffy white clouds roll through your wooden balcony at sunrise.",
    weather: "19°C • Cool Mist",
    bestTime: "Sep – Feb",
    travelDuration: "Chander Gari from Khagrachhari",
    accentColor: "from-emerald-700/90 via-teal-900/80 to-slate-950/90"
  },
  {
    id: 'sundarbans',
    title: "The Sundarbans",
    bengaliTitle: "সুন্দরবন — বিশ্ব ঐতিহ্য রয়েল বেঙ্গল টাইগারের ম্যানগ্রোভ বন",
    tagline: "World's Largest Tidal Halophytic Mangrove Forest (UNESCO)",
    division: "Khulna",
    badge: "UNESCO Heritage",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1600&auto=format&fit=crop&q=85",
    description: "Embark on a multi-day wooden vessel expedition deep into tidal creeks where the Royal Bengal Tiger, spotted deer, and Irrawaddy dolphins roam free.",
    weather: "24°C • River Breeze",
    bestTime: "Nov – Mar",
    travelDuration: "3-Day Ship from Mongla",
    accentColor: "from-emerald-900/90 via-green-950/80 to-slate-950/90"
  },
  {
    id: 'saint-martin',
    title: "Saint Martin's Island",
    bengaliTitle: "সেন্ট মার্টিন্স দ্বীপ — প্রবাল দ্বীপ ও নারিকেল জিঞ্জিরা",
    tagline: "Bangladesh's Only Tropical Coral Island (Narikel Jinjira)",
    division: "Chittagong (Cox's Bazar)",
    badge: "Coral Paradise",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=85",
    description: "Crystal-clear turquoise waters, pristine living coral beds at Chera Dwip, sweet green coconuts, and bioluminescent night waves under starry skies.",
    weather: "26°C • Tropical Island",
    bestTime: "Nov – Feb",
    travelDuration: "2h Sea Ship from Teknaf",
    accentColor: "from-blue-600/90 via-teal-800/80 to-slate-950/90"
  },
  {
    id: 'sylhet-tea',
    title: "Sylhet & Sreemangal",
    bengaliTitle: "সিলেট ও শ্রীমঙ্গল — সবুজ চায়ের স্বর্গ ও রাতারগুল জলাবন",
    tagline: "The Tea Capital of Bengal & Ratargul Freshwater Swamp Forest",
    division: "Sylhet",
    badge: "Lush Tea Valleys",
    image: "https://images.unsplash.com/photo-1598460599557-4148e6587c6b?w=1600&auto=format&fit=crop&q=85",
    description: "Endless rolling green tea terraces, the dense canopies of Lawachara National Park, seven-layer rainbow tea, and tranquil boat rides in Ratargul.",
    weather: "22°C • Fresh Mountain Air",
    bestTime: "May – Mar",
    travelDuration: "4h Train from Dhaka",
    accentColor: "from-emerald-800/90 via-green-900/80 to-slate-950/90"
  }
];

export const FEATURED_DESTINATIONS: Destination[] = [
  {
    id: 'coxs-bazar',
    name: "Cox's Bazar",
    bengaliName: "কক্সবাজার",
    slug: "coxs-bazar-travel-guide",
    division: "Chittagong",
    district: "Cox's Bazar",
    tagline: "World's Longest Natural Sea Beach & Golden Sunset Paradise",
    heroImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1000&auto=format&fit=crop&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Stretching over 120 km along the turquoise Bay of Bengal, Cox's Bazar is Bangladesh's crown jewel of coastal tourism. Cruise down the world-famous 80km Marine Drive with crashing ocean waves on one side and green hills on the other, explore Inani's living coral reefs, and taste fresh grilled Rupchanda and lobster.",
    highlights: [
      "80km scenic Marine Drive coastal open-jeep drive",
      "Inani Beach with unique coral rock formations & red crabs",
      "Himchari Hilltop Viewpoint & freshwater mountain springs",
      "Sunset surfing at Laboni Beach & fresh seafood BBQ",
      "Moheshkhali Island speed-boat trip & Adinath Temple"
    ],
    bestTimeToVisit: "October to March (Warm sunny days, dry cool breeze)",
    distanceDhaka: "395 km from Dhaka",
    travelDuration: "45 mins by Air / 6-7 hours by AC Train/Bus",
    estimatedBudget: "৳6,500 – ৳18,000 BDT / person (3 Days)",
    weatherInfo: {
      temp: "27°C",
      condition: "Sunny & Gentle Coastal Breeze",
      icon: "Sun"
    },
    topAttractions: [
      {
        name: "Inani Coral Beach",
        description: "A serene, tranquil shore filled with natural coral stones and peaceful sunset vibes.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Marine Drive Highway",
        description: "The longest marine drive in the world, flanked by turquoise surf and rolling hills.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Himchari National Park",
        description: "Climb the hill steps for a panoramic view of the entire coastline and sea horizon.",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&auto=format&fit=crop&q=80"
      }
    ],
    travelRoutes: {
      byAir: "Daily direct flights (45 mins) from Hazrat Shahjalal International Airport (DAC) to Cox's Bazar (CXB) via Biman Bangladesh, US-Bangla, and Air Astra.",
      byTrain: "Direct brand-new modern express trains (Cox's Bazar Express / Parjotok Express) from Dhaka Kamalapur Railway Station to iconic Cox's Bazar Iconic Oyster Station (6 hours).",
      byBus: "Luxury AC Sleeper & Business Class coaches (Green Line, Desh Travels, Saintmartin Paribahan, Hanif) leaving hourly from Dhaka Sayedabad / Arambagh (7 hours)."
    },
    foodSpecialties: [
      "Fresh Rupchanda Fish Fry with mustard glaze",
      "Koral and Crab Chili BBQ at beachside shacks",
      "Traditional Loitta Fry (Bombay Duck fish)",
      "Traditional Bengali Bhorta Thali (Shutki, Kacha Kola, Aloo Bhorta)"
    ],
    safetyTips: [
      "Observe beach flag warnings (Green for safe swimming, Red for dangerous rip currents).",
      "Keep speed boat life jackets securely strapped when visiting Moheshkhali.",
      "Book tourist train tickets 10 days in advance on the Shohoz / Bangladesh Railway portal."
    ],
    rating: 4.9,
    reviewsCount: 1420,
    isFeatured: true,
    mapCoords: {
      xPercent: 78,
      yPercent: 82,
      lat: 21.4272,
      lng: 92.0058
    }
  },
  {
    id: 'sajek-valley',
    name: "Sajek Valley",
    bengaliName: "সাজেক ভ্যালি",
    slug: "sajek-valley-cloud-guide",
    division: "Chittagong",
    district: "Rangamati (Khagrachhari route)",
    tagline: "The Valley of Floating Clouds & Lush Mountain Peaks",
    heroImage: "https://images.unsplash.com/photo-1628178873041-0f666f7f2b84?w=1000&auto=format&fit=crop&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Known as the 'Roof of Rangamati', Sajek Valley sits at an altitude of 1,800 feet above sea level. It is famous for its morning sea of clouds, traditional Lushai and Tripura indigenous tribal culture, wooden cloud-view cottages, and the thrilling open-top Chander Gari jeep convoy ride from Dighinala.",
    highlights: [
      "Witnessing the 'Megh Samudra' (Sea of Clouds) from Ruilui and Konglak Para",
      "Trekking to Konglak Peak (the highest point in Sajek Valley)",
      "Traditional Bamboo Chicken (Bash Kora) and tribal herbal teas",
      "Open-hood Chander Gari mountain road safari through lush greenery",
      "Stargazing under crystal clear pollution-free night skies"
    ],
    bestTimeToVisit: "September to February (Magnificent cloud play and crisp cool nights)",
    distanceDhaka: "320 km from Dhaka (via Khagrachhari)",
    travelDuration: "6 hours to Khagrachhari + 2.5 hours Chander Gari",
    estimatedBudget: "৳5,000 – ৳14,000 BDT / person (2-3 Days)",
    weatherInfo: {
      temp: "19°C",
      condition: "Misty & Refreshing Mountain Air",
      icon: "Cloud"
    },
    topAttractions: [
      {
        name: "Konglak Peak",
        description: "The highest hill peak in Sajek offering a 360-degree panorama of Lushai hills into Mizoram.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Ruilui Para Helipad",
        description: "The social epicenter where visitors gather for morning coffee above the cloud layer.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Dighinala Hanging Bridge & Waterfalls",
        description: "En route stopovers before joining the morning army escort convoy.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=80"
      }
    ],
    travelRoutes: {
      byBus: "Overnight luxury AC bus (Saintmartin, Shyamoli, Relax) from Dhaka to Khagrachhari (6-7 hrs).",
      byLocal: "From Khagrachhari, hire a 4x4 Chander Gari (Mahindra Jeep) with licensed driver. Vehicle passes the mandatory Bangladesh Army escort at Baghaihat (Escort timings: 10:00 AM & 3:00 PM)."
    },
    foodSpecialties: [
      "Authentic Bash Kora Bamboo Chicken (slow-cooked inside hollow bamboo tubes)",
      "Pahadi Papaya salad with roasted green chilies",
      "Wild Forest Honey & Ginger Tea",
      "Traditional Tripura Tribal Duck Curry with hill herbs"
    ],
    safetyTips: [
      "Always arrive at Dighinala checkpoint before 10:00 AM or 2:30 PM to join the official escort.",
      "Teletalk, Robi, and Grameenphone have the most stable 4G network on the hilltops.",
      "Carry sufficient cash (BDT) as hilltop cottage points do not have card POS machines."
    ],
    rating: 4.95,
    reviewsCount: 980,
    isFeatured: true,
    mapCoords: {
      xPercent: 82,
      yPercent: 52,
      lat: 23.3820,
      lng: 92.2938
    }
  },
  {
    id: 'sundarbans',
    name: "The Sundarbans",
    bengaliName: "সুন্দরবন",
    slug: "sundarbans-mangrove-safari",
    division: "Khulna",
    district: "Khulna & Bagerhat",
    tagline: "World's Largest Mangrove Forest & UNESCO World Heritage Site",
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1000&auto=format&fit=crop&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A mystical wilderness spanning over 10,000 square kilometers, the Sundarbans is a UNESCO World Heritage sanctuary where mighty rivers meet the Bay of Bengal. Cruise through tranquil estuaries lined with Sundari and Golpata trees, watch spotted deer graze on sandy banks, and listen for the roar of the Royal Bengal Tiger.",
    highlights: [
      "3-Day liveaboard cabin cruise through Kotka, Kochikhali, and Harbaria",
      "Spotting Royal Bengal Tigers, Estuarine Crocodiles, and Gangetic Dolphins",
      "Climbing the Kotka Wildlife Watchtower over the vast mangrove canopy",
      "Silent country boat rowing through narrow canals (Canal Cruise)",
      "Visiting the UNESCO 60 Dome Mosque (Shat Gombuj Masjid) in Bagerhat"
    ],
    bestTimeToVisit: "November to March (Pleasant weather, tranquil tides, active wildlife)",
    distanceDhaka: "280 km from Dhaka (via Padma Bridge to Mongla Port)",
    travelDuration: "4 hours by road to Mongla + 3-Day Expedition Ship",
    estimatedBudget: "৳12,000 – ৳28,000 BDT / person (3 Days / 2 Nights All-Inclusive)",
    weatherInfo: {
      temp: "23°C",
      condition: "Pleasant & Fresh River Breeze",
      icon: "Compass"
    },
    topAttractions: [
      {
        name: "Kotka Wildlife Sanctuary",
        description: "The heart of Sundarbans with wild deer herds, tiger trail walks, and Jamtola sea beach.",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Harbaria Eco-Tourism Spot",
        description: "Wooden walkway over tidal mangroves with Royal Bengal Tiger footprints and viewing ponds.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Hiron Point (Nilkamal)",
        description: "Famous for spotting majestic Bengal monitor lizards, kingfishers, and bird sanctuaries.",
        image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&auto=format&fit=crop&q=80"
      }
    ],
    travelRoutes: {
      byBus: "Direct AC Express buses from Dhaka to Mongla / Khulna via the iconic Padma Bridge (4 hours).",
      byLaunch: "Luxury tourist expedition cruisers (The Wave, Silver Wave, MV Dinghy) embark from Mongla Port or Khulna Ghat with armed forest guards and naturalist guides."
    },
    foodSpecialties: [
      "Fresh Padma and Bay of Bengal Hilsa (Ilish) Mustard Curry",
      "Khulna's signature Chui Jhal Mutton Curry (Piper chaba pepper stalk aroma)",
      "Pure Sundarbans Wild Mangrove Honey (Moule collection)",
      "Traditional Sundarbans Crab Curry with fresh coconut milk"
    ],
    safetyTips: [
      "All forest entries require permission from the Bangladesh Forest Department and armed guard escort.",
      "Do not step off designated wooden trails or swim in river canals due to saltwater crocodiles.",
      "Wear neutral earth-toned clothing (khaki, olive green) to avoid alarming wild fauna."
    ],
    rating: 4.98,
    reviewsCount: 760,
    isFeatured: true,
    mapCoords: {
      xPercent: 38,
      yPercent: 78,
      lat: 21.9497,
      lng: 89.1833
    }
  },
  {
    id: 'saint-martin',
    name: "Saint Martin's Island",
    bengaliName: "সেন্ট মার্টিন্স দ্বীপ",
    slug: "saint-martin-coral-island-guide",
    division: "Chittagong",
    district: "Cox's Bazar (Teknaf)",
    tagline: "The Turquoise Coral Jewel of the Bay of Bengal",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Known locally as 'Narikel Jinjira' (Coconut Island), Saint Martin's is Bangladesh's only coral island. With crystal turquoise waters, soft white sands, lush coconut palms, and the detached uninhabited coral paradise of Chera Dwip, this is the ultimate island getaway.",
    highlights: [
      "Exploring Chera Dwip coral reef during low tide on a local wooden boat",
      "Scuba diving and snorkeling among tropical marine reef fishes",
      "Bioluminescent plankton glows along West Beach during new moon nights",
      "Sipping sweet, chilled local green coconut water directly from the palms",
      "Fresh Koral, Red Snapper, and Tiger Prawn seafood barbecues under the stars"
    ],
    bestTimeToVisit: "November to February (Calm blue sea and daily ship operations)",
    distanceDhaka: "450 km from Dhaka (via Teknaf / Nuniyar Chara Ghat)",
    travelDuration: "Overnight Bus to Teknaf + 2 hours Sea Ship (Keari Sindbad)",
    estimatedBudget: "৳7,000 – ৳16,000 BDT / person (2-3 Days)",
    weatherInfo: {
      temp: "26°C",
      condition: "Sunny & Gentle Ocean Breeze",
      icon: "Sun"
    },
    topAttractions: [
      {
        name: "Chera Dwip Coral Point",
        description: "The southernmost point of Bangladesh, connected by corals only visible during low tide.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "West Beach (Paschim Para)",
        description: "Famous for gentle turquoise waves, white sand, and vibrant golden sunsets.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Coconut Groves of Narikel Jinjira",
        description: "Centuries-old palm tree groves swaying in the tropical marine trade winds.",
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&auto=format&fit=crop&q=80"
      }
    ],
    travelRoutes: {
      byLaunch: "Luxury ocean vessels (Keari Sindbad, Keari Cruise & Dine, Bay One, Karnafuly Express) depart from Teknaf Ghat or Cox's Bazar Nuniyar Chara Jetty daily at 9:30 AM."
    },
    foodSpecialties: [
      "Freshly caught Koral and Chanda Fish Fry",
      "Red Coral Crab Masala Roast",
      "Saint Martin's Sweet Daab (Coconut Water)",
      "Traditional Island Shutki Curry with piping hot rice"
    ],
    safetyTips: [
      "Do not step on living corals or take shells/corals away to protect marine biodiversity.",
      "Ship tickets must be booked in advance as daily tourist quotas are strictly enforced by the government.",
      "Electricity is mainly solar and generator-based; bring a high-capacity power bank."
    ],
    rating: 4.92,
    reviewsCount: 1120,
    isFeatured: true,
    mapCoords: {
      xPercent: 84,
      yPercent: 92,
      lat: 20.6279,
      lng: 92.3218
    }
  },
  {
    id: 'sylhet-tea',
    name: "Sylhet & Sreemangal",
    bengaliName: "সিলেট ও শ্রীমঙ্গল",
    slug: "sylhet-sreemangal-tea-guide",
    division: "Sylhet",
    district: "Moulvibazar & Sylhet",
    tagline: "The Tea Capital of Bengal & Pristine Swamp Forests",
    heroImage: "https://images.unsplash.com/photo-1598460599557-4148e6587c6b?w=1000&auto=format&fit=crop&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Immerse yourself in lush, geometric rolling tea estates that carpet the hills of Sreemangal. Trek through Lawachara Rainforest to spot rare Hoolock Gibbons, take a wooden canoe through the submerged green canopy of Ratargul Freshwater Swamp Forest, and admire crystal waters at Jaflong and Lalakhal.",
    highlights: [
      "Ratargul Freshwater Swamp Forest boat cruise inside the submerged jungle",
      "Tasting the legendary 7-Color Rainbow Tea at Nilkantha Tea Cabin",
      "Lawachara National Park rainforest trek & Khasia tribal village",
      "Jaflong zero-point crystal river stone collection & Meghalaya hill vistas",
      "Bichnakandi and Lalakhal turquoise river boat rides"
    ],
    bestTimeToVisit: "June to September for vibrant green monsoon; October to March for cool weather",
    distanceDhaka: "200 km from Dhaka",
    travelDuration: "3.5 hours by Parabat Express Train / 4.5 hours by AC Bus",
    estimatedBudget: "৳4,500 – ৳12,000 BDT / person (2-3 Days)",
    weatherInfo: {
      temp: "22°C",
      condition: "Fresh Breeze & Crisp Morning Dew",
      icon: "Droplets"
    },
    topAttractions: [
      {
        name: "Ratargul Swamp Forest",
        description: "The only freshwater swamp forest in Bangladesh, often called the Amazon of Bengal.",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Sreemangal Tea Gardens",
        description: "Hundreds of rolling green tea estates like Finlay, Madhabpur Lake, and Zareen.",
        image: "https://images.unsplash.com/photo-1598460599557-4148e6587c6b?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Lawachara National Park",
        description: "Tropical semi-evergreen forest sanctuary home to the endangered Western Hoolock Gibbon.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80"
      }
    ],
    travelRoutes: {
      byTrain: "Intercity Trains (Parabat Express, Kalni Express, Jayantika Express) from Dhaka Kamalapur to Sreemangal / Sylhet (3.5 - 5 hrs).",
      byBus: "Green Line, Hanif, and Ena AC buses run every 30 minutes from Dhaka Mohakhali and Sayedabad."
    },
    foodSpecialties: [
      "Nilkantha Seven-Layer Rainbow Tea (Seven flavors in a single glass)",
      "Traditional Sylheti Shatkora Beef Curry (Wild Citrus macroptera aroma)",
      "Khasia Tribal Roasted Betel-leaf snacks",
      "Authentic Sylheti Chunga Pitha (Rice cake baked inside bamboo)"
    ],
    safetyTips: [
      "Wear leech socks when trekking inside Lawachara during monsoon season.",
      "Rent licensed local boatmen in Ratargul and wear provided life vests.",
      "Stay in certified eco-resorts inside the tea estates for maximum tranquility."
    ],
    rating: 4.96,
    reviewsCount: 1350,
    isFeatured: true,
    mapCoords: {
      xPercent: 74,
      yPercent: 34,
      lat: 24.8949,
      lng: 91.8687
    }
  },
  {
    id: 'bandarban',
    name: "Bandarban Hill Tracts",
    bengaliName: "বান্দরবান",
    slug: "bandarban-mountain-expedition",
    division: "Chittagong",
    district: "Bandarban",
    tagline: "The Realm of Mighty Mountain Peaks & Roaring Waterfalls",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Bandarban is the crown of Bangladesh's mountainous topography, featuring the highest peaks (Keokradong, Saka Haphong), the ethereal resort of Nilgiri sitting inside clouds, mysterious Boga Lake, and roaring waterfalls like Amiakhum and Nafakhum.",
    highlights: [
      "Reaching Nilgiri Resort at dawn to touch floating clouds",
      "Trekking to Keokradong Peak and staying in Marma tribal cottages",
      "Boga Lake — the mysterious volcanic freshwater lake 1,200ft high",
      "Nafakhum and Amiakhum waterfall boat expeditions",
      "Golden Temple (Buddha Dhatu Jadi) architectural majesty"
    ],
    bestTimeToVisit: "October to March for trekking; July to September for roaring waterfalls",
    distanceDhaka: "320 km from Dhaka",
    travelDuration: "7 hours by AC Bus from Dhaka",
    estimatedBudget: "৳6,000 – ৳15,000 BDT / person (3 Days)",
    weatherInfo: {
      temp: "18°C",
      condition: "Cool Mist & Clear Mountain Air",
      icon: "Cloud"
    },
    topAttractions: [
      {
        name: "Nilgiri Cloud Resort",
        description: "Known as the Darjeeling of Bangladesh, located 2,200 feet above sea level.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80"
      },
      {
        name: "Boga Lake",
        description: "A natural crater lake surrounded by lush green hills with crystal clean water.",
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&auto=format&fit=crop&q=80"
      }
    ],
    travelRoutes: {
      byBus: "Direct AC sleeper bus from Dhaka (Saintmartin, Hanif, Shyamoli) to Bandarban town (7-8 hours)."
    },
    foodSpecialties: [
      "Traditional Marma Bamboo-Shoot Duck Curry",
      "Roasted Hill Cashew Nuts",
      "Fresh Hilltop Bananas & Sweet Pineapples",
      "Pahadi wild honey tea"
    ],
    safetyTips: [
      "Register at the Army & Police checkpoints in Bandarban and Ruma Bazaar with NID/Passport copies.",
      "Hire an authorized local guide from the Bandarban Tour Guide Association for remote waterfall treks."
    ],
    rating: 4.94,
    reviewsCount: 890,
    isFeatured: true,
    mapCoords: {
      xPercent: 82,
      yPercent: 68,
      lat: 22.1953,
      lng: 92.2184
    }
  }
];

export const LATEST_ARTICLES: Article[] = [
  {
    id: 'coxs-bazar-marine-drive-guide',
    slug: 'coxs-bazar-marine-drive-guide',
    title: "The Ultimate Guide to Marine Drive, Cox's Bazar: 80km of Coastal Bliss",
    bengaliTitle: "মেরিন ড্রাইভ কক্সবাজার: সমুদ্র ও পাহাড়ের মেলবন্ধনে ৮০ কিলোমিটারের রোমাঞ্চ",
    excerpt: "From Kolatoli to Teknaf, here is how to plan the perfect open-jeep coastal road trip with hidden beaches, red crab sanctuaries, and seafood shacks.",
    coverImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Tanvir Shanto",
      role: "Lead Travel Photojournalist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      bio: "Tanvir has traversed all 64 districts of Bangladesh over the past decade, capturing the country’s wild landscapes and cultural treasures."
    },
    category: "Beach & Island",
    publishedDate: "August 2026",
    readingTime: "6 min read",
    viewCount: 14200,
    likesCount: 894,
    commentsCount: 38,
    tags: ["Cox's Bazar", "Marine Drive", "Inani", "Coastal Roadtrip", "Seafood"],
    tableOfContents: [
      { id: "sec-overview", title: "1. Why Marine Drive is World-Class" },
      { id: "sec-transport", title: "2. Renting an Open Chander Gari vs. Scooter" },
      { id: "sec-stops", title: "3. Top 4 Stops: Himchari, Inani, Teknaf, Darianagar" },
      { id: "sec-food", title: "4. Where to Eat Fresh Grilled Rupchanda" },
      { id: "sec-tips", title: "5. Best Time for Golden Sunset Photography" }
    ],
    content: `
### 1. Why Marine Drive is World-Class
The Cox's Bazar–Teknaf Marine Drive is widely recognized as one of the longest and most picturesque coastal roads on Earth. Spanning an astonishing 80 kilometers, the highway hugs the shoreline of the Bay of Bengal on your right while lush emerald green rainforest hills tower to your left.

As the salty sea spray washes over you, the road snakes past quiet fishing villages with traditional wooden *Sampan* boats, secluded sandbars untouched by tourist crowds, and expansive coral reefs.

### 2. Renting an Open Chander Gari vs. Scooter
For the ultimate experience, rent a classic open-hood Chander Gari (local open jeep) from Kolatoli Dolphin Mor. A full-day rental to Teknaf and back costs approximately **৳3,500 – ৳4,500 BDT** including fuel and driver.
If you are a solo traveler or couple, self-driving a rental scooter (approx. **৳1,000 – ৳1,200 BDT/day**) allows you the freedom to pull over whenever the waves call.

### 3. Top Stops Along the Route
- **Darianagar Caves & Ravines**: Located just 6 km south of Kolatoli, explore natural water streams cutting through sandstone hills.
- **Himchari National Park**: Climb the 200 stone steps to the hill peak pavilion for an unmatched 180-degree view of the vast sea horizon.
- **Inani Coral Beach**: Famous for its calm waters and ancient living coral rocks. During low tide, thousand of tiny red crabs carpet the sand.
- **Patuartek Beach**: Coral formations and quiet palm tree groves where you can sip fresh green coconut water for just ৳60.

### 4. Fresh Grilled Rupchanda & Seafood Delicacies
Make sure to stop at the beachside wooden shacks near Inani. Ask the local cook to prepare freshly caught **Silver Pomfret (Rupchanda)** coated in crushed mustard paste and chili, pan-fried over sizzling mustard oil, served with hot rice and dry fish (Shutki) Bhorta.

### 5. Best Time for Golden Sunset Photography
The golden hour along Marine Drive peaks between **5:00 PM and 6:15 PM**. Position yourself near Inani or Shamlapur to capture the sun sinking directly into the tranquil ocean with silhouettes of fishing boats in the foreground.
`,
    relatedPostIds: ["sajek-valley-cloud-expedition", "sundarbans-tiger-safari"],
    seoKeywords: ["Coxs Bazar travel guide", "Marine drive route", "Inani beach corals", "Bangladesh tourism", "Coxs bazar train booking"]
  },
  {
    id: 'sajek-valley-cloud-expedition',
    slug: 'sajek-valley-cloud-expedition',
    title: "Sajek Valley: A First-Timer’s Guide to the Kingdom of Clouds",
    bengaliTitle: "সাজেক ভ্রমণ গাইড: মেঘের ওপরে জীবন ও পাহাড়ি রোমাঞ্চ",
    excerpt: "Everything you need to know about army escort timings, choosing the best cloud-view resort in Ruilui Para, and trekking Konglak Peak.",
    coverImage: "https://images.unsplash.com/photo-1628178873041-0f666f7f2b84?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Nusrat Jahan",
      role: "Eco-Tourism & Culture Writer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      bio: "Nusrat specializes in sustainable travel narratives, highlighting indigenous crafts and responsible tourism across the Chittagong Hill Tracts."
    },
    category: "Hill & Cloud",
    publishedDate: "July 2026",
    readingTime: "5 min read",
    viewCount: 19800,
    likesCount: 1240,
    commentsCount: 52,
    tags: ["Sajek Valley", "Clouds", "Konglak Peak", "Bamboo Chicken", "Chander Gari"],
    tableOfContents: [
      { id: "sec-sajek-intro", title: "1. The Magic of Ruilui Para" },
      { id: "sec-escort", title: "2. Bangladesh Army Escort Timings" },
      { id: "sec-cottages", title: "3. Best Cloud-View Wooden Cottages" },
      { id: "sec-konglak", title: "4. Trekking Konglak Peak at Sunrise" },
      { id: "sec-bamboo", title: "5. Authentic Bamboo Chicken Experience" }
    ],
    content: `
### 1. The Magic of Ruilui Para
Imagine stepping out of your wooden hillside balcony at 6:00 AM to find yourself floating above a boundless ocean of pure white clouds. Sajek Valley, nestled in the Baghaichhari Upazila of Rangamati, is undoubtedly Bangladesh’s most enchanting mountain destination.

### 2. Bangladesh Army Escort Timings
To ensure absolute safety through the scenic hill roads, all civilian vehicles travel under the scheduled Bangladesh Army escort from Dighinala:
- **Morning Convoy**: 10:00 AM (Arrive at Baghaihat by 9:30 AM)
- **Afternoon Convoy**: 3:00 PM (Arrive at Baghaihat by 2:30 PM)

*Pro-Tip: Missing the convoy means waiting until the next slot, so plan your arrival in Khagrachhari early in the morning.*

### 3. Choosing the Best Cloud-View Cottages
Look for wooden eco-resorts built directly on the cliff edge along Ruilui Para and Konglak Para. Highly recommended options include **Meghkabbo**, **Sajek Classic Resort**, and **Runmoy Resort**. Ensure your room has an east-facing open balcony for the morning sunrise cloud show.

### 4. Trekking to Konglak Peak
Konglak Para is the highest settlement in Sajek Valley, inhabited primarily by the friendly Lushai indigenous community. A gentle 25-minute trek up natural stone stairs takes you to the summit, offering a jaw-dropping 360-degree panorama into the blue Mizoram mountain ranges of India.

### 5. Authentic Bamboo Chicken (Bash Kora)
Don't leave Sajek without pre-ordering traditional **Bash Kora Chicken**. Marinated farm chicken with native wild ginger, hill herbs, and green chilies is stuffed inside a freshly cut green bamboo stalk and roasted over slow wood coals for 90 minutes. The resulting smoky, succulent flavor is unforgettable.
`,
    relatedPostIds: ["coxs-bazar-marine-drive-guide", "sylhet-ratargul-tea-guide"],
    seoKeywords: ["Sajek valley resort booking", "Sajek chander gari fare", "Konglak peak trek", "Khagrachhari to sajek"]
  },
  {
    id: 'sundarbans-tiger-safari',
    slug: 'sundarbans-tiger-safari',
    title: "Deep in the Sundarbans: A 3-Day River Safari in the Realm of the Royal Bengal Tiger",
    bengaliTitle: "সুন্দরবনের গহীনে ৩ দিন: নদীপথে রয়েল বেঙ্গল টাইগারের দেশে",
    excerpt: "Cruising tidal creeks of Kotka, Harbaria, and Kochikhali aboard a boutique wooden expedition vessel with armed naturalist guides.",
    coverImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Farhan Chowdhury",
      role: "Wildlife Expedition Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      bio: "Farhan has led over 40 wildlife safaris in the Sundarbans and is a certified naturalist for the Bangladesh Forest Department."
    },
    category: "Forest & Wildlife",
    publishedDate: "June 2026",
    readingTime: "7 min read",
    viewCount: 11500,
    likesCount: 940,
    commentsCount: 29,
    tags: ["Sundarbans", "Royal Bengal Tiger", "Kotka", "Harbaria", "UNESCO Mangrove"],
    tableOfContents: [
      { id: "sec-safari-prep", title: "1. The Liveaboard Ship Experience" },
      { id: "sec-kotka-watchtower", title: "2. Kotka Sanctuary & Wild Deer Grasslands" },
      { id: "sec-creek-rowing", title: "3. Silent Silent Canal Rowing at Dawn" },
      { id: "sec-tiger-signs", title: "4. Tracking Fresh Tiger Paws & Wild Honey" }
    ],
    content: `
### 1. The Liveaboard Ship Experience
To truly understand the rhythm of the Sundarbans, you must live on the water. Touring vessels depart from Mongla Port and navigate deep into the UNESCO World Heritage sanctuary for 3 days and 2 nights.
Crews provide delicious hot meals including freshly caught Hilsa fish, Chui Jhal mutton, and hot steamed rice as you glide past impenetrable mangrove walls.

### 2. Kotka Sanctuary & Jamtola Beach
At Kotka Wildlife Sanctuary, a wooden walkway leads through dense Sundari tree forests into vast coastal meadows where hundreds of spotted deer (Chital) and wild boars graze together. Further south lies Jamtola Beach—a completely wild, untouched beach where tiger paw prints are frequently spotted in the morning sand.

### 3. Silent Canal Rowing at Dawn
Before sunrise, board a small non-motorized wooden country boat. The silence of the mist-shrouded narrow canals is broken only by the calls of the rare Masked Finfoot, White-throated Kingfisher, and the splash of river otters hunting.

### 4. Responsible Wildlife Observation
- Always maintain complete silence during forest walks.
- Armed forest guards accompany every tour group to ensure guest safety and safeguard wildlife.
- Buy certified Sundarbans Mangrove Honey harvested sustainably by local Moule communities.
`,
    relatedPostIds: ["sylhet-ratargul-tea-guide", "saint-martin-coral-island-guide"],
    seoKeywords: ["Sundarbans tour package", "Mongla to sundarbans ship", "Royal bengal tiger safari", "Kotka sanctuary"]
  },
  {
    id: 'sylhet-ratargul-tea-guide',
    slug: 'sylhet-ratargul-tea-guide',
    title: "Sylhet & Sreemangal: The Tea Trails, Ratargul Swamp Forest, and Seven-Layer Tea",
    bengaliTitle: "সিলেট ও শ্রীমঙ্গল ভ্রমণ: সাতরঙা চা, রাতারগুল জলাবন ও চা বাগানের রূপকথা",
    excerpt: "Navigate the Amazon of Bangladesh, cycle through geometric emerald tea estates, and discover the culinary secrets of Shatkora beef.",
    coverImage: "https://images.unsplash.com/photo-1598460599557-4148e6587c6b?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Farhana Kabir",
      role: "Heritage & Culinary Travel Writer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      bio: "Farhana explores regional culinary traditions and eco-friendly stays across the tea valleys of Greater Sylhet."
    },
    category: "Tea & River",
    publishedDate: "May 2026",
    readingTime: "5 min read",
    viewCount: 16400,
    likesCount: 1110,
    commentsCount: 44,
    tags: ["Sylhet", "Sreemangal", "Ratargul", "Tea Gardens", "Lawachara"],
    tableOfContents: [
      { id: "sec-tea-estates", title: "1. Cycling Through Sreemangal Tea Estates" },
      { id: "sec-ratargul-forest", title: "2. The Magic of Ratargul Swamp Forest" },
      { id: "sec-seven-tea", title: "3. The Secret Behind 7-Layer Rainbow Tea" },
      { id: "sec-shatkora", title: "4. Authentic Sylheti Shatkora Beef Feast" }
    ],
    content: `
### 1. Cycling Through Sreemangal Tea Estates
Sreemangal boasts more than 40 sprawling tea estates. Renting a bicycle in the early morning to pedal through mist-drenched green hills while tea pluckers fill their cane baskets is one of the most therapeutic experiences in South Asia.

### 2. The Magic of Ratargul Swamp Forest
Located near Gowainghat, Ratargul is Bangladesh’s only freshwater swamp forest. In the monsoon and post-monsoon months, the forest becomes completely submerged in 20–30 feet of crystal-clear water. Local boatmen guide wooden canoes beneath a dense canopy of Millettia and Barringtonia trees alive with birds.

### 3. Nilkantha Seven-Color Tea
Invented by Ramesh Ram Gour in Sreemangal, each glass displays 7 distinct colorful layers—ranging from dark robust black tea to spiced ginger and sweet milk tea—without mixing, relying on precise differences in liquid density.

### 4. Authentic Sylheti Shatkora Beef
No trip to Sylhet is complete without enjoying tender beef cooked with thick wedges of **Shatkora** (Citrus macroptera)—a wild aromatic citrus fruit native to the hills of Sylhet. Its tangy, slightly bitter citrus aroma elevates the gravy into pure culinary bliss.
`,
    relatedPostIds: ["coxs-bazar-marine-drive-guide", "sundarbans-tiger-safari"],
    seoKeywords: ["Ratargul boat rent", "Sreemangal tea resort", "Sylhet tourist spots", "Seven color tea sreemangal"]
  }
];

export const POPULAR_PLACES_BENTO = [
  {
    id: 'marine-drive',
    title: "Marine Drive Coastal Highway",
    subtitle: "Cox's Bazar",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80",
    badge: "World Record Road",
    span: "col-span-12 md:col-span-8 row-span-2",
    description: "80km uninterrupted oceanfront highway along crashing Bay of Bengal waves and jungle cliffs.",
    stats: "80 km • Open 24/7"
  },
  {
    id: 'konglak-peak',
    title: "Konglak Peak Summit",
    subtitle: "Sajek Valley",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    badge: "Top Peak 1800ft",
    span: "col-span-12 md:col-span-4 row-span-1",
    description: "Touch the morning sea of clouds from the highest point in Sajek Valley.",
    stats: "1,800 ft Elevation"
  },
  {
    id: 'ratargul-forest',
    title: "Ratargul Swamp Forest",
    subtitle: "Sylhet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80",
    badge: "Amazon of Bengal",
    span: "col-span-12 md:col-span-4 row-span-1",
    description: "Glide through submerged freshwater mangrove tunnels in a wooden canoe.",
    stats: "504 Acres Reserve"
  },
  {
    id: 'chera-dwip',
    title: "Chera Dwip Coral Reef",
    subtitle: "Saint Martin's Island",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
    badge: "Only Coral Island",
    span: "col-span-12 md:col-span-6 row-span-1",
    description: "Living corals, turquoise waters, and ancient shells on the southernmost tip of Bangladesh.",
    stats: "Low Tide Access Only"
  },
  {
    id: 'kotka-mangrove',
    title: "Kotka Wildlife Sanctuary",
    subtitle: "The Sundarbans",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
    badge: "UNESCO Sanctuary",
    span: "col-span-12 md:col-span-6 row-span-1",
    description: "Home of the Royal Bengal Tiger, spotted deer herds, and pristine Jamtola beach.",
    stats: "Tidal Mangrove Forest"
  }
];

export const TRAVEL_TIPS: TravelTip[] = [
  {
    id: 'tip-train',
    title: "How to Book Bangladesh Railway Tickets on Shohoz",
    category: "Train & Transport",
    icon: "Train",
    importance: "Crucial",
    description: "Bangladesh Railway has introduced high-speed, modern tourist trains like the Parjotok Express & Cox's Bazar Express. Tickets open 10 days in advance at 8:00 AM on the Shohoz portal / Rail Sheba App.",
    keyPoints: [
      "Create a verified Bangladesh Railway account with your NID or Passport.",
      "Snag 'Snigdha' (AC Chair) or 'AC Berth' for the most comfortable journey.",
      "Scenic routes: Dhaka to Sreemangal (tea garden hills) and Dhaka to Cox's Bazar (crossing the grand Karnaphuli and hill bridges)."
    ]
  },
  {
    id: 'tip-sajek-escort',
    title: "Sajek Valley Bangladesh Army Escort Protocol",
    category: "Permits & Hill Tracts",
    icon: "ShieldAlert",
    importance: "Crucial",
    description: "All tourist vehicles traveling from Khagrachhari / Dighinala to Sajek must join the official Bangladesh Army convoy escort for guaranteed safety and road coordination.",
    keyPoints: [
      "Morning Escort departs Dighinala at 10:00 AM sharp.",
      "Afternoon Escort departs at 3:00 PM.",
      "Carry valid NID / Passport copies for registration at Baghaihat and Sajek army entry gates."
    ]
  },
  {
    id: 'tip-sim-connectivity',
    title: "Best 4G SIM Cards & Mobile Internet for Travelers",
    category: "SIM & Payments",
    icon: "Smartphone",
    importance: "Recommended",
    description: "Pick up a local SIM card at Hazrat Shahjalal International Airport arrivals or any telecommunication kiosk with a passport copy and 2 passport photos.",
    keyPoints: [
      "Grameenphone (GP) offers the widest high-speed 4G coverage across coastal highways and remote islands.",
      "Robi & Teletalk offer strong hilltop coverage in Sajek and Bandarban.",
      "bKash & Nagad are Bangladesh's ubiquitous mobile wallets accepted everywhere from street tea stalls to luxury eco-resorts."
    ]
  },
  {
    id: 'tip-packing-gear',
    title: "Monsoon vs. Winter Packing Guide for Bangladesh",
    category: "Packing & Gear",
    icon: "Backpack",
    importance: "Recommended",
    description: "Bangladesh has distinct travel seasons: winter (November-February) is dry, cool, and crisp; monsoon (June-September) is lush, dramatic, and emerald green.",
    keyPoints: [
      "Winter gear: Light jacket, warm shawl for hilltop mornings (14°C in Sajek), polarized sunglasses for beach glare.",
      "Monsoon gear: Waterproof dry-bag for river boats, quick-dry activewear, sturdy anti-slip hiking sandals, and leech socks for rainforests.",
      "General: Odomos mosquito repellent cream, power bank (20,000mAh), and oral rehydration salts."
    ]
  }
];

export const HOTELS_DIRECTORY: Hotel[] = [
  {
    id: 'hotel-sayeman',
    name: "Sayeman Beach Resort",
    destinationId: "coxs-bazar",
    destinationName: "Cox's Bazar",
    type: "Luxury Beach Resort",
    rating: 4.9,
    reviewsCount: 1240,
    pricePerNightBDT: 12500,
    priceUSD: 105,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80",
    amenities: ["Oceanfront Balcony", "Infinity Pool", "Casablanca Seafood Grill", "Private Beach Access", "High-speed WiFi"],
    location: "Marine Drive Road, Kolatoli, Cox's Bazar",
    badge: "Top Rated Luxury"
  },
  {
    id: 'hotel-mermaid',
    name: "Mermaid Eco Resort",
    destinationId: "coxs-bazar",
    destinationName: "Cox's Bazar",
    type: "Eco Resort",
    rating: 4.8,
    reviewsCount: 890,
    pricePerNightBDT: 9500,
    priceUSD: 80,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
    amenities: ["Thatched Bamboo Cottages", "Organic Farm-to-Table Dining", "Kayak Canals", "Spa & Yoga", "Quiet Beach"],
    location: "Pechardwip, Marine Drive, Cox's Bazar",
    badge: "Eco-Friendly Paradise"
  },
  {
    id: 'hotel-meghkabbo',
    name: "Meghkabbo Wooden Cloud Cottage",
    destinationId: "sajek-valley",
    destinationName: "Sajek Valley",
    type: "Hilltop Cloud Cottage",
    rating: 4.95,
    reviewsCount: 650,
    pricePerNightBDT: 6500,
    priceUSD: 55,
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop&q=80",
    amenities: ["360° Cloud-View Balcony", "Hills View Deck", "Authentic Bamboo Chicken Pre-Order", "Solar 24/7 Power", "Campfire Pit"],
    location: "Ruilui Para, Sajek Valley, Rangamati",
    badge: "Best Cloud View"
  },
  {
    id: 'hotel-dusai',
    name: "DuSai Resort & Spa",
    destinationId: "sylhet-tea",
    destinationName: "Sreemangal & Sylhet",
    type: "Tea Estate Bungalow",
    rating: 4.92,
    reviewsCount: 920,
    pricePerNightBDT: 15500,
    priceUSD: 130,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
    amenities: ["Private Tea Garden Villas", "Infinity Hill Pool", "Luxury Hydrotherapy Spa", "Cinema Hall", "Cycling Trails"],
    location: "Sreemangal, Moulvibazar, Sylhet Division",
    badge: "5-Star Tea Sanctuary"
  }
];

export const AUTHENTIC_FOOD_TRAILS: FoodItem[] = [
  {
    id: 'food-kacchi',
    name: "Old Dhaka Shahi Kacchi Biryani",
    bengaliName: "পুরান ঢাকার শাহী কাচ্চি বিরিয়ানি",
    region: "Dhaka (Nazira Bazar & Chankharpul)",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    description: "Layered aromatic Chinigura rice, tender marinated mutton chunks slow-cooked with ghee, whole saffron potatoes, and dried alubokhara plums inside sealed copper handis.",
    mustTrySpots: ["Grand Nawab", "Haji Biryani", "Kolkata Kacchi Ghor", "Bismillah Kabab Ghor"],
    priceRange: "৳250 – ৳450 BDT / plate",
    flavorProfile: "Rich, aromatic, melt-in-the-mouth mutton with fragrant saffron notes."
  },
  {
    id: 'food-hilsa',
    name: "Padma Hilsa Fish Fry & Mustard Curry (Ilish Bhaja)",
    bengaliName: "পদ্মার ইলিশ ভাজা ও সর্ষে ইলিশ",
    region: "Padma Bridge Ghat (Mawa) & Chandpur",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80",
    description: "Freshly netted silver queen of Bengal rivers, sliced thick and pan-fried crisp with mustard oil and fried green chilies, served with smoking hot Ilish oil drizzled over steamed rice.",
    mustTrySpots: ["Mawa Ghat Project Market", "Chandpur Ilish Plaza", "Dhaka Kasturi Restaurant"],
    priceRange: "৳400 – ৳900 BDT / piece with oil & bhorta",
    flavorProfile: "Silky, rich, umami, pungent mustard aroma with golden crispy skin."
  },
  {
    id: 'food-7tea',
    name: "Nilkantha Seven-Layer Rainbow Tea",
    bengaliName: "শ্রীমঙ্গলের বিখ্যাত সাতরঙা চা",
    region: "Sreemangal (Sylhet)",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80",
    description: "A world-famous beverage invention displaying seven distinct, stratified color bands in a single transparent glass cup without mixing.",
    mustTrySpots: ["Nilkantha Tea Cabin (Ramesh Ram Gour's original stall, Sreemangal)"],
    priceRange: "৳80 – ৳120 BDT / glass",
    flavorProfile: "Sweet, gingery, spicy, creamy milk, and brisk black tea all in one sip."
  },
  {
    id: 'food-bogra-doi',
    name: "Bogra Famous Mishti Doi (Sweet Curd in Clay Pots)",
    bengaliName: "বগুড়ার ঐতিহ্যবাহী মিষ্টি দই",
    region: "Bogra (Rajshahi Division)",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    description: "Dense, creamy, caramel-hued sweet yogurt slowly reduced over wood fires and set in porous earthen terracotta pots that absorb excess whey.",
    mustTrySpots: ["Asia Sweetmeat Bogra", "Gour Gopal Doi Ghor", "Akboria Grand Hotel"],
    priceRange: "৳150 – ৳350 BDT / earthen handi",
    flavorProfile: "Rich caramelized milk sweetness with a velvet earthy clay aroma."
  }
];

export const CULTURE_STORIES: CultureStory[] = [
  {
    id: 'culture-pohela-boishakh',
    title: "Pohela Boishakh & Mongol Shobhajatra",
    bengaliName: "পহেলা বৈশাখ ও মঙ্গল শোভাযাত্রা",
    season: "April 14 (Bengali New Year)",
    region: "Nationwide (Epicenter: Dhaka Fine Arts Institute)",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&auto=format&fit=crop&q=80",
    summary: "The UNESCO-inscribed celebration of Bengali New Year with colorful giant animal masks (Owl, Royal Bengal Tiger, Elephant, Sun), vibrant red-and-white sarees, and morning feasts of Panta Ilish.",
    keyTradition: "Mongol Shobhajatra peace procession welcoming spring and joy."
  },
  {
    id: 'culture-boat-race',
    title: "Traditional River Boat Race (Nouka Baich)",
    bengaliName: "ঐতিহ্যবাহী নৌকা বাইচ",
    season: "Monsoon (August – October)",
    region: "Padma, Meghna, Buriganga, and Surma Rivers",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
    summary: "Hundreds of oarsmen in 100-foot slender wooden boats row in rhythmic synchronization to traditional Sari folk songs across expansive flooded river basins.",
    keyTradition: "Singing Baich songs to rhythmic drum beats as thousands cheer from riverbanks."
  },
  {
    id: 'culture-shakrain',
    title: "Old Dhaka Shakrain Kite & Light Festival",
    bengaliName: "পুরান ঢাকার সাকরাইন উৎসব",
    season: "Mid-January (Poush Sankranti)",
    region: "Old Dhaka Rooftops (Lalbagh, Shakhari Bazar, Sutrapur)",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80",
    summary: "Tens of thousands of vibrant paper kites battle in the afternoon sky, followed by rooftop fireworks, flame-throwers, music, and traditional winter Pitha sweets all night long.",
    keyTradition: "Kite cutting duels by day, dazzling rooftop pyrotechnics by night."
  }
];

export const PHOTO_GALLERY: GalleryPhoto[] = [
  {
    id: 'p1',
    title: "Golden Hour Over Cox's Bazar Marine Drive",
    location: "Inani Beach, Cox's Bazar",
    division: "Chittagong",
    category: "Beaches & Sea",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1000&auto=format&fit=crop&q=80",
    photographer: "Tanvir Shanto",
    caption: "Golden sunlight illuminating the 80km coastal ribbon with rolling surf on one side and green hills on the other.",
    likes: 482
  },
  {
    id: 'p2',
    title: "Sea of Clouds Rolling Over Konglak Peak",
    location: "Sajek Valley, Rangamati",
    division: "Chittagong",
    category: "Hills & Clouds",
    image: "https://images.unsplash.com/photo-1628178873041-0f666f7f2b84?w=1000&auto=format&fit=crop&q=80",
    photographer: "Nusrat Jahan",
    caption: "Waking up inside floating mist at 1,800 feet above sea level.",
    likes: 620
  },
  {
    id: 'p3',
    title: "Spotted Deer Herd in Kotka Sanctuary",
    location: "The Sundarbans Mangrove Reserve",
    division: "Khulna",
    category: "Rainforest & Wildlife",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1000&auto=format&fit=crop&q=80",
    photographer: "Farhan Chowdhury",
    caption: "Spotted deers grazing at the edge of the world's largest mangrove forest.",
    likes: 389
  },
  {
    id: 'p4',
    title: "Canoe Gliding Through Submerged Ratargul Swamp",
    location: "Gowainghat, Sylhet",
    division: "Sylhet",
    category: "Tea Gardens & Rivers",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=1000&auto=format&fit=crop&q=80",
    photographer: "Farhana Kabir",
    caption: "The tranquil emerald waterways of Bangladesh's Amazon.",
    likes: 512
  },
  {
    id: 'p5',
    title: "Turquoise Waves and Corals at Chera Dwip",
    location: "Saint Martin's Island",
    division: "Chittagong",
    category: "Beaches & Sea",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80",
    photographer: "Arifur Rahman",
    caption: "Crystal waters and coral reefs on Bangladesh's southern tip.",
    likes: 740
  },
  {
    id: 'p6',
    title: "Lush Tea Pluckers in Finlay Tea Estate",
    location: "Sreemangal, Moulvibazar",
    division: "Sylhet",
    category: "Tea Gardens & Rivers",
    image: "https://images.unsplash.com/photo-1598460599557-4148e6587c6b?w=1000&auto=format&fit=crop&q=80",
    photographer: "Tanvir Shanto",
    caption: "Two leaves and a bud: morning plucking in the tea capital of Bengal.",
    likes: 495
  },
  {
    id: 'p7',
    title: "Ahsan Manzil (Pink Palace) Heritage on Buriganga",
    location: "Old Dhaka",
    division: "Dhaka",
    category: "Heritage & Culture",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1000&auto=format&fit=crop&q=80",
    photographer: "Mahir Hasan",
    caption: "The majestic 19th-century Mughal-era palace reflecting historical architectural grandeur.",
    likes: 360
  },
  {
    id: 'p8',
    title: "Nilgiri Mountain Peak Cloud Highway",
    location: "Bandarban",
    division: "Chittagong",
    category: "Hills & Clouds",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=80",
    photographer: "Zubair Ahmed",
    caption: "Sitting 2,200 feet above sea level as the mountain clouds swirl by.",
    likes: 678
  }
];

export const BANGLADESH_DIVISIONS = [
  { id: 'chittagong', name: 'Chittagong (Chattogram)', attractions: ["Cox's Bazar", "Sajek Valley", "Saint Martin", "Bandarban", "Rangamati"], icon: 'Mountain' },
  { id: 'sylhet', name: 'Sylhet', attractions: ["Sreemangal Tea Estates", "Ratargul Swamp Forest", "Jaflong", "Lawachara Rainforest", "Bisnakandi"], icon: 'Trees' },
  { id: 'khulna', name: 'Khulna', attractions: ["The Sundarbans", "60 Dome Mosque (Bagerhat)", "Mongla Port", "Kotka Sanctuary"], icon: 'Compass' },
  { id: 'dhaka', name: 'Dhaka', attractions: ["Old Dhaka Heritage Walk", "Lalbagh Fort", "Ahsan Manzil", "Panam City Sonargaon", "Padma Bridge"], icon: 'Building2' },
  { id: 'barisal', name: 'Barisal', attractions: ["Kuakata Beach (Sunrise & Sunset)", "Floating Guava Markets", "Rocket Steamer River Ride"], icon: 'Waves' },
  { id: 'rajshahi', name: 'Rajshahi', attractions: ["Somapura Mahavihara (Paharpur UNESCO)", "Mahasthangarh", "Bogra Doi & Sweet Curd", "Padma Mango Orchards"], icon: 'Landmark' },
  { id: 'rangpur', name: 'Rangpur', attractions: ["Tajhat Palace", "Kantajew Terracotta Temple (Dinajpur)", "Ramsagar Lake"], icon: 'Crown' },
  { id: 'mymensingh', name: 'Mymensingh', attractions: ["Birishiri Shomeshwari River & White Ceramic Hills", "Garo Hill Indigenous Trails"], icon: 'Sparkles' }
];
