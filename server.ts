import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory persistent comments storage for articles & destinations
interface CommentRecord {
  id: string;
  targetId: string;
  author: string;
  email?: string;
  content: string;
  rating: number;
  date: string;
  avatar: string;
}

const mockComments: CommentRecord[] = [
  {
    id: 'c1',
    targetId: 'coxs-bazar',
    author: 'Tanvir Ahmed',
    content: 'The 80km Marine Drive ride from Kolatoli to Teknaf at sunset is truly unforgettable! Make sure to stop at Inani Beach for red crabs and quiet coral sands.',
    rating: 5,
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'c2',
    targetId: 'sajek-valley',
    author: 'Nusrat Jahan',
    content: 'Watching the morning sea of clouds from Konglak Para helipad felt like a dream. Chander Gari ride with army escort from Dighinala was super thrilling!',
    rating: 5,
    date: '5 days ago',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'c3',
    targetId: 'sundarbans-safari',
    author: 'David Harrison',
    content: 'Incredible 3-day river safari through Kotka and Harbaria. We spotted spotted deers, saltwater crocodiles, and fresh tiger paw prints in the mud!',
    rating: 5,
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'c4',
    targetId: 'sylhet-tea-trail',
    author: 'Farhana Kabir',
    content: 'Sreemangal tea estates during monsoon and early morning Nilkantha Seven-Color Tea are a must! Don’t miss Ratargul freshwater swamp forest boat ride.',
    rating: 5,
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
  }
];

let commentsDb: CommentRecord[] = [...mockComments];

// In-memory newsletter subscribers list
let subscribers: { email: string; name?: string; preferences?: string[]; date: string }[] = [];

// Gemini Client initialization
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// API: Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), app: 'BanglaVenture Travel Blog Theme' });
});

// Direct WordPress stylesheet endpoint (/style.css)
app.get('/style.css', (req, res) => {
  const stylePath = path.join(process.cwd(), 'public', 'style.css');
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(stylePath);
});

// Direct WordPress theme.json endpoint (/theme.json)
app.get('/theme.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    $schema: "https://schemas.wp.org/trunk/theme.json",
    version: 2,
    settings: {
      appearanceTools: true,
      layout: { contentSize: "840px", wideSize: "1280px" },
      color: {
        palette: [
          { name: "Bengal Emerald", slug: "emerald-600", color: "#059669" },
          { name: "Bay Sky Blue", slug: "sky-600", color: "#0284c7" },
          { name: "Sajek Amber", slug: "amber-500", color: "#f59e0b" },
          { name: "Sundarbans Deep Green", slug: "emerald-950", color: "#064e3b" }
        ]
      }
    }
  });
});

// API: Comments GET & POST
app.get('/api/comments', (req, res) => {
  const { targetId } = req.query;
  if (targetId) {
    const filtered = commentsDb.filter((c) => c.targetId === targetId);
    return res.json({ comments: filtered });
  }
  res.json({ comments: commentsDb });
});

app.post('/api/comments', (req, res) => {
  const { targetId, author, email, content, rating } = req.body;
  if (!targetId || !author || !content) {
    return res.status(400).json({ error: 'Missing required fields (targetId, author, content)' });
  }

  const avatars = [
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80'
  ];

  const newComment: CommentRecord = {
    id: 'c_' + Date.now(),
    targetId,
    author: String(author).trim(),
    email: email ? String(email).trim() : undefined,
    content: String(content).trim(),
    rating: Number(rating) || 5,
    date: 'Just now',
    avatar: avatars[Math.floor(Math.random() * avatars.length)]
  };

  commentsDb.unshift(newComment);
  res.status(201).json({ success: true, comment: newComment, total: commentsDb.filter(c => c.targetId === targetId).length });
});

// API: Newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { email, name, preferences } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const existing = subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (!existing) {
    subscribers.push({
      email: email.toLowerCase().trim(),
      name: name || 'Explorer',
      preferences: preferences || ['Destinations', 'Discounts', 'Secret Trails'],
      date: new Date().toISOString()
    });
  }

  res.json({
    success: true,
    message: 'Welcome to the Shonar Bangla Travel Circle! Check your inbox for your 2026 Bangladesh Guidebook & Secret Trails PDF.',
    guideUrl: '#download-guide-2026',
    subscriberCount: 24500 + subscribers.length
  });
});

