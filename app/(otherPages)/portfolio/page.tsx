import { FocusCards } from "@/components/ui/focus-cards";
import { getProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title: "Portfolio | AWSC",
};

const Page = async () => {
  const projects = await getProjects();
  
  return (
    <section className="container_fluid ~py-[3rem]/[5rem]">
      <FocusCards cards={projects} />
    </section>
  );
};

export default Page;
