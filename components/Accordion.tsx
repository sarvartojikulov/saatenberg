import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
interface AccordionProps {
  product: any;
  index: number;
  isOpen: boolean;
  handleHeader: (index: any) => void;
  handleInfoBlock: (value: boolean) => void;
}

// Opacity at the end of div
// https://css-tricks.com/text-fade-read-more/

//https://github.com/ALapina/FAQ-Accordion-Card-React/blob/master/src/components/Accordion.js

const Accordion: React.FC<AccordionProps> = ({
  product: item,
  index,
  handleHeader,
  handleInfoBlock,
  isOpen,
}) => {
  const [activeIB_index, setactiveIB_index] = useState<number | null>(null);
  const [height, setHeight] = useState<number | undefined>(0);
  const content = useRef<HTMLDivElement>(null);

  const toggleInfoBlock = (index: number) => {
    if (index !== activeIB_index) {
      handleInfoBlock(false);
      setTimeout(() => handleInfoBlock(true), 500);
      setactiveIB_index(index);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(content.current ? content.current?.scrollHeight + 10 : 0);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const { name, items, id } = item;
  return (
    <div className={classNames("relative transition-all")}>
      <div
        key="header"
        onClick={() => {
          handleHeader(index);
          handleInfoBlock(false);
        }}
      >
        <h1
          className={classNames("cursor-pointer text-sm md:text-md", {
            "font-bold": isOpen,
          })}
        >
          <Link href={`/products/organic?productID=` + id} passHref>
            {name}
          </Link>
        </h1>
      </div>
      <div
        ref={content}
        className={classNames(
          "flex flex-col overflow-y-hidden transition-all pl-3",
          "lg:space-y-2",
          { "mt-1 md:mt-3 pb-1.5": isOpen }
        )}
        style={{
          maxHeight: `${height}px`,
        }}
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
                  "cursor-pointer text-sm md:text-md capitalize",
                  "",
                  { "opacity-0": !isOpen },
                  { "opacity-100": isOpen }
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
