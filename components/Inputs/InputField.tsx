import classNames from "classnames";
import React from "react";

const InputField = (props: any) => {
  return (
    <div className={classNames("w-full h-12", "", "")}>
      <input
        className="w-full h-full text-sm capitalize px-3 py-4 outline-none border border-black appearance-none focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  );
};

export default InputField;
