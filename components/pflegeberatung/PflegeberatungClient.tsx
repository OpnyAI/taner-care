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
  consultationType: string;
  preferredTimeframe: string;
  mdAppointmentHelp: boolean;
  notes: string;
  consentPrivacy: boolean;
  consentWhatsApp: boolean;
};

export default function PflegeberatungClient() {
  const [form, setForm] = useState<FormState>({
    carePersonName: "",
    contactName: "",
    phone: "",
    email: "",
    postalCode: "",
    careLevel: "",
    consultationType: "",
    preferredTimeframe: "",
    mdAppointmentHelp: false,
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
      return "Bitte wählen Sie einen Pflegegrad.";
    }
    if (!form.consultationType.trim()) {
      return "Bitte wählen Sie die gewünschte Form der Beratung.";
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
      console.log("Pflegeberatung Formular:", form);

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
              Pflegeberatung nach §37.3 SGB XI
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Pflegeberatung – Pflichtbesuche verständlich &amp; unkompliziert.
            </h1>
            <p className="mt-4 text-sm text-grayMid md:text-base">
              Pflegegeld-Empfänger müssen regelmäßige Beratungsbesuche
              nachweisen. Wir führen diese fachgerecht, ruhig und verständlich
              durch – als Hausbesuch vor Ort.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-grayMid md:grid-cols-2">
              <div>✓ Gesetzlich anerkannte Beratungsbesuche</div>
              <div>✓ Tipps zur Pflege &amp; Entlastung</div>
              <div>✓ Unterstützung bei Anträgen</div>
              <div>✓ Dokumentation für die Pflegekasse</div>
            </div>
            <div className="mt-6 rounded-2xl bg-bgLight p-4 text-sm text-grayMid">
              <p>
                <span className="font-semibold text-primary">Kosten:</span> Die
                Pflegeberatung ist für Sie{" "}
                <span className="font-semibold">100 % kostenfrei</span>. Die
                Abrechnung erfolgt direkt mit der Pflegekasse.
              </p>
            </div>

            {/* Regional-Hinweis konsistent */}
            <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-grayMid shadow-soft">
              <p className="font-semibold text-primary">
                Regional verfügbar: Wuppertal &amp; Umgebung
              </p>
              <p className="mt-2">
                Auf Wunsch prüfen wir einen erweiterten Radius bis Köln –
                abhängig von Terminlage und Entfernung.
              </p>
            </div>
          </div>

          {/* Hero-Bild */}
          <div className="md:w-2/5">
            <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl bg-bgLight shadow-soft">
              <Image
                src="/images/pflegeberatung/hero-pflegeberatung.jpg"
                alt="Pflegeberatung nach §37.3 SGB XI – Beratungssituation"
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
            Was ist die Pflegeberatung nach §37.3?
          </h2>
          <p className="mt-4 text-sm text-grayMid md:text-base">
            Wer Pflegegeld erhält, ist verpflichtet, in regelmäßigen Abständen
            einen Beratungsbesuch durch einen anerkannten Pflegedienst
            nachzuweisen. Diese Besuche sollen sicherstellen, dass die Pflege
            gut organisiert ist und die pflegebedürftige Person angemessen
            versorgt wird.
          </p>
          <p className="mt-3 text-sm text-grayMid md:text-base">
            Wir führen diese Beratungen ruhig, verständlich und ohne Druck durch
            – mit Zeit für Ihre Fragen, Sorgen und Themen, die Sie beschäftigen.
          </p>

          <h3 className="mt-6 text-lg font-semibold">
            Wie oft ist ein Beratungsbesuch nötig?
          </h3>
          <ul className="mt-3 list-inside list-disc text-sm text-grayMid md:text-base">
            <li>Pflegegrad 2 &amp; 3: mindestens alle 6 Monate</li>
            <li>Pflegegrad 4 &amp; 5: mindestens alle 3 Monate</li>
            <li>
              Pflegegrad 1: Beratung ist freiwillig, kann aber sinnvoll sein
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Inhalte der Beratung</h3>
          <ul className="mt-3 list-inside list-disc text-sm text-grayMid md:text-base">
            <li>Überblick über die aktuelle Pflegesituation</li>
            <li>Tipps zur Entlastung im Pflegealltag</li>
            <li>
              Hinweise zu weiteren Leistungen der Pflegekasse (z. B.
              Entlastungsbetrag, Verhinderungspflege)
            </li>
            <li>Unterstützung bei Anträgen &amp; Formularen</li>
            <li>Dokumentation und Weiterleitung an die Pflegekasse</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Hausbesuch vor Ort</h3>
          <p className="mt-3 text-sm text-grayMid md:text-base">
            Die Pflegeberatung führen wir als Hausbesuch durch. So können wir
            die Situation realistisch einschätzen und Sie praxisnah
            unterstützen.
          </p>

          {/* 3-Schritte-Box */}
          <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-grayMid shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              So läuft die Pflegeberatung ab
            </p>

            <ol className="mt-3 space-y-3">
              <li>
                <span className="font-semibold text-textDark">
                  1. Termin anfragen.
                </span>{" "}
                Sie melden sich telefonisch oder über das Formular und nennen
                uns kurz Ihre Situation und den Pflegegrad.
              </li>
              <li>
                <span className="font-semibold text-textDark">
                  2. Beratungsgespräch.
                </span>{" "}
                Wir kommen zu Ihnen nach Hause – mit Zeit für alle offenen
                Fragen.
              </li>
              <li>
                <span className="font-semibold text-textDark">
                  3. Nachweis an Pflegekasse.
                </span>{" "}
                Wir dokumentieren den Besuch und leiten den Nachweis an die
                Pflegekasse weiter. Die Abrechnung erfolgt direkt.
              </li>
            </ol>

            <p className="mt-3 text-xs text-grayMid">
              Sie erhalten auf Wunsch eine kurze Rückmeldung, sobald der
              Nachweis an die Pflegekasse übermittelt wurde.
            </p>
          </div>
        </div>

        {/* Formular */}
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Pflegeberatung anfragen</h2>
          <p className="mt-2 text-xs text-grayMid">
            Bitte füllen Sie die folgenden Felder aus – wir melden uns
            schnellstmöglich telefonisch bei Ihnen zur Terminvereinbarung.
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
              </select>
            </div>

            {/* Art der Beratung */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Gewünschte Form der Beratung*
              </label>
              <select
                name="consultationType"
                value={form.consultationType}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              >
                <option value="">Bitte wählen</option>
                <option value="home">Hausbesuch vor Ort</option>
                <option value="flexible">Egal, bitte Rücksprache</option>
              </select>
            </div>

            {/* Zeitraum */}
            <div>
              <label className="text-xs font-semibold text-textDark">
                Bevorzugter Zeitraum (z. B. vormittags)
              </label>
              <input
                type="text"
                name="preferredTimeframe"
                value={form.preferredTimeframe}
                onChange={handleChange}
                placeholder="z. B. vormittags, Dienstag oder Donnerstag"
                className="mt-1 w-full rounded-xl border border-bgLight bg-bgLight/40 px-3 py-2 text-sm outline-none focus:border-primary focus:bg-white"
              />
            </div>

            {/* Hilfe MD-Termin */}
            <div className="space-y-2 rounded-xl bg-bgLight/40 p-3 text-xs text-grayMid">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="mdAppointmentHelp"
                  checked={form.mdAppointmentHelp}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
                />
                <span>
                  Ich wünsche Unterstützung bei der Vorbereitung auf einen
                  Termin mit dem Medizinischen Dienst (MD).
                </span>
              </label>
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
                : "Pflegeberatung unverbindlich anfragen"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
