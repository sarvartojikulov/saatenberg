import classNames from "classnames";
import React from "react";

const RichInput = (props: any) => {
  return (
    <div className={classNames("w-full h-48", "", "")}>
      <textarea
        className={
          "w-full h-full text-sm capitalize px-3 py-4 form-textarea outline-none border border-black appearance-none focus:outline-none resize-none focus:shadow-outline"
        }
        {...props}
      />
    </div>
  );
};

export default RichInput;
