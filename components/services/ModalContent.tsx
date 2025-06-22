import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const ApprenticeShip = () => {
  return (
    <ModalContent
      desc="Allah's Will Steel Construction (AWSC) offers a 2-5 year accredited apprenticeship program for young school leavers, blending hands-on training in steel engineering with essential business skills."
      serviceType="Apprenticeship"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Comprehensive Curriculum:</strong>
            <ul className="list-[circle] pl-5">
              <li>Steel structural design & fabrication</li>
              <li>Electrical/mechanical engineering basics</li>
              <li>Financial management for technicians</li>
            </ul>
          </li>
          <li>
            <strong>Industry-Recognized Certification:</strong>
            <ul className="list-[circle] pl-5">
              <li>
                Accredited by Nigeria&apos;s Industrial Training Fund (ITF)
              </li>
              <li>Meets Standard Organization of Nigeria (SON) guidelines</li>
            </ul>
          </li>
          <li>
            <strong>Career Pathways:</strong>
            <ul className="list-[circle] pl-5">
              <li>Graduates become certified Steel Structural Technicians</li>
              <li>Opportunities for full-time employment with AWSC</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const OIlAndGasDeport = () => {
  return (
    <ModalContent
      desc="Design, construction, and commissioning of secure, compliant fuel storage depots and tank farms for industrial and commercial use."
      serviceType="Depot/Tank"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Customized tank designs</li>
              <li>Fire safety systems & leak detection</li>
              <li>Turnkey project delivery</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const Pipeline = () => {
  return (
    <ModalContent
      desc="End-to-end pipeline services: installation, integrity checks, repairs, and corrosion control for oil, gas, and water pipelines."
      serviceType="Pipeline"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>API/ASME-compliant welding</li>
              <li>Smart pigging for inspections</li>
              <li>Emergency repair teams</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const Warehouse = () => {
  return (
    <ModalContent
      desc="Steel-framed warehouses and factories built for durability, scalability, and operational efficiency."
      serviceType="Warehouse"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Clear-span designs for max space</li>
              <li>Energy-efficient insulation</li>
              <li>Fast-track construction</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const FillingStation = () => {
  return (
    <ModalContent
      desc="Sleek, durable canopies for filling stations, designed to withstand harsh weather and meet safety standards."
      serviceType="Filling"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Custom branding integration</li>
              <li>Lightning protection</li>
              <li>LED lighting options</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const RoadConstruction = () => {
  return (
    <ModalContent
      desc="Asphalt and concrete road construction with engineered drainage systems to prevent flooding and erosion."
      serviceType="Road"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Heavy-duty pavement layers</li>
              <li>Sustainable drainage (SUDS)</li>
              <li>Community impact assessments</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const PipeCoating = () => {
  return (
    <ModalContent
      desc="Protect your pipelines with advanced coating technologies and corrosion control systems to extend asset life and ensure operational safety."
      serviceType="Pipe"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Epoxy & Polyethylene coatings for harsh environments.</li>
              <li>
                Cathodic protection systems for underground/underwater pipes.
              </li>
              <li>Compliance with ISO 21809 and NACE standards.</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const FactoryHaulage = () => {
  return (
    <ModalContent
      desc="Precision moulding of factory and haulage components using durable materials tailored to your operational needs."
      serviceType="Haulage"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Steel, fiberglass, and composite moulds.</li>
              <li>Load-optimized designs for heavy-duty haulage.</li>
              <li>Rapid prototyping for bespoke parts.</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const BuildingCivil = () => {
  return (
    <ModalContent
      desc="From residential complexes to highways, we deliver robust, sustainable civil engineering solutions."
      serviceType="Building"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Reinforced concrete & steel structures.</li>
              <li>Flood-resistant drainage systems.</li>
              <li>Project management from design to handover.</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const Outstation = () => {
  return (
    <ModalContent
      desc="Turnkey construction services for remote locations, including camps, border posts, and offshore facilities."
      serviceType="Outstation"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Modular designs for rapid deployment.</li>
              <li>Logistics management for hard-to-reach sites.</li>
              <li>Self-sufficient utilities (solar, water treatment).</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const Mechanical = () => {
  return (
    <ModalContent
      desc="Integrated mechanical, electrical, and plumbing (MEP) installations for industrial and commercial facilities."
      serviceType="Mechanical"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>HVAC, wiring, and piping systems.</li>
              <li>Energy-efficient solutions.</li>
              <li>24/7 maintenance support.</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const Welding = () => {
  return (
    <ModalContent
      desc="High-integrity welding and fabrication for structural steel, pipelines, and custom industrial components."
      serviceType="Welding"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>ASME & AWS-certified welders.</li>
              <li>CNC cutting and bending.</li>
              <li>Quality X-ray testing.</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const Leasing = () => {
  return (
    <ModalContent
      desc="Short or long-term leasing of cranes, Hiabs, and lifting gear with certified operators."
      serviceType="Leasing"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>50T to 500T crane capacity.</li>
              <li>Daily/weekly rates.</li>
              <li>On-site safety training.</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

export const Labour = () => {
  return (
    <ModalContent
      desc="Vetted, trained labor for construction projects, from welders to site supervisors."
      serviceType="Labour"
      features={
        <ul className="list-disc pl-5 space-y-2 ~mt-3/5">
          <li>
            <strong>Key Features:</strong>
            <ul className="list-[circle] pl-5">
              <li>Pre-screened candidates with ITF certification.</li>
              <li>Flexible contracts (project-based or long-term).</li>
              <li>Safety-first training.</li>
            </ul>
          </li>
        </ul>
      }
    />
  );
};

const ModalContent = ({
  desc,
  features,
  serviceType,
}: {
  desc: string;
  features: React.ReactNode;
  serviceType?: string;
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 ~p-8/14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 ~text-base/2xl font-lato">
        {desc}
      </p>
      <ul className="text-neutral-600 dark:text-neutral-400 ~text-base/2xl font-lato">
        {features}
      </ul>
      {serviceType && (
        <Link href={`/contact?service=${serviceType}`}>
            <Button variant="secondary" className="py-3 px-8 h-auto mt-10">
              Get a Quote
            </Button>
        </Link>
      )}
    </div>
  );
};

export default ModalContent;
