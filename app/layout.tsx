import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Abogada Cintia Carreras Jacznik | La Plata",
  description:
    "Abogada Cintia Carreras Jacznik en La Plata. Derecho Penal, Derecho de Familia y Derecho Internacional Privado. Consultas por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white">
        {/* Imagen de fondo */}
        <div
          className="absolute fixed inset-0 -z-10 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/estudio.jpeg')" }}
        />
        
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
