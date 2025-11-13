"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.25, 1, 0.5, 1] as const;

export default function SplashScreen() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isVisible, setIsVisible] = useState(true);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setFlash(true);
        setStep(2);
        setTimeout(() => setFlash(false), 250); // flash corto
      }, 800),
      setTimeout(() => setIsVisible(false), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0, clipPath: "ellipse(100% 100% at 50% 50%)" }}
          exit={{
            y: "-100%",
            clipPath: "ellipse(120% 0% at 50% 0%)",
          }}
          transition={{ duration: 1.6, ease: EASE }} // 🕊️ más lento y elegante
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FBF6F2] overflow-hidden"
        >
          {/* === Fondo animado suave === */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(255,210,160,0.25), transparent 70%)",
                "radial-gradient(circle at 50% 50%, rgba(255,180,140,0.35), transparent 70%)",
                "radial-gradient(circle at 50% 50%, rgba(255,210,160,0.25), transparent 70%)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />

          {/* === Logos === */}
          <div className="relative flex items-center justify-center w-[200px] h-[200px]">
            {step === 1 && (
              <motion.img
                key="logo1"
                src="/logo/summerbreeze_negro.png"
                alt="Logo Summer Breeze Negro"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.08, 1],
                  filter: "brightness(1)",
                }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="absolute w-[180px] h-auto object-contain select-none"
              />
            )}

            {step === 2 && (
              <motion.img
                key="logo2"
                src="/logo/summerbreeze_color.png"
                alt="Logo Summer Breeze Color"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  filter: "brightness(1.4)",
                }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.06, 1],
                  filter: "brightness(1)",
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: EASE,
                }}
                className="absolute w-[180px] h-auto object-contain select-none"
              />
            )}
          </div>

          {/* === Gota de color (ahora azul turquesa) === */}
          <AnimatePresence>
            {flash && (
              <motion.div
                key="flash"
                initial={{
                  opacity: 0.7,
                  scale: 0.2,
                  background:
                    "radial-gradient(circle at center, rgba(90,200,255,0.9), rgba(0,120,255,0.4), transparent 70%)",
                }}
                animate={{
                  opacity: [0.8, 0.4, 0],
                  scale: [0.2, 1.2, 2.4],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="absolute inset-0 bg-transparent mix-blend-screen"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
