import type { ComponentProps } from "react";
import { css, cx } from "../../../../styled-system/css";
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
  fontSize: { base: "2.2rem", lg: "3rem" },
  cursor: "pointer",
  fontFamily: "title",
  transition: "all 0.2s ease-in-out",
};

const primaryStyle = css(buttonPrimarySize, {
  backgroundColor: "buttons.primary.background.base",
  color: "buttons.primary.text.base",
  fontWeight: "bold",
  padding: { base: "1rem 2rem", lg: "1rem 4rem" },
  "&:hover": {
    backgroundColor: "buttons.primary.background.hover",
    color: "buttons.primary.text.hover",
  },
});

const secondaryStyle = css(buttonPrimarySize, {
  backgroundColor: "buttons.secondary.background.base",
  color: "buttons.secondary.text.base",
  fontWeight: "bold",
  padding: "16px 16px",
  "&:hover": {
    backgroundColor: "buttons.secondary.background.hover",
    color: "buttons.secondary.text.hover",
  },
});

const roundedStyle = css({
  backgroundColor: "buttons.tertiary.background.base",
  color: "buttons.tertiary.text.base",
  borderColor: "buttons.tertiary.border.base",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "full",
  width: "60px",
  height: "60px",
  padding: "12px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "buttons.tertiary.background.hover",
    borderColor: "buttons.tertiary.border.hover",
    color: "buttons.tertiary.text.hover",
    transform: "scale(1.2)",
  },
});
