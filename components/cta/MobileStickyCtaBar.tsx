"use client";

import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/4915201630200";
const PHONE_LINK = "tel:+4915201630200";

export default function MobileStickyCtaBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const [showError, setShowError] = useState(false);

  // Footer-Sentinel beobachten: wenn Footer sichtbar ist -> Bar ausblenden
  useEffect(() => {
    const sentinel = document.getElementById("footer-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        });
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
    window.open(WHATSAPP_LINK, "_blank");
    setIsModalOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Sticky-Bar nur auf Mobile sichtbar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-bgLight bg-white/95 shadow-soft backdrop-blur md:hidden">
        <div className="container flex items-center justify-between gap-3 py-2">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-textDark">
              Jetzt Kontakt aufnehmen
            </span>
            <span className="text-[10px] text-grayMid">
              Wir melden uns zeitnah bei Ihnen.
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center rounded-full bg-bgLight px-3 py-1.5 text-[11px] font-semibold text-textDark"
            >
              Anrufen
            </a>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-white"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* DSGVO-Modal für WhatsApp – identische Logik wie bei der großen CTA-Leiste */}
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
              Wenn Sie fortfahren, öffnen wir einen Chat mit der TANER CARE
              GRUPPE in WhatsApp.
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
