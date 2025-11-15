"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook } from "iconsax-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SeccionUbicacion() {
  return (
    <section 
    id="ubicacion"
    className="relative w-full overflow-hidden bg-[#FBF6F2] text-[#8B2F24] border-t border-[#9E3D34]/10">
      {/* === Hoja decorativa izquierda === */}
      <div className="absolute -left-[80px] bottom-0 w-[280px] md:w-[340px] opacity-80 pointer-events-none">
        <Image
          src="/decoration1.png"
          alt="Decoración hoja"
          width={340}
          height={420}
          className="object-contain select-none"
          priority
        />
      </div>

      {/* === Contenido principal === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        viewport={{ once: true }}
        className="relative max-w-[1360px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] gap-y-10 md:gap-x-10 px-6 md:px-16 py-20"
      >
        {/* LOCALIZACIÓN */}
        <div className="space-y-2 z-10">
          <h3 className="font-cinzel text-[21px] tracking-wide font-semibold text-[#9E3D34]">
            LOCALIZACIÓN
          </h3>
          <p className="font-cormorant text-[17px] leading-relaxed">
            400 Mtrs Sur Polideportivo <br />
            La Fortuna, San Carlos, Alajuela
          </p>
        </div>

        {/* TELÉFONO */}
        <div className="space-y-2 z-10">
          <h3 className="font-cinzel text-[21px] tracking-wide font-semibold text-[#9E3D34]">
            TELÉFONO
          </h3>
          <p className="font-cormorant text-[17px] leading-relaxed">
            +506 6103 1183
          </p>
        </div>

        {/* EMAIL */}
        <div className="space-y-2 z-10">
          <h3 className="font-cinzel text-[21px] tracking-wide font-semibold text-[#9E3D34]">
            EMAIL
          </h3>
          <a
            href="mailto:info@herbariocer.com"
            className="font-cormorant text-[17px] leading-relaxed hover:text-[#7a241a] transition"
          >
            info@herbariocer.com
          </a>
        </div>

        {/* HORARIO */}
        <div className="space-y-2 z-10">
          <h3 className="font-cinzel text-[21px] tracking-wide font-semibold text-[#9E3D34]">
            HORARIO
          </h3>
          <p className="font-cormorant text-[17px] leading-relaxed">
            Mon - Sun <br /> 11.00am - 10.00pm
          </p>
        </div>

        {/* REDES SOCIALES */}
        <div className="flex flex-col justify-center md:justify-start items-center md:items-end gap-4 z-10">
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#9E3D34]/70 text-[#9E3D34] hover:bg-[#9E3D34] hover:text-[#FBF6F2] transition-all duration-300"
            >
              <Instagram variant="Bold" color="#9E3D34" size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#9E3D34]/70 text-[#9E3D34] hover:bg-[#9E3D34] hover:text-[#FBF6F2] transition-all duration-300"
            >
              <Facebook variant="Bold" color="#9E3D34" size={22} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* === Mapa === */}
      {/* === Mapa actualizado === */}
      <div className="relative w-full h-[400px] md:h-[520px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.889830266271!2d-84.3139763!3d10.0742483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0a54dddf3e915%3A0xf8b64a2962d2d2f3!2s3MFQ%2BMCX%20Grecia%2C%20Provincia%20de%20Alajuela%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1731435624100!5m2!1ses!2scr"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Overlay decorativo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBF6F2]/40 via-transparent to-transparent pointer-events-none" />
      </div>

    </section>
  );
}
