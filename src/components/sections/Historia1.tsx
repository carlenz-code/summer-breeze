"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Historia1() {
  return (
    <motion.section
      className="relative w-full min-h-[100vh] bg-[#FBF6F2] text-[#2A1E1A] grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      viewport={{ once: true }}
    >
      {/* Imagen izquierda */}
      <motion.div
        className="relative h-[55vh] md:h-full overflow-hidden"
        initial={{ scale: 1.07, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <img
          src="/history/nosotros1.jpeg"
          alt="Interior del restaurante Summer Breeze"
          className="absolute inset-0 w-full h-full object-cover 
                     object-top md:object-center"
        />

        {/* Overlay cálido */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBF6F2]/50 via-transparent to-transparent" />
      </motion.div>

      {/* Texto derecha */}
      <div className="flex flex-col justify-center px-6 py-12 md:p-16 bg-[#FBF6F2]">
        <h2 className="font-cinzel-dec text-[32px] md:text-[46px] text-[#9E3D34] mb-6 tracking-wide">
          Sobre Nosotros
        </h2>

        <div className="space-y-6 font-cormorant text-[18px] md:text-[20px] leading-relaxed opacity-90 max-w-prose">
          <p>
            <span className="font-semibold text-[#9E3D34]">Summer Breeze</span> nació de una pasión que ha acompañado
            a Bryan Rodríguez desde niño: el amor por el ceviche.
          </p>

          <p>
            Los viajes por Costa Rica con su padre siempre tenían una tradición: detenerse a comer ceviche.
            Era un momento de conexión, conversación y felicidad.
          </p>

          <p>
            Ese recuerdo se convirtió en la chispa que, años más tarde, daría vida a este proyecto.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
