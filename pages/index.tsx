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
        "grid grid-cols-4 auto-rows-min gap-5",
        "md:text-md md:grid-cols-8 md:mt-8",
        "lg:grid-cols-12 lg:gap-y-16"
      )}
    >
      <h1 className={classNames("col-span-full normal-case", "", "lg:col-span-6")}>
        Saatenberg has been trading food products all over the world for 10 years.
      </h1>
      <h1 className={classNames("col-span-full normal-case", "", "lg:col-span-6")}>
        Saatenberg's main focus is on the grain, spice and animal feed trade. Also, dried vegetables and herbs, nuts and various oils are regularly present in our turnover. It's about the details - our philosophy.
      </h1>
      <div
        className={classNames(
          "col-span-full grid grid-cols-1 gap-5",
          "",
          "lg:col-span-12 lg:grid-cols-12"
        )}
      >
        <motion.div
          exit={{ x: -1000 }}
          className={classNames("bg-pink-800 text-white h-44", "md:h-60", "lg:col-span-6 lg:h-96")}
          transition={{ duration: 1, type: "spring" }}
        >
          <Link href="/products/conventional">
            <a>
              <img src="" alt="" />
              <h1
                className={
                  "h-full flex items-center justify-center font-bold"
                }
              >
                CONVENTIONAL
              </h1>
            </a>
          </Link>
        </motion.div>
        <motion.div
          exit={{ x: 1000 }}
          initial={{ z: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className={classNames("bg-yellow-700 text-white h-44", "md:h-60", "lg:col-span-6 lg:h-96")}
        >
          <Link href="/products/organic">
            <a>
              <img src="" alt="" />
              <h1
                className={
                  "h-full flex items-center justify-center font-bold"
                }
              >
                ORGANIC
              </h1>
            </a>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
