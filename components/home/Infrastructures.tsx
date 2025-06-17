import { infrastructures } from "@/data/infrastructure";
import { noOfProjects, yearsOfExperience } from "@/data/misc";
import Image from "next/image";
import React from "react";
import SpotlightCard from "../ui/spotlightCard";

export const Infrastructure = ({
  svg,
  label,
  desc,
  isSpotLight,
}: {
  svg: string;
  label: string;
  desc: string;
  isSpotLight?: boolean;
}) => {
  const Comp = () => {
    return (
      <div className="col-center xl:flex-row xl:start xl:space-x-5 space-y-5 xl:space-y-0">
        <Image
          src={`/svg/${svg}.svg`}
          className="ml-[5px]"
          width={61}
          height={63.82}
          alt={label}
        />

        <div>
          <h6 className="text-primary font-kanit font-medium leading-[26.91px] ~text-[1rem]/[1.125rem] text-center xl:text-left">
            {label}
          </h6>
          <p className="~mt-[0.25rem]/[0.375rem] font-lato ~text-[0.938rem]/[1.063rem] leading-[28px] text-center xl:text-left">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      {isSpotLight ? (
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 33, 91, 0.2)"
        >
          <Comp />
        </SpotlightCard>
      ) : (
        <Comp />
      )}
    </>
  );
};

const Infrastructures = () => {
  return (
    <section className="xl:flex justify-center items-start">
      <div className="grid grid-cols-2 xl:start">
        <div className="bg-primary text-primary-foreground px-10 ~py-[2rem]/[3.75rem] ~space-y-[0rem]/[0.625rem] w-full xl:w-fit col-center xl:col-start">
          <p className="font-kanit font-bold ~text-[4.375rem]/[6.25rem] xl:leading-[84px]">
            {noOfProjects}
          </p>
          <p className="font-kanit ~text-[1.063rem]/[1.375rem] ~leading-[1.063rem]/[1.375rem] text-[#EBECEE]">
            Completed Projects
          </p>
        </div>
        <div className="bg-secondary text-secondary-foreground px-10 ~py-[2rem]/[3.75rem] ~space-y-[0rem]/[0.625rem] w-full xl:w-fit col-center xl:col-start">
          <p className="font-kanit font-bold ~text-[4.375rem]/[6.25rem] xl:leading-[84px]">
            {yearsOfExperience}
          </p>
          <p className="font-kanit ~text-[1.063rem]/[1.375rem] ~leading-[1.063rem]/[1.375rem] text-[#EBECEE]">
            Years of Experience
          </p>
        </div>
      </div>
      <div className="bg-white text-primary w-full xl:max-w-[500px] xl:shadow-2xl xl:-mt-40">
        <div className="bg-[#001ED3] ~h-[0.313rem]/[0.45rem]" />
        <div className="~px-[2rem]/[3.75rem] py-20 xl:py-[30px] ~max-w-md/lg mx-auto lg:max-w-none">
          <h6 className="text-primary font-kanit font-medium ~text-[1.625rem]/[2.125rem] leading-[38px] text-center xl:text-left lg:w-1/2 mx-auto xl:w-full">
            We Construct and Manage Places and Infrastructures
          </h6>
          <div className="mt-10 space-y-8 xl:space-y-5 lg:grid lg:grid-cols-3 lg:space-y-0 lg:space-x-4 xl:space-x-0 xl:block">
            {infrastructures?.map((item, idx) => (
              <Infrastructure
                key={idx}
                svg={item?.svg}
                label={item?.label}
                desc={item?.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructures;
