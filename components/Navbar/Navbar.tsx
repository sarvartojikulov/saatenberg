import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Accordion from "./Accordion";
import Searchbar from "../Searchbar";

let colors = [
  "rgba(83, 94, 12, 0.75)",
  "#C8C7BA",
  "#9E4B4B",
  "#D3CF56",
  "#E5E5E5;",
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [bgColor, setBgColor] = useState("#C8C7BA");
  let router = useRouter();
  useEffect(() => {
    if (toggleMenu)
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [toggleMenu]);
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
        style={{ backgroundColor: bgColor }}
        className={classNames(
          "fixed w-full h-full grid grid-cols-7 gap-x-5 transform transition-transform top-0 left-0",
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
            <li>
              <Accordion closeNavbar={() => setToggleMenu(false)} />
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
