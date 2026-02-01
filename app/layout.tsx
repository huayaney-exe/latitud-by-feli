import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import "../components/styles/tokens.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CENTRO '26 | Donde el mundo converge con Latinoamérica",
  description: "Hace 500 años, Perú fue el centro de un continente. Ese rol se perdió. CENTRO lo recupera. Primera edición: Inteligencia Artificial Operacional. Mayo 2026, Lima.",
  keywords: "CENTRO, IA LATAM, Inteligencia Artificial Latinoamérica, AI Summit, evento tecnología, transformación digital, IA Perú, AI conference, Perú tech hub",
  authors: [{ name: "CENTRO" }],
  openGraph: {
    title: "CENTRO '26 | Donde el mundo converge con Latinoamérica",
    description: "El punto de convergencia para transformar la región. Perú vuelve a ser el centro. Primera edición: IA Operacional. Mayo 2026, Lima.",
    url: "https://centro.lat",
    siteName: "CENTRO",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-centro.jpg",
        width: 1200,
        height: 630,
        alt: "CENTRO '26 - Donde el mundo converge con Latinoamérica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CENTRO '26 | Donde el mundo converge con Latinoamérica",
    description: "Hace 500 años, todo convergía en Perú. CENTRO lo recupera. Primera edición: IA Operacional. Mayo 2026, Lima.",
    images: ["/og-centro.jpg"],
  },
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
    <html lang="es">
      <head>
        {/* Google Analytics - Replace with your GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Meta Pixel - Replace with your Pixel ID */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
