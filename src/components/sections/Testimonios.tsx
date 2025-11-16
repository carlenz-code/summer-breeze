"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const testimonios = [
  {
    id: 1,
    nombre: "Nathalie C",
    texto:
      "Una experiencia inolvidable! El ceviche Clásico fue una obra maestra de frescura. Desde el primer bocado hasta el último momento, fue pura dicha culinaria tica. ¡Totalmente recomendado!",
    avatar: "/users/persona1.jpg",
  },
  {
    id: 2,
    nombre: "Carlos M",
    texto:
      "Excelente servicio, atención y comida. Probamos el Ceviche Mixto y el de Camarón al Coco, ¡simplemente espectaculares!",
    avatar: "/users/persona2.jpg",
  },
  {
    id: 3,
    nombre: "Lucía G",
    texto:
      "Ambiente cálido, sabores auténticos y una atención impecable. Sin duda uno de los mejores ceviche bars del país.",
    avatar: "/users/persona3.avif",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => count.set(v),
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, count]);

  return <motion.span ref={ref}>{rounded.get()}</motion.span>;
};

export default function Testimonios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonios[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonios"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden text-white"
    >
      {/* === Fondo === */}
      <div className="absolute inset-0">
        <Image
          src="/ceviche1.png"
          alt="Fondo ceviche"
          fill
          className="object-cover opacity-70 blur-[1px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/40" />
      </div>

      {/* === Contenido principal === */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center gap-10 py-10 md:py-0">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="font-cinzel font-semibold text-[32px] md:text-[46px] tracking-wide"
        >
          EXPERIENCIAS PURA VIDA
        </motion.h2>

        {/* === Desktop === */}
        <div className="hidden md:flex w-full items-center justify-center gap-10">
          {/* Izquierda */}
          <div className="flex flex-col items-center justify-center text-[#FBF6F2] w-1/5">
            <p className="text-[36px] font-bold leading-none">
              +<AnimatedCounter from={0} to={600} />
            </p>
            <p className="font-cormorant uppercase text-[18px] mt-2 leading-tight text-center">
              Huéspedes Felices
            </p>
          </div>

          {/* Centro */}
          <div className="relative w-3/5 flex flex-col items-center justify-center">
            <div className="relative bg-[#165A55]/60 backdrop-blur-lg rounded-full px-14 py-10 shadow-lg max-w-[740px] border border-white/10 flex flex-col items-center justify-center overflow-visible">
              {/* Flechas */}
              <button
                onClick={handlePrev}
                className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-[#FBF6F2]/20 hover:bg-[#FBF6F2]/40 p-3 rounded-full transition"
              >
                <ArrowLeftIcon className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-[#FBF6F2]/20 hover:bg-[#FBF6F2]/40 p-3 rounded-full transition"
              >
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </button>

              {/* Texto */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="font-cormorant text-[20px] italic leading-relaxed mb-12 max-w-[580px] text-center"
                >
                  “{active.texto}”
                </motion.p>
              </AnimatePresence>

              {/* Avatares perfectamente circulares */}
              <div className="absolute -bottom-[34px] flex items-center justify-center gap-5">
                {testimonios.map((t, i) => (
                  <motion.button
                    key={t.id}
                    onClick={() => setActiveIndex(i)}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: i === activeIndex ? 1.15 : 1,
                      opacity: i === activeIndex ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className={`rounded-full border-2 ${
                      i === activeIndex
                        ? "border-[#FBF6F2] shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                        : "border-transparent hover:opacity-100"
                    } transition`}
                  >
                    <div className="relative w-[68px] h-[68px] overflow-hidden rounded-full">
                      <Image
                        src={t.avatar}
                        alt={t.nombre}
                        fill
                        className="object-cover rounded-full"
                        quality={100}
                        priority
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Nombre más arriba */}
            <motion.p
              key={active.nombre}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-cormorant text-[20px] mt-14"
            >
              {active.nombre}
            </motion.p>
          </div>

          {/* Derecha */}
          <div className="flex flex-col items-center justify-center text-[#FBF6F2] w-1/5">
            <p className="text-[36px] font-bold leading-none">
              <AnimatedCounter from={0} to={5} />/5
            </p>
            <p className="font-cormorant uppercase text-[18px] mt-2 leading-tight text-center">
              Satisfacción Total
            </p>
          </div>
        </div>

        {/* === Mobile === */}
        <div className="flex flex-col md:hidden items-center justify-center gap-8 w-full py-10">
          <div className="relative bg-[#165A55]/60 backdrop-blur-lg rounded-full aspect-square p-8 shadow-lg border border-white/10 flex flex-col items-center justify-center overflow-visible max-w-[85%]">
            {/* Flechas */}
            <button
              onClick={handlePrev}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-[#FBF6F2]/20 hover:bg-[#FBF6F2]/40 p-2 rounded-full transition"
            >
              <ArrowLeftIcon className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#FBF6F2]/20 hover:bg-[#FBF6F2]/40 p-2 rounded-full transition"
            >
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </button>

            {/* Texto */}
            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="font-cormorant text-[16px] italic leading-relaxed text-center max-w-[240px]"
              >
                “{active.texto}”
              </motion.p>
            </AnimatePresence>

            {/* Avatares en HD */}
            <div className="absolute -bottom-[30px] flex items-center justify-center gap-4">
              {testimonios.map((t, i) => (
                <motion.button
                  key={t.id}
                  onClick={() => setActiveIndex(i)}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: i === activeIndex ? 1.1 : 1,
                    opacity: i === activeIndex ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={`rounded-full border-2 ${
                    i === activeIndex
                      ? "border-[#FBF6F2] shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      : "border-transparent hover:opacity-100"
                  } transition`}
                >
                  <div className="relative w-[55px] h-[55px] overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.nombre}
                      fill
                      className="object-cover rounded-full"
                      quality={100}
                      priority
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <motion.p
            key={active.nombre}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-cormorant text-[18px] mt-12"
          >
            {active.nombre}
          </motion.p>

          {/* Contadores */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <div className="text-[#FBF6F2]">
              <p className="text-[28px] font-bold leading-none">
                +<AnimatedCounter from={30} to={30} />
              </p>
              <p className="font-cormorant uppercase text-[14px] leading-tight">
                Amantes del Ceviche
              </p>
            </div>
            <div className="text-[#FBF6F2]">
              <p className="text-[28px] font-bold leading-none">
                <AnimatedCounter from={5} to={5} />/5
              </p>
              <p className="font-cormorant uppercase text-[14px] leading-tight">
                Satisfacción Total
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
