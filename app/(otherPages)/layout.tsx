"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const pageInfo: Record<string, { title: string; caption: string }> = {
  "/about": {
    title: "About Us",
    caption: "Learn more about us and our services",
  },
  "/contact": {
    title: "Contacts",
    caption: "Get in touch with us",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const { title, caption } = pageInfo[pathname] || {
    title: "Page",
    caption: "",
  };

  return (
    <main>
      <div className="relative">
        <Image
          src="/images/hero_image.png"
          width={1280}
          height={400}
          alt="bg-image"
          className="object-cover w-full max-h-[400px]"
        />
        <div className="bg-black/40 size-full inset-0 absolute text-white start">
          <div className="container_fluid">
            <h2 className="xl:leading-[84px] leading-tight ~text-[2.5rem]/[5rem] text-white text-center xl:text-left">
              {title}
            </h2>
            <p className="xl:w-[90%] ~text-[0.938rem]/[1.063rem] leading-[28px] text-[#EBECEE] ~mt-[2rem]/[2.5rem] ~mb-[2.6rem]/[3.125rem] text-center xl:text-left">
              {caption}
            </p>
          </div>
        </div>
      </div>

      {children}
    </main>
  );
}
