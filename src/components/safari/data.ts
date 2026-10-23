import mikumi from "@/assets/mikumi-national-park.jpg";
import nyerere from "@/assets/nyerere-rufiji.jpg";
import serengeti from "@/assets/serengeti-migration.jpg";
import ngorongoro from "@/assets/ngorongoro-crater.jpg";
import tarangire from "@/assets/tarangire-baobabs.jpg";
import travellers from "@/assets/safari-travellers.jpg";
import lions from "@/assets/serengeti-lions.jpg";
import rufiji from "@/assets/rufiji-sunrise.jpg";
import leopard from "@/assets/serengeti-leopard.jpg";
import flamingos from "@/assets/ngorongoro-flamingos.jpg";
import vehicle from "@/assets/mikumi-safari-vehicle.jpg";
import buffalo from "@/assets/tarangire-buffalo.jpg";
import saadaniCoast from "@/assets/saadani-coast.webp";
import zanzibarBeach from "@/assets/zanzibar-beach.webp";

export const whatsappDigits = "255713956532";
export const whatsappNumber = "+255 713 956 532";

export const emailAddress = "dozzoyassin@dozzosafari.com";
export const emailUrl = `mailto:${emailAddress}`;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage = "Hello Dozzo Safari, I'd like to plan a Tanzania safari.";
export const whatsappUrl = buildWhatsAppUrl(defaultWhatsAppMessage);

export function buildPackageWhatsAppUrl(name: string, price: string): string {
  return buildWhatsAppUrl(`Hello Dozzo Safari, I am interested in ${name} (from $${price} per person). Please send me availability and booking details.`);
}

export const destinations = [
  { slug: "mikumi", name: "Mikumi National Park", region: "Southern Tanzania", image: mikumi, description: "Open floodplains, mountain backdrops and rewarding wildlife viewing make Mikumi an excellent short safari from Dar es Salaam." },
  { slug: "nyerere", name: "Nyerere National Park", region: "Southern Tanzania", image: nyerere, description: "The Rufiji River shapes an immense wilderness of channels, lakes and woodland, known for boat safaris and varied wildlife." },
  { slug: "zanzibar", name: "Zanzibar", region: "Zanzibar Archipelago", image: zanzibarBeach, description: "White-sand beaches, historic Stone Town and spice-scented island life - the perfect finishing touch to any Tanzania safari." },
  { slug: "serengeti", name: "Serengeti National Park", region: "Northern Tanzania", image: serengeti, description: "Endless plains, resident predators and the seasonal movement of vast herds define Tanzania's most celebrated safari landscape." },
  { slug: "ngorongoro", name: "Ngorongoro", region: "Northern Tanzania", image: ngorongoro, description: "A dramatic volcanic caldera shelters a remarkable concentration of wildlife within one of Africa's most distinctive settings." },
  { slug: "tarangire", name: "Tarangire National Park", region: "Northern Tanzania", image: tarangire, description: "Ancient baobabs, elephant herds and the life-giving Tarangire River create a landscape with a character all its own." },
];

export type PackageCategory = "Day Trip" | "Multi-Day Safari" | "Fly-In Safari" | "Northern Circuit" | "Zanzibar Tour" | "Safari Flights";

export interface SafariPackage {
  slug: string;
  name: string;
  destination: string;
  duration: string;
  image: string | null;
  description: string;
  startingPrice: number | null;
  currency: "USD";
  category: PackageCategory;
  region: "Southern" | "Northern" | "Zanzibar";
  whatsappMessage: string;
  relatedSlugs: string[];
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  included: string[];
  excluded: string[];
  importantInfo: string[];
}

const dayTripIncluded = ["Return road transfers from your Zanzibar hotel or Stone Town meeting point", "Professional English-speaking safari driver-guide", "Park entry fees", "Bottled water on safari", "Safari vehicle with pop-up roof"];
const dayTripExcluded = ["International flights", "Zanzibar accommodation", "Travel insurance", "Tips for your driver-guide", "Personal items and souvenirs"];

