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
    name: "Con Mariscos Mixto",
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const imgMotion = {
  rest: {
    scale: 1,
    opacity: 1,
    filter: "brightness(1) contrast(1)",
  },
  hover: {
    scale: 1.07,
    opacity: 0.95,
    filter: "brightness(1.12) contrast(1.1)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const titleMotion = {
  rest: { y: 0, opacity: 1 },
  hover: { y: -10, opacity: 1, transition: { duration: 0.4, ease: EASE } },
};

/* ============================
      COMPONENTE FINAL
=============================== */
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:sticky md:top-0 md:h-[86vh]">
        {/* =========================================================
             COLUMNA IZQUIERDA (MOBILE)
        ========================================================== */}
        <div className="md:hidden bg-[#FBF6F2] text-[#9E3D34]">
          <div className="aspect-square p-10 flex flex-col items-center justify-center text-center gap-6">
            <h2 className="font-cinzel-dec text-[36px] leading-tight tracking-wide">
              LOS IMPERDIBLES
            </h2>

            <p className="font-cormorant font-semibold text-[20px] leading-relaxed opacity-90 max-w-[28ch]">
              Nuestros ceviches y platos más pedidos por los visitantes.
            </p>

            <a
              href="/menu"
              className="inline-flex items-center gap-2 font-cormorant font-bold text-[22px] link-cta link-cta--brand"
            >
              <ArrowUpRightIcon className="arr-left w-4 h-4" />
              <span>Ver menú completo</span>
              <ArrowUpRightIcon className="arr-right w-4 h-4" />
            </a>
          </div>
        </div>

        {/* =========================================================
             COLUMNA IZQUIERDA (DESKTOP)
        ========================================================== */}
        <div className="hidden md:flex flex-col justify-between bg-[#FBF6F2] text-[#9E3D34] px-[70px] py-[90px]">

          {/* Título + descripción */}
          <div className="flex flex-col gap-6">
            <h2 className="font-cinzel text-[32px] leading-[1.05] tracking-wide font-semibold">
              La Selección <br /> Del Chef
            </h2>

            <p className="font-cormorant font-semibold text-[22px] leading-relaxed opacity-85 max-w-[32ch]">
              Nuestros ceviches estrella, favoritos de los visitantes y recomendados por el chef.
            </p>
          </div>
          <a
            href="/menu"
            className="link-cta font-cormorant font-bold text-[22px] block w-fit"
            style={{ color: "#9E3D34" }}
          >
            <span className="cta-inner flex items-center gap-3">
              <ArrowUpRightIcon className="arr-left w-5 h-5" />
              <span className="cta-text">Ver menú</span>
              <ArrowUpRightIcon className="arr-right w-5 h-5" />
            </span>
          </a>


        </div>

        {/* =========================================================
             TARJETAS
        ========================================================== */}
        <div className="relative md:col-span-3 md:h-[86vh] flex">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 relative z-20 w-full
              transition-all duration-500 ease-[0.33,1,0.68,1]"
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
                className="group relative overflow-hidden bg-black flex items-center justify-center h-[46vh] md:h-full"
              >
                {/* Imagen HD */}
                <motion.img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0 image-rendering-auto"
                  variants={imgMotion as any}
                />

                {/* Gradiente overlay */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(217,217,217,0) 0%, rgba(83,44,26,0.45) 45%, rgba(25,135,120,0.75) 100%)",
                  }}
                />

                {/* Texto */}
                <motion.div
                  className="absolute z-20 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.4)]
                    text-center md:text-left flex flex-col items-center justify-center
                    md:items-start md:justify-end p-4 md:p-8 w-full h-full"
                  variants={titleMotion as any}
                >
                  <p className="font-cormorant font-semibold text-[18px] opacity-90 mb-1">
                    {p.label}
                  </p>

                  <h3 className="font-cinzel font-semibold text-[26px] md:text-[32px] leading-[1.1]">
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
                "linear-gradient(to bottom, rgba(35,189,201,0) 0%, rgba(35,189,201,0.35) 44%, rgba(35,189,201,0.65) 100%)",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
