import type { Metadata } from "next";
import Script from "next/script";
import FaqAccordion from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen zu Pflege & Alltagsbegleitung",
  description:
    "Antworten auf häufige Fragen zur Alltagsbegleitung, Pflegeberatung nach §37.3 SGB XI, Pflegeboxen und Pflegegrad-Anträgen bei der TANER CARE GRUPPE in Wuppertal.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "article",
    url: "https://taner-care.de/faq",
    title: "FAQ – Häufige Fragen zur TANER CARE GRUPPE",
    description:
      "Hier finden Sie Antworten auf die wichtigsten Fragen rund um Pflegegrad, Alltagsbegleitung, Pflegeberatung nach §37.3 und Pflegeboxen.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Benötige ich einen Pflegegrad für eure Leistungen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, unsere Angebote richten sich an Menschen mit Pflegegrad 1–5. Viele Leistungen werden über die Pflegekasse abgerechnet. Wenn noch kein Pflegegrad vorliegt, unterstützen wir bei der Antragstellung und bei der Vorbereitung auf den Termin mit dem Medizinischen Dienst (MD).",
      },
    },
    {
      "@type": "Question",
      name: "Unterstützt ihr bei der Pflegegrad-Antragstellung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir unterstützen beim Erstantrag, bei der Höherstufung, bei der Vorbereitung auf den Termin mit dem Medizinischen Dienst (MD) und beim Ausfüllen der Unterlagen. Dieser Service ist in der Regel bundesweit telefonisch möglich.",
      },
    },
    {
      "@type": "Question",
      name: "Was umfasst die Alltagsbegleitung Taner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Alltagsbegleitung umfasst z. B. Hilfe im Haushalt, Einkäufe, Begleitung zu Terminen, Spaziergänge und Gespräche sowie Entlastung für Angehörige. Die Leistung ist nur regional in Wuppertal & Umgebung verfügbar. Die Abrechnung erfolgt über den Entlastungsbetrag (131 € monatlich nach §45b SGB XI) – wir rechnen direkt mit der Pflegekasse ab.",
      },
    },
    {
      "@type": "Question",
      name: "Sind Pflegeboxen bundesweit verfügbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Pflegeboxen sind bundesweit in Deutschland verfügbar. Pflegebedürftige mit Pflegegrad 1–5 erhalten 42 € pro Monat für Pflegehilfsmittel zum Verbrauch. Wir übernehmen Antrag, Genehmigung, Lieferung und rechnen direkt mit der Pflegekasse ab.",
      },
    },
    {
      "@type": "Question",
      name: "Wie funktioniert die Pflegeberatung nach §37.3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pflegegeld-Empfänger müssen regelmäßige Beratungsbesuche nach §37.3 nachweisen. Wir führen diese Beratungen als Hausbesuch durch – regional in Wuppertal & Umgebung, auf Wunsch auch im erweiterten Radius bis Köln. Die Beratung ist kostenfrei, wir rechnen direkt mit der Pflegekasse ab.",
      },
    },
    {
      "@type": "Question",
      name: "Wie oft benötige ich Beratungsbesuche?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pflegegrad 2–3: alle 6 Monate. Pflegegrad 4–5: alle 3 Monate. Pflegegrad 1: freiwillig möglich. Die Beratung ist 100 % kostenfrei, die Abrechnung erfolgt direkt mit der Pflegekasse.",
      },
    },
    {
      "@type": "Question",
      name: "In welchem Gebiet bietet ihr welche Leistungen an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regional in Wuppertal & Umgebung: Alltagsbegleitung vor Ort sowie Pflegeberatung als Hausbesuch (auf Wunsch auch im erweiterten Radius bis Köln). Bundesweit: Pflegeboxen sowie Unterstützung bei Pflegegrad-Anträgen (telefonisch).",
      },
    },
    {
      "@type": "Question",
      name: "Wie starte ich und wie läuft die Abrechnung ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sie kontaktieren uns telefonisch oder über das Kontaktformular. Wir klären Ihre Situation, prüfen Ansprüche und unterstützen bei Anträgen. Wo möglich, rechnen wir direkt mit der Pflegekasse ab (z. B. §45b, §37.3, §40). In der Regel entstehen keine eigenen Kosten.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <div className="bg-bgLight">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-bgLight bg-white">
        <div className="container py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Häufige Fragen
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            FAQ – Häufige Fragen zur TANER CARE GRUPPE.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-grayMid md:text-base">
            Hier beantworten wir die wichtigsten Fragen zu Pflegegrad,
            Alltagsbegleitung, Pflegeberatung und Pflegeboxen. Wenn etwas offen
            bleibt, melden Sie sich jederzeit persönlich bei uns.
          </p>
        </div>
      </section>

      {/* FAQ-Accordion + Hinweis */}
      <section className="container py-12 md:py-16">
        <FaqAccordion />

        <div className="mt-10 rounded-2xl bg-primary/5 p-5 text-sm text-grayMid md:text-base">
          <p className="font-semibold text-textDark">
            Ihre Frage war nicht dabei?
          </p>
          <p className="mt-2">
            Melden Sie sich gerne telefonisch oder über unser Kontaktformular.
            Gemeinsam klären wir, welche Unterstützung für Ihre Situation
            passend ist.
          </p>
        </div>
      </section>
    </div>
  );
}
