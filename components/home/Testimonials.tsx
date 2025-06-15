import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
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

const Testimonials = () => {
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
        <p className="text-center lg:text-left mt-[30px] mb-5 font-lato ~text-[0.938rem]/[1.063rem] leading-[28px] text-[#41444B] max-w-[646px]">
          {testimony}
        </p>

        <h5 className="font-kanit font-medium ~text-[1.063rem]/[1.375rem] ~leading-[1.063rem]/[1.375rem] text-[#16213E]">
          {client}
        </h5>
        <p className="font-kanit ~text-[0.75rem]/[0.875rem] leading-[15px] text-[#001ED3] mt-[5px] font-medium">
          {role}
        </p>
      </div>
    );
  };

  return (
    <section className="container_fluid ~py-[5rem]/[12.5rem]">
      <h6 className="font-kanit uppercase font-medium ~text-[0.75rem]/[0.875rem] leading-[15px] text-secondary text-center">
        Testimonials
      </h6>
      <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] ~mt-1/2.5 text-center">
        Our Clients said
      </h4>

      <div
        className="max-w-md lg:max-w-none relative w-full ~mt-5/10"
        id="default-carousel"
        data-carousel="slide"
      >
        <div className="mx-auto col-center lg:flex-row space-x-0 lg:space-x-14">
          <Image
            src="/images/testimonial.png"
            width={346}
            height={440}
            alt="testimonial"
            className="hidden lg:block"
          />

          <div className="mt-10 lg:mt-0 col-center lg:block max-w-[646px]">
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
      </div>
    </section>
  );
};

export default Testimonials;
