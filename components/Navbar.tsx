"use client";

import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Start", href: "#start" },
    { name: "O mnie", href: "#o-mnie" },
    { name: "Oferta", href: "#oferta" },
    { name: "Cennik", href: "#cennik" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col justify-center items-start">
            <Link href="/" className="font-serif text-2xl tracking-widest text-stone-900 uppercase">
              Klaudia Wieczorek
            </Link>
            <span className="text-xs tracking-[0.3em] text-stone-500 uppercase w-full text-center">
              Aesthetic
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <a href="https://instagram.com/dr_klaudiawieczorek" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900">
              <Instagram size={20} />
            </a>
            <Link
              href="#kontakt"
              className="bg-stone-900 text-white px-6 py-2.5 text-xs font-medium hover:bg-stone-800 transition-colors uppercase tracking-[0.1em]"
            >
              Umów się na wizytę
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-stone-600 hover:text-stone-900 hover:bg-stone-50 px-3 py-2 text-base font-medium uppercase tracking-wider text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

