// components/layout/Footer.tsx
import Link from "next/link";

const PFLEGEBOXEN_EXTERNAL_URL = "https://tanercare.boxkonfigurator.de/";

export default function Footer() {
  return (
    <footer className="border-t border-bgLight bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        {/* Spalte 1 – Kurzbeschreibung */}
        <div>
          <span className="text-sm font-semibold tracking-wide text-primary">
            TANER CARE
          </span>
          <p className="mt-3 text-sm text-grayMid">
            Alltagsbegleitung, Pflegeberatung und kostenfreie Pflegehilfsmittel
            – aus einer Hand für pflegebedürftige Menschen und ihre Angehörigen.
          </p>
        </div>

        {/* Spalte 2 – Seiten */}
        <div>
          <h3 className="text-sm font-semibold text-textDark">Seiten</h3>
          <ul className="mt-3 space-y-2 text-sm text-grayMid">
            <li>
              <Link href="/" className="hover:text-primary">
                Startseite
              </Link>
            </li>
            <li>
              <Link href="/alltagsbegleitung" className="hover:text-primary">
                Alltagsbegleitung
              </Link>
            </li>
            <li>
              <Link href="/pflegeberatung" className="hover:text-primary">
                Pflegeberatung §37.3
              </Link>
            </li>
            <li>
              <Link href="/pflegeboxen" className="hover:text-primary">
                Pflegeboxen
              </Link>
            </li>
            <li>
              <Link href="/ueber-uns" className="hover:text-primary">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Spalte 3 – Kontakt */}
        <div>
          <h3 className="text-sm font-semibold text-textDark">Kontakt</h3>
          <div className="mt-3 space-y-2 text-sm text-grayMid">
            <p className="font-semibold text-textDark">TANER CARE</p>
            <p>Pflege- &amp; Alltagsbegleitung in Wuppertal</p>

            <p>
              Telefon:{" "}
              <a
                href="tel:+491728804949"
                className="text-primary hover:underline"
              >
                +49 172 8804949
              </a>
            </p>

            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@taner-care.de"
                className="text-primary hover:underline"
              >
                info@taner-care.de
              </a>
            </p>

            <p>
              E-Mail:{" "}
              <a
                href="mailto:dilara@taner-care.de"
                className="text-primary hover:underline"
              >
                dilara@taner-care.de
              </a>
            </p>

            {/* Externer CTA */}
            <a
              href={PFLEGEBOXEN_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
            >
              Pflegebox beantragen
            </a>
          </div>
        </div>
      </div>

      {/* Bottom-Bar */}
      <div className="border-t border-bgLight">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-grayMid md:flex-row">
          <span>
            © {new Date().getFullYear()} TANER CARE – Menschen unterstützen.
            Wege erleichtern.
          </span>

          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-primary">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-primary">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
