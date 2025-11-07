"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Historia() {
  return (
    <section id="historia" className="relative w-full bg-[#FBF6F2] text-[#2A1E1A] overflow-hidden">
    
      <div className=" grid grid-cols-1 md:grid-cols-2">
        {/* === 1. Imagen izquierda superior === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="relative h-[320px] md:h-[600px] overflow-hidden"
        >
          <img
            src="/history/history1.png"
            alt="Interior del restaurante Summer Breeze"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* === 2. Texto derecho superior === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center px-6 py-12 md:p-16 bg-[#FBF6F2]"
        >
          <h2 className="font-cinzel-dec text-[30px] md:text-[40px] text-[#9E3D34] mb-4">
            Historia
          </h2>
          <p className="font-cormorant text-[18px] md:text-[19px] leading-relaxed text-[#2A1E1A] max-w-prose">
            <span className="font-semibold text-[#9E3D34]">Summer Breeze</span> nace de una idea simple pero poderosa:
            combinar mariscos de alta calidad con ingredientes frescos y naturales, resaltando los sabores auténticos de
            nuestra Costa Rica. Desde sus inicios, hemos sido más que un restaurante; somos una experiencia culinaria
            donde cada ceviche cuenta una historia de tradición, maestría y respeto por el producto local del Pacífico.
          </p>
        </motion.div>

        {/* === 3. Texto inferior izquierdo === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
          className="flex flex-col justify-center px-6 py-12 md:p-16 bg-white"
        >
          <p className="font-cormorant text-[18px] md:text-[19px] leading-relaxed text-[#2A1E1A] italic max-w-prose">
            Inspirados en la riqueza del mar y la tierra, seleccionamos cuidadosamente nuestros limones, culantro y
            chiles dulces para crear un menú que fusiona la técnica moderna con las recetas más típicas. Ya sea para una
            cena íntima, una celebración especial o simplemente para disfrutar de la pesca más fresca, este Ceviche Bar
            es el lugar donde la pasión por la gastronomía costera cobra vida.
          </p>
        </motion.div>

        {/* === 4. Imagen derecha inferior === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative h-[320px] md:h-[600px] overflow-hidden"
        >
          <img
            src="/history/history2.png"
            alt="Ceviche fresco servido con patacones"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
      
    </section>
  );
}
