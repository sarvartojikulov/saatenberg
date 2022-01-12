import classNames from "classnames";
import React from "react";

interface ButtonProps {
  styles: string;
  handler?: () => void;
}

const Button: React.FC<ButtonProps> = ({ styles, handler }) => {
  return (
    <div
      className={classNames(
        "col-span-4 mx-auto",
        "md:col-span-full",
        "lg:mx-0 lg:col-start-2",
        styles
      )}
    >
      <button
        className={classNames(
          "px-10 py-1 bg-button rounded-3xl text-sm md:text-md"
        )}
        onClick={handler}
      >
        SEND REQUEST
      </button>
    </div>
  );
};

export default Button;
