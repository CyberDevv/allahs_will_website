import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import Link from "next/link";

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
    <section className="bg-hero_image bg-cover bg-no-repeat">
      <div className="bg-black h-[calc(70vh-91.75px)] xl:h-[calc(100vh-120px)] xl:max-h-[890px] bg-opacity-40 col-start">
        <div className="container_fluid">
          <div className="xl:w-[65%] col-center xl:block">
            <h2 className="xl:leading-[84px] leading-tight text-[clamp(3rem,3.005vw+2.296rem,5rem)] text-white text-center xl:text-left">
              <span className="font-semibold font-kanit">
                Construction solution
              </span>{" "}
              for everyone
            </h2>
            <p className="xl:w-[90%] text-[clamp(0.938rem,0.188vw+0.894rem,1.063rem)] leading-[28px] text-[#EBECEE] mt-[clamp(2rem,0.751vw+1.824rem,2.5rem)] mb-[clamp(2.6rem,0.789vw+2.415rem,3.125rem)] text-center xl:text-left">
              In id enim odio. Nunc aliquet diam tortor, at venenatis urna
              sagittis non. Suspendisse sodales nulla sit amet sem condimentum,
              ac euismod nibh elementum. Praesent eu urna at sem sodales
              venenatis. Mauris efficitur dapibus enim in posuere
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
    </section>
  );
}

