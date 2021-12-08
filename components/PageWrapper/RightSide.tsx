import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

const variants = {
  hidden: {
    opacity: 0,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

// exit={{ y: 100, opacity: 0 }}
// animate={animate ? "hidden" : "visible"}
// initial={{ opacity: 0, y: 0 }}
// variants={variants}
// transition={{ type: "spring" }}

const RightSide: React.FC = ({ children }) => {
  const [animate, setAnimate] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  }, [router.query.productID]);
  return (
    <motion.div
      className={classNames(
        "absolute hidden top-0 h-full w-full",
        "md:block md:mt-12",
        "lg:col-start-6"
      )}
    >
      {children}
    </motion.div>
  );
};

export default RightSide;
