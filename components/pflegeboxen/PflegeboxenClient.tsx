// components/pflegeboxen/PflegeboxenClient.tsx
import Image from "next/image";

const PFLEGEBOXEN_EXTERNAL_URL = "https://tanercare.boxkonfigurator.de/";

export default function PflegeboxenClient() {
  return (
    <div className="bg-bgLight">
      {/* Hero */}
      <section className="border-b border-bgLight bg-white">
        <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-center md:py-16">
          <div className="md:w-3/5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Pflegeboxen – Pflegehilfsmittel
            </p>

            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Pflegeboxen – 42 € Pflegehilfsmittel monatlich, ohne eigene
              Kosten.
            </h1>

            <p className="mt-4 text-sm text-grayMid md:text-base">
              Pflegebedürftige mit Pflegegrad 1–5 können monatlich
              Pflegehilfsmittel zum Verbrauch im Wert von 42 € erhalten –{" "}
              <span className="font-semibold">nach §40 Abs. 2 SGB XI</span>. Die
              Kosten übernimmt die Pflegekasse. Wir unterstützen beim Antrag,
              der Genehmigung, der Lieferung und der Abrechnung.
            </p>

            <div className="mt-4 grid gap-2 text-sm text-grayMid md:grid-cols-2">
              <div>✓ Einmalhandschuhe &amp; Desinfektionsmittel</div>
              <div>✓ Bettschutzeinlagen</div>
              <div>✓ FFP2-Masken &amp; Mundschutz</div>
              <div>✓ Schutzschürzen</div>
            </div>

            <div className="mt-6 rounded-2xl bg-bgLight p-4 text-sm text-grayMid">
              <p>
                <span className="font-semibold text-primary">Wert:</span> 42 €
                pro Monat für Pflegehilfsmittel –{" "}
                <span className="font-semibold">ohne Zuzahlung</span> für
                Pflegebedürftige mit Pflegegrad 1–5, die zuhause leben.
                <span className="ml-1">Bundesweit verfügbar.</span>
              </p>
            </div>

            {/* Primary CTA (extern) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PFLEGEBOXEN_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
              >
                Pflegebox online beantragen
              </a>
              <a
                href="#infos"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Infos lesen
              </a>
            </div>

            <p className="mt-3 text-xs text-grayMid">
              Hinweis: Der Antrag wird über unsere Partner-Seite in einem neuen
              Tab geöffnet.
            </p>
          </div>

          {/* Hero-Bild */}
          <div className="md:w-2/5">
            <div className="relative h-64 overflow-hidden rounded-2xl bg-bgLight shadow-soft md:h-72">
              <Image
                src="/images/pflegeboxen/hero-pflegeboxen.jpg"
                alt="Pflegeboxen – Pflegehilfsmittel bequem nach Hause"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content + CTA Card */}
      <section
        id="infos"
        className="container grid gap-10 py-12 md:grid-cols-[1.2fr,1fr] md:py-16"
      >
        {/* Infotext */}
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Was sind Pflegeboxen?
          </h2>

          <p className="mt-4 text-sm text-grayMid md:text-base">
            Pflegeboxen sind Pakete mit wichtigen Pflegehilfsmitteln zum
            Verbrauch – zum Beispiel Einmalhandschuhe, Desinfektionsmittel oder
            Bettschutzeinlagen. Pflegebedürftige mit Pflegegrad 1–5 haben
            Anspruch auf bis zu 42 € pro Monat für solche Produkte{" "}
            <span className="font-semibold">nach §40 Abs. 2 SGB XI</span>, wenn
            sie zuhause gepflegt werden.
          </p>

          <p className="mt-3 text-sm text-grayMid md:text-base">
            Die Lieferung der Pflegeboxen ist{" "}
            <span className="font-semibold">bundesweit</span> möglich. Wir
            sorgen dafür, dass die Pflegehilfsmittel regelmäßig und zuverlässig
            bei Ihnen ankommen – ohne eigene Kosten und ohne unnötigen
            Papierkram.
          </p>

          <h3 className="mt-6 text-lg font-semibold">
            Voraussetzungen für die Kostenübernahme
          </h3>
          <ul className="mt-3 list-inside list-disc text-sm text-grayMid md:text-base">
            <li>Pflegegrad 1–5 ist vorhanden</li>
            <li>Die pflegebedürftige Person lebt zuhause (häusliche Pflege)</li>
            <li>Pflege erfolgt durch Angehörige oder ambulante Dienste</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">
            Welche Produkte sind möglich?
          </h3>
          <ul className="mt-3 list-inside list-disc text-sm text-grayMid md:text-base">
            <li>Einmalhandschuhe</li>
            <li>Flächendesinfektion &amp; Händedesinfektion</li>
            <li>Bettschutzeinlagen</li>
            <li>Mundschutz &amp; FFP2-Masken</li>
            <li>Schutzschürzen</li>
          </ul>

          <p className="mt-3 text-sm text-grayMid md:text-base">
            Die Zusammenstellung kann an Ihre Pflegesituation angepasst werden.
            Wir beraten Sie, welche Produkte sinnvoll sind.
          </p>

          <h3 className="mt-6 text-lg font-semibold">
            So läuft die Bestellung ab
          </h3>
          <div className="mt-3 rounded-2xl bg-white p-4 text-sm text-grayMid shadow-soft">
            <ol className="space-y-3">
              <li>
                <span className="font-semibold text-textDark">
                  1. Antrag &amp; Prüfung.
                </span>{" "}
                Sie beantragen die Pflegebox online. Wir prüfen die
                Voraussetzungen und bereiten die Unterlagen für die Pflegekasse
                vor.
              </li>
              <li>
                <span className="font-semibold text-textDark">
                  2. Genehmigung &amp; Lieferung.
                </span>{" "}
                Nach Genehmigung durch die Pflegekasse erhalten Sie Ihre
                Pflegeboxen regelmäßig nach Hause geliefert – bundesweit.
              </li>
              <li>
                <span className="font-semibold text-textDark">
                  3. Abrechnung direkt mit der Kasse.
                </span>{" "}
                Die Kosten rechnen wir direkt mit der Pflegekasse ab – für Sie
                ohne Zuzahlung.
              </li>
            </ol>
            <p className="mt-3 text-xs text-grayMid">
              Änderungen an der Zusammenstellung der Box sind jederzeit möglich,
              wenn sich Ihre Pflegesituation verändert.
            </p>
          </div>
        </div>

        {/* CTA statt Formular */}
        <div className="h-fit rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Pflegebox beantragen</h2>
          <p className="mt-2 text-xs text-grayMid">
            Der Antrag erfolgt online über unsere Partner-Seite. Das ist der
            schnellste Weg, damit alles direkt korrekt erfasst werden kann.
          </p>

          <div className="mt-4 rounded-2xl bg-bgLight/50 p-4">
            <p className="text-sm font-semibold text-textDark">
              In wenigen Minuten erledigt:
            </p>
            <ul className="mt-2 list-inside list-disc text-sm text-grayMid">
              <li>Angaben zur pflegebedürftigen Person</li>
              <li>Adresse &amp; Pflegegrad</li>
              <li>Wunsch-Produkte (anpassbar)</li>
            </ul>
          </div>

          <a
            href={PFLEGEBOXEN_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
          >
            Jetzt online beantragen
          </a>

          <p className="mt-3 text-xs text-grayMid">
            Öffnet in einem neuen Tab. Falls Sie Fragen haben: Nutzen Sie bitte
            unsere{" "}
            <a href="/kontakt" className="text-primary underline">
              Kontaktseite
            </a>
            .
          </p>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-bgLight bg-white/95 backdrop-blur md:hidden">
        <div className="container flex items-center justify-between gap-3 py-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-textDark">
              Pflegebox online beantragen
            </p>
            <p className="truncate text-[11px] text-grayMid">
              42 € monatlich · ohne Zuzahlung · bundesweit
            </p>
          </div>
          <a
            href={PFLEGEBOXEN_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
          >
            Beantragen
          </a>
        </div>
      </div>

      {/* Abstand, damit Sticky CTA nichts überdeckt */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
