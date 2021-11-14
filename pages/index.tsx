import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames(
        "grid grid-cols-3 auto-rows-min gap-x-5",
        "",
        "pt-32 lg:grid-cols-12 gap-y-16"
      )}
    >
      <h1 className={classNames("", "", "lg:col-span-6")}>
        One of the leading wholesaler in Europe. We trade with seeds, spices and
        feeds worldwide.
      </h1>
      <h1 className={classNames("", "", "lg:col-span-6")}>
        The company Saatenberg Handels & Consulting GmbH is continuing to pursue
        a long way of development and steady improvement. With more than a
        decade of presence in the market of spices, grains and oilseeds, we
        confidently claim to rank among the best in the industry.{" "}
      </h1>
      <div
        className={classNames(
          "",
          "",
          "h-80 lg:col-span-12 grid grid-cols-2 gap-x-5"
        )}
      >
        <div className={classNames("", "", "relative bg-pink-500")}>
          <img src="" alt="" />
          <h1
            className={
              "mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 font-bold text-4xl"
            }
          >
            CONVENTIONAL
          </h1>
        </div>
        <div className={classNames("", "", " relative bg-yellow-300")}>
          <img src="" alt="" />
          <h1
            className={
              "mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 font-bold text-4xl"
            }
          >
            ORGANIC
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
