import Hero from "@/components/sections/Hero";
import BestSeller from "@/components/sections/BestSeller";
import Historia from "@/components/sections/Historia";
import Testimonios from "@/components/sections/Testimonios";
import SeccionUbicacion from "@/components/sections/SeccionUbicacion";
import Historia1 from "@/components/sections/Historia1";
import FooterSticky from "@/components/footer/FooterSticky";
import Historia2 from "@/components/sections/Historia2";

export default function HomePage() {
  return (
    <main className="relative h-[200vh]">
      <Hero />
      <BestSeller />
      
      <Historia1 />
      <Historia2 />
      <Testimonios />
      <FooterSticky />
    </main>
  );
}
