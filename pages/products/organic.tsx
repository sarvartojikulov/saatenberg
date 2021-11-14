import type { NextPage } from "next";
import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import InfoBlock from "../../components/InfoBlock";

const organic: NextPage = () => {
  const [tempToggle, setTempToggle] = useState(false);
  const { t } = useTranslation();
  return (
    <>
    <div className="flex w-full h-5/6 grid grid-cols-12 gap-x-5">
      <div
        className="bg-yellow-300 h-full col-span-5"
        style={{ scrollSnapAlign: "start" }}
      >
        <h1>{t("products:title")} {t("products:type_organic")}</h1>
      </div>

      {tempToggle ? <InfoBlock /> : <div className="bg-blue-300 h-full w-full col-span-7">infoblock closed</div>}
    </div>
    </>
  );
};

export default organic;