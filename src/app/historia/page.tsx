"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Lenis from "lenis";

import HistoriaIntro from "@/components/historia/HistoriaIntro";
import Historia1 from "@/components/sections/Historia1";
import Historia2 from "@/components/sections/Historia2";
import FooterSticky from "@/components/footer/FooterSticky";
type SectionProps = {
  scrollYProgress: MotionValue<number>;
};

export default function HistoriaPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 🔁 Smooth scroll como en el ejemplo (puedes quitarlo si ya usas Lenis global)
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    let frame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative h-[200vh] bg-black"
    >
      <IntroSection scrollYProgress={scrollYProgress} />
      <HistoriaSection scrollYProgress={scrollYProgress} />
    </main>
  );
}

const IntroSection = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen origin-center"
    >
      <HistoriaIntro />
    </motion.div>
  );
};

const HistoriaSection = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen origin-center"
    >
      <Historia1 />
      <Historia2/>
      <FooterSticky />
      
    </motion.div>

    
  );
};
