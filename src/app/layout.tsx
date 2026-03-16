import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  metadataBase: new URL("https://leonardosites.com.br"),

  title: {
    default: "Receba Clientes Pelo Google | Criação de Sites e Google Ads",
    template: "%s | Leonardo Sites",
  },

  description:
    "Criamos sua página profissional e colocamos sua empresa nos anúncios do Google para gerar clientes direto no WhatsApp.",

  keywords: [
    "criação de sites",
    "google ads para empresas",
    "landing page profissional",
    "clientes pelo google",
    "site para empresas locais",
  ],

  openGraph: {
    title: "Receba clientes pelo Google",
    description:
      "Landing pages profissionais e campanhas Google Ads para gerar clientes para sua empresa.",
    url: "https://leonardosites.com.br",
    siteName: "Leonardo Sites",
    images: [
      {
        url: "/opengraph-img.png",
        width: 1200,
        height: 630,
        alt: "Clientes pelo Google",
      },
    ],
    locale: "pt_BR",
    type: "website",
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
        <main>{children}</main>
        <WhatsappButton />
      </body>
    </html>
  );
}
