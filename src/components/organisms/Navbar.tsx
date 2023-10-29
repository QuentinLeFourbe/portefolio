import React from "react";
import { css } from "../../../styled-system/css";
import { Link } from "react-router-dom";
import DocumentMagnify from "../../assets/icons/document-magnify.svg?react";
import Fingerprint from "../../assets/icons/fingerprint.svg?react";
import PaperAirplane from "../../assets/icons/paper-airplane.svg?react";
import ServerStack from "../../assets/icons/server-stack.svg?react";

function Navbar() {
  return (
    <nav className={styles}>
      <Link to="/" className={bubble}>
        <Fingerprint className={icon} />
      </Link>
      <div className="line"></div>
      <Link to="/projects" className={bubble}>
        <ServerStack className={icon} />
      </Link>
      <div className="line"></div>
      <Link to="/contact" className={bubble}>
        <PaperAirplane className={icon} />
      </Link>
      <div className="line"></div>
      <Link to="/curriculum" className={bubble}>
        <DocumentMagnify className={icon} />
      </Link>
    </nav>
  );
}

export default Navbar;

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
  width: "100px",
  height: "100px",
  textAlign: "center",
});

const icon = css({
  height: "50px",
  width: "50px",
  color: "navbar.text",
});

const styles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10vh 5vw 10vh 5vw",
  minHeight: "500px",

  "& .line": {
    width: "2px",
    flexGrow: 1,
    margin: "5px 0 ",
    borderStyle: "none none none dotted",
    borderColor: "navbar.dot",
    borderWidth: "5px",
  },

  // Styles pour la dernière bulle
  "& .bubble:last-child": {
    marginBottom: "10px", // Espacement entre la dernière bulle et le bas
  },
});
