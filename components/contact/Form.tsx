"use client";

import Location from "@/components/home/Location";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { serviceTitles } from "@/data/services";

const availableServices = [...serviceTitles, "Other"];

type InputLabelProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
  isTextArea?: boolean;
  type?: React.HTMLInputTypeAttribute;
};

const InputLabel: React.FC<InputLabelProps> = ({
  label,
  value,
  setValue,
  className,
  isTextArea,
  type = "text",
}) => {
  return (
    <div className={`grid w-full items-center gap-3 ${className}`}>
      <Label
        className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px] font-medium"
        htmlFor={label}
      >
        {label}
      </Label>
      {!isTextArea ? (
        <Input
          type={type}
          id={label}
          placeholder={label}
          className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <Textarea
          placeholder={label}
          rows={5}
          className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [service, setService] = React.useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const found = availableServices.find((s) =>
        s.toLowerCase().includes(serviceParam.toLowerCase())
      );
      setService(found || "Other");
    }
  }, [searchParams]);

  return (
    <div>
      <section className="container_fluid ~py-[3rem]/[5rem]">
        <form className="grid gap-10 lg:grid-cols-2 max-w-screen-sm mx-auto">
          <InputLabel label="Name" value={name} setValue={setName} />
          <InputLabel
            label="Email"
            value={email}
            setValue={setEmail}
            type="email"
          />
          <InputLabel
            label="Phone Number"
            value={phone}
            setValue={setPhone}
            type="tel"
          />
          <InputLabel label="Address" value={address} setValue={setAddress} />

          {/* Service Dropdown */}
          <div className="grid w-full items-center gap-3 lg:col-span-2">
            <Label
              className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px] font-medium"
              htmlFor="Service"
            >
              Service
            </Label>
            <select
              id="Service"
              className="font-lato text-[#41444B] ~text-[0.938rem]/[1.063rem] leading-normal xl:leading-[28px] border border-gray-300 rounded px-3 py-2"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select a service</option>
              {availableServices.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
          </div>

          <InputLabel
            label="Message"
            value={message}
            setValue={setMessage}
            className="lg:col-span-2 w-full"
            isTextArea
          />
          <Button
            variant="secondary"
            className="py-5 px-16 h-auto ~mt-2/4 lg:!w-2/3"
          >
            Submit Message
            <Image
              src="/svg/arrow-right.svg"
              className="ml-[5px]"
              width={13}
              height={14}
              alt="arrow-right"
            />
          </Button>
        </form>
      </section>
      <Location />
    </div>
  );
};

export default Contact;
