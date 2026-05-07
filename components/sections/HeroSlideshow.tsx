"use client";

// Guitare source: sections/slideshow.liquid
// - Wrapper "dt-sc-swiper-slider swiper-container" lines 1-38
// - Per-slide structure via slider-data snippet, lines 12-23
// - Schema defaults — autoplay off (line 463), dots on (line 483), arrows configurable
//   (demo: arrows off, dots on per templates/index.json)
// - Heights: desktop 1750 / laptop 700 / tablet 600 / mobile 350 (index.json)
// CSS reference: dt-framework.css swiper styles + dt-custom.css overrides.

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NextLink from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";
import type { HeroSlide } from "@/lib/content/home";

type Props = {
  slides: HeroSlide[];
  lang?: Lang;
  autoplay?: boolean;
};

export function HeroSlideshow({ slides, lang = "en", autoplay = false }: Props) {
  const plugins = React.useMemo(
    () => (autoplay ? [Autoplay({ delay: 5000, stopOnInteraction: false })] : []),
    [autoplay],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, plugins);
  const [selected, setSelected] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = React.useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={lang === "en" ? "Hero slideshow" : "Carrusel principal"}
      className="relative w-full bg-[var(--color-bg)]"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative shrink-0 grow-0 basis-full"
              role="group"
              aria-roledescription="slide"
            >
              <div className="relative h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[780px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={t(slide.imageAlt, lang)}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"
                />
                <div className="relative h-full mx-auto max-w-[var(--container-content)] px-6 sm:px-10 flex items-center">
                  <div className="max-w-2xl">
                    <span className="font-heading text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-4 inline-block">
                      {t(slide.eyebrow, lang)}
                    </span>
                    <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-fg)] !leading-[1.05] mb-5 font-light">
                      {t(slide.title, lang)}
                    </h2>
                    <p className="text-[var(--color-fg)]/85 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
                      {t(slide.tagline, lang)}
                    </p>
                    <NextLink
                      href={slide.cta.href}
                      className={buttonVariants({ variant: "primary", size: "lg" })}
                    >
                      {t(slide.cta.label, lang)}
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next — hidden by default per Guitare demo, shown ≥md as accessibility aid */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label={lang === "en" ? "Previous slide" : "Anterior"}
        className="hidden md:inline-flex absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center bg-[var(--color-bg)]/40 text-[var(--color-fg)] hover:bg-[var(--color-accent-brand)] hover:text-[var(--color-bg)] transition-colors"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label={lang === "en" ? "Next slide" : "Siguiente"}
        className="hidden md:inline-flex absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center bg-[var(--color-bg)]/40 text-[var(--color-fg)] hover:bg-[var(--color-accent-brand)] hover:text-[var(--color-bg)] transition-colors"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      {/* Dots — Guitare demo default */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${lang === "en" ? "Slide" : "Diapositiva"} ${i + 1}`}
            aria-current={selected === i}
            onClick={() => scrollTo(i)}
            className={[
              "h-2.5 w-2.5 rounded-full border transition-all",
              selected === i
                ? "bg-[var(--color-accent-brand)] border-[var(--color-accent-brand)] scale-110"
                : "bg-transparent border-[var(--color-fg)]/60 hover:border-[var(--color-accent-brand)]",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
