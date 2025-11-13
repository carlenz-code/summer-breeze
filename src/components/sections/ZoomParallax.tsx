"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ZoomParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Escalas
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  // La PRIMER imagen será la central protagonista
  const pictures = [
    { src: "/parallax/p1.jpg", scale: scale9 }, // central
    { src: "/parallax/p2.jpg", scale: scale4 },
    { src: "/parallax/p3.jpg", scale: scale5 },
    { src: "/parallax/p4.jpg", scale: scale6 },
    { src: "/parallax/p5.jpg", scale: scale8 },
  ];

  return (
    <section className="relative bg-[#030712] text-white">
      {/* Título arriba */}
      <div className="pointer-events-none absolute top-10 left-1/2 z-20 -translate-x-1/2 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-white/50">
          Nuestra historia
        </p>
        <h2 className="mt-3 font-cinzel text-3xl md:text-4xl font-bold tracking-wide">
          Un viaje de sabor frente al mar
        </h2>
      </div>

      {/* Bloque del parallax */}
      <div ref={containerRef} className="parallax-container">
        <div className="parallax-sticky">
          {pictures.map(({ src, scale }, index) => (
            <motion.div
              key={index}
              style={{ scale }}
              className="parallax-el"
            >
              <div className="parallax-image">
                <Image
                  src={src}
                  alt={`Summer Breeze ${index + 1}`}
                  fill
                  // si te da warning por placeholder, quítalo:
                  // placeholder="blur"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Texto al final */}
      <div className="pointer-events-none absolute bottom-16 left-1/2 z-20 w-full -translate-x-1/2 px-6">
        <div className="mx-auto max-w-2xl text-center text-white/80 text-sm md:text-base leading-relaxed">
          <p>
            Desde los primeros ceviches servidos a nuestros amigos cercanos
            hasta las noches interminables de verano junto al mar, Summer Breeze
            nació para ser un lugar donde el tiempo se detiene y los sabores
            hablan por sí solos.
          </p>
        </div>
      </div>
    </section>
  );
}
