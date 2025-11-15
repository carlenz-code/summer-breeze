"use client";

import FooterContent from "./FooterContent";

// Ajusta esto si tu navbar mide diferente
const NAVBAR_HEIGHT = 80;
const FOOTER_HEIGHT = 620;

export default function FooterSticky() {
  return (
    <div
      className="relative"
      style={{
        height: `${FOOTER_HEIGHT}px`,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        className="relative"
        style={{
          height: `calc(100vh + ${FOOTER_HEIGHT}px - ${NAVBAR_HEIGHT}px)`,
          top: `calc(-100vh + ${NAVBAR_HEIGHT}px)`,
        }}
      >
        <div
          className="sticky"
          style={{
            height: `${FOOTER_HEIGHT}px`,
            top: `calc(100vh - ${FOOTER_HEIGHT}px + ${NAVBAR_HEIGHT}px)`,
          }}
        >
          <FooterContent />
        </div>
      </div>
    </div>
  );
}
