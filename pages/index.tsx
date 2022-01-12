import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        className={classNames(
          "grid grid-cols-4 auto-rows-min gap-5 pt-16 h-full font-light",
          "md:grid-cols-8 md:gap-y-6",
          "lg:grid-cols-12 lg:gap-y-8 lg:pt-16",
          "xl:pt-12 xl:gap-y-14",
          "2xl:pt-28 2xl:gap-y-16"
        )}
      >
        <div
          className={classNames(
            "col-span-full grid auto-cols-auto gap-y-4",
            "md:gap-y-12",
            "lg:col-span-10 lg:gap-y-5 lg:min-h-[232px]",
            "2xl:gap-y-14"
          )}
        >
          <h1
            className={classNames(
              "col-span-full normal-case w-full text-md leading-7 font-light",
              "md:leading-8",
              "lg:text-sm",
              "2xl:text-lg"
            )}
          >
            {t("home:header1")}
          </h1>
          <h1
            className={classNames(
              "col-span-full normal-case w-full text-md leading-7  font-light",
              "md:-mt-6 md:leading-8",
              "lg:m-0 lg:text-sm",
              "2xl:text-lg"
            )}
          >
            {t("home:header2")}
          </h1>
          <h1
            className={classNames(
              "col-span-full normal-case w-full text-md leading-7 ",
              "md:-mt-6 md:leading-8",
              "lg:m-0 lg:text-sm",
              "2xl:text-lg"
            )}
          >
            {t("home:header3")}
          </h1>
        </div>
        <motion.div
          exit={{ x: -1000 }}
          className={classNames(
            "bg-pink-800 text-white h-44 col-span-full",
            "md:h-80 md:col-span-full",
            "lg:col-span-6 lg:h-72",
            "xl:h-80",
            "2xl:h-96"
          )}
          transition={{ duration: 1, type: "spring" }}
        >
          <Link href="/products/organic?productID=1">
            <a>
              <img src="" alt="" />
              <h1
                className={"h-full flex items-center justify-center font-bold"}
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
          className={classNames(
            "bg-yellow-700 text-white h-44 col-span-full",
            "md:h-80 md:mb-4 md:col-span-full",
            "lg:col-span-6 lg:h-72 lg:m-0",
            "xl:h-80",
            "2xl:h-96"
          )}
        >
          <Link href="/products/organic?productID=1">
            <a>
              <img src="" alt="" />
              <h1
                className={"h-full flex items-center justify-center font-bold"}
              >
                ORGANIC
              </h1>
            </a>
          </Link>
        </motion.div>
        <div className="col-span-full justify-self-center xl:-mt-10">
          <h1>{t("home:hitPoint")}</h1>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
