"use client";

import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

const NavLink = ({ label }: { label: string }) => {
  return (
    <Link href={`/${label.toLowerCase()}`} className="text-lg text-primary">
      {label}
    </Link>
  );
};

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return (
    <nav className="container_fluid py-[clamp(1.5rem,1.502vw+1.148rem,2.5rem)] px-4 font-kanit">
      <div className="hidden lg:block xl:center space-x-16">
        <NavLink label="About" />
        <NavLink label="Services" />

        <h2 className="font-black text-4xl">Allah&apos;s Will</h2>

        <NavLink label="Portfolio" />
        <NavLink label="Contact" />
      </div>

      <div className="lg:hidden">
        <h2 className="font-black text-4xl">Allah&apos;s Will</h2>
      </div>
    </nav>
  );
};

export default Navbar;
