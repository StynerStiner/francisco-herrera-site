/**
 * Tiny in-repo bilingual helper. No next-intl, no routed locales yet.
 * Future task can replace this with proper i18n routing.
 */
export type Localized = { en: string; es: string };
export type Lang = "en" | "es";

export function t(value: Localized, lang: Lang = "en"): string {
  return value[lang];
}
