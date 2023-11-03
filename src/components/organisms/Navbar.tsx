import React, { useEffect } from "react";
import { css, cx } from "../../../styled-system/css";
import { Link, useLocation } from "react-router-dom";
import DocumentMagnify from "../../assets/icons/document-magnify.svg?react";
import Fingerprint from "../../assets/icons/fingerprint.svg?react";
import PaperAirplane from "../../assets/icons/paper-airplane.svg?react";
import ServerStack from "../../assets/icons/server-stack.svg?react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className={container}>
      <Link
        to="/"
        className={cx(
          bubble,
          location.pathname === "/" ? activeBubble : inactiveBubble
        )}
      >
        <Fingerprint className={icon} />
      </Link>
      <div className="line"></div>
      <Link
        to="/projects"
        className={cx(
          bubble,
          location.pathname === "/projects" ? activeBubble : inactiveBubble
        )}
      >
        <ServerStack className={icon} />
      </Link>
      <div className="line"></div>
      <Link
        to="/contact"
        className={cx(
          bubble,
          location.pathname === "/contact" ? activeBubble : inactiveBubble
        )}
      >
        <PaperAirplane className={icon} />
      </Link>
    </nav>
  );
}

export default Navbar;

const activeBubble = css({
  width: "100px",
  height: "100px",
  opacity: 1,

  "& svg": {
    height: "50px",
    width: "50px",
  },
});

const inactiveBubble = css({
  width: "75px",
  height: "75px",
  opacity: 0.5,
});

const bubble = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "navbar.background",
  color: "text.primary",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "navbar.border",

  borderRadius: "50%",

  textAlign: "center",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    transform: "scale(1.1)",
    opacity: 1,
  },
  "&:focus": {
    transform: "scale(1.1)",
    opacity: 1,
  },
});

const icon = css({
  height: "32px",
  width: "32px",
  color: "navbar.text",
  transition: "all 0.2s ease-in-out",
});

const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10vh 5vw 10vh 5vw",
  minHeight: "500px",
  width: "200px",
  "& .line": {
    flexGrow: 1,
    width: "1px",
    margin: "12px 0 ",
    borderStyle: "none none none dotted",
    borderColor: "navbar.dot",
    borderWidth: "3px",
    opacity: 0.5,
  },
});
