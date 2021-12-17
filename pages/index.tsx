import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className={classNames(
        "grid grid-cols-4 auto-rows-min gap-5 pt-16 h-full",
        "md:text-md md:grid-cols-8 md:gap-y-6",
        "lg:grid-cols-12 lg:gap-y-8"
      )}
    >
      <div className="col-span-full normal-case flex flex-col lg:flex-row justify-between md:mb-16 lg:mb-12">
        <h1 className="normal-case w-full lg:w-1/2 text-md xl:text-lg leading-7 md:leading-8">
          Saatenberg has been trading food products all over the world for 10
          years.
        </h1>
        <h1 className="normal-case w-full lg:w-1/2 text-md xl:text-lg leading-7 md:leading-8">
          Saatenberg's main focus is on the grain, spice and animal feed trade.
          Also, dried vegetables and herbs, nuts and various oils are regularly
          present in our turnover. It's about the details - our philosophy.
        </h1>
      </div>
      <motion.div
        exit={{ x: -1000 }}
        className={classNames(
          "bg-pink-800 text-white h-44 col-span-full",
          "md:h-80",
          "lg:col-span-6 lg:h-96 col-span-6"
        )}
        transition={{ duration: 1, type: "spring" }}
      >
        <Link href="/products/organic?productID=1">
          <a>
            <img src="" alt="" />
            <h1 className={"h-full flex items-center justify-center font-bold"}>
              CONVENTIONAL
            </h1>
          </a>
        </Link>
      </motion.div>
      <motion.div
        exit={{ x: 1000 }}
        initial={{ z: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className={classNames(
          "bg-yellow-700 text-white h-44 col-span-full",
          "md:h-80 md:mb-4",
          "lg:col-span-6 lg:h-96 col-span-6 lg:m-0"
        )}
      >
        <Link href="/products/organic?productID=1">
          <a>
            <img src="" alt="" />
            <h1 className={"h-full flex items-center justify-center font-bold"}>
              ORGANIC
            </h1>
          </a>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
