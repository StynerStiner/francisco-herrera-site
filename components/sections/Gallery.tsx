import * as React from "react";
import { t, type Lang } from "@/lib/i18n";
import type { GalleryContent } from "@/lib/content/home";

type Props = {
  content: GalleryContent;
  lang?: Lang;
};

export function Gallery({ content, lang = "en" }: Props) {
  return (
    <section
      className="relative w-full bg-[var(--color-bg-deeper)] border-t border-black"
      aria-label={lang === "en" ? "Gallery" : "Galería"}
    >
      {/* Full-bleed cinematic banner — same aspect ratios as StageBanner */}
      <div className="relative w-full overflow-hidden bg-black aspect-[12/5] sm:aspect-[16/6] lg:aspect-[24/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={content.wideImage}
          alt={t(content.wideImageAlt, lang)}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Soft side-vignette — frames the image without darkening the
            center where the band is. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.10)_18%,rgba(0,0,0,0)_42%,rgba(0,0,0,0)_58%,rgba(0,0,0,0.10)_82%,rgba(0,0,0,0.45)_100%)]"
        />

        {/* Bottom fade into the next section. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--color-bg)]"
        />

        {/* Cursive watermark — corner only. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-4 lg:left-12 lg:top-8 z-10 select-none"
        >
          <p className="font-signature text-5xl lg:text-7xl text-[var(--color-accent-brand)]/45 -rotate-12 leading-none [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
            {t(content.watermark, lang)}
          </p>
        </div>

        {/* Portrait overlay (lg+) — magazine-inset on the right with a
            gentle tilt + gold border + heavy drop-shadow. Reverts to flat
            on hover for a subtle "lift" interaction. */}
        <div className="hidden lg:block absolute right-12 xl:right-24 top-1/2 -translate-y-1/2 z-20">
          <figure className="group relative border-2 border-[var(--color-accent-brand)]/55 bg-black p-2 [filter:drop-shadow(0_30px_40px_rgba(0,0,0,0.7))_drop-shadow(0_8px_16px_rgba(0,0,0,0.5))] -rotate-2 hover:rotate-0 transition-transform duration-[700ms] ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.portraitImage}
              alt={t(content.portraitImageAlt, lang)}
              className="block w-[18rem] xl:w-[22rem] aspect-[3/4] object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </div>

      {/* Portrait beneath the banner (below lg) — pulled up so it overlaps
          the bottom edge of the banner like a magazine inset. */}
      <div className="lg:hidden -mt-20 sm:-mt-28 mx-auto max-w-xs sm:max-w-sm px-6 relative z-10">
        <figure className="border-2 border-[var(--color-accent-brand)]/55 bg-black p-2 [filter:drop-shadow(0_20px_30px_rgba(0,0,0,0.6))]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={content.portraitImage}
            alt={t(content.portraitImageAlt, lang)}
            className="block w-full aspect-[3/4] object-cover"
            loading="lazy"
          />
        </figure>
      </div>

      {/* Spacer below mobile portrait so the next section doesn't crash
          into it. Hidden at lg+ where the portrait sits inside the banner. */}
      <div aria-hidden="true" className="lg:hidden h-16 sm:h-20" />
    </section>
  );
}
