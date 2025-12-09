"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import PdfModal from "@/components/ui/PdfModal";

/* ======== Productos ======== */
const products = [
  { id: "1", label: "Ceviche", name: "Tropical", image: "/products/CevicheTropical.jpeg" },
  { id: "2", label: "Ceviche", name: "Mexicano", image: "/products/CevicheMexicano.jpeg" },
  { id: "3", label: "Ceviche", name: "Vuelve a la vida premium", image: "/products/Vuelvealavidapremium.jpeg" },
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
  rest: { scale: 1, opacity: 1, filter: "brightness(1) contrast(1)" },
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
        COMPONENTE
=============================== */
export default function BestSeller() {
  // ✅ Estados del modal PDF
  const [pdfOpen, setPdfOpen] = React.useState(false);
  const [pdfUrl, setPdfUrl] = React.useState("");
  const [pdfTitle, setPdfTitle] = React.useState("");

  // ✅ FUNCIÓN INTELIGENTE
  const openPdfSmart = (url: string, title: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // ✅ En celular → abre en visor real del navegador
      window.open(url, "_blank");
    } else {
      // ✅ En desktop → abre en tu modal bonito
      setPdfUrl(url);
      setPdfTitle(title);
      setPdfOpen(true);
    }
  };

  return (
    <>
      <motion.section
        id="bestseller"
        className="relative w-full"
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:sticky md:top-0 md:h-[86vh]">

          {/* ================= MOBILE LEFT ================= */}
          <div className="md:hidden bg-[#FBF6F2] text-[#9E3D34]">
            <div className="aspect-square p-10 flex flex-col items-center justify-center text-center gap-6">
              <h2 className="font-cinzel-dec text-[36px] leading-tight tracking-wide">
                LOS IMPERDIBLES
              </h2>

              <p className="font-cormorant font-semibold text-[20px] leading-relaxed opacity-90 max-w-[28ch]">
                Nuestros ceviches y platos más pedidos por los visitantes.
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() =>
                    openPdfSmart(
                      "https://www.summerbreezecr.com/menus/menu-local.pdf",
                      "Menú Local"
                    )
                  }
                  className="inline-flex items-center gap-2 font-cormorant font-bold text-[22px] link-cta link-cta--brand"
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                  <span>Menú local</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>

                <button
                  onClick={() =>
                    openPdfSmart(
                      "https://www.summerbreezecr.com/menus/menu-para-llevar.pdf",
                      "Menú para llevar"
                    )
                  }
                  className="inline-flex items-center gap-2 font-cormorant font-bold text-[22px] link-cta link-cta--brand"
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                  <span>Menú para llevar</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= DESKTOP LEFT ================= */}
          <div className="hidden md:flex flex-col justify-between bg-[#FBF6F2] text-[#9E3D34] px-[40px] py-[90px]">
            <div className="flex flex-col gap-6">
              <h2 className="font-cinzel text-[32px] leading-[1.05] tracking-wide font-semibold">
                La Selección <br /> Del Chef
              </h2>

              <p className="font-cormorant font-semibold text-[22px] leading-relaxed opacity-85 max-w-[32ch]">
                Nuestros ceviches estrella, favoritos de los visitantes y recomendados por el chef.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() =>
                  openPdfSmart(
                    "https://www.summerbreezecr.com/menus/menu-local.pdf",
                    "Menú Local"
                  )
                }
                className="inline-flex items-center gap-2 font-cormorant font-bold text-[22px] link-cta link-cta--brand"
              >
                <ArrowUpRightIcon className="w-4 h-4" />
                <span>Menú local</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  openPdfSmart(
                    "https://www.summerbreezecr.com/menus/menu-para-llevar.pdf",
                    "Menú para llevar"
                  )
                }
                className="inline-flex items-center gap-2 font-cormorant font-bold text-[22px] link-cta link-cta--brand"
              >
                <ArrowUpRightIcon className="w-4 h-4" />
                <span>Menú para llevar</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ================= CARDS ================= */}
          <div className="relative md:col-span-3 md:h-[86vh] flex">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 relative z-20 w-full"
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
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={imgMotion as any}
                  />

                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(217,217,217,0) 0%, rgba(83,44,26,0.45) 45%, rgba(25,135,120,0.75) 100%)",
                    }}
                  />

                  <motion.div
                    className="absolute z-20 text-white text-center md:text-left flex flex-col items-center md:items-start justify-center md:justify-end p-4 md:p-8 w-full h-full"
                    variants={titleMotion as any}
                  >
                    <p className="font-cormorant font-semibold text-[18px] opacity-90 mb-1">
                      {p.label}
                    </p>

                    <h3 className="font-cinzel font-semibold text-[26px] md:text-[32px] leading-[1.1]">
                      {p.name}
                    </h3>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ✅ MODAL PDF */}
      <PdfModal
        isOpen={pdfOpen}
        onClose={() => setPdfOpen(false)}
        pdfUrl={pdfUrl}
        title={pdfTitle}
      />
    </>
  );
}
