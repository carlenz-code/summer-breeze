import Hero from "@/components/sections/Hero";
import BestSeller from "@/components/sections/BestSeller";
import Historia from "@/components/sections/Historia";
import Testimonios from "@/components/sections/Testimonios";
import SeccionUbicacion from "@/components/sections/SeccionUbicacion";
import ZoomParallax from "@/components/sections/ZoomParallax";

export default function HomePage() {
  return (
    <main className="relative h-[200vh]">
      <Hero />
      <BestSeller />
      <ZoomParallax /> {/* 👈 nuevo zoom parallax */}
      
      <Testimonios />
      <SeccionUbicacion />
    </main>
  );
}
