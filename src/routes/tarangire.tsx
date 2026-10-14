import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionIntro } from "@/components/safari/content";
import {
  buildPackageWhatsAppUrl,
  destinations,
  packagesList,
  whatsappNumber,
  whatsappUrl,
} from "@/components/safari/data";
import tarangireBaobabs from "@/assets/tarangire-baobabs.jpg";

const tarangireDestination = destinations.find((item) => item.slug === "tarangire")!;

const tarangirePackages = packagesList.filter(
  (item) => item.slug.includes("tarangire") || item.destination.toLowerCase().includes("tarangire"),
);

export const Route = createFileRoute("/tarangire")({
  loader: () => tarangirePackages,
  head: () => ({
    meta: [
      { title: "Tarangire National Park Safari — Dozzo Safari" },
      {
        name: "description",
        content: tarangireDestination.description,
      },
      { property: "og:title", content: "Tarangire National Park Safari — Dozzo Safari" },
      {
        property: "og:description",
        content: tarangireDestination.description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dozzosafari.com/tarangire" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TarangirePage,
});

function TarangirePage() {
  const tarangirePackages = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={tarangireDestination.region}
        title="Tarangire National Park."
        text={tarangireDestination.description}
        image={tarangireBaobabs}
      />
      <section className="section-space bg-background">
        <div className="site-container">
          <SectionIntro
            eyebrow="Baobab country"
            title="Safaris among the baobabs."
            text="Each package below is priced per person with park entry, guiding and the flights or transfers shown in its itinerary. Tell us your dates and group size on WhatsApp and we'll confirm availability and the exact total."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {tarangirePackages.map((item) => (
              <article key={item.slug} className="safari-card group">
                <Link
                  to="/safaris/$slug"
                  params={{ slug: item.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={item.image ?? ""}
                    alt={item.destination}
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-primary" />
                      {item.destination}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary" />
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  <p className="mt-5 text-xs font-semibold uppercase text-primary">
                    {item.startingPrice != null
                      ? `From $${item.startingPrice} per person`
                      : "Contact us for pricing"}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Button asChild className="flex-1">
                      <Link to="/safaris/$slug" params={{ slug: item.slug }}>
                        View Safari <ArrowRight />
                      </Link>
                    </Button>
                    <Button asChild variant="light" size="icon">
                      <a
                        href={
                          item.whatsappMessage ??
                          buildPackageWhatsAppUrl(item.name, String(item.startingPrice ?? ""))
                        }
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
            <p className="text-xs font-bold uppercase">Planning Tarangire?</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
              Tell Dozzo your Tarangire dates.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-primary-foreground/80">
              We plan the Tarangire game drives, guiding and the rest of your northern circuit
              around your travel dates. WhatsApp us a message and we'll reply with a plan, price and
              availability.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" variant="light">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp {whatsappNumber}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
