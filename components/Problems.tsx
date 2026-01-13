import Link from "next/link";
import { ArrowRight, Frown, Sparkles, Zap, Sun, Clock, Heart } from "lucide-react";

const problems = [
    {
        title: "Zmarszczki mimiczne",
        description: "Wygładzenie czoła, kurzych łapek i lwich zmarszczek.",
        icon: Frown,
        href: "#oferta",
    },
    {
        title: "Utrata objętości ust",
        description: "Nadanie ustom wymarzonego kształtu i nawilżenia.",
        icon: Heart,
        href: "#oferta",
    },
    {
        title: "Wiotkość skóry",
        description: "Poprawa jędrności i gęstości skóry twarzy oraz szyi.",
        icon: Sparkles,
        href: "#oferta",
    },
    {
        title: "Przebarwienia",
        description: "Redukcja plam słonecznych i wyrównanie kolorytu.",
        icon: Sun,
        href: "#oferta",
    },
    {
        title: "Zmęczone spojrzenie",
        description: "Redukcja cieni i doliny łez dla świeżego wyglądu.",
        icon: Clock,
        href: "#oferta",
    },
    {
        title: "Blizny i nierówności",
        description: "Wygładzenie struktury skóry i redukcja niedoskonałości.",
        icon: Zap,
        href: "#oferta",
    },
];

export default function Problems() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-stone-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-stone-500 tracking-[0.2em] uppercase text-sm mb-4 block">
                        Twój cel
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
                        Co chcesz poprawić?
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Każda twarz ma swoją historię. Wybierz obszar, który chcesz udoskonalić,
                        a dobierzemy dla Ciebie odpowiednią terapię.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className="group block p-8 bg-white border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <item.icon size={64} className="text-stone-900" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-stone-900 transition-colors duration-300">
                                    <item.icon size={24} className="text-stone-900 group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-stone-900 opacity-60 group-hover:opacity-100 transition-opacity">
                                    Zobacz zabiegi <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
