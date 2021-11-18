import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { CardBox } from "../../components/Card/styles";
import { MainContaner, SubBox, ButtonBox } from "./styles";

const MainPage = () => {
  return (
    <>
      <ButtonBox>
        <Button type="button">123</Button>
      </ButtonBox>
      <ButtonBox>
        <Button type="submit" color="#ddd">
          123
        </Button>
      </ButtonBox>
      <ButtonBox>
        <Button text="text">123</Button>
      </ButtonBox>
      <Card bg="green" radius='30px'>12131231</Card>
    </>
  );
};

export default MainPage;