export const packages: SafariPackage[] = [
  {
    slug: "mikumi-day",
    name: "Mikumi Safari Escape",
    destination: "Mikumi National Park",
    duration: "1 day",
    image: mikumi,
    description: "A day trip from Dar es Salaam to Mikumi's wildlife-rich Mkata floodplain, ideal for travellers with limited time.",
    startingPrice: 299,
    currency: "USD",
    category: "Day Trip",
    region: "Southern",
    whatsappMessage: buildPackageWhatsAppUrl("Mikumi Safari Escape", "299"),
    relatedSlugs: ["nyerere-river", "zanzibar-mikumi-day-safari", "mikumi-kisaki-full-day"],
    highlights: ["Open floodplains of the Mkata valley", "Elephant, giraffe, zebra and buffalo herds", "Lion prides on the floodplain", "Scenic return via the Uluguru Mountains"],
    itinerary: [
      { day: "Day 1", title: "Mikumi floodplain", description: "Depart Dar es Salaam early, game-drive the Mkata floodplain, have a picnic lunch, then return in the evening." },
    ],
    included: dayTripIncluded,
    excluded: dayTripExcluded,
    importantInfo: ["Departure 06:00 from Dar es Salaam", "Pack light: bins, camera, sunscreen", "Vehicle: 4x4 Land Cruiser or minivan"],
  },
  {
    slug: "nyerere-river",
    name: "Rufiji Wilderness",
    destination: "Nyerere National Park",
    duration: "3 days / 2 nights",
    image: nyerere,
    description: "Combine classic game drives with the extraordinary river landscapes of the Rufiji in Nyerere National Park.",
    startingPrice: 399,
    currency: "USD",
    category: "Multi-Day Safari",
    region: "Southern",
    whatsappMessage: buildPackageWhatsAppUrl("Rufiji Wilderness", "399"),
    relatedSlugs: ["mikumi-day", "zanzibar-nyerere-day-safari", "nyerere-budget-2-day"],
    highlights: ["Boat safari on the Rufiji River", "Hippos, crocs and forest birds", "Game drives on the river channels", "Remote, uncrowded wilderness"],
    itinerary: [
      { day: "Day 1", title: "Arrival and game drive", description: "Drive to Nyerere, afternoon game drive en route to your camp." },
      { day: "Day 2", title: "Rufiji boat safari", description: "Full-day on the river: channels, lakes, hippos and birdlife." },
      { day: "Day 3", title: "Morning drive and return", description: "Early morning game drive, then transfer back to Dar es Salaam." },
    ],
    included: [...dayTripIncluded, "2 nights' accommodation", "All meals on safari"],
    excluded: dayTripExcluded,
    importantInfo: ["Seasonal: boat safari depends on river levels", "Best from June to October", "Light cotton clothing recommended"],
  },
  {
    slug: "serengeti-classic",
    name: "Classic Serengeti",
    destination: "Serengeti National Park",
    duration: "4 days / 3 nights",
    image: serengeti,
    description: "An immersive journey through the Serengeti's endless plains, kopjes and remarkable wildlife.",
    startingPrice: 1199,
    currency: "USD",
    category: "Northern Circuit",
    region: "Northern",
    whatsappMessage: buildPackageWhatsAppUrl("Classic Serengeti", "1199"),
    relatedSlugs: ["crater-highlands", "tarangire-trails", "serengeti-migration-3-day"],
    highlights: ["Great Migration plains (seasonal)", "Serengeti kopjes and predator country", "Unlimited game drives", "Stunning sunsets over the plains"],
    itinerary: [
      { day: "Day 1", title: "Fly or drive to Serengeti", description: "Arrive and enjoy an afternoon game drive en route to camp." },
      { day: "Day 2", title: "Central Serengeti", description: "Full-day game drives around Seronera and the kopjes." },
      { day: "Day 3", title: "Migration routes", description: "Follow the migration on to the plains best for the season." },
      { day: "Day 4", title: "Morning drive and return", description: "Early game drive, then fly back to Arusha/Kilimanjaro." },
    ],
    included: [...dayTripIncluded, "3 nights' accommodation", "All meals", "Domestic flights (if fly-in)"],
    excluded: dayTripExcluded,
    importantInfo: ["Peak season: Juneâ€“October", "Migration timing varies annually", "Long trousers + layers for cooler mornings"],
  },
];

