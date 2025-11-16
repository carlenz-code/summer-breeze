"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Historia2() {
  return (
    <motion.section
      className="relative w-full min-h-[100vh] bg-white text-[#2A1E1A] grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      viewport={{ once: true }}
    >
      {/* Texto izquierda */}
      <div className="flex flex-col justify-center px-6 py-12 md:p-16 bg-white">
        <div className="space-y-6 font-cormorant text-[18px] md:text-[20px] leading-relaxed opacity-90 max-w-prose">
          <p>
            Con el tiempo, Bryan desarrolló un gusto y una visión clara:
            crear un lugar donde la frescura, la calidad y la buena vibra
            se sintieran en cada plato.
          </p>

          <p>
            Así invitó a dos amigos de toda la vida, con más de{" "}
            <span className="text-[#9E3D34] font-semibold">
              20 años de historia juntos
            </span>
            : Kenneth Conejo y Anthony Mosquera.
          </p>

          <p className="italic opacity-80">
            Este emprendimiento es el reflejo de una amistad sólida, un sueño compartido y una pasión auténtica por lo que hacemos.
          </p>
        </div>
      </div>

      {/* Imagen derecha */}
      <motion.div
        className="relative h-[55vh] md:h-full overflow-hidden"
        initial={{ scale: 1.07, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <img
          src="/history/htp.jpg"
          alt="Ceviche fresco servido con patacones"
          className="absolute inset-0 w-full h-full object-cover 
                     object-top md:object-center"
        />

        {/* Degradado lateral */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/40 via-transparent to-transparent" />
      </motion.div>
    </motion.section>
  );
}
