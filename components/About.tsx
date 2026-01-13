import Image from "next/image";

export default function About() {
    return (
        <section id="o-mnie" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/portrait.png"
                            alt="Dr Klaudia Wieczorek"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-stone-500 tracking-[0.2em] uppercase text-sm mb-4 block">
                            O mnie
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
                            Pasja do naturalnego piękna
                        </h2>
                        <p className="text-stone-600 mb-6 leading-relaxed">
                            Dr Klaudia Wieczorek to specjalistka, która z pasją podchodzi do
                            medycyny estetycznej. Jej celem jest wydobycie naturalnego piękna
                            każdej pacjentki, dbając jednocześnie o harmonię i bezpieczeństwo
                            zabiegów.
                        </p>
                        <p className="text-stone-600 mb-8 leading-relaxed">
                            Stale podnoszę swoje kwalifikacje, uczestnicząc w międzynarodowych
                            szkoleniach i konferencjach, aby oferować najnowocześniejsze i
                            najskuteczniejsze metody terapii.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col">
                                <span className="text-4xl font-serif text-stone-900">5+</span>
                                <span className="text-stone-500 text-sm uppercase tracking-wider">Lat doświadczenia</span>
                            </div>
                            <div className="w-px bg-stone-300 hidden sm:block mx-4"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-serif text-stone-900">1000+</span>
                                <span className="text-stone-500 text-sm uppercase tracking-wider">Zadowolonych pacjentek</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
