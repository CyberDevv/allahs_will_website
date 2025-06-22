import React from "react";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | AWSC",
};

const Page = () => {
  return (
    <section className="container_fluid ~py-[3rem]/[5rem]">
      {services?.map((category, idx) => {
        const cards = category.entries.map((card, index) => {
          const cardProps = {
            ...card,
            content: typeof card.content === "function" ? card.content() : card.content,
          };
          return <Card key={card.src} card={cardProps} index={index} />;
        });
        return (
          <div
            key={idx}
            className="w-full h-full ~pb-10/40 lastt:pb-0 ~space-y-4/6 ~scroll-mt-20/40"
            id={`${category.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-lato">
              {category.title}
            </h2>
            <div className="flex flex-row justify-start gap-4">
              <Carousel items={cards} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Page;
