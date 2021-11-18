import styled from "styled-components";

export const HeaderBox = styled.header`
  width: 100%;
  height: 80px;
  background-color: plum;
  margin-bottom: 20px;

  .gnb_box {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        padding: 10px 15px;

        a {
          font-size: 16px;
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;
