import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import Link from "next/link";
import Searchbar from "../Searchbar";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let router = useRouter();

  return (
    <>
      <div
        className={classNames(
          "h-full items-center grid grid-cols-3 gap-x-5",
          "md:grid-cols-12",
          "lg:col-span-12"
        )}
      >
        <h1 className={classNames("col-span-2 cursor-pointer", "", "")}>
          saatenberg
        </h1>
        <h1 className={classNames("hidden ", "", "lg:block col-span-2")}>
          page
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
          "fixed bg-green-400 w-full h-full flex flex-col transform transition-transform top-0 left-0",
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
