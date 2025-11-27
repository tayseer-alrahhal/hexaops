import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hexaops",
  description: "Hexaops olarak, derin teknoloji birikimimizle veri, yapay zeka ve otonom sistemler alanında standartları belirliyor, en zorlu problemlere akılcı çözümler üretiyoruz",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider>

          <Header />

          {children}

          <Footer />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
