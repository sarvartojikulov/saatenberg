import classNames from "classnames";
import React, { useState } from "react";

import { i18n } from "next-i18next";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="w-full h-1/6 flex items-center bg-white">
        <div className="flex justify-between items-center mr-auto">
          <h1>saatenberg</h1>
          <h1 className="hidden lg:block ml-5">page</h1>
        </div>
        <div className="hidden lg:flex justify-between items-center">
          <div className="z-10">searchbar</div>
          <h1
            className="ml-24 z-10"
            onClick={() => {
              i18n?.changeLanguage(i18n?.language === "ru" ? "en" : "de");
              console.log(i18n?.language);
            }}
          >
            EN
          </h1>
        </div>
        <h1 className="ml-24" onClick={() => setToggleMenu(true)}>
          menu
        </h1>
      </div>
      <div
        className={classNames(
          "fixed bg-green-400 w-full h-full top-0 left-0 transform transition-transform",
          "lg:w-3/5 lg:left-full",
          {
            "translate-x-full": !toggleMenu,
            "translate-x-0 lg:-translate-x-full left-0": toggleMenu,
          }
        )}
      >
        <h1 onClick={() => setToggleMenu(false)}>x</h1>
        <ul>
          <li>page 1</li>
          <li>page 2</li>
          <li>page 3</li>
          <li>page 4</li>
          <li>page 5</li>
          <li>page 6</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