// API: Gemini AI Tour Itinerary Generator
app.post('/api/gemini/itinerary', async (req, res) => {
  try {
    const { destination, days, travelers, budget, travelStyle, interests } = req.body;

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback robust curated response if API key is not configured
      return res.json({
        success: true,
        itinerary: {
          title: `${days || 3}-Day Ultimate ${destination || "Cox's Bazar & Saint Martin"} Expedition`,
          overview: `An authentic, carefully paced journey through the natural wonders of ${destination || "Bangladesh"}, blending breathtaking landscapes, iconic local culinary spots (Kacchi Biryani, fresh Bay seafood, mustard Hilsa), and scenic transport routes.`,
          budgetEstimate: `৳${(days || 3) * (travelers || 2) * (budget === 'luxury' ? 8500 : budget === 'budget' ? 2800 : 4800)} BDT`,
          bestSeason: 'October to March (Pleasant, sunny & cool breezes)',
          transportGuide: 'AC Sleeper Bus from Dhaka (Green Line/Desh Travels) or Domestic Flight (Biman / US-Bangla / Air Astra) to nearest hub.',
          days: [
            {
              day: 1,
              title: 'Arrival, Check-in & Scenic Coastal / Hill Immersion',
              highlights: ['Morning check-in at eco-resort', 'Authentic Bengali lunch with 5 types of Bhorta & Rupchanda fish', 'Sunset viewpoint & evening beachwalk / hill cafe'],
              meals: 'Breakfast at roadside highway inn; Lunch at local Poushee / Niribili; Dinner BBQ by the campfire.',
              tips: 'Keep your NID/Passport handy for highway checkpoints.'
            },
            {
              day: 2,
              title: 'Signature Landscape Adventure & Photography Trail',
              highlights: ['Early sunrise golden hour session', 'Explore hidden waterfalls / coral beaches / tea gardens', 'Traditional cultural exchange with local artisans'],
              meals: 'Fresh coconut water & local street snacks; Traditional Kacchi or Hilsa Curry lunch.',
              tips: 'Carry cash (BDT) as remote ATMs in hill tracts or islands can be offline.'
            },
            {
              day: 3,
              title: 'Souvenir Hunting, Local Delicacies & Homeward Journey',
              highlights: ['Morning boat ride / jungle walk', 'Shopping for Sylhet Manipuri shawls, Cox’s Bazar dry fish & pearls, or hill honey', 'Scenic journey back with unforgettable memories'],
              meals: 'Traditional Morog Polao or Bogra Mishti Doi sweet treats on the way back.',
              tips: 'Pre-book return bus/train tickets via Shohoz to avoid last-minute rush.'
            }
          ],
          packingChecklist: [
            'Light cotton clothes & 1 light jacket/shawl for cool hill/island evenings',
            'Waterproof dry-bag for river boat rides & monsoon splashes',
            'Sunscreen, polarized sunglasses, and mosquito repellant (Odomos)',
            'Power bank & Grameenphone/Robi 4G SIM for remote hill coverage',
            'Comfortable trekking sandals with good grip'
          ]
        }
      });
    }

    const prompt = `You are a premier Bangladesh Tourism expert and author of the acclaimed "BanglaVenture Travel Guide". Create a detailed, authentic, and inspiring ${days || 3}-day travel itinerary for "${destination || "Cox's Bazar, Sundarbans, Sajek Valley, Saint Martin's Island, or Sylhet"}".
Travel details:
- Number of Travelers: ${travelers || '2 persons'}
- Budget Level: ${budget || 'Mid-range / Standard'}
- Travel Style: ${travelStyle || 'Nature, Photography & Cultural Heritage'}
- Specific Interests: ${interests || 'Scenic landscapes, authentic food, safe transport, iconic views'}

Requirements:
- Include genuine local landmarks (e.g., Marine Drive, Inani, Konglak Para, Ruilui Para, Ratargul, Lawachara, Kotka, Chera Dwip).
- Include real Bangladesh transport methods (Shohoz trains like Suborno Express, Green Line AC buses, Chander Gari hill jeeps, Sea Truck/Keari Sindbad ships, Rocket Steamers).
- Mention authentic culinary recommendations (Old Dhaka Kacchi, Sreemangal 7-layer tea, Chittagong Mezbani beef, Padma Hilsa, Fresh Coconut, Shrimp BBQ).
- Provide practical travel tips, estimated budget in Bangladeshi Taka (BDT ৳), best season, and packing checklist.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            overview: { type: Type.STRING },
            budgetEstimate: { type: Type.STRING },
            bestSeason: { type: Type.STRING },
            transportGuide: { type: Type.STRING },
            days: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.INTEGER },
                  title: { type: Type.STRING },
                  highlights: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  meals: { type: Type.STRING },
                  tips: { type: Type.STRING }
                },
                required: ['day', 'title', 'highlights', 'meals', 'tips']
              }
            },
            packingChecklist: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ['title', 'overview', 'budgetEstimate', 'bestSeason', 'transportGuide', 'days', 'packingChecklist']
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({ success: true, itinerary: parsed });
  } catch (error: any) {
    console.error('Error in itinerary generator:', error);
    res.status(500).json({ error: error.message || 'Failed to generate itinerary' });
  }
});

// API: Gemini AI Smart Guide / BanglaVenture Chat Assistant
app.post('/api/gemini/ask-guide', async (req, res) => {
  try {
    const { question, currentDestination } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required.' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        success: true,
        answer: `Greetings from Bangladesh! Regarding your question about **${currentDestination || 'traveling in Bangladesh'}**: 

1. **Best Time to Visit**: October through March brings sunny skies, cool breezes, and comfortable weather (18°C - 28°C).
2. **Transportation**: For Cox's Bazar and Sylhet, luxury AC sleeper buses (Green Line, Desh Travels) and Bangladesh Railway trains (Suborno/Parabat Express) operate daily. For Sajek Valley, take an AC bus to Khagrachhari, then rent a licensed Chander Gari with the morning army escort (10:00 AM or 3:00 PM).
3. **Food Must-Try**: Fresh Hilsha fish (Ilish), authentic Old Dhaka Kacchi Biryani, Chittagong Mezbani Beef, Sreemangal Seven-Color Tea, and fresh Bay of Bengal grilled crab!
4. **Safety & Connectivity**: Bangladesh is warm, hospitable, and friendly to travelers. Pick up a Grameenphone or Robi 4G SIM at Hazrat Shahjalal International Airport (Dhaka) for reliable high-speed data across all 64 districts.`
      });
    }

    const systemInstruction = `You are 'Shanto', the lead local travel expert and chief editor of BanglaVenture — the premier WordPress travel publication for Bangladesh Tourism.
You are deeply knowledgeable about Bangladesh's 8 divisions and 64 districts, especially:
- Cox's Bazar (World's longest unbroken natural sea beach, Inani, Marine Drive, Himchari)
- Sundarbans (UNESCO World Heritage mangrove forest, Royal Bengal Tiger, river safaris, Kotka, Harbaria)
- Sajek Valley (The Kingdom of Clouds in Rangamati/Khagrachhari, Konglak Para, Ruilui Para, Chander Gari escorts)
- Saint Martin's Island (Only coral island in Bangladesh, Chera Dwip, scuba diving, coconut trees)
- Sylhet & Sreemangal (Lush tea gardens, Ratargul freshwater swamp forest, Jaflong, Lawachara, Lalakhal)
- Bandarban (Nilgiri, Keokradong, Nafakhum waterfalls, tribal homestays)
- Kuakata (Daughter of Sea, sunrise and sunset from the same beach)
- Heritage & Food (Old Dhaka Kacchi Biryani, Somapura Mahavihara Paharpur, 60 Dome Mosque Bagerhat, Padma Hilsa fish).

Provide clear, warm, authentic, well-structured, and helpful advice formatted in clean markdown. Always include practical tips on permits, transport (Shohoz train, Green Line bus, Launch, Chander Gari), best season, and safety.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Question from traveler: "${question}" (Context / Selected Destination: "${currentDestination || 'General Bangladesh Travel'}")`,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ success: true, answer: response.text });
  } catch (error: any) {
    console.error('Error in ask-guide:', error);
    res.status(500).json({ error: error.message || 'Failed to answer question' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BanglaVenture Travel Theme Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