const zanzibarIncludedExpress = ["Return transfers / boat between Zanzibar and the mainland departure point (package specific)", "Game drives as per itinerary", "Park entry fees", "Bottled water on safari", "Professional English-speaking driver-guide"];
const zanzibarIncludedOvernight = [...zanzibarIncludedExpress, "Overnight stays as per itinerary", "Meals as per itinerary"];
const zanzibarIncludedFlyIn = ["Return internal flights (Zanzibar â†” safari park)", "Game drives as per itinerary", "Park entry fees", "Bottled water on safari", "Professional English-speaking driver-guide"];
const zanzibarExcluded = ["International flights", "Zanzibar accommodation before/after", "Travel insurance", "Tips", "Personal items and souvenirs"];

export const zanzibarPackages: SafariPackage[] = [
  {
    slug: "zanzibar-mikumi-day-safari",
    name: "Zanzibar to Mikumi Day Safari",
    destination: "Mikumi National Park",
    duration: "1 day",
    image: mikumi,
    description: "Fly from Zanzibar to Dar es Salaam)Skip safari to Mikumi's wildlife-rich floodplains, and return the same day - the classic day escape from the island.",
    startingPrice: 449,
    currency: "USD",
    category: "Fly-In Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Mikumi Day Safari", "449"),
    relatedSlugs: ["mikumi-day", "zanzibar-nyerere-day-safari", "zanzibar-saadani-day-safari"],
    highlights: ["Return fly-in transfers from Zanzibar", "Mkata floodplain game drive", "Elephants, giraffes, lions", "Back on Zanzibar the same evening"],
    itinerary: [
      { day: "Day 1", title: "Zanzibar  to  Mikumi", description: "Morning flight to Dar es Salaam, transfer to Mikumi, game drive, then return flight to Zanzibar." },
    ],
    included: zanzibarIncludedFlyIn,
    excluded: zanzibarExcluded,
    importantInfo: ["Price per person, twin share", "Departs daily", "Weather may affect flight schedule"],
  },
  {
    slug: "zanzibar-saadani-day-safari",
    name: "Zanzibar to Saadani Day Safari",
    destination: "Saadani National Park",
    duration: "1 day",
    image: saadaniCoast,
    description: "Saadani is Tanzania's only coastal national park - combining beach and bush in a single remarkable day from Zanzibar.",
    startingPrice: 399,
    currency: "USD",
    category: "Fly-In Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Saadani Day Safari", "399"),
    relatedSlugs: ["zanzibar-mikumi-day-safari", "zanzibar-nyerere-day-safari", "nyerere-river"],
    highlights: ["Tanzania's only beach-and-bush park", "Boat ride on the Wami River", "Elephants, lions and coastal species", "Beachside lunch"],
    itinerary: [
      { day: "Day 1", title: "Zanzibar  to  Saadani", description: "Early crossing to Saadani, river boat safari, game driveainer, beach lunch, then return to Zanzibar." },
    ],
    included: zanzibarIncludedFlyIn,
    excluded: zanzibarExcluded,
    importantInfo: ["Image: beach/bush composite not available yet", "Departs daily subject to tide", "Seasonal: best in dry season"],
  },
  {
    slug: "zanzibar-nyerere-day-safari",
    name: "Zanzibar to Nyerere Day Safari",
    destination: "Nyerere National Park",
    duration: "1 day",
    image: nyerere,
    description: "Fly from Zanzibar to Nyerere for a boat safari on the Rufiji and a game drive in Tanzania's largest national park.",
    startingPrice: 459,
    currency: "USD",
    category: "Fly-In Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Nyerere Day Safari", "459"),
    relatedSlugs: ["nyerere-river", "zanzibar-mikumi-day-safari", "zanzibar-nyerere-budget-safari"],
    highlights: ["Rufiji river boat safari", "Hippos, crocs and yellow-billed storks", "Nyerere's vast wilderness", "Return same evening to Zanzibar"],
    itinerary: [
      { day: "Day 1", title: "Zanzibar  to  Nyerere", description: "Morning flight, river boat safari, afternoon game drive, return flight to Zanzibar." },
    ],
    included: zanzibarIncludedFlyIn,
    excluded: zanzibarExcluded,
    importantInfo: ["Boats depend on river levels", "Departs daily", "Long day - recommend comfortable shoes"],
  },
  {
    slug: "zanzibar-mikumi-train-road-safari",
    name: "Zanzibar to Mikumi 2-Day Safari",
    destination: "Mikumi National Park",
    duration: "2 days / 1 night",
    image: mikumi,
    description: "A relaxed two-day Mikumi safari from Zanzibar with an overnight in the park - more time, deeper wildlife.",
    startingPrice: 549,
    currency: "USD",
    category: "Multi-Day Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Mikumi 2-Day Safari", "549"),
    relatedSlugs: ["mikumi-day", "zanzibar-mikumi-day-safari", "zanzibar-nyerere-budget-safari"],
    highlights: ["Two full game drives in Mikumi", "Overnight near the park", "Uluguru Mountain views", "More time for predators and plains"],
    itinerary: [
      { day: "Day 1", title: "Zanzibar  to  Mikumi", description: "Morning crossing/transfer, afternoon game drive, overnight at a Mikumi lodge." },
      { day: "Day 2", title: "Full-day game drive and return", description: "Morning and afternoon drives, then return to Zanzibar." },
    ],
    included: zanzibarIncludedOvernight,
    excluded: zanzibarExcluded,
    importantInfo: ["Overnight budget lodge or tented camp", "Departs daily", "Early start recommended"],
  },
  {
    slug: "zanzibar-nyerere-budget-safari",
    name: "Zanzibar to Nyerere 3-Day Safari",
    destination: "Nyerere National Park",
    duration: "3 days / 2 nights",
    image: nyerere,
    description: "Three affordable days in Nyerere from Zanzibar - river safaris, game drives and campfire evenings on a budget.",
    startingPrice: 749,
    currency: "USD",
    category: "Multi-Day Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Nyerere 3-Day Safari", "749"),
    relatedSlugs: ["nyerere-river", "zanzibar-nyerere-day-safari", "zanzibar-mikumi-train-road-safari"],
    highlights: ["Rufiji boat safari", "Two full days of game drives", "Budget tented accommodation", "Remote, uncrowded wilderness"],
    itinerary: [
      { day: "Day 1", title: "Transfer to Nyerere", description: "Morning transfer, afternoon game drive, camp overnight." },
      { day: "Day 2", title: "River and bush", description: "Morning boat safari on the Rufiji, afternoon game drive." },
      { day: "Day 3", title: "Return", description: "Early game drive, transfer back to Zanzibar." },
    ],
    included: zanzibarIncludedOvernight,
    excluded: zanzibarExcluded,
    importantInfo: ["Budget camp facilities", "Best Juneâ€“October", "Pack light; limited luggage space"],
  },
  {
    slug: "zanzibar-saadani-2-day-safari",
    name: "Zanzibar to Saadani 2-Day Safari",
    destination: "Saadani National Park",
    duration: "2 days / 1 night",
    image: saadaniCoast,
    description: "Two days in Saadani, Tanzania's only coastal park, where the bush meets the sea - a short, unique safari from Zanzibar.",
    startingPrice: 599,
    currency: "USD",
    category: "Multi-Day Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Saadani 2-Day Safari", "599"),
    relatedSlugs: ["zanzibar-saadani-day-safari", "zanzibar-mikumi-train-road-safari", "nyerere-river"],
    highlights: ["Beach-bush combination", "Wami River boat ride", "Overnight in a coastal lodge", "Elephants and marine birdlife"],
    itinerary: [
      { day: "Day 1", title: "To Saadani", description: "Morning crossing, river boat safari, beachside lunch, overnight at a coastal lodge." },
      { day: "Day 2", title: "Game drive and return", description: "Morning game drive, transfer back to Zanzibar." },
    ],
    included: zanzibarIncludedOvernight,
    excluded: zanzibarExcluded,
    importantInfo: ["Image: composite not available yet", "Departs by tide", "Best in dry season"],
  },
  {
    slug: "zanzibar-mikumi-udzungwa-fly-in",
    name: "Zanzibar to Mikumi & Udzungwa 3-Day Safari",
    destination: "Mikumi + Udzungwa Mountains",
    duration: "3 days / 2 nights",
    image: mikumi,
    description: "A fly-in adventure combining Mikumi's wildlife with the waterfalls and rainforest trails of the Udzungwa Mountains.",
    startingPrice: 699,
    currency: "USD",
    category: "Fly-In Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Mikumi & Udzungwa 3-Day Safari", "699"),
    relatedSlugs: ["zanzibar-mikumi-day-safari", "mikumi-day", "zanzibar-nyerere-budget-safari"],
    highlights: ["Fly-in from Zanzibar", "Mikumi game drives", "Udzungwa rainforest walks and waterfalls", "Mountain monkeys and endemic birds"],
    itinerary: [
      { day: "Day 1", title: "Fly to Mikumi", description: "Flight from Zanzibar, afternoon game drive, overnight in Mikumi." },
      { day: "Day 2", title: "Udzungwa trails", description: "Guided hike to the Sanje Waterfalls and forest trails." },
      { day: "Day 3", title: "Morning drive and return", description: "Early game drive, return flight to Zanzibar." },
    ],
    included: [...zanzibarIncludedFlyIn, "Guided Udzungwa hike", "2 nights' accommodation"],
    excluded: zanzibarExcluded,
    importantInfo: ["This package adds a trail element - please confirm your fitness level", "Best Juneâ€“October", "Bring walking shoes"],
  },
  {
    slug: "zanzibar-tarangire-ngorongoro-safari",
    name: "Zanzibar to Tarangire & Ngorongoro 2-Day Safari",
    destination: "Tarangire + Ngorongoro",
    duration: "2 days / 1 night",
    image: tarangire,
    description: "From Zanzibar to Tarangire's baobabs and Ngorongoro's crater floor - two iconic northern parks in a flying two days.",
    startingPrice: 999,
    currency: "USD",
    category: "Northern Circuit",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Tarangire & Ngorongoro 2-Day Safari", "999"),
    relatedSlugs: ["tarangire-trails", "crater-highlands", "serengeti-classic"],
    highlights: ["Tarangire's elephant herds", "Ngorongoro Crater descent", "Two parks, two nights", "Baobab landscapes"],
    itinerary: [
      { day: "Day 1", title: "Tarangire", description: "Fly to Kilimanjaro/Arusha, afternoon Tarangire game drive, overnight near Tarangire." },
      { day: "Day 2", title: "Ngorongoro", description: "Morning crater descent game drive, then return flight to Zanzibar." },
    ],
    included: [...zanzibarIncludedFlyIn, "1 night's accommodation"],
    excluded: zanzibarExcluded,
    importantInfo: ["Crater descent fee included", "Departs daily, seasonal", "Best Juneâ€“October"],
  },
  {
    slug: "zanzibar-luxury-tarangire-ngorongoro",
    name: "Zanzibar to Tarangire & Ngorongoro Luxury Safari",
    destination: "Tarangire + Ngorongoro",
    duration: "2 days / 1 night",
    image: ngorongoro,
    description: "A premium fly-in safari from Zanzibar with exclusive lodges, private guiding and prime crater views.",
    startingPrice: 1199,
    currency: "USD",
    category: "Northern Circuit",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Tarangire & Ngorongoro Luxury Safari", "1199"),
    relatedSlugs: ["serengeti-classic", "crater-highlands", "zanzibar-tarangire-ngorongoro-safari"],
    highlights: ["Private 4x4 vehicle", "Luxury lodge in the crater highlands", "Private guide", "Gourmet meals included"],
    itinerary: [
      { day: "Day 1", title: "Tarangire", description: "Private flight, Tarangire game drive, overnight at a luxury lodge." },
      { day: "Day 2", title: "Ngorongoro", description: "Private crater descent, late-afternoon return flight to Zanzibar." },
    ],
    included: [...zanzibarIncludedFlyIn, "Private vehicle and guide", "Luxury lodge", "Gourmet meals"],
    excluded: zanzibarExcluded,
    importantInfo: ["Price is indicative - please confirm with Dozzo before booking", "Minimum 2 travellers", "Departs Juneâ€“October"],
  },
  {
    slug: "zanzibar-fly-in-mikumi-safari",
    name: "Zanzibar to Mikumi Fly-In Safari",
    destination: "Mikumi National Park",
    duration: "2 days / 1 night",
    image: mikumi,
    description: "A direct fly-in from Zanzibar to Mikumi - air transfers, full game drives and an overnight escape to the floodplain.",
    startingPrice: 1099,
    currency: "USD",
    category: "Fly-In Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Mikumi Fly-In Safari", "1099"),
    relatedSlugs: ["zanzibar-mikumi-day-safari", "zanzibar-mikumi-train-road-safari", "zanzibar-tarangire-ngorongoro-safari"],
    highlights: ["Direct return flights", "Two full game drives", "Overnight at a Mikumi lodge", "Uluguru Mountain scenery"],
    itinerary: [
      { day: "Day 1", title: "Fly to Mikumi", description: "Direct flight, afternoon game drive, overnight at a lodge." },
      { day: "Day 2", title: "Mikumi game drive and return", description: "Full-day game drive, return flight to Zanzibar." },
    ],
    included: [...zanzibarIncludedFlyIn, "Overnight lodge accommodation"],
    excluded: zanzibarExcluded,
    importantInfo: ["Scheduled flights - limited seats", "Departs daily", "Confirm luggage weight limit"],
  },
  {
    slug: "zanzibar-nyerere-fly-in-safari",
    name: "Zanzibar to Nyerere Fly-In Safari",
    destination: "Nyerere National Park",
    duration: "4 days / 3 nights",
    image: nyerere,
    description: "Four days flying from Zanzibar into the vast Nyerere wilderness - river boat safaris, deep game drives and true bush nights.",
    startingPrice: 1599,
    currency: "USD",
    category: "Fly-In Safari",
    region: "Zanzibar",
    whatsappMessage: buildPackageWhatsAppUrl("Zanzibar to Nyerere Fly-In Safari", "1599"),
    relatedSlugs: ["nyerere-river", "zanzibar-nyerere-budget-safari", "serengeti-classic"],
    highlights: ["Extended Rufiji boat safari", "Deep wilderness game drives", "Three nights under canvas", "Remote, exclusive atmosphere"],
    itinerary: [
      { day: "Day 1", title: "Fly to Nyerere", description: "Flight from Zanzibar, afternoon game drive, camp overnight." },
      { day: "Day 2", title: "Rufiji wilderness", description: "Full-day boat safari and walking safari." },
      { day: "Day 3", title: "Game drives", description: "All-day game drives fishing for predators." },
      { day: "Day 4", title: "Return", description: "Early drive, return flight to Zanzibar." },
    ],
    included: [...zanzibarIncludedFlyIn, "3 nights' accommodation", "Walking safari", "All meals"],
    excluded: zanzibarExcluded,
    importantInfo: ["Price is indicative - please confirm with Dozzo", "Best Juneâ€“October", "Fitness: moderate for walking safari"],
  },
];

