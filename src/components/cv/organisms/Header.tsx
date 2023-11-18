import React from "react";
import { css } from "../../../../styled-system/css";

type HeaderProps = {
  children?: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <div className={header}>
      <div className={textContainer}>{children}</div>
    </div>
  );
}

export default Header;

const header = css({
  gridArea: "header",
  background: "cv.header.background",
  color: "cv.header.text",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gridTemplateRows: "1fr 0.3fr",
  margin: "0 0 1rem 0",
});

const textContainer = css({
  gridColumn: "2 / 3",
  margin: "1rem 2rem 1rem 1rem",
  borderBottom: "3px solid",
});
