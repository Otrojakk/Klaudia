import Image from "next/image";

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const prices: PriceCategory[] = [
  {
    title: "Konsultacje",
    items: [
      { name: "Konsultacja w dniu zabiegu", price: "bezpłatnie" },
      { name: "Konsultacja w dzień inny niż zabieg", price: "100 zł" },
    ],
  },
  {
    title: "Modelowanie Ust",
    items: [
      { name: "Modelowanie ust kwasem hialuronowym", price: "1300 zł" },
      { name: "Rozpuszczanie kwasu (Hialuronidaza)", price: "300 - 1000 zł" },
    ],
  },
  {
    title: "Toksyna Botulinowa",
    items: [
      { name: "1 okolica", price: "600 zł" },
      { name: "2 okolice", price: "1000 zł" },
      { name: "3 okolice", price: "1200 zł" },
      { name: "Leczenie nadpotliwości", price: "1500 zł" },
      { name: "Leczenie bruksizmu", price: "1500 zł" },
      { name: "Lifting Nefretete", price: "1500 zł" },
    ],
  },
  {
    title: "Mezoterapia Igłowa",
    items: [
      { name: "Osocze bogatopłytkowe - wampirzy lifting", price: "1000 zł" },
      { name: "Pakiet 4 zabiegów (Osocze)", price: "3000 zł" },
      { name: "Neauvia Hydro Deluxe", price: "700 zł" },
      { name: "Pakiet 4 zabiegów (Neauvia)", price: "2400 zł" },
      { name: "Dr Cyj - mezoterapia skóry głowy", price: "600 zł" },
      { name: "Pakiet 4 zabiegów (Dr Cyj)", price: "2000 zł" },
    ],
  },
  {
    title: "Dermapen",
    items: [
      { name: "1 obszar", price: "700 zł" },
      { name: "2 obszary", price: "1000 zł" },
      { name: "3 obszary", price: "1200 zł" },
    ],
  },
  {
    title: "Peelingi",
    items: [
      { name: "Retix C", price: "500 zł" },
      { name: "Derma Peel", price: "600 zł" },
    ],
  },
];

export default function PriceList() {
  return (
    <section id="cennik" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
            Cennik
          </h2>
          <div className="w-24 h-0.5 bg-stone-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-12">
            {prices.map((category, idx) => (
              <div key={idx} className="bg-white p-8 border border-stone-100 shadow-sm">
                <h3 className="text-xl font-serif text-stone-800 mb-6 border-b border-stone-100 pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex justify-between items-end text-sm md:text-base">
                      <span className="text-stone-600 font-medium">{item.name}</span>
                      <div className="flex-grow border-b border-dotted border-stone-300 mx-4 mb-1"></div>
                      <span className="text-stone-900 font-bold whitespace-nowrap">{item.price}</span>
                    </li>
                  ))}
                </ul>
                {category.title === "Dermapen" && (
                  <p className="mt-4 text-xs text-stone-400 italic">
                    Okolice zabiegowe: twarz, szyja, dekolt
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 sticky top-32 hidden lg:block">
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/interior.png"
                alt="Wnętrze gabinetu"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl italic mb-2">"Piękno to harmonia"</p>
                <p className="text-sm font-light tracking-wide">Zapraszamy do naszego świata estetyki.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

