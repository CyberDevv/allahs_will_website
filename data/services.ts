import {
  ApprenticeShip,
  BuildingCivil,
  FactoryHaulage,
  FillingStation,
  Labour,
  Leasing,
  Mechanical,
  OIlAndGasDeport,
  Outstation,
  PipeCoating,
  Pipeline,
  RoadConstruction,
  Warehouse,
  Welding,
} from "@/components/services/ModalContent";

export const services = [
  {
    title: "Oil & Gas Infrastructure",
    desc: "Expert construction and maintenance of tank farms, pipelines, and fuel depots—engineered for safety, durability, and regulatory compliance.",
    entries: [
      {
        title: "Depot/Tank Farm Construction & Commissioning",
        src: "/images/services/oilandgas.png",
        content: OIlAndGasDeport,
      },
      {
        title: "Pipeline Construction, Maintenance, Repairs & Commissioning",
        src: "/images/services/pipeline.png",
        content: Pipeline,
      },
      {
        title: "Pipe Coating & Corrosion Control",
        src: "/images/services/pipe.png",
        content: PipeCoating,
      },
      {
        title: "Filling Station Canopy Construction",
        src: "/images/services/filling_station_canopy.png",
        content: FillingStation,
      },
    ],
  },
  {
    title: "Industrial & Commercial Construction",
    desc: "Turnkey steel-framed warehouses, factories, and retail spaces built for scalability, efficiency, and long-term performance.",
    entries: [
      {
        title: "Warehouse/Factory Construction",
        src: "/images/services/warehouse.png",
        content: Warehouse,
      },
      {
        title: "Factory & Haulage Material Moulding",
        src: "/images/services/moulding.png",
        content: FactoryHaulage,
      },
      {
        title: "Building & Civil Engineering",
        src: "/images/services/building.png",
        content: BuildingCivil,
      },
      {
        title: "Outstation Constructional Services",
        src: "/images/services/outstation.png",
        content: Outstation,
      },
    ],
  },
  {
    title: "Specialized Technical Services",
    desc: "Precision welding, MEP systems, and corrosion control backed by certified technicians and cutting-edge technology.",
    entries: [
      {
        title: "Mechanical & Electrical Works",
        src: "/images/services/mechanical.png",
        content: Mechanical,
      },
      {
        title: "Welding & Fabrication",
        src: "/images/services/welding.png",
        content: Welding,
      },
      {
        title: "Road Construction & Drainage Systems",
        src: "/images/services/drainage.png",
        content: RoadConstruction,
      },
    ],
  },
  {
    title: "Support & Resource Solutions",
    desc: "Equipment leasing, skilled labor supply, and apprenticeship programs to keep your projects on time and on budget.",
    entries: [
      {
        title: "Equipment Leasing (Hiab & Crane Lifting)",
        src: "/images/services/crane.png",
        content: Leasing,
      },
      {
        title: "Labour Supply",
        src: "/images/services/labour.png",
        content: Labour,
      },
      {
        title: "Apprenticeship Training Programs",
        src: "/images/services/apprenticeship.png",
        content: ApprenticeShip,
      },
    ],
  },
];

export const serviceTitles = services.flatMap((category) =>
  category.entries.map((entry) => entry.title)
);

export const serviceCategories = services.flatMap((category) => ({
  title: category.title,
  desc: category.desc,
  link: `/services#${category.title.toLowerCase().replace(/\s+/g, "-")}`,
}));
