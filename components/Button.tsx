import classNames from "classnames";
import React from "react";

const Button = (props: any) => {
  return (
    <div className={classNames("col-span-4 mx-auto mt-6", "md:col-start-2")}>
      <button
        className="px-8 py-2 bg-gray-500 rounded-3xl text-sm md:text-md lg:text-lg text-white"
        {...props}
      >
        SEND REQUEST
      </button>
    </div>
  );
};

export default Button;
