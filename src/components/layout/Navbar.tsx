"use client";
import Link from "next/link";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scale, setScale] = React.useState(1);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      const vv = (window as any).visualViewport;
      const desktop = window.innerWidth >= 768;
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

  // Detectar scroll
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Círculo blanco animado
  const { scrollY } = useScroll();
  const circleScale = useTransform(scrollY, [0, 200], [1, 0.7]);
  const circleOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  // Colores dinámicos
  const textColor = scrolled ? "text-[#171717]" : "text-white/90";
  const lineColor = scrolled ? "after:bg-[#171717]" : "after:bg-white";

  const navLink = `
    relative inline-block pb-[2px] transition-colors duration-300
    after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
    after:transition-all after:duration-400 after:ease-in-out
    hover:after:w-full focus-visible:after:w-full
  `;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Fondo blanco animado con desliz */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 1.8, ease: EASE }} // 🕊️ más lento y fluido
            className="absolute inset-0 bg-white/95 shadow-md backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <div className="w-full relative">
        {/* ===== Desktop ===== */}
        <div className="hidden md:block">
          <div
            className="relative mx-auto max-w-[1366px] px-4 md:px-[100px] h-20 font-cinzel font-bold tracking-wide will-change-transform transition-all duration-500"
            style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
          >
            <div className="relative h-full flex items-center justify-between">
              {/* Nav izquierda */}
              <nav className={`flex items-center gap-10 text-[13px] ${textColor}`}>
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

              {/* Círculo central (más pequeño y animado) */}
              <motion.div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[72px] w-[180px] h-[180px] rounded-full bg-white shadow-xl origin-top"
                style={{
                  scale: circleScale,
                  opacity: circleOpacity,
                }}
                transition={{ duration: 0.6, ease: EASE }}
                aria-hidden="true"
              />

              {/* Nav derecha */}
              <nav className={`flex items-center gap-10 text-[13px] ${textColor}`}>
                <Link href="/contacto" className={`${navLink} ${lineColor}`}>
                  CONTACTO
                </Link>
                <Link href="#ubicacion" className={`${navLink} ${lineColor}`}>
                  UBICACIÓN
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* ===== Mobile ===== */}
        <div
          className={`md:hidden h-14 flex items-center justify-between px-4 transition-colors duration-500 ${
            scrolled ? "bg-white/95 text-[#171717]" : "text-white"
          }`}
        >
          <button
            aria-label="Abrir menú"
            className="p-2 -ml-1 hover:opacity-80 transition"
          >
            <Bars3CenterLeftIcon className="w-7 h-7" />
          </button>
          <Link
            href="#menu"
            className="font-cinzel font-bold text-sm tracking-wide"
          >
            MENÚ
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
