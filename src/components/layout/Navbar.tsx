"use client";

import Link from "next/link";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PdfModal from "@/components/ui/PdfModal";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scale, setScale] = React.useState(1);
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  // 🔹 ESTADOS NUEVOS PARA EL MODAL PDF
  const [pdfOpen, setPdfOpen] = React.useState(false);
  const [pdfUrl, setPdfUrl] = React.useState("");
  const [pdfTitle, setPdfTitle] = React.useState("");
  const [mobileMenuOptions, setMobileMenuOptions] = React.useState(false);


  /* --- FIX REAL SCALE FOR DESKTOP (>= 1280 = xl) --- */
  React.useEffect(() => {
    const update = () => {
      const vv = (window as any).visualViewport;
      const desktop = window.innerWidth >= 1280;
      const z = vv?.scale ?? 1;
      setScale(desktop ? 1 / z : 1);
    };
    update();
    (window as any).visualViewport?.addEventListener("resize", update);
    window.addEventListener("resize", update);
    return () => {
      (window as any).visualViewport?.removeEventListener("resize", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Detect scroll
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-[#171717]" : "text-white/90";
  const lineColor = scrolled ? "after:bg-[#171717]" : "after:bg-white";

  const navLink = `
    relative inline-block pb-[2px]
    after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
    after:transition-all after:duration-400
    hover:after:w-full
  `;

  // Logo grande flotante (círculo naranja)
  const bigLogoVariants = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 999,
    },
    scrolled: {
      y: -30,
      scale: 0.8,
      opacity: 0,
      backgroundColor: "rgba(253, 186, 116, 0.0)",
      transition: { duration: 0.7, ease: EASE },
    },
  };

  // Logo pequeño dentro del navbar
  const smallLogoVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.7, pointerEvents: "none" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto",
      transition: { duration: 0.6, ease: EASE },
    },
  };

  // Logo mobile centrado
  const mobileLogoVariants = {
    initial: { y: 0, scale: 1, opacity: 1 },
    scrolled: {
      y: -20,
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* Fondo blanco cuando hay scroll */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="absolute inset-0 bg-white/95 shadow-lg backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        <div className="w-full relative">
          {/* ======================================================
              DESKTOP (>=1280px)
          ====================================================== */}
          <div className="hidden xl:block">
            <div
              className="relative mx-auto max-w-[1366px] px-4 xl:px-[100px] h-20 font-cinzel font-bold tracking-wide pt-4"
              style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
            >
              <div className="relative h-full flex items-center justify-between gap-8">
                {/* Nav izquierda */}
                <nav className={`flex items-center gap-10 text-[14px] ${textColor}`}>
                  <Link href="/" className={`${navLink} ${lineColor}`}>
                    INICIO
                  </Link>

                  <Link href="/historia" className={`${navLink} ${lineColor}`}>
                    NUESTRA HISTORIA
                  </Link>

                  {/* MENÚ con dropdown -> ahora abre PDFs en modal */}
                  <div className="relative">
                    <button
                      onClick={() => setMobileMenuOptions(!mobileMenuOptions)}
                      className={`${navLink} ${lineColor} cursor-pointer`}
                    >
                      MENÚ
                    </button>

                    {mobileMenuOptions && (
                      <div
                        className="
        absolute left-1/2 -translate-x-1/2 top-full mt-4
        min-w-[210px]
        rounded-xl bg-white shadow-2xl border border-black/5
        flex flex-col py-3 z-50
      "
                      >
                        <button
                          onClick={() => {
                            setPdfUrl("https://www.summerbreezecr.com/menus/menu-local.pdf");

                            setPdfTitle("Menú local");
                            setPdfOpen(true);
                            setMobileMenuOptions(false);
                          }}
                          className="px-5 py-2 text-left font-cinzel text-[13px] text-[#9E3D34] hover:bg-[#FBF6F2]"
                        >
                          Menú local
                        </button>

                        <button
                          onClick={() => {
                            setPdfUrl("https://www.summerbreezecr.com/menus/menu-para-llevar.pdf");

                            setPdfTitle("Menú para llevar");
                            setPdfOpen(true);
                            setMobileMenuOptions(false);
                          }}
                          className="px-5 py-2 text-left font-cinzel text-[13px] text-[#9E3D34] hover:bg-[#FBF6F2]"
                        >
                          Menú para llevar
                        </button>
                      </div>
                    )}
                  </div>

                </nav>

                {/* Logo pequeño cuando hay scroll */}
                <motion.div
                  initial="hidden"
                  animate={scrolled ? "visible" : "hidden"}
                  variants={smallLogoVariants}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src="/logo/summerbreeze_negro.png"
                    className="h-14 w-auto object-contain mb-3"
                    alt="Logo Summer Breeze Negro"
                  />
                </motion.div>

                {/* Nav derecha */}
                <nav className={`flex items-center gap-10 text-[14px] ${textColor}`}>
                  <Link href="/#testimonios" className={`${navLink} ${lineColor}`}>
                    TESTIMONIOS
                  </Link>

                  <Link href="/contacto" className={`${navLink} ${lineColor}`}>
                    CONTACTO
                  </Link>

                  <Link
                    href="https://www.google.com/maps/place/Summer+Breeze+Cevicher%C3%ADa/@10.074263,-84.3113298,725m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8fa0596f433a69c1:0x8fa4b234b6daac75!8m2!3d10.074263!4d-84.3113298!16s%2Fg%2F11yppn_4x0?entry=ttu"
                    className={`${navLink} ${lineColor}`}
                    target="_blank"
                  >
                    UBICACIÓN
                  </Link>
                </nav>

                {/* Logo gigante flotante */}
                <motion.div
                  initial={false}
                  animate={scrolled ? "scrolled" : "initial"}
                  variants={bigLogoVariants}
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 
                           -top-[55px] w-[240px] h-[240px] 
                           overflow-hidden flex items-center justify-center"
                >
                  <img
                    src="/logo/Logo_Summer_Breeze_04.png"
                    className="w-[230px] h-[230px] object-contain"
                    alt="Logo Summer Breeze"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* ======================================================
              MOBILE + TABLET (<= 1279px)
          ====================================================== */}
          <div className="xl:hidden relative">
            <div
              className={`h-14 flex items-center justify-between px-5 transition-colors duration-500 ${scrolled ? "bg-white/95 text-[#171717]" : "text-white"
                }`}
            >
              <button
                aria-label="Menu"
                className="p-2 hover:opacity-80"
                onClick={() => setMenuOpen(true)}
              >
                <Bars3CenterLeftIcon className="w-7 h-7" />
              </button>

              {/* MENÚ en top bar mobile: mantenemos estructura, solo cambiamos los <a> por modal */}
              <div className="relative">
  <button
    onClick={() => setMobileMenuOptions(!mobileMenuOptions)}
    className={`${navLink} ${lineColor} cursor-pointer`}
  >
    MENÚ
  </button>

  {mobileMenuOptions && (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 top-full mt-4
        min-w-[210px]
        rounded-xl bg-white shadow-2xl border border-black/5
        flex flex-col py-3 z-50
      "
    >
      <button
        onClick={() => {
          setPdfUrl("https://www.summerbreezecr.com/menus/menu-local.pdf");

          setPdfTitle("Menú local");
          setPdfOpen(true);
          setMobileMenuOptions(false);
        }}
        className="px-5 py-2 text-left font-cinzel text-[13px] text-[#9E3D34] hover:bg-[#FBF6F2]"
      >
        Menú local
      </button>

      <button
        onClick={() => {
          setPdfUrl("https://www.summerbreezecr.com/menus/menu-para-llevar.pdf");

          setPdfTitle("Menú para llevar");
          setPdfOpen(true);
          setMobileMenuOptions(false);
        }}
        className="px-5 py-2 text-left font-cinzel text-[13px] text-[#9E3D34] hover:bg-[#FBF6F2]"
      >
        Menú para llevar
      </button>
    </div>
  )}
</div>

            </div>

            {/* Logo centrado */}
            <motion.div
              initial={false}
              animate={scrolled ? "scrolled" : "initial"}
              variants={mobileLogoVariants}
              className="
                pointer-events-none absolute left-1/2 -translate-x-1/2 
                top@[3.3rem]
                top-[3.3rem]
                w-[160px] h-[160px]
                sm:w-[200px] sm:h-[200px]
                rounded-full bg-white/40
                flex items-center justify-center
              "
            >
              <img
                src="/logo/Logo_Summer_Breeze_04.png"
                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] object-contain"
                alt="Logo Summer Breeze"
              />
            </motion.div>
          </div>
        </div>

        {/* ======================================================
            MODAL MOBILE MENU
        ====================================================== */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] flex flex-col"
              onClick={() => setMenuOpen(false)}
            >
              {/* Panel lateral */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.45, ease: EASE }}
                className="w-[80%] max-w-[320px] h-full bg-white text-[#1a1a1a] shadow-2xl p-8 flex flex-col gap-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-cinzel text-[22px] font-bold">Summer Breeze</h3>
                  <button onClick={() => setMenuOpen(false)}>
                    <XMarkIcon className="w-7 h-7" />
                  </button>
                </div>

                <Link
                  href="/"
                  className="text-[18px] font-cinzel hover:text-[#9E3D34]"
                  onClick={() => setMenuOpen(false)}
                >
                  INICIO
                </Link>

                <Link
                  href="/historia"
                  className="text-[18px] font-cinzel hover:text-[#9E3D34]"
                  onClick={() => setMenuOpen(false)}
                >
                  NUESTRA HISTORIA
                </Link>

                <button
                  className="text-[18px] font-cinzel text-left hover:text-[#9E3D34]"
                  onClick={() => {
                    setPdfUrl("https://www.summerbreezecr.com/menus/menu-local.pdf");

                    setPdfTitle("Menú Local");
                    setPdfOpen(true);
                    setMenuOpen(false);
                  }}
                >
                  MENÚ LOCAL
                </button>

                <button
                  className="text-[18px] font-cinzel text-left hover:text-[#9E3D34]"
                  onClick={() => {
                    setPdfUrl("https://www.summerbreezecr.com/menus/menu-para-llevar.pdf");

                    setPdfTitle("Menú Para Llevar");
                    setPdfOpen(true);
                    setMenuOpen(false);
                  }}
                >
                  MENÚ PARA LLEVAR
                </button>


                <Link
                  href="/#testimonios"
                  className="text-[18px] font-cinzel hover:text-[#9E3D34]"
                  onClick={() => setMenuOpen(false)}
                >
                  TESTIMONIOS
                </Link>

                <Link
                  href="/contacto"
                  className="text-[18px] font-cinzel hover:text-[#9E3D34]"
                  onClick={() => setMenuOpen(false)}
                >
                  CONTACTO
                </Link>

                <Link
                  href="https://www.google.com/maps/place/Summer+Breeze+Cevicher%C3%ADa/@10.074263,-84.3113298,725m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8fa0596f433a69c1:0x8fa4b234b6daac75!8m2!3d10.074263!4d-84.3113298!16s%2Fg%2F11yppn_4x0?entry=ttu"
                  className="text-[18px] font-cinzel hover:text-[#9E3D34]"
                  onClick={() => setMenuOpen(false)}
                  target="_blank"
                >
                  UBICACIÓN
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* 🔹 MODAL PDF GLOBAL (NO TOCA EL LAYOUT DEL NAVBAR) */}
      <PdfModal
        isOpen={pdfOpen}
        onClose={() => setPdfOpen(false)}
        pdfUrl={pdfUrl}
        title={pdfTitle}
      />
    </>
  );
}
