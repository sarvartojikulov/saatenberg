import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/dist/client/router";

interface AccordionProps {
  closeNavbar: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ closeNavbar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div key="question" onClick={() => setIsOpen(!isOpen)}>
          <h1
            className={classNames("cursor-pointer text-md", {
              "text-white": router.asPath.includes("/products"),
            })}
          >
            products
          </h1>
        </motion.div>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className="flex text-lg flex-col lg:text-3xl mt-4 md:space-y-2"
          >
            <h1 className="text-md">
              <Link href="/products/organic?productID=1">
                <a onClick={closeNavbar}>ORGANIC</a>
              </Link>
            </h1>
            <h1 className="text-md">
              <Link href="/products/conventional">
                <a onClick={closeNavbar}>CONVENTIONAL</a>
              </Link>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
