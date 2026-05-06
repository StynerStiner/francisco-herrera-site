import * as React from "react";
import { primaryNav } from "@/lib/nav";
import { t, type Lang } from "@/lib/i18n";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";

type HeaderProps = {
  lang?: Lang;
};

/**
 * Sticky site header. Wordmark left, primary nav center/right (≥lg),
 * EN | ES toggle on the far right. Mobile (<lg) collapses the nav into
 * a hamburger button — the button has no open/close behavior wired yet.
 */
export function Header({ lang = "en" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border-brand)] bg-[var(--color-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg)]/80">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            unstyled
            className="font-heading text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-fg)] hover:text-[var(--color-accent-brand)] transition-colors"
            aria-label="Francisco J. Herrera — Home"
          >
            <span className="text-[var(--color-accent-brand)]">F</span>rancisco{" "}
            <span className="hidden sm:inline">J. Herrera</span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-7"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                unstyled
                className="font-heading text-xs uppercase tracking-[0.18em] text-[var(--color-muted-brand)] hover:text-[var(--color-accent-brand)] transition-colors"
              >
                {t(item.label, lang)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LangToggle lang={lang} />
            <button
              type="button"
              aria-label="Open menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-[var(--color-border-brand)] text-[var(--color-fg)] hover:text-[var(--color-accent-brand)] hover:border-[var(--color-accent-brand)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
                className="size-5"
                aria-hidden="true"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function LangToggle({ lang }: { lang: Lang }) {
  // Visual-only: no state wired (per brief).
  const activeClass = "text-[var(--color-accent-brand)]";
  const idleClass = "text-[var(--color-muted-brand)] hover:text-[var(--color-accent-brand)]";
  return (
    <span
      aria-label="Language"
      className="font-heading text-xs uppercase tracking-[0.2em] flex items-center gap-2"
    >
      <span className={lang === "en" ? activeClass : idleClass}>EN</span>
      <span aria-hidden="true" className="text-[var(--color-muted-brand)]/50">|</span>
      <span className={lang === "es" ? activeClass : idleClass}>ES</span>
    </span>
  );
}
