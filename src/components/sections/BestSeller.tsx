"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

/* ======== Productos ======== */
const products = [
  {
    id: "1",
    label: "Ceviche",
    name: "Corvina Clásico",
    image: "/products/corvinaclasico.png",
  },
  {
    id: "2",
    label: "Ceviche",
    name: "Mariscos Mixto",
    image: "/products/mariscosmixto.png",
  },
  {
    id: "3",
    label: "Ceviche",
    name: "Camarón al Coco",
    image: "/products/camaronalcoco.png",
  },
];

/* ======== Easing ======== */
const EASE = [0.33, 1, 0.68, 1] as const;

/* ======== Variants ======== */
const sectionFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const cardsParent: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
};

/* ======== Animación refinada ======== */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const imgMotion = {
  rest: { scale: 1, opacity: 1, filter: "brightness(1) contrast(1)" },
  hover: {
    scale: 1.04,
    opacity: 0.95,
    filter: "brightness(1.08) contrast(1.05)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const titleMotion = {
  rest: { y: 0, opacity: 1 },
  hover: { y: -12, opacity: 1, transition: { duration: 0.45, ease: EASE } },
};

/* ======== Componente ======== */
export default function BestSeller() {
  return (
    <motion.section
      id="bestseller"
      className="relative w-full"
      variants={sectionFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:sticky md:top-0 md:h-screen">
        {/* === Columna izquierda (MOBILE) === */}
        <div className="md:hidden bg-[#FBF6F2] text-[#9E3D34]">
          <div className="aspect-square p-8 flex flex-col items-center justify-center text-center gap-6">
            <div>
              <h2 className="font-cinzel-dec text-[34px] leading-tight mb-3">
                LOS IMPERDIBLES
              </h2>
              <p className="font-cormorant font-semibold text-[19px] leading-relaxed">
                Nuestros ceviches y platos más populares.
              </p>
            </div>

            <a
              href="/menu"
              className="inline-flex items-center gap-2 font-cormorant font-bold text-[20px] link-cta link-cta--brand"
            >
              <ArrowUpRightIcon className="arr-left w-4 h-4" />
              <span>Ver menú Completo</span>
              <ArrowUpRightIcon className="arr-right w-4 h-4" />
            </a>
          </div>
        </div>

        {/* === Columna izquierda (DESKTOP) === */}
        <div className="hidden md:block bg-[#FBF6F2] text-[#9E3D34]">
          <div className="grid grid-rows-2 h-full">
            <div className="p-10 flex items-start">
              <div>
                <h2 className="font-cinzel text-[36px] leading-tight mb-4 font-semibold">
                  LOS <br /> IMPERDIBLES
                </h2>
                <p className="font-cormorant font-semibold text-[24px] leading-relaxed max-w-[28ch]">
                  Nuestros ceviches y platos más populares.
                </p>
              </div>
            </div>

            <div className="border-t-[2px] border-[#9E3D34]/60 p-10 flex items-center">
              <a
                href="/menu"
                className="inline-flex items-center gap-2 font-cormorant font-bold text-[24px] link-cta link-cta--brand"
              >
                <ArrowUpRightIcon className="arr-left w-4 h-4" />
                <span>Ver menú Completo</span>
                <ArrowUpRightIcon className="arr-right w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* === Tarjetas === */}
        <div className="relative md:col-span-3 md:h-screen flex">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-20 w-full transition-all duration-500 ease-[0.33,1,0.68,1]"
            variants={cardsParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {products.map((p) => (
              <motion.article
                key={p.id}
                variants={cardVariants}
                animate="rest"
                whileHover="hover"
                whileInView="show"
                viewport={{ once: true }}
                className={`
                  group relative overflow-hidden bg-black
                  flex items-center justify-center
                  h-[50vh] md:h-full
                  transition-all duration-500 ease-[0.33,1,0.68,1]
                `}
              >
                {/* Imagen */}
                <motion.img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  variants={imgMotion as any}
                />

                {/* Gradiente */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(217,217,217,0) 0%, rgba(83,44,26,0.45) 45%, rgba(25,135,120,0.75) 100%)",
                  }}
                />

                {/* Texto */}
                <motion.div
                  className={`
                    absolute z-20 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.4)]
                    text-center md:text-left
                    flex flex-col items-center justify-center md:items-start md:justify-end
                    p-4 md:p-8 w-full h-full
                  `}
                  variants={titleMotion as any}
                >
                  <p className="font-cormorant font-semibold text-[16px] opacity-90 mb-1">
                    {p.label}
                  </p>
                  <h3 className="font-cinzel-dec text-[26px] md:text-[30px] leading-[1.1]">
                    {p.name.split(" ").length > 2 ? (
                      <>
                        {p.name.split(" ").slice(0, 2).join(" ")}
                        <br />
                        {p.name.split(" ").slice(2).join(" ")}
                      </>
                    ) : (
                      p.name
                    )}
                  </h3>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>

          {/* Gradiente global (solo desktop) */}
          <div
            className="pointer-events-none absolute inset-0 z-10 hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, rgba(217,217,217,0) 0%, rgba(83,44,26,0.35) 44%, rgba(25,135,120,0.65) 100%)",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
