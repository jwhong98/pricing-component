import React from "react";
import {
  CardContainer,
  CardTitle,
  Span,
  CardPrice,
  CardMenu,
  MenuItem,
  CardButton,
} from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <CardTitle>Type</CardTitle>
      <CardPrice>
        <Span>$</Span>19.99
      </CardPrice>
      <CardMenu>
        <MenuItem>storage</MenuItem>
        <MenuItem>users allowed</MenuItem>
        <MenuItem>send up to</MenuItem>
      </CardMenu>
      <CardButton>learn more</CardButton>
    </CardContainer>
  );
};

export default Card;
