"use client";

// Guitare source: sections/home-product-carousel.liquid
// - Wrapper + ".grouped-content" flex (lines 1-294)
// - Section heading + sub-heading + description rendered via section-heading snippet (line 46)
// - Demo (templates/index.json): grid 4-up, padding "120,115" (top/bottom),
//   sub-heading color #e2a53f (gold), heading color #ffffff,
//   description color #9a9a9a, dark bg, arrows nav
// - Schema: heading default "Product Carousel" (line 747), 4-col default (line 1032),
//   arrows default false (line 1107)

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import NextLink from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import type { ProductCarouselContent } from "@/lib/content/home";

type Props = {
  content: ProductCarouselContent;
  lang?: Lang;
};

export function ProductCarousel({ content, lang = "en" }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  React.useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    update();
    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section
      // 120/115px vertical padding from templates/index.json "padding":"120,115"
      className="relative bg-[var(--color-bg)] pt-[120px] pb-[115px]"
      aria-label={t(content.title, lang)}
    >
      <div className="mx-auto max-w-[var(--container-content)] px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="font-heading text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-3 inline-block">
            {t(content.eyebrow, lang)}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl !text-[var(--color-fg)] mb-5 font-light">
            {t(content.title, lang)}
          </h2>
          <p className="text-[var(--color-muted-brand)] text-base lg:text-lg leading-relaxed">
            {t(content.description, lang)}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-3">
              {content.items.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 px-3"
                >
                  <NextLink
                    href={item.href}
                    className="group block bg-[var(--color-card-bg)] border border-[var(--color-border-brand)] hover:border-[var(--color-accent-brand)] transition-colors"
                  >
                    <div className="relative aspect-square overflow-hidden bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={t(item.title, lang)}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-[var(--color-button-bg)] text-[var(--color-button-fg)] group-hover:bg-[var(--color-button-hover-bg)] group-hover:text-[var(--color-button-hover-fg)] transition-colors text-center font-heading uppercase tracking-[0.18em] text-xs py-3 translate-y-full group-hover:translate-y-0 duration-300">
                        {t(content.ctaLabel, lang)}
                      </span>
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-heading text-base !text-[var(--color-fg)] mb-1 group-hover:text-[var(--color-accent-brand)] transition-colors">
                        {t(item.title, lang)}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-brand)]">
                        {t(item.theme, lang)}
                      </p>
                    </div>
                  </NextLink>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label={lang === "en" ? "Previous" : "Anterior"}
            className="absolute left-0 -translate-x-1/2 top-1/3 hidden lg:inline-flex h-11 w-11 items-center justify-center bg-[var(--color-button-bg)] text-[var(--color-fg)] border border-[var(--color-border-brand)] hover:bg-[var(--color-accent-brand)] hover:text-[var(--color-bg)] hover:border-[var(--color-accent-brand)] transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label={lang === "en" ? "Next" : "Siguiente"}
            className="absolute right-0 translate-x-1/2 top-1/3 hidden lg:inline-flex h-11 w-11 items-center justify-center bg-[var(--color-button-bg)] text-[var(--color-fg)] border border-[var(--color-border-brand)] hover:bg-[var(--color-accent-brand)] hover:text-[var(--color-bg)] hover:border-[var(--color-accent-brand)] transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
