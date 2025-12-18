// app/page.tsx
import Link from "next/link";
import Image from "next/image";

const PFLEGEBOXEN_EXTERNAL_URL = "https://tanercare.boxkonfigurator.de/";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-bgLight/60">
        <div className="container flex flex-col gap-10 py-16 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              TANER CARE
            </p>

            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Menschen unterstützen. Wege erleichtern.
            </h1>

            <p className="mt-5 max-w-xl text-sm text-grayMid md:text-base">
              Wir unterstützen pflegebedürftige Menschen und ihre Angehörigen im
              Alltag – persönlich, strukturiert und verlässlich.
            </p>

            <p className="mt-3 max-w-xl text-sm text-grayMid md:text-base">
              Unsere Leistungen umfassen die Alltagsbegleitung, die
              Pflegeberatung nach §37.3 SGB XI sowie kostenfreie Pflegeboxen mit
              Pflegehilfsmitteln im Wert von 42 € monatlich nach §40 Abs. 2 SGB
              XI.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PFLEGEBOXEN_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
              >
                Pflegebox beantragen
              </a>

              <Link
                href="#leistungen"
                className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Leistungen ansehen
              </Link>
            </div>

            {/* USPs / Reichweite */}
            <div className="mt-6 grid gap-2 text-xs text-grayMid md:text-sm">
              <div>
                ✓ Alltagsbegleitung &amp; Pflegeberatung: regional in Wuppertal
                &amp; Umgebung, auf Wunsch auch im erweiterten Radius bis Köln
              </div>
              <div>✓ Pflegeboxen: kostenfreie Pflegehilfsmittel bundesweit</div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="md:w-1/2">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white shadow-soft">
              <Image
                src="/images/hero-startseite.jpg"
                alt="Pflegeberatung und Alltagsbegleitung durch TANER CARE"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="bg-white">
        <div className="container py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Unsere Leistungsbereiche
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-grayMid md:text-base">
            Wir entlasten pflegebedürftige Menschen und ihre Angehörigen – mit
            persönlicher Alltagsbegleitung, verständlicher Pflegeberatung und
            kostenfreien Pflegehilfsmitteln.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Alltagsbegleitung */}
            <article className="flex flex-col rounded-2xl bg-bgLight p-6 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/leistungen/alltagsbegleitung.jpg"
                  alt="Alltagsbegleitung für Seniorinnen und Senioren"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">Alltagsbegleitung</h3>

              <p className="mt-3 text-sm text-grayMid">
                Unterstützung im Alltag: Haushalt, Einkäufe, Arztbegleitung,
                Spaziergänge, Gespräche und Entlastung der Angehörigen.
              </p>

              <p className="mt-2 text-sm font-semibold text-primary">
                131 € monatlich über §45b SGB XI – direkte Abrechnung mit der
                Pflegekasse.
              </p>

              <ul className="mt-3 list-inside list-disc text-xs text-grayMid">
                <li>Pflegegrad 1–5</li>
                <li>Regional in Wuppertal &amp; Umgebung</li>
              </ul>

              <Link
                href="/alltagsbegleitung"
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Mehr zur Alltagsbegleitung
              </Link>
            </article>

            {/* Pflegeberatung */}
            <article className="flex flex-col rounded-2xl bg-bgLight p-6 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/leistungen/pflegeberatung.jpg"
                  alt="Pflegeberatung nach §37.3 SGB XI"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                Pflegeberatung (§37.3 SGB XI)
              </h3>

              <p className="mt-3 text-sm text-grayMid">
                Gesetzlich vorgeschriebene Beratungsbesuche für
                Pflegegeld-Empfänger – fachlich, verständlich und kostenfrei.
              </p>

              <p className="mt-2 text-sm font-semibold text-primary">
                100 % kostenfrei – direkte Abrechnung mit der Pflegekasse.
              </p>

              <ul className="mt-3 list-inside list-disc text-xs text-grayMid">
                <li>Regional in Wuppertal &amp; Umgebung</li>
                <li>Auf Wunsch auch im erweiterten Radius bis Köln</li>
              </ul>

              <Link
                href="/pflegeberatung"
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Mehr zur Pflegeberatung
              </Link>
            </article>

            {/* Pflegeboxen */}
            <article className="flex flex-col rounded-2xl bg-bgLight p-6 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/leistungen/pflegeboxen.jpg"
                  alt="Pflegebox mit Pflegehilfsmitteln"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                Pflegeboxen – Pflegehilfsmittel
              </h3>

              <p className="mt-3 text-sm text-grayMid">
                Pflegehilfsmittel im Wert von 42 € monatlich nach §40 Abs. 2 SGB
                XI – kostenfrei für Pflegebedürftige mit Pflegegrad 1–5.
              </p>

              <p className="mt-2 text-sm font-semibold text-primary">
                Bundesweit verfügbar – ohne Zuzahlung.
              </p>

              <ul className="mt-3 list-inside list-disc text-xs text-grayMid">
                <li>Einmalhandschuhe, Desinfektion, Einlagen u. v. m.</li>
                <li>Häusliche Pflege &amp; Pflegegrad 1–5</li>
              </ul>

              <a
                href={PFLEGEBOXEN_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Mehr zu den Pflegeboxen
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="bg-bgLight/60">
        <div className="container py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            So unterstützen wir Sie Schritt für Schritt
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-grayMid md:text-base">
            Wir begleiten Sie verständlich, transparent und ohne unnötige
            Bürokratie – von der ersten Anfrage bis zur laufenden Unterstützung.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-grayMid">
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                1. Kontakt aufnehmen
              </div>
              <p className="mt-2">
                Sie kontaktieren uns telefonisch oder über das Formular. Wir
                klären kurz Ihre Situation und den Unterstützungsbedarf.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                2. Ansprüche klären
              </div>
              <p className="mt-2">
                Wir prüfen gemeinsam Pflegegrade, Leistungen und mögliche
                Ansprüche – inklusive Antragshilfe.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                3. Unterstützung starten
              </div>
              <p className="mt-2">
                Wir starten die Betreuung, Beratung oder Pflegeboxenversorgung
                und rechnen – wenn möglich – direkt mit der Pflegekasse ab.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={PFLEGEBOXEN_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
            >
              Pflegebox beantragen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