export const packagesList = [...packages, ...zanzibarPackages];

export const galleryImages = [
  { src: mikumi, alt: "Giraffes and zebras on the Mikumi floodplain" },
  { src: nyerere, alt: "Elephants crossing the Rufiji River in Nyerere" },
  { src: serengeti, alt: "Wildebeest herds in the Serengeti" },
  { src: ngorongoro, alt: "Zebras overlooking Ngorongoro Crater" },
  { src: tarangire, alt: "Elephants beneath Tarangire baobabs" },
  { src: travellers, alt: "Travellers watching wildlife from a safari vehicle" },
  { src: lions, alt: "Lioness and cub on a Serengeti kopje" },
  { src: rufiji, alt: "Hippos at sunrise on the Rufiji River" },
  { src: leopard, alt: "Leopard resting in a Serengeti acacia" },
  { src: flamingos, alt: "Flamingos on the Ngorongoro Crater floor" },
  { src: vehicle, alt: "Safari vehicle crossing Mikumi National Park" },
  { src: buffalo, alt: "Buffalo herd in Tarangire National Park" },
];


export interface SafariExtras {
  overview: string[];
  whatToExpect: string[];
  transport: string;
  accommodation: string;
  meals: string;
  startingPoint: string;
  whatToBring: string[];
  importantInformation: string[];
  parkInformation: string[];
  seoTitle: string;
  seoDescription: string;
  bookingMessage: string;
}

