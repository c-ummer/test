import React from "react";
import { MainContaner, SubBox } from "./styles";

const MainPage = () => {
  return (
    <>
      <MainContaner>
        <div className="box">box</div>
      </MainContaner>

      <SubBox>
        <div className="box">box2</div>
      </SubBox>
    </>
  );
};

export default MainPage;
