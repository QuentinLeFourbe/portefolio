import React from "react";
import type { ComponentProps } from "react";
import { css, cx } from "../../../styled-system/css";
import { ClickablePrimitive } from "./Primitives/ClickablePrimitive";

type ButtonProps = ComponentProps<typeof ClickablePrimitive> & {
  variant?: "primary" | "secondary" | "rounded";
};

function Button({ variant = "primary", ...props }: ButtonProps) {
  let style;

  switch (variant) {
    case "primary":
      style = primaryStyle;
      break;
    case "secondary":
      style = secondaryStyle;
      break;
    case "rounded":
      style = roundedStyle;
      break;
    default:
      break;
  }

  return (
    <ClickablePrimitive {...props} className={cx(style, props.className)} />
  );
}

export default Button;

const buttonPrimarySize = {
  fontSize: "3rem",
  cursor: "pointer",
  fontFamily: "title",
};

const primaryStyle = css(buttonPrimarySize, {
  backgroundColor: "greyGold.400",
  color: "cream",
  fontWeight: "bold",
  padding: "1rem 4rem",
  "&:hover": {
    backgroundColor: "red",
  },
});

const secondaryStyle = css(buttonPrimarySize, {
  backgroundColor: "greyGold.300",
  color: "greyGold.900",
  fontWeight: "bold",
  padding: "16px 16px",
  "&:hover": {
    backgroundColor: "greyGold.600",
  },
});

const roundedStyle = css({
  backgroundColor: "greyGold.200",
  color: "greyGold.900",
  borderColor: "greyGold.300",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "full",
  width: "60px",
  height: "60px",
  padding: "12px",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "greyGold.600",
  },
});
