import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";

interface AccordionProps {
  closeNavbar: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ closeNavbar }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div key="question" onClick={() => setIsOpen(!isOpen)}>
          <h1 className={classNames("cursor-pointer")}>products</h1>
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
            className="flex text-lg flex-col lg:text-3xl mt-4"
          >
            <Link href="/products/organic">
              <a onClick={closeNavbar}>ORGANIC</a>
            </Link>
            <Link href="/products/conventional">
              <a onClick={closeNavbar}>CONVENTIONAL</a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
