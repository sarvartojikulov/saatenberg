import classNames from "classnames";
import React from "react";

const Button = (props: any) => {
  return (
    <div
      className={classNames(
        "col-span-4 mx-auto mt-6",
        "md:mt-12 md:col-span-full",
        "lg:mx-0 lg:col-start-2"
      )}
    >
      <button
        className="px-10 py-1 bg-button rounded-3xl text-sm md:text-md"
        {...props}
      >
        SEND REQUEST
      </button>
    </div>
  );
};

export default Button;
