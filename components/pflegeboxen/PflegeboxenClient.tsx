"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

type FormState = {
  carePersonName: string;
  contactName: string;
  phone: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
  careLevel: string;
  healthInsurance: string;
  deliveryNotes: string;
  productGloves: boolean;
  productDesinfection: boolean;
  productBedPads: boolean;
  productMasks: boolean;
  productApron: boolean;
  consentPrivacy: boolean;
  consentWhatsApp: boolean;
};

export default function PflegeboxenClient() {
  const [form, setForm] = useState<FormState>({
    carePersonName: "",
    contactName: "",
    phone: "",
    email: "",
    street: "",
    postalCode: "",
    city: "",
    careLevel: "",
    healthInsurance: "",
    deliveryNotes: "",
    productGloves: true,
    productDesinfection: true,
    productBedPads: false,
    productMasks: false,
    productApron: false,
    consentPrivacy: false,
    consentWhatsApp: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validateForm() {
    if (!form.carePersonName.trim()) {
      return "Bitte geben Sie den Namen der pflegebedürftigen Person an.";
    }
    if (!form.phone.trim()) {
      return "Bitte geben Sie eine Telefonnummer an.";
    }
    if (!form.street.trim() || !form.postalCode.trim() || !form.city.trim()) {
      return "Bitte geben Sie die vollständige Lieferadresse an.";
    }
    if (!form.careLevel.trim()) {
      return "Bitte wählen Sie den Pflegegrad.";
    }
    if (!form.healthInsurance.trim()) {
      return "Bitte geben Sie die Pflegekasse / Krankenkasse an.";
    }
    if (!form.consentPrivacy) {
      return "Bitte akzeptieren Sie die Datenschutzerklärung.";
    }
    return null;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Pflegeboxen Formular:", form);

      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
      }, 600);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setError(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    }
  }

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
              Pflegehilfsmittel im Wert von 42 € kostenlos erhalten. Wir
              übernehmen Antrag, Genehmigung, Lieferung und Abrechnung mit der
              Pflegekasse.
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
              </p>
            </div>
          </div>

          {/* Hero-Bild */}
          <div className="md:w-2/5">
            <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl bg-bgLight shadow-soft">
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

      {/* Text + Formular */}
      <section className="container grid gap-10 py-12 md:grid-cols-[1.2fr,1fr] md:py-16">
        {/* Infotext */}
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Was sind Pflegeboxen?
          </h2>
          <p className="mt-4 text-sm text-grayMid md:text-base">
            Pflegeboxen sind Pakete mit wichtigen Pflegehilfsmitteln zum
            Verbrauch – zum Beispiel Einmalhandschuhe, Desinfektionsmittel oder
            Bettschutzeinlagen. Pflegebedürftige mit Pflegegrad 1–5 haben
            Anspruch auf bis zu 42 € pro Monat für solche Produkte, wenn sie
            zuhause gepflegt werden.
          </p>
          <p className="mt-3 text-sm text-grayMid md:text-base">
            Wir kümmern uns darum, dass Ihre Pflegehilfsmittel regelmäßig und
            zuverlässig nach Hause geliefert werden – ohne eigene Kosten und
            ohne Papierkram für Sie.
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
                Sie füllen das Formular aus. Wir prüfen, ob die Voraussetzungen
                erfüllt sind, und bereiten den Antrag für Ihre Pflegekasse vor.
              </li>
              <li>
                <span className="font-semibold text-textDark">
                  2. Genehmigung &amp; Lieferung.
                </span>{" "}
                Nach Genehmigung durch die Pflegekasse erhalten Sie Ihre
                Pflegeboxen regelmäßig nach Hause geliefert.
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

          <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-grayMid shadow-soft">
            <p className="font-semibold text-primary">
              Regionale &amp; bundesweite Versorgung
            </p>
            <p className="mt-2">
              In Wuppertal &amp; Umgebung begleiten wir Sie persönlich. Für
              Pflegeboxen können – je nach Partner – auch bundesweite
              Lieferungen möglich sein. Wir prüfen dies im Einzelfall für Sie.
            </p>
          </div>
        </div>

        {/* Formular */}
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Pflegeboxen anfragen</h2>
          <p className="mt-2 text-xs text-grayMid">
            Bitte füllen Sie die folgenden Felder aus – wir melden uns
            schnellstmöglich telefonisch bei Ihnen, um alles Weitere zu
            besprechen.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
                {error}
              </div>
            )}
            {success && (
              <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-3 py-2 text-xs text-primary">
                <span className="text-lg">✔</span>
                <span>
                  Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze
                  telefonisch bei Ihnen.
                </span>
              </div>
            )}

            {/* Name pflegebedürftige Person */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Name der pflegebedürftigen Person*
              </label>
              <input
                type="text"
                name="carePersonName"
                value={form.carePersonName}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            {/* Kontaktperson */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Name der Kontaktperson (falls abweichend)
              </label>
              <input
                type="text"
                name="contactName"
                value={form.contactName}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            {/* Telefon */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Telefonnummer für Rückruf*
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            {/* E-Mail */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                E-Mail (optional)
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            {/* Adresse */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Straße &amp; Hausnummer*
              </label>
              <input
                type="text"
                name="street"
                value={form.street}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-textDark">
                  PLZ*
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-textDark">
                  Ort*
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            {/* Pflegegrad */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Pflegegrad*
              </label>
              <select
                name="careLevel"
                value={form.careLevel}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              >
                <option value="">Bitte wählen</option>
                <option value="1">Pflegegrad 1</option>
                <option value="2">Pflegegrad 2</option>
                <option value="3">Pflegegrad 3</option>
                <option value="4">Pflegegrad 4</option>
                <option value="5">Pflegegrad 5</option>
              </select>
            </div>

            {/* Kasse */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Pflegekasse / Krankenkasse*
              </label>
              <input
                type="text"
                name="healthInsurance"
                value={form.healthInsurance}
                onChange={handleChange}
                placeholder="z. B. AOK, Barmer, TK ..."
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            {/* Produkte */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Gewünschte Pflegehilfsmittel
              </label>
              <p className="mt-1 text-[11px] text-grayMid">
                Eine Anpassung ist später jederzeit möglich. Standardmäßig sind
                Handschuhe und Desinfektion vorausgewählt.
              </p>
              <div className="mt-2 grid gap-2 text-xs text-grayMid">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="productGloves"
                    checked={form.productGloves}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Einmalhandschuhe
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="productDesinfection"
                    checked={form.productDesinfection}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Desinfektionsmittel
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="productBedPads"
                    checked={form.productBedPads}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Bettschutzeinlagen
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="productMasks"
                    checked={form.productMasks}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Mundschutz / FFP2-Masken
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="productApron"
                    checked={form.productApron}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Schutzschürzen
                </label>
              </div>
            </div>

            {/* Lieferhinweise */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Hinweise zur Lieferung (optional)
              </label>
              <textarea
                name="deliveryNotes"
                value={form.deliveryNotes}
                onChange={handleChange}
                rows={3}
                placeholder="z. B. Bitte beim Nachbarn abgeben, falls niemand zuhause ist."
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            {/* Datenschutz / WhatsApp */}
            <div className="space-y-2 rounded-xl bg-bgLight/40 p-3 text-xs text-grayMid">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="consentPrivacy"
                  checked={form.consentPrivacy}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                />
                <span>
                  Ich habe die{" "}
                  <a href="/datenschutz" className="text-primary underline">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und akzeptiere sie.*
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="consentWhatsApp"
                  checked={form.consentWhatsApp}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                />
                <span>
                  Ich bin einverstanden, dass Sie mich zusätzlich per WhatsApp
                  kontaktieren dürfen.
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 disabled:opacity-70"
            >
              {isSubmitting
                ? "Wird gesendet …"
                : "Pflegeboxen unverbindlich anfragen"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
