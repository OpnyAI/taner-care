// components/cta/MobileStickyCtaBar.tsx
"use client";

import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/491728804949";
const PHONE_LINK = "tel:+491728804949";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-12.9 7.2L3 20l1.4-4.7A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8.5 9.5c.2 2.2 2.7 4.7 4.9 4.9" />
    </svg>
  );
}

export default function MobileStickyCtaBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("footer-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(!entry.isIntersecting));
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

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
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Sticky CTA Bar (Mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-bgLight bg-white/95 shadow-soft backdrop-blur md:hidden">
        <div className="px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex gap-3">
            {/* Call */}
            <a
              href={PHONE_LINK}
              className="flex h-12 w-1/2 items-center justify-center gap-2 rounded-full bg-bgLight text-[13px] font-semibold text-textDark shadow-soft hover:bg-bgLight/80 active:scale-[0.99] transition"
            >
              <PhoneIcon />
              Anrufen
            </a>

            {/* WhatsApp */}
            <button
              type="button"
              onClick={openModal}
              className="flex h-12 w-1/2 items-center justify-center gap-2 rounded-full bg-primary text-[13px] font-semibold text-white shadow-soft hover:bg-primary/90 active:scale-[0.99] transition"
            >
              <WhatsAppIcon />
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Consent Modal */}
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
                className="rounded-full bg-bgLight px-4 py-2 text-xs font-semibold text-textDark hover:bg-bgLight/80"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleWhatsAppContinue}
                className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary/90"
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
