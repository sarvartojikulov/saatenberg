import type { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";
import { motion } from "framer-motion";
import Triangle from "../components/Triangle";

const services_data = [
  {
    id: 1,
    name: "Drying",
    image: "",
    info: " is a mass transfer process consisting of the removal of water or another solvent by evaporation from a solid, semi-solid or liquid. This process is often used as a final production step before selling or packaging products.",
  },
  {
    id: 2,
    name: "Cleaning",
    image: "",
    info: " is the process of removing unwanted substances, such as dirt, infectious agents, and other impurities, from an object or environment. Cleaning occurs in many different contexts, and uses many different methods.",
  },
  {
    id: 3,
    name: "Drying",
    image: "",
    info: "is a mass transfer process consisting of the removal of water or another solvent by evaporation from a solid, semi-solid or liquid. This process is often used as a final production step before selling or packaging products.",
  },
];

const variants = {
  hidden: {
    translateX: "-100%",
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
  },
};

const services: NextPage = () => {
  const data = useMemo(() => {
    return services_data;
  }, []);
  const [animate, setAnimate] = useState<boolean>(false);
  const [serviceIndex, setServiceIndex] = useState<number>(0);
  const [x_axsis, setX_axsis] = useState<string>("-100%");
  const [service, setService] = useState<{
    id: number;
    name: string;
    image: string;
    info: string;
  }>(data[0]);

  useEffect(() => {
    setService(data[serviceIndex]);
  }, [serviceIndex]);
  useEffect(() => {
    if (animate) {
      setTimeout(() => setAnimate(false), 1000);
    }
  }, [animate]);

  const { t } = useTranslation();
  return (
    <motion.div
      animate={
        !animate
          ? {
              translateX: 0,
              opacity: 1,
            }
          : {
              translateX: x_axsis,
              opacity: 0,
            }
      }
      transition={{ type: "tween" }}
      className={classNames(
        "w-full h-full grid grid-cols-4 auto-rows-min gap-x-4 gap-y-6 pt-10",
        "md:grid-cols-8 md:gap-y-12",
        "lg:grid-cols-12"
      )}
    >
      <div
        className={classNames(
          "col-span-full h-72 relative",
          "md:h-544",
          "lg:col-span-9"
        )}
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="w-full h-full bg-yellow-300"></div>
        <ul className="absolute top-0 flex h-full w-full justify-between items-center z-20">
          <li
            className="cursor-pointer"
            onClick={() => {
              setX_axsis("-100%");
              setAnimate(true);
              setServiceIndex(
                serviceIndex === 0 ? data.length - 1 : serviceIndex - 1
              );
            }}
          >
            <Triangle direction="left" color="white" />
          </li>
          <li>
            <h1 className="text-white text-md uppercase">{service.name}</h1>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setX_axsis("100%");
              setAnimate(true);
              setServiceIndex(
                serviceIndex === data.length - 1 ? 0 : serviceIndex + 1
              );
            }}
          >
            <Triangle direction="right" color="white" />
          </li>
        </ul>
      </div>
      <div className={classNames("col-span-full flex", "lg:col-span-3 ")}>
        <h1 className="text-sm md:text-lg leading-9 lg:text-md xl:text-lg">
          <span className="font-semibold italic">{service.name}</span>{" "}
          {service.info}
        </h1>
      </div>
    </motion.div>
  );
};

export default services;
