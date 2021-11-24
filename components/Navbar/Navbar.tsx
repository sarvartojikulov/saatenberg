import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Accordion from "./NavbarAccordion";
import Searchbar from "../Searchbar";

let colors = [
  "rgba(83, 94, 12, 1)",
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
    if (toggleMenu) setBgColor(colors[Math.floor(Math.random() * 5)]);
  }, [toggleMenu]);
  return (
    <>
      <div
        className={classNames(
          "h-full items-center grid grid-cols-3 gap-x-5",
          "md:grid-cols-12",
          "lg:col-span-12 lg:text-3xl relative"
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
          {router.asPath === "/" ? "home" : router.asPath.split("/")[1]}
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
          "fixed z-50 top-0 right-0 w-screen h-screen transform transition-transform translate-x-0",
          {
            "translate-x-full": !toggleMenu,
            "translate-x-0": toggleMenu,
          }
        )}
      >
        {/* whole screen */}
        <div
          className={classNames(
            "h-screen grid grid-cols-1 gap-x-5 max-w-1440 mx-auto lg:px-6",
            "",
            "lg:grid-cols-12"
          )}
        >
          {/* grid area */}
          <div
            onClick={() => setToggleMenu(false)}
            className={classNames(
              "hidden",
              "",
              " lg:block lg:col-span-5 lg:h-full"
            )}
          >
            {/* white space */}
          </div>
          <div
            className={classNames(
              "col-span-1 grid grid-cols-1",
              "",
              "lg:col-span-7 lg:grid-cols-7"
            )}
          >
            <div
              className={classNames(
                "w-full h-full z-50 relative col-start-6 col-span-2 lg:text-3xl",
                "",
                ""
              )}
            >
              {/* navbar */}
              <h1
                className="lg:mb-32 cursor-pointer text-right lg:mt-12"
                onClick={() => setToggleMenu(false)}
              >
                x
              </h1>
              <ul className="space-y-4 text-right">
                <li
                  onClick={() => setToggleMenu(false)}
                  className={classNames({
                    "text-white": router.asPath === "/",
                  })}
                >
                  <Link href="/">
                    <a>home</a>
                  </Link>
                </li>
                <li
                  className={classNames({
                    "text-white": router.asPath === "/products",
                  })}
                >
                  <Accordion closeNavbar={() => setToggleMenu(false)} />
                </li>
                <li
                  onClick={() => setToggleMenu(false)}
                  className={classNames({
                    "text-white": router.asPath === "/services",
                  })}
                >
                  <Link href="/services">
                    <a>services</a>
                  </Link>
                </li>
                <li
                  onClick={() => setToggleMenu(false)}
                  className={classNames({
                    "text-white": router.asPath === "/about",
                  })}
                >
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li
                  onClick={() => setToggleMenu(false)}
                  className={classNames({
                    "text-white": router.asPath === "/contact",
                  })}
                >
                  <Link href="/contact">
                    <a>contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              style={{ backgroundColor: bgColor }}
              className="absolute top-0 w-full h-full z-0"
              onClick={() => console.log("y")}
            >
              {/* absolute background */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
