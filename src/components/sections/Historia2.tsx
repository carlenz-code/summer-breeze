"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Historia2() {
  return (
    <motion.section
      className="relative w-full h-screen bg-white text-[#2A1E1A] grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      viewport={{ once: true }}
    >
      {/* Texto izquierda */}
      <div className="flex flex-col justify-center px-6 py-12 md:p-16 bg-white">
        <p className="font-cormorant text-[18px] md:text-[19px] leading-relaxed italic max-w-prose">
          Inspirados en la riqueza del mar y la tierra, seleccionamos cuidadosamente nuestros limones, culantro y
          chiles dulces para crear un menú que fusiona la técnica moderna con las recetas más típicas. Ya sea para una
          cena íntima, una celebración especial o simplemente para disfrutar de la pesca más fresca, este Ceviche Bar
          es el lugar donde la pasión por la gastronomía costera cobra vida.
        </p>
      </div>

      {/* Imagen derecha */}
      <motion.div
        className="relative h-full overflow-hidden"
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <img
          src="/history/history2.png"
          alt="Ceviche fresco servido con patacones"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </motion.div>
    </motion.section>
  );
}
