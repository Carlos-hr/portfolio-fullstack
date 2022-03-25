import styled from "styled-components";
import {
  primary,
  primaryLight,
  secondary,
  tertiary,
} from "../../constants/colors";

export const Main = styled.div`
  margin-top: 1vh;
  height: 120vh;
  display: flex;
  flex-direction: column;
  color: white;
  @media screen and (max-width: 425px) {
    margin: 0;
  }
`;

export const Top = styled.div`
  background-color: ${secondary};
  height: 49.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3vh;
`;

export const Title = styled.div`
  font-size: 25px;
  letter-spacing: -0.15px;
  text-align: center;
  margin-top: 2vh;
`;

export const Stack = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  justify-content: space-around;

  @media screen and (max-width: 425px) {
    width: 90%;
    height: 90%;
  }
`;

export const SkillTitle = styled.div`
  font-size: 55px;
  font-weight: bold;
  letter-spacing: -0.32px;

  @media screen and (max-width: 872px) {
    font-size: 38px;
  }
`;
export const Container = styled.div`
  width: 30%;
`;

export const Description = styled.p`
  font-size: 16px;
  letter-spacing: -0.22px;
`;
export const Bottom = styled.div`
  height: 49.5%;
  margin-top: 1%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1vw;
  overflow: hidden;
`;

export const SkillContainer = styled.div`
  background-color: ${(props) => {
    switch (props.color) {
      case "primary":
        return primary;
      case "primaryLight":
        return primaryLight;
      case "tertiary":
        return tertiary;
      default:
        return;
    }
  }};
  display: grid;
  grid-template-rows: 1fr 8fr;
`;

export const TitleEducation = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const EducationName = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin: 2vh 2vw 0 2vw;
`;

export const EducationDescription = styled.p`
  margin: 0 2vw 0 2vw;
  font-size: 14px;
  letter-spacing: -0.16px;
`;
