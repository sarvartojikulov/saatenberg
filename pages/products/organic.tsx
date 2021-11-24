import type { NextPage } from "next";
import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Accordion from "../../components/Accordion";
import InfoBlock from "../../components/InfoBlock";
const organic: NextPage = () => {
  const [tempToggle, setTempToggle] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="flex w-full h-5/6 grid grid-cols-12 gap-x-5">
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

        {tempToggle ? (
          <InfoBlock />
        ) : (
          <div className="bg-blue-300 h-full w-full col-span-7">
            infoblock closed
          </div>
        )}
      </div>
    </>
  );
};

export default organic;
