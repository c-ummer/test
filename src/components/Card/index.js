import React from "react";
import { CardBox } from "./styles";

const Card = ({ children, bg, radius }) => {
  return (
    <>
      <CardBox bg={bg} radius={radius}>
        {children}
      </CardBox>
    </>
  );
};

export default Card;
