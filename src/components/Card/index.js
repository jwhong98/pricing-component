import React from "react";
import {
  CardContainer,
  CardTitle,
  PriceWrap,
  Span,
  CardPrice,
  CardMenu,
  MenuItem,
  CardButton,
} from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer dark={props.dark}>
      <CardTitle dark={props.dark}>{props.type}</CardTitle>
      <PriceWrap dark={props.dark}>
        <Span>$</Span>
        <CardPrice>{props.price}</CardPrice>
      </PriceWrap>
      <CardMenu dark={props.dark}>
        <MenuItem>{props.storage} storage</MenuItem>
        <MenuItem>{props.users} users allowed</MenuItem>
        <MenuItem>send up to {props.send} GB</MenuItem>
      </CardMenu>
      <CardButton dark={props.dark}>learn more</CardButton>
    </CardContainer>
  );
};

export default Card;
