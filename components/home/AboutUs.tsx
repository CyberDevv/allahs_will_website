import Image from "next/image";
import React from "react";
import { FeaturesSectionDemo } from "../ui/ServicesPlate";
import { Button } from "../ui/button";
import Link from "next/link";
import { serviceCategories } from "@/data/services";

const AboutUs = () => {
  return (
    <section>
      <div className="container_fluid ~py-[5rem]/[12.5rem] xl:start xl:space-x-20 space-y-12 xl:space-y-0">
        <div className="w-full col-center xl:block max-w-md lg:max-w-lg mx-auto xl:max-w-none">
          <h6 className="font-kanit uppercase font-medium ~text-[0.75rem]/[0.875rem] leading-[15px] text-secondary">
            About us
          </h6>
          <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] ~mt-1/2.5 text-center xl:text-start">
            With our knowledge we Guarantee Success
          </h4>
          <p className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px] ~mt-[1.25rem]/[1.875rem] text-center xl:text-start">
            Allah&apos;s Will Steel Construction (Nig.) Ltd. is a premier
            construction company with over 25 years of excellence in delivering
            innovative and high-quality projects across Nigeria, including
            Abuja, Lagos, Benin, Oyo, and Kano. Specializing in oil and gas,
            industrial, mission-critical, and retail construction, we combine
            expertise, safety, and sustainability to meet your needs. Our
            commitment to cutting-edge techniques, community care, and
            unwavering quality ensures success in every project we undertake.
            Trust us to build your vision with precision and reliability.
          </p>
          <Link href="/about">
            <Button
              variant="secondary"
              className="py-5 px-16 h-auto ~mt-[1.875rem]/[3.125rem]"
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
          </Link>
        </div>

        <Image
          className="w-full rounded-2xl max-h-[500px] lg:max-h-[500px] object-cover max-w-md lg:max-w-lg mx-auto xl:max-w-none"
          src="/images/about.png"
          width={500}
          height={600}
          alt="about our company"
        />
      </div>

      <div className="~my-[2.5rem]/[6.25rem] grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 container_fluid md:max-w-5xl mx-auto xl:!max-w-[1980px] xl:!px-0 rounded-2xl lg:rounded-none overflow-hidden max-w-md ">
        <Image
          src="/images/services.png"
          width={850}
          height={600}
          alt="services"
          className="hidden lg:inline lg:max-h-[250px] xl:max-h-[500px] col-span-2 xl:col-span-1 w-full h-full object-cover object-center"
        />
        {serviceCategories.map((service, idx) => (
          <FeaturesSectionDemo
            key={idx}
            label={service?.title}
            desc={service?.desc}
            image="service1"
            isOdd={idx % 2 === 0}
            link={service?.link}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
