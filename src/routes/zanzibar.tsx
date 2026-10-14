import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionIntro } from "@/components/safari/content";
import { buildPackageWhatsAppUrl, whatsappNumber, whatsappUrl } from "@/components/safari/data";
import { zanzibarPackages } from "@/components/safari/data";
import zanzibarTurquoiseSea from "@/assets/zanzibar-turquoise-sea.webp";

export const Route = createFileRoute("/zanzibar")({
  loader: () => zanzibarPackages,
  head: () => ({
    meta: [
      { title: "Zanzibar Safari Tours — Dozzo Safari" },
      { name: "description", content: "Combine your Zanzibar holiday with Tanzania's wild parks: day safaris, 2-4 day fly-in and overland adventures from the island — from $399 per person." },
      { property: "og:title", content: "Zanzibar Safari Tours — Dozzo Safari" },
      { property: "og:description", content: "Beach plus bush: a safari from Zanzibar into Mikumi, Nyerere, Saadani, Tarangire and the Ngorongoro Crater." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dozzosafari.com/zanzibar" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ZanzibarPage,
});

function ZanzibarPage() {
  const zanzibarPackages = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Zanzibar departures"
        title="From the island. Into the wild."
        text="Your Zanzibar holiday can meet Tanzania's national parks. Dozzo plans beach-plus-bush journeys that leave from the island — by road, by sea or by air — with confirmed, per-person pricing."
        image={zanzibarTurquoiseSea}
      />
      <section className="section-space bg-background">
        <div className="site-container">
          <SectionIntro
            eyebrow="Fly-in · Overland · Multi-day"
            title="Safaris that start in Zanzibar."
            text="Each package below is priced per person from its destination park, with park entry, transfers and guiding included. Tell us your dates and group size on WhatsApp and we'll confirm availability and the exact total."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {zanzibarPackages.map((item) => (
              <article key={item.slug} className="safari-card group">
                <Link
                  to="/safaris/$slug"
                  params={{ slug: item.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.destination}
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-primary" />{item.destination}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5 text-primary" />{item.duration}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  <p className="mt-5 text-xs font-semibold uppercase text-primary">
                    {item.startingPrice != null ? `From $${item.startingPrice} per person` : "Contact us for pricing"}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Button asChild className="flex-1">
                      <Link to="/safaris/$slug" params={{ slug: item.slug }}>View Safari <ArrowRight /></Link>
                    </Button>
                    <Button asChild variant="light" size="icon">
                      <a
                        href={item.whatsappMessage ?? buildPackageWhatsAppUrl(item.name, String(item.startingPrice ?? ""))}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`WhatsApp about ${item.name}`}
                      >
                        <MessageCircle />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase">Prefer to start from your beach resort?</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">Tell Dozzo your Zanzibar dates.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-primary-foreground/80">
              We handle the mainland transfers and flights so you only pack once. WhatsApp us a message and we'll reply with a plan, price and availability.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" variant="light">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp {whatsappNumber}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
