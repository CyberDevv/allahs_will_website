"use client";

import React, { useRef } from "react";
import Image from "next/image";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const data = items || [];

  return (
    <div
      ref={rootRef}
      className={`relative w-full h-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="group relative flex flex-col w-full rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300"
          style={
            {
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            } as React.CSSProperties
          }
        >
          <div className="relative z-10 flex-1 p-[10px] box-border">
            <Image
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full max-h-[400px] h-full object-cover rounded-[10px]"
              width={280}
              height={180}
            />
          </div>
          <footer className="relative z-10 p-3 text-white font-kanit  space-y-1">
            <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>

            <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
