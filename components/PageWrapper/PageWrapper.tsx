import classNames from "classnames";
import { NextPage } from "next";
import React from "react";

const PageWrapper: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-4 gap-x-4 h-full w-full pt-12 relative",
        "",
        "lg:grid-cols-12 lg:gap-x-5 lg:min-h-[760px]"
      )}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
