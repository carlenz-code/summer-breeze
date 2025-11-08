"use client";

import { motion } from "framer-motion";
import * as React from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HistoriaPage() {
  return (
    <motion.section
      id="historia"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative w-full min-h-screen overflow-hidden text-white"
    >
      {/* Fondo con imagen y gradiente */}
      <div className="absolute inset-0">
        <img
          src="/history/historia1.png" // 🔥 reemplázala por tu imagen (la del atardecer)
          alt="Atardecer en la costa pacífica"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0)_100%)]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-[1366px] px-6 md:px-[100px] py-24 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Columna izquierda */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-col justify-center text-left"
        >
          <p className="font-cormorant italic text-[26px] md:text-[30px] text-[#C78169] mb-4">
            Nosotros
          </p>

          <h1 className="font-cinzel-dec text-[52px] md:text-[74px] leading-[1.1] mb-3">
            SUMMER BREEZE
          </h1>

          <h2 className="font-cormorant italic text-[28px] md:text-[34px] text-[#C7E7DC] mb-16">
            una experiencia Pura Vida
          </h2>

          <div className="mt-8">
            <p className="font-cormorant text-[22px] leading-[1.4] mb-2">
              Matías Flores
            </p>
            <p className="font-cormorant italic text-[18px] opacity-90">
              Creador de Summer Breeze
            </p>
          </div>
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="flex flex-col justify-center text-left font-cormorant text-[18px] md:text-[20px] leading-relaxed max-w-[500px]"
        >
          <p className="mb-4">
            Todo un universo de ingredientes sumamente frescos y muy bien
            cuidados. Productos que reflejan la Pura Vida, el compromiso, la
            pasión y el orgullo de los pescadores y agricultores locales.
          </p>

          <p className="mb-4">
            Gracias a ellos, podemos ofrecer la pesca del día más sostenible y
            los vegetales recién cosechados.
          </p>

          <p>
            Te invitamos a saborear la costa Pacífica con el corazón y el
            paladar.
          </p>
        </motion.div>
      </div>

      {/* Selector de idioma (como en el hero) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
        className="absolute top-1/2 right-6 md:right-16 bg-white/95 backdrop-blur-md shadow-lg rounded-md px-4 py-2 flex items-center gap-3"
      >
        <img src="/flags/cr.svg" alt="Costa Rica" className="w-6 h-4" />
        <span className="font-cinzel text-sm text-neutral-800">ES</span>
      </motion.div>
    </motion.section>
  );
}
