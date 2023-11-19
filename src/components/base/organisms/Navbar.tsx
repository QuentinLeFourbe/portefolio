import { css } from "../../../../styled-system/css";
import { Link, useLocation } from "react-router-dom";
import Fingerprint from "../../../assets/icons/fingerprint.svg?react";
import PaperAirplane from "../../../assets/icons/paper-airplane.svg?react";
import ServerStack from "../../../assets/icons/server-stack.svg?react";
import DarkModeButton from "../atoms/DarkModeButton";
import LanguageButton from "../atoms/LanguageButton";

type NavbarProps = {
  darkMode?: boolean;
  onSwitchMode?: () => void;
};

function Navbar({ darkMode, onSwitchMode }: NavbarProps) {
  const location = useLocation();

  return (
    <nav className={container}>
      <LanguageButton className={languageButton} />
      <div className={bubbleContainer}>
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
      </div>
      <DarkModeButton
        darkMode={darkMode}
        onClick={onSwitchMode}
        className={darkModeButton}
      />
    </nav>
  );
}

export default Navbar;

const container = css({
  position: { base: "sticky", lg: "fixed" },
  top: 0,
  left: 0,
  // transform: "translate(0, -50%)",
  display: "flex",
  flexFlow: { base: "row nowrap", lg: "column nowrap" },
  alignItems: "center",
  justifyContent: "space-between",
  height: { base: "100px", lg: "100vh" },
  width: { base: "100vw", lg: "200px" },
  zIndex: 100,
  padding: { base: "0 12px", sm: "0 24px", lg: "24px 0" },
  gap: { base: "32px", md: "32px", lg: "64px" },

  base: {
    "&:before": {
      zIndex: -1,
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "background.primary",
      opacity: 0.95,
    },
  },
  lg: {
    "&:before": {
      display: "none",
    },
  },
});

const bubbleContainer = css({
  display: "flex",
  flexFlow: { base: "row nowrap", lg: "column nowrap" },
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,

  "& .line": {
    flexGrow: 1,
    width: { base: "auto", lg: "1px" },
    height: { base: "1px", lg: "auto" },
    maxHeight: "150px",
    maxWidth: "150px",
    margin: "12px 12px ",
    borderStyle: "none none dotted dotted",
    borderColor: "navbar.dot",
    borderWidth: "3px",
    opacity: 0.5,
    zIndex: -1,
  },
});

const bubble = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "navbar.border",
  borderRadius: "50%",

  width: { base: "50px", lg: "75px" },
  height: { base: "50px", lg: "75px" },

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

const darkModeButton = css({
  // margin: { base: "0 0 0 auto", lg: "auto 0 0 0" },
});

const languageButton = css({
  // margin: { base: "0 auto 0 0", lg: "0 0 auto 0" },
});
