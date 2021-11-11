import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classnames from "classnames";
import { useState } from "react";
import { i18n } from "next-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const [moveLeft, setmoveLeft] = useState(false);
  return (
    <div className="flex w-full h-5/6">
      <div
        className="bg-blue-400 w-full h-full flex justify-center items-center"
        style={{ scrollSnapAlign: "start" }}
      >
        <main className="w-full h-full">
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
    ...(await serverSideTranslations(locale)),
  },
});

export default Home;
