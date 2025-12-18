// components/cta/ContactCtaBar.tsx
"use client";

import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/491728804949";
const PHONE_LINK = "tel:+491728804949";

export default function ContactCtaBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const [showError, setShowError] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setConsent(false);
    setShowError(false);
  };

  const handleWhatsAppContinue = () => {
    if (!consent) {
      setShowError(true);
      return;
    }
    window.open(WHATSAPP_LINK, "_blank");
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="border-t border-bgLight bg-white">
        <div className="container flex flex-col items-start justify-between gap-4 py-6 text-sm text-grayMid md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Nächster Schritt
            </p>
            <p className="mt-1 text-sm font-semibold text-textDark">
              Lassen Sie uns kurz sprechen – wir klären Ihre Fragen persönlich.
            </p>
            <p className="mt-1 text-xs text-grayMid md:text-sm">
              Ob Pflegegrad, Alltagsbegleitung oder Pflegeboxen: Wir melden uns
              zeitnah bei Ihnen.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center rounded-full bg-bgLight px-4 py-2 text-xs font-semibold text-textDark hover:bg-bgLight/80"
            >
              Jetzt anrufen
            </a>

            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-soft hover:bg-primary/90"
            >
              WhatsApp-Chat starten
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="text-sm font-semibold text-textDark md:text-base">
              Hinweis zu WhatsApp
            </h2>
            <p className="mt-2 text-xs text-grayMid md:text-sm">
              Für den Chat verwenden wir WhatsApp. WhatsApp ist ein Dienst der
              Meta Platforms Ireland Limited. Dabei werden Daten ggf. auch in
              Drittländer (z. B. USA) übertragen. Details finden Sie in unserer{" "}
              <a href="/datenschutz" className="text-primary underline">
                Datenschutzerklärung
              </a>
              .
            </p>
            <p className="mt-2 text-xs text-grayMid md:text-sm">
              Wenn Sie fortfahren, öffnen wir einen Chat mit TANER CARE in
              WhatsApp.
            </p>

            <label className="mt-3 flex items-start gap-2 text-xs text-grayMid md:text-sm">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (e.target.checked) setShowError(false);
                }}
                className="mt-0.5 h-4 w-4 rounded border-grayMid text-primary focus:ring-primary"
              />
              <span>
                Ich bin einverstanden, dass meine Daten im Rahmen der
                Kontaktaufnahme über WhatsApp verarbeitet werden.
              </span>
            </label>

            {showError && (
              <p className="mt-2 text-xs text-red-600">
                Bitte stimmen Sie der Verarbeitung über WhatsApp zu, um
                fortzufahren.
              </p>
            )}

            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full bg-bgLight px-4 py-1.5 text-xs font-semibold text-textDark hover:bg-bgLight/80"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleWhatsAppContinue}
                className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-primary/90"
              >
                Weiter zu WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
