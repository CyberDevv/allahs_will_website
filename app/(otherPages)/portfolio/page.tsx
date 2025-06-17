import { FocusCards } from "@/components/ui/focus-cards";
import { projects } from "@/data/projects";
import React from "react";

export const metadata = {
  title: "Portfolio | AWSC",
};

const Page = () => {
  return (
    <section className="container_fluid ~py-[3rem]/[5rem]">
      <FocusCards cards={projects} />
    </section>
  );
};

export default Page;
