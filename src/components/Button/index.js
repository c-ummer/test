import React from "react";
import { ButtonTag } from "./styles";

const Button = ({ children, type, text, color }) => {
  return (
    <>
      <ButtonTag type={type} color={color}>
        <div className="text1">{children}</div>
        {text ? (
          <div className="text2">{text}</div>
        ) : (
          <div>고정텍스트입니다.</div>
        )}
      </ButtonTag>
    </>
  );
};

export default Button;
