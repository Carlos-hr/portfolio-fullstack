import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 2vw;
  justify-content: space-between;
  flex-direction: ${(props) => {
    switch (props.direction) {
      case "column":
        return "column";
      case "row":
        return "row";
      default:
        return;
    }
  }};
  margin-top: ${(props) => props.mt};
  height: 40%;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 80%;
    margin-top: 10%;
  }
`;
export const Link = styled.a`
  cursor: pointer;
`;
