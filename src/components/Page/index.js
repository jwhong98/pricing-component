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
        <Option>annually</Option>
        <Switch></Switch>
        <Option>monthly</Option>
      </PlanOptions>
      <Card />
      <Card />
      <Card />
    </PageContainer>
  );
};

export default Page;
