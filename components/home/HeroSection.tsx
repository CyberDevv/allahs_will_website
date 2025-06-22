import Image from "next/image";
import { Button } from "../ui/button";
import { yearsOfExperience } from "@/data/misc";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="bg-hero_image bg-cover bg-no-repeat">
        <div className="bg-black h-[calc(100vh-84.13px)] min-[700px]:h-[calc(100vh-335px)] lg:h-screen max-h-[1080px] bg-opacity-40">
          <div className="relative flex flex-col  h-[calc(100vh-84.13px)] min-[700px]:h-[calc(100vh-335px)] lg:h-screen max-h-[1080px] items-center justify-center">
            <div className="relative flex flex-col gap-4 items-center justify-center px-4 col-start">
              <div className="container_fluid">
                <div className="lg:w-[65%] col-center xl:block mx-auto xl:mx-0">
                  <h2 className=" ~leading-[3rem]/[5.25rem] ~text-[2.5rem]/[5rem] text-white text-center xl:text-left">
                    <span className="font-semibold font-kanit">
                      Building the Future with Strength and Precision
                    </span>
                  </h2>
                  <p className="xl:w-[90%] ~text-[0.938rem]/[1.063rem] leading-[28px] text-[#EBECEE] ~mt-[2rem]/[2.5rem] ~mb-[2.6rem]/[3.125rem] text-center xl:text-left">
                    With over {yearsOfExperience?.replace("+", "")} years of
                    excellence in steel construction, we deliver innovative and
                    durable solutions for oil & gas, industrial, and commercial
                    projects across Nigeria.
                  </p>
                  <Link href={"/portfolio"}>
                    <Button variant="secondary" className="py-5 px-16 h-auto">
                      Explore Our Work
                      <Image
                        src="/svg/arrow-right.svg"
                        className="ml-[5px]"
                        width={13}
                        height={14}
                        alt="arrow-right"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
