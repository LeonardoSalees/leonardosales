import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsappButton from "@/components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Sales | Full Stack Developer",
  description: "Portfólio profissional de  Leonardo Sales, desenvolvedor Full Stack especialista em React, Next.js e Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth"> {/* Adicionado scroll suave */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0c10] text-white font-[family-name:var(--font-geist-sans)]`}
      >
        <Header /> 
        {/* Camada de Background Blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Bolha superior esquerda (Ciano) */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[120px] animate-blob" />
          
          {/* Bolha meio direita (Azul/Roxo) */}
          <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
          
          {/* Bolha inferior esquerda (Perto da seção About/Projects) */}
          <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[130px] animate-blob animation-delay-4000" />
        </div>
        <main>{children}</main>
        <WhatsappButton/>
      </body>
    </html>
  );
}