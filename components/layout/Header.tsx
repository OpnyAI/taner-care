"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-bgLight bg-white/90 backdrop-blur shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo-Bereich */}
        <Link href="/" className="flex items-center gap-3">
          {/* Neues Logo (statt Kreis mit T) */}
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image
              src="/images/branding/logo-icon.png"
              alt="TANER CARE GRUPPE Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Text daneben bleibt wie bisher */}
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-primary">
              TANER CARE GRUPPE
            </span>
            <span className="text-xs text-grayMid">
              Pflegeberatung & Alltagsbegleitung in Wuppertal
            </span>
          </div>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm hover:text-primary transition-colors"
          >
            Startseite
          </Link>
          <Link
            href="/alltagsbegleitung"
            className="text-sm hover:text-primary"
          >
            Alltagsbegleitung
          </Link>
          <Link href="/pflegeberatung" className="text-sm hover:text-primary">
            Pflegeberatung §37.3
          </Link>
          <Link href="/pflegeboxen" className="text-sm hover:text-primary">
            Pflegeboxen
          </Link>
          <Link href="/ueber-uns" className="text-sm hover:text-primary">
            Über uns
          </Link>
          <Link href="/faq" className="text-sm hover:text-primary">
            FAQ
          </Link>

          <Link
            href="/kontakt"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
          >
            Jetzt Pflegeberatung anfragen
          </Link>
        </nav>

        {/* Mobile-Menü Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-bgLight p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-textDark" />
            <span className="block h-0.5 w-5 bg-textDark" />
            <span className="block h-0.5 w-5 bg-textDark" />
          </div>
        </button>
      </div>

      {/* Mobile-Menü */}
      {isOpen && (
        <div className="border-t border-bgLight bg-white md:hidden">
          <nav className="container flex flex-col gap-3 py-4 text-sm">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Startseite
            </Link>
            <Link href="/alltagsbegleitung" onClick={() => setIsOpen(false)}>
              Alltagsbegleitung
            </Link>
            <Link href="/pflegeberatung" onClick={() => setIsOpen(false)}>
              Pflegeberatung §37.3
            </Link>
            <Link href="/pflegeboxen" onClick={() => setIsOpen(false)}>
              Pflegeboxen
            </Link>
            <Link href="/ueber-uns" onClick={() => setIsOpen(false)}>
              Über uns
            </Link>
            <Link href="/faq" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>

            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2 text-center font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
            >
              Jetzt Pflegeberatung anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
