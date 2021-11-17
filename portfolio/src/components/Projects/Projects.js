import React from "react";
import {
  ButtonMore,
  ButtonContainer,
  Description,
  Details,
  Container,
  Img,
  Main,
  PageTitle,
  ProjectRow,
  Stack,
  Title,
  ButtonGit,
  GitButtonContainer,
} from "./styled";
import brainn from "../../assets/images/project-brainn.png";
import cubo from "../../assets/images/project-cubo.png";
import promobit from "../../assets/images/project-promobit.png";

const Projects = () => {
  return (
    <Main id="projects">
      <PageTitle> Meus Projetos</PageTitle>

      <ProjectRow color="dark">
        <Container>
          <a
            href="https://case-cubo-network.surge.sh"
            target="_blank"
            rel="noreferrer"
          >
            <Img alt="project" width="180" height="130" src={cubo} />
          </a>

          <Description>
            <Title>Cubo Network</Title>
            <Stack>Full Stack</Stack>
            <Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </Details>
            <GitButtonContainer>
              <a
                href="https://github.com/Carlos-hr/cubo-network/tree/main/frontend"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonGit color="tertiary" fontcolor="black">
                  Front-end GitHub
                </ButtonGit>
              </a>

              <a
                href="https://github.com/Carlos-hr/cubo-network/tree/main/backend"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonGit color="tertiary" fontcolor="black">
                  Back-end GitHub
                </ButtonGit>
              </a>
            </GitButtonContainer>
          </Description>
        </Container>
      </ProjectRow>

      <ProjectRow color="secondary">
        <Container>
          <a
            href="https://case-promobit.surge.sh"
            target="_blank"
            rel="noreferrer"
          >
            <Img alt="project" width="180" height="130" src={promobit} />
          </a>

          <Description>
            <Title>Promobit</Title>
            <Stack>Front-end</Stack>
            <Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </Details>
            <GitButtonContainer>
              <a
                href="https://github.com/Carlos-hr/case-promobit"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonGit color="dark" fontcolor="white">
                  Ver no GitHub
                </ButtonGit>
              </a>
            </GitButtonContainer>
          </Description>
        </Container>
      </ProjectRow>

      <ProjectRow color="primaryLight">
        <Container>
          <a
            href="https://case-brainn.surge.sh"
            target="_blank"
            rel="noreferrer"
          >
            <Img alt="project" width="180" height="120" src={brainn} />
          </a>

          <Description>
            <Title>BrainnCo</Title>
            <Stack>Front-end</Stack>
            <Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </Details>
            <GitButtonContainer>
              <a
                href="https://github.com/Carlos-hr/BrainnCo"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonGit color="tertiary" fontcolor="black">
                  Ver no GitHub
                </ButtonGit>
              </a>
            </GitButtonContainer>
          </Description>
        </Container>
      </ProjectRow>

      <ButtonContainer>
        <ButtonMore>mais projetos</ButtonMore>
      </ButtonContainer>
    </Main>
  );
};

export default Projects;
