import React from "react";
import { Button } from "../ui/button";
import { FocusCards } from "../ui/focus-cards";

const OurWorks = () => {

  const projects = [
    {
      id: 1,
      src: "/images/project1.jpg",
      title: "Flat Body",
    },
    {
      id: 2,
      src: "/images/project2.jpg",
      title: "Low-bed Body",
    },
    {
      id: 3,
      src: "/images/project3.jpg",
      title: "Tanks",
    },
    {
      id: 4,
      src: "/images/project4.jpg",
      title: "Tankers",
    },
    {
      id: 5,
      src: "/images/project3.jpg",
      title: "Tippers",
    },
  ];

  return (
    <section className="container_fluid ~py-[5rem]/[12.5rem]">
      <h6 className="font-kanit uppercase font-medium ~text-[0.75rem]/[0.875rem] leading-[15px] text-secondary text-center">
        Our Works
      </h6>
      <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] ~mt-1/2.5 text-center">
        Our Featured Projects
      </h4>

      <FocusCards cards={projects} />
    </section>
  );
};

export default OurWorks;
