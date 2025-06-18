import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="container_fluid ~py-[3rem]/[5rem]">
      <div className=" lg:start-start lg:~lg:~space-x-10/20 space-y-12 lg:space-y-0 max-w-screen-sm lg:max-w-none mx-auto">
        <Image
          className="lg:w-2/5 rounded-2xl max-h-[500px] lg:max-h-[500px] object-cover mx-auto"
          src="/images/hero_hse-policy.png"
          width={500}
          height={600}
          alt="about our company"
        />
        <p className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px] lg:w-3/5 text-center lg:text-start">
          At AWSC, we are committed to safety above all else, and this
          commitment is central to everything we do. Our proactive approach
          creates value for our clients and safeguards our most important asset:
          our employees, Our entire team is dedicated to maintaining a
          safety-focused and environmentally sound business; our safety culture
          is promoted by each member of our team through planning, implementing
          and evaluating safety practices on a daily basis. <br />
          <br />
          Our safety program is proactive and action-oriented; everyone from
          management to trades people are involved in making a zero-incident
          workplace a reality, we use daily pre-task planning sessions, ongoing
          safety inspections, weekly safety meeting, safety seminars, special
          equipment training, safety manual reviews and e-mail updates to assist
          in attaining our goal of zero accidents.
          <br />
          <br />
          Our supervisors receive training in the Construction Our Reach
          Program, as well as classes in fall protection, Excavation and
          Trenching, first aid, CPR and Confined Space entry procedures,
          substance abuse awareness and Recognition. New employees are required
          to complete our New Hire Safety Orientation Program.
          <br />
          <br />
          Our substance abuse program includes Pre-hire, Post accident, Fitness
          for Duty, for cause and Random Drug and Alcohol testing. All
          employees, including management, are subject to random testing equal
          to 25% of our annual work force.
          <br />
          <br />
          Our safety culture at AWSC focuses on keeping motivational messages
          and emotions at the forefront of everything we do- every day. Family-
          oriented messages remind us to keep safety at the top of our minds
          with poster and banners placed throughout our projects. Bringing our
          families to the job sites with these visual reminders positively
          impacts how we approach and value safety.
          <br />
          <br />
          “At AWSC, the safety of every individual that enters into our work
          site is a top priority. We believe that no one deserves to be injured,
          safety deals with how effectively we can prevent Accidents & Injuries
          and the impact they have on the individual, their families, friends,
          and co-workers. We are committed to providing a safe worker site to
          ensure and protect everyone&apos;s health and well-being. Our goal is
          for everyone to return home to their families at the end of the day
          accident and injury free”
        </p>
      </div>
    </section>
  );
};

export default Page;
