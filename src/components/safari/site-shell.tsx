import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/dozzo-safari-logo.svg";
import { ArrowUpRight, Instagram, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "./data";

const nav = [
  ["Home", "/"],
  ["Safaris", "/safaris"],
  ["Zanzibar", "/zanzibar"],
  ["Destinations", "/destinations"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function Brand({ size = "default" }: { size?: "default" | "lg" }) {
  const large = size === "lg";
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Dozzo Safari home">
      <span className={`grid ${large ? "size-16" : "size-9"} place-items-center bg-primary/5`}><img src={logo} alt="" className={`${large ? "size-16" : "size-9"} object-contain`} /></span>
      <span className="leading-none">
        <span className={`block font-display ${large ? "text-2xl" : "text-lg"} font-black ${large ? "text-foreground" : "text-hero-foreground"}`}>DOZZO</span>
        <span className={`block ${large ? "text-[11px]" : "text-[9px]"} font-bold uppercase text-primary`}>Safari Tanzania</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-warm">
      <div className="site-container flex h-20 items-center justify-between">
        <Brand size="lg" />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map(([label, to]) => (
            <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="nav-link" activeProps={{ className: "nav-link-active" }}>{label}</Link>
          ))}
        </nav>
        <Button asChild size="xl" className="hidden lg:inline-flex">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Plan Your Safari <ArrowUpRight /></a>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} className="text-foreground hover:bg-foreground/5 hover:text-foreground lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border bg-warm px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {nav.map(([label, to]) => (
              <Link key={to} to={to} className="border-b border-border py-4 font-display text-xl font-bold text-foreground">{label}</Link>
            ))}
          </nav>
          <Button asChild size="xl" className="mt-5 w-full"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Plan Your Safari</a></Button>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-header text-hero-foreground">
      <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><Brand /><p className="mt-6 max-w-xs text-sm leading-7 text-hero-muted">Tanzania Safari Experiences, planned with care and rooted in the wild landscapes of our home.</p></div>
        <FooterLinks title="Navigate" links={nav.slice(0, 4)} />
        <FooterLinks title="Discover" links={[["Gallery", "/gallery"], ["Contact", "/contact"], ["Mikumi", "/destinations"], ["Serengeti", "/destinations"]]} />
        <div><p className="footer-title">Talk to Dozzo</p><a className="footer-contact" href="tel:+255713956532"><Phone /> +255 713 956 532</a><a className="footer-contact" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a><p className="footer-contact"><Instagram /> Dozzo_safari</p></div>
      </div>
      <div className="border-t border-hero-foreground/10"><div className="site-container flex flex-col gap-2 py-6 text-xs text-hero-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Dozzo Safari. Tanzania.</p><p>Travel thoughtfully. Leave only footprints.</p></div></div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return <div><p className="footer-title">{title}</p><div className="space-y-3">{links.map(([label, to]) => <Link key={label} to={to} className="block text-sm text-hero-muted transition-colors hover:text-primary">{label}</Link>)}</div></div>;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /><Button asChild size="icon" className="fixed bottom-5 right-5 z-30 size-12 rounded-full shadow-xl"><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Dozzo Safari on WhatsApp"><MessageCircle /></a></Button></>;
}