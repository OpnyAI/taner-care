import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-bgLight bg-bgLight/60">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        {/* Beschreibung */}
        <div>
          <h3 className="text-sm font-semibold text-primary">
            TANER CARE GRUPPE
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-grayMid">
            Alltagsbegleitung, Pflegeberatung und kostenfreie Pflegehilfsmittel
            – aus einer Hand für pflegebedürftige Menschen und ihre Angehörigen.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-textDark">Seiten</h4>
          <div className="mt-2 flex flex-col gap-1 text-sm text-grayMid">
            <Link href="/">Startseite</Link>
            <Link href="/alltagsbegleitung">Alltagsbegleitung</Link>
            <Link href="/pflegeberatung">Pflegeberatung §37.3</Link>
            <Link href="/pflegeboxen">Pflegeboxen</Link>
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-sm font-semibold text-textDark">Kontakt</h4>
          <p className="mt-2 text-sm leading-relaxed text-grayMid">
            TANER CARE GRUPPE
            <br />
            Pflege- &amp; Alltagsbegleitung in Wuppertal
          </p>
          <p className="mt-3 text-sm leading-relaxed text-grayMid">
            <span className="font-semibold">Telefon:</span>{" "}
            <a href="tel:+4915201630200" className="text-primary">
              +49 1520 1630200
            </a>
            <br />
            <span className="font-semibold">E-Mail:</span>{" "}
            <a href="mailto:info@care.de" className="text-primary">
              info@care.de
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-bgLight">
        <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-grayMid md:flex-row">
          <span>
            © {year} TANER CARE GRUPPE – Menschen unterstützen. Wege
            erleichtern.
          </span>

          <div className="flex gap-4">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
