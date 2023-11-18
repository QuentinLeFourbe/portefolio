import SunIcon from "../../assets/icons/sun.svg?react";
import MoonIcon from "../../assets/icons/moon.svg?react";
import { css, cx } from "../../../styled-system/css";
import { ComponentProps } from "react";

type DarkModeButtonProps = ComponentProps<"button"> & {
  mode: "light" | "dark";
  onClick: () => void;
};

function DarkModeButton({
  mode,
  onClick,
  className,
  ...props
}: DarkModeButtonProps) {
  return (
    <button {...props} onClick={onClick} className={cx(buttonStyle, className)}>
      {mode === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default DarkModeButton;

const buttonStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "buttons.secondary.background.base",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  color: "buttons.secondary.text.base",
  padding: "8px",
  "&:hover": {
    backgroundColor: "buttons.secondary.background.hover",
    color: "buttons.secondary.text.hover",
  },
  "&:focus": {
    outline: "none",
  },

  "& svg": {
    width: "100%",
    height: "100%",
  },
});
