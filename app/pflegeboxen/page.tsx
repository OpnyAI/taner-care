import type { Metadata } from "next";
import PflegeboxenClient from "@/components/pflegeboxen/PflegeboxenClient";

export const metadata: Metadata = {
  title: "Pflegeboxen – Pflegehilfsmittel im Wert von 42 € – TANER CARE GRUPPE",
  description:
    "Pflegeboxen für Pflegebedürftige mit Pflegegrad 1–5: Pflegehilfsmittel im Wert von 42 € monatlich, ohne eigene Kosten. Antrag, Genehmigung, Lieferung und Abrechnung mit der Pflegekasse übernehmen wir.",
  keywords: [
    "Pflegeboxen",
    "Pflegehilfsmittel 42 Euro",
    "Pflegehilfsmittel zum Verbrauch",
    "Pflegebox Pflegegrad",
    "Pflegehilfsmittel kostenlos",
    "Pflegeboxen Wuppertal",
    "Pflegehilfsmittel nach §40 SGB XI",
    "TANER CARE GRUPPE Pflegeboxen",
  ],
  alternates: {
    canonical: "https://taner-care.de/pflegeboxen",
  },
  openGraph: {
    type: "website",
    url: "https://taner-care.de/pflegeboxen",
    title: "Pflegeboxen – 42 € Pflegehilfsmittel monatlich, ohne eigene Kosten",
    description:
      "Monatliche Pflegeboxen mit Einmalhandschuhen, Desinfektion, Bettschutzeinlagen und mehr – für Pflegebedürftige mit Pflegegrad 1–5. Antrag und Abrechnung direkt über die Pflegekasse.",
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
  return <PflegeboxenClient />;
}
