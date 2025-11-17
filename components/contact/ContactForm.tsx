"use client";

import { useState, FormEvent } from "react";

type ContactReason =
  | "alltagsbegleitung"
  | "pflegeberatung"
  | "pflegeboxen"
  | "pflegegrad"
  | "sonstiges";

type ContactFormState = {
  reason: ContactReason;
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  preferredContact: "telefon" | "whatsapp" | "email";
  consentPrivacy: boolean;
  consentWhatsApp: boolean;
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    reason: "alltagsbegleitung",
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
    preferredContact: "telefon",
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
    if (!form.name.trim()) return "Bitte geben Sie Ihren Namen an.";
    if (!form.phone.trim())
      return "Bitte geben Sie eine Telefonnummer für Rückfragen an.";
    if (!form.city.trim()) return "Bitte geben Sie Ihren Wohnort an.";
    if (!form.consentPrivacy)
      return "Bitte akzeptieren Sie die Datenschutzerklärung.";
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
      // Hier später: API-Request / E-Mail-Versand einbauen
      console.log("Kontaktformular TANER CARE GRUPPE:", form);

      // Fake-Delay zur Simulation
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
    <div className="rounded-2xl bg-white p-6 shadow-soft md:p-7">
      <h2 className="text-xl font-semibold text-textDark md:text-2xl">
        Kontakt & Rückrufwunsch
      </h2>
      <p className="mt-2 text-xs text-grayMid md:text-sm">
        Hinterlassen Sie uns ein paar Angaben – wir melden uns persönlich bei
        Ihnen und besprechen in Ruhe, wie wir unterstützen können.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Fehlermeldung / Erfolg */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
            {error}
          </div>
        )}
        {success && (
          <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-3 py-2 text-xs text-primary">
            <span className="text-lg">✔</span>
            <span>
              Vielen Dank. Ihre Anfrage ist bei uns eingegangen. Wir melden uns
              in Kürze bei Ihnen.
            </span>
          </div>
        )}

        {/* Grund der Kontaktaufnahme */}
        <div>
          <label className="text-xs font-semibold text-textDark">
            Worum geht es?*
          </label>
          <div className="mt-2 grid gap-2 text-xs md:grid-cols-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="reason"
                value="alltagsbegleitung"
                checked={form.reason === "alltagsbegleitung"}
                onChange={handleChange}
                className="h-4 w-4 border-grayMid text-primary focus:ring-primary"
              />
              <span>Alltagsbegleitung Taner</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="reason"
                value="pflegeberatung"
                checked={form.reason === "pflegeberatung"}
                onChange={handleChange}
                className="h-4 w-4 border-grayMid text-primary focus:ring-primary"
              />
              <span>Pflegeberatung (§37.3)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="reason"
                value="pflegeboxen"
                checked={form.reason === "pflegeboxen"}
                onChange={handleChange}
                className="h-4 w-4 border-grayMid text-primary focus:ring-primary"
              />
              <span>Pflegeboxen (42 € Pflegehilfsmittel)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="reason"
                value="pflegegrad"
                checked={form.reason === "pflegegrad"}
                onChange={handleChange}
                className="h-4 w-4 border-grayMid text-primary focus:ring-primary"
              />
              <span>Unterstützung beim Pflegegrad-Antrag</span>
            </label>
            <label className="flex items-center gap-2 md:col-span-2">
              <input
                type="radio"
                name="reason"
                value="sonstiges"
                checked={form.reason === "sonstiges"}
                onChange={handleChange}
                className="h-4 w-4 border-grayMid text-primary focus:ring-primary"
              />
              <span>Sonstiges / Ich bin mir noch unsicher</span>
            </label>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="text-xs font-semibold text-textDark">Name*</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
          />
        </div>

        {/* Telefon + E-Mail */}
        <div className="grid gap-3 md:grid-cols-2">
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
        </div>

        {/* Wohnort */}
        <div>
          <label className="text-xs font-semibold text-textDark">
            Wohnort (Stadt / Ortsteil)*
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="z. B. Wuppertal-Elberfeld"
            className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
          />
          <p className="mt-1 text-[11px] text-grayMid">
            Für die Einordnung, ob Alltagsbegleitung vor Ort möglich ist.
          </p>
        </div>

        {/* Wie können wir helfen? */}
        <div>
          <label className="text-xs font-semibold text-textDark">
            Wie können wir helfen? (kurze Beschreibung)
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
            placeholder="Zum Beispiel: Pflegegrad 3, Mutter lebt allein zu Hause, wir brauchen Unterstützung im Haushalt und Beratung zu Entlastungsmöglichkeiten."
          />
        </div>

        {/* Bevorzugte Kontaktart */}
        <div>
          <label className="text-xs font-semibold text-textDark">
            Wie dürfen wir Sie kontaktieren?*
          </label>
          <div className="mt-2 flex flex-wrap gap-3 text-xs">
            <label className="inline-flex items-center gap-2 rounded-full bg-bgLight/60 px-3 py-1.5">
              <input
                type="radio"
                name="preferredContact"
                value="telefon"
                checked={form.preferredContact === "telefon"}
                onChange={handleChange}
                className="h-4 w-4 border-grayMid text-primary focus:ring-primary"
              />
              Telefon
            </label>
            <label className="inline-flex items-center gap-2 rounded-full bg-bgLight/60 px-3 py-1.5">
              <input
                type="radio"
                name="preferredContact"
                value="whatsapp"
                checked={form.preferredContact === "whatsapp"}
                onChange={handleChange}
                className="h-4 w-4 border-grayMid text-primary focus:ring-primary"
              />
              WhatsApp
            </label>
            <label className="inline-flex items-center gap-2 rounded-full bg-bgLight/60 px-3 py-1.5">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={form.preferredContact === "email"}
                onChange={handleChange}
                className="h-4 w-4 border-grayMid text-primary focus:ring-primary"
              />
              E-Mail
            </label>
          </div>
        </div>

        {/* DSGVO / WhatsApp */}
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
              Ich bin einverstanden, dass Sie mich – falls ausgewählt – über
              WhatsApp kontaktieren dürfen.
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 disabled:opacity-70"
        >
          {isSubmitting ? "Wird gesendet …" : "Unverbindlich Kontakt aufnehmen"}
        </button>
      </form>
    </div>
  );
}
