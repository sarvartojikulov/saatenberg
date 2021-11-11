import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React, { Suspense } from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar/Navbar";

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
      <div className="w-screen h-screen px-7 md:px-14 relative">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);
