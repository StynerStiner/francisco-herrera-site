import type { Localized } from "@/lib/i18n";

export type NavItem = {
  href: string;
  label: Localized;
};

/**
 * Primary navigation. Order matches the brief's spec.
 * Both EN/ES labels supplied; language switching is visual-only for now.
 */
export const primaryNav: NavItem[] = [
  { href: "/music", label: { en: "Music", es: "Música" } },
  { href: "/store", label: { en: "Store", es: "Tienda" } },
  { href: "/shows", label: { en: "Shows", es: "Presentaciones" } },
  { href: "/about", label: { en: "About", es: "Acerca" } },
  { href: "/blog", label: { en: "Blog", es: "Blog" } },
  { href: "/contact", label: { en: "Contact", es: "Contacto" } },
  { href: "/booking", label: { en: "Booking", es: "Contrátanos" } },
  { href: "/videos", label: { en: "Videos", es: "Videos" } },
  { href: "/epk", label: { en: "EPK", es: "EPK" } },
];

export const footerNav: NavItem[] = [
  ...primaryNav,
  { href: "/pensamientos", label: { en: "Pensamientos", es: "Pensamientos" } },
  { href: "/donate", label: { en: "Donate", es: "Donar" } },
];
