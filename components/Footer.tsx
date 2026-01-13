import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-2xl text-white mb-4">Klaudia Wieczorek</h4>
            <span className="text-xs tracking-[0.3em] uppercase mb-6 block">Aesthetic</span>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              Medycyna estetyczna z pasją. Podkreślamy Twoje naturalne piękno, dbając o każdy detal.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg text-white mb-6">Kontakt</h4>
            <div className="space-y-4">
              <a href="https://instagram.com/dr_klaudiawieczorek" className="flex items-center space-x-3 hover:text-white transition-colors">
                <Instagram size={18} />
                <span>@dr_klaudiawieczorek</span>
              </a>
              {/* Placeholders for other contact info if not provided */}
              <div className="flex items-center space-x-3 text-stone-500">
                <Phone size={18} />
                <span>+48 000 000 000</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-500">
                <Mail size={18} />
                <span>kontakt@klaudiawieczorek.pl</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-500">
                <MapPin size={18} />
                <span>Warszawa, Polska</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg text-white mb-6">Godziny otwarcia</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="flex justify-between w-40">
                <span>Pon - Pt:</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between w-40">
                <span>Sobota:</span>
                <span>10:00 - 14:00</span>
              </li>
              <li className="flex justify-between w-40">
                <span>Niedziela:</span>
                <span>Zamknięte</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Klaudia Wieczorek Aesthetic. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

