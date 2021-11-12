import styled from "styled-components";
import {
  primary,
  primaryLight,
  secondary,
  tertiary,
} from "../../constants/colors";

export const Main = styled.div`
  margin-top: 1vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Top = styled.div`
  background-color: ${secondary};
  height: 49.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 25px;
  letter-spacing: -0.15px;
  text-align: center;
  margin-top: 3vh;
`;

export const Stack = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  justify-content: space-around;
`;

export const SkillTitle = styled.div`
  font-size: 55px;
  font-weight: bold;
  letter-spacing: -0.32px;

  @media screen and (max-width: 872px) {
    font-size: 42px;
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
  grid-template-columns: repeat(3, 1fr);
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
  grid-template-rows: 0.5fr 1fr 4fr;
`;

export const TitleEducation = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 2vh;
`;

export const EducationName = styled.div`
  font-size: 21px;
  font-weight: bold;
  grid-row: 2/3;
  margin: 3vh 2vw 0 2vw;
`;

export const EducationDescription = styled.p`
  grid-row: 3/4;
  margin: 0 2vw 0 2vw;
  font-size: 14px;
  letter-spacing: -0.16px;
`;
