import styled from "styled-components";
import { whiteText } from "../../constants/colors";

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 2vw;
  font-size: 16px;
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${whiteText};
`;
