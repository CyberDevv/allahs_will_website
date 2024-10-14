"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { FeaturesSectionDemo } from "@/components/ui/ServicesPlate";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import Image from "next/image";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  indicators: {
    active: {
      off: "bg-[#00215B] hover:bg-white",
      on: "bg-[#001ED3] h-[14px] w-[14px]",
    },
    base: "h-2.5 w-2.5 rounded-full",
    wrapper:
      "absolute bottom-0 left-1/2 lg:left-8 flex -translate-x-1/2 space-x-3",
  },
};

const Infrastructure = ({
  svg,
  label,
  desc,
}: {
  svg: string;
  label: string;
  desc: string;
}) => {
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
        <h6 className="text-primary font-kanit font-medium leading-[26.91px] text-[clamp(1rem,0.188vw+0.956rem,1.125rem)] text-center xl:text-left">
          {label}
        </h6>
        <p className="mt-[clamp(0.25rem,0.188vw+0.206rem,0.375rem)] font-lato text-[clamp(0.938rem,0.188vw+0.894rem,1.063rem)] leading-[28px] text-center xl:text-left">
          {desc}
        </p>
      </div>
    </div>
  );
};

function HeroSection() {
  return (
    <>
      <section className="bg-hero_image bg-cover bg-no-repeat">
        <div className="bg-black h-[calc(100vh-84.13px)] min-[700px]:h-[calc(100vh-335px)] lg:h-screen xl:max-h-[1080px] bg-opacity-40">
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4 col-start"
            >
              <div className="container_fluid">
                <div className="xl:w-[65%] col-center xl:block">
                  <h2 className="xl:leading-[84px] leading-tight text-[clamp(2.5rem,3.448vw+1.703rem,5rem)] text-white text-center xl:text-left">
                    <span className="font-semibold font-kanit">
                      Construction solution
                    </span>{" "}
                    <br className="hidden sm:inline-block" />
                    for everyone
                  </h2>
                  <p className="xl:w-[90%] text-[clamp(0.938rem,0.188vw+0.894rem,1.063rem)] leading-[28px] text-[#EBECEE] mt-[clamp(2rem,0.751vw+1.824rem,2.5rem)] mb-[clamp(2.6rem,0.789vw+2.415rem,3.125rem)] text-center xl:text-left">
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
            </motion.div>
          </AuroraBackground>
        </div>
      </section>
    </>
  );
}

function Infrastructures() {
  return (
    <section className="xl:flex justify-center items-start">
      <div className="grid grid-cols-2 xl:start">
        <div className="bg-primary text-primary-foreground px-10 py-[clamp(2rem,2.414vw+1.442rem,3.75rem)] space-y-[clamp(0rem,0.939vw+-0.22rem,0.625rem)] w-full xl:w-fit col-center xl:col-start">
          <p className="font-kanit font-bold text-[clamp(4.375rem,2.817vw+3.715rem,6.25rem)] xl:leading-[84px]">
            245
          </p>
          <p className="font-kanit text-[clamp(1.063rem,0.469vw+0.953rem,1.375rem)] leading-[clamp(1.063rem,0.469vw+0.953rem,1.375rem)] text-[#EBECEE]">
            Completed Projects
          </p>
        </div>
        <div className="bg-secondary text-secondary-foreground px-10 py-[clamp(2rem,2.414vw+1.442rem,3.75rem)] space-y-[clamp(0rem,0.939vw+-0.22rem,0.625rem)] w-full xl:w-fit col-center xl:col-start">
          <p className="font-kanit font-bold text-[clamp(4.375rem,2.817vw+3.715rem,6.25rem)] xl:leading-[84px]">
            25+
          </p>
          <p className="font-kanit text-[clamp(1.063rem,0.469vw+0.953rem,1.375rem)] leading-[clamp(1.063rem,0.469vw+0.953rem,1.375rem)] text-[#EBECEE]">
            Years of Experience
          </p>
        </div>
      </div>
      <div className="bg-white text-primary w-full xl:max-w-[500px] xl:shadow-2xl xl:-mt-48">
        <div className="bg-[#001ED3] h-[clamp(0.313rem,0.206vw+0.265rem,0.45rem)]" />
        <div className="px-[clamp(2rem,2.414vw+1.442rem,3.75rem)] py-20 xl:py-[30px] max-w-md md:max-w-lg mx-auto lg:max-w-none">
          <h6 className="text-primary font-kanit font-medium text-[clamp(1.625rem,0.751vw+1.449rem,2.125rem)] leading-[38px] text-center xl:text-left lg:w-1/2 mx-auto xl:w-full">
            We Construct and Manage Places and Infrastructures
          </h6>
          <div className="mt-10 space-y-8 xl:space-y-5 lg:grid lg:grid-cols-3 lg:space-y-0 lg:space-x-4 xl:space-x-0 xl:block">
            <Infrastructure
              svg="general"
              label="General Contact"
              desc="Quisque condimentum erat ac orci blandit, in sollicitudin
                    tellus vestibulum"
            />
            <Infrastructure
              svg="ruler"
              label="Project Planning "
              desc="Quisque condimentum erat ac orci blandit, in sollicitudin
                  tellus vestibulum"
            />
            <Infrastructure
              svg="measuring-tool"
              label="Refurbishment"
              desc="Quisque condimentum erat ac orci blandit, in sollicitudin
                tellus vestibulum"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section>
      <div className="container_fluid py-[clamp(5rem,10.345vw+2.608rem,12.5rem)] xl:start xl:space-x-20 space-y-12 xl:space-y-0">
        <div className="w-full col-center xl:block max-w-md lg:max-w-lg mx-auto xl:max-w-none">
          <h6 className="font-kanit uppercase font-medium text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] leading-[15px] text-secondary">
            About us
          </h6>
          <h4 className="text-primary font-kanit font-semibold text-[clamp(2rem,1.983vw+1.541rem,3.438rem)] leading-tight xl:leading-[64px] mt-1 xl:mt-2.5 text-center xl:text-start">
            With our knowledge we guarente success
          </h4>
          <p className="font-lato text-[#41444B] text-[clamp(0.938rem,0.188vw+0.894rem,1.063rem)] leading-normal xl:leading-[28px] mt-[clamp(1.25rem,0.939vw+1.03rem,1.875rem)] text-center xl:text-start">
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
            condimentum elit egestas sit amet. Phasellus faucibus pellentesque
          </p>
          <Button
            variant="secondary"
            className="py-5 px-16 h-auto mt-[clamp(1.875rem,1.878vw+1.435rem,3.125rem)]"
          >
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

          <Image
            className="w-full rounded-2xl max-h-[600px] object-cover"
            src="/images/about.png"
            width={500}
            height={600}
            alt="about our company"
          />
      </div>

      <div className="my-[clamp(2.5rem,5.172vw+1.304rem,6.25rem)] grid lg:grid-cols-4 xl:grid-cols-5 container_fluid lg:max-w-5xl mx-auto xl:!max-w-none xl:!px-0 rounded-2xl lg:rounded-none overflow-hidden max-w-md md:max-w-lg">
        <Image
          src="/images/services.png"
          width={850}
          height={600}
          alt="services"
          className="col-span-2 max-h-[500px] w-full object-cover object-center"
        />
        <FeaturesSectionDemo
          label="Research & Analysis"
          desc="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
          image="service1"
        />
        <FeaturesSectionDemo
          label="Research & Analysis"
          desc="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
          isOdd
          image="service2"
        />
        <FeaturesSectionDemo
          label="Research & Analysis"
          desc="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
          image="service3"
        />
      </div>
    </section>
  );
}

