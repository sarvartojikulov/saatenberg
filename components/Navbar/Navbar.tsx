import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Searchbar from "../Searchbar";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  let router = useRouter();
  return (
    <>
      <div
        className={classNames(
          "h-full items-center grid grid-cols-3 gap-x-5",
          "md:grid-cols-12",
          "lg:col-span-12 lg:text-3xl"
        )}
      >
        <h1
          className={classNames("col-span-2 cursor-pointer font-bold", "", "")}
        >
          <Link href="/">
            <a>saatenberg</a>
          </Link>
        </h1>
        <h1 className={classNames("hidden ", "", "lg:block col-span-2")}>
          {router.asPath === "/" ? "home" : router.asPath.replace("/", "")}
        </h1>
        <div
          className={classNames(
            "hidden z-10",
            "",
            "lg:block col-start-7 col-end-10"
          )}
        >
          <Searchbar />
        </div>
        <ul
          className={classNames(
            "hidden z-10",
            "",
            "lg:block col-start-11 col-span-1"
          )}
        >
          {router.locales?.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h1
          className="cursor-pointer col-start-12"
          onClick={() => setToggleMenu(true)}
        >
          menu
        </h1>
      </div>
      <div
        className={classNames(
          "fixed bg-green-400 w-full h-full grid grid-cols-7 gap-x-5 transform transition-transform top-0 left-0",
          "lg:w-3/5 lg:left-full pr-12 pt-14",
          {
            "translate-x-full": !toggleMenu,
            "translate-x-0 lg:-translate-x-full left-0": toggleMenu,
          }
        )}
      >
        <div
          className={classNames("", "", "col-start-6 col-span-2 lg:text-3xl")}
        >
          <h1
            className="lg:mb-32 cursor-pointer text-right"
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
      </div>
    </>
  );
};

export default Navbar;
