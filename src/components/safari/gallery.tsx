import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryImages } from "./data";

export function GalleryGrid({ limit }: { limit?: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;
  const selectedImage = selected === null ? undefined : images[selected];
  const move = (step: number) => setSelected((current) => current === null ? null : (current + step + images.length) % images.length);
  return <><div className="gallery-grid">{images.map((image, index) => <button key={image.alt} type="button" onClick={() => setSelected(index)} className="group overflow-hidden bg-muted text-left" aria-label={`Open image: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" width={1200} height={912} className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></button>)}</div>{selectedImage && <div className="fixed inset-0 z-50 grid place-items-center bg-lightbox p-4" role="dialog" aria-modal="true" aria-label="Safari gallery"><Button variant="ghost" size="icon" onClick={() => setSelected(null)} className="absolute right-5 top-5 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground" aria-label="Close gallery"><X /></Button><Button variant="ghost" size="icon" onClick={() => move(-1)} className="absolute left-2 top-1/2 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground md:left-8" aria-label="Previous image"><ChevronLeft /></Button><figure className="max-w-5xl"><img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[78vh] max-w-full object-contain" width={1408} height={1008} /><figcaption className="mt-4 text-center text-sm text-hero-muted">{selectedImage.alt}</figcaption></figure><Button variant="ghost" size="icon" onClick={() => move(1)} className="absolute right-2 top-1/2 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground md:right-8" aria-label="Next image"><ChevronRight /></Button></div>}</>;
}