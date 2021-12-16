import React, { useEffect } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { deleteQuery } from "../utils/query";
import { useRouter } from "next/dist/client/router";
import { useScrollBlock } from "../utils/scrollBlock";
import useDeviceDetect from "../utils/useDetectDevice";

const variants = {
  hidden: {
    translateX: "100%",
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
  },
};

interface InfoBlockProps {
  open: boolean;
  handleInfoBlock: () => void;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  open,
  handleInfoBlock,
  children,
}) => {
  const router = useRouter();
  const { desktop } = useDeviceDetect();
  const [blockScroll, allowScroll] = useScrollBlock();
  useEffect(() => {
    window.scrollTo({ top: -100 });
    open && desktop ? blockScroll() : allowScroll();
  }, [open]);
  return (
    <div
      className={classNames(
        "absolute w-full h-full col-span-4",
        "",
        "lg:static lg:col-start-6 lg:col-span-7",
        { "z-100": open }
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
          "absolute -top-14 -left-6 w-screen h-screen bg-productsIB",
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
          "relative h-full grid grid-cols-4  auto-rows-min gap-x-4 pt-10 pb-8",
          "md:grid-cols-8 md:gap-y-11",
          "lg:grid-cols-7 lg:gap-x-5 lg:gap-y-0 lg:pt-0"
        )}
      >
        <div className="absolute right-0 -top-10">
          <h1
            className="text-md font-bold cursor-pointer"
            onClick={() => {
              handleInfoBlock();
              deleteQuery(router, "itemID");
            }}
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
