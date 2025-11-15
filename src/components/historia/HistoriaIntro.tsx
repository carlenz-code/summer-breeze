"use client";

import { motion } from "framer-motion";
const EASE = [0.16, 1, 0.3, 1] as const;

export default function HistoriaIntro() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      
      {/* 1️⃣ IMAGEN BASE */}
      <div className="absolute inset-0">
        <img
          src="g3.jpg"
          alt="Costa Pacífica"
          className="w-full h-full object-cover object-center md:object-bottom"
        />
      </div>

      {/* 2️⃣ ⭐ GRADIENTE ESTILO HERO — FULL VISIBLE ⭐ */}
      <motion.div
        className="absolute inset-0 
          bg-[linear-gradient(
            to_left,
            rgba(169,214,43,0.65)_0%,
            rgba(169,214,43,0.40)_15%,
            rgba(83,44,26,0.50)_40%,
            rgba(211,81,0,0.70)_100%
          )]
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
      />

      {/* 3️⃣ Glow negro suave para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

      {/* 4️⃣ CONTENIDO CENTRADO */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE }}
          className="
            font-cinzel-dec 
            text-[50px] md:text-[90px] lg:text-[110px]
            leading-[0.95]
            tracking-wide
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]
          "
        >
          Nuestra<br/>Historia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          className="font-cormorant text-[20px] md:text-[26px] max-w-[550px] mt-6 opacity-90"
        >
          Un viaje lleno de tradición, amistad y sabor costarricense.
        </motion.p>
      </div>
    </section>
  );
}
