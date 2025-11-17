import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – TANER CARE GRUPPE",
  description:
    "Kontakt zur TANER CARE GRUPPE: Alltagsbegleitung, Pflegeberatung nach §37.3 SGB XI und Pflegeboxen. Stellen Sie eine unverbindliche Anfrage mit Rückrufwunsch.",
  keywords: [
    "Kontakt TANER CARE",
    "Pflegedienst Wuppertal Kontakt",
    "Alltagsbegleitung Anfrage",
    "Pflegeberatung §37.3 Termin",
    "Pflegeboxen Pflegehilfsmittel Kontakt",
    "Pflegegrad Unterstützung Wuppertal",
    "Pflegekasse Beratung Wuppertal",
  ],
  alternates: {
    canonical: "https://taner-care.de/kontakt",
  },
  openGraph: {
    type: "website",
    url: "https://taner-care.de/kontakt",
    title: "Kontakt – TANER CARE GRUPPE",
    description:
      "Sprechen Sie mit der TANER CARE GRUPPE über Ihre Pflegesituation. Unverbindliche Anfrage für Alltagsbegleitung, Pflegeberatung und Pflegeboxen.",
    siteName: "TANER CARE GRUPPE",
    images: [
      {
        url: "https://taner-care.de/images/kontakt/hero-kontakt.jpg",
        width: 1600,
        height: 900,
        alt: "Kontakt zur TANER CARE GRUPPE – Gespräch zwischen Tochter und pflegebedürftiger Mutter",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KontaktPage() {
  return (
    <div className="bg-bgLight">
      {/* Hero */}
      <section className="border-b border-bgLight bg-white">
        <div className="container grid gap-8 py-12 md:grid-cols-[1.2fr,1fr] md:items-center md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Kontakt
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Sprechen wir über Ihre Pflegesituation.
            </h1>
            <p className="mt-4 text-sm text-grayMid md:text-base">
              Ob Alltagsbegleitung, Pflegeberatung oder Pflegeboxen – wir nehmen
              uns Zeit für Ihre Fragen und finden gemeinsam heraus, welche
              Unterstützung sinnvoll ist.
            </p>
            <div className="mt-4 space-y-1 text-sm text-grayMid md:text-base">
              <p>✓ Persönliche Beratung – telefonisch oder vor Ort</p>
              <p>✓ Unterstützung bei Pflegegrad &amp; Anträgen</p>
              <p>✓ Wo möglich direkte Abrechnung mit der Pflegekasse</p>
            </div>

            <div className="mt-6 rounded-2xl bg-bgLight p-4 text-xs text-grayMid md:text-sm">
              <p className="font-semibold text-textDark">
                Telefonische Erreichbarkeit
              </p>
              <p className="mt-1">
                In der Regel erreichen Sie uns werktags. Sollten wir im Einsatz
                sein, rufen wir zeitnah zurück.
              </p>
              <p className="mt-3 font-semibold text-textDark">
                Alternativ: Formular ausfüllen – wir melden uns.
              </p>
            </div>
          </div>

          {/* Hero-Bild rechts */}
          <div className="hidden md:block">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl bg-bgLight shadow-soft">
              <Image
                src="/images/kontakt/hero-kontakt.jpg"
                alt="Tochter und pflegebedürftige Mutter im Gespräch – Kontakt zur TANER CARE GRUPPE"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formular + Zusatzinfos */}
      <section className="container grid gap-8 py-12 md:grid-cols-[1.3fr,1fr] md:py-16">
        {/* Kontaktformular */}
        <ContactForm />

        {/* Zusatzbox rechts */}
        <aside className="space-y-4 text-sm text-grayMid md:text-base">
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-sm font-semibold text-textDark md:text-base">
              Kontaktdaten
            </h2>
            <p className="mt-3">
              TANER CARE GRUPPE
              <br />
              Pflege- &amp; Alltagsbegleitung in Wuppertal
            </p>
            <p className="mt-3">
              <span className="font-semibold">Telefon:</span>{" "}
              <a href="tel:+4915201630200" className="text-primary">
                +49 1520 1630200
              </a>
            </p>
            <p className="mt-1">
              <span className="font-semibold">E-Mail:</span>{" "}
              <a href="mailto:info@care.de" className="text-primary">
                info@care.de
              </a>
            </p>
            <p className="mt-3 text-xs text-grayMid">
              Die hier eingegebenen Daten werden ausschließlich zur Bearbeitung
              Ihrer Anfrage verwendet. Mehr dazu in unserer{" "}
              <a href="/datenschutz" className="text-primary underline">
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl bg-primary/5 p-5 shadow-soft">
            <h2 className="text-sm font-semibold text-textDark md:text-base">
              Für wen ist die TANER CARE GRUPPE da?
            </h2>
            <ul className="mt-3 list-inside list-disc">
              <li>Pflegebedürftige mit Pflegegrad 1–5</li>
              <li>Angehörige, die Unterstützung brauchen</li>
              <li>Menschen, die einen Pflegegrad beantragen möchten</li>
            </ul>
            <p className="mt-3 text-xs text-grayMid md:text-sm">
              Wir erklären verständlich, welche Leistungen Ihnen zustehen und
              helfen bei allen notwendigen Schritten.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
