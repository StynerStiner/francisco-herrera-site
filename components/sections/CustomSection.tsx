// Guitare source: sections/home-custom-section.liquid
// - Wrapper "home-custom-section-wrapper" + "dt-sc-custom-block" lines 1-76
// - Per-block: heading / sub-heading / description / CTA (lines 28-40)
// - Reverse-column toggle ".dt-sc-reverse-columns" (line 25); demo uses both
//   reverse=true and reverse=false alternately (templates/index.json blocks 0 & 1)
// - Schema: max 2 blocks (line 267), 50/50 default split (line 451)

import * as React from "react";
import NextLink from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";
import type { CustomSectionContent } from "@/lib/content/home";

type Props = {
  content: CustomSectionContent;
  lang?: Lang;
};

export function CustomSection({ content, lang = "en" }: Props) {
  return (
    <section className="bg-[var(--color-bg)] py-20 lg:py-24">
      <div className="mx-auto max-w-[var(--container-content)] px-6">
        <div className="text-center mb-14">
          <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--color-muted-brand)] mb-3 inline-block">
            {t(content.sectionEyebrow, lang)}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl !text-white font-normal">
            {t(content.sectionTitle, lang)}
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {content.blocks.map((block) => (
            <div
              key={block.id}
              className={[
                "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                block.reverse ? "lg:[&>*:first-child]:order-2" : "",
              ].join(" ")}
            >
              <div className="relative overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={block.image}
                  alt={t(block.imageAlt, lang)}
                  className="w-full h-auto aspect-[4/3] lg:aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className={block.reverse ? "lg:pr-8" : "lg:pl-8"}>
                <span className="font-heading text-xs uppercase tracking-[0.4em] text-white mb-4 inline-block">
                  {t(block.eyebrow, lang)}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl !text-white mb-5 font-normal !leading-tight">
                  {t(block.title, lang)}
                </h3>
                <p className="text-[var(--color-muted-brand)] text-base lg:text-lg mb-8 leading-relaxed">
                  {t(block.body, lang)}
                </p>
                <NextLink
                  href={block.cta.href}
                  className={buttonVariants({ variant: "outline", size: "md" })}
                >
                  {t(block.cta.label, lang)}
                </NextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
