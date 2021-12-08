import classNames from "classnames";
import React, { useState } from "react";
import Arrow from "./Icons/Arrow";

interface DropdownProps {
  header: string;
}

const Dropdown: React.FC<DropdownProps> = ({ header, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex" onClick={() => setOpen(!open)}>
      <Arrow
        className={classNames("transform scale-75 transition-all mr-4", {
          "rotate-90": open,
        })}
      />
      <div>
        <div className="flex cursor-pointer justify-start">
          <h1 className="text-md capitalize">{header}</h1>
        </div>
        {open && (
          <div className="absolute mt-2 space-y-2 w-60 bg-white">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
