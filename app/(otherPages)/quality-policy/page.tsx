import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="container_fluid ~py-[3rem]/[5rem]">
      <div className=" lg:start-start lg:~lg:~space-x-10/20 space-y-12 lg:space-y-0 max-w-screen-sm lg:max-w-none mx-auto">
        <Image
          className="lg:w-2/5 rounded-2xl max-h-[500px] lg:max-h-[500px] object-cover mx-auto"
          src="/images/hero_quality-policy.png"
          width={500}
          height={600}
          alt="about our company"
        />
        <p className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px] lg:w-3/5 text-center lg:text-start">
          We, at AWSC are committed to always provide Competitive, Safe and
          Innovative Technical solutions consistent with customer needs,
          contract specifications, and Statutory & Regulatory requirements as
          applicable. The policy of AWSC is to produce quality product/services
          that satisfy requirements. Management is committed to work with and
          provide each employee with the resources and training necessary to
          continually improve the effectiveness of the Quality system. <br />
          <br />
          This policy has been formulated by the managing Director of AWSC. The
          policy is explained and discussed at the general orientation training
          given to all existing new employees. The policy is also pasted in
          conspicuous locations throughout the company.
          <br />
          <br />
          AWSC is poised to effectively manage and execute all projects that are
          contracted to the company. AWSC has the capacity to execute several
          projects for major Oil & Gas companies in Nigeria.
        </p>
      </div>
    </section>
  );
};

export default Page;
