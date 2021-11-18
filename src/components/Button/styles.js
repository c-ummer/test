import styled from "styled-components";

export const ButtonTag = styled.button`
  border: none;
  margin: 0;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${(props) => (props.color ? props.color : "pink")};
  color: #fff;

  .text1 {
    width: 100px;
    height: 20px;
    padding: 5px;
    background-color: #ccc;
  }

  .text2 {
    margin-top: 10px;
    width: 100px;
    height: 20px;
    padding: 5px;
    background-color: #666;
  }
`;
