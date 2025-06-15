import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <section className="bg-hero_image bg-cover bg-no-repeat">
        <div className="bg-black h-[calc(100vh-84.13px)] min-[700px]:h-[calc(100vh-335px)] lg:h-screen xl:max-h-[1080px] bg-opacity-40">
          <div className="relative flex flex-col  h-[calc(100vh-84.13px)] min-[700px]:h-[calc(100vh-335px)] lg:h-screen xl:max-h-[1080px] items-center justify-center">
            <div className="relative flex flex-col gap-4 items-center justify-center px-4 col-start">
              <div className="container_fluid">
                <div className="xl:w-[65%] col-center xl:block">
                  <h2 className=" ~leading-[3rem]/[5.25rem] ~text-[2.5rem]/[5rem] text-white text-center xl:text-left">
                    <span className="font-semibold font-kanit">
                      Construction solution
                    </span>{" "}
                    <br className="hidden sm:inline-block" />
                    for everyone
                  </h2>
                  <p className="xl:w-[90%] ~text-[0.938rem]/[1.063rem] leading-[28px] text-[#EBECEE] ~mt-[2rem]/[2.5rem] ~mb-[2.6rem]/[3.125rem] text-center xl:text-left">
                    In id enim odio. Nunc aliquet diam tortor, at venenatis urna
                    sagittis non. Suspendisse sodales nulla sit amet sem
                    condimentum, ac euismod nibh elementum. Praesent eu urna at
                    sem sodales venenatis. Mauris efficitur dapibus enim in
                    posuere
                  </p>
                  <Button variant="secondary" className="py-5 px-16 h-auto">
                    Learn more
                    <Image
                      src="/svg/arrow-right.svg"
                      className="ml-[5px]"
                      width={13}
                      height={14}
                      alt="arrow-right"
                    />
                  </Button>
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
