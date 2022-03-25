import styled from "styled-components";
import {
  dark,
  primary,
  primaryLight,
  secondary,
  tertiary,
  whiteText,
} from "../../constants/colors";

export const Main = styled.div`
  width: 100vw;
  min-height: fit-content;
  display: grid;
  grid-template-rows: 0.5fr repeat(3, 4fr) 0.5fr;
  color: ${whiteText};
  overflow: hidden;

  @media screen and (max-width: 520px) {
    justify-content: center;
  }
`;

export const PageTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.15px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 1vh;
  padding-bottom: 1vh;
  padding-top: 2vh;
`;

export const ProjectRow = styled.div`
  display: flex;
  padding: 0 10% 0 10%;
  background-color: ${(props) => {
    switch (props.color) {
      case "dark":
        return dark;
      case "primary":
        return primary;
      case "primaryLight":
        return primaryLight;
      case "secondary":
        return secondary;
      case "tertiary":
        return tertiary;
      default:
        return;
    }
  }};

  @media screen and (max-width: 520px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    margin-top: 2vh;
  }
`;

export const Img = styled.img`
  width: 160px;
  height: 140px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 70%;
  justify-content: space-around;

  @media screen and (max-width: 520px) {
    width: 100%;
    margin-left: 2vw;
    text-align: inherit;
  }
`;

export const Title = styled.span`
  font-size: 38px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #fff;
`;

export const Stack = styled.span`
  font-size: 19px;
  letter-spacing: -0.28px;
  color: #fff;
`;

export const Details = styled.span`
  font-size: 12px;
  letter-spacing: -0.16px;
`;

export const ButtonContainer = styled.div`
  background-color: ${primary};
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonMore = styled.button`
  background: none;
  border: none;
  color: ${whiteText};
  cursor: pointer;

  :hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;
export const GitButtonContainer = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;
  margin-top: 2vh;
  white-space: nowrap;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    width: 150px;
    align-self: center;
  }
`;
export const ButtonGit = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: ${(props) => {
    switch (props.color) {
      case "dark":
        return dark;
      case "primary":
        return primary;
      case "primaryLight":
        return primaryLight;
      case "secondary":
        return secondary;
      case "tertiary":
        return tertiary;
      default:
        return;
    }
  }};
  color: ${(props) => {
    switch (props.fontcolor) {
      case "black":
        return "black";
      case "white":
        return whiteText;
      default:
        return;
    }
  }};

  @media screen and (max-width: 520px) {
    margin-bottom: 1vh;
  }
`;
