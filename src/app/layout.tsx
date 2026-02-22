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
  // ADICIONE ESTA LINHA:
  metadataBase: new URL("https://leonardosales.vercel.app"), // Altere para seu domínio oficial se tiver um
  
  title: "Leonardo Sales | Full Stack Engineer",
  description: "Especialista em criar soluções robustas e de alta performance.",
  
  openGraph: {
    title: "Leonardo Sales | Full Stack Engineer",
    description: "Engenharia de software com foco em resultados e autoridade digital.",
    url: "/",
    siteName: "Leonardo Sales Portfolio",
    images: [
      {
        url: "/perfil.jpeg", // Agora o Next.js saberá que o link final é https://seusite.com/opengraph-image.png
        width: 1200,
        height: 630,
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
