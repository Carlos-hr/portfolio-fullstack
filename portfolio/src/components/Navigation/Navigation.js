import React from "react";
import { NavBar, ListItem, Link } from "./styled";

const Navigation = () => {
  return (
    <NavBar>
      <ListItem>
        <Link rel="noreferrer" href="#about">
          quem sou
        </Link>
      </ListItem>
      <ListItem>
        <Link rel="noreferrer" href="#skills">
          conhecimentos
        </Link>
      </ListItem>
      <ListItem>
        <Link rel="noreferrer" href="#projects">
          projetos
        </Link>
      </ListItem>
      <ListItem>
        <Link rel="noreferrer" href="#contact">
          contato
        </Link>
      </ListItem>
    </NavBar>
  );
};

export default Navigation;
