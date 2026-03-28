import Script from 'next/script'
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
    title: "Receba clientes pelo Google | Leonardo Sites",
    description:
      "Landing pages profissionais e campanhas Google Ads para gerar clientes para sua empresa.",
    url: "https://leonardosites.com.br",
    siteName: "Leonardo Sites",
    images: [
      {
        url: "/opengraph-img.png", // Certifique-se que o arquivo existe em /public/opengraph-img.png
        width: 1200,
        height: 630,
        alt: "Visualização do serviço Leonardo Sites",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  
  // Adicione isso para garantir o preview em mais redes
  twitter: {
    card: "summary_large_image",
    title: "Receba clientes pelo Google | Leonardo Sites",
    description: "Criação de sites e gestão de Google Ads para empresas.",
    images: ["/opengraph-img.png"],
  },

  // Robôs de busca
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
<head>
        {/* Pixel do Facebook com ID 1260858918711302 */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1260858918711302');
            fbq('track', 'PageView');
          `}
        </Script>
        <meta name="google-site-verification" content="FmaP3WGVzNMxxK1S0qCfxYeIVtcVhl-OSXXthOY0jGM" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0c10] text-white font-[family-name:var(--font-geist-sans)]`}
      >
        <main>{children}</main>
        <WhatsappButton />
      </body>
    </html>
  );
}
