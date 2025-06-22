import GetQuote from "@/components/about/GetQuote";
import { Infrastructure } from "@/components/home/Infrastructures";
import { ImageModal } from "@/components/ImageModal";
import { Button } from "@/components/ui/button";
import ChromaGrid from "@/components/ui/ChromaGrid/ChromaGrid";
import { infrastructures } from "@/data/infrastructure";
import { team } from "@/data/management";
import { yearsOfExperience } from "@/data/misc";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
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
          <div className="relative w-full lg:w-2/3 max-w-sm lg:max-w-none mx-auto h-full max-h-[550px] rounded-2xl overflow-hidden">
            <Image
              className="rounded-2xl object-cover size-full"
              src="/images/CEO.png"
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
              A Message from our CEO
            </h4>
            <p className="font-lato text-[#41444B] ~text-base/xl leading-normal xl:leading-[28px] ~mt-[1.25rem]/[1.875rem] text-center lg:text-start">
              Greetings and welcome to Allah&apos;s Will Steel Construction
              (Nig.) Ltd. We are proud of many great projects we have built in
              our {yearsOfExperience} year history. Our experience includes projects in
              Abuja, Lagos, Benin, Oyo, Kano and other state in Nigeria. We have
              extensive expertise in oil and gas, industrial projects and an
              impressive resume of work in mission critical and retail
              construction. Please enjoy your trip around the world of
              Allah&apos;s Will Steel Construction Nig. Ltd. We look forward for
              an opportunity to serve build-up of your needs in the near future.
            </p>

            <div className="~mt-5/10 font-medium font-kanit ~text-base/xl text-center lg:text-start">
              <h4>
                DR. M.A. ODESOLA <sub>(J.P., G.P.P)</sub>
              </h4>
              <p className="~mt-1/2">AWSC CEO</p>
            </div>
          </div>
        </div>

        <div className="~my-[5rem]/[12.5rem]">
          <div className="grid lg:grid-cols-3 ~gap-5/10 max-w-md mx-auto lg:max-w-none">
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

        <div className="max-w-md lg:max-w-none ~mt-[3.875rem]/[4.5rem]">
          <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] ~mt-1/2.5 text-center lg:text-start">
            Mission / Vision Statement
          </h4>
          <ul className="list-decimal list-inside ~mt-[1.25rem]/[1.875rem] ~space-y-1.5/3 font-lato text-[#41444B] ~text-base/xl leading-normal xl:leading-[28px] text-center lg:text-start">
            <li>
              To maintain and develop innovative techniques in service delivery.
            </li>
            <li>
              To attain the highest achievable standard for occupational Health
              and safety management in the execution of projects and in the
              delivery of services.
            </li>
            <li>
              To develop indigenous knowledge, skills, creativity and potentials
              of all our people and to generate involvement, team work and
              productivity in relevant fields without compromising.
            </li>
            <li>
              To care for our local communities in which we operate and to
              ensure that the environment is protected.
            </li>
            <li>To ensure quality is maintained in all our services.</li>
          </ul>
        </div>

        <div className="~mt-[3.875rem]/[4.5rem]">
          <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] text-center lg:text-start">
            Management Team
          </h4>

          <p className="font-lato text-[#41444B] ~text-base/xl leading-normal xl:leading-[28px] ~mt-[1.25rem]/[1.875rem] text-center lg:text-start">
            The Management team has the Chairman/Chief Executive Officer at the
            centre flanked by his dedicated and seasoned professionals who have
            always demonstrated great managerial ability. The team maintains an
            excellent team work that provides a conducive and friendly
            environment which has guaranteed our success in the industry.
          </p>

          <ChromaGrid
            items={team}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            className="~mt-8/16"
          />
        </div>

        <div className="~mt-[3.875rem]/[4.5rem]">
          <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] text-center lg:text-start">
            Awards & Recognitions
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 ~gap-5/10 ~mt-[1.25rem]/[1.875rem]">
            {images?.map((image, idx) => {
              return (
                <ImageModal key={idx} src={image.src} label={image.label} />
              );
            })}
          </div>
        </div>
      </div>

      <GetQuote />
    </section>
  );
};

export default Page;
