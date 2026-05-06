import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import NextLink from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { homeContent } from "@/lib/content/home";
import { t, type Lang } from "@/lib/i18n";

const lang: Lang = "en";

export default function HomePage() {
  const { hero, catalogIntro, themes } = homeContent;

  return (
    <>
      <Header lang={lang} />

      <main>
        {/* HERO ───────────────────────────────────────────────────── */}
        <section className="relative bg-[var(--color-bg)]">
          <Container>
            <div className="flex min-h-[70vh] flex-col items-start justify-center py-24 lg:py-32 max-w-3xl">
              <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--color-accent-brand)] mb-6">
                {t(hero.eyebrow, lang)}
              </span>
              <Heading level={1} tone="fg" className="!text-4xl md:!text-5xl lg:!text-6xl mb-6 font-light leading-tight">
                {t(hero.title, lang)}
              </Heading>
              <p className="text-[var(--color-fg)]/80 text-lg leading-[var(--line-height-base)] mb-10 max-w-2xl">
                {t(hero.tagline, lang)}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <NextLink
                  href="/music"
                  className={buttonVariants({ variant: "primary", size: "md" })}
                >
                  {t(hero.ctaPrimary, lang)}
                </NextLink>
                <NextLink
                  href="/booking"
                  className={buttonVariants({ variant: "outline", size: "md" })}
                >
                  {t(hero.ctaSecondary, lang)}
                </NextLink>
              </div>
            </div>
          </Container>
        </section>

        {/* CATALOG TEASER ─────────────────────────────────────────── */}
        <Section>
          <div className="mb-12 max-w-2xl">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-[var(--color-accent-brand)] mb-3 inline-block">
              Catalog
            </span>
            <Heading level={2} tone="fg" className="!text-3xl md:!text-4xl font-light leading-tight">
              {t(catalogIntro, lang)}
            </Heading>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {themes.map((theme) => (
              <Card key={theme.id} className="border border-[var(--color-border-brand)] bg-[var(--color-card-bg)] hover:border-[var(--color-accent-brand)] transition-colors">
                <CardHeader>
                  <CardTitle className="font-heading uppercase tracking-[0.18em] text-[var(--color-fg)]">
                    {t(theme.title, lang)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-muted-brand)] text-sm leading-relaxed">
                    {t(theme.blurb, lang)}
                  </p>
                </CardContent>
                <CardFooter className="bg-transparent border-t border-[var(--color-border-brand)] pt-4">
                  <Link
                    href="/music"
                    className="font-heading text-xs uppercase tracking-[0.2em]"
                  >
                    {lang === "en" ? "Explore →" : "Explorar →"}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
