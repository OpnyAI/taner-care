import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCtaBar from "@/components/cta/ContactCtaBar";
import MobileStickyCtaBar from "@/components/cta/MobileStickyCtaBar";

/* Google Fonts – Poppins (Header / Überschriften), Open Sans (Fließtext) */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
});

/* SEO-Grundwerte für die gesamte Website */
export const metadata: Metadata = {
  metadataBase: new URL("https://taner-care.de"),
  title: {
    default: "TANER CARE GRUPPE – Pflege & Alltagsbegleitung in Wuppertal",
    template: "%s | TANER CARE GRUPPE",
  },
  description:
    "Die TANER CARE GRUPPE bietet Alltagsbegleitung, Pflegeberatung nach §37.3 SGB XI und kostenfreie Pflegeboxen. Menschlich, zuverlässig und kompetent – alles aus einer Hand.",
  keywords: [
    "Alltagsbegleitung Wuppertal",
    "Pflegeberatung §37.3",
    "Pflegeberatung 37.3 Wuppertal",
    "Pflegeboxen 42 Euro",
    "Pflegehilfsmittel kostenlos",
    "Pflegedienst Wuppertal",
    "Pflegegrad Unterstützung",
    "TANER CARE GRUPPE",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://taner-care.de/",
    siteName: "TANER CARE GRUPPE",
    title: "TANER CARE GRUPPE – Pflege & Alltagsbegleitung in Wuppertal",
    description:
      "Pflege & Alltagsunterstützung für Wuppertal und Umgebung. Pflegeboxen bundesweit und Pflegeberatung als Hausbesuch – verständlich & zuverlässig.",
  },
  alternates: {
    canonical: "https://taner-care.de/",
  },
};

/** Globales LocalBusiness JSON-LD (für Local SEO / Google Rich Results)
 *  Wichtig: Keine Daten erfinden. Daher: keine Straße/PLZ/Öffnungszeiten, solange sie nicht sicher vorliegen.
 */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeHealthCare"],
  name: "TANER CARE GRUPPE",
  url: "https://taner-care.de",
  description:
    "Alltagsbegleitung in Wuppertal & Umgebung, Pflegeberatung nach §37.3 SGB XI als Hausbesuch (auf Wunsch bis Köln) sowie Pflegeboxen bundesweit.",
  telephone: "+49 172 8804949",
  email: ["info@taner-care.de", "dilara@taner-care.de"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wuppertal",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Wuppertal" },
    { "@type": "AdministrativeArea", name: "Wuppertal & Umgebung" },
    { "@type": "City", name: "Köln" },
    { "@type": "Country", name: "Deutschland" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+49 172 8804949",
      contactType: "customer service",
      availableLanguage: ["de"],
      areaServed: ["DE"],
    },
    {
      "@type": "ContactPoint",
      email: "info@taner-care.de",
      contactType: "customer service",
      availableLanguage: ["de"],
      areaServed: ["DE"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Alltagsbegleitung",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Alltagsbegleitung Taner",
            url: "https://taner-care.de/alltagsbegleitung",
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Pflegeberatung",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Pflegeberatung nach §37.3 SGB XI",
            url: "https://taner-care.de/pflegeberatung",
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Pflegeboxen",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Pflegeboxen – Pflegehilfsmittel (42 € monatlich)",
            url: "https://taner-care.de/pflegeboxen",
          },
        ],
      },
    ],
  },
};

/* Root Layout – umschließt jede Seite mit Header + Footer */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${poppins.variable} ${openSans.variable} bg-white text-textDark`}
      >
        {/* Globales JSON-LD (LocalBusiness) */}
        <Script
          id="localbusiness-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <Header />

        {/* Main Content – Padding, damit nichts unter dem fixen Header verschwindet */}
        <main className="min-h-[60vh] pt-20 md:pt-24">{children}</main>

        {/* Mobile Sticky CTA-Bar (nur auf Smartphones sichtbar) */}
        <MobileStickyCtaBar />

        {/* Globale CTA-Leiste: Call + WhatsApp (unterhalb des Seiteninhalts, Desktop & Tablet relevant) */}
        <ContactCtaBar />

        {/* Sentinel vor dem Footer – dient als Trigger, um die mobile Sticky-Bar auszublenden */}
        <div id="footer-sentinel" className="h-1 w-full" />

        <Footer />
      </body>
    </html>
  );
}
