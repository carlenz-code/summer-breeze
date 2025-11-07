"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import * as React from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ====== BANDERAS SVG ====== */
function FlagCR() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      <rect y="2.28" width="24" height="11.44" fill="#0038A8" />
      <rect y="4.56" width="24" height="6.88" fill="#fff" />
      <rect y="5.84" width="24" height="4.32" fill="#CE1126" />
    </svg>
  );
}
function FlagUS() {
  return (
    <svg width="24" height="16" viewBox="0 0 7410 3900" aria-hidden="true">
      <rect width="7410" height="3900" fill="#b22234" />
      <path
        stroke="#fff"
        strokeWidth="300"
        d="M0 450h7410M0 1050h7410M0 1650h7410M0 2250h7410M0 2850h7410M0 3450h7410"
      />
      <rect width="2964" height="2100" fill="#3c3b6e" />
      <g fill="#fff">
        {Array.from({ length: 9 }).flatMap((_, r) =>
          Array.from({ length: 11 - (r % 2) }).map((_, c) => {
            const x = c * 540 + (r % 2 ? 270 : 0) + 135;
            const y = r * 210 + 175;
            return (
              <polygon
                key={`${r}-${c}`}
                points={`${x},${y - 70} ${x + 20},${y - 20} ${x + 75},${y - 20} ${x + 30},${y + 10} ${x + 50},${y + 60} ${x},${y + 30} ${x - 50},${y + 60} ${x - 30},${y + 10} ${x - 75},${y - 20} ${x - 20},${y - 20}`}
              />
            );
          })
        )}
      </g>
    </svg>
  );
}

export default function Hero() {
  const [lang, setLang] = React.useState<"es" | "en">("es");

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* ===== Telón inicial ===== */}
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.1, ease: EASE }}
        className="absolute inset-0"
      >
        {/* === Fondo === */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="absolute inset-0"
        >
          <motion.img
            src="/ceviche1.png"
            alt="Ceviche fresco con maíz y camote"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 6,
              ease: "easeOut",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(211,81,0,0.70)_0%,rgba(83,44,26,0.50)_50%,rgba(217,217,217,0)_100%)]" />
        </motion.div>

        {/* === Selector de idioma === */}
        <motion.button
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
          onClick={() => setLang((p) => (p === "es" ? "en" : "es"))}
          aria-label="Cambiar idioma"
          className={[
            "absolute z-[3] flex items-center gap-4 ",
            "bg-white/95 hover:bg-white transition shadow-xl backdrop-blur-md",
            "h-[64px] min-w-[120px] px-6 text-[24px] font-cinzel text-slate-800",
            "left-1/2 -translate-x-1/2 bottom-[calc(env(safe-area-inset-bottom,0px)+16px)]",
            "md:bottom-auto md:left-auto md:translate-x-0 md:right-0 md:top-[42%] md:-translate-y-1/2",
          ].join(" ")}
        >
          <div className="w-[28px] h-[18px]">
            {lang === "es" ? <FlagCR /> : <FlagUS />}
          </div>
          <span className="tracking-wide">{lang.toUpperCase()}</span>
        </motion.button>

        {/* === Contenido principal === */}
        <div className="relative z-[2] flex h-full flex-col justify-end pb-10 md:pb-12">
          <div className="mx-auto max-w-[1366px] px-4 md:px-[100px] w-full">
            {/* === Desktop === */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.5,
                  },
                },
              }}
              className="hidden md:block"
            >
              {/* Título */}
              <motion.h1
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: EASE } },
                }}
                className="font-cinzel-dec text-white text-center leading-[1.1] mb-6 whitespace-nowrap"
                style={{
                  fontSize: "clamp(72px, 12vw, 190px)",
                  letterSpacing: "0.02em",
                  fontWeight: 400,
                }}
              >
                CEVICHE&nbsp;BAR
              </motion.h1>

              {/* Texto + botón */}
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: EASE } },
                }}
                className="flex items-center justify-between gap-8 text-white/90 font-cormorant font-medium"
              >
                <p className="max-w-3xl text-[20px] leading-relaxed">
                  Disfruta el sabor auténtico de Costa Rica: la pesca más fresca del
                  <br className="hidden sm:block" />
                  Pacífico en un ambiente vibrante y lleno de tradición.
                </p>

                <motion.a
                  href="/reservas"
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

            {/* === Mobile === */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
              className="flex flex-col items-center text-center text-white md:hidden pb-[90px]"
            >
              <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center shadow-xl mb-4 -mt-12" />

              <h1 className="font-cinzel-dec text-white leading-[1.1] mb-3 text-[52px] font-[400]">
                CEVICHE<br />BAR
              </h1>

              <motion.a
                href="/reservas"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="link-cta font-cormorant font-medium text-[20px] mb-6"
              >
                <ArrowUpRightIcon className="arr-left w-4 h-4" />
                <span>Reserva una mesa</span>
                <ArrowUpRightIcon className="arr-right w-4 h-4" />
              </motion.a>

              <p className="font-cormorant font-medium text-[17px] leading-relaxed max-w-[300px] text-white/90">
                Disfruta el sabor auténtico de Costa Rica: la pesca más fresca del Pacífico en un
                ambiente vibrante y lleno de tradición.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
