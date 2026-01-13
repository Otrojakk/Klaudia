import Image from "next/image";

export default function Gallery() {
    const images = [
        { src: "/gallery_1.png", alt: "Naturalne efekty modelowania ust", span: "col-span-1" },
        { src: "/gallery_3.png", alt: "Zadowolona pacjentka, promienny uśmiech", span: "col-span-1" },
        { src: "/gallery_2.png", alt: "Estetyczne detale gabinetu", span: "col-span-1 md:col-span-1" },
    ];

    return (
        <section className="py-12 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <div key={idx} className={`relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${img.span}`}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
