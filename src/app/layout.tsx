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
  metadataBase: new URL("https://leonardosales.vercel.app"),
  
  title: {
    default: "Leonardo Sales | Full Stack Engineer",
    template: "%s | Leonardo Sales"
  },
  description: "Engenheiro de Software Full Stack especializado em React, Next.js, Node.js e arquiteturas escaláveis.",
  
  keywords: [
    "Leonardo Sales",
    "Full Stack Engineer",
    "Software Developer",
    "React Specialist",
    "Next.js Developer Brazil",
    "Node.js Engineer",
    "Desenvolvedor Full Stack",
    "Engenheiro de Software",
  ],

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Leonardo Sales | Full Stack Engineer",
    description: "Confira meu portfólio, projetos e experiências no desenvolvimento de software de alta performance.",
    url: "https://leonardosales.vercel.app",
    siteName: "Leonardo Sales Portfolio",
    images: [
      {
        url: "/opengraph-img.png", 
        width: 1200,
        height: 630,
        alt: "Leonardo Sales - Full Stack Engineer",
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
        <Header />
        <main>{children}</main>
        <WhatsappButton />
      </body>
    </html>
  );
}
