"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

type FormState = {
  carePersonName: string;
  contactName: string;
  phone: string;
  email: string;
  postalCode: string;
  careLevel: string;
  supportHousehold: boolean;
  supportShopping: boolean;
  supportDoctor: boolean;
  supportWalks: boolean;
  supportRelief: boolean;
  preferredTimes: string;
  notes: string;
  consentPrivacy: boolean;
  consentWhatsApp: boolean;
};

export default function AlltagsbegleitungClient() {
  const [form, setForm] = useState<FormState>({
    carePersonName: "",
    contactName: "",
    phone: "",
    email: "",
    postalCode: "",
    careLevel: "",
    supportHousehold: false,
    supportShopping: false,
    supportDoctor: false,
    supportWalks: false,
    supportRelief: false,
    preferredTimes: "",
    notes: "",
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
    if (!form.postalCode.trim()) {
      return "Bitte geben Sie den Wohnort / die Postleitzahl an.";
    }
    if (!form.careLevel.trim()) {
      return "Bitte wählen Sie einen Pflegegrad oder „noch nicht vorhanden“.";
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
      // Hier später: API-Call / E-Mail-Versand einbauen
      console.log("Alltagsbegleitung Formular:", form);

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
              Alltagsbegleitung Taner
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Alltagsbegleitung – Unterstützung im Alltag, die gut tut.
            </h1>
            <p className="mt-4 text-sm text-grayMid md:text-base">
              Wir unterstützen im täglichen Leben, fördern Selbstständigkeit und
              entlasten Angehörige. Mit Zeit für Gespräche, gemeinsame Wege und
              praktische Hilfe im Alltag.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-grayMid md:grid-cols-2">
              <div>✓ Haushalt &amp; Einkäufe</div>
              <div>✓ Arztbegleitung &amp; Termine</div>
              <div>✓ Spaziergänge &amp; Gespräche</div>
              <div>✓ Entlastung der Angehörigen</div>
            </div>
            <div className="mt-6 rounded-2xl bg-bgLight p-4 text-sm text-grayMid">
              <p>
                <span className="font-semibold text-primary">
                  Kosten &amp; Abrechnung:
                </span>{" "}
                131 € pro Monat über den Entlastungsbetrag (§45b SGB XI) – wir
                rechnen direkt mit der Pflegekasse ab. Für Sie entstehen keine
                zusätzlichen Kosten.
              </p>
            </div>
          </div>

          {/* Hero-Bild */}
          <div className="md:w-2/5">
            <div className="relative h-64 overflow-hidden rounded-2xl bg-bgLight shadow-soft md:h-72">
              <Image
                src="/images/alltagsbegleitung/hero-alltagsbegleitung.jpg"
                alt="Alltagsbegleitung Taner – Unterstützung im Alltag"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inhalt + Formular */}
      <section className="container grid gap-10 py-12 md:grid-cols-[1.2fr,1fr] md:py-16">
        {/* Textbereich */}
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Was ist die Alltagsbegleitung?
          </h2>
          <p className="mt-4 text-sm text-grayMid md:text-base">
            Wir unterstützen im täglichen Leben, fördern Selbstständigkeit und
            sorgen für Entlastung. Die Alltagsbegleitung ist eine Ergänzung zur
            Pflege – damit der Tag leichter wird und Angehörige durchatmen
            können.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Leistungen</h3>
          <ul className="mt-3 list-inside list-disc text-sm text-grayMid md:text-base">
            <li>Hilfe im Haushalt</li>
            <li>Einkäufe &amp; Besorgungen</li>
            <li>Begleitung zu Arztterminen</li>
            <li>Spaziergänge, Gespräche &amp; Freizeit</li>
            <li>Unterstützung bei Anträgen</li>
            <li>Entlastung für Angehörige</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Für wen geeignet?</h3>
          <ul className="mt-3 list-inside list-disc text-sm text-grayMid md:text-base">
            <li>Pflegegrad 1–5</li>
            <li>Seniorinnen und Senioren</li>
            <li>Menschen mit körperlichen oder seelischen Einschränkungen</li>
            <li>Angehörige, die Unterstützung benötigen</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Was wir übernehmen</h3>
          <ul className="mt-3 list-inside list-disc text-sm text-grayMid md:text-base">
            <li>Antragstellung bei der Pflegekasse</li>
            <li>Abstimmung mit der Pflegekasse</li>
            <li>Planung der Einsätze</li>
          </ul>

          {/* 3-Schritte-Box */}
          <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-grayMid shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              In 3 Schritten zur Alltagsbegleitung
            </p>

            <ol className="mt-3 space-y-3">
              <li>
                <span className="font-semibold text-textDark">
                  1. Kurz sprechen.
                </span>{" "}
                Sie melden sich telefonisch oder über das Formular und erzählen
                uns kurz Ihre Situation.
              </li>
              <li>
                <span className="font-semibold text-textDark">
                  2. Gemeinsamen Plan finden.
                </span>{" "}
                Wir prüfen zusammen, welche Einsätze sinnvoll sind und wie die
                Abrechnung über die Pflegekasse läuft.
              </li>
              <li>
                <span className="font-semibold text-textDark">
                  3. Einsätze starten.
                </span>{" "}
                Wir beginnen mit der Alltagsbegleitung, passen die Termine
                flexibel an und bleiben Ihr fester Ansprechpartner.
              </li>
            </ol>

            <p className="mt-3 text-xs text-grayMid">
              Auf Wunsch erinnern wir Sie an Termine und passen Umfang und
              Häufigkeit der Einsätze jederzeit an Ihre Situation an.
            </p>
          </div>

          {/* Hinweis-Box */}
          <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-grayMid shadow-soft">
            <p className="font-semibold text-primary">
              Nur regional verfügbar: Wuppertal &amp; Umgebung
            </p>
            <p className="mt-2">
              Elberfeld, Barmen, Vohwinkel, Ronsdorf und Cronenberg. Wir prüfen
              gemeinsam, ob Ihr Wohnort abgedeckt ist.
            </p>
          </div>
        </div>

        {/* Formular */}
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Alltagsbegleitung anfragen</h2>
          <p className="mt-2 text-xs text-grayMid">
            Bitte füllen Sie die folgenden Felder aus – wir melden uns
            schnellstmöglich telefonisch bei Ihnen.
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

            {/* PLZ / Ort */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Wohnort / PLZ*
              </label>
              <input
                type="text"
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
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
                <option value="none">Pflegegrad noch nicht vorhanden</option>
              </select>
            </div>

            {/* Wünsche / Leistungen */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Gewünschte Unterstützung (Mehrfachauswahl)
              </label>
              <div className="mt-2 grid gap-2 text-xs text-grayMid">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="supportHousehold"
                    checked={form.supportHousehold}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Haushalt &amp; Einkäufe
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="supportShopping"
                    checked={form.supportShopping}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Einkäufe &amp; Besorgungen
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="supportDoctor"
                    checked={form.supportDoctor}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Begleitung zu Arztterminen
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="supportWalks"
                    checked={form.supportWalks}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Spaziergänge &amp; Gespräche
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="supportRelief"
                    checked={form.supportRelief}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                  />
                  Entlastung für Angehörige
                </label>
              </div>
            </div>

            {/* Wunschzeiten */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Wunsch-Tage / Uhrzeiten (optional)
              </label>
              <input
                type="text"
                name="preferredTimes"
                value={form.preferredTimes}
                onChange={handleChange}
                placeholder="z. B. vormittags, Montag und Mittwoch"
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            {/* Freitext */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Was ist Ihnen besonders wichtig? (optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
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
                : "Alltagsbegleitung unverbindlich anfragen"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
