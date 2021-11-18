import React from "react";
import { HeaderBox } from "./styles";

const Header = () => {
  return (
    <>
      <HeaderBox>
        <div className="gnb_box">
          <ul>
            <li>
              <a href="#!">hand cream</a>
            </li>
            <li>
              <a href="#!">body lotion</a>
            </li>
            <li>
              <a href="#!">body wash</a>
            </li>
            <li>
              <a href="#!">hand cleaner</a>
            </li>
          </ul>
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
