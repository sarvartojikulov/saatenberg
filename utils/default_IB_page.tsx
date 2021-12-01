import classNames from "classnames";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useState } from "react";
import Accordion from "../components/Accordion";
import InfoBlock from "../components/InfoBlock";
import LeftSide from "../components/PageWrapper/LeftSide";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import RightSide from "../components/PageWrapper/RightSide";
interface organicProps {
  itemId?: any;
}

const Organic: NextPage<organicProps> = ({ itemId }) => {
  const [tempToggle, setTempToggle] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <PageWrapper>
        <LeftSide>{/* LEFT SIDE CONTENT */}</LeftSide>
        <RightSide>{/* RIGHT SIDE CONTENT */}</RightSide>
        <InfoBlock
          open={tempToggle}
          handleInfoBlock={() => setTempToggle(!tempToggle)}
        >
          {/* MODAL PAGE CONTENT */}
        </InfoBlock>
      </PageWrapper>
    </>
  );
};

Organic.getInitialProps = async ({ query }) => {
  const itemId = query.itemID;
  return { itemId };
};

export default Organic;
