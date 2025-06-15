import Image from 'next/image';
import React from 'react'
import { FeaturesSectionDemo } from '../ui/ServicesPlate';
import { Button } from '../ui/button';

const AboutUs = () => {
    return (
      <section>
        <div className="container_fluid ~py-[5rem]/[12.5rem] xl:start xl:space-x-20 space-y-12 xl:space-y-0">
          <div className="w-full col-center xl:block max-w-md lg:max-w-lg mx-auto xl:max-w-none">
            <h6 className="font-kanit uppercase font-medium ~text-[0.75rem]/[0.875rem] leading-[15px] text-secondary">
              About us
            </h6>
            <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] ~mt-1/2.5 text-center xl:text-start">
              With our knowledge we guarente success
            </h4>
            <p className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px] ~mt-[1.25rem]/[1.875rem] text-center xl:text-start">
              Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
              rutrum leo consectetur accumsan. Vivamus viverra ante turpis,
              dignissim condimentum elit egestas sit amet. Phasellus faucibus
              pellentesque
            </p>
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
          </div>

          <Image
            className="w-full rounded-2xl max-h-[400px] object-cover"
            src="/images/about.png"
            width={500}
            height={600}
            alt="about our company"
          />
        </div>

        <div className="~my-[2.5rem]/[6.25rem] grid lg:grid-cols-4 xl:grid-cols-5 container_fluid lg:max-w-5xl mx-auto xl:!max-w-[1980px] xl:!px-0 rounded-2xl lg:rounded-none overflow-hidden max-w-md md:max-w-lg">
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

export default AboutUs