import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="container_fluid ~py-[5rem]/[12.5rem]" id="testimonials">
      <h6 className="font-kanit uppercase font-medium ~text-[0.75rem]/[0.875rem] leading-[15px] text-secondary text-center">
        Testimonials
      </h6>
      <h4 className="text-primary font-kanit font-semibold ~text-[2rem]/[3.438rem] leading-tight xl:leading-[64px] ~mt-1/2.5 text-center">
        Our Clients said
      </h4>

      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
