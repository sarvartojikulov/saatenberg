import type { NextPage } from "next";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const products: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full h-5/6">
      <div
        className="bg-yellow-300 w-full h-full flex justify-center items-center"
        style={{ scrollSnapAlign: "start" }}
      >
        <h1>{t("products:title")}</h1>
      </div>
    </div>
  );
};

export default products;