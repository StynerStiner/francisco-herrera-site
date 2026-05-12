// =============================================================================
// Homepage (/) — Francisco Herrera site
//
// Design tokens consumed (all defined in app/globals.css :root / @theme):
//   Background rotation:
//     --color-bg          #0f0f0f   near-black base
//     --color-bg-warm     #2a2318   warm tobacco — secondary bands
//     --color-bg-deeper   #1f1b10   deeper tobacco — anchor moments
//   Text:
//     --color-fg          #ebe4d6   warm off-white (body — passes AA on tobacco)
//     --color-accent-brand #e2a53f  primary gold (headings / accents / links)
//     --color-muted-brand #7e7e7e   muted gray (eyebrows, secondary chrome)
//     --color-border-brand pale-gold @ 20% — site-wide hairline
//   Layout:
//     --container-content 1230px    container max-width
//   Type:
//     --font-heading  Playfair Display (editorial serif — section heads)
//     --font-body     Lora (humanist serif — paragraphs, pull-quotes italic)
//     --font-ui       Manrope (UI chrome, eyebrows, button labels)
//     --font-signature Silently script (atmospheric — used sparingly)
//   Radius is 0 across the board (--radius: 0px). No image, card, or button
//   rounds. Hairlines are 1px borders using --color-border-brand.
//
// Gold "CANTO" — the hero word uses the .text-gold-3d utility (defined in
// globals.css around line 224) which clips a three-tone gradient to the
// glyphs and stacks drop-shadows for a chiseled bevel. The utility's own
// comment requires a heavy weight, so we pair it with Playfair Display @
// font-black (weight 900). The PDR also offered Silently as an option, but
// Silently's thin script strokes don't pick up the bevel shadows — Playfair
// Black holds them properly. Documented per PDR Section 3b.
// =============================================================================

import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { pastEvents } from "@/lib/content/shows";

// ---------------------------------------------------------------------------
// Data — page-specific, small, kept inline. Lifted out only if a future page
// needs the same shape.
// ---------------------------------------------------------------------------

const featuredAlbums = [
  {
    title: "Honor Migrante",
    year: "2025",
    image: "/images/albums/Honor-Migrante.png",
    href: "/music",
    alt: { en: "Honor Migrante album cover", es: "Portada del álbum Honor Migrante" },
  },
  {
    title: "Fuerza de la Raíz",
    year: "2019",
    image: "/images/albums/Fuerza-de-la-Raíz.png",
    href: "/music",
    alt: { en: "Fuerza de la Raíz album cover", es: "Portada del álbum Fuerza de la Raíz" },
  },
  {
    title: "Posada Sin Fronteras",
    year: "2014",
    image: "/images/albums/Posada-Sin-Fronteras.png",
    href: "/music",
    alt: { en: "Posada Sin Fronteras album cover", es: "Portada del álbum Posada Sin Fronteras" },
  },
] as const;

const ctaCards = [
  {
    href: "/booking",
    en: { eyebrow: "Booking", title: "Book Francisco", body: "Festivals, concerts, services, schools." },
    es: { eyebrow: "Contrátalo", title: "Reserva a Francisco", body: "Festivales, conciertos, servicios, escuelas." },
  },
  {
    href: "/store",
    en: { eyebrow: "Store", title: "CDs & Downloads", body: "Honor Migrante, Fuerza de la Raíz, and more." },
    es: { eyebrow: "Tienda", title: "CDs y descargas", body: "Honor Migrante, Fuerza de la Raíz, y más." },
  },
  {
    href: "/epk",
    en: { eyebrow: "Press", title: "EPK & media kit", body: "Bio, photos, riders, contact." },
    es: { eyebrow: "Prensa", title: "EPK y kit de medios", body: "Biografía, fotos, riders, contacto." },
  },
] as const;

// Pull the 3 most recent events for the homepage preview. The data is
// already sorted newest → oldest in lib/content/shows.ts.
const upcomingShows = pastEvents.slice(0, 3);

