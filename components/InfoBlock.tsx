import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface InfoBlockProps {
  open: boolean;
  handleInfoBlock: () => void;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  open,
  handleInfoBlock,
  children,
}) => {
  return (
    <div
      className={classNames(
        "absolute w-full h-full col-span-4",
        "",
        "lg:static lg:col-start-6 lg:col-span-7",
        { "-z-10": !open },
        { "z-300": open }
      )}
    >
      <motion.div
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        variants={{
          hidden: {
            translateX: "100%",
            opacity: 0,
          },
          visible: {
            translateX: 0,
            opacity: 1,
          },
        }}
        transition={{ type: "tween" }}
        className={classNames(
          "absolute -top-12 -left-6 w-screen h-screen bg-products-IB",
          "md:-left-12 md:-top-14 ",
          "lg:w-full lg:left-auto"
        )}
      ></motion.div>
      <motion.div
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        variants={{
          hidden: {
            translateX: "100%",
            opacity: 0,
          },
          visible: {
            translateX: 0,
            opacity: 1,
          },
        }}
        transition={{ type: "tween" }}
        className={classNames(
          "relative h-full grid grid-cols-4 auto-rows-min gap-x-4 pt-10 pb-8",
          "md:grid-cols-6",
          "lg:grid-cols-7 lg:gap-x-5"
        )}
      >
        <div className="absolute right-0 -top-4">
          <h1
            className="text-md font-bold cursor-pointer"
            onClick={() => handleInfoBlock()}
          >
            X
          </h1>
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export default InfoBlock;
