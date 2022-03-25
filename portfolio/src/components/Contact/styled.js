import styled from "styled-components";
import { primary, secondary, whiteText } from "../../constants/colors";

export const Main = styled.div`
  margin-top: 1vh;
  min-height: 60vh;
  height: fit-content;
  background-color: ${secondary};
  display: grid;
  grid-template-rows: 3fr, 1fr, 1fr;
  color: ${whiteText};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 15% 0 15%;
`;

export const Img = styled.img`
  width: 140px;
  height: 140px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-evenly;
  padding-left: 5vw;

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

export const Title = styled.span`
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -0.25px;
`;

export const Text = styled.span`
  font-size: 18px;
  letter-spacing: -0.24px;
`;

export const SocialMediaContainer = styled.div`
  width: 300px;
  align-self: center;
  justify-self: center;
`;

export const Footer = styled.div`
  background-color: ${primary};
  width: 100vw;
  padding: 2vh 0 0 2vw;
`;
