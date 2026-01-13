import { Syringe, Sparkles, Smile, Eraser, PenTool } from "lucide-react";

const services = [
  {
    title: "Modelowanie Ust",
    description: "Zabiegi kwasem hialuronowym nadające ustom wymarzony kształt i objętość.",
    icon: Smile,
  },
  {
    title: "Mezoterapia Igłowa",
    description: "Głębokie odżywienie skóry, redukcja zmarszczek i poprawa jędrności.",
    icon: Syringe,
  },
  {
    title: "Toksyna Botulinowa",
    description: "Skuteczna redukcja zmarszczek mimicznych oraz leczenie nadpotliwości.",
    icon: Sparkles,
  },
  {
    title: "Dermapen",
    description: "Mikronakłuwanie stymulujące naturalne procesy regeneracyjne skóry.",
    icon: PenTool,
  },
  {
    title: "Peelingi Chemiczne",
    description: "Odświeżenie naskórka, redukcja przebarwień i blizn.",
    icon: Eraser,
  },
];

export default function Services() {
  return (
    <section id="oferta" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
            Nasza Oferta
          </h2>
          <div className="w-24 h-0.5 bg-stone-300 mx-auto"></div>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Oferujemy szeroki wachlarz zabiegów medycyny estetycznej, wykonywanych
            z najwyższą starannością i dbałością o bezpieczeństwo pacjenta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-stone-100 bg-stone-50 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-full text-stone-800 group-hover:text-stone-600 transition-colors">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-serif text-center mb-3 text-stone-900">
                {service.title}
              </h3>
              <p className="text-stone-600 text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

