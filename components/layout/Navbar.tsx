"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLink = ({ label }: { label: string }) => {
  return (
    <Link href={`/${label.toLowerCase()}`} className="text-lg text-primary">
      {label}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="container_fluid py-[clamp(1rem,1.724vw+0.601rem,2.25rem)] px-4 font-kanit">
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

      <div className="lg:hidden">
        <Image
          src="/images/logo.png"
          width={988}
          height={642}
          alt="Logo"
          className="w-20"
        />
      </div>
    </nav>
  );
};

export default Navbar;
