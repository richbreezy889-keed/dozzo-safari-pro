import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, Info, MapPin, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packagesList, whatsappUrl } from "@/components/safari/data";

export const Route = createFileRoute("/safaris/$slug")({
  loader: ({ params }) => {
    const safari = packagesList.find((item) => item.slug === params.slug);
    if (!safari) throw notFound();
    return safari;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} — Dozzo Safari` : "Safari Not Found — Dozzo Safari" },
      { name: "description", content: loaderData?.description ?? "Explore Tanzania safaris with Dozzo Safari." },
      { property: "og:title", content: loaderData ? `${loaderData.name} — Dozzo Safari` : "Tanzania Safaris — Dozzo Safari" },
      { property: "og:description", content: loaderData?.description ?? "Explore Tanzania safaris with Dozzo Safari." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SafariDetail,
});

function SafariDetail() {
  const safari = Route.useLoaderData();
  const related = safari.relatedSlugs
    .map((slug) => packagesList.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const ctaHref = safari.whatsappMessage || whatsappUrl;
  const ctaLabel = "WhatsApp Dozzo";

  return (
    <>
      <section className="relative isolate min-h-[62vh] bg-header">
        <img
          src={safari.image ?? ""}
          alt={safari.destination}
          className="absolute inset-0 size-full object-cover"
          width={1408}
          height={1008}
        />
        <div className="absolute inset-0 bg-hero-shade" />
        <div className="site-container relative flex min-h-[62vh] items-end pb-16 pt-28">
          <div>
            <Link
              to="/safaris"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-hero-muted hover:text-hero-foreground"
            >
              <ArrowLeft className="size-4" />
              All safaris
            </Link>
            <h1 className="page-title text-hero-foreground">{safari.name}</h1>
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-hero-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {safari.destination}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                {safari.duration}
              </span>
            </div>
            <p className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-bold uppercase text-primary-foreground">
              {safari.startingPrice != null ? `From $${safari.startingPrice} per person` : "Contact us for pricing"}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-[1.5fr_0.75fr]">
          <div className="space-y-16">
            <div>
              <p className="eyebrow">
                <span />
                The journey
              </p>
              <h2 className="section-title mt-5">A closer look at {safari.destination}.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">
                {safari.description} Your final route, accommodation and timing will be planned around your travel dates
                and preferences.
              </p>
            </div>

            <section>
              <p className="eyebrow">
                <span />
                Highlights
              </p>
              <h2 className="section-title mt-5">What you'll love.</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {safari.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 text-sm leading-6 text-foreground"
                  >
                    <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="eyebrow">
                <span />
                What to expect
              </p>
              <h2 className="section-title mt-5">Your journey, day by day.</h2>
              <ol className="mt-8 space-y-6">
                {safari.itinerary.map((stop) => (
                  <li key={stop.day} className="relative border-l-2 border-primary/25 pl-7">
                    <span className="absolute -left-[7px] top-1 size-3 rounded-full bg-primary" />
                    <p className="text-xs font-bold uppercase text-primary">{stop.day}</p>
                    <h3 className="mt-1 text-base font-semibold text-foreground">{stop.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{stop.description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card p-7">
                <p className="text-xs font-bold uppercase text-primary">Included</p>
                <ul className="mt-5 space-y-3">
                  {safari.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card p-7">
                <p className="text-xs font-bold uppercase text-muted-foreground">Not included</p>
                <ul className="mt-5 space-y-3">
                  {safari.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {safari.importantInfo.length > 0 && (
              <section>
                <p className="eyebrow">
                  <span />
                  Important information
                </p>
                <h2 className="section-title mt-5">Good to know before you book.</h2>
                <ul className="mt-8 space-y-3">
                  {safari.importantInfo.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl bg-warm p-4 text-sm leading-6 text-foreground">
                      <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <div className="border-t-2 border-primary bg-warm p-7">
              <p className="text-xs font-bold uppercase text-primary">Plan this safari</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Tell us your dates and group size for a personalised itinerary and confirmed price.
              </p>
              <Button asChild size="xl" className="mt-6 w-full">
                <a href={ctaHref} target="_blank" rel="noreferrer">
                  <MessageCircle />
                  {ctaLabel}
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-space bg-muted/40">
          <div className="site-container">
            <p className="eyebrow">
              <span />
              Keep exploring
            </p>
            <h2 className="section-title mt-5">You might also love these safaris.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="safari-card group">
                  <Link to="/safaris/$slug" params={{ slug: item.slug }} className="block overflow-hidden">
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
                    <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <Button asChild size="sm" className="flex-1">
                        <Link to="/safaris/$slug" params={{ slug: item.slug }}>
                          View safari
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
