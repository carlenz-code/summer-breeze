"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "iconsax-react";

const EASE = [0.16, 1, 0.3, 1];

export default function FooterContent() {
  return (
    <footer
      id="ubicacion"
      className="relative w-full bg-white text-[#171717] pt-14 pb-8 border-t border-neutral-200"
    >
      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex justify-center mb-10"
      >
        <Image
          src="/logo/summerbreeze_color.png"
          width={150}
          height={110}
          alt="Summer Breeze Logo"
        />
      </motion.div>

      {/* GRID CENTRAL */}
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* MAPA IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="w-full h-[260px] bg-neutral-100 shadow-md"
        >
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3978.889830266271!2d-84.3113298!3d10.074263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0596f433a69c1%3A0x8fa4b234b6daac75!2sSummer%20Breeze%20Cevicher%C3%ADa!5e0!3m2!1ses!2spe!4v1733000000000"
  className="w-full h-full border-0"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


        </motion.div>

        {/* INFORMACIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center flex flex-col items-center justify-center space-y-3 px-4"
        >
          <h3 className="font-cinzel text-[20px] tracking-wide text-[#171717]">
            VISÍTANOS
          </h3>

          <p className="font-cormorant text-[17px] leading-relaxed">
            
          </p>

          <p className="font-cormorant text-[17px]">
            Horario • 12:00pm – 8:00pm
          </p>

          <p className="font-cormorant text-[17px]">
            +506 6103 1183 <br />
            Summer Breeze
          </p>

          <div className="h-[26px] flex items-center justify-center">
            <div className="w-[2px] h-full bg-neutral-400" />
          </div>

          <div className="flex gap-4 justify-center">

            <SocialIcon href="https://www.instagram.com/summerbreezecr25?igsh=MTZtd3U0bGh1c2V0">
              <Instagram variant="Bold" size={20} color="#171717" />
            </SocialIcon>

            <SocialIcon href="https://www.facebook.com/share/1EoM7JnjE1/?mibextid=wwXIfr">
              <Facebook variant="Bold" size={20} color="#171717" />
            </SocialIcon>

          </div>
        </motion.div>

        {/* IMAGEN DERECHA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="w-full flex justify-center"
        >
          <div className="relative w-[230px] h-[230px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-[5px] border-neutral-300 shadow-2xl">
            <Image
              src="/history/history2.png"
              alt="Imagen footer"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>

      {/* COPYRIGHT */}
      <div className="w-full text-center text-neutral-500 font-cormorant text-[14px] mt-8">
        © {new Date().getFullYear()} Summer Breeze. Todos los derechos reservados.
      </div>

      <div className="w-full text-center text-neutral-500 font-cormorant text-[14px] mt-8">
       Desingned & Developed by MeForth
      </div>
    </footer>
  );
}

/* BOTÓN SOCIAL CORRECTO (YA FUNCIONA) */
function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-all cursor-pointer"
    >
      {children}
    </a>
  );
}
