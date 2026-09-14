import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Estudio Jurídico Cintia Carreras Jacznik | La Plata",
  description:
    "Estudio Jurídico Cintia Carreras Jacznik en La Plata. Derecho Penal, Derecho de Familia y Derecho Internacional Privado. Consultas por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div
          className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="text-[15rem] leading-none text-[#B89B5E] opacity-[0.10]">
            ⚖
          </div>
        </div>
        <Navbar />

        {children}
  
        <Footer />
        <WhatsappButton
          className="fixed bottom-10 right-7 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#B89B5E] text-white shadow-md transition hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
        </WhatsappButton>
      </body>
    </html>
  );
}
