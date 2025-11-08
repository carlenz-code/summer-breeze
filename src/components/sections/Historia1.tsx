"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Historia1() {
  return (
    <motion.section
      className="relative w-full h-screen bg-[#FBF6F2] text-[#2A1E1A] grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      viewport={{ once: true }}
    >
      {/* Imagen izquierda */}
      <motion.div
        className="relative h-full overflow-hidden"
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <img
          src="/history/history1.png"
          alt="Interior del restaurante Summer Breeze"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Texto derecha */}
      <div className="flex flex-col justify-center px-6 py-12 md:p-16 bg-[#FBF6F2]">
        <h2 className="font-cinzel-dec text-[30px] md:text-[40px] text-[#9E3D34] mb-4">
          Historia
        </h2>
        <p className="font-cormorant text-[18px] md:text-[19px] leading-relaxed max-w-prose">
          <span className="font-semibold text-[#9E3D34]">Summer Breeze</span> nace de una idea simple pero poderosa:
          combinar mariscos de alta calidad con ingredientes frescos y naturales, resaltando los sabores auténticos de
          nuestra Costa Rica. Desde sus inicios, hemos sido más que un restaurante; somos una experiencia culinaria
          donde cada ceviche cuenta una historia de tradición, maestría y respeto por el producto local del Pacífico.
        </p>
      </div>
    </motion.section>
  );
}
