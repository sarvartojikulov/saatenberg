import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import router from "next/dist/client/router";
import React, { useState } from "react";

interface AccordionProps {
  header: string;
  items: any[];
  itemsHandler: () => void;
  z_index: number;
}
// Opacity at the end of div
// https://css-tricks.com/text-fade-read-more/

const Accordion: React.FC<AccordionProps> = ({
  header,
  items,
  itemsHandler,
  z_index,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<any>(false);

  return (
    <div className={classNames("relative", `z-${z_index}`)}>
      <div key="header" onClick={() => setIsOpen(!isOpen)}>
        <h1 className={classNames("cursor-pointer")}>{header}</h1>
      </div>
      <div
        className={classNames(
          "flex text-lg flex-col lg:text-3xl mt-4 transition-all",
          { "h-0 opacity-0": !isOpen },
          { "h-auto opacity-100": isOpen }
        )}
      >
        {items.map((item, index) => {
          return <h1 key={index}>{item}</h1>;
        })}
      </div>
    </div>
  );
};

export default Accordion;
