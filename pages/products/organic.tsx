import { motion } from "framer-motion";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo, useState } from "react";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";
import ContactBlock from "../../components/ContactBlock";
import InfoBlock from "../../components/InfoBlock";
import LeftSide from "../../components/PageWrapper/LeftSide";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import RightSide from "../../components/PageWrapper/RightSide";
import ProductInfo from "../../components/ProductInfo";
import { getCalendarData, Item, Product } from "../../utils/calendar";
import useDeviceDetect from "../../utils/useDetectDevice";
import data from "./conventional_products.json";

interface organicProps {
  product: Product;
  products_list: Product[];
  calendar?: any;
  productItem: Item | null;
}

const Organic: NextPage<organicProps> = ({
  product,
  calendar,
  productItem,
  products_list,
}) => {
  const [infoBlockToggle, setInfoBlockToggle] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sendRequest, setSendRequest] = useState<boolean>(false);
  const router = useRouter();
  const { tablet } = useDeviceDetect();
  const { t } = useTranslation();
  const products: Product[] = useMemo(() => {
    return products_list;
  }, []);
  useEffect(() => {
    const { productID } = router.query;
    setActiveIndex(Number(productID) - 1);
    if (router.query.itemID) {
      setInfoBlockToggle(true);
    }
  }, [router]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [infoBlockToggle]);
  return (
    <>
      <PageWrapper>
        <LeftSide>
          <motion.div className="space-y-1 lg:space-y-3 min-h-1/2 md:min-h-3/4 w-full">
            {products.map((product, index) => {
              return (
                <Accordion
                  key={index}
                  product={product}
                  index={index}
                  isOpen={activeIndex == index ? true : false}
                  handleHeader={(index) => setActiveIndex(index)}
                  handleInfoBlock={(value) => setInfoBlockToggle(value)}
                />
              );
            })}
          </motion.div>
        </LeftSide>
        <RightSide>
          <Calendar
            calendar_data={calendar}
            product={product}
            products={products.map(({ name, id }) => {
              return {
                id: id,
                name: name,
              };
            })}
          />
        </RightSide>
        <InfoBlock
          open={infoBlockToggle}
          handleInfoBlock={() => {
            setInfoBlockToggle(false);
            setSendRequest(false);
          }}
        >
          <ProductInfo item={productItem ? productItem : null} />
          {!sendRequest && (
            <Button
              onClick={() => {
                if (!tablet) {
                  setInfoBlockToggle(false);
                }
                setSendRequest(true);
              }}
            />
          )}
        </InfoBlock>
        <ContactBlock
          open={sendRequest}
          handleContactBlock={() => setSendRequest(false)}
        />
      </PageWrapper>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const products: Product[] | null = data.conv_products;
  const query_params = await query;
  let { productID, itemID } = query_params;
  const product: Product | undefined = products.find(
    (product) => product.id == productID
  );
  const tempItem = itemID && product?.items.find((el) => el.id == itemID);
  const productItem: Item | null = tempItem ? tempItem : null;
  const calendar_data = product ? getCalendarData(product) : null;
  return {
    props: {
      query_params: query_params,
      products_list: products || null,
      calendar: calendar_data || null,
      product: product || null,
      productItem: productItem || null,
    },
  };
}

export default Organic;
