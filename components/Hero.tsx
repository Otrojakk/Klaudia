import Image from "next/image";

export default function Hero() {
  return (
    <section id="start" className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.png"
          alt="Kompozycja kwiatowa na marmurowym tle"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="block text-stone-500 tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in">
          Medycyna Estetyczna
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 leading-tight">
          Naturalne Piękno <br />
          <span className="italic font-light">w Twoim zasięgu</span>
        </h1>
        <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Profesjonalne zabiegi dopasowane do Twoich potrzeb.
          Poczuj się pewnie i wyglądaj zjawiskowo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cennik"
            className="px-8 py-3 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors"
          >
            Zobacz Cennik
          </a>
          <a
            href="#kontakt"
            className="px-8 py-3 border border-stone-900 text-stone-900 text-sm tracking-widest uppercase hover:bg-stone-100 transition-colors"
          >
            Umów Wizytę
          </a>
        </div>
      </div>
    </section>
  );
}

