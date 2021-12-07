import classNames from "classnames";
import React from "react";

const LeftSide: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        "w-full h-full col-span-4 ",
        "md:hidden md:mt-12",
        "lg:flex lg:col-span-5 z-20"
      )}
      style={{ scrollSnapAlign: "start" }}
    >
      {children}
    </div>
  );
};

export default LeftSide;
