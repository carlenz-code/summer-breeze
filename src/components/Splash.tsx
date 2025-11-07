"use client";
import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Splash() {
  const [mounted, setMounted] = React.useState(false);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <svg
            viewBox="0 0 600 120"
            width="min(90%, 500px)"
            height="120"
            aria-hidden="true"
            className="splash-svg"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="splash-stroke"
            >
              CEVICHE BAR
            </text>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="splash-fill"
            >
              CEVICHE BAR
            </text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
