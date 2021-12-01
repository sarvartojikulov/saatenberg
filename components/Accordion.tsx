import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useState } from "react";
interface AccordionProps {
  item: any;
  index: number;
  isOpen: boolean;
  handleHeader: (index: any) => void;
  handleInfoBlock: (value: boolean) => void;
  z_index: number;
}

// Opacity at the end of div
// https://css-tricks.com/text-fade-read-more/

//https://github.com/ALapina/FAQ-Accordion-Card-React/blob/master/src/components/Accordion.js
const Accordion: React.FC<AccordionProps> = ({
  item,
  index,
  handleHeader,
  handleInfoBlock,
  isOpen,
  z_index,
}) => {
  const [activeIB_index, setactiveIB_index] = useState<number | null>(null);
  const toggleInfoBlock = (index: number) => {
    if (index !== activeIB_index) {
      handleInfoBlock(false);
      setTimeout(() => handleInfoBlock(true), 500);
      setactiveIB_index(index);
    } else {
      return;
    }
  };

  const { name, items, id } = item;
  return (
    <div className={classNames("relative transition-all", `z-${z_index}`)}>
      <div
        key="header"
        onClick={() => {
          handleHeader(index);
          handleInfoBlock(false);
        }}
      >
        <h1
          className={classNames(
            "cursor-pointer text-sm md:text-md lg:text-lg",
            { "font-bold": isOpen }
          )}
        >
          <Link href={`/products/organic?productID=` + id} passHref>
            {name}
          </Link>
        </h1>
      </div>
      <div
        className={classNames(
          "flex flex-col transition-all pl-3",
          "lg:space-y-3",
          { "h-0 opacity-0 mt-0": !isOpen },
          { "h-auto opacity-100 mt-0": isOpen }
        )}
      >
        {items.map((product: any, index: any) => {
          return (
            <Link
              href={`/products/organic?productID=${id}&itemID=${product.id}`}
              key={index}
              passHref
            >
              <h1
                className={classNames(
                  "cursor-pointer text-sm md:text-md lg:text-lg leading-6 capitalize",
                  "lg:mt-4",
                  { "h-0 opacity-0": !isOpen },
                  { "h-auto opacity-100": isOpen }
                )}
                onClick={() => {
                  toggleInfoBlock(index);
                }}
              >
                {product.name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
