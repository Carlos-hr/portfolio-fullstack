import React from "react";
import LinkedinIcon from "../../assets/Icons/LinkedinIcon";
import WhatsappIcon from "../../assets/Icons/WhatsappIcon";
import GithubIcon from "../../assets/Icons/GithubIcon";
import InstagramIcon from "../../assets/Icons/InstagramIcon";
import { Link, Main } from "./styled";

const SocialMedia = (props) => {
  const {direction, mt} = props
  return (
    <Main direction={direction} mt={mt}>
      <Link
        rel="noreferrer"
        href="https://www.linkedin.com/in/carloshenrique-rodrigues/"
        target="_blank"
      >
        <LinkedinIcon />
      </Link>
      <Link rel="noreferrer">
        <WhatsappIcon />
      </Link>
      <Link
        rel="noreferrer"
        href="https://github.com/Carlos-hr"
        target="_blank"
      >
        <GithubIcon />
      </Link>
      <Link rel="noreferrer">
        <InstagramIcon />
      </Link>
    </Main>
  );
};

export default SocialMedia;
