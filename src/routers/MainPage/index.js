import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { CardBox } from "../../components/Card/styles";

import { MainContaner, SubBox, ButtonBox, HeaderBox } from "./styles";

const MainPage = () => {
  return (
    <>
      <Header />

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
      <Card bg="green" radius="30px">
        12131231
      </Card>
    </>
  );
};

export default MainPage;
