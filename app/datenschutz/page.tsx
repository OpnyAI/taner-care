import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – TANER CARE GRUPPE",
  description:
    "Datenschutzerklärung der TANER CARE – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO, inklusive Kontaktformular, Hosting, WhatsApp und Ihren Betroffenenrechten.",
  alternates: {
    canonical: "https://taner-care.de/datenschutz",
  },
  openGraph: {
    type: "website",
    url: "https://taner-care.de/datenschutz",
    title: "Datenschutzerklärung – TANER CARE GRUPPE",
    description:
      "Erfahren Sie, wie die TANER CARE personenbezogene Daten gemäß DSGVO verarbeitet – inklusive Kontaktformular, Hosting, WhatsApp-Kommunikation und Betroffenenrechte.",
    siteName: "TANER CARE GRUPPE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="bg-bgLight">
      {/* Kopfbereich */}
      <section className="border-b border-bgLight bg-white">
        <div className="container py-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Rechtliche Hinweise
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-grayMid md:text-base">
            Informationen über die Verarbeitung personenbezogener Daten gemäß
            Art. 13 DSGVO.
          </p>
        </div>
      </section>

      {/* Inhalt */}
      <section className="container py-10 md:py-14">
        <div className="space-y-8 text-sm text-grayMid md:text-base">
          {/* 1. Verantwortliche Stelle */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              1. Verantwortliche Stelle
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
            </p>
          </div>

          {/* 2. Hosting / Server-Logfiles */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              2. Hosting / Server-Logfiles
            </h2>
            <p className="mt-3">
              Unsere Website wird bei der IONOS SE, Elgendorfer Straße 57, 56410
              Montabaur, Deutschland, gehostet.
            </p>
            <p className="mt-2">
              IONOS verarbeitet Daten in unserem Auftrag (Art. 28 DSGVO). Ein
              entsprechender Auftragsverarbeitungsvertrag (AVV) wurde
              abgeschlossen.
            </p>
            <p className="mt-2">
              Beim Aufruf unserer Website werden automatisch technische Daten
              durch IONOS erhoben (Server-Logfiles), u. a.:
            </p>
            <ul className="mt-2 list-inside list-disc">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (in der Regel anonymisiert)</li>
            </ul>
            <p className="mt-2">
              Die Verarbeitung erfolgt zur technischen Bereitstellung und
              Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO). Es findet
              keine Auswertung zu Marketing- oder Trackingzwecken statt.
            </p>
          </div>

          {/* 3. Kontaktformular */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              3. Kontaktformular
            </h2>
            <p className="mt-3">
              Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten
              wir die von Ihnen eingegebenen Daten (z.&nbsp;B. Name,
              Kontaktdaten, Pflegegrad, Anliegen) ausschließlich zur Bearbeitung
              Ihrer Anfrage.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung
              bzw. vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p className="mt-2">
              Die Daten werden nicht zu Werbezwecken verwendet und nicht an
              Dritte weitergegeben, sofern keine gesetzliche Pflicht besteht.
              Die Übertragung erfolgt SSL-verschlüsselt.
            </p>
          </div>

          {/* 4. WhatsApp */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              4. Kontaktaufnahme über WhatsApp
            </h2>
            <p className="mt-3">
              Wir bieten Ihnen die Möglichkeit, uns über WhatsApp zu
              kontaktieren. Anbieter ist die WhatsApp Ireland Limited, 4 Grand
              Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p className="mt-2">
              Die Nutzung von WhatsApp erfolgt ausschließlich auf freiwilliger
              Basis und nach Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1
              lit. a DSGVO). Vor dem Start des Chats informieren wir Sie im
              Rahmen eines Einwilligungs-Hinweises darüber, dass Ihre
              Telefonnummer und Kommunikationsdaten durch WhatsApp verarbeitet
              werden können.
            </p>
            <p className="mt-2">
              Bei Nutzung des Dienstes kann nicht ausgeschlossen werden, dass
              Daten auch auf Servern von Meta außerhalb der EU (z.&nbsp;B. in
              den USA) verarbeitet werden. Nähere Informationen entnehmen Sie
              bitte der Datenschutzerklärung von WhatsApp.
            </p>
            <p className="mt-2">
              Wenn Sie WhatsApp nicht nutzen möchten, können Sie uns jederzeit
              telefonisch, per E-Mail oder über das Kontaktformular erreichen.
            </p>
          </div>

          {/* 5. Telefon / E-Mail */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              5. Kontakt per Telefon oder E-Mail
            </h2>
            <p className="mt-3">
              Wenn Sie uns telefonisch oder per E-Mail kontaktieren, werden die
              von Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer
              Anfrage verwendet.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
              bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Kommunikation mit Ihnen).
            </p>
          </div>

          {/* 6. Keine Cookies / kein Tracking */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              6. Keine Cookies / kein Tracking
            </h2>
            <p className="mt-3">
              Unsere Website verwendet keine Analyse- oder Marketing-Cookies und
              setzt keine Tracking-Tools wie Google Analytics, Facebook Pixel
              oder ähnliche Technologien ein.
            </p>
            <p className="mt-2">
              Es werden lediglich technische Funktionen genutzt, die für den
              Betrieb der Seite erforderlich sind (z.&nbsp;B. Server-Logfiles
              des Hosters).
            </p>
          </div>

          {/* 7. Webfonts */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              7. Verwendung von Webfonts
            </h2>
            <p className="mt-3">
              Auf dieser Website werden Schriftarten (z.&nbsp;B. Poppins und
              Open Sans) über die Technologie „next/font“ lokal eingebunden.
            </p>
            <p className="mt-2">
              Dabei werden keine Verbindungen zu Servern von Google oder anderen
              Drittanbietern aufgebaut. Eine Datenübermittlung an Google findet
              nicht statt.
            </p>
          </div>

          {/* 8. Speicherdauer */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              8. Speicherdauer
            </h2>
            <p className="mt-3">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für
              die genannten Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
          </div>

          {/* 9. Ihre Rechte */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              9. Ihre Rechte als betroffene Person
            </h2>
            <p className="mt-3">Sie haben jederzeit das Recht auf:</p>
            <ul className="mt-2 list-inside list-disc">
              <li>Auskunft über Ihre bei uns gespeicherten Daten,</li>
              <li>Berichtigung unrichtiger Daten,</li>
              <li>Löschung Ihrer Daten,</li>
              <li>Einschränkung der Verarbeitung,</li>
              <li>Datenübertragbarkeit,</li>
              <li>
                Widerspruch gegen die Verarbeitung (insbesondere bei
                Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO),
              </li>
              <li>
                Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft.
              </li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an:
              <br />
              <a href="mailto:info@care.de" className="text-primary underline">
                info@care.de
              </a>
            </p>
          </div>

          {/* 10. Beschwerderecht */}
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-textDark">
              10. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="mt-3">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
              beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p className="mt-2">
              Zuständige Aufsichtsbehörde in Nordrhein-Westfalen:
            </p>
            <p className="mt-2">
              Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
              <br />
              Postfach 20 04 44
              <br />
              40102 Düsseldorf
            </p>
          </div>

          {/* Hinweis */}
          <p className="text-xs text-grayMid">
            Hinweis: Diese Datenschutzerklärung wurde individuell für TANER CARE
            erstellt und sollte regelmäßig überprüft und bei Bedarf an geänderte
            rechtliche Rahmenbedingungen angepasst werden. Weiterführende
            rechtliche Angaben finden Sie in unserem{" "}
            <a href="/impressum" className="text-primary underline">
              Impressum
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
