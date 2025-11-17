// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero-Bereich */}
      <section className="bg-bgLight/60">
        <div className="container flex flex-col gap-10 py-16 md:flex-row md:items-center">
          {/* Text links */}
          <div className="md:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              TANER CARE GRUPPE
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Menschen unterstützen. Wege erleichtern.
            </h1>
            <p className="mt-5 max-w-xl text-sm text-grayMid md:text-base">
              Wir sind ein zuverlässiger Pflege- und Alltagsdienst aus Wuppertal
              und Umgebung. Unsere Aufgabe ist es, pflegebedürftige Menschen und
              ihre Angehörigen im Alltag zu entlasten – einfach, menschlich und
              kompetent.
            </p>
            <p className="mt-3 max-w-xl text-sm text-grayMid md:text-base">
              Über unsere drei Leistungsbereiche bieten wir alles aus einer
              Hand: Alltagsbegleitung Taner, Pflegeberatung (§37.3 SGB XI) und
              kostenfreie Pflegeboxen mit Pflegehilfsmitteln im Wert von 42 €
              monatlich.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
              >
                Jetzt Pflegeberatung anfragen
              </Link>
              <Link
                href="#leistungen"
                className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Leistungen ansehen
              </Link>
            </div>

            <div className="mt-6 grid gap-2 text-xs text-grayMid md:text-sm">
              <div>✓ Alltagsbegleitung vor Ort in Wuppertal & Umgebung</div>
              <div>
                ✓ Pflegeberatung nach §37.3 SGB XI – vor Ort &amp; per Video
              </div>
              <div>
                ✓ Pflegeboxen – kostenfreie Pflegehilfsmittel bundesweit
              </div>
            </div>
          </div>

          {/* Hero-Bild rechts – 16:9, responsiv */}
          <div className="md:w-1/2">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white shadow-soft">
              <Image
                src="/images/hero-startseite.jpg"
                alt="Pflegeberatung und Alltagsbegleitung durch die TANER CARE GRUPPE"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leistungsübersicht / Kacheln */}
      <section id="leistungen" className="bg-white">
        <div className="container py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Unsere drei Leistungsbereiche
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-grayMid md:text-base">
            Wir entlasten pflegebedürftige Menschen und ihre Angehörigen – mit
            Alltagsbegleitung, verständlicher Pflegeberatung und kostenfreien
            Pflegehilfsmitteln.
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

              <h3 className="mt-4 text-lg font-semibold">
                Alltagsbegleitung Taner
              </h3>
              <p className="mt-3 text-sm text-grayMid">
                Unterstützung im Alltag: Haushalt, Einkäufe, Gespräche,
                Spaziergänge, Arzttermine und Entlastung der Angehörigen.
              </p>
              <p className="mt-2 text-sm font-semibold text-primary">
                131 € monatlich über §45b SGB XI – direkte Abrechnung mit der
                Pflegekasse.
              </p>
              <ul className="mt-3 list-inside list-disc text-xs text-grayMid">
                <li>Pflegegrad 1–5</li>
                <li>Nur regional: Wuppertal &amp; Umgebung</li>
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
                  alt="Pflegeberatung nach §37.3 SGB XI im Gespräch mit Angehörigen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                Pflegeberatung (§37.3 SGB XI)
              </h3>
              <p className="mt-3 text-sm text-grayMid">
                Pflichtbesuche für Pflegegeld-Empfänger – kompetent,
                verständlich und kostenlos. Wir beraten zu Leistungen,
                Ansprüchen und unterstützen bei allen Fragen.
              </p>
              <p className="mt-2 text-sm font-semibold text-primary">
                100 % kostenfrei – direkte Abrechnung mit der Pflegekasse.
              </p>
              <ul className="mt-3 list-inside list-disc text-xs text-grayMid">
                <li>Pflegegrad 2–3: alle 6 Monate</li>
                <li>Pflegegrad 4–5: alle 3 Monate</li>
                <li>Pflegegrad 1: freiwillig möglich</li>
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
                  alt="Pflegebox mit Pflegehilfsmitteln wie Handschuhen, Masken und Desinfektion"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                Pflegeboxen – Pflegehilfsmittel
              </h3>
              <p className="mt-3 text-sm text-grayMid">
                Pflegehilfsmittel im Wert von 42 € monatlich – kostenlos für
                Pflegegrad 1–5. Wir übernehmen Antrag, Lieferung und Abrechnung
                direkt mit der Pflegekasse.
              </p>
              <p className="mt-2 text-sm font-semibold text-primary">
                Bundesweit verfügbar – ohne eigene Kosten.
              </p>
              <ul className="mt-3 list-inside list-disc text-xs text-grayMid">
                <li>Einmalhandschuhe, Desinfektion, Einlagen u. v. m.</li>
                <li>Voraussetzung: Pflegegrad 1–5 &amp; Zuhause lebend</li>
              </ul>
              <Link
                href="/pflegeboxen"
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Mehr zu den Pflegeboxen
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Kurzer „Wie wir helfen“-Abschnitt */}
      <section className="bg-bgLight/60">
        <div className="container py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            So unterstützen wir Sie Schritt für Schritt
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-grayMid md:text-base">
            Wir möchten, dass sich Pflegebedürftige und Angehörige sicher
            fühlen. Darum begleiten wir Sie von Anfang an – verständlich,
            transparent und ohne Fachchinesisch.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-grayMid">
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                1. Kontakt aufnehmen
              </div>
              <p className="mt-2">
                Sie rufen uns an oder nutzen das Online-Formular. Wir klären
                kurz Ihre Situation und welche Unterstützung sinnvoll ist.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                2. Ansprüche prüfen
              </div>
              <p className="mt-2">
                Wir prüfen gemeinsam Ihre Pflegegrade, Ansprüche und
                Möglichkeiten – und helfen bei allen Anträgen.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                3. Betreuung starten
              </div>
              <p className="mt-2">
                Wir planen Einsätze, Beratungen oder Lieferung der Pflegeboxen –
                und rechnen, wo möglich, direkt mit der Pflegekasse ab.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
            >
              Jetzt unverbindlich beraten lassen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
