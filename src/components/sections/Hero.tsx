"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Facebook, Instagram, Whatsapp } from "iconsax-react";
import * as React from "react";

const EASE = [0.16, 1, 0.3, 1] as const;



export default function Hero() {
  const [lang, setLang] = React.useState<"es" | "en">("es");

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* ===== Telón inicial ===== */}
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute inset-0"
      >
        {/* === Fondo con zoom suave === */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          className="absolute inset-0"
        >
          <motion.img
            src="/ceviche1.png"
            alt="Ceviche fresco con maíz y camote"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 8,
              ease: "easeOut",
            }}
          />

          {/* ⭐ Gradiente con verde DERECHA — UNA SOLA LÍNEA (Tailwind friendly) ⭐ */}
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(to_left,rgba(169,214,43,0.65)_0%,rgba(169,214,43,0.40)_15%,rgba(83,44,26,0.50)_40%,rgba(211,81,0,0.75)_100%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
        </motion.div>

        

        {/* === Contenido principal === */}
        <div className="relative z-[2] flex h-full flex-col justify-end pb-10 md:pb-12">
          <div className="mx-auto max-w-[1366px] px-4 md:px-[100px] w-full">
            {/* ================= MOBILE + TABLET (centrado) ================= */}
            <div
              className="
    block md:hidden 
    text-white text-center 
    drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]
    
    flex flex-col items-center 
    pt-[40vh]                 /* sube/baja segun pantalla */
    pb-[8vh]                 /* mantiene balance abajo */
    min-h-[100dvh]           /* ocupa todo el alto real */
  "
            >

              {/* Redes centradas */}
              <div className="flex justify-center gap-5 mb-8">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/share/1EoM7JnjE1/?mibextid=wwXIfr" },
                  { icon: Instagram, href: "https://www.instagram.com/summer_breezecr?igsh=MTZtd3U0bGh1c2V0" },
                  { icon: Whatsapp, href: "https://wa.me/50661031183" },
                ].map(({ icon: Icono, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-lg transition-all duration-300"
                  >
                    <Icono size={22} variant="Linear" color="#9E3D34" />
                  </motion.a>
                ))}
              </div>

              {/* Título centrado */}
              <h1 className="font-cinzel-dec text-[44px] leading-[1.1] mb-3">
                CEVICHERIA
              </h1>

              <motion.a
                href="https://wa.me/50661031183"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 font-cormorant text-[22px] mb-4"
                style={{ color: "#FFFFFF" }}
              >
                <ArrowUpRightIcon className="w-4 h-4" />
                <span>Reserva una mesa</span>
              </motion.a>


              {/* Texto descriptivo centrado */}
              <p className="font-cormorant text-[17px] leading-relaxed max-w-[90%] mx-auto">
                Disfruta el sabor auténtico de Costa Rica: la pesca más fresca del
                Pacífico en un ambiente vibrante y lleno de tradición.
              </p>
            </div>

            {/* ================= DESKTOP (tu bloque original) ================= */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.6,
                  },
                },
              }}
              className="hidden md:block"
            >
              {/* ⭐ Redes arriba del título — A LA IZQUIERDA ⭐ */}
              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1, ease: EASE, delay: 0.4 },
                  },
                }}
                className="flex justify-start gap-4 mb-8"
              >
                {[
                  { icon: Facebook, href: "https://www.facebook.com/share/1EoM7JnjE1/?mibextid=wwXIfr" },
                  { icon: Instagram, href: "https://www.instagram.com/summer_breezecr?igsh=MTZtd3U0bGh1c2V0" },
                  { icon: Whatsapp, href: "https://wa.me/50661031183" },
                ].map(({ icon: Icono, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center 
                 shadow-lg transition-all duration-300"
                  >
                    <Icono
                      size={22}
                      variant="Linear"
                      color="#9E3D34" // ← se ve sí o sí
                      className="group-hover:text-white"
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* TÍTULO (exactamente como lo tenías) */}
              <motion.h1
                variants={{
                  hidden: { y: 60, opacity: 0, scale: 1.04 },
                  show: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 1.1, ease: EASE },
                  },
                }}
                className="font-cinzel-dec text-white leading-[1.1] mb-6 
                           drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)] text-left"
                style={{
                  fontSize: "clamp(68px, 11vw, 10px)",
                  letterSpacing: "0.015em",
                  fontWeight: 400,
                  lineHeight: "1.05",
                }}
              >
                CEVICHERIA
              </motion.h1>

              {/* Texto + botón (tu bloque original, sin tocar estructura) */}
              <motion.div
                variants={{
                  hidden: { y: 25, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.9, ease: EASE },
                  },
                }}
                className="flex items-center justify-between gap-8 text-white/90 font-cormorant font-medium"
              >
                <p className="max-w-3xl text-[20px] leading-relaxed">
                  Disfruta el sabor auténtico de Costa Rica: la pesca más fresca del
                  <br className="hidden sm:block" />
                  Pacífico en un ambiente vibrante y lleno de tradición.
                </p>

                <motion.a
                  href="https://wa.me/50661031183"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="hidden sm:inline link-cta font-cormorant font-medium text-[20px]"
                >
                  <ArrowUpRightIcon className="arr-left w-4 h-4" />
                  <span>Reserva una mesa</span>
                  <ArrowUpRightIcon className="arr-right w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
