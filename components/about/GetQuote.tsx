"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const GetQuote = () => {
  const [bgPosition, setBgPosition] = useState("50% 50%");
  const bgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!bgRef.current) return;
    const rect = bgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    setBgPosition(`${percentX}% ${percentY}%`);
  };

  return (
    <div
      className="bg-hero_image bg-cover bg-no-repeat ~mb-[5rem]/[15.5rem]"
      ref={bgRef}
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: bgPosition,
      }}
    >
      <div className="bg-black/50 h-[calc(100vh-84.13px)] min-[700px]:h-[calc(100vh-335px)] lg:h-screen  max-h-[1080px]">
        <div className="relative flex flex-col  h-[calc(100vh-84.13px)] min-[700px]:h-[calc(100vh-335px)] lg:h-screen max-h-[1080px] items-center justify-center">
          <div className="relative flex flex-col gap-4 items-center justify-center px-4 col-start">
            <div className="container_fluid col-center text-center">
              <h2 className="tracking-wider ~text-[1.25rem]/[2.1875rem] text-white text-center font-lato">
                Get a Quote
              </h2>
              <h2 className=" ~leading-[2.5rem]/[4rem] font-semibold ~text-[2.1875rem]/[3.4375rem] text-white text-center font-kanit">
                Start Building Your Steel Solution Today
              </h2>
              <p className="xl:w-3/5 ~text-[0.938rem]/[1.063rem] xl:leading-[28px] text-white ~my-3/5 text-center font-lato">
                Share your project details with our experts. We&apos;ll provide
                a customized steel construction quote within 48 hours.
              </p>
              <Link href="/contact">
                <Button variant="secondary" className="py-5 px-16 h-auto">
                  Appointment
                  <Image
                    src="/svg/arrow-right.svg"
                    className="ml-[5px]"
                    width={13}
                    height={14}
                    alt="arrow-right"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
