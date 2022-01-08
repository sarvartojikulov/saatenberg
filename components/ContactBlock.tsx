import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import InputField from "./Inputs/InputField";
import RichInput from "./Inputs/RichInput";
interface ContactBlockProps {
  open: boolean;
  productName: string;
  closeAll: () => void;
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
  productName,
  closeAll,
}) => {
  const { t } = useTranslation();
  const [name, setName] = useState<string | undefined>(undefined);
  const [company, setCompany] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState<string | undefined>(undefined);
  const [firmBID, setFirmBID] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string>("");

  function sendEmail() {
    if (name && company && quantity && firmBID && message && productName) {
      const body = {
        name: name,
        company: company,
        firmBID: firmBID,
        productName: productName,
        quantity: quantity,
        message: message,
      };
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => console.log("success"));
      alert("sended successfuly");
    } else {
      setError("Заполни все поля");
    }
  }
  return (
    <motion.div
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      variants={variants}
      transition={{ type: "tween" }}
      className="absolute top-0 left-0 h-full w-full lg:w-auto lg:col-span-4 bg-white z-100 lg:z-30 pt-12 grid grid-cols-4 grid-rows-contactBlockRows md:grid-cols-8 lg:grid-cols-5 gap-x-4 gap-y-2"
    >
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-full lg:col-start-1 md:px-7 lg:p-0">
        <InputField
          type="text"
          placeholder={t("products:input_name")}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-full lg:col-start-1 md:px-7 lg:p-0">
        <InputField
          type="text"
          placeholder={t("products:input_company")}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCompany(e.target.value)
          }
        />
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-full lg:col-start-1 md:px-7 lg:p-0">
        <InputField
          type="text"
          placeholder={t("products:input_quantity")}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(e.target.value)
          }
        />
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-full lg:col-start-1 md:px-7 lg:p-0">
        <InputField
          type="text"
          placeholder={t("products:input_firmBID")}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirmBID(e.target.value)
          }
        />
      </div>
      <div className="col-span-full h-full md:col-span-6 md:col-start-2 lg:col-span-full lg:col-start-1 md:px-7 lg:p-0">
        <RichInput
          type="text"
          rows="3"
          placeholder={t("products:input_message")}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
        />
      </div>
      <div className="col-span-full pt-12 md:pt-16 mx-auto lg:m-0 lg:col-span-3 lg:col-start-2 md:px-7 lg:p-0">
        <Button
          styles=""
          handler={() => {
            sendEmail();
            closeAll();
          }}
        />
      </div>
    </motion.div>
  );
};

export default ContactBlock;
