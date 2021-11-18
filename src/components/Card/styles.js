import styled from "styled-components";

export const CardBox = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${(props) => (props.bg ? props.bg : "blue")};
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  padding: 1rem;
  box-sizing: border-box;
`;
