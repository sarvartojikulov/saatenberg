import classNames from "classnames";
import React from "react";
import Image from "next/image";
import { Item } from "../utils/calendar";

const ProductInfo: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <>
      <div
        className={classNames(
          "col-span-full h-80 fill-current relative",
          "md:h-96 ",
          "lg:col-start-2 lg:col-span-6 lg:h-80"
        )}
      >
        <Image
          alt="product image"
          src="/images/products/demo.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className={classNames(
          "col-span-full mt-5 text-sm space-y-4 grid",
          "md:col-span-4 md:text-md md:mt-0",
          "lg:text-lg lg:col-start-2 lg:col-span-6 lg:mt-5"
        )}
      >
        {/* product info */}
        <div className="w-full flex justify-between lg:mb-12">
          <h1 className={classNames("font-bold capitalize", "", "")}>
            {item.name}
          </h1>
          <div
            className="h-3 w-3 self-center rounded-full"
            style={{ backgroundColor: item.color }}
          ></div>
        </div>
        <h1 className={classNames("capitalize", "md:mt-11", "lg:mt-0")}>
          Origin: East Europe/ Asia
        </h1>
        <h1 className="capitalize">
          Quality / Purity: <span className="normal-case">{item.quality}</span>
        </h1>
      </div>
      <div
        className={classNames(
          "col-span-full mt-8 text-sm",
          "md:col-span-4 md:text-md md:mt-0",
          "lg:text-lg lg:col-start-2 lg:col-span-6"
        )}
      >
        {/* CALENDAR */}
        <div className="lg:hidden space-y-4">
          <h1 className={classNames("font-bold capitalize", "")}>harvest</h1>
          {item.countries &&
            item.countries.map(({ name, month }, index) => {
              return (
                <div className="flex" key={index}>
                  <h1 className="w-12 mr-0 font-semibold">{name}</h1>
                  <h1 className=" ml-4 capitalize">{month.join(", ")}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
