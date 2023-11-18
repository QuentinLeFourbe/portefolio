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
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "greyGold.200",
  },
  "&:focus": {
    outline: "none",
  },
});
