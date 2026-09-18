import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { destinations, packages, whatsappUrl } from "./data";

export function Eyebrow({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <p className={`eyebrow ${inverse ? "text-primary" : "text-primary"}`}><span />{children}</p>;
}

export function SectionIntro({ eyebrow, title, text, inverse = false }: { eyebrow: string; title: string; text?: string; inverse?: boolean }) {
  return <div className="max-w-3xl"><Eyebrow inverse={inverse}>{eyebrow}</Eyebrow><h2 className={`section-title mt-5 ${inverse ? "text-hero-foreground" : "text-foreground"}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl text-base leading-8 ${inverse ? "text-hero-muted" : "text-muted-foreground"}`}>{text}</p>}</div>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return <section className="relative isolate min-h-[54vh] overflow-hidden bg-header"><img src={image} alt="" className="absolute inset-0 size-full object-cover" width={1920} height={1080} /><div className="absolute inset-0 bg-hero-shade" /><div className="site-container relative flex min-h-[54vh] items-end pb-16 pt-28 md:pb-20"><div className="max-w-3xl"><Eyebrow inverse>{eyebrow}</Eyebrow><h1 className="page-title mt-5 text-hero-foreground">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-hero-muted md:text-lg">{text}</p></div></div></section>;
}

export function SafariGrid({ limit }: { limit?: number }) {
  const items = limit ? packages.slice(0, limit) : packages;
  return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{items.map((item) => <article key={item.slug} className="safari-card group"><Link to="/safaris/$slug" params={{ slug: item.slug }} className="block overflow-hidden"><img src={item.image} alt={item.destination} loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></Link><div className="p-6"><div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase text-muted-foreground"><span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-primary" />{item.destination}</span><span className="inline-flex items-center gap-1.5"><Clock className="size-3.5 text-primary" />{item.duration}</span></div><h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">{item.name}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p><p className="mt-5 text-xs font-semibold uppercase text-primary">Price on request</p><div className="mt-6 flex items-center gap-3"><Button asChild className="flex-1"><Link to="/safaris/$slug" params={{ slug: item.slug }}>View Safari <ArrowRight /></Link></Button><Button asChild variant="light" size="icon"><a href={`${whatsappUrl}%20I%27m%20interested%20in%20${encodeURIComponent(item.name)}.`} target="_blank" rel="noreferrer" aria-label={`WhatsApp about ${item.name}`}><MessageCircle /></a></Button></div></div></article>)}</div>;
}

export function DestinationGrid() {
  return <div className="destination-grid">{destinations.map((item, index) => <article key={item.slug} className={`destination-card group ${index === 0 ? "md:col-span-2" : ""}`}><img src={item.image} alt={item.name} loading="lazy" width={1408} height={1008} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-image-shade" /><div className="relative flex h-full flex-col justify-end p-6 md:p-8"><p className="text-xs font-bold uppercase text-primary">{item.region}</p><h3 className="mt-2 font-display text-2xl font-extrabold text-hero-foreground md:text-3xl">{item.name}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-hero-muted">{item.description}</p><Button asChild variant="glass" className="mt-5 w-fit"><Link to="/destinations">Explore <ArrowRight /></Link></Button></div></article>)}</div>;
}