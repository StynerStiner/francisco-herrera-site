// Guitare source: sections/home-deal-banner.liquid
// - Wrapper "dt-sc-section-wrapper" with optional bg image lines 1-78
// - Inner ".dt-sc-deal-banner-section" 75% desktop / 100% mobile (line 115)
// - Content: subtitle (gold) / title / description / CTA (lines 42-50, 68)
// - Schema: heading default "Deal banner" (line 478), subtitle/desc/CTA defaults
// CSS reference: dt-custom.css.liquid section-scoped.

import * as React from "react";
import NextLink from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";
import type { DealBannerContent } from "@/lib/content/home";

type Props = {
  content: DealBannerContent;
  lang?: Lang;
};

export function DealBanner({ content, lang = "en" }: Props) {
  return (
    <section
      aria-label={t(content.title, lang)}
      className="relative w-full overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={content.background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto max-w-[var(--container-content)] px-6 py-24 lg:py-28 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="font-heading text-xs sm:text-sm uppercase tracking-[0.4em] text-white mb-4 inline-block">
            {t(content.eyebrow, lang)}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl !text-[var(--color-fg)] mb-6 font-light !leading-tight">
            {t(content.title, lang)}
          </h2>
          <p className="text-[var(--color-fg)]/85 text-base sm:text-lg mb-8 leading-relaxed">
            {t(content.body, lang)}
          </p>
          <NextLink
            href={content.cta.href}
            className={buttonVariants({ variant: "outline", size: "md" })}
          >
            {t(content.cta.label, lang)}
          </NextLink>
        </div>
      </div>
    </section>
  );
}
