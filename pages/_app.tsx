import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import "tailwindcss/tailwind.css";
import ArrowNaviagtion from "../components/ArrowNaviagtion";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Saatenberg</title>
        <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="description" content="Saatenberg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className={classNames(
          "w-screen h-screen cursor-default disable-dbl-tap-zoom relative",
          "container grid grid-cols-1 grid-rows-body-wrapper max-w-1440  relative px-6  items-end ",
          "md:grid-cols-1 md:mx-auto md:px-12",
          "lg:px-6 2xl:mx-auto lg:max-h-900"
        )}
      >
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <ArrowNaviagtion />
      </div>
    </>
  );
}

export default MyApp;