function OurWorks() {
  const ProjectDesc = ({ title, desc }: { title: string; desc: string }) => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {desc}
        </p>

        <Button>Check it out</Button>
      </div>
    );
  };

  const projects = [
    {
      id: 1,
      content: (
        <ProjectDesc
          title="Flat Body"
          desc="A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life."
        />
      ),
      className: "md:col-span-2",
      thumbnail: "/images/project1.jpg",
      title: "Flat Body",
    },
    {
      id: 2,
      content: (
        <ProjectDesc
          title="Flat Body"
          desc="A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life."
        />
      ),
      className: "col-span-1",
      thumbnail: "/images/project2.jpg",
      title: "Flat Body",
    },
    {
      id: 3,
      content: (
        <ProjectDesc
          title="Flat Body"
          desc="A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life."
        />
      ),
      className: "col-span-1",
      thumbnail: "/images/project3.jpg",
      title: "Flat Body",
    },
    {
      id: 4,
      content: (
        <ProjectDesc
          title="Flat Body"
          desc="A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life."
        />
      ),
      className: "md:col-span-2",
      thumbnail: "/images/project4.jpg",
      title: "Flat Body",
    },
  ];

  return (
    <section className="container_fluid py-[clamp(5rem,10.345vw+2.608rem,12.5rem)]">
      <h6 className="font-kanit uppercase font-medium text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] leading-[15px] text-secondary text-center">
        Our Works
      </h6>
      <h4 className="text-primary font-kanit font-semibold text-[clamp(2rem,1.983vw+1.541rem,3.438rem)] leading-tight xl:leading-[64px] mt-1 xl:mt-2.5 text-center">
        Our Special Projects
      </h4>

      <div className="h-screen">
        <LayoutGrid cards={projects} />
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="py-[clamp(2rem,2.414vw+1.442rem,3.75rem)] mx-auto max-w-[1900px]">
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4479614234947!2d3.960497759591075!3d7.415572293806846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039933161bf7983%3A0xbef1f39669a64d13!2sAllah&#39;s%20Will%20Steel%20Construction%20Nig.%20Ltd!5e0!3m2!1sen!2sng!4v1726408169614!5m2!1sen!2sng"
          width="600"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      <div className="relative mt-20 md:-mt-20 xl:mt-32 container_fluid w-full md:grid md:grid-cols-2 md:gap-4 xl:between xl:space-x-8">
        <div className=" bg-white text-primary w-full max-w-md md:max-w-lg xl:max-w-[500px] md:shadow-2xl xl:-mt-48 mx-auto">
          <div className="bg-secondary h-[clamp(0.313rem,0.206vw+0.265rem,0.45rem)]" />
          <div className="px-4 xl:px-[clamp(2rem,2.414vw+1.442rem,3.75rem)] py-10 lg:py-5 xl:py-[30px] w-full xl:min-w-[500px]">
            <h6 className="font-kanit uppercase font-light text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] leading-[15px] text-[#41444B] text-center xl:text-left">
              Company Address
            </h6>
            <p className="font-medium font-kanit text-[clamp(1rem,1.034vw+0.761rem,1.75rem)] leading-[clamp(1.25rem,1.034vw+1.011rem,2rem)] text-center xl:text-left mt-[10px]">
              P. O Box 8093, Klm 127 - 500, Ibadan - Lagos Expressway, Ogunpa
              Channelization, Adjacent Soka Bus Stop, Mapo Hill, Ibadan
            </p>
          </div>
        </div>

        <div className="xl:-mt-48 xl:between w-full xl:space-x-4">
          <div className="bg-white text-primary w-full px-4 md:py-5 xl:py-[30px] center xl:start space-x-5 md:shadow-2xl">
            <Image src="/svg/phone.svg" width={65} height={65} alt="phone" />
            <div>
              <h6 className="font-kanit uppercase font-light text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] leading-[15px] text-[#41444B]">
                Company Phones
              </h6>
              <p className="font-medium font-kanit text-[clamp(0.875rem,0.517vw+0.755rem,1.25rem)] leading-[32px] text-center xl:text-left mt-[10px]">
                +234 8034552211
              </p>
              <p className="font-medium font-kanit text-[clamp(0.875rem,0.517vw+0.755rem,1.25rem)] leading-[32px] text-center xl:text-left mt-[5px]">
                +234 8034552211
              </p>
            </div>
          </div>
          <div className="bg-white text-primary w-full px-4 md:py-5 xl:py-[30px] center xl:start space-x-5 md:shadow-2xl mt-5 xl:mt-0">
            <Image src="/svg/email.svg" width={65} height={65} alt="phone" />
            <div>
              <h6 className="font-kanit uppercase font-light text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] leading-[15px] text-[#41444B]">
                Email
              </h6>
              <p className="font-medium font-kanit text-[clamp(0.875rem,0.517vw+0.755rem,1.25rem)] leading-[32px] text-center xl:text-left mt-[10px]">
                awsc@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const Testimonial = ({
    testimony,
    client,
    role,
  }: {
    testimony: string;
    client: string;
    role: string;
  }) => {
    return (
      <div className="w-full relative col-center lg:block">
        <Image src="/svg/quote.svg" width={80} height={80} alt="quote" />
        <p className="text-center lg:text-left mt-[30px] mb-5 font-lato text-[clamp(0.938rem,0.188vw+0.894rem,1.063rem)] leading-[28px] text-[#41444B] max-w-[646px]">
          {testimony}
        </p>

        <h5 className="font-kanit font-medium text-[clamp(1.063rem,0.469vw+0.953rem,1.375rem)] leading-[clamp(1.063rem,0.469vw+0.953rem,1.375rem)] text-[#16213E]">
          {client}
        </h5>
        <p className="font-kanit text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] leading-[15px] text-[#001ED3] mt-[5px] font-medium">
          {role}
        </p>
      </div>
    );
  };

  return (
    <section className="container_fluid py-[clamp(5rem,10.345vw+2.608rem,12.5rem)]">
      <h6 className="font-kanit uppercase font-medium text-[clamp(0.75rem,0.172vw+0.71rem,0.875rem)] leading-[15px] text-secondary text-center">
        Testimonials
      </h6>
      <h4 className="text-primary font-kanit font-semibold text-[clamp(2rem,1.983vw+1.541rem,3.438rem)] leading-tight xl:leading-[64px] mt-1 xl:mt-2.5 text-center">
        Our Clients said
      </h4>

      <div
        className="col-center lg:flex-row lg:start space-x-0 lg:space-x-14 max-w-md lg:max-w-none mx-auto relative w-full"
        id="default-carousel"
        data-carousel="slide"
      >
        <Image
          src="/images/testimonial.png"
          width={346}
          height={440}
          alt="testimonial"
          className="hidden lg:block"
        />

        <div className="mt-10 lg:mt-0 col-center lg:block">
          <div className="h-[350px] lg:h-[400px]">
            <Carousel leftControl=" " rightControl=" " theme={customTheme}>
              <Testimonial
                testimony="Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique"
                client="Odesola Ibrahim"
                role="CEO Hybee Web Agency"
              />
              <Testimonial
                testimony="Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique"
                client="Odesola Ibrahim"
                role="CEO Hybee Web Agency"
              />
              <Testimonial
                testimony="Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique"
                client="Odesola Ibrahim"
                role="CEO Hybee Web Agency"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-dot-black/[0.2]">
      <HeroSection />
      <Infrastructures />
      <AboutUs />
      <OurWorks />
      <Location />
      <Testimonials />
    </main>
  );
}
