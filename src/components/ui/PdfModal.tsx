"use client";

import { XMarkIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
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
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white w-full max-w-5xl h-[88vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h3 className="font-cinzel text-[18px] md:text-[20px] font-bold text-[#9E3D34]">
                {title}
              </h3>

              <div className="flex items-center gap-4">
                

                <button onClick={onClose}>
                  <XMarkIcon className="w-7 h-7 text-[#9E3D34]" />
                </button>
              </div>
            </div>

            {/* Visor PDF */}
            <div className="flex-1 bg-black">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
