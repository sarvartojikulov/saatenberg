import classNames from "classnames";
import React from "react";

const RightSide: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        "absolute hidden top-0 h-full w-full",
        "",
        "lg:block lg:col-start-6"
      )}
    >
      {children}
    </div>
  );
};

export default RightSide;
