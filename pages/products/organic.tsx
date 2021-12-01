import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo, useState } from "react";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import InfoBlock from "../../components/InfoBlock";
import LeftSide from "../../components/PageWrapper/LeftSide";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import RightSide from "../../components/PageWrapper/RightSide";
import ProductInfo, { Item } from "../../components/ProductInfo";
import data from "./conventional_products.json";

interface organicProps {
  query_params?: any;
}

type Product = {
  name: string;
  id: number;
  items: Item[];
};

const Organic: NextPage<organicProps> = ({ query_params }) => {
  const [infoBlockToggle, setInfoBlockToggle] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [productItem, setProductItem] = useState<Item | null>(null);
  const router = useRouter();
  const { t } = useTranslation();
  const products: Product[] = useMemo(() => {
    return data.conv_products;
  }, []);

  useEffect(() => {
    products.map(({ id, items }) => {
      let { productID, itemID } = query_params;
      if (id == productID) {
        items.map((el) => el.id == itemID && setProductItem(el));
      }
    });
  }, [query_params.itemID]);

  return (
    <>
      <PageWrapper>
        <LeftSide>
          <div className="h-6 w-full"></div>
          {products.map((item, index) => {
            const showChildren = index === activeIndex ? true : false;
            return (
              <Accordion
                key={index}
                item={item}
                index={index}
                isOpen={showChildren}
                z_index={index * 10}
                handleHeader={() => setActiveIndex(index)}
                handleInfoBlock={(value) => setInfoBlockToggle(value)}
              />
            );
          })}
        </LeftSide>
        <RightSide>
          <h1>Calendar for {query_params.productID}</h1>
        </RightSide>
        <InfoBlock
          open={infoBlockToggle}
          handleInfoBlock={() => setInfoBlockToggle(false)}
        >
          {productItem && <ProductInfo item={productItem} />}
          <Button />
        </InfoBlock>
      </PageWrapper>
    </>
  );
};

Organic.getInitialProps = async ({ query }) => {
  const query_params = query;
  return { query_params };
};

export default Organic;
