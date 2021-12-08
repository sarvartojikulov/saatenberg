import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React, { Suspense } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
          "w-screen h-screen container grid grid-cols-1 grid-rows-wrapper-md max-w-1440 max-h-900 relative px-6 cursor-default",
          "md:grid-cols-1 md:mx-auto md:px-12",
          "lg:px-6 2xl:mx-auto"
        )}
      >
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
