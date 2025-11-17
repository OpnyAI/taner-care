import type { Metadata } from "next";
import PflegeberatungClient from "@/components/pflegeberatung/PflegeberatungClient";

export const metadata: Metadata = {
  title: "Pflegeberatung nach §37.3 SGB XI – TANER CARE GRUPPE",
  description:
    "Pflegeberatung nach §37.3 SGB XI in Wuppertal: anerkannte Beratungsbesuche für Pflegegeld-Empfänger, verständlich erklärt – vor Ort oder per Video. Direkte Abrechnung mit der Pflegekasse.",
  keywords: [
    "Pflegeberatung §37.3",
    "Pflegeberatung Wuppertal",
    "Beratungsbesuch Pflegegeld",
    "Pflichtbesuch Pflegegrad",
    "Pflegekasse Nachweis Beratung",
    "Pflegeberatung vor Ort",
    "Pflegeberatung per Video",
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
      "Pflegeberatung nach §37.3 in Wuppertal: gesetzlich anerkannte Beratungsbesuche für Pflegegeld-Empfänger – ruhig, verständlich und ohne Mehrkosten.",
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
  return <PflegeberatungClient />;
}
