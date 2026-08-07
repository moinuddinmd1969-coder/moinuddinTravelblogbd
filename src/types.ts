export interface Destination {
  id: string;
  name: string;
  bengaliName: string;
  slug: string;
  division: 'Chittagong' | 'Sylhet' | 'Khulna' | 'Dhaka' | 'Barisal' | 'Rajshahi' | 'Rangpur' | 'Mymensingh';
  district: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  distanceDhaka: string;
  distanceFromDhaka?: string;
  travelDuration: string;
  estimatedBudget: string;
  weatherInfo: {
    temp: string;
    condition: string;
    icon: string;
  };
  topAttractions: {
    name: string;
    description: string;
    image: string;
  }[];
  travelRoutes: {
    byAir?: string;
    byTrain?: string;
    byBus?: string;
    byLaunch?: string;
    byLocal?: string;
  };
  howToReach?: {
    byAir?: string;
    byTrain?: string;
    byBus?: string;
  };
  foodSpecialties?: string[];
  mustTryFood?: string[];
  safetyTips: string[] | string;
  rating: number;
  reviewsCount: number;
  isFeatured: boolean;
  mapCoords: {
    xPercent: number; // For interactive SVG Bangladesh Map
    yPercent: number;
    lat: number;
    lng: number;
  };
}

export interface GuideChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ItineraryPlan {
  title: string;
  summary: string;
  bestSeason: string;
  estimatedTotalBudgetBDT: string;
  dailySchedule: {
    day: number;
    theme: string;
    morning: string;
    afternoon: string;
    evening: string;
    foodMustTry: string;
  }[];
  packingChecklist: string[];
  localTransitTip: string;
}

export interface CommentItem {
  id: string;
  authorName: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
  likes: number;
}

export interface ThemeSettings {
  wpMode: 'standard' | 'elementor' | 'gutenberg' | 'schema' | 'live';
  colorScheme: 'emerald-blue' | 'sundarbans' | 'sajek-sunset' | 'bengal-emerald' | 'sundarbans-forest' | 'bay-coral';
  typography: 'plus-jakarta' | 'jakarta-playfair' | 'outfit' | 'hind-siliguri';
  sidebarLayout?: 'right' | 'left' | 'none';
  darkMode: boolean;
  fontSize?: 'normal' | 'compact' | 'spacious';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  bengaliTitle?: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  category: 'Beach & Island' | 'Hill & Cloud' | 'Forest & Wildlife' | 'Tea & River' | 'Culture & Food' | 'Travel Tips';
  publishedDate: string;
  readingTime: string;
  viewCount: number;
  likesCount: number;
  tags: string[];
  commentsCount: number;
  tableOfContents: {
    id: string;
    title: string;
  }[];
  relatedPostIds: string[];
  seoKeywords: string[];
}

export interface TravelTip {
  id: string;
  title: string;
  category: 'Permits & Hill Tracts' | 'Train & Transport' | 'Packing & Gear' | 'Local Etiquette & Food' | 'SIM & Payments';
  icon: string;
  description: string;
  keyPoints: string[];
  importance: 'Crucial' | 'Recommended' | 'Pro Tip';
}

export interface Hotel {
  id: string;
  name: string;
  destinationId: string;
  destinationName: string;
  type: 'Eco Resort' | 'Luxury Beach Resort' | 'Tea Estate Bungalow' | 'Hilltop Cloud Cottage' | 'Heritage Homestay';
  rating: number;
  reviewsCount: number;
  pricePerNightBDT: number;
  priceUSD: number;
  image: string;
  amenities: string[];
  location: string;
  badge?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  bengaliName: string;
  region: string;
  image: string;
  description: string;
  mustTrySpots: string[];
  priceRange: string;
  flavorProfile: string;
}

export interface CultureStory {
  id: string;
  title: string;
  bengaliName: string;
  season: string;
  region: string;
  image: string;
  summary: string;
  keyTradition: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  division: string;
  category: 'All' | 'Beaches & Sea' | 'Hills & Clouds' | 'Rainforest & Wildlife' | 'Tea Gardens & Rivers' | 'Heritage & Culture';
  image: string;
  photographer: string;
  caption: string;
  likes: number;
}

