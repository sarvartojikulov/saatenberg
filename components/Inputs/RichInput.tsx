import classNames from "classnames";
import React from "react";

const RichInput = (props: any) => {
  return (
    <div className={classNames("w-full h-40", "", "")}>
      <textarea
        className="w-full h-full text-sm px-3 py-4 form-textarea outline-none border border-black appearance-none focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  );
};

export default RichInput;
