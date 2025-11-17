import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Über uns – TANER CARE GRUPPE",
  description:
    "Die TANER CARE GRUPPE ist ein regionaler Pflege- und Betreuungsdienst in Wuppertal. Wir begleiten Menschen mit Pflegegrad und ihre Angehörigen mit Alltagsbegleitung, Pflegeberatung und kostenfreien Pflegehilfsmitteln.",
  keywords: [
    "TANER CARE GRUPPE",
    "Pflegedienst Wuppertal",
    "Alltagsbegleitung Wuppertal",
    "Pflegeberatung nach §37.3",
    "Entlastungsleistungen §45b",
    "Pflegeboxen Pflegehilfsmittel",
    "Pflege und Betreuung Wuppertal",
    "Pflegegrad Unterstützung Angehörige",
  ],
  alternates: {
    canonical: "https://taner-care.de/ueber-uns",
  },
  openGraph: {
    type: "website",
    url: "https://taner-care.de/ueber-uns",
    title: "Über uns – TANER CARE GRUPPE",
    description:
      "Erfahren Sie mehr über die TANER CARE GRUPPE: nah, verlässlich, menschlich. Alltagsbegleitung, Pflegeberatung und Pflegehilfsmittel aus einer Hand.",
    siteName: "TANER CARE GRUPPE",
    images: [
      {
        url: "https://taner-care.de/images/ueber-uns/hero-ueber-uns.jpg",
        width: 1600,
        height: 900,
        alt: "TANER CARE – Über uns",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UeberUnsPage() {
  return (
    <div className="bg-bgLight">
      {/* Hero */}
      <section className="border-b border-bgLight bg-white">
        <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-center md:py-16">
          {/* Text */}
          <div className="md:w-3/5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Über uns
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              TANER CARE GRUPPE – nah, verlässlich, menschlich.
            </h1>
            <p className="mt-4 text-sm text-grayMid md:text-base">
              Die TANER CARE GRUPPE ist ein regionaler Pflege- und
              Betreuungsdienst, der Menschen mit Pflegegrad und ihre Familien im
              Alltag begleitet. Wir arbeiten wertschätzend, zuverlässig und mit
              echtem Herz für unsere Kunden.
            </p>
          </div>

          {/* Hero-Bild */}
          <div className="md:w-2/5">
            <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-soft bg-bgLight">
              <Image
                src="/images/ueber-uns/hero-ueber-uns.jpg"
                alt="TANER CARE – Über uns"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wer wir sind / Mission */}
      <section className="container grid gap-10 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Wer wir sind</h2>
          <p className="mt-4 text-sm text-grayMid md:text-base">
            Die TANER CARE GRUPPE begleitet pflegebedürftige Menschen und ihre
            Angehörigen im Alltag. Wir nehmen uns Zeit, hören zu und suchen
            gemeinsam nach Lösungen, die wirklich zu Ihrer Situation passen.
          </p>
          <p className="mt-3 text-sm text-grayMid md:text-base">
            Dabei verbinden wir persönliche Nähe mit professioneller
            Arbeitsweise. Unser Ziel: ein sicheres Gefühl im Pflegealltag –
            sowohl für die pflegebedürftige Person als auch für die Familie.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Unsere Mission</h3>
          <p className="mt-3 text-sm text-grayMid md:text-base">
            Wir möchten Pflegebedürftigen ein sicheres Gefühl geben und
            Angehörige entlasten. Dafür kombinieren wir persönliche Betreuung,
            professionelle Beratung und praktische Unterstützung im Alltag.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Alles aus einer Hand
          </h2>
          <p className="mt-4 text-sm text-grayMid md:text-base">
            Bei uns erhalten Sie Alltagsbegleitung, Pflegeberatung und
            kostenfreie Pflegehilfsmittel aus einer Hand. Sie müssen sich nicht
            an verschiedene Anbieter wenden – wir koordinieren alles für Sie.
          </p>

          <div className="mt-5 grid gap-4 text-sm text-grayMid">
            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <h4 className="text-sm font-semibold text-textDark">
                Alltagsbegleitung
              </h4>
              <p className="mt-2">
                Unterstützung im Haushalt, bei Einkäufen, Arztbesuchen und
                gemeinsamen Aktivitäten – für mehr Leichtigkeit im Alltag.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <h4 className="text-sm font-semibold text-textDark">
                Pflegeberatung nach §37.3
              </h4>
              <p className="mt-2">
                Gesetzlich anerkannte Beratungsbesuche für Pflegegeld-Empfänger
                – verständlich erklärt, mit Blick auf Ihre individuelle
                Situation.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <h4 className="text-sm font-semibold text-textDark">
                Kostenfreie Pflegehilfsmittel
              </h4>
              <p className="mt-2">
                Pflegeboxen im Wert von 42 € monatlich – inklusive Antrag,
                Genehmigung, Lieferung und Abrechnung mit der Pflegekasse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="border-t border-bgLight bg-white">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Warum wir?</h2>
          <p className="mt-3 max-w-2xl text-sm text-grayMid md:text-base">
            Wir begleiten Sie nicht nur als Dienstleister, sondern als
            verlässlicher Partner im Pflegealltag. Persönlich, erreichbar und
            mit klarer Kommunikation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-bgLight p-5 text-sm text-grayMid shadow-soft">
              <h3 className="text-sm font-semibold text-textDark">
                Ehrlicher, familiärer Umgang
              </h3>
              <p className="mt-2">
                Wir sprechen verständlich, hören zu und nehmen Ihre Sorgen ernst
                – ohne komplizierte Fachsprache.
              </p>
            </div>

            <div className="rounded-2xl bg-bgLight p-5 text-sm text-grayMid shadow-soft">
              <h3 className="text-sm font-semibold text-textDark">
                Schnelle Bearbeitung &amp; klare Kommunikation
              </h3>
              <p className="mt-2">
                Anfragen, Anträge und Rückfragen bearbeiten wir zügig – Sie
                wissen immer, wo Sie stehen.
              </p>
            </div>

            <div className="rounded-2xl bg-bgLight p-5 text-sm text-grayMid shadow-soft">
              <h3 className="text-sm font-semibold text-textDark">
                Direkte Abrechnung mit der Pflegekasse
              </h3>
              <p className="mt-2">
                Wo möglich, rechnen wir direkt mit der Pflegekasse ab. Für Sie
                entstehen keine zusätzlichen Kosten.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-bgLight p-5 text-sm text-grayMid shadow-soft">
              <h3 className="text-sm font-semibold text-textDark">
                Unterstützung für alle Pflegegrade
              </h3>
              <p className="mt-2">
                Von Pflegegrad 1 bis 5 – wir prüfen Ihre Ansprüche und zeigen,
                welche Leistungen sinnvoll sind.
              </p>
            </div>

            <div className="rounded-2xl bg-bgLight p-5 text-sm text-grayMid shadow-soft">
              <h3 className="text-sm font-semibold text-textDark">
                Zuverlässigkeit &amp; Vertrauen seit Tag 1
              </h3>
              <p className="mt-2">
                Verbindliche Zusagen, pünktliche Einsätze und ein fester
                Ansprechpartner – für ein gutes Gefühl im Alltag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zertifikate */}
      <section className="border-t border-bgLight bg-bgLight/60">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Sicherheit &amp; Qualität
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-grayMid md:text-base">
            Wir arbeiten nach den gesetzlichen Vorgaben und mit anerkannten
            Partnern – für eine sichere, professionelle und zuverlässige
            Versorgung.
          </p>

          <div className="mt-8 grid gap-4 text-sm text-grayMid md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                §45a SGB XI
              </p>
              <p className="mt-2 font-semibold text-textDark">
                Anerkannter Dienst nach §45a SGB XI (NRW)
              </p>
              <p className="mt-1 text-xs">
                Für Alltagsbegleitung &amp; Entlastungsleistungen.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                §37.3 SGB XI
              </p>
              <p className="mt-2 font-semibold text-textDark">
                Anerkannte Pflegeberatung nach §37.3
              </p>
              <p className="mt-1 text-xs">
                Für gesetzlich anerkannte Beratungsbesuche.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                §40 SGB XI
              </p>
              <p className="mt-2 font-semibold text-textDark">
                Abrechnung über Vertragspartner nach §40
              </p>
              <p className="mt-1 text-xs">
                Für Pflegehilfsmittel &amp; Pflegeboxen.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Datenschutz
              </p>
              <p className="mt-2 font-semibold text-textDark">
                SSL-verschlüsselt &amp; DSGVO-konform
              </p>
              <p className="mt-1 text-xs">Sicherer Umgang mit Ihren Daten.</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Standort
              </p>
              <p className="mt-2 font-semibold text-textDark">
                Wuppertal &amp; Umgebung
              </p>
              <p className="mt-1 text-xs">
                Für persönliche Betreuung &amp; Beratung.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Bundesweit
              </p>
              <p className="mt-2 font-semibold text-textDark">
                Digitale Versorgung deutschlandweit
              </p>
              <p className="mt-1 text-xs">
                Für Pflegeboxen &amp; digitale Beratung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
