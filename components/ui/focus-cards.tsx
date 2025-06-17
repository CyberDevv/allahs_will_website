/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    className,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    className: string;
  }) => (
    <Link href={`/portfolio/${card.title.toLowerCase().replaceAll(" ", "_")}`}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden ~min-h-[15rem]/[20rem] h-full w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          className
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          className="object-cover size-full absolute inset-0"
          width={400}
          height={600}
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/30 flex items-end py-8 px-4 transition-opacity duration-300 cursor-pointer",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="~text-xl/2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({
  cards,
  className,
  isFeatured,
}: {
  cards: Card[];
  className?: string;
  isFeatured?: boolean;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  const displayCards = isFeatured ? cards.slice(0, 5) : cards;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-5 px-0 w-full ~mt-5/10 ${
        className ? className : ""
      }`}
    >
      {displayCards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          className={isFeatured && index === 0 ? "md:row-span-2" : ""}
        />
      ))}
    </div>
  );
}
