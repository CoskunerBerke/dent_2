import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import JsonLd from "@/components/JsonLd";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atakule Dent | Ankara Çankaya Diş Kliniği",
  description: "Ankara Çankaya’da, Atakule’nin yanı başında kişiye özel ağız ve diş sağlığı hizmetleri. Atakule Dent için WhatsApp üzerinden randevu alın.",
  metadataBase: new URL("https://atakuledent.com"), // Fallback base URL for canonicals
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Atakule Dent | Ankara Çankaya Diş Kliniği",
    description: "Ankara Çankaya’da, Atakule’nin yanı başında kişiye özel ağız ve diş sağlığı hizmetleri.",
    url: "https://atakuledent.com",
    siteName: "Atakule Dent",
    images: [
      {
        url: "/images/atakule-hero.webp",
        width: 1200,
        height: 630,
        alt: "Atakule Dent Ankara",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07111F] text-[#F7F5F0] font-sans selection:bg-[#D7B56D]/30 selection:text-[#FFFFFF]">
        <JsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
