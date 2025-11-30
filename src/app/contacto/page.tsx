"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactoPage() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* === Fondo === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contacto/contact1.png"
          alt="Fondo contacto"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Degradado cálido inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#b3541e]/70" />
      </div>

      {/* === Contenido === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-[1fr_1fr_0.8fr] gap-12 md:gap-14"
      >
        {/* === Columna 1: Título === */}
        <div className="flex flex-col justify-center text-left space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={{ once: true }}
            className="font-cinzel text-[40px] md:text-[56px] font-bold leading-none"
          >
            CONÉCTATE
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ once: true }}
            className="font-cormorant italic text-[#1DB9A0] text-[32px] md:text-[40px]"
          >
            con la magia
          </motion.h2>
        </div>

        {/* === Columna 2: Información === */}
        <div className="flex flex-col justify-center text-left font-cormorant text-[18px] space-y-6">
          <div>
            <h3 className="text-[#1DB9A0] font-semibold">Localización</h3>
            <p>
              75 este de Correos de Costa Rica.<br />
              2do local contiguo a licorera La Noche Buena
            </p>
          </div>

          <div>
            <h3 className="text-[#1DB9A0] font-semibold">Teléfono</h3>
            <p>+506 6103 1183</p>
          </div>

          <div>
            <h3 className="text-[#1DB9A0] font-semibold">Email</h3>
            <p>admin@summerbreezecr.com</p>
          </div>

          <div>
            <h3 className="text-[#1DB9A0] font-semibold">Horario</h3>
            <p>
              Martes a Domingo<br />
              12.00pm - 08.00pm
            </p>
          </div>
        </div>

        {/* === Columna 3: Formulario === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: true }}
          className="flex flex-col justify-center font-cormorant text-[18px]"
        >
          <p className="mb-6 opacity-90 leading-relaxed">
            Para mayor información, comentarios o de estar interesado, por favor llenar el siguiente formulario.
          </p>

          <form className="flex flex-col gap-5 w-full max-w-[450px]">
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-1">
                Nombre
                <input
                  type="text"
                  className="bg-transparent border border-white/60 rounded-sm px-3 py-2 focus:outline-none focus:border-[#1DB9A0]"
                />
              </label>
              <label className="flex flex-col gap-1">
                Apellido
                <input
                  type="text"
                  className="bg-transparent border border-white/60 rounded-sm px-3 py-2 focus:outline-none focus:border-[#1DB9A0]"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1">
              Email
              <input
                type="email"
                className="bg-transparent border border-white/60 rounded-sm px-3 py-2 focus:outline-none focus:border-[#1DB9A0]"
              />
            </label>

            <label className="flex flex-col gap-1">
              Mensaje (máx. 125 caracteres)
              <textarea
                rows={4}
                maxLength={125}
                className="bg-transparent border border-white/60 rounded-sm px-3 py-2 focus:outline-none focus:border-[#1DB9A0] resize-none"
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 px-6 rounded-sm hover:bg-[#1DB9A0] hover:text-white transition-all duration-300 self-start"
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
