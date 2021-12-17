import classNames from "classnames";
import React from "react";

interface BurgerProps {
  status: boolean;
  toggler: () => void;
}

const Burger: React.FC<BurgerProps> = ({ toggler, status }) => {
  return (
    <div className="relative sm:max-w-xl mx-auto">
      <nav>
        <div
          className="text-gray-500 w-10 h-10 relative focus:outline-none"
          onClick={toggler}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={classNames(
                "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",
                { "rotate-45": status },
                { "-translate-y-1.5": !status }
              )}
            ></span>
            <span
              aria-hidden="true"
              className={classNames(
                "block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out",
                { "opacity-0": status }
              )}
            ></span>
            <span
              aria-hidden="true"
              className={classNames(
                "block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out",
                { "-rotate-45": status },
                { "translate-y-1.5": !status }
              )}
            ></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Burger;
