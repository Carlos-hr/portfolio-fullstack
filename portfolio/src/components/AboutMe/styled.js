import styled from "styled-components";
import { dark, tertiary, whiteText } from "../../constants/colors";
import profilePicture from "../../assets/images/profile-picture.png";

export const Main = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LeftSide = styled.div`
  background-color: ${dark};
  width: 49.5%;
  color: ${whiteText};
`;

export const Name = styled.div`
  margin: 2vw;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.28px;
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 10%;
  margin-top: 10%;
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const Job = styled.div`
  font-size: 24px;
`;

export const ShorText = styled.div`
  margin-top: 1vh;
  font-size: 16px;
`;

export const About = styled.p`
  font-size: 12px;
  font-weight: normal;
  text-align: justify;
`;

export const Skills = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 5vh;
  margin-left: -2vw;
`;

export const Skill = styled.span`
  border-left: 2px solid white;
  padding-left: 0.5vw;
  margin-left: 2vw;
`;

export const Button = styled.button`
  background-color: ${tertiary};
  border: none;
  width: 140px;
  height: 30px;
  margin: 32px 12px 0 1px;
  padding: 5px 30px 7px 31px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const RightSide = styled.div`
  width: 49.5%;
  margin-left: 1%;
  background-color: black;
  background-image: url(${profilePicture});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
`;
