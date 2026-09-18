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

export const whatsappUrl = "https://wa.me/255713956532?text=Hello%20Dozzo%20Safari%2C%20I%27d%20like%20to%20plan%20a%20Tanzania%20safari.";

export const destinations = [
  { slug: "mikumi", name: "Mikumi National Park", region: "Southern Tanzania", image: mikumi, description: "Open floodplains, mountain backdrops and rewarding wildlife viewing make Mikumi an excellent short safari from Dar es Salaam." },
  { slug: "nyerere", name: "Nyerere National Park", region: "Southern Tanzania", image: nyerere, description: "The Rufiji River shapes an immense wilderness of channels, lakes and woodland, known for boat safaris and varied wildlife." },
  { slug: "serengeti", name: "Serengeti National Park", region: "Northern Tanzania", image: serengeti, description: "Endless plains, resident predators and the seasonal movement of vast herds define Tanzania’s most celebrated safari landscape." },
  { slug: "ngorongoro", name: "Ngorongoro", region: "Northern Tanzania", image: ngorongoro, description: "A dramatic volcanic caldera shelters a remarkable concentration of wildlife within one of Africa’s most distinctive settings." },
  { slug: "tarangire", name: "Tarangire National Park", region: "Northern Tanzania", image: tarangire, description: "Ancient baobabs, elephant herds and the life-giving Tarangire River create a landscape with a character all its own." },
];

export const packages = [
  { slug: "mikumi-day", name: "Mikumi Safari Escape", destination: "Mikumi National Park", duration: "1 day", image: mikumi, description: "A focused day safari across Mikumi’s wildlife-rich Mkata floodplain, ideal for travelers with limited time." },
  { slug: "nyerere-river", name: "Rufiji Wilderness", destination: "Nyerere National Park", duration: "3 days / 2 nights", image: nyerere, description: "Combine classic game drives with the river landscapes and remote atmosphere of Southern Tanzania." },
  { slug: "serengeti-classic", name: "Classic Serengeti", destination: "Serengeti National Park", duration: "4 days / 3 nights", image: serengeti, description: "An immersive journey through wide plains, kopjes and remarkable year-round predator country." },
  { slug: "crater-highlands", name: "Crater & Highlands", destination: "Ngorongoro", duration: "2 days / 1 night", image: ngorongoro, description: "Descend into the Ngorongoro Crater and experience its extraordinary scenery and dense wildlife." },
  { slug: "tarangire-trails", name: "Tarangire & Baobabs", destination: "Tarangire National Park", duration: "2 days / 1 night", image: tarangire, description: "Follow the Tarangire River through baobab country in search of elephants and plains wildlife." },
];

export const galleryImages = [
  { src: mikumi, alt: "Giraffes and zebras on the Mikumi floodplain" },
  { src: nyerere, alt: "Elephants crossing the Rufiji River in Nyerere" },
  { src: serengeti, alt: "Wildebeest herds in the Serengeti" },
  { src: ngorongoro, alt: "Zebras overlooking Ngorongoro Crater" },
  { src: tarangire, alt: "Elephants beneath Tarangire baobabs" },
  { src: travellers, alt: "Travelers watching lions from a safari vehicle" },
  { src: lions, alt: "Lioness and cub on a Serengeti kopje" },
  { src: rufiji, alt: "Hippos at sunrise on the Rufiji River" },
  { src: leopard, alt: "Leopard resting in a Serengeti acacia" },
  { src: flamingos, alt: "Flamingos on the Ngorongoro Crater floor" },
  { src: vehicle, alt: "Safari vehicle crossing Mikumi National Park" },
  { src: buffalo, alt: "Buffalo herd in Tarangire National Park" },
];
