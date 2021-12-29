import React from "react";
import Card from "../Card";
import {
  PageContainer,
  PageTitle,
  PlanOptions,
  Option,
  Switch,
} from "./PageElements";

const Page = () => {
  return (
    <PageContainer>
      <PageTitle>our pricing</PageTitle>
      <PlanOptions>
        <Option></Option>
        <Switch></Switch>
        <Option></Option>
      </PlanOptions>
      <Card />
    </PageContainer>
  );
};

export default Page;