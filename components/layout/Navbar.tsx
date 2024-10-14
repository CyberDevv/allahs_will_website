"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import {
  HoveredLink,
  Menu,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const NavLink = ({ label }: { label: string }) => {
  return (
    <Link href={`/${label.toLowerCase()}`} className="text-lg text-primary">
      {label}
    </Link>
  );
};

const Navbar = ({ className }: { className?: string }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/about">About</HoveredLink>
        <HoveredLink href="/services">Services</HoveredLink>

        <Image
          src="/images/logo.png"
          width={988}
          height={642}
          alt="Logo"
          className="w-24"
        />

        <HoveredLink href="/portfolio">Portfolio</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
        {/* <nav
          className="container_fluid py-[clamp(1rem,1.724vw+0.601rem,2.25rem)] px-4 font-kanit relative"
          id="outer-container"
        >
          <div className="hidden lg:block lg:center space-x-16">
            <NavLink label="About" />
            <NavLink label="Services" />
        
            <Image
              src="/images/logo.png"
              width={988}
              height={642}
              alt="Logo"
              className="w-24"
            />
        
            <NavLink label="Portfolio" />
            <NavLink label="Contact" />
          </div>
        
          <div className="lg:hidden between">
            <Image
              src="/images/logo.png"
              width={988}
              height={642}
              alt="Logo"
              className="w-20"
            />
            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
          </div>
        </nav> */}
      </Menu>
    </div>
  );
};

export default Navbar;
