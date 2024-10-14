import React from "react";
import { useId } from "react";
import { Button } from "./button";
import Image from "next/image";

export function FeaturesSectionDemo({
  label,
  desc,
  isOdd,
  image
}: {
  label: string;
  desc: string;
  isOdd?: boolean;
  image?: string
}) {
  return (
    <div className={`bg-[url('/images/${image || "service1"}.png')] bg-cover col-span-2 xl:col-span-1 overflow-hidden`}>
      <div
        className={`${
          isOdd
            ? "from-secondary/80 to-secondary"
            : "from-primary/80 to-primary "
        }  h-full w-full px-[clamp(1.875rem,0.939vw+1.655rem,2.5rem)] py-[clamp(2.5rem,0.939vw+2.28rem,3.125rem)] text-primary-foreground flex flex-col relative bg-gradient-to-b`}
      >
        <Grid size={20} />
        <h3 className="font-kanit font-semibold text-[clamp(1.5rem,0.563vw+1.368rem,1.875rem)] 2xl:text-4xl">
          {label}
        </h3>
        <p className="font-lato font-medium leading-[28px] text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] 2xl:text-base text-[#D4D7DD] mt-[clamp(1.5rem,0.563vw+1.368rem,1.875rem)]">
          {desc}
        </p>

        <Button
          variant={!isOdd ? "secondary" : "default"}
          className="mt-auto ml-auto"
          size="icon"
        >
          <Image
            src="/svg/arrow-right.svg"
            width={20}
            height={20}
            alt="arrow-right"
          />
        </Button>
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-100/30 to-zinc-300/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay stroke-white/10 fill-white/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
