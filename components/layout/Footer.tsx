import * as React from "react";
import { footerNav } from "@/lib/nav";
import { t, type Lang } from "@/lib/i18n";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { Heading } from "@/components/ui/heading";

type FooterProps = {
  lang?: Lang;
};

const bio: Record<Lang, string> = {
  en: "Francisco J. Herrera — bilingual guitarist and singer-songwriter. Songs of liberation, migration, family, and faith for the communities that sing them.",
  es: "Francisco J. Herrera — guitarrista y cantautor bilingüe. Cantos de liberación, migración, familia y fe para las comunidades que los cantan.",
};

const social: { href: string; label: string }[] = [
  { href: "https://www.youtube.com/", label: "YouTube" },
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.facebook.com/", label: "Facebook" },
  { href: "https://open.spotify.com/", label: "Spotify" },
  { href: "https://music.apple.com/", label: "Apple Music" },
  { href: "https://bandcamp.com/", label: "Bandcamp" },
];

const footerLabels: Record<Lang, {
  bioHeading: string;
  navHeading: string;
  mailingHeading: string;
  mailingPlaceholder: string;
  mailingButton: string;
  copyright: string;
}> = {
  en: {
    bioHeading: "About",
    navHeading: "Explore",
    mailingHeading: "Mailing list",
    mailingPlaceholder: "your.email@example.com",
    mailingButton: "Subscribe",
    copyright: "© Francisco J. Herrera. All rights reserved.",
  },
  es: {
    bioHeading: "Acerca",
    navHeading: "Explorar",
    mailingHeading: "Lista de correo",
    mailingPlaceholder: "tu.correo@ejemplo.com",
    mailingButton: "Suscribirse",
    copyright: "© Francisco J. Herrera. Todos los derechos reservados.",
  },
};

export function Footer({ lang = "en" }: FooterProps) {
  const labels = footerLabels[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[var(--color-border-brand)] bg-[var(--color-bg)]">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-3 md:gap-8">
          <div>
            <Heading level={6} as={6} tone="fg" className="uppercase tracking-[0.2em] mb-4">
              {labels.bioHeading}
            </Heading>
            <p className="text-[var(--color-muted-brand)] leading-relaxed text-sm">
              {bio[lang]}
            </p>
          </div>

          <nav aria-label="Footer">
            <Heading level={6} as={6} tone="fg" className="uppercase tracking-[0.2em] mb-4">
              {labels.navHeading}
            </Heading>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{t(item.label, lang)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Heading level={6} as={6} tone="fg" className="uppercase tracking-[0.2em] mb-4">
              {labels.mailingHeading}
            </Heading>
            <form className="flex flex-col gap-3 sm:flex-row">

              <input
                type="email"
                disabled
                placeholder={labels.mailingPlaceholder}
                className="flex-1 border border-[var(--color-border-brand)] bg-transparent px-3 py-2 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted-brand)] focus:border-[var(--color-accent-brand)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                aria-label={labels.mailingHeading}
              />
              <button
                type="submit"
                disabled
                className="font-heading uppercase tracking-wide border border-[var(--color-button-border)] bg-[var(--color-button-bg)] text-[var(--color-button-fg)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-xs disabled:cursor-not-allowed disabled:opacity-60"
              >
                {labels.mailingButton}
              </button>
            </form>

            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em]">
              {social.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--color-border-brand)] py-6 text-xs text-[var(--color-muted-brand)] md:flex-row md:items-center">
          <span>
            {labels.copyright} <span className="opacity-70">— {year}</span>
          </span>
          <span className="font-heading uppercase tracking-[0.2em] flex items-center gap-2">
            <span className={lang === "en" ? "text-[var(--color-accent-brand)]" : ""}>EN</span>
            <span className="opacity-50">|</span>
            <span className={lang === "es" ? "text-[var(--color-accent-brand)]" : ""}>ES</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
