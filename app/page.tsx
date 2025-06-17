import AboutUs from "@/components/home/AboutUs";
import HeroSection from "@/components/home/HeroSection";
import Infrastructures from "@/components/home/Infrastructures";
import Location from "@/components/home/Location";
import OurWorks from "@/components/home/OurWorks";
import Testimonials from "@/components/home/Testimonials";

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
