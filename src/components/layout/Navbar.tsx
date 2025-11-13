"use client";
import Link from "next/link";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scale, setScale] = React.useState(1);
  const [scrolled, setScrolled] = React.useState(false);

  /* --- FIX REAL SCALE FOR DESKTOP (>= 1280 = xl) --- */
  React.useEffect(() => {
    const update = () => {
      const vv = (window as any).visualViewport;
      const desktop = window.innerWidth >= 1280; // antes 1024
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

  // Logo grande flotante (círculo naranja) EN DESKTOP
  const bigLogoVariants = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
      backgroundColor: "rgba(253, 186, 116, 0.40)", // naranja 🧡
      boxShadow: "0 0 0 rgba(0,0,0,0)",            // ✅ SIN sombra negra
      borderRadius: 999,
    },
    scrolled: {
      y: -30,
      scale: 0.8,
      opacity: 0,
      backgroundColor: "rgba(253, 186, 116, 0.0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",            // ✅ SIN sombra también al hacer scroll
      transition: {
        duration: 0.7,
        ease: EASE,
      },
    },
  } as const;

  // Logo pequeño DENTRO del navbar blanco (solo imagen NEGRA)
  const smallLogoVariants = {
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.7,
      pointerEvents: "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto",
      transition: {
        duration: 0.6,
        ease: EASE,
      },
    },
  } as const;

  // Variantes para el logo en MOBILE/TABLET (círculo naranja centrado)
  const mobileLogoVariants = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    scrolled: {
      y: -20,
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: EASE,
      },
    },
  } as const;

  return (
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
            DESKTOP (>=1280px, xl)
        ====================================================== */}
        <div className="hidden xl:block">
          <div
            className="relative mx-auto max-w-[1366px] px-4 xl:px-[100px] h-20 font-cinzel font-bold tracking-wide pt-4"
            style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
          >
            <div className="relative h-full flex items-center justify-between gap-8">
              {/* Nav izquierda */}
              <nav className={`flex items-center gap-10 text-[14px] ${textColor}`}>
                <Link href="#menu" className={`${navLink} ${lineColor}`}>
                  MENÚ
                </Link>
                <Link href="/historia" className={`${navLink} ${lineColor}`}>
                  NUESTRA HISTORIA
                </Link>
                <Link href="/reservas" className={`${navLink} ${lineColor}`}>
                  RESERVAS
                </Link>
              </nav>

              {/* Logo pequeño CENTRADO dentro del navbar blanco */}
              <motion.div
                initial="hidden"
                animate={scrolled ? "visible" : "hidden"}
                variants={smallLogoVariants}
                className="flex items-center justify-center flex-shrink-0"
              >
                {/* ✅ Nuevo logo negro, más grande, sin estilos raros */}
                <img
                  src="/logo/summerbreeze_negro.png"
                  className="h-14 w-auto object-contain mb-3"
                  alt="Logo Summer Breeze Negro"
                />
              </motion.div>

              {/* Nav derecha */}
              <nav className={`flex items-center gap-10 text-[14px] ${textColor}`}>
                <Link href="/contacto" className={`${navLink} ${lineColor}`}>
                  TESTIMONIOS
                </Link>
                <Link href="/contacto" className={`${navLink} ${lineColor}`}>
                  CONTACTO
                </Link>
                <Link href="#ubicacion" className={`${navLink} ${lineColor}`}>
                  UBICACIÓN
                </Link>
              </nav>

              {/* Logo grande flotante con círculo naranja (por detrás) */}
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
            MOBILE + TABLET + SMALL LAPTOPS (<=1279px)
        ====================================================== */}
        <div className="xl:hidden relative">
          {/* Barra superior */}
          <div
            className={`h-14 flex items-center justify-between px-5 transition-colors duration-500 ${
              scrolled ? "bg-white/95 text-[#171717]" : "text-white"
            }`}
          >
            <button aria-label="Menu" className="p-2 hover:opacity-80">
              <Bars3CenterLeftIcon className="w-7 h-7" />
            </button>

            <Link href="#menu" className="font-cinzel font-bold text-sm">
              MENÚ
            </Link>
          </div>

          {/* LOGO CENTRADO (Mobile + Tablet) con círculo naranja */}
          <motion.div
            initial={false}
            animate={scrolled ? "scrolled" : "initial"}
            variants={mobileLogoVariants}
            className="
              pointer-events-none absolute left-1/2 -translate-x-1/2 
              top-[3.3rem]
              w-[160px] h-[160px]
              sm:w-[200px] sm:h-[200px]
              rounded-full bg-orange-300/40
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
    </motion.header>
  );
}
