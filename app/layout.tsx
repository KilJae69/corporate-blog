import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import MobileNavbar from "@/components/mobile-navbar";

import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

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

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${outfit.className} `}>
        <Header />
        <MobileNavbar />
        <main className="">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
