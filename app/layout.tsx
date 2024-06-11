import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Teric Technology",
    default: "Home | Teric Technology",
  },
  description:
    "Your Vision. Our Bytes. Bring your start up or company vision! You bring the Why, we can help on the How. Get in touch What We Do Fractional CIO/CTO Technology is constantly evolving and, just like your business, must be … Home Read More »",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} h-[1000px] bg-gray-50`}>
        <Header />
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
