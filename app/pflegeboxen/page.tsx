// app/pflegeboxen/page.tsx
import type { Metadata } from "next";
import PflegeboxenClient from "@/components/pflegeboxen/PflegeboxenClient";

export const PFLEGEBOXEN_EXTERNAL_URL = "https://tanercare.boxkonfigurator.de/";

export const metadata: Metadata = {
  title: "Pflegeboxen – 42 € Pflegehilfsmittel monatlich – TANER CARE GRUPPE",
  description:
    "Pflegeboxen für Pflegebedürftige mit Pflegegrad 1–5: Pflegehilfsmittel zum Verbrauch im Wert von 42 € monatlich – ohne Zuzahlung. Antrag, Genehmigung, Lieferung und Abrechnung mit der Pflegekasse übernehmen wir. Bundesweit verfügbar.",
  keywords: [
    "Pflegeboxen",
    "Pflegehilfsmittel 42 Euro",
    "Pflegehilfsmittel zum Verbrauch",
    "Pflegebox Pflegegrad",
    "Pflegehilfsmittel kostenlos",
    "Pflegehilfsmittel nach §40 SGB XI",
    "TANER CARE GRUPPE Pflegeboxen",
  ],
  alternates: {
    canonical: "https://taner-care.de/pflegeboxen",
  },
  openGraph: {
    type: "website",
    url: "https://taner-care.de/pflegeboxen",
    title: "Pflegeboxen – 42 € Pflegehilfsmittel monatlich, ohne Zuzahlung",
    description:
      "Monatliche Pflegeboxen mit Einmalhandschuhen, Desinfektion, Bettschutzeinlagen und mehr – für Pflegegrad 1–5. Bundesweit verfügbar. Abrechnung direkt über die Pflegekasse.",
    siteName: "TANER CARE GRUPPE",
    images: [
      {
        url: "https://taner-care.de/images/pflegeboxen/hero-pflegeboxen.jpg",
        width: 1600,
        height: 900,
        alt: "Pflegeboxen – Pflegehilfsmittel bequem nach Hause",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PflegeboxenPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pflegeboxen (Pflegehilfsmittel zum Verbrauch)",
    serviceType: "Pflegehilfsmittel zum Verbrauch (§40 Abs. 2 SGB XI)",
    provider: {
      "@type": "LocalBusiness",
      name: "TANER CARE GRUPPE",
      url: "https://taner-care.de/",
      telephone: "+49 172 8804949",
      email: "info@taner-care.de",
    },
    areaServed: ["Deutschland"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: PFLEGEBOXEN_EXTERNAL_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PflegeboxenClient />
    </>
  );
}
