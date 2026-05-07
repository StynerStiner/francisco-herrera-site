// Guitare source: sections/home-grid-banner.liquid
// - ".dt-sc-grid-banner-section" lines 1-112 (grid layout, configurable cols)
// - Per-block: image / title / sub-title / description / raw HTML spec table
//   ({{ block.settings.code }} at line 97-98 holds the spec list rendered inline)
// - Demo (templates/index.json): block_banner_style "grid", grid 2-up, with bg image
// - Schema: bg image, overlay color, height defaults

import * as React from "react";
import NextLink from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";
import type { GridBannerContent } from "@/lib/content/home";

type Props = {
  content: GridBannerContent;
  lang?: Lang;
};

export function GridBanner({ content, lang = "en" }: Props) {
  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-24"
      aria-label={t(content.title, lang)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={content.background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto max-w-[var(--container-content)] px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-3 inline-block">
            {t(content.eyebrow, lang)}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl !text-[var(--color-fg)] font-light">
            {t(content.title, lang)}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {content.cards.map((card) => (
            <article
              key={card.id}
              className="group bg-[var(--color-card-bg)]/80 backdrop-blur-sm border border-[var(--color-border-brand)] hover:border-[var(--color-accent-brand)] transition-colors p-6 lg:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 items-start">
                <div className="aspect-square overflow-hidden bg-black mx-auto sm:mx-0 w-full max-w-[200px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={t(card.title, lang)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl !text-[var(--color-fg)] mb-1 font-light">
                    {t(card.title, lang)}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-brand)] mb-3">
                    {t(card.series, lang)}
                  </p>
                  <p className="text-base mb-5 flex items-baseline gap-2">
                    {card.originalPrice && (
                      <span className="text-[var(--color-muted-brand)] line-through text-sm">
                        {t(card.originalPrice, lang)}
                      </span>
                    )}
                    <span className="text-[var(--color-fg)] font-heading">{t(card.price, lang)}</span>
                  </p>

                  <table className="w-full text-sm mb-6 border-t border-[var(--color-border-brand)]">
                    <tbody>
                      {card.specs.map((row, i) => (
                        <tr key={i} className="border-b border-[var(--color-border-brand)]">
                          <th
                            scope="row"
                            className="text-left py-2 pr-3 text-[var(--color-muted-brand)] font-heading text-xs uppercase tracking-[0.15em] align-top w-[40%]"
                          >
                            {t(row.label, lang)}
                          </th>
                          <td className="py-2 text-[var(--color-fg)]/85">{t(row.value, lang)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <NextLink
                    href={card.cta.href}
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    {t(card.cta.label, lang)}
                  </NextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
