// app/alltagsbegleitung/page.tsx
import type { Metadata } from "next";
import AlltagsbegleitungClient from "@/components/alltagsbegleitung/AlltagsbegleitungClient";

export const metadata: Metadata = {
  title: "Alltagsbegleitung in Wuppertal & Umgebung – TANER CARE GRUPPE",
  description:
    "Alltagsbegleitung in Wuppertal & Umgebung: Unterstützung im Haushalt, bei Einkäufen, Arztterminen, Spaziergängen und Entlastung für Angehörige. Abrechnung über den Entlastungsbetrag (§45b SGB XI) – wir rechnen direkt mit der Pflegekasse ab.",
  keywords: [
    "Alltagsbegleitung Wuppertal",
    "Alltagsbegleitung Umgebung",
    "Entlastungsbetrag §45b SGB XI",
    "Unterstützung im Alltag",
    "Haushaltshilfe Wuppertal",
    "Pflegegrad 1 bis 5 Entlastung",
    "TANER CARE GRUPPE Alltagsbegleitung",
  ],
  alternates: {
    canonical: "https://taner-care.de/alltagsbegleitung",
  },
  openGraph: {
    type: "website",
    url: "https://taner-care.de/alltagsbegleitung",
    title: "Alltagsbegleitung in Wuppertal & Umgebung – TANER CARE GRUPPE",
    description:
      "Alltagsbegleitung in Wuppertal & Umgebung: Haushalt, Einkäufe, Arztbegleitung, Spaziergänge und Entlastung für Angehörige. Abrechnung über den Entlastungsbetrag (§45b SGB XI).",
    siteName: "TANER CARE GRUPPE",
    images: [
      {
        url: "https://taner-care.de/images/alltagsbegleitung/hero-alltagsbegleitung.jpg",
        width: 1600,
        height: 900,
        alt: "Alltagsbegleitung – Unterstützung im Alltag",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlltagsbegleitungPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Alltagsbegleitung",
    serviceType: "Alltagsbegleitung / Entlastungsleistungen (§45b SGB XI)",
    provider: {
      "@type": "LocalBusiness",
      name: "TANER CARE GRUPPE",
      url: "https://taner-care.de/",
      telephone: "+49 172 8804949",
      email: "info@taner-care.de",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Wuppertal & Umgebung" },
      ],
    },
    areaServed: ["Wuppertal & Umgebung"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <AlltagsbegleitungClient />
    </>
  );
}
