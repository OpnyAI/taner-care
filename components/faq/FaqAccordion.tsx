"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "1. Benötige ich einen Pflegegrad für eure Leistungen?",
    answer: (
      <>
        <p>
          Ja, unsere Angebote richten sich an Menschen mit Pflegegrad 1–5. Viele
          Leistungen – z. B. Alltagsbegleitung, Pflegeberatung und Pflegeboxen –
          werden über die Pflegekasse abgerechnet.
        </p>
        <p className="mt-2">
          <span className="font-semibold">Kein Pflegegrad?</span> – Wir helfen
          bei der Antragstellung und begleiten Sie durch den Prozess, inklusive
          Vorbereitung auf den Termin mit dem Medizinischen Dienst (MD).
        </p>
      </>
    ),
  },
  {
    question: "2. Unterstützt ihr bei der Pflegegrad-Antragstellung?",
    answer: (
      <>
        <p>
          Ja. Wir unterstützen beim Erstantrag, bei der Höherstufung, bei der
          Vorbereitung auf den Termin mit dem Medizinischen Dienst (MD) und beim
          Ausfüllen aller Unterlagen.
        </p>
        <p className="mt-2">
          Dieser Service ist grundsätzlich{" "}
          <span className="font-semibold">bundesweit telefonisch</span> möglich.
        </p>
      </>
    ),
  },
  {
    question: "3. Was umfasst die Alltagsbegleitung Taner?",
    answer: (
      <>
        <p>Die Alltagsbegleitung umfasst zum Beispiel:</p>
        <ul className="mt-2 list-inside list-disc">
          <li>Haushalt &amp; Einkäufe</li>
          <li>Arztbegleitung &amp; Termine</li>
          <li>Spaziergänge &amp; Gespräche</li>
          <li>Unterstützung im Alltag</li>
          <li>Entlastung der Angehörigen</li>
        </ul>
        <p className="mt-2">
          Die Alltagsbegleitung ist{" "}
          <span className="font-semibold">
            nur regional in Wuppertal &amp; Umgebung
          </span>{" "}
          (Elberfeld, Barmen, Vohwinkel, Ronsdorf, Cronenberg) verfügbar.
        </p>
        <p className="mt-2">
          Die Abrechnung erfolgt über den Entlastungsbetrag (
          <span className="font-semibold">
            131 € monatlich nach §45b SGB XI
          </span>
          ) – wir rechnen direkt mit der Pflegekasse ab.
        </p>
      </>
    ),
  },
  {
    question: "4. Sind Pflegeboxen bundesweit verfügbar?",
    answer: (
      <>
        <p>
          Ja. Unsere Pflegeboxen können bundesweit in ganz Deutschland geliefert
          werden.
        </p>
        <p className="mt-2">
          Pflegebedürftige mit Pflegegrad 1–5 erhalten{" "}
          <span className="font-semibold">42 € pro Monat</span> für
          Pflegehilfsmittel wie Handschuhe, Desinfektion oder Einlagen.
        </p>
        <p className="mt-2">Wir übernehmen:</p>
        <ul className="mt-2 list-inside list-disc">
          <li>Antragstellung</li>
          <li>Genehmigung durch die Pflegekasse</li>
          <li>Monatliche Lieferung</li>
          <li>Abrechnung direkt mit der Pflegekasse</li>
        </ul>
      </>
    ),
  },
  {
    question: "5. Wie funktioniert die Pflegeberatung nach §37.3?",
    answer: (
      <>
        <p>
          Pflegegeld-Empfänger müssen regelmäßige Beratungsbesuche nachweisen.
          Diese Beratungen sollen sicherstellen, dass die Pflege zu Hause gut
          organisiert ist.
        </p>
        <p className="mt-2">
          Die Pflegeberatung führen wir als{" "}
          <span className="font-semibold">Hausbesuch</span> durch –{" "}
          <span className="font-semibold">regional</span> in Wuppertal &amp;
          Umgebung, auf Wunsch auch im erweiterten Radius bis Köln.
        </p>
        <p className="mt-2">
          Wir beraten zu Leistungen, Entlastungsangeboten, Hilfsmitteln und zum
          Pflegealltag – für Sie{" "}
          <span className="font-semibold">kostenfrei</span>.
        </p>
      </>
    ),
  },
  {
    question: "6. Wie oft benötige ich Beratungsbesuche?",
    answer: (
      <>
        <p>
          Die gesetzlich vorgeschriebene Häufigkeit richtet sich nach dem
          Pflegegrad:
        </p>
        <ul className="mt-2 list-inside list-disc">
          <li>Pflegegrad 2–3: alle 6 Monate</li>
          <li>Pflegegrad 4–5: alle 3 Monate</li>
          <li>Pflegegrad 1: freiwillig möglich</li>
        </ul>
        <p className="mt-2">
          Alle Beratungen sind für Sie{" "}
          <span className="font-semibold">100 % kostenfrei</span>. Die
          Abrechnung erfolgt direkt mit der Pflegekasse.
        </p>
      </>
    ),
  },
  {
    question: "7. In welchem Gebiet bietet ihr welche Leistungen an?",
    answer: (
      <>
        <p>
          Wir unterscheiden zwischen regionalen Leistungen vor Ort und
          Angeboten, die bundesweit möglich sind.
        </p>

        <p className="mt-2 font-semibold">Bundesweit (ganz Deutschland):</p>
        <ul className="mt-1 list-inside list-disc">
          <li>Pflegeboxen (Pflegehilfsmittel im Wert von 42 €)</li>
          <li>Unterstützung bei Pflegegrad-Anträgen (telefonisch)</li>
          <li>Formulare &amp; Beratung</li>
        </ul>

        <p className="mt-3 font-semibold">
          Regional in Wuppertal &amp; Umgebung:
        </p>
        <ul className="mt-1 list-inside list-disc">
          <li>Alltagsbegleitung vor Ort</li>
          <li>Pflegeberatung als Hausbesuch</li>
          <li>Auf Wunsch: erweiterter Radius bis Köln</li>
        </ul>
      </>
    ),
  },
  {
    question: "8. Wie starte ich und wie läuft die Abrechnung ab?",
    answer: (
      <>
        <p>
          Der Ablauf ist bewusst einfach gehalten, damit Sie sich nicht durch
          Formulare kämpfen müssen.
        </p>
        <ol className="mt-2 list-inside list-decimal">
          <li>
            Sie kontaktieren uns telefonisch oder über das Kontaktformular.
          </li>
          <li>
            Wir prüfen Ihre Ansprüche und erklären die möglichen Leistungen.
          </li>
          <li>Wir unterstützen bei allen Anträgen und Formularen.</li>
        </ol>
        <p className="mt-2">
          Wo möglich, rechnen wir direkt mit der Pflegekasse ab:
        </p>
        <ul className="mt-1 list-inside list-disc">
          <li>Entlastungsbetrag (131 € monatlich nach §45b SGB XI)</li>
          <li>Pflegeberatung nach §37.3 SGB XI</li>
          <li>Pflegehilfsmittel (42 € monatlich nach §40 SGB XI)</li>
        </ul>
        <p className="mt-2">
          Für Sie entstehen in der Regel{" "}
          <span className="font-semibold">keine eigenen Kosten</span>.
        </p>
      </>
    ),
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div
            key={index}
            className={`rounded-2xl bg-white p-4 shadow-soft transition ${
              isOpen ? "bg-primary/5" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-sm font-semibold text-textDark md:text-base">
                {item.question}
              </span>
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full bg-bgLight text-xs text-textDark transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </div>
            </button>

            {isOpen && (
              <div className="mt-3 text-sm text-grayMid md:text-base">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
