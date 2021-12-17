import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "./Button";
import InputField from "./Inputs/InputField";
import RichInput from "./Inputs/RichInput";
interface ContactBlockProps {
  open: boolean;
  handleContactBlock: () => void;
}

const variants = {
  hidden: {
    translateX: "-100%",
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
  },
};

const ContactBlock: React.FC<ContactBlockProps> = ({
  open,
  handleContactBlock,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      variants={variants}
      transition={{ type: "tween" }}
      className="absolute top-0 left-0 w-full lg:w-auto lg:col-span-4 h-full bg-white z-30 pt-12 grid grid-cols-4 auto-rows-min md:grid-cols-8 lg:grid-cols-5 gap-x-4 gap-y-2"
    >
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-1 md:px-7 lg:p-0">
        <InputField type="text" placeholder={t("products:input_name")} />
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-1 md:px-7 lg:p-0">
        <InputField type="text" placeholder={t("products:input_company")} />
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-1 md:px-7 lg:p-0">
        <InputField type="text" placeholder={t("products:input_quantity")} />
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-1 md:px-7 lg:p-0">
        <InputField type="text" placeholder={t("products:input_firmBID")} />
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-1 md:px-7 lg:p-0">
        <RichInput
          type="text"
          rows="3"
          placeholder={t("products:input_message")}
        />
      </div>
      <div className="col-span-full mx-auto lg:col-span-4 lg:col-start-1 md:px-7 lg:p-0">
        <Button onClick={() => handleContactBlock()} />
      </div>
    </motion.div>
  );
};

export default ContactBlock;
