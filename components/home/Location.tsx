import Image from 'next/image';
import React from 'react'

const Location = () => {
    return (
      <section className="py-[clamp(2rem,2.414vw+1.442rem,3.75rem)] mx-auto max-w-[1980px]">
        <div className="relative">
          <iframe
            title="Company address on google map"
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

export default Location