import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import { Kanit, Lato } from "next/font/google";
import "./globals.css";

import React from "react";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["400", "500", "600", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Allah's Will Steel Construction LTD.",
  description:
    "Allah's Will is a leading steel fabrication company specializing in the design, engineering, and construction of high-quality steel structures. With a commitment to excellence, innovation, and customer satisfaction, we deliver durable and customized solutions for industrial, commercial, and residential projects. Our experienced team utilizes advanced technology and industry best practices to ensure precision, safety, and reliability in every project we undertake. From structural steelworks to bespoke metal fabrication, Allah's Will is your trusted partner for all your steel construction needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-dot-black/[0.2]",
          kanit.variable,
          lato.variable
        )}
      >
        <ReactLenis root>
          <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2 md:top-3 lg:top-4 2xl:top-5" />
          </div>
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
