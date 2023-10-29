import React from "react";
import { css } from "../../../styled-system/css/css";
import { cx } from "../../../styled-system/css";

type CVTemplateProps = {
  children?: React.ReactNode;
};

function CVTemplate({ children }: CVTemplateProps) {
  return <div className={cx(template, textStyles)}>{children}</div>;
}

export default CVTemplate;

const template = css({
  height: "1056px",
  width: "816px",
  backgroundColor: "white",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gridTemplateRows: "1fr 4fr",
  gridTemplateAreas: `" header header header"
  "side main main"`,
});

const textStyles = css({
  color: "textPrimary",

  "& h1": {
    fontSize: "2.5rem",
    textTransform: "uppercase",
  },

  "& h2": {
    fontSize: "1.5rem",
    textTransform: "uppercase",
  },

  "& h3": {
    fontSize: "1rem",
    textTransform: "uppercase",
    color: "textInverse",
  },

  "& h4": {
    fontSize: "0.9rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    lineHeight: "12px",
  },

  "& h5": {
    fontSize: "0.8rem",
    textTransform: "uppercase",
    color: "textSecondary",
  },

  "& p": {
    fontSize: "0.75rem",
    textAlign: "justify",
  },
  "& ul": {
    fontSize: "0.75rem",
  },
});
