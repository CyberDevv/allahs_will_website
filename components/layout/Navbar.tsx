"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 md:w-fit md:mx-auto z-50",
        className
      )}
    >
      <Menu
        setActive={setActive}
        className="~px-7/10 ~py-1/2 rounded-2xl transition-all"
      >
        <div className="hidden md:block md:center ~md:~space-x-10/14">
          <HoveredLink href="/about">About</HoveredLink>
          <HoveredLink href="/services">Services</HoveredLink>

          <Link href="/">
            <Image
              src="/images/logo.png"
              width={988}
              height={642}
              alt="Logo"
              className="~w-20/28"
            />
          </Link>

          <HoveredLink href="/portfolio">Portfolio</HoveredLink>
          <HoveredLink href="/contact">Contact</HoveredLink>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
          <div className=" between">
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={988}
                height={642}
                alt="Logo"
                className="w-16"
              />
            </Link>

            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
              size={16}
            />
          </div>

          {
            <div
              className={` transition-['height'] duration-500 overflow-hidden ${
                isOpen ? "h-[340px] pb-4" : "h-0"
              }`}
            >
              <div
                className={`col-start space-y-6 mt-10 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <HoveredLink href="/about">About</HoveredLink>
                <HoveredLink href="/services">Services</HoveredLink>
                <HoveredLink href="/portfolio">Portfolio</HoveredLink>
                <HoveredLink href="/contact">Contact</HoveredLink>
              </div>

              <hr className="mt-8 border-gray-300" />
              <p className="mt-4 ">Building ...</p>
            </div>
          }
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
