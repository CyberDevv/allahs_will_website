import React from 'react'
import { LayoutGrid } from '../ui/layout-grid';
import { Button } from '../ui/button';

const OurWorks = () => {
    const ProjectDesc = ({ title, desc }: { title: string; desc: string }) => {
      return (
        <div>
          <p className="font-bold md:text-4xl text-lg text-white">{title}</p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-sm md:text-base my-4 max-w-lg text-neutral-200">
            {desc}
          </p>
  
          <Button className="text-sm md:text-base">Check it out</Button>
        </div>
      );
    };
  
    const projects = [
      {
        id: 1,
        content: (
          <ProjectDesc
            title="Flat Body"
            desc="A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life."
          />
        ),
        className: "md:col-span-2",
        thumbnail: "/images/project1.jpg",
        title: "Flat Body",
      },
      {
        id: 2,
        content: (
          <ProjectDesc
            title="Flat Body"
            desc="A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life."
          />
        ),
        className: "md:col-span-1",
        thumbnail: "/images/project2.jpg",
        title: "Flat Body",
      },
      {
        id: 3,
        content: (
          <ProjectDesc
            title="Flat Body"
            desc="A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life."
          />
        ),
        className: "md:col-span-1",
        thumbnail: "/images/project3.jpg",
        title: "Flat Body",
      },
      {
        id: 4,
        content: (
          <ProjectDesc
            title="Flat Body"
            desc="A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life."
          />
        ),
        className: "md:col-span-2",
        thumbnail: "/images/project4.jpg",
        title: "Flat Body",
      },
    ];
  
    return (
      <section className="container_fluid py-[clamp(5rem,10.345vw+2.608rem,12.5rem)]">
        <h6 className="font-kanit uppercase font-medium text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] leading-[15px] text-secondary text-center">
          Our Works
        </h6>
        <h4 className="text-primary font-kanit font-semibold text-[clamp(2rem,1.983vw+1.541rem,3.438rem)] leading-tight xl:leading-[64px] mt-1 xl:mt-2.5 text-center">
          Our Special Projects
        </h4>
  
        <div className="h-screen max-h-[1080px]">
          <LayoutGrid cards={projects} />
        </div>
      </section>
    );
  }

export default OurWorks