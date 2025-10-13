import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CookieConsent from "lib/CookieConsent";
import { Toaster } from "ui/sonner";
import Header from "./header";
import Footer from "./footer";

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ["400", "600", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eleveight.ai'),
  title: "Eleveight AI - The Cutting-Edge Technologies for AI Disruptions",
  description: "Eleveight AI is a next-generation AI data center in Armenia, powered by NVIDIA DGX SuperPOD systems for machine learning and deep learning workloads.",
  openGraph: {
    title: "Eleveight AI - The Cutting-Edge Technologies for AI Disruptions",
    description: "Eleveight AI is a next-generation AI data center in Armenia, powered by NVIDIA DGX SuperPOD systems for machine learning and deep learning workloads.",
    url: "https://eleveight.ai",
    siteName: "Eleveight AI",
    images: [
      {
        url: "/El_generic_opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Eleveight AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleveight AI - The Cutting-Edge Technologies for AI Disruptions",
    description: "Eleveight AI is a next-generation AI data center in Armenia, powered by NVIDIA DGX SuperPOD systems for machine learning and deep learning workloads.",
    images: ["/El_generic_opengraph.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: '#000',
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg"
          sizes="any"
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <CookieConsent />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
