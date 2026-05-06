import type { Metadata } from "next";
import { Montserrat, Catamaran } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font — replaces the Google Fonts <link> tags the
// Guitare theme injected at runtime via Shopify's font_picker.
// Heading: matches settings_data.header_font = "montserrat_n4" → Montserrat 400
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Body: matches settings_data.base_font = "catamaran_n4" → Catamaran 400
const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Francisco J. Herrera",
    template: "%s — Francisco J. Herrera",
  },
  description:
    "Bilingual guitarist and singer-songwriter — songs of liberation, migration, family, and faith.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${catamaran.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
