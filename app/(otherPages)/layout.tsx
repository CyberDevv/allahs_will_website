"use client";

import { phoneNumber } from "@/data/contact";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const pageInfo: Record<
  string,
  { title: string; caption: string; image: string }
> = {
  "/about": {
    title: "About Us",
    caption: "Learn more about us and our services",
    image: "/images/hero_about.png",
  },
  "/contact": {
    title: "Contacts",
    caption: "Get in touch with us",
    image: "/images/hero_contact.png",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const { title, caption, image } = pageInfo[pathname] || {
    title: "Page",
    caption: "",
  };

  return (
    <main>
      <div className="relative">
        <Image
          src={image ?? "/images/hero_image.png"}
          width={1280}
          height={400}
          alt="bg-image"
          className="object-cover w-full ~min-h-[15.625rem]/[25rem] ~max-h-[15.625rem]/[25rem]"
        />
        <div className="bg-black/20 size-full inset-0 absolute text-white start">
          <div className="container_fluid ~mt-10/20">
            <h2 className="xl:leading-[64px] ~text-[1.875rem]/[3.4375rem] text-white text-center xl:text-left font-kanit font-semibold">
              {title}
            </h2>
            <p className="~text-[0.75rem]/[1.0625rem] leading-[28px] text-[#EBECEE] ~mt-[0rem]/[1rem] xl:text-left text-center">
              {caption}
            </p>
          </div>
        </div>
      </div>
      <div className="end container_fluid">
        <div className="bg-white text-primary w-full xl:max-w-[500px] xl:shadow-2xl xl:-mt-14 relative">
          <div className="bg-secondary ~h-[0.313rem]/[0.45rem]" />
          <div className="~px-[2rem]/[3.75rem] py-20 xl:py-[30px] ~max-w-md/lg mx-auto lg:max-w-none">
            <p className="uppercase text-sm font-kanit text-black">
              Call us today
            </p>
            <a href={`tel:${phoneNumber}`} className="hover:underline">
              <h6 className="text-primary font-kanit font-medium ~text-[1.625rem]/[2.125rem] leading-[38px] text-center xl:text-left lg:w-1/2 mx-auto xl:w-full">
                {phoneNumber}
              </h6>
            </a>
          </div>
        </div>
      </div>

      {children}
    </main>
  );
}
