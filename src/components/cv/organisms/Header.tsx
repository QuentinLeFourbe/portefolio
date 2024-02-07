import React from "react";
import { css } from "../../../../styled-system/css";
import qrCode from "../../../assets/qr/qr-code-blue.svg";

type HeaderProps = {
  children?: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <div className={header}>
      <div className={titleContainer}>
        <div className={textContainer}>{children}</div>
        <img src={qrCode} className={qrCodeStyle} alt="QR Code" />
      </div>
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
  gridTemplateRows: "1fr ",
  margin: "0 0 1rem 0",
});

const qrCodeStyle = css({
  margin: "1rem",
  width: "150px",
  height: "150px",
});

const titleContainer = css({
  gridColumn: "2 / 3",
  display: "flex",
});

const textContainer = css({
  margin: "1rem 1rem 1rem 1rem",
  borderBottom: "3px solid",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
