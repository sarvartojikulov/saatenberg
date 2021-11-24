import type { NextPage } from "next";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Accordion from "../../components/Accordion";

const organic: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full h-5/6">
      <div
        className="bg-yellow-300 w-full h-full space-y-4 items-center"
        style={{ scrollSnapAlign: "start" }}
      >
        <Accordion
          header="Products"
          items={["item 1", "item 2", "item 3"]}
          itemsHandler={() => console.log("asd")}
          z_index={0}
        />
        <Accordion
          header="Products"
          items={["item 1", "item 2", "item 3"]}
          itemsHandler={() => console.log("asd")}
          z_index={10}
        />
        {/* <h1>{t("products:title")} {t("products:type_organic")}</h1> */}
      </div>
    </div>
  );
};

export default organic;
