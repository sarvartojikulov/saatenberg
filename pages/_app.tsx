import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React, { Suspense } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import classNames from "classnames";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Saatenberg</title>
        <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="description" content="Saatenberg" />
      </Head>
      <div
        className={classNames(
          "w-screen h-screen container grid grid-cols-1 grid-rows-wrapper mx-auto relative px-6",
          "md:grid-cols-1 md:px-12",
          ""
        )}
      >
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
