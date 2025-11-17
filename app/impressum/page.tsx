import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – TANER CARE in Wuppertal",
  description:
    "Impressum der TANER CARE – Dilara Taner (Einzelunternehmen) in Wuppertal. Gesetzliche Anbieterkennzeichnung nach § 5 TMG und § 18 Abs. 2 MStV.",
  alternates: {
    canonical: "https://taner-care.de/impressum",
  },
  openGraph: {
    type: "article",
    url: "https://taner-care.de/impressum",
    title: "Impressum – TANER CARE",
    description:
      "Rechtliche Angaben zur TANER CARE in Wuppertal: Anbieterkennzeichnung, Kontaktdaten, Aufsichtsbehörde, Umsatzsteuer und Haftungshinweise.",
    siteName: "TANER CARE",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImpressumPage() {
  return (
    <div className="bg-bgLight">
      {/* Header Section */}
      <section className="border-b border-bgLight bg-white">
        <div className="container py-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Rechtliche Hinweise
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Impressum</h1>
          <p className="mt-3 max-w-2xl text-sm text-grayMid md:text-base">
            Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-10 md:py-14">
        <div className="space-y-8 text-sm text-grayMid md:text-base">
          {/* Verantwortlicher Anbieter */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              1. Verantwortlicher Anbieter
            </h2>
            <p className="mt-3">
              <span className="font-semibold text-textDark">TANER CARE</span>
              <br />
              Dilara Taner (Einzelunternehmen)
              <br />
              Stahlsberg 109
              <br />
              42279 Wuppertal
              <br />
              Deutschland
            </p>
            <p className="mt-3">
              Telefon:{" "}
              <a href="tel:+4915201630200" className="text-primary underline">
                +49 1520 1630200
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@care.de" className="text-primary underline">
                info@care.de
              </a>
              <br />
              Website:{" "}
              <a
                href="https://taner-care.de"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                taner-care.de
              </a>
            </p>
          </div>

          {/* Anerkennung / Behördenangaben */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              2. Leistungen nach SGB XI / Zuständige Aufsichtsbehörde
            </h2>

            <p className="mt-3">
              Die TANER CARE ist gemäß § 37 Abs. 3 SGB XI (Pflegeberatung) sowie
              gemäß §§ 45a–45c SGB XI (Angebote zur Unterstützung im Alltag)
              vollständig anerkannt. Alle hierfür erforderlichen Genehmigungen,
              Anzeigen und Zulassungen liegen vor.
            </p>

            <p className="mt-3 font-semibold text-textDark">
              Zuständige Aufsichts- und Genehmigungsbehörde:
            </p>
            <p className="mt-2">
              Bezirksregierung Düsseldorf – Dezernat Pflege & Soziales
              <br />
              Am Bonneshof 35
              <br />
              40474 Düsseldorf
              <br />
              Deutschland
            </p>
          </div>

          {/* Umsatzsteuer */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              3. Umsatzsteuer
            </h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:
              <br />
              {/* Platzhalter, bis du die USt-ID ergänzt */}
              DE&nbsp;XXXXXXXXX
            </p>
            <p className="mt-2">
              Eine Steuernummer wird aus Gründen des Datenschutzes nicht
              veröffentlicht.
            </p>
          </div>

          {/* Verantwortlich für Inhalte */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              4. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              Dilara Taner
              <br />
              Stahlsberg 109
              <br />
              42279 Wuppertal
            </p>
          </div>

          {/* Hosting */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              5. Hosting
            </h2>
            <p className="mt-3">
              Diese Website wird bei folgendem Dienstleister gehostet:
            </p>
            <p className="mt-2">
              IONOS SE
              <br />
              Elgendorfer Straße 57
              <br />
              56410 Montabaur
              <br />
              Deutschland
            </p>
            <p className="mt-2">
              Mit IONOS besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28
              DSGVO. Weitere Informationen zur Verarbeitung personenbezogener
              Daten findest du in unserer{" "}
              <a href="/datenschutz" className="text-primary underline">
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* Bildrechte */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              6. Bildrechte / Urheberrecht
            </h2>
            <p className="mt-3">
              Auf dieser Website verwendete Bilder sind urheberrechtlich
              geschützt. Es handelt sich überwiegend um KI-generierte Bilder,
              die speziell für die TANER CARE erstellt wurden. Diese dürfen ohne
              ausdrückliche Zustimmung nicht kopiert, weiterverwendet oder
              verändert werden.
            </p>
            <p className="mt-2">
              Sobald reale Fotos eingesetzt werden, werden diese entsprechend
              gekennzeichnet oder stammen aus eigenen Beständen.
            </p>
          </div>

          {/* Haftungsausschluss */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              7. Haftung für Inhalte
            </h2>
            <p className="mt-3">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>
            <p className="mt-2">
              Als Diensteanbieter sind wir nach § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          {/* Haftung für Links */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              8. Haftung für externe Links
            </h2>
            <p className="mt-3">
              Unser Angebot kann Links zu externen Websites Dritter enthalten,
              auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir
              für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter
              verantwortlich.
            </p>
          </div>

          {/* Urheberrecht */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-base font-semibold text-textDark md:text-lg">
              9. Urheberrecht
            </h2>
            <p className="mt-3">
              Die auf dieser Website erstellten Inhalte und Werke unterliegen
              dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung der
              jeweils Verantwortlichen.
            </p>
          </div>

          {/* Hinweis */}
          <p className="text-xs text-grayMid">
            Hinweis: Dieses Impressum wurde individuell für TANER CARE erstellt
            und ersetzt keine Rechtsberatung. Bitte prüfe regelmäßig, ob
            Aktualisierungen erforderlich sind. Informationen zur Verarbeitung
            personenbezogener Daten findest du in unserer{" "}
            <a href="/datenschutz" className="text-primary underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