// Bilingual date formatters — locale-aware, no extra deps.
function formatDate(iso: string, locale: "en" | "es") {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-MX", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <HeroSection />
        <IntroSection />
        <FeaturedMusicSection />
        <UpcomingShowsSection />
        <CtaStripSection />
      </main>
      <Footer lang="en" />
    </>
  );
}

// ---------------------------------------------------------------------------
// (b) HERO — full-bleed photo, gold CANTO word, bilingual overlay copy.
// 90vh desktop, 70vh mobile. No blob masks. next/image with `fill` + priority
// so the LCP element loads first.
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section
      aria-label="Francisco Herrera — Canto, comunidad, presencia"
      className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-[var(--color-bg)] md:h-[90vh]"
    >
      <Image
        src="/images/photos/francisco-portrait-guitar.webp"
        alt="Francisco Herrera with his guitar"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center motion-safe:animate-[hero-fade_700ms_ease-out_both]"
      />
      {/* Vignette + bottom-anchored gradient so the overlay copy stays
          legible against any focal point of the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_55%,transparent_0%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0.85)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/35 to-transparent"
      />

      {/* Overlay content — eyebrow + CANTO + bilingual tagline */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-12 text-center md:pb-20">
        <p className="font-ui text-xs uppercase tracking-[0.32em] text-[var(--color-accent-brand)] md:text-sm">
          Francisco J. Herrera
        </p>
        <h1 className="text-gold-3d font-heading font-black leading-none mt-3 text-[clamp(4rem,14vw,11rem)] tracking-[0.04em]">
          CANTO
        </h1>
        <p
          className="font-body italic text-[var(--color-fg)] mt-4 max-w-[42rem] text-base leading-relaxed md:text-lg"
        >
          <span lang="es">Canto, comunidad, presencia.</span>
          <span aria-hidden="true" className="mx-2 text-[var(--color-accent-brand)]">/</span>
          <span lang="en">Song, community, presence.</span>
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// (c) INTRO / BRIDGE — 2-col on desktop EN | ES, stacked on mobile.
// Pull-quote in Lora italic spans both columns below.
// ---------------------------------------------------------------------------

function IntroSection() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="section-atmospheric bg-[var(--color-bg-warm)] border-t border-[var(--color-border-brand)]"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-6 py-20 md:py-28">
        <p className="font-ui text-xs uppercase tracking-[0.28em] text-[var(--color-accent-brand)] text-center">
          <span lang="en">Songs from the borderland</span>
          <span aria-hidden="true" className="mx-2 opacity-50">/</span>
          <span lang="es">Canciones desde la frontera</span>
        </p>
        <h2
          id="intro-heading"
          className="sr-only"
        >
          About Francisco Herrera
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div lang="en" className="font-body text-[var(--color-fg)]">
            <p className="text-lg leading-relaxed md:text-xl">
              For four decades, Francisco Herrera has carried songs through churches and plazas,
              schools and picket lines — wherever people are organizing, having fun, making a
              difference.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-fg)]/85">
              Rooted in Chicano soul and liberation theology, his music is a living archive of
              migrant dignity, border life, and the slow work of building a more just world.
            </p>
          </div>
          <div lang="es" className="font-body text-[var(--color-fg)]">
            <p className="text-lg leading-relaxed md:text-xl">
              Por cuatro décadas, Francisco Herrera ha llevado sus canciones a iglesias y plazas,
              escuelas y líneas de piquete — dondequiera que la gente se esté organizando,
              divirtiéndose, haciendo la diferencia.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-fg)]/85">
              Con raíces en el alma chicana y la teología de la liberación, su música es un archivo
              vivo de la dignidad migrante, la vida en la frontera, y el trabajo paciente de
              construir un mundo más justo.
            </p>
          </div>
        </div>

        <figure className="mt-14 border-t border-[var(--color-border-brand)] pt-10 text-center md:mt-20 md:pt-14">
          <blockquote className="font-body italic text-[var(--color-fg)] text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.35]">
            <span lang="en">&ldquo;Music is public art.&rdquo;</span>
            <span aria-hidden="true" className="mx-3 text-[var(--color-accent-brand)]">/</span>
            <span lang="es">&ldquo;La música es arte público.&rdquo;</span>
          </blockquote>
          <figcaption className="mt-4 font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-muted-brand)]">
            Francisco Herrera
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// (d) FEATURED MUSIC — 3 album cards. Square covers, no radius, gold link.
// 3-col desktop, 1-col mobile. Gold hairline divider above the section.
// ---------------------------------------------------------------------------

