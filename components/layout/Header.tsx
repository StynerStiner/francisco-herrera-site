"use client";

// Guitare source: sections/header.liquid lines 1-211 (top bar + logo + nav + icon row)
// Top bar with contact/social: liquid 137-165. Logo+nav row: 177-211.
// Icon row classes: .CartCount (line 69), account/wishlist/search (42-114).

import * as React from "react";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import { t, type Lang } from "@/lib/i18n";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import NextLink from "next/link";

type HeaderProps = {
  lang?: Lang;
};

const announcementCopy: Record<Lang, string> = {
  en: "Free shipping on CDs · Book Francisco for your event",
  es: "Envío gratis en CDs · Contrata a Francisco para tu evento",
};

const topBarLeft: Record<Lang, string> = {
  en: "info@franciscoherrera.com · Bay Area, California",
  es: "info@franciscoherrera.com · Área de la Bahía, California",
};

export function Header({ lang = "en" }: HeaderProps) {
  const [announcementOpen, setAnnouncementOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="relative z-40 w-full bg-[var(--color-bg)] border-b border-[var(--color-border-brand)]">
      {/* Announcement bar — Guitare ".dt-sc-header-top-bar" (header.liquid 137-165) */}
      {announcementOpen && (
        <div className="bg-[var(--color-button-bg)] border-b border-[var(--color-border-brand)]">
          <Container>
            <div className="flex items-center justify-between gap-4 py-2.5 text-sm">
              <span className="hidden md:inline font-ui font-medium text-[var(--color-fg)]">
                {topBarLeft[lang]}
              </span>
              <span className="font-ui font-medium text-[var(--color-fg)] text-center flex-1 md:flex-none">
                <span className="text-[var(--color-accent-brand)]">★</span>{" "}
                {announcementCopy[lang]}{" "}
                <span className="text-[var(--color-accent-brand)]">★</span>
              </span>
              <button
                type="button"
                aria-label="Dismiss announcement"
                onClick={() => setAnnouncementOpen(false)}
                className="text-[var(--color-muted-brand)] hover:text-[var(--color-accent-brand)] transition-colors shrink-0"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            </div>
          </Container>
        </div>
      )}

      {/* Logo + Nav + Icons — Guitare ".dt-sc-header-logo-sec" + "#AccessibleNav" (header.liquid 177-211) */}
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <NextLink
            href="/"
            aria-label="Francisco J. Herrera — Home"
            className="font-signature text-4xl sm:text-5xl leading-none text-[var(--color-accent-brand)] [-webkit-text-stroke:0.75px_currentColor] hover:opacity-80 transition-opacity shrink-0"
          >
            Francisco<span className="hidden sm:inline"> J. Herrera</span>
          </NextLink>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-7 flex-1 justify-center"
          >
            {primaryNav.slice(0, 7).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                unstyled
                className="font-ui font-medium text-[15px] text-white hover:text-[var(--color-accent-brand)] transition-colors"
              >
                {t(item.label, lang)}
              </Link>
            ))}
          </nav>

          {/* Icon row — Search + Donate + Cart (custom icon set from /public/icons) */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <IconButton label={lang === "en" ? "Search" : "Buscar"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/Search/Main%20File/SVG/Glyph/search,%20magnifying,%20zoom,%20find,%20exploration.svg"
                alt=""
                aria-hidden="true"
                className="h-6 w-6 invert"
              />
            </IconButton>
            <IconLink href="/donate" label={lang === "en" ? "Donate" : "Donar"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/shopping-mail_png/Assistance.png"
                alt=""
                aria-hidden="true"
                className="h-6 w-6 invert"
              />
            </IconLink>
            <IconLink href="/store" label={lang === "en" ? "Cart" : "Carrito"} badge="0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/ecommerce_png/Checkout.png"
                alt=""
                aria-hidden="true"
                className="h-6 w-6 invert"
              />
            </IconLink>
            <span className="hidden sm:flex items-center gap-2 ml-2 pl-3 border-l border-[var(--color-border-brand)]">
              <LangToggle lang={lang} />
            </span>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center text-[var(--color-fg)] hover:text-[var(--color-accent-brand)] transition-colors"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-border-brand)] bg-[var(--color-bg)]">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col py-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  unstyled
                  className="font-ui font-medium text-base text-white hover:text-[var(--color-accent-brand)] transition-colors py-3 border-b border-[var(--color-border-brand)] last:border-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.label, lang)}
                </Link>
              ))}
              <div className="pt-4">
                <LangToggle lang={lang} />
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

function IconButton({
  children,
  label,
  badge,
}: {
  children: React.ReactNode;
  label: string;
  badge?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative inline-flex h-10 w-10 items-center justify-center text-[var(--color-fg)] hover:text-[var(--color-accent-brand)] transition-colors"
    >
      {children}
      {badge !== undefined && (
        <span
          aria-hidden="true"
          className="absolute -top-0.5 -right-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent-brand)] px-1 text-[10px] font-medium leading-none text-[var(--color-bg)]"
        >
          {badge}
        </span>
      )}
    </button>
  );
}

function IconLink({
  href,
  children,
  label,
  badge,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  badge?: string;
}) {
  return (
    <NextLink
      href={href}
      aria-label={label}
      className="relative inline-flex h-10 w-10 items-center justify-center text-[var(--color-fg)] hover:text-[var(--color-accent-brand)] transition-colors"
    >
      {children}
      {badge !== undefined && (
        <span
          aria-hidden="true"
          className="absolute -top-0.5 -right-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent-brand)] px-1 text-[10px] font-medium leading-none text-[var(--color-bg)]"
        >
          {badge}
        </span>
      )}
    </NextLink>
  );
}

function LangToggle({ lang }: { lang: Lang }) {
  const activeClass = "text-[var(--color-accent-brand)]";
  const idleClass = "text-[var(--color-muted-brand)] hover:text-[var(--color-accent-brand)]";
  return (
    <span
      aria-label="Language"
      className="font-ui font-semibold text-sm flex items-center gap-2"
    >
      <span className={lang === "en" ? activeClass : idleClass}>EN</span>
      <span aria-hidden="true" className="text-[var(--color-muted-brand)]/50">|</span>
      <span className={lang === "es" ? activeClass : idleClass}>ES</span>
    </span>
  );
}
