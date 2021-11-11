import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let router = useRouter();

  return (
    <>
      <div className="w-full h-1/6 flex items-center bg-white">
        <div className="flex justify-between items-center mr-auto">
          <h1>saatenberg</h1>
          <h1 className="hidden lg:block ml-5">page</h1>
        </div>
        <div className="hidden lg:flex justify-between items-center">
          <div className="z-10">searchbar</div>
          <ul className="ml-24 z-10">
            {router.locales?.map((locale) => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a>{locale}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h1
          className="ml-24 cursor-pointer"
          onClick={() => setToggleMenu(true)}
        >
          menu
        </h1>
      </div>
      <div
        className={classNames(
          "fixed bg-green-400 w-full h-full top-0 left-0 transform transition-transform flex flex-col",
          "lg:w-3/5 lg:left-full lg:justify-start lg:items-end lg:py-14 lg:px-12",
          {
            "translate-x-full": !toggleMenu,
            "translate-x-0 lg:-translate-x-full left-0": toggleMenu,
          }
        )}
      >
        <h1
          className="lg:mb-32 cursor-pointer"
          onClick={() => setToggleMenu(false)}
        >
          x
        </h1>
        <ul className="space-y-4 text-right">
          <li onClick={() => setToggleMenu(false)}>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <Link href="/products">
              <a>products</a>
            </Link>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <Link href="/services">
              <a>services</a>
            </Link>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
