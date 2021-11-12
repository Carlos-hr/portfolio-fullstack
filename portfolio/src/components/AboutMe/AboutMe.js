import React from "react";
import Navigation from "../Navigation/Navigation";
import SocialMedia from "../SocialMedia/SocialMedia";
import {
  LeftSide,
  Main,
  RightSide,
  Content,
  Title,
  Job,
  ShorText,
  About,
  Skills,
  Skill,
  Button,
  Name,
  Link,
} from "./styled";
import resume from '../../assets/resume.pdf'

const AboutMe = () => {
  const blob = new Blob([resume], {type: 'application/pdf'})
  const url = URL.createObjectURL(blob)
  return (
    <Main id="about">
      <LeftSide>
        <Name>Carlos Henrique</Name>
        <Content>
          <div>
            <Title className="title">
              Eu sou
              <br />
              Carlos Henrique
            </Title>

            <Job className="job">Desenvolvedor Web Full Stack</Job>
            <ShorText className="short-text">
              Apaixonado por tecnologia e programação.
            </ShorText>
          </div>
          <div>
            <About className="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </About>

            <Skills>
              <Skill>HTML</Skill>
              <Skill>CSS</Skill>
              <Skill>Javascript</Skill>
              <Skill>React</Skill>
              <Skill>NodeJs</Skill>
              <Skill>MySQL</Skill>
            </Skills>
          </div>
          <div>
            <Button>
              <Link href={resume} download={url} rel="noreferrer">
                CV em PDF
              </Link>
            </Button>
          </div>
        </Content>
      </LeftSide>
      <RightSide>
        <SocialMedia direction={"column"} mt="20%" />
      </RightSide>
    </Main>
  );
};

export default AboutMe;
