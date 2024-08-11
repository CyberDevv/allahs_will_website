import { Button } from "@/components/ui/button";
import Image from "next/image";

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
          <h3 className="font-kanit font-semibold text-[clamp(1.5rem,0.563vw+1.368rem,1.875rem)] ">{label}</h3>
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
          <Button variant="secondary" className="py-5 px-16 h-auto mt-[clamp(1.875rem,1.878vw+1.435rem,3.125rem)]">
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

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Infrastructures />
      <AboutUs />
    </main>
  );
}
