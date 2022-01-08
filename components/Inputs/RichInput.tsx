import classNames from "classnames";
import React from "react";

const RichInput = (props: any) => {
  return (
    <div className={classNames("w-full h-full", "", "")}>
      <textarea
        className={
          "w-full h-full text-sm px-3 py-4 form-textarea outline-none border border-input-gray appearance-none focus:outline-none resize-none focus:shadow-outline placeholder:uppercase"
        }
        {...props}
      />
    </div>
  );
};

export default RichInput;
