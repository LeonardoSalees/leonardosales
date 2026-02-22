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
  title: "Leonardo Sales | Full Stack Engineer",
  description: "Especialista em criar soluções robustas, performáticas e de ponta a ponta.",
  
  // Configuração do Favicon
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Leonardo Sales | Full Stack Engineer",
    description: "Transformando ideias em aplicações escaláveis com Next.js, Node e PostgreSQL.",
    url: "https://leonardosales.vercel.app",
    siteName: "Leonardo Sales Portfolio",
    images: [
      {
        url: "/perfil.jpeg", // Caminho da imagem de 1200x630
        width: 1200,
        height: 630,
        alt: "Preview do Portfólio de Leonardo Sales",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Twitter/X (Opcional)
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Sales | Full Stack Engineer",
    description: "Desenvolvedor Full Stack especializado em ecossistema JavaScript.",
    images: ["/perfil.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0c10] text-white font-[family-name:var(--font-geist-sans)]`}
      >
        <Header />
        <main>{children}</main>
        <WhatsappButton />
      </body>
    </html>
  );
}
