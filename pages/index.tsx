import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1">
      <div
        className="bg-blue-400 w-full h-full flex justify-center items-center"
        style={{ scrollSnapAlign: "start" }}
      >
        <h1 className="text-lg md:text-5xl font-bold">{t("common:welcome")}</h1>
      </div>
    </div>
  );
};

export default Home;
