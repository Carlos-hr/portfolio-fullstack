import {
  Bottom,
  Container,
  Description,
  EducationDescription,
  EducationName,
  Main,
  SkillContainer,
  SkillTitle,
  Stack,
  Title,
  TitleEducation,
  Top,
} from "./styled";

const Skills = () => {
  return (
    <Main id="skills">
      <Top>
        <Title>Meus conhecimentos</Title>
        <Stack>
          <Container>
            <SkillTitle>Front-end</SkillTitle>
            <Description>
              Desenvolvimento de aplicações web utilizando HTML, CSS e
              JavaScript.
            </Description>
            <Description>
              Criação de sites responsivos seguindo princípio de Mobile First.
            </Description>
          </Container>

          <Container>
            <SkillTitle>Back-end</SkillTitle>
            <Description>
              Aplicações utilizando NodeJS, Typescript e MySQL.
            </Description>
            <Description>
              Criação de API´s para comunicação com front-end seguindo princípio
              de Clean Code.
            </Description>
          </Container>
        </Stack>
      </Top>
      <TitleEducation>Educação</TitleEducation>
      <Bottom>
        <SkillContainer color="primary">
          <EducationName>Graduação em Engenharia Elétrica</EducationName>
          <EducationDescription>
            6 meses - 2020
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </EducationDescription>
        </SkillContainer>

        <SkillContainer color="primaryLight">
          <EducationName>Curso de Web Full Stack na Labenu</EducationName>
          <EducationDescription>
            6 meses - 2020
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </EducationDescription>
        </SkillContainer>
      </Bottom>
    </Main>
  );
};

export default Skills;
