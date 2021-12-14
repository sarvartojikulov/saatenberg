import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Accordion from "./NavbarAccordion";
import Searchbar from "../Searchbar";
import Languages from "./Languages";

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
  console.log(router.locale);

  function changeLanguage(locales: string[], currLang: string) {
    const curr_index = locales.indexOf(currLang);
    const next_lang = locales.length - 1 === curr_index ? 0 : curr_index + 1;
    return locales[next_lang];
  }

  useEffect(() => {
    if (toggleMenu) setBgColor(colors[Math.floor(Math.random() * 5)]);
    console.log(toggleMenu);
  }, [toggleMenu]);
  return (
    <>
      <div
        className={classNames(
          "h-full grid grid-cols-4 grid-rows-1 gap-x-4 items-end justify-items-end",
          "md:grid-cols-8 md:text-md",
          "lg:grid-cols-12 lg:col-span-12 lg:text-lg relative"
        )}
      >
        <div
          className={classNames(
            "col-span-3 cursor-pointer font-bold w-40 h-4",
            "md:col-span-2 md:h-auto md:w-full",
            ""
          )}
        >
          <Link href="/">
            <svg
              width="205"
              height="21"
              viewBox="0 0 205 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.9691 20.3402L49.868 0H54.9501L63.0459 20.3402H41.9691ZM48.5482 16.3819L52.3606 5.83949L56.3092 16.3819H48.5482Z"
                fill="black"
              />
              <path
                d="M11.2318 13.7547C11.2318 17.9739 8.33608 20.4181 4.00717 20.4181H0V15.9079H3.56843C5.29414 15.9079 6.55186 14.5986 6.55186 12.7945V7.46968C6.55186 2.90138 9.44755 0.0498245 14.1567 0.0498245H17.7251V4.55993H14.2152C12.3432 4.55993 11.0855 5.86932 11.2318 7.67336V13.7547Z"
                fill="black"
              />
              <path
                d="M75.3313 4.55993V20.4181H70.6514V4.55993H63.7778V0.0498245H82.2049V4.55993H75.3313Z"
                fill="black"
              />
              <path
                d="M100.4 15.9079V20.4181H87.4423V0.0498245H100.4V4.55993H92.1222V7.90614H98.9373V12.4162H92.1222V15.9079H100.4Z"
                fill="black"
              />
              <path
                d="M111.068 4.55993V20.4181H106.388V0.0498245H115.894C120.457 0.0498245 123.645 3.22145 123.645 7.76065V20.4181H118.965V8.25531C118.965 6.1021 117.474 4.55993 115.455 4.55993H111.068Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M143.149 14.1621C143.149 17.7702 140.458 20.4181 136.743 20.4181H130.133V0.0498245H136.743C140.37 0.0498245 143.002 2.6395 143.002 6.16029C143.002 7.67336 142.476 9.01184 141.277 10.0303C142.593 11.136 143.149 12.5326 143.149 14.1621ZM136.538 4.55993H134.813V7.90614H136.538C137.562 7.90614 138.323 7.1787 138.323 6.21849C138.323 5.25827 137.562 4.55993 136.538 4.55993ZM136.538 12.2708H134.813V15.9079H136.538C137.65 15.9079 138.469 15.1223 138.469 14.0748C138.469 13.0273 137.65 12.2708 136.538 12.2708Z"
                fill="black"
              />
              <path
                d="M161.979 15.9079V20.4181H149.021V0.0498245H161.979V4.55993H153.701V7.90614H160.516V12.4162H153.701V15.9079H161.979Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M181.656 6.30578C181.656 9.30282 179.93 11.2814 177.327 11.9798L182.036 15.3842V21L172.647 14.0166V20.4181H167.967V0.0498245H175.104C178.907 0.0498245 181.656 2.69769 181.656 6.30578ZM176.684 6.59675C176.684 5.34556 175.748 4.41444 174.461 4.41444H172.647V8.77907H174.461C175.748 8.77907 176.684 7.84795 176.684 6.59675Z"
                fill="black"
              />
              <path
                d="M205 8.05163V20.4181H197.249C191.37 20.4181 186.69 15.8497 186.69 10.2339C186.69 4.61813 191.37 0.0498245 197.249 0.0498245H205V4.55993H197.395C194.207 4.55993 191.721 7.12051 191.721 10.2339C191.721 13.3474 194.207 15.9079 197.395 15.9079H200.32V12.2708H195.026V8.05163H205Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.2104 0L18.3115 20.3402H39.3883L31.2925 0H26.2104ZM28.703 5.83949L24.8906 16.3819H32.6516L28.703 5.83949Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <h1 className={classNames("hidden ", "", "lg:block col-span-2")}>
          {router.asPath === "/" ? "home" : router.asPath.split("/")[1]}
        </h1>
        <div
          className={classNames("hidden z-10", "", " col-start-7 col-end-10")}
        >
          <Searchbar />
        </div>
        <div
          className={classNames(
            "hidden z-10",
            "md:block md:col-start-7 md:col-span-1",
            "lg:col-start-11 "
          )}
        >
          <Languages />
        </div>
        <div
          className="cursor-pointer col-span-1 md:col-start-8 lg:col-start-12 relative bg-none bottom-0 z-100 right-0"
          style={{ zIndex: 100 }}
        >
          {/* BURGER MENU */}
          <div className="relative sm:max-w-xl mx-auto w-5 lg:w-6 z-50">
            <nav>
              <div
                className="text-gray-500 w-5 lg:w-6 h-5 md:h-5 lg:h-6 relative focus:outline-none"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <div className="flex flex-col justify-center items-center w-full h-full absolute left-0 bottom-0">
                  <span
                    aria-hidden="true"
                    className={classNames(
                      "block absolute h-0.5 w-full bg-black transform transition duration-500 ease-in-out",
                      { "rotate-45": toggleMenu },
                      { "-translate-y-2": !toggleMenu }
                    )}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      "block absolute  h-0.5 w-full bg-black   transform transition duration-500 ease-in-out",
                      { "opacity-0": toggleMenu }
                    )}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      "block absolute  h-0.5 w-full bg-black transform  transition duration-500 ease-in-out",
                      { "-rotate-45": toggleMenu },
                      { "translate-y-2": !toggleMenu }
                    )}
                  ></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
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
            "h-screen grid grid-cols-1 gap-x-5 max-w-1440 mx-auto auto-rows-auto border",
            "md:grid-cols-8",
            "lg:grid-cols-12 lg:px-6"
          )}
        >
          {/* grid area */}
          <div
            onClick={() => setToggleMenu(false)}
            className={classNames(
              "hidden",
              "md:block md:col-span-3 col-start-1",
              "lg:col-span-6 lg:h-full"
            )}
          >
            {/* white space */}
          </div>
          <div
            className={classNames(
              "col-span-1 grid grid-cols-4 gap-x-4 grid-rows-navbar pr-6",
              "md:col-start-4 md:col-span-5 md:grid-cols-5 md:pr-12",
              "lg:col-span-6 lg:grid-cols-6 lg:pr-0"
            )}
          >
            <div className="col-span-1 md:col-span-1 justify-self-end z-50 h-14 flex justify-end items-end ml-6">
              <div className="h-5 w-5 rounded-full bg-conv"></div>
            </div>
            <div className="col-span-1 lg:col-span-3 justify-self-end z-50 h-14 flex justify-end items-end">
              <div className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 ">
                <h1>s</h1>
              </div>
            </div>
            <div className="col-span-1 z-50 h-14 flex justify-end items-end">
              <div className="">
                <Languages />
              </div>
            </div>
            <div
              className={classNames(
                "w-full h-full z-50 relative mt-24 col-start-2 col-span-3 lg:text-3xl flex flex-col justify-between",
                "md:col-start-3",
                "lg:col-start-4 lg:pr-0"
              )}
            >
              {/* navbar */}
              <ul className="space-y-4 text-right">
                <li
                  onClick={() => setToggleMenu(false)}
                  className={classNames({
                    "text-white": router.asPath === "/",
                  })}
                >
                  <h1 className="text-md uppercase">
                    <Link href="/">home</Link>
                  </h1>
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
                  <h1 className="text-md uppercase">
                    <Link href="/services">
                      <a>services</a>
                    </Link>
                  </h1>
                </li>
                <li
                  onClick={() => setToggleMenu(false)}
                  className={classNames({
                    "text-white": router.asPath === "/about",
                  })}
                >
                  <h1 className="text-md uppercase">
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </h1>
                </li>
                <li
                  onClick={() => setToggleMenu(false)}
                  className={classNames({
                    "text-white": router.asPath === "/contact",
                  })}
                >
                  <h1 className="text-md uppercase">
                    <Link href="/contact">
                      <a>contact</a>
                    </Link>
                  </h1>
                </li>
              </ul>
            </div>
            <div className="col-span-2 col-start-3 md:col-start-4 lg:col-start-5 mb-4 z-50 flex flex-col justify-end items-end list-none space-y-4">
              <li
                onClick={() => setToggleMenu(false)}
                className={classNames({
                  "text-white mt-full ": router.asPath === "/careers",
                })}
              >
                <h1 className="text-md uppercase">
                  <Link href="/about">
                    <a>Careers</a>
                  </Link>
                </h1>
              </li>
              <li
                onClick={() => setToggleMenu(false)}
                className={classNames({
                  "text-white": router.asPath === "/impressum",
                })}
              >
                <h1 className="text-md uppercase">
                  <Link href="/about">
                    <a>Impressum</a>
                  </Link>
                </h1>
              </li>
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