const dayTripExtrasDefaults: SafariExtras = {
  overview: [
    "Your day opens at your chosen pickup point and unfolds on Mikumi's Mkata floodplain Ã¢â‚¬â€ open grassland where elephant, giraffe and mixed herds gather against the Uluguru Mountains.",
    "Everything we show is real and route-first: this is a Mikumi day safari, with the park's name and wildlife described straight from the park itself. Nothing is invented or guaranteed beyond what Tanzania's own parks reliably deliver.",
  ],
  whatToExpect: [
    "An early 06:00 departure, timed to reach the park as the morning light opens the floodplain.",
    "A pop-up-roof 4x4 safari vehicle with a professional English-speaking driver-guide.",
    "Regular stops for photography and the quiet thrill of big game on the Mkata floodplain.",
    "A picnic lunch in the bush, then a scenic return through the Ulugurus by evening.",
  ],
  transport: "Return road transfers in a comfortable safari vehicle from your Dar es Salaam pickup point, with a professional driver-guide for the whole day.",
  accommodation: "Day safaris do not include overnight stays. For multi-day journeys we arrange lodge or tented-camp nights as shown on the package.",
  meals: "A bush picnic lunch plus bottled water is included. Breakfast and dinner on day trips are taken at your own hotel or lodge.",
  startingPoint: "Dar es Salaam (hotel pickup or agreed meeting point)",
  whatToBring: ["Comfortable closed shoes", "Sunscreen and hat", "Camera with spare batteries", "Light rain jacket", "Cash for tips in USD or TZS"],
  importantInformation: [
    "Prices are in USD and shown per person.",
    "WhatsApp us your dates and group size for availability and a confirmed total.",
    "Best wildlife months are JuneÃ¢â‚¬â€œOctober.",
  ],
  parkInformation: ["Mikumi is part of Tanzania's Southern Circuit, with the Mkata floodplain its most reliable wildlife area Ã¢â‚¬â€ resident elephant, giraffe, buffalo, zebra and lion.", "Game viewing is best early morning and late afternoon."],
  seoTitle: "",
  seoDescription: "",
  bookingMessage: "",
};

function buildExtrasDefaults(
  base: SafariExtras,
  overrides: Partial<SafariExtras>
): SafariExtras {
  return { ...base, ...overrides };
}

export const safarisExtras: Record<string, Partial<SafariExtras>> = {};

export function getSafariExtras(slug: string, fallback: SafariExtras): SafariExtras {
  const extra = safarisExtras[slug];
  return extra ? buildExtrasDefaults(fallback, extra) : fallback;
}

export function buildSafariExtrasMessage(
  fallback: SafariExtras,
  slug: string
): SafariExtras {
  return getSafariExtras(slug, fallback);
}
