import type { NextPage } from "next";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";
import InputField from "../components/Inputs/InputField";
import RichInput from "../components/Inputs/RichInput";

const contact: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames("grid grid-cols-4 auto-rows-min gap-y-4")}>
      <div className={classNames("col-span-full space-y-4", "", "")}>
        <InputField type="text" placeholder={t("contact:input_name")} />
        <InputField type="text" placeholder={t("contact:input_company")} />
        <InputField type="text" placeholder={t("contact:input_quantity")} />
        <InputField type="text" placeholder={t("contact:input_firmBID")} />
        <RichInput
          type="text"
          rows="3"
          placeholder={t("contact:input_message")}
        />
      </div>
    </div>
  );
};

export default contact;
