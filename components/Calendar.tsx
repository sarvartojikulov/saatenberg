import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { keys_months, Product } from "../utils/calendar";
import { updateOrAddQuery } from "../utils/query";
import Dropdown from "./Dropdown";

interface Calendar_data {
  calendar_data: {
    country: string;
    data: any[];
  }[];
  product: Product;
  products: { id: number; name: string }[];
}

const Calendar: React.FC<Calendar_data> = ({
  calendar_data,
  product,
  products,
}) => {
  const router = useRouter();
  return (
    <>
      <div
        className={classNames(
          "grid auto-rows-min grid-cols-4 gap-x-4",
          "md:grid-cols-8 md:z-10 md:gap-y-2",
          "lg:grid-cols-7 lg:mx-auto"
        )}
      >
        <div
          className={classNames(
            "col-span-6 col-start-2 mb-10 grid grid-cols-7 gap-x-4",
            "md:grid-cols-8 md:col-span-full md:mb-0",
            "xl:mb-4"
          )}
        >
          <h1 className="text-md col-span-2 md:col-start-2">Calendar</h1>
          <div className="relative ml-5 col-start-3 col-span-5 md:col-start-5 md:col-span-4">
            <Dropdown header={product.name}>
              {products.map(({ name, id }, index) => {
                if (product.id !== id) {
                  return (
                    <h1
                      key={index}
                      className="text-md text-gray-400 cursor-pointer w-full"
                      onClick={() =>
                        updateOrAddQuery(router, { productID: id })
                      }
                    >
                      {name}
                    </h1>
                  );
                }
              })}
            </Dropdown>
          </div>
        </div>
        <div className="col-span-1 col-start-1 h-full w-full space-y-2">
          {keys_months.map((item, index) => (
            <div key={index} className="h-8 flex items-center">
              <h1 className="capitalize text-md ">{item}</h1>
            </div>
          ))}
        </div>
        <div
          className={classNames(
            " h-full grid grid-flow-col grid-cols-6 grid-rows-12 gap-x-4 gap-y-2",
            `col-span-${
              calendar_data && !(calendar_data.length < 6)
                ? calendar_data.length
                : 6
            }`
          )}
        >
          {calendar_data &&
            calendar_data.map(({ country, data }) => {
              return data.map(({ items }, index) => {
                if (items.length > 0) {
                  return (
                    <div
                      key={index}
                      className="h-8 grid grid-cols-5 gap-x-1 auto-rows-auto justify-items-center self-center col-span-1"
                    >
                      {items.map((item: any, index: number) => {
                        return (
                          <div
                            key={index}
                            className="h-3 w-3 self-center rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                        );
                      })}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="h-8 flex items-center col-span-1"
                    ></div>
                  );
                }
              });
            })}
        </div>
        <div className="col-span-1 row-span-2"></div>
        <div className="lg:hidden col-span-1"></div>
        {calendar_data &&
          calendar_data.map((country, index) => {
            return (
              <div key={index} className="col-span-1 h-8 mt-2">
                <h1 className="text-md ">{country.country}</h1>
              </div>
            );
          })}
        <div className="col-span-full col-start-2 grid grid-cols-6 auto-rows-auto gap-x-4 gap-y-2 mt-2">
          {product.items.map(({ name, color, id }, index) => {
            return (
              <div
                key={index}
                className={classNames("flex items-center col-span-3")}
              >
                <div
                  className="h-3 w-3 self-center rounded-full mr-1"
                  style={{ backgroundColor: color }}
                ></div>
                <h2
                  className="capitalize text-xsm cursor-pointer z-10"
                  onClick={() =>
                    updateOrAddQuery(router, {
                      productID: product.id,
                      itemID: id,
                    })
                  }
                >
                  {name}
                </h2>
              </div>
            );
          })}
        </div>
        <div className=" col-span-full lg:hidden md:grid grid-cols-8 gap-y-2 gap-x-4 z-10">
          {products.map(({ name, id }, index) => {
            if (product.id !== id) {
              return (
                <h1
                  key={index}
                  className="text-md cursor-pointer col-span-3"
                  onClick={() => updateOrAddQuery(router, { productID: id })}
                >
                  {name}
                </h1>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Calendar;
