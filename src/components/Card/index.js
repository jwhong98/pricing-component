import React from "react";
import {
  CardContainer,
  CardTitle,
  CardPrice,
  CardMenu,
  MenuItem,
  CardButton,
} from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <CardTitle>Type</CardTitle>
      <CardPrice>$</CardPrice>
      <CardMenu>
        <MenuItem>storage</MenuItem>
        <MenuItem>users allowed</MenuItem>
        <MenuItem>send up to</MenuItem>
      </CardMenu>
      <CardButton></CardButton>
    </CardContainer>
  );
};

export default Card;