function Infrastructures() {
  return (
    <section className="xl:flex justify-center items-start">
      <div className="grid grid-cols-2 xl:start">
        <div className="bg-primary text-primary-foreground px-10 py-[clamp(2.5rem,1.878vw+2.06rem,3.75rem)] space-y-[clamp(0rem,0.939vw+-0.22rem,0.625rem)] w-full xl:w-fit col-center xl:col-start">
          <p className="font-kanit font-bold text-[clamp(4.375rem,2.817vw+3.715rem,6.25rem)] xl:leading-[84px]">
            245
          </p>
          <p className="font-kanit text-[clamp(1.063rem,0.469vw+0.953rem,1.375rem)] leading-[clamp(1.063rem,0.469vw+0.953rem,1.375rem)] text-[#EBECEE]">
            Completed Projects
          </p>
        </div>
        <div className="bg-secondary text-secondary-foreground px-10 py-[clamp(2.5rem,1.878vw+2.06rem,3.75rem)] space-y-[clamp(0rem,0.939vw+-0.22rem,0.625rem)] w-full xl:w-fit col-center xl:col-start">
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
        <div className="px-[clamp(2.5rem,1.878vw+2.06rem,3.75rem)] py-20 xl:py-[30px] max-w-lg">
          <h6 className="text-primary font-kanit font-medium text-[clamp(1.625rem,0.751vw+1.449rem,2.125rem)] leading-[38px] text-center xl:text-left">
            We Construct and Manage Places and Infrastructures
          </h6>
          <div className="mt-10 space-y-8 xl:space-y-5">
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
  const Service = ({
    label,
    desc,
    isOdd,
  }: {
    label: string;
    desc: string;
    isOdd?: boolean;
  }) => {
    return (
      <div className="bg-[url('/images/service1.png')] bg-cover col-span-2 xl:col-span-1">
        <div
          className={` ${
            isOdd ? "bg-secondary/80" : "bg-primary/80"
          } h-full w-full px-[clamp(1.875rem,0.939vw+1.655rem,2.5rem)] py-[clamp(2.5rem,0.939vw+2.28rem,3.125rem)] text-primary-foreground flex flex-col`}
        >
          <h3 className="font-kanit font-semibold text-[clamp(1.5rem,0.563vw+1.368rem,1.875rem)] ">
            {label}
          </h3>
          <p className="font-lato font-medium leading-[28px] text-sm text-[#D4D7DD] mt-[clamp(1.5rem,0.563vw+1.368rem,1.875rem)]">
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
  };

  return (
    <section>
      <div className="container_fluid py-[clamp(6.25rem,9.39vw+4.049rem,12.5rem)] xl:start xl:space-x-20 space-y-12 xl:space-y-0">
        <div className="w-full col-center xl:block">
          <h6 className="font-kanit uppercase font-medium text-sm leading-[15px] text-secondary">
            About us
          </h6>
          <h4 className="text-primary font-kanit font-semibold text-[clamp(2.25rem,1.785vw+1.832rem,3.438rem)] leading-tight xl:leading-[64px] mt-1 xl:mt-2.5 text-center xl:text-start">
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
          className="w-full rounded-2xl"
          src="/images/about.png"
          width={500}
          height={600}
          alt="about our company"
        />
      </div>
      <div className="my-[100px] grid xl:grid-cols-5 container_fluid xl:!max-w-none xl:!px-0 rounded-2xl xl:rounded-none overflow-hidden">
        <Image
          src="/images/services.png"
          width={850}
          height={600}
          alt="services"
          className="col-span-2"
        />
        <Service
          label="Research & Analysis"
          desc="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
        />
        <Service
          label="Research & Analysis"
          desc="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
          isOdd
        />
        <Service
          label="Research & Analysis"
          desc="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
        />
      </div>
    </section>
  );
}

function OurWorks() {
  const PhotoComp = ({
    src,
    desc,
    title,
  }: {
    src: string;
    desc: string;
    title: string;
  }) => (
    <div className="relative overflow-hidden imageHover">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
      <div className="absolute bg-black/70 top-0 bottom-0 w-full text-white text-center opacity-1 translate-y-[100%] imagedesc transition-all col-center">
        <h4 className="font-medium text-lg tracking-wide leading-[26px]">
          {title}
        </h4>
        <p className="mt-1 text-gray-300 text-sm">{desc}</p>
        <Button variant={"secondary"} className="mt-4 text-white">
          Check it out
        </Button>
      </div>
    </div>
  );

  return (
    <section className="container_fluid py-[clamp(6.25rem,9.39vw+4.049rem,12.5rem)]">
      <h6 className="font-kanit uppercase font-medium text-sm leading-[15px] text-secondary text-center">
        Our Works
      </h6>
      <h4 className="text-primary font-kanit font-semibold text-[clamp(2.25rem,1.785vw+1.832rem,3.438rem)] leading-tight xl:leading-[64px] mt-1 xl:mt-2.5 text-center">
        Our Special Projects
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        <div className="grid gap-4">
          <PhotoComp
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            desc="photo.description"
            title="Flat Body"
          />
          <PhotoComp
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg
          "
            desc="photo.description"
            title="Flat Body"
          />
        </div>
        <div className="grid gap-4">
          <PhotoComp
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg
              "
            desc="photo.description"
            title="Flat Body"
          />
          <PhotoComp
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg
              "
            desc="photo.description"
            title="Full Body"
          />
        </div>
        <div className="grid gap-4">
          <PhotoComp
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg
          "
            desc="photo.description"
            title="Flat Body"
          />
          <PhotoComp
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg
          "
            desc="photo.description"
            title="Flat Body"
          />
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="py-[clamp(2.5rem,1.878vw+2.06rem,3.75rem)] max-w-[1900px]">
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

      <div className="relative mt-20 xl:mt-32 container_fluid w-full lg:between">
        <div className=" bg-white text-primary w-full xl:max-w-[500px] xl:shadow-2xl xl:-mt-48">
          <div className="bg-secondary h-[clamp(0.313rem,0.206vw+0.265rem,0.45rem)]" />
          <div className="px-4 md:px-[clamp(2.5rem,1.878vw+2.06rem,3.75rem)] py-10 lg:py-20 xl:py-[30px] w-full xl:min-w-[500px]">
            <h6 className="font-kanit uppercase font-light text-sm leading-[15px] text-[#41444B] text-center xl:text-left">
              Company Address
            </h6>
            <p className="font-medium font-kanit text-[clamp(1.25rem,0.69vw+1.091rem,1.75rem)] leading-[32px] text-center xl:text-left mt-[10px]">
              P. O Box 8093, Klm 127 - 500, Ibadan - Lagos Expressway, Ogunpa
              Channelization, Adjacent Soka Bus Stop, Mapo Hill, Ibadan
            </p>
          </div>
        </div>
        <div className="text-primary w-full xl:-mt-48 px-4 md:px-[clamp(2.5rem,1.878vw+2.06rem,3.75rem)] md:py-10 xl:py-[30px] center lg:start space-x-5">
          <Image src="/svg/phone.svg" width={65} height={65} alt="phone" />
          <div>
            <h6 className="font-kanit uppercase font-light text-sm leading-[15px] text-[#41444B]">
              Company Phones
            </h6>
            <p className="font-medium font-kanit text-[clamp(1rem,0.345vw+0.92rem,1.25rem)] leading-[32px] text-center xl:text-left mt-[10px]">
              +234 8034552211
            </p>
            <p className="font-medium font-kanit text-[clamp(1rem,0.345vw+0.92rem,1.25rem)] leading-[32px] text-center xl:text-left mt-[5px]">
              +234 8034552211
            </p>
          </div>
        </div>
        <div className="text-primary w-full xl:-mt-48 px-4 md:px-[clamp(2.5rem,1.878vw+2.06rem,3.75rem)] md:py-10 xl:py-[30px] center lg:start space-x-5 mt-10">
          <Image src="/svg/email.svg" width={65} height={65} alt="phone" />
          <div>
            <h6 className="font-kanit uppercase font-light text-sm leading-[15px] text-[#41444B]">
              Email
            </h6>
            <p className="font-medium font-kanit text-[clamp(1rem,0.345vw+0.92rem,1.25rem)] leading-[32px] text-center xl:text-left mt-[10px]">
              awsc@gmail.com
            </p>
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
    <section className="container_fluid py-[clamp(6.25rem,9.39vw+4.049rem,12.5rem)]">
      <h6 className="font-kanit uppercase font-medium text-sm leading-[15px] text-secondary text-center">
        Testimonials
      </h6>
      <h4 className="text-primary font-kanit font-semibold text-[clamp(2.25rem,1.785vw+1.832rem,3.438rem)] leading-tight xl:leading-[64px] mt-1 xl:mt-2.5 text-center">
        Our Clients said
      </h4>

      <div
        className="col-center lg:flex-row lg:start space-x-0 lg:space-x-14 relative w-full"
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
    <main>
      <HeroSection />
      <Infrastructures />
      <AboutUs />
      <OurWorks />
      <Location />
      <Testimonials />
    </main>
  );
}
