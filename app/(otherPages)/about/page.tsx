import GetQuote from "@/components/about/GetQuote";
import { Infrastructure } from "@/components/home/Infrastructures";
import { ImageModal } from "@/components/ImageModal";
import { Button } from "@/components/ui/button";
import { infrastructures } from "@/data/infrastructure";
import { yearsOfExperience } from "@/data/misc";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  { src: "/images/service1.png", label: "ISO Number Award" },
  { src: "/images/service2.png", label: "ISO Number Award" },
  { src: "/images/service3.png", label: "ISO Number Award" },
  { src: "/images/service1.png", label: "ISO Number Award" },
  { src: "/images/service2.png", label: "ISO Number Award" },
  { src: "/images/service3.png", label: "ISO Number Award" },
];

export const metadata = {
  title: "About AWSC | AWSC",
};

const Page = () => {
  return (
    <section>
      <div className="container_fluid ~py-[5rem]/[12.5rem]">
        <div className=" lg:start lg:~lg:~space-x-16/20 space-y-12 lg:space-y-0">
          <div className="relative w-full lg:w-2/3 max-w-sm lg:max-w-none mx-auto h-full rounded-2xl overflow-hidden">
            <Image
              className="rounded-2xl object-cover size-full"
              src="/images/about.png"
              width={500}
              height={600}
              alt="about our company"
            />

            <div className="bg-primary text-secondary-foreground ~px-5/10 ~py-[0.5625rem]/[0.8125rem] w-full xl:w-fit col-center xl:col-start absolute bottom-0">
              <p className="font-kanit font-bold ~text-[2.5rem]/[5.625rem]">
                {yearsOfExperience}
              </p>
              <p className="font-kanit ~text-[0.8125rem]/[1.0625rem] text-[#EBECEE]">
                Years of Experience
              </p>
            </div>
          </div>

          <div className="w-full col-center lg:block max-w-md lg:max-w-lg mx-auto xl:max-w-none">
            <h6 className="font-kanit uppercase font-medium ~text-[0.75rem]/[0.875rem] leading-[15px] text-secondary">
              About us
            </h6>
            <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] ~mt-1/2.5 text-center lg:text-start">
              Steel Frabication you can Trust
            </h4>
            <p className="font-lato text-[#41444B] ~text-base/xl leading-normal xl:leading-[28px] ~mt-[1.25rem]/[1.875rem] text-center lg:text-start">
              Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
              rutrum leo consectetur accumsan. Vivamus viverra ante turpis,
              dignissim condimentum elit egestas sit amet. Phasellus faucibus
              pellentesque Cras tincidunt tellus at mi tristique rhoncus. Etiam
              dapibus rutrum leo consectetur accumsan. Vivamus viverra ante
              turpis, dignissim condimentum elit egestas sit amet. Phasellus
              faucibus pellentesque Cras tincidunt tellus at mi tristique
              rhoncus. Etiam dapibus rutrum leo consectetur accumsan. <br />
              <br /> Vivamus viverra ante turpis, dignissim condimentum elit
              egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
              tellus at mi tristique rhoncus. Etiam dapibus rutrum leo
              consectetur accumsan. Vivamus viverra ante turpis, dignissim
              condimentum elit egestas sit amet. Phasellus faucibus pellentesque
            </p>
          </div>
        </div>

        <div className="max-w-md lg:max-w-lg mx-auto xl:max-w-none ~mt-[3.875rem]/[4.5rem]">
          <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] ~mt-1/2.5 text-center lg:text-start">
            Our Mission
          </h4>
          <p className="font-lato text-[#41444B] ~text-base/xl leading-normal xl:leading-[28px] ~mt-[1.25rem]/[1.875rem] text-center lg:text-start ">
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
            condimentum elit egestas sit amet. Phasellus faucibus pellentesque
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
            condimentum elit egestas sit amet. Phasellus faucibus pellentesque
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. <br />
            <br /> Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. <br />
            <br /> Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesqueCras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. <br />
            <br /> Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque Cras tincidunt
            tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
            accumsan. Vivamus viverra ante turpis, dignissim condimentum elit
            egestas sit amet. Phasellus faucibus pellentesque
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 ~gap-5/10 container_fluid ~my-[2rem]/[3.75rem]">
        {images?.map((image, idx) => {
          return <ImageModal key={idx} src={image.src} label={image.label} />;
        })}
      </div>

      <div className="container_fluid ~my-[5rem]/[12.5rem]">
        <div className="grid lg:grid-cols-3 ~gap-5/10 max-w-md lg:max-w-lg mx-auto xl:max-w-none">
          {infrastructures?.map((item, idx) => (
            <Infrastructure
              key={idx}
              svg={item?.svg}
              label={item?.label}
              desc={item?.desc}
              isSpotLight={true}
            />
          ))}
        </div>
      </div>

      <GetQuote />
    </section>
  );
};

export default Page;
