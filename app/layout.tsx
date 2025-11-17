import "./globals.css";
import type { Metadata } from "next";
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
      "Pflege & Alltagsunterstützung für Wuppertal und Umgebung. Bundesweite Pflegeboxen und digitale Pflegeberatung.",
  },
  alternates: {
    canonical: "https://taner-care.de/",
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
