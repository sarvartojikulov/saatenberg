import classNames from "classnames";
import React from "react";

const Searchbar = () => {
  return (
    <div
      className={classNames(
        "hidden h-12 w-full border rounded-3xl border-black flex justify-between items-center",
        "",
        ""
      )}
    >
      <input
        type="text"
        className="w-full h-full px-4 rounded-3xl focus:outline-none bg-transparent"
      />
      <label>
        <svg
          className="mr-9"
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14.1905"
            cy="11.1427"
            r="9.64268"
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="7.72765"
            y1="18.3942"
            x2="1.06109"
            y2="25.0607"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </label>
    </div>
  );
};

export default Searchbar;
