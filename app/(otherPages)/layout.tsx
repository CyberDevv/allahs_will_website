"use client";

import { phoneNumber } from "@/data/contact";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
  "/portfolio": {
    title: "Portfolio Archive",
    caption: "Explore our completed projects and see the quality of our work",
    image: "/images/hero_portfolio.png",
  },
  "/contact": {
    title: "Contacts",
    caption: "Get in touch with us",
    image: "/images/hero_contact.png",
  },
  "/services": {
    title: "Services",
    caption: "Comprehensive Construction Solutions Tailored to Your Needs",
    image: "/images/hero_services.png",
  },
  "/hse-policy": {
    title: "HSE Policy",
    caption: "Discover our commitment to health, safety, and the environment",
    image: "/images/hero_hse-policy.png",
  },
  "/quality-policy": {
    title: "Quality Policy",
    caption:
      "Learn about our standards and dedication to delivering excellence",
    image: "/images/hero_quality-policy.png",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  let { title, caption, image } = pageInfo[pathname] || {};
  let breadcrumb: React.ReactNode = null;

  if (!title) {
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "Page";
    title = lastSegment
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    let path = "";
    breadcrumb = segments.map((seg, idx) => {
      path += "/" + seg;
      const label = seg
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      const isLast = idx === segments.length - 1;
      return (
        <span key={path}>
          {!isLast ? (
            <>
              <Link href={path} className="hover:underline text-[#EBECEE]">
                {label}
              </Link>
              <span className="mx-1 text-[#EBECEE]">/</span>
            </>
          ) : (
            <span className="text-[#EBECEE]">{label}</span>
          )}
        </span>
      );
    });

    image = `/images/hero_${segments[1]}.png`;
  }

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
        <div className="bg-black/40 size-full inset-0 absolute text-white start">
          <div className="container_fluid ~mt-10/20">
            <h2 className="xl:leading-[64px] ~text-[1.875rem]/[3.4375rem] text-white text-center xl:text-left font-kanit font-semibold">
              {title}
            </h2>
            <p className="~text-[0.75rem]/[1.0625rem] leading-[28px] ~mt-[0rem]/[1rem] xl:text-left text-center">
              {breadcrumb ? breadcrumb : caption}
            </p>
          </div>
        </div>
      </div>
      <div className="end container_fluid">
        <div className="bg-white text-primary w-full lg:~lg:~max-w-[21.875rem]/[28.125rem] shadow-xl xl:shadow-2xl ~-mt-8/14 relative max-w-sm mx-auto lg:mx-0">
          <div className="bg-secondary ~h-[0.313rem]/[0.45rem]" />
          <div className="~px-[2rem]/[3.75rem] ~py-[1.25rem]/[1.875rem] ~max-w-md/lg mx-auto lg:max-w-none">
            <p className="uppercase text-sm font-kanit text-black text-center lg:text-left">
              Call us today
            </p>
            <a href={`tel:${phoneNumber}`} className="hover:underline">
              <h6 className="text-primary font-kanit font-medium ~text-[1.625rem]/[2.125rem] leading-[38px] text-center lg:text-left mx-auto lg:w-full">
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
