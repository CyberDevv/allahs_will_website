import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterBackground } from "../ui/FooterBackground";
import { phoneNumber } from "@/data/contact";
import { yearsOfExperience } from "@/data/misc";

const Footer = () => {
  const Links = ({ href, label }: { href: string; label: string }) => (
    <li>
      <Link href={href} className="hover:underline">
        {label}
      </Link>
    </li>
  );

  return (
    <footer className="bg-[#02173b]">
      <FooterBackground>
        <div className="container_fluid py-[80px] grid xl:grid-cols-[420px_1fr] xl:gap-x-28">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              width={988}
              height={642}
              alt="Logo"
              className="w-28"
            />
            <p className="text-[#EBECEE] mt-2 font-lato ~text-[0.938rem]/[1.063rem] leading-[28px]">
              With {yearsOfExperience} years of expertise, we deliver precision-engineered steel
              structures for industrial, commercial, and energy projects across
              Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-20 xl:mt-0">
            <div>
              <h2 className="~mb-[1rem]/[1.5rem] font-kanit ~text-[1.063rem]/[1.375rem] ~leading-[1.063rem]/[1.375rem] text-white">
                Quick Links
              </h2>
              <ul className="font-lato text-[#D4D7DD] ~text-[0.938rem]/[1.063rem] leading-[28px] space-y-1.5">
                <Links href="/about" label="About Company" />
                <Links href="/services" label="Our Services" />
                <Links href="/portfolio" label="Our Projects" />
                <Links href="/hse-policy" label="HSE Policy" />
                <Links href="/quality-policy" label="Quality Policy" />
              </ul>
            </div>
            <div>
              <h2 className="~mb-[1rem]/[1.5rem] font-kanit ~text-[1.063rem]/[1.375rem] ~leading-[1.063rem]/[1.375rem] text-white">
                Clients Support
              </h2>
              <ul className="font-lato text-[#D4D7DD] ~text-[0.938rem]/[1.063rem] leading-[28px]">
                <Links href="/#testimonials" label="Clients Testimonials" />
                <Links href="/contacts" label="Contacts" />
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2 className="~mb-[1rem]/[1.5rem] font-kanit ~text-[1.063rem]/[1.375rem] ~leading-[1.063rem]/[1.375rem] text-white">
                Address
              </h2>
              <ul className="font-lato text-sm text-[#D4D7DD] ~text-[0.938rem]/[1.063rem] leading-[28px] space-y-1.5">
                <li className="mb-2.5">
                  P. O Box 8093, Klm 127 - 500, Ibadan - Lagos Expressway,
                  Ogunpa Channelization, Adjacent Soka Bus Stop, Mapo Hill,
                  Ibadan
                </li>
                <li>
                  <a href={`tel:${phoneNumber}`} className="hover:underline">
                    {phoneNumber}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#D4D7DD] text-center w-full font-lato tracking-wider">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            AWSC
          </Link>
          . All Rights Reserved.
        </p>
      </FooterBackground>
    </footer>
  );
};

export default Footer;
