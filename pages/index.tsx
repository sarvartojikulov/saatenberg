import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classnames from "classnames";
import { useState } from "react";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const [moveLeft, setmoveLeft] = useState(false);
  return (
    <div className="flex">
      <div
        className="bg-blue-400 w-screen h-screen flex justify-center absolute items-center"
        style={{ scrollSnapAlign: "start" }}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>{t("welcome")}</h1>
          <div className="w-full flex justify-between mt-24">
            <button onClick={() => setmoveLeft(!moveLeft)}>Previous</button>
            <button onClick={() => setmoveLeft(!moveLeft)}>Next</button>
          </div>
        </main>
      </div>
      <div
        className={classnames(
          "bg-yellow-400 w-screen h-screen flex justify-center items-center absolute transform transition-transform z-10",
          { "translate-x-full": moveLeft },
          { "translate-x-0": !moveLeft }
        )}
        style={{ scrollSnapAlign: "start" }}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>{t("welcome")}</h1>
          <div className="w-full flex justify-between mt-24">
            <button onClick={() => setmoveLeft(!moveLeft)}>Previous</button>
            <button onClick={() => setmoveLeft(!moveLeft)}>Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default Home;
