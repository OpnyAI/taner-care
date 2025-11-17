import type { Metadata } from "next";
import AlltagsbegleitungClient from "@/components/alltagsbegleitung/AlltagsbegleitungClient";

export const metadata: Metadata = {
  title: "Alltagsbegleitung in Wuppertal – TANER CARE GRUPPE",
  description:
    "Alltagsbegleitung Taner der TANER CARE GRUPPE in Wuppertal: Unterstützung im Haushalt, bei Einkäufen, Arztterminen, Spaziergängen und Entlastung für Angehörige. 131 € monatlich über den Entlastungsbetrag (§45b SGB XI) – direkte Abrechnung mit der Pflegekasse.",
  keywords: [
    "Alltagsbegleitung Wuppertal",
    "Alltagsbegleiter Wuppertal",
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
    title: "Alltagsbegleitung in Wuppertal – TANER CARE GRUPPE",
    description:
      "Alltagsbegleitung Taner in Wuppertal: Haushalt, Einkäufe, Arztbegleitung, Spaziergänge und Entlastung für Angehörige. 131 € monatlich über den Entlastungsbetrag (§45b SGB XI).",
    siteName: "TANER CARE GRUPPE",
    images: [
      {
        url: "https://taner-care.de/images/alltagsbegleitung/hero-alltagsbegleitung.jpg",
        width: 1600,
        height: 900,
        alt: "Alltagsbegleitung Taner – Unterstützung im Alltag",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlltagsbegleitungPage() {
  return <AlltagsbegleitungClient />;
}
