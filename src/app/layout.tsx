import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { Cinzel, Cinzel_Decorative, Cormorant } from "next/font/google";
import SplashScreen from "@/components/layout/SplashScreen";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cinzel",
});

const cinzelDec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cinzel-dec",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "Summer Breeze – Ceviche Bar",
    template: "%s | Summer Breeze",
  },
  description: "Ceviche Bar: cocina de estación y coctelería frente al mar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${cinzelDec.variable} ${cormorant.variable}`}
    >
      <body className="font-cormorant antialiased text-neutral-900 bg-white min-h-screen overflow-x-hidden">
        {/* Scroll suave global */}
        <SmoothScrollProvider />

        {/* Fondo blanco global */}
        <div className="fixed inset-0 -z-10 bg-white" aria-hidden="true" />

        <SplashScreen />
        {/* Navbar */}
        <Navbar />

        {/* Contenido */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
