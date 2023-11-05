import { css } from "../../../styled-system/css";
import { Link, useLocation } from "react-router-dom";
import Fingerprint from "../../assets/icons/fingerprint.svg?react";
import PaperAirplane from "../../assets/icons/paper-airplane.svg?react";
import ServerStack from "../../assets/icons/server-stack.svg?react";
import { SystemStyleObject } from "@pandacss/dev";

function Navbar() {
  const location = useLocation();

  return (
    <nav className={container}>
      <Link
        to="/"
        className={location.pathname === "/" ? activeBubble : inactiveBubble}
      >
        <Fingerprint />
      </Link>
      <div className="line"></div>
      <Link
        to="/projects"
        className={
          location.pathname === "/projects" ? activeBubble : inactiveBubble
        }
      >
        <ServerStack />
      </Link>
      <div className="line"></div>
      <Link
        to="/contact"
        className={
          location.pathname === "/contact" ? activeBubble : inactiveBubble
        }
      >
        <PaperAirplane />
      </Link>
    </nav>
  );
}

export default Navbar;

const bubble = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "navbar.background",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "navbar.border",
  borderRadius: "50%",

  width: "75px",
  height: "75px",

  textAlign: "center",

  transition: "all 0.2s ease-in-out",

  "& svg": {
    height: "32px",
    width: "32px",
    color: "navbar.text",
    transition: "all 0.2s ease-in-out",
  },
} as SystemStyleObject;

const activeBubble = css(bubble, {
  transform: "scale(1.2)",
  opacity: 1,
  backgroundColor: "navbar.text",

  "& svg": {
    height: "40px",
    width: "40px",
    color: "greyGold.50",
  },
});

const inactiveBubble = css(bubble, {
  opacity: 0.5,

  "&:hover": {
    transform: "scale(1.2)",
    backgroundColor: "navbar.text",
    "& svg": {
      height: "40px",
      width: "40px",
      color: "greyGold.50",
    },
  },

  "&:focus": {
    transform: "scale(1.2)",
    backgroundColor: "navbar.text",
    "& svg": {
      height: "40px",
      width: "40px",
      color: "greyGold.50",
    },
  },
});

const container = css({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "500px",
  width: "200px",
  margin: "5vh 0",

  "& .line": {
    flexGrow: 1,
    width: "1px",
    maxHeight: "150px",
    margin: "12px 0 ",
    borderStyle: "none none none dotted",
    borderColor: "navbar.dot",
    borderWidth: "3px",
    opacity: 0.5,
    zIndex: -1,
  },
});
