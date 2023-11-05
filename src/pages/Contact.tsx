import React from "react";
import { css } from "../../styled-system/css";
import Button from "../components/atoms/Button";
import MaltIcon from "../assets/icons/malt.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import CVIcon from "../assets/icons/cv.svg?react";

function Contact() {
  const [isButtonsHovered, setIsButtonsHovered] = React.useState(false);

  return (
    <div className={container}>
      <div className={css(buttonContainer)}>
        <Button
          onMouseEnter={() => setIsButtonsHovered(true)}
          onMouseLeave={() => setIsButtonsHovered(false)}
        >
          Contactez-moi
        </Button>
        <Button
          variant="secondary"
          className={cvButton}
          onMouseEnter={() => setIsButtonsHovered(true)}
          onMouseLeave={() => setIsButtonsHovered(false)}
        >
          <CVIcon />
        </Button>
        <div
          className={isButtonsHovered ? firstBorderBoxHover : firstBorderBox}
        />
        <div
          className={isButtonsHovered ? secondBorderBoxHover : secondBorderBox}
        />
      </div>
      <div className={css(linksContainer)}>
        <Button
          variant="rounded"
          href="https://www.linkedin.com/in/quentin-garcia-9862b1146/"
          target="_blank"
        >
          <LinkedInIcon />
        </Button>
        <Button
          variant="rounded"
          href="https://www.malt.fr/profile/quentingarcia2"
          target="_blank"
        >
          <MaltIcon />
        </Button>
        <Button
          variant="rounded"
          href="https://github.com/QuentinLeFourbe"
          target="_blank"
        >
          <GithubIcon />
        </Button>
      </div>
    </div>
  );
}

export default Contact;

const baseBorderBox = {
  position: "absolute",
  borderWidth: "1px ",
  borderStyle: "solid",
  transition: "all 0.3s ease-in-out",
};

const firstBorderBoxBase = { borderColor: "greyGold.600", zIndex: -1 };

const secondBorderBoxBase = { borderColor: "greyGold.400", zIndex: -1 };

const firstBorderBox = css(baseBorderBox, firstBorderBoxBase, {
  top: "-35%",
  right: "-5%",
  width: "60%",
  height: "100%",
});
const secondBorderBox = css(baseBorderBox, secondBorderBoxBase, {
  top: "35%",
  left: "-7.5%",
  width: "20%",
  height: "100%",
});

const firstBorderBoxHover = css(baseBorderBox, firstBorderBoxBase, {
  top: "-37%",
  right: "-7%",
  width: "100%",
  height: "100%",
});
const secondBorderBoxHover = css(baseBorderBox, secondBorderBoxBase, {
  top: "37%",
  left: "-9.5%",
  width: "100%",
  height: "100%",
});

const cvButton = css({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  "& svg": {
    width: "5rem",
    height: "auto",
  },
});

const container = css({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  height: "100%",
  width: "100%",
  gap: "64px",
  padding: "10% 10% 5% 10%",
});

const buttonContainer = {
  marginTop: "auto",
  display: "flex",
  flexFlow: "row nowrap",
  position: "relative",
  gap: "32px",
};

const linksContainer = {
  marginTop: "auto",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",

  "& svg": {
    width: "100%",
    height: "100%",
  },
};
