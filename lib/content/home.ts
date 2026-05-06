import type { Localized } from "@/lib/i18n";

type ThemeCard = {
  id: string;
  title: Localized;
  blurb: Localized;
};

type HomeContent = {
  hero: {
    eyebrow: Localized;
    title: Localized;
    tagline: Localized;
    ctaPrimary: Localized;
    ctaSecondary: Localized;
  };
  catalogIntro: Localized;
  themes: ThemeCard[];
};

export const homeContent: HomeContent = {
  hero: {
    eyebrow: { en: "Public Art / Arte Público", es: "Arte Público" },
    title: { en: "Francisco J. Herrera", es: "Francisco J. Herrera" },
    tagline: {
      en: "Songs of liberation, migration, family, and faith — sung in churches, plazas, schools, picket lines, and everywhere people are organizing.",
      es: "Cantos de liberación, migración, familia y fe — cantados en iglesias, plazas, escuelas, líneas de piquete, y donde la gente se organiza.",
    },
    ctaPrimary: { en: "Listen", es: "Escuchar" },
    ctaSecondary: { en: "Book Now", es: "Contrátanos" },
  },
  catalogIntro: {
    en: "Music for movements, families, and the journey home.",
    es: "Música para los movimientos, las familias, y el camino a casa.",
  },
  themes: [
    {
      id: "migration",
      title: { en: "Migration & Liberation", es: "Migración y Liberación" },
      blurb: {
        en: "Honor Migrante and the songs of the journey.",
        es: "Honor Migrante y los cantos del camino.",
      },
    },
    {
      id: "family",
      title: { en: "Children & Family", es: "Niños y Familia" },
      blurb: {
        en: "Francisco y L@s Niñ@s — songs in Spanish for the whole family.",
        es: "Francisco y L@s Niñ@s — canciones en español para toda la familia.",
      },
    },
    {
      id: "faith",
      title: { en: "Faith & Reflection", es: "Fe y Reflexión" },
      blurb: {
        en: "Songs for churches, vigils, and the work of justice.",
        es: "Cantos para iglesias, vigilias, y el trabajo de la justicia.",
      },
    },
  ],
};
