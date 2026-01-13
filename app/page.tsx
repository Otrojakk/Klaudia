import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import PriceList from "@/components/PriceList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <About />
      <Problems />
      <Gallery />
      <Services />
      <PriceList />
      <Footer />
    </main>
  );
}
