"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export default function PdfModal({
  isOpen,
  onClose,
  pdfUrl,
  title = "Menú",
}: PdfModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[999]
            bg-black/70 backdrop-blur-md
            flex items-center justify-center
            px-0 md:px-4
          "
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="
              bg-white w-full
              h-[100svh] md:h-[88vh]
              md:max-w-5xl
              rounded-none md:rounded-2xl
              overflow-hidden shadow-2xl
              flex flex-col
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* ===== HEADER ===== */}
            <div className="
              flex items-center justify-between
              px-4 py-3
              border-b bg-white
              pt-[env(safe-area-inset-top)]
            ">
              <h3 className="font-cinzel text-[17px] md:text-[20px] font-bold text-[#9E3D34]">
                {title}
              </h3>

              <button onClick={onClose}>
                <XMarkIcon className="w-7 h-7 text-[#9E3D34]" />
              </button>
            </div>

            {/* ===== VISOR PDF ===== */}
            <div className="flex-1 bg-white overflow-hidden">
              <iframe
                src={pdfUrl}
                title={title}
                className="w-full h-full"
                style={{
                  border: "none",
                  touchAction: "pan-x pan-y",
                }}
                allow="autoplay"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