function FeaturedMusicSection() {
  return (
    <section
      aria-labelledby="music-heading"
      className="section-atmospheric bg-[var(--color-bg-deeper)] border-t border-[var(--color-border-brand)]"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-6 py-20 md:py-28">
        <header className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.28em] text-[var(--color-accent-brand)]">
              <span lang="en">Featured music</span>
              <span aria-hidden="true" className="mx-2 opacity-50">/</span>
              <span lang="es">Música destacada</span>
            </p>
            <h2 id="music-heading" className="font-heading text-3xl text-[var(--color-fg)] md:text-4xl mt-3">
              <span lang="en">Songs of the journey</span>
              <span aria-hidden="true" className="mx-2 text-[var(--color-accent-brand)]">/</span>
              <span lang="es">Cantos del camino</span>
            </h2>
          </div>
          <NextLink
            href="/music"
            className="font-ui text-sm uppercase tracking-[0.22em] text-[var(--color-accent-brand)] hover:underline self-start md:self-auto"
          >
            <span lang="en">All music</span>
            <span aria-hidden="true" className="mx-1">/</span>
            <span lang="es">Toda la música</span>
            <span aria-hidden="true"> →</span>
          </NextLink>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {featuredAlbums.map((album) => (
            <li key={album.title} className="group">
              <NextLink href={album.href} className="block">
                <div className="relative aspect-square w-full overflow-hidden bg-black border border-[var(--color-border-brand)]">
                  <Image
                    src={album.image}
                    alt={album.alt.en}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-heading text-xl text-[var(--color-fg)] md:text-2xl">
                    {album.title}
                  </h3>
                  <span className="font-ui text-xs tracking-[0.22em] text-[var(--color-muted-brand)]">
                    {album.year}
                  </span>
                </div>
                <span className="mt-2 inline-flex items-center gap-1.5 font-ui text-sm uppercase tracking-[0.2em] text-[var(--color-accent-brand)] group-hover:underline">
                  <span lang="en">Listen</span>
                  <span aria-hidden="true">/</span>
                  <span lang="es">Escuchar</span>
                  <span aria-hidden="true">→</span>
                </span>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// (e) UPCOMING SHOWS — 3 most recent. Date in gold, venue + city in fg,
// "All shows / Todos los conciertos →" link to /shows.
// ---------------------------------------------------------------------------

function UpcomingShowsSection() {
  return (
    <section
      aria-labelledby="shows-heading"
      className="section-atmospheric bg-[var(--color-bg-warm)] border-t border-[var(--color-border-brand)]"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-6 py-20 md:py-28">
        <header className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.28em] text-[var(--color-accent-brand)]">
              <span lang="en">Live</span>
              <span aria-hidden="true" className="mx-2 opacity-50">/</span>
              <span lang="es">En vivo</span>
            </p>
            <h2 id="shows-heading" className="font-heading text-3xl text-[var(--color-fg)] md:text-4xl mt-3">
              <span lang="en">Shows</span>
              <span aria-hidden="true" className="mx-2 text-[var(--color-accent-brand)]">/</span>
              <span lang="es">Presentaciones</span>
            </h2>
          </div>
          <NextLink
            href="/shows"
            className="font-ui text-sm uppercase tracking-[0.22em] text-[var(--color-accent-brand)] hover:underline"
          >
            <span lang="en">All shows</span>
            <span aria-hidden="true" className="mx-1">/</span>
            <span lang="es">Todos los conciertos</span>
            <span aria-hidden="true"> →</span>
          </NextLink>
        </header>

        <ul className="mt-10 divide-y divide-[var(--color-border-brand)] border-y border-[var(--color-border-brand)]">
          {upcomingShows.map((show) => (
            <li key={show.id} className="group">
              <NextLink
                href={show.ticketUrl ?? "/shows"}
                {...(show.ticketUrl ? { target: "_blank", rel: "noreferrer" } : {})}
                className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-8 md:py-7"
              >
                <div className="font-ui text-sm uppercase tracking-[0.22em] text-[var(--color-accent-brand)]">
                  <span lang="en">{formatDate(show.date, "en")}</span>
                  <span aria-hidden="true" className="mx-2 opacity-40">/</span>
                  <span lang="es">{formatDate(show.date, "es")}</span>
                </div>
                <div>
                  <p className="font-heading text-lg text-[var(--color-fg)] md:text-xl">
                    {show.venue ?? show.title.en}
                  </p>
                  {show.address ? (
                    <p className="mt-1 font-body text-sm text-[var(--color-fg)]/75">{show.address}</p>
                  ) : null}
                </div>
                <span className="inline-flex items-center gap-1.5 justify-self-start font-ui text-xs uppercase tracking-[0.22em] text-[var(--color-fg)]/80 group-hover:text-[var(--color-accent-brand)] md:justify-self-end">
                  <span lang="en">{show.ticketUrl ? "Tickets" : "Details"}</span>
                  <span aria-hidden="true">/</span>
                  <span lang="es">{show.ticketUrl ? "Boletos" : "Detalles"}</span>
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </span>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// (f) CTA STRIP — 3 horizontal cards (Booking, Store, EPK). Gold hairlines,
// arrow shifts right on hover.
// ---------------------------------------------------------------------------

function CtaStripSection() {
  return (
    <section
      aria-label="Next steps"
      className="section-atmospheric bg-[var(--color-bg)] border-t border-[var(--color-border-brand)]"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-6 py-20 md:py-24">
        <ul className="grid grid-cols-1 divide-y divide-[var(--color-border-brand)] border-y border-[var(--color-border-brand)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {ctaCards.map((cta) => (
            <li key={cta.href}>
              <NextLink
                href={cta.href}
                className="group flex h-full flex-col gap-3 px-6 py-10 transition-colors hover:bg-[var(--color-bg-deeper)] md:px-8 md:py-12"
              >
                <p className="font-ui text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent-brand)]">
                  <span lang="en">{cta.en.eyebrow}</span>
                  <span aria-hidden="true" className="mx-1.5 opacity-50">/</span>
                  <span lang="es">{cta.es.eyebrow}</span>
                </p>
                <h3 className="font-heading text-2xl text-[var(--color-fg)] md:text-3xl">
                  <span lang="en">{cta.en.title}</span>
                </h3>
                <p className="font-heading text-base text-[var(--color-fg)]/80 italic md:text-lg">
                  <span lang="es">{cta.es.title}</span>
                </p>
                <p className="font-body text-sm text-[var(--color-fg)]/80 mt-2 leading-relaxed">
                  <span lang="en">{cta.en.body}</span>
                </p>
                <p className="font-body text-sm text-[var(--color-fg)]/65 leading-relaxed">
                  <span lang="es">{cta.es.body}</span>
                </p>
                <span className="mt-auto inline-flex items-center gap-2 font-ui text-xs uppercase tracking-[0.24em] text-[var(--color-accent-brand)] pt-6">
                  <span aria-hidden="true">→</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    <span lang="en">Open</span>
                    <span aria-hidden="true" className="mx-1">/</span>
                    <span lang="es">Abrir</span>
                  </span>
                </span>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
