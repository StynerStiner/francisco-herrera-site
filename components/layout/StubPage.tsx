import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { t, type Lang, type Localized } from "@/lib/i18n";

const COMING_SOON: Localized = {
  en: "Coming soon",
  es: "Próximamente",
};

type StubPageProps = {
  title: Localized;
  /** Optional second-line context (e.g. "Album: honor-migrante"). */
  detail?: string;
  lang?: Lang;
};

/**
 * Shared placeholder body for every non-home route in this foundation pass.
 * Renders Header + Footer + a single Section containing the page name and
 * "Coming soon / Próximamente" via t() — default lang "en".
 */
export function StubPage({ title, detail, lang = "en" }: StubPageProps) {
  return (
    <>
      <Header lang={lang} />
      <main>
        <Section className="min-h-[60vh]">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-6">
              {t(title, "en")}
              {lang === "en" && t(title, "en") !== t(title, "es")
                ? ` / ${t(title, "es")}`
                : ""}
            </span>
            <Heading level={1} tone="fg" className="!text-4xl md:!text-5xl mb-6 font-light">
              {t(title, lang)}
            </Heading>
            {detail ? (
              <p className="text-[var(--color-muted-brand)] mb-4 font-mono text-sm">{detail}</p>
            ) : null}
            <p className="text-[var(--color-fg)]/80">
              {t(COMING_SOON, lang)} / {t(COMING_SOON, lang === "en" ? "es" : "en")}
            </p>
          </div>
        </Section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
