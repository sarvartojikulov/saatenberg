import type { NextPage } from "next";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const careers: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full h-5/6">
      <div
        className="bg-blue-300 w-full h-full flex justify-center items-center"
        style={{ scrollSnapAlign: "start" }}
      >
        <h1>CAREERS(NO TRANSLATIONS FOR NOW)</h1>
      </div>
    </div>
  );
};

export default careers;