import * as React from "react";
import NextLink from "next/link";
import { Headphones, Info, Play, Quote } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  EpkGallery,
  type GalleryCellData,
} from "@/components/sections/EpkGallery";
import type { Lang } from "@/lib/i18n";

const lang: Lang = "en";

// Track listing for the featured "Amor Sin Papeles" listen section.
// Per-track pricing mirrors the original franciscoherreramusic.com store.
const amorSinPapelesTracks: { n: number; title: string; duration: string; price: string }[] = [
  { n: 1, title: "Amor Sin Papeles", duration: "4:14", price: "$0.75" },
  { n: 2, title: "Tambor", duration: "1:25", price: "$0.55" },
  { n: 3, title: "Madre Madre", duration: "4:23", price: "$0.50" },
  { n: 4, title: "Dicen Que", duration: "3:16", price: "$0.55" },
];

// Long-form About page. Content sourced from
//   https://franciscoherreramusic.com/about-francisco
//   https://franciscoherreramusic.com/epk
// (captured 2026-05-07). Structure:
//   - Hero with vintage Peabody's photo + signature title
//   - Lead bio (Theologian, Cultural Worker, Singer-Songwriter)
//   - Border / formative narrative (Calexico, Liberation Theology)
//   - Discography grid (7 albums with covers)
//   - Career highlights (Pete Seeger, Battle for Seattle, etc.)
//   - Band & collaborators
//   - Press pull-quote
//   - CTA → /booking

const albums: { id: string; title: string; image: string }[] = [
  { id: "honor-migrante", title: "Honor Migrante", image: "/images/albums/Honor-Migrante.png" },
  { id: "fuerza-de-la-raiz", title: "Fuerza de la Raíz", image: "/images/albums/Fuerza-de-la-Raíz.png" },
  { id: "francisco-y-las-ninas", title: "Francisco y L@s Niñ@s", image: "/images/albums/Francisco-y-L@s-NIñ@s.png" },
  { id: "canta-y-juega", title: "Canta y Juega", image: "/images/albums/Canta-y-Juega.png" },
  { id: "nuestros-ninos", title: "Nuestros Niños Son Sagrado", image: "/images/albums/Nuestros-Niños-Son-Sagrado.png" },
  { id: "posada-sin-fronteras", title: "Posada Sin Fronteras", image: "/images/albums/Posada-Sin-Fronteras.png" },
];

const highlights: string[] = [
  "Performed alongside Pete Seeger, Jon Fromer, and Emma's Revolution",
  "Stage at the Battle for Seattle (1999) — 250,000 people shutting down the WTO",
  "School of the Americas Watch vigils — up to 22,000 people",
  "Shared the stage with Joan Baez and Jesse Jackson before 10,000 people (1987) for Brian S. Willson",
  "Toured North and Central America in solidarity with grassroots movements",
  "Scored documentaries for filmmakers Saul Landau and Haskell Wexler",
];

// "Compañeros" gallery — the people the songs are sung with and for.
// Six photos: three bandmates (Chris Trinidad, Pedro Gomez, Dr. Loco —
// all named in the `collaborators` array below), a city-hall rally,
// children at a candlelight vigil, and a fresh solo portrait. Renders
// through the shared EpkGallery so the frame language matches /shows
// and /epk. The city-hall-rally landscape carries the gold "Compañeros"
// overlay.
const COMPANIONS: GalleryCellData[] = [
  {
    src: "/images/band/chris-trinidad.png",
    alt: {
      en: "Chris Trinidad — bass and keyboards",
      es: "Chris Trinidad — bajo y teclados",
    },
  },
  {
    src: "/images/photos/francisco-city-hall-rally.webp",
    alt: {
      en: "Francisco J. Herrera at a community rally outside city hall",
      es: "Francisco J. Herrera en una manifestación comunitaria frente al ayuntamiento",
    },
    withOverlay: true,
  },
  {
    // 750×938 portrait — Pedro's face sits near the top of the source.
    // When flex stretches the cell wider than the natural width, the
    // cover-crop hides the top, clipping the eyes. Bias the crop window
    // up with center 25% so the face sits lower in the visible frame.
    src: "/images/band/pedro.png",
    alt: {
      en: "Pedro Gomez — drums",
      es: "Pedro Gomez — batería",
    },
    objectPosition: "center 25%",
  },
  {
    src: "/images/photos/Children-holding candles-at-vigil.webp",
    alt: {
      en: "Children holding candles at a community vigil",
      es: "Niños sosteniendo velas en una vigilia comunitaria",
    },
  },
  {
    src: "/images/band/dr-loco.png",
    alt: {
      en: "Dr. Loco — collaborator and bandleader",
      es: "Dr. Loco — colaborador y líder de banda",
    },
  },
  {
    // 4419×6250 tall portrait — head sits near the top of the source.
    // Bias the cover-crop window further up (center 15%) so the face
    // sits lower in the visible frame with breathing room above. Same
    // fix pattern as pedro.png and the /epk MOMENTS 1.png cell.
    src: "/images/Solo-Portraits/1.png",
    alt: {
      en: "Francisco J. Herrera — solo portrait with classical guitar",
      es: "Francisco J. Herrera — retrato en solo con guitarra clásica",
    },
    objectPosition: "center 15%",
  },
];

