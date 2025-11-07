"use client";
import Link from "next/link";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { motion } from "framer-motion";

const navLink =
  "relative inline-block pb-[2px] text-white/90 " +
  "after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 " +
  "after:bg-white after:transition-all after:duration-300 after:ease-in-out " +
  "hover:after:w-full focus-visible:after:w-full";

// curva de easing bonita y compatible con TS
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scale, setScale] = React.useState(1);

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

  return (
    <motion.header
      initial={{ y: -24, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 bg-transparent"
    >
      <div className="w-full">
        {/* ===== Desktop ===== */}
        <div className="hidden md:block">
          <div
            className="relative mx-auto max-w-[1366px] px-4 md:px-[100px] h-24 font-cinzel font-bold tracking-wide will-change-transform"
            style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
          >
            <div className="relative h-full flex items-center justify-between">
              <nav className="flex items-center gap-10 text-[13px]">
                <Link href="#menu" className={navLink}>MENÚ</Link>
                <Link href="#historia" className={navLink}>NUESTRA HISTORIA</Link>
                <Link href="#reservas" className={navLink}>RESERVAS</Link>
              </nav>

              {/* Círculo superior */}
              <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[92px] w-[220px] h-[220px] rounded-full bg-white shadow-xl"
                aria-hidden="true"
              />

              <nav className="flex items-center gap-10 text-[13px]">
                <Link href="/contacto" className={navLink}>CONTACTO</Link>
                <Link href="#ubicacion" className={navLink}>UBICACIÓN</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* ===== Mobile ===== */}
        <div className="md:hidden h-16 flex items-center justify-between px-4">
          <button aria-label="Abrir menú" className="p-2 -ml-1 text-white hover:opacity-80 transition">
            <Bars3CenterLeftIcon className="w-7 h-7" />
          </button>
          <Link href="#menu" className="font-cinzel font-bold text-white/90 text-sm tracking-wide">
            MENÚ
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
