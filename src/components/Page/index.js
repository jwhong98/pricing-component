import React from "react";
import Card from "../Card";
import { planOne, planThree, planTwo } from "./data";
import { PageContainer, PageTitle, PlanOptions, Option } from "./PageElements";
import Switch from "@mui/material/Switch";

const Page = () => {
  return (
    <PageContainer>
      <PageTitle>our pricing</PageTitle>
      <PlanOptions>
        <Option>annually</Option>
        <Switch />
        <Option>monthly</Option>
      </PlanOptions>
      <Card {...planOne} />
      <Card {...planTwo} />
      <Card {...planThree} />
    </PageContainer>
  );
};

export default Page;
