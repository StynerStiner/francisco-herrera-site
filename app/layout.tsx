import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

// Editorial serif pairing — chosen for readability + classy artist feel:
//   Heading / navbar / announcement → Playfair Display (editorial display serif)
//   Body paragraphs                  → Lora (humanist serif, very readable)
//   Signature                        → Silently (in globals.css)
// Envato display faces in public/fonts/fonts-envato/ are reserved for
// future accent use only — never body.
const lora = Lora({
  variable: "--font-body-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${lora.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
