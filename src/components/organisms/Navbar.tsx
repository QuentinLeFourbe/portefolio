import { css } from "../../../styled-system/css";
import { Link, useLocation } from "react-router-dom";
import Fingerprint from "../../assets/icons/fingerprint.svg?react";
import PaperAirplane from "../../assets/icons/paper-airplane.svg?react";
import ServerStack from "../../assets/icons/server-stack.svg?react";

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
    transition: "all 0.2s ease-in-out",
  },
};

const activeBubble = css(bubble, {
  transform: "scale(1.2)",
  opacity: 1,
  backgroundColor: "navbar.background.active",

  "& svg": {
    height: "40px",
    width: "40px",
    color: "navbar.text.active",
  },
});

const inactiveBubble = css(bubble, {
  opacity: 0.5,
  backgroundColor: "navbar.background.inactive",
  color: "navbar.text.inactive",

  "&:hover": {
    transform: "scale(1.2)",
    backgroundColor: "navbar.background.active",
    "& svg": {
      height: "40px",
      width: "40px",
      color: "navbar.text.active",
    },
  },

  "&:focus": {
    transform: "scale(1.2)",
    backgroundColor: "navbar.background.active",
    "& svg": {
      height: "40px",
      width: "40px",
      color: "navbar.text.active",
    },
  },
});

const container = css({
  position: "fixed",
  top: "50%",
  transform: "translate(0, -50%)",
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "200px",

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
