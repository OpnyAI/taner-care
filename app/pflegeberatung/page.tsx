// app/pflegeberatung/page.tsx
import type { Metadata } from "next";
import PflegeberatungClient from "@/components/pflegeberatung/PflegeberatungClient";

export const metadata: Metadata = {
  title: "Pflegeberatung nach §37.3 SGB XI – TANER CARE GRUPPE",
  description:
    "Pflegeberatung nach §37.3 SGB XI: gesetzlich anerkannte Beratungsbesuche für Pflegegeld-Empfänger – ruhig, verständlich und 100 % kostenfrei. Regional in Wuppertal & Umgebung, auf Wunsch auch im erweiterten Radius bis Köln. Direkte Abrechnung mit der Pflegekasse.",
  keywords: [
    "Pflegeberatung §37.3",
    "Pflegeberatung Wuppertal",
    "Beratungsbesuch Pflegegeld",
    "Pflichtbesuch Pflegegrad",
    "Pflegekasse Nachweis Beratung",
    "Pflegeberatung vor Ort",
    "TANER CARE GRUPPE Pflegeberatung",
  ],
  alternates: {
    canonical: "https://taner-care.de/pflegeberatung",
  },
  openGraph: {
    type: "website",
    url: "https://taner-care.de/pflegeberatung",
    title: "Pflegeberatung nach §37.3 SGB XI – TANER CARE GRUPPE",
    description:
      "Gesetzlich anerkannte Beratungsbesuche für Pflegegeld-Empfänger – ruhig, verständlich und 100 % kostenfrei. Regional in Wuppertal & Umgebung, auf Wunsch bis Köln.",
    siteName: "TANER CARE GRUPPE",
    images: [
      {
        url: "https://taner-care.de/images/pflegeberatung/hero-pflegeberatung.jpg",
        width: 1600,
        height: 900,
        alt: "Pflegeberatung nach §37.3 SGB XI – Beratungssituation",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PflegeberatungPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pflegeberatung nach §37.3 SGB XI",
    provider: {
      "@type": "LocalBusiness",
      name: "TANER CARE GRUPPE",
      url: "https://taner-care.de/",
      telephone: "+49 172 8804949",
      email: "info@taner-care.de",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Wuppertal & Umgebung" },
        { "@type": "AdministrativeArea", name: "Köln (erweiterter Radius)" },
      ],
    },
    areaServed: ["Wuppertal & Umgebung", "Köln (erweiterter Radius)"],
    serviceType: "Beratungsbesuch nach §37.3 SGB XI",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PflegeberatungClient />
    </>
  );
}
