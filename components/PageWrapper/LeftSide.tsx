import classNames from "classnames";
import React from "react";

const LeftSide: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        "bgba-yellow-300 w-full h-full space-y-1 items-center col-span-4 pt-10 pb-8",
        "",
        "lg:col-span-5 lg:space-y-4"
      )}
      style={{ scrollSnapAlign: "start" }}
    >
      {children}
    </div>
  );
};

export default LeftSide;
