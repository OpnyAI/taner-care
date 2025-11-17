import type { Metadata } from "next";
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

export default function FaqPage() {
  return (
    <div className="bg-bgLight">
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