const collaborators: { name: string; role: string }[] = [
  { name: "Camilo Landau", role: "Guitar" },
  { name: "Ayla Davila", role: "Bass" },
  { name: "Chris Trinidad", role: "Bass and keyboards" },
  { name: "Rafael Herrera", role: "Percussion" },
  { name: "Pedro Gomez", role: "Drums" },
  { name: "Greg Landau", role: "Producer (Grammy-nominated)" },
];

export default function AboutPage() {
  return (
    <>
      <Header lang={lang} />
      <main>
        {/* ─── Hero ─────────────────────────────────────────────────────
            Vintage Peabody's photo (young Francisco) — anchors the page in
            decades of history before the bio kicks in. */}
        <section
          className="relative isolate overflow-hidden pt-32 lg:pt-44 pb-20 lg:pb-28 min-h-[55vh] lg:min-h-[60vh] flex items-end"
          aria-label="About Francisco Herrera"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/1.about.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            style={{ objectPosition: "center 25%" }}
            loading="eager"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/15" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 [background:linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.30)_15%,rgba(0,0,0,0.10)_38%,rgba(0,0,0,0.05)_62%,rgba(0,0,0,0.25)_88%,rgba(0,0,0,0.50)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.22)_55%,transparent_85%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[var(--color-bg)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-6 lg:right-12 lg:top-10 z-0 select-none"
          >
            <p className="font-signature text-7xl lg:text-9xl text-[var(--color-accent-brand)]/35 -rotate-12 leading-none [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              Historia
            </p>
          </div>

          <div className="relative z-10 mx-auto max-w-[var(--container-content)] px-6 text-center w-full">
            <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-3 inline-block">
              About / Acerca
            </span>
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-8xl text-[var(--color-fg)] mb-5 uppercase tracking-tight leading-[0.95] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
              Francisco
              <br />
              <span className="italic font-light text-[var(--color-accent-brand)]">
                J. Herrera.
              </span>
            </h1>
            <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              Theologian. Cultural worker. Singer-songwriter. Four decades of
              carrying songs across borders — between English and Spanish,
              churches and union halls, elders and children.
            </p>
          </div>
        </section>

        {/* ─── Lead bio ────────────────────────────────────────────────
            EPK long-form bio. Two-column layout on desktop: a B&W solo
            portrait sits on the LEFT of the reading column so the visitor
            sees Francisco's face the moment they start reading about him.
            Mobile: single column, portrait stacks above text. */}
        <section className="bg-[var(--color-bg)] section-atmospheric py-20 lg:py-28">
          <div className="mx-auto max-w-[var(--container-content)] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,400px)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
              {/* Portrait — sticky on desktop so it stays in view as the
                  reader scrolls through the bio paragraphs. */}
              <figure className="relative lg:sticky lg:top-24">
                <div className="relative aspect-[3/4] overflow-hidden bg-black border border-[var(--color-accent-brand)]/30 [filter:drop-shadow(0_24px_32px_rgba(0,0,0,0.6))_drop-shadow(0_8px_12px_rgba(0,0,0,0.45))]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Solo-Portraits/1.Solo-Portraits-Vertical.png"
                    alt="Francisco J. Herrera with classical guitar"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-ui uppercase tracking-[0.2em] text-[var(--color-muted-brand)] text-center">
                  Francisco J. Herrera
                </figcaption>
              </figure>

              {/* Bio paragraphs */}
              <div>
                <p className="font-body text-lg lg:text-xl leading-[1.8] text-white mb-7">
                  <span className="font-heading font-black text-6xl lg:text-7xl text-gold-3d float-left mr-3 mt-1 leading-[0.85]">
                    F
                  </span>
                  rancisco Herrera is a boundary-crossing artist whose music
                  blends cultural pride with a call for justice. Born into a
                  family where performance was a way of life, Francisco began
                  his musical journey as a child, singing Mexican rancheras and
                  romantic ballads alongside his siblings at community and
                  political events. By his teenage years, his talent and
                  curiosity led him to explore rhythm and blues, jazz, rock,
                  punk rock, pop, and gospel — creating an eclectic style that
                  knows no borders.
                </p>
                <p className="font-body text-base lg:text-lg leading-[1.8] text-[var(--color-fg)]/90 mb-7">
                  Inspired by the legacy of Archbishop Óscar Romero and the
                  rise of Base Christian Communities, Francisco&apos;s music
                  found its true direction — championing human rights and
                  amplifying the voices of working people. His creativity is
                  fueled by the joy of music, the energy of collaborating with
                  other artists, and the deep connection he forms with
                  audiences. He especially cherishes live performances in
                  community centers, on the streets, in churches, and union
                  halls, where his music becomes a tool for empowerment and
                  solidarity.
                </p>
                <p className="font-body text-base lg:text-lg leading-[1.8] text-[var(--color-fg)]/90">
                  What sets Francisco apart is his ability to turn his songs
                  into human stories, blending great musicality with first-class
                  storytelling. Audiences laugh, cry, reminisce, and envision a
                  better future — all within a transformative and enjoyable
                  musical experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Border story / formative narrative ──────────────────────
            Same two-column treatment as the lead bio. Portrait on the
            LEFT (matching), bio text + pull-quote on the right. Different
            portrait for visual variety as the visitor scrolls.

            Warm-tobacco band in the 3-tier dark rotation — the formative
            border-town narrative earns the warmth. */}
        <section className="relative isolate overflow-hidden bg-[var(--color-bg-warm)] section-atmospheric py-20 lg:py-28 border-t border-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/facebook/1.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            style={{ objectPosition: "center 30%" }}
            loading="lazy"
          />
          {/* Warm-tobacco scrim — same recipe as /epk Bio section. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#2a2318]/85" />
          <div className="relative mx-auto max-w-[var(--container-content)] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,400px)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
              {/* Portrait — different solo shot than the lead bio so the
                  visitor sees a second moment of Francisco in performance. */}
              <figure className="relative lg:sticky lg:top-24">
                <div className="relative aspect-[3/4] overflow-hidden bg-black border border-[var(--color-accent-brand)]/30 [filter:drop-shadow(0_24px_32px_rgba(0,0,0,0.6))_drop-shadow(0_8px_12px_rgba(0,0,0,0.45))]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Solo-Portraits/2.Solo-Portraits-Vertical.png"
                    alt="Francisco J. Herrera in performance"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-ui uppercase tracking-[0.2em] text-[var(--color-muted-brand)] text-center">
                  In performance
                </figcaption>
              </figure>

              {/* Narrative + pull-quote */}
              <div>
                <span className="font-ui font-semibold text-xs uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-4 inline-block">
                  Calexico / Formative Years
                </span>
                <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--color-fg)] mb-8 uppercase tracking-tight leading-[0.95]">
                  Two worlds
                  <br />
                  <span className="italic font-light text-[var(--color-accent-brand)]">
                    at once.
                  </span>
                </h2>
                <p className="font-body text-base lg:text-lg leading-[1.8] text-[var(--color-fg)]/90 mb-7">
                  Growing up in the border town of Calexico, Francisco always
                  straddles two worlds. &ldquo;My siblings and cousins and I
                  used to sing rancheras and some mariachi at family parties,
                  and when we got a little older we started some garage rock
                  bands,&rdquo; he recalls of his early musical exploits.
                </p>
                <p className="font-body text-base lg:text-lg leading-[1.8] text-[var(--color-fg)]/90 mb-7">
                  As he became more involved in the church and Latin American
                  social movements, Herrera began exploring ways to use music
                  to further his goals of social justice. He traveled
                  extensively throughout Latin America working with community
                  organizations even as he finished his four years at seminary
                  school — toting his guitar, ready to support events, actions,
                  and church meetings.
                </p>
                <blockquote className="border-l-2 border-[var(--color-accent-brand)] pl-6 mb-7">
                  <p className="font-body italic text-lg lg:text-xl leading-[1.6] text-white">
                    &ldquo;Reflection, meditation, prayer — all those things are
                    important. But they&apos;re important so you can play a
                    role here to make social change. <em>De ahí nacen</em> all
                    those misas that have a social message.&rdquo;
                  </p>
                </blockquote>
                <p className="font-body text-base lg:text-lg leading-[1.8] text-[var(--color-fg)]/90">
                  He deftly weaves between English and Spanish as he explains
                  the philosophy of Liberation Theology, sitting under portraits
                  of his two heroes — Che Guevara, and Monseñor Óscar Romero,
                  the Salvadoran archbishop assassinated in 1980.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Portrait gallery ─────────────────────────────────────────
            Four solo portraits between the Calexico narrative and the
            discography. Vertical aspect (3:4) matches the source images;
            each portrait gets the same drop-shadow + gold-tinted border
            treatment as the album covers below for visual consistency. */}
        <section className="bg-[var(--color-bg)] section-atmospheric py-20 lg:py-28">
          <div className="mx-auto max-w-[var(--container-content)] px-6">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-3 inline-block">
                Portraits / Retratos
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--color-fg)] uppercase tracking-tight leading-[0.95]">
                On
                <br />
                <span className="italic font-light text-[var(--color-accent-brand)]">
                  stage.
                </span>
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[1, 2, 3, 4].map((n) => (
                <li
                  key={n}
                  className="aspect-[3/4] overflow-hidden bg-black border border-[var(--color-accent-brand)]/30 [filter:drop-shadow(0_18px_22px_rgba(0,0,0,0.6))_drop-shadow(0_6px_10px_rgba(0,0,0,0.45))] transition-transform duration-500 ease-out hover:scale-[1.02]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/Solo-Portraits/${n}.Solo-Portraits-Vertical.png`}
                    alt={`Francisco J. Herrera — portrait ${n}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── Stats row ────────────────────────────────────────────────
            Big numbers row — anchors the artist's scale in two seconds.
            Editorial-magazine staple. Sits between the narrative-heavy
            sections and the discography to give the eye a rest while
            communicating weight. */}
        <section className="bg-[var(--color-bg)] section-atmospheric py-16 lg:py-20 border-y border-[var(--color-border-brand)]">
          <div className="mx-auto max-w-[var(--container-content)] px-6">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
              {[
                { n: "40+", label: { en: "Years on stage", es: "Años en escena" } },
                { n: "7", label: { en: "Albums released", es: "Álbumes lanzados" } },
                { n: "250K", label: { en: "At Battle for Seattle", es: "En Battle for Seattle" } },
                { n: "22K", label: { en: "At SOA Watch vigils", es: "En vigilias de SOA Watch" } },
              ].map((stat, i) => (
                <li key={i}>
                  <p className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-gold-3d leading-none mb-3">
                    {stat.n}
                  </p>
                  <p className="font-ui font-semibold text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--color-fg)]/80">
                    {stat.label[lang]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── Discography ──────────────────────────────────────────── */}
        <section className="relative isolate overflow-hidden bg-[var(--color-bg)] section-atmospheric py-20 lg:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photos/streetlights-sunset.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            style={{ objectPosition: "center 50%" }}
            loading="lazy"
          />
          {/* Black-tobacco scrim — mirrors /epk Recent Performances. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0f0f0f]/80" />
          <div className="relative mx-auto max-w-[var(--container-content)] px-6">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-3 inline-block">
                Discography / Discografía
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--color-fg)] uppercase tracking-tight leading-[0.95]">
                Seven
                <br />
                <span className="italic font-light text-[var(--color-accent-brand)]">
                  albums.
                </span>
              </h2>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {albums.map((album) => (
                <li key={album.id} className="text-center">
                  <div className="aspect-square mb-3 bg-black border border-[var(--color-accent-brand)]/30 [filter:drop-shadow(0_18px_22px_rgba(0,0,0,0.6))]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={album.image}
                      alt={album.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-heading text-sm lg:text-base text-white leading-snug">
                    {album.title}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-center mt-10 text-sm font-body italic text-[var(--color-fg)]/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.55)]">
              Including two children&apos;s albums in Spanish.
            </p>
          </div>
        </section>

        {/* ─── Listen section — Amor Sin Papeles ────────────────────────
            Two-column album-page treatment: cover on the left, featured
            track player + track listing on the right. Mirrors the album
            row pattern used in GridBanner / FeaturedReleases on the
            homepage. The audio player is a visual placeholder linking to
            the original site since the audio files haven't been migrated. */}
        <section className="relative isolate overflow-hidden bg-[var(--color-bg)] section-atmospheric py-20 lg:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photos/francisco-festival-performance.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            style={{ objectPosition: "center 35%" }}
            loading="lazy"
          />
          {/* Black-tobacco scrim — mirrors /epk Recent Performances. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0f0f0f]/80" />
          <div className="relative mx-auto max-w-[var(--container-content)] px-6">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-3 inline-block">
                Music / Música
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--color-fg)] uppercase tracking-tight leading-[0.95]">
                Amor sin
                <br />
                <span className="italic font-light text-[var(--color-accent-brand)]">
                  papeles.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
              {/* Album cover — stand-in using Honor Migrante artwork until
                  the dedicated Amor Sin Papeles cover is added. */}
              <figure className="relative">
                <div className="aspect-square overflow-hidden bg-black border border-[var(--color-accent-brand)]/30 [filter:drop-shadow(0_24px_32px_rgba(0,0,0,0.6))_drop-shadow(0_8px_12px_rgba(0,0,0,0.45))]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/albums/Honor-Migrante.png"
                    alt="Amor Sin Papeles — Francisco J. Herrera"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-ui uppercase tracking-[0.2em] text-[var(--color-muted-brand)] text-center">
                  Francisco J. Herrera
                </figcaption>
              </figure>

              {/* Featured track player + full track listing */}
              <div>
                {/* Featured track — visual player UI linking out to the
                    original site for actual audio. */}
                <div className="border border-[var(--color-border-brand)] p-4 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <a
                      href="https://franciscoherreramusic.com/blog/blog/4229141/amor-sin-papeles--2"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Play Amor Sin Papeles on the original site"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-brand)] text-[var(--color-bg)] hover:bg-[var(--color-fg)] transition-colors shrink-0"
                    >
                      <Play className="size-4 translate-x-[1px]" aria-hidden="true" fill="currentColor" />
                    </a>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-sm uppercase tracking-[0.18em] text-white truncate">
                        Amor Sin Papeles
                      </p>
                      <p className="text-xs text-[var(--color-muted-brand)]">0:00 / 4:14</p>
                    </div>
                  </div>
                  {/* Static progress bar — visual only. */}
                  <div className="h-1 bg-[var(--color-border-brand)] relative">
                    <div className="absolute inset-y-0 left-0 w-0 bg-[var(--color-accent-brand)]" />
                  </div>
                </div>

                {/* Track listing */}
                <ol className="space-y-0">
                  {amorSinPapelesTracks.map((track) => (
                    <li
                      key={track.n}
                      className="flex items-center gap-3 sm:gap-4 py-3 border-b border-[var(--color-border-brand)] hover:bg-[var(--color-card-bg)]/40 transition-colors"
                    >
                      <span className="font-heading text-sm text-[var(--color-accent-brand)] w-6 shrink-0">
                        {track.n}
                      </span>
                      <p className="font-body text-sm lg:text-base text-white flex-1 min-w-0 truncate">
                        {track.title}
                      </p>
                      <span className="text-xs text-[var(--color-muted-brand)] shrink-0 tabular-nums">
                        {track.duration}
                      </span>
                      <a
                        href="https://franciscoherreramusic.com/blog/blog/4229141/amor-sin-papeles--2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Info about ${track.title}`}
                        className="inline-flex items-center gap-1 text-xs font-ui uppercase tracking-[0.15em] text-[var(--color-muted-brand)] hover:text-[var(--color-accent-brand)] transition-colors shrink-0"
                      >
                        <Info className="size-3.5" aria-hidden="true" />
                        <span className="hidden sm:inline">Info</span>
                      </a>
                      <span className="font-ui font-semibold text-xs uppercase tracking-[0.15em] text-[var(--color-accent-brand)] shrink-0">
                        Sale {track.price}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://franciscoherreramusic.com/blog/blog/4229141/amor-sin-papeles--2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-ui font-semibold text-xs uppercase tracking-[0.2em] bg-[var(--color-accent-brand)] text-[var(--color-bg)] hover:bg-[var(--color-fg)] transition-colors px-6 py-3"
                  >
                    <Headphones className="size-4" aria-hidden="true" />
                    Listen / Escuchar
                  </a>
                  <NextLink
                    href="/store"
                    className="inline-flex items-center gap-2 font-ui font-semibold text-xs uppercase tracking-[0.2em] border border-[var(--color-accent-brand)]/60 text-white hover:bg-[var(--color-accent-brand)] hover:text-[var(--color-bg)] hover:border-[var(--color-accent-brand)] transition-colors px-6 py-3"
                  >
                    Buy in store / Comprar
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── YouTube-backed performance section ───────────────────────
            Same treatment as the homepage Voicemail loop — a video plays
            muted/looped as the section background, with the brand overlays
            (light tint + side-vignette + radial backdrop) layered on top
            so the title/CTA reads cleanly against any frame.
            YouTube source: https://youtu.be/Z2OyTMY9Nbo */}
        <section
          className="relative w-full h-[420px] sm:h-[560px] lg:h-[700px] overflow-hidden bg-black"
          aria-label="Watch Francisco perform"
        >
          {/* YouTube iframe sized 177.78vh × 100vh to maintain 16:9
              while always covering the section (the YouTube version of
              `object-fit: cover`). Pointer-events disabled so clicks pass
              through to the CTA below. */}
          <div className="absolute inset-0 pointer-events-none">
            <iframe
              src="https://www.youtube.com/embed/Z2OyTMY9Nbo?autoplay=1&mute=1&loop=1&playlist=Z2OyTMY9Nbo&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&playsinline=1&rel=0&disablekb=1"
              title="Francisco J. Herrera — performance"
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-full min-w-full min-h-[56.25vw]"
            />
          </div>

          {/* Light uniform tint + symmetric side-vignette + centered radial
              backdrop — exact same treatment as the Voicemail section. */}
          <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.30)_15%,rgba(0,0,0,0.10)_38%,rgba(0,0,0,0.05)_62%,rgba(0,0,0,0.25)_88%,rgba(0,0,0,0.50)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.22)_55%,transparent_85%)]"
          />

          {/* Cursive watermark — matches Voicemail. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-6 lg:right-20 lg:top-10 z-10 select-none"
          >
            <p className="font-signature text-8xl lg:text-[10rem] text-[var(--color-accent-brand)]/55 -rotate-12 leading-none [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              Vivo
            </p>
          </div>

          {/* Centered content — eyebrow + signature title + Watch CTA. */}
          <div className="relative h-full mx-auto max-w-[var(--container-content)] px-6 flex flex-col items-center justify-center text-center z-20">
            <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-4">
              Watch / Ver
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-[var(--color-fg)] mb-5 uppercase tracking-tight leading-[0.95] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
              Francisco
              <br />
              <span className="italic font-light text-[var(--color-accent-brand)]">
                in performance.
              </span>
            </h2>
            <p className="text-[var(--color-fg)]/85 text-base lg:text-lg mb-10 max-w-2xl leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              A few minutes on stage — the songs, the storytelling, the room.
            </p>
            <a
              href="https://youtu.be/Z2OyTMY9Nbo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-ui font-semibold text-xs uppercase tracking-[0.2em] bg-[var(--color-accent-brand)] text-[var(--color-bg)] hover:bg-[var(--color-fg)] transition-colors px-7 py-3"
            >
              Watch on YouTube / Ver en YouTube
            </a>
          </div>
        </section>

        {/* ─── Second YouTube-backed performance section ────────────────
            Same Voicemail-style treatment as the first video — different
            video, different watermark / title for variety.
            YouTube source: https://youtu.be/6ROLjpXB9gs */}
        <section
          className="relative w-full h-[420px] sm:h-[560px] lg:h-[700px] overflow-hidden bg-black"
          aria-label="Watch Francisco perform — second video"
        >
          <div className="absolute inset-0 pointer-events-none">
            <iframe
              src="https://www.youtube.com/embed/6ROLjpXB9gs?autoplay=1&mute=1&loop=1&playlist=6ROLjpXB9gs&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&playsinline=1&rel=0&disablekb=1"
              title="Francisco J. Herrera — performance (2)"
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-full min-w-full min-h-[56.25vw]"
            />
          </div>

          <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.30)_15%,rgba(0,0,0,0.10)_38%,rgba(0,0,0,0.05)_62%,rgba(0,0,0,0.25)_88%,rgba(0,0,0,0.50)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.22)_55%,transparent_85%)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-6 lg:right-20 lg:top-10 z-10 select-none"
          >
            <p className="font-signature text-8xl lg:text-[10rem] text-[var(--color-accent-brand)]/55 -rotate-12 leading-none [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              Canto
            </p>
          </div>

          <div className="relative h-full mx-auto max-w-[var(--container-content)] px-6 flex flex-col items-center justify-center text-center z-20">
            <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-4">
              Watch / Ver
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-[var(--color-fg)] mb-5 uppercase tracking-tight leading-[0.95] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
              Another song,
              <br />
              <span className="italic font-light text-[var(--color-accent-brand)]">
                another stage.
              </span>
            </h2>
            <p className="text-[var(--color-fg)]/85 text-base lg:text-lg mb-10 max-w-2xl leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              More from the road — different room, same heart.
            </p>
            <a
              href="https://youtu.be/6ROLjpXB9gs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-ui font-semibold text-xs uppercase tracking-[0.2em] bg-[var(--color-accent-brand)] text-[var(--color-bg)] hover:bg-[var(--color-fg)] transition-colors px-7 py-3"
            >
              Watch on YouTube / Ver en YouTube
            </a>
          </div>
        </section>

        {/* ─── Career highlights ─────────────────────────────────────
            Same two-column treatment as the lead bio + formative-years
            sections. Portrait on the LEFT, numbered highlight list on
            the right with the closing italic. */}
        <section className="bg-[var(--color-bg)] section-atmospheric py-20 lg:py-28">
          <div className="mx-auto max-w-[var(--container-content)] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,400px)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
              {/* Portrait — magenta-pink stage shot, fits the on-stage
                  theme of the highlights list to its right. */}
              <figure className="relative lg:sticky lg:top-24">
                <div className="relative aspect-[3/4] overflow-hidden bg-black border border-[var(--color-accent-brand)]/30 [filter:drop-shadow(0_24px_32px_rgba(0,0,0,0.6))_drop-shadow(0_8px_12px_rgba(0,0,0,0.45))]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Solo-Portraits/3.Solo-Portraits-Vertical.png"
                    alt="Francisco J. Herrera on stage"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-ui uppercase tracking-[0.2em] text-[var(--color-muted-brand)] text-center">
                  On stage
                </figcaption>
              </figure>

              {/* Highlights list */}
              <div>
                <span className="font-ui font-semibold text-xs uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-4 inline-block">
                  On Stage / En Escena
                </span>
                <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--color-fg)] mb-10 uppercase tracking-tight leading-[0.95]">
                  Notable
                  <br />
                  <span className="italic font-light text-[var(--color-accent-brand)]">
                    moments.
                  </span>
                </h2>
                <ul className="space-y-5">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 border-b border-[var(--color-border-brand)] pb-5">
                      <span className="font-heading text-[var(--color-accent-brand)] text-lg shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-body text-base lg:text-lg leading-relaxed text-[var(--color-fg)]/90">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm lg:text-base italic leading-relaxed text-[var(--color-fg)]/80 mt-10">
                  Francisco&apos;s most common place is not on big stages.
                  He&apos;s found in intimate gatherings of women recovering
                  from domestic violence, day laborers organizing for a
                  universal wage, children becoming bilingual, interfaith
                  groups shutting down private prisons — always performing
                  songs that move, teach, and inspire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Compañeros gallery (adaptive flex) ────────────────────────
            Visual proof break that amplifies the "Notable Moments" list
            above with the actual faces of who walks alongside Francisco —
            three bandmates from the collaborators array, two community
            scenes (rally + vigil), and a solo portrait. Same EpkGallery
            frame as /epk and /shows so the visual language is consistent
            across the site. */}
        <EpkGallery
          lang={lang}
          cells={COMPANIONS}
          eyebrow={
            lang === "en"
              ? "COMPAÑEROS / COMPANIONS"
              : "COMPAÑEROS / COMPANIONS"
          }
          title={lang === "en" ? "On the" : "En el"}
          titleAccent={lang === "en" ? "road." : "camino."}
          backgroundImageSrc="/images/facebook/471278450_10162550647985119_4767484647779335697_n.jpg"
          backgroundImagePosition="center 25%"
          lead={
            lang === "en"
              ? "Bandmates, congregants, organizers — the people the songs are sung with and for."
              : "Compañeros de banda, congregantes, organizadores — la gente con quien y para quien se cantan las canciones."
          }
          overlay={{
            title: lang === "en" ? "Compañeros" : "Compañeros",
            subtitle:
              lang === "en"
                ? "Forty years on the road."
                : "Cuarenta años en el camino.",
          }}
          ariaLabel={lang === "en" ? "Compañeros gallery" : "Galería de compañeros"}
        />

        {/* ─── Present-day portrait banner ──────────────────────────────
            Cinematic full-bleed image of Francisco today with his classical
            guitar in a park. Sits right before the personal letter so the
            visitor sees his face, then hears his voice — magazine-style
            "from the artist" sequence. "Hoy" cursive watermark mirrors the
            "Historia" watermark in the hero. */}
        <section
          className="relative w-full overflow-hidden bg-black aspect-[12/5] sm:aspect-[16/6] lg:aspect-[24/10]"
          aria-label="Francisco J. Herrera today"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/Francisco-J._Herrera.png"
            alt="Francisco J. Herrera with his classical guitar in a park"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {/* Soft side-vignette — frames the image without darkening
              Francisco's face in the center. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.10)_18%,rgba(0,0,0,0)_42%,rgba(0,0,0,0)_58%,rgba(0,0,0,0.10)_82%,rgba(0,0,0,0.45)_100%)]"
          />

          {/* Top fade — blends in from the Career Highlights section above. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-t from-transparent to-[var(--color-bg)]"
          />

          {/* Bottom fade into the next section. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--color-bg)]"
          />

          {/* Cursive "Hoy" watermark — mirrors "Historia" in the hero. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-6 lg:right-20 lg:top-10 z-10 select-none"
          >
            <p className="font-signature text-8xl lg:text-[10rem] text-[var(--color-accent-brand)]/55 -rotate-12 leading-none [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              Hoy
            </p>
          </div>
        </section>

        {/* ─── Letter from Francisco ────────────────────────────────────
            Personal welcome message in the Silently signature script —
            same hand-drawn brand voice as the logo. Sits as the emotional
            close right before the press quote + CTA so the visitor leaves
            having "heard" Francisco directly.

            Warm-tobacco band in the 3-tier dark rotation (Wes pattern). */}
        <section className="bg-[var(--color-bg-warm)] section-atmospheric py-24 lg:py-32 relative overflow-hidden border-t border-black">
          {/* Faint cursive watermark in the corner — atmosphere, not content. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-12 top-4 lg:left-24 lg:top-6 z-0 select-none"
          >
            <p className="font-signature text-[8rem] lg:text-[14rem] text-[var(--color-accent-brand)]/20 -rotate-12 leading-none">
              Querida
            </p>
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-white mb-6 inline-block">
              From Francisco / De Francisco
            </span>

            <p className="font-signature text-3xl sm:text-4xl lg:text-5xl text-[var(--color-accent-brand)] leading-[1.4] mb-8 [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
              Welcome — these are the songs I sing because they need singing.
              The songs of liberation, of the migrant journey, of family at
              the table, of children laughing in two languages. I share them
              with you.
            </p>

            <p className="font-body italic text-base lg:text-lg text-[var(--color-fg)]/85 leading-relaxed mb-10">
              Bienvenidos — estos son los cantos que canto porque necesitan
              ser cantados. Los cantos de liberación, del camino migrante,
              de la familia en la mesa, de las niñas y niños riendo en dos
              idiomas. Se los comparto.
            </p>

            <p className="font-signature text-3xl sm:text-4xl text-white leading-none [-webkit-text-stroke:0.4px_currentColor]">
              — Francisco
            </p>
          </div>
        </section>

        {/* ─── Band & collaborators ───────────────────────────────── */}
        <section className="bg-[var(--color-bg)] section-atmospheric py-20 lg:py-28">
          <div className="mx-auto max-w-[var(--container-content)] px-6">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-3 inline-block">
                Band & Collaborators
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--color-fg)] uppercase tracking-tight leading-[0.95]">
                Compañeros
                <span className="italic font-light text-[var(--color-accent-brand)]">.</span>
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborators.map((c) => (
                <li
                  key={c.name}
                  className="border border-[var(--color-border-brand)] hover:border-[var(--color-accent-brand)]/60 transition-colors p-6"
                >
                  <p className="font-heading text-xl text-white mb-1">{c.name}</p>
                  <p className="font-ui text-xs uppercase tracking-[0.18em] text-[var(--color-accent-brand)]">
                    {c.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── Reviews ──────────────────────────────────────────────────
            Two-column treatment matching the lead bio / Calexico / Career
            Highlights sections. Portrait of Francisco on the LEFT (sticky
            on desktop) gives the visitor a face to associate with the
            praise; the testimonial card sits on the right. Single anchor
            review for now (Tim Troy / SF Public Library) — designed to
            scale to a list later.

            Warm-tobacco band in the page's 3-tier dark rotation (Wes
            pattern) — flat solid color + black hairline border-top. */}
        <section className="bg-[var(--color-bg-warm)] section-atmospheric py-20 lg:py-28 relative isolate overflow-hidden border-t border-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/client-sent-images/69846564008__2864B8A4-74A6-440A-B1A2-60F232DAC2AA.jpeg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            style={{ objectPosition: "center 40%" }}
            loading="lazy"
          />
          {/* Warm-tobacco scrim — same recipe as /epk Bio section. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#2a2318]/85" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-6 lg:right-20 lg:top-10 z-0 select-none"
          >
            <p className="font-signature text-8xl lg:text-[10rem] text-[var(--color-accent-brand)]/25 -rotate-12 leading-none">
              Palabras
            </p>
          </div>

          <div className="relative z-10 mx-auto max-w-[var(--container-content)] px-6">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-3 inline-block">
                Reviews / Reseñas
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--color-fg)] uppercase tracking-tight leading-[0.95]">
                In their
                <br />
                <span className="italic font-light text-[var(--color-accent-brand)]">
                  words.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,400px)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
              {/* Portrait — fourth solo shot (not yet used in a sticky bio
                  block), warms the section by anchoring the praise to a
                  face. */}
              <figure className="relative lg:sticky lg:top-24">
                <div className="relative aspect-[3/4] overflow-hidden bg-black border border-[var(--color-accent-brand)]/30 [filter:drop-shadow(0_24px_32px_rgba(0,0,0,0.6))_drop-shadow(0_8px_12px_rgba(0,0,0,0.45))]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Solo-Portraits/4.Solo-Portraits-Vertical.png"
                    alt="Francisco J. Herrera in performance"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-ui uppercase tracking-[0.2em] text-[var(--color-muted-brand)] text-center">
                  Francisco in performance
                </figcaption>
              </figure>

              {/* Testimonial card — warm-tobacco surface lifts above the
                  band; gold-tinted border + ambient gold shadow makes the
                  card feel "lit" by the spotlight behind it. */}
              <figure className="relative border border-[var(--color-border-warm)] bg-[var(--color-card-warm)] px-8 py-12 lg:px-14 lg:py-16 [box-shadow:0_24px_60px_-20px_rgba(0,0,0,0.85),0_0_0_1px_rgba(226,165,63,0.08),0_8px_40px_-8px_rgba(226,165,63,0.18)]">
                <Quote
                  aria-hidden="true"
                  className="absolute -top-5 left-8 lg:left-12 h-10 w-10 text-[var(--color-accent-brand)] bg-[var(--color-bg-warm)] px-1"
                  strokeWidth={1.5}
                />
                <blockquote>
                  <p className="font-body text-lg lg:text-xl leading-[1.9] text-white/95 italic">
                    Francisco Herrera is an extraordinary guitarist and singer.
                    He has performed often at the San Francisco Public
                    Library&rsquo;s Children&rsquo;s Center over the past
                    half-dozen years. Francisco is wonderfully capable of
                    adjusting his repertoire of songs and program length to
                    different age groups — from the littlest pre-K children
                    and school-aged kids to teens and adults. I personally
                    recommend Francisco with great honor!
                  </p>
                </blockquote>
                <figcaption className="mt-10 pt-6 border-t border-[var(--color-accent-brand)]/30">
                  <p className="font-heading text-xl text-[var(--color-accent-brand)] leading-tight">
                    Tim Troy
                  </p>
                  <p className="font-ui font-semibold text-xs uppercase tracking-[0.2em] text-white/90 mt-2">
                    Library &middot; Fisher Children&rsquo;s Center
                  </p>
                  <p className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-muted-brand)] mt-1">
                    San Francisco Public Library
                  </p>
                  <p className="font-body text-xs text-[var(--color-muted-brand)] mt-4 tabular-nums">
                    (415) 557-4549 &nbsp;·&nbsp; Feb.&nbsp;9, 2011
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ─── Songs of the road banner ──────────────────────────────────
            Cinematic full-bleed still life — classical guitar and straw hat
            resting on the sand at sunset. Sits as the emotional pivot
            between the Compañeros band cards and the closing press quote.
            "Camino" cursive watermark completes the page's lineage
            (Historia → Vivo → Canto → Hoy → Querida → Camino), evoking
            del camino migrante — the journey at the heart of the songs. */}
        <section
          className="relative w-full overflow-hidden bg-black aspect-[12/5] sm:aspect-[16/6] lg:aspect-[24/10]"
          aria-label="Songs of the road — guitar and hat on the sand at sunset"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/client-sent-images/4.png"
            alt="A classical guitar and a straw hat resting on the sand at sunset"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {/* Soft side-vignette — frames the image without darkening
              Francisco at the center of the stage. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.10)_18%,rgba(0,0,0,0)_42%,rgba(0,0,0,0)_58%,rgba(0,0,0,0.10)_82%,rgba(0,0,0,0.45)_100%)]"
          />

          {/* Top fade — blends in from the Compañeros section above. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-t from-transparent to-[var(--color-bg)]"
          />

          {/* Bottom fade into the press-quote section. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--color-bg)]"
          />

          {/* Cursive "Camino" watermark — completes the cursive lineage. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-6 lg:right-20 lg:top-10 z-10 select-none"
          >
            <p className="font-signature text-8xl lg:text-[10rem] text-[var(--color-accent-brand)]/55 -rotate-12 leading-none [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              Camino
            </p>
          </div>
        </section>

        {/* ─── Press quote + CTA ─────────────────────────────────── */}
        <section className="bg-[var(--color-bg)] section-atmospheric py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="font-signature text-3xl sm:text-4xl lg:text-5xl text-[var(--color-accent-brand)] leading-tight mb-4">
              &ldquo;An extraordinary guitarist and singer.&rdquo;
            </p>
            <p className="font-body italic text-sm text-[var(--color-fg)]/80 mb-10">
              — Tim Troy, San Francisco Public Library / Fisher Children&apos;s Center
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NextLink
                href="/booking"
                className="inline-flex items-center gap-2 font-ui font-semibold text-xs uppercase tracking-[0.2em] bg-[var(--color-accent-brand)] text-[var(--color-bg)] hover:bg-[var(--color-fg)] transition-colors px-7 py-3"
              >
                Book Francisco / Contrátanos
              </NextLink>
              <NextLink
                href="/blog"
                className="inline-flex items-center gap-2 font-ui font-semibold text-xs uppercase tracking-[0.2em] border border-[var(--color-accent-brand)]/60 text-white hover:bg-[var(--color-accent-brand)] hover:text-[var(--color-bg)] hover:border-[var(--color-accent-brand)] transition-colors px-7 py-3"
              >
                Read his writing / Leer su escritura
              </NextLink>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
