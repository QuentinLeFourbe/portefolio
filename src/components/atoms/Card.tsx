import React, { ComponentProps } from "react";
import { css, cx } from "../../../styled-system/css";

type CardProps = ComponentProps<"div"> & {
  title: string;
  children?: React.ReactNode;
  src?: string;
};

function Card({ title, children, src, ...props }: CardProps) {
  return (
    <div {...props} className={cx(mainCard, mainCardSize)}>
      <div className={cx(borderCard, mainCardSize, "borderCard")} />
      {/* <div className={bodyStyle}>{children}</div> */}
      {src && <img src={src} alt={""} className={logoSize} />}
      <div className={cx(overCard, "overCard")}>
        <h2 className={titleStyle}>{title}</h2>
      </div>
    </div>
  );
}

export default Card;

const logoSize = css({
  height: "100px",
  width: "100px",
  objectFit: "contain",
  marginTop: "20%",
  opacity: "0.5",
  transition: "all 0.2s ease-in-out",
});

const overCard = css({
  width: "250px",
  height: "100px",
  position: "absolute",
  bottom: "-25px",
  left: "25px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "card.background.secondary",
  transition: "all 0.2s ease-in-out",
});

const mainCard = css({
  backgroundColor: "card.background.primary",
  padding: "1rem",

  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    transform: "translateY(-20px) scale(1.1)",

    "& .borderCard": {
      top: "0",
      left: "0",
    },

    "& .overCard": {
      bottom: "-5px",
      left: "5px",
    },
    "& img": {
      opacity: "1",
    },
  },
});

const mainCardSize = css({
  height: "300px",
  width: "250px",
});

const borderCard = css({
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "card.border",
  position: "absolute",
  top: "-16px",
  left: "16px",
  height: "100%",
  width: "100%",
  zIndex: -1,
  transition: "all 0.2s ease-in-out",
});

const titleStyle = css({
  fontSize: "2rem",
  fontWeight: "400",
  color: "card.text",
});

const bodyStyle = css({
  fontSize: "0.9rem",
  textAlign: "justify",
  lineHeight: "1.5rem",
  color: "text.primary",
});
