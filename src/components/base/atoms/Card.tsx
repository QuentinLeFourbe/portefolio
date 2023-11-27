import { forwardRef } from "react";
import { css, cx } from "../../../../styled-system/css";

type CardProps = {
  logoSrc?: string;
  children?: string;
  onClick: () => void;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ logoSrc, children, onClick }: CardProps, ref) => {
    return (
      <div
        ref={ref}
        className={cx("card", cardContainer)}
        onClick={() => onClick()}
        role={"button"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick();
          }
        }}
      >
        <div className={cx(borderCard, "upperBorder")} />
        <div className={cx(secondBorderCard, "lowerBorder")} />
        {logoSrc && <img src={logoSrc} alt={""} className={logoSize} />}

        <div className={cx(titleCard, "overCard")}>
          <h2>{children}</h2>
        </div>
      </div>
    );
  }
);

export default Card;

const cardContainer = css({
  height: { base: "200px", lg: "250px" },
  width: { base: "200px", lg: "250px" },
  cursor: "pointer",
  position: "relative",

  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "card.border.secondary",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    opacity: "1",
    borderColor: "card.border.hover",
    transform: "translateY(-5px)",

    "& .upperBorder": {
      top: "-20px",
      right: "-20px",
      height: "100%",
      width: "100%",
    },

    "& .lowerBorder": {
      bottom: "-20px",
      left: "-20px",
      width: "100%",
    },

    "& img": {
      opacity: "1",
    },

    "& .overCard": {
      backgroundColor: "card.background.hover",
      color: "card.text.hover",
    },
  },
  "&:after": {
    content: "''",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

    position: "absolute",
    backgroundColor: "card.background.primary",
    zIndex: -1,
    opacity: 0.9,
  },
});

const logoSize = css({
  height: "100px",
  width: "100px",
  objectFit: "contain",
  marginTop: "5%",
  transition: "all 0.2s ease-in-out",
});

const titleCard = css({
  width: "250px",
  height: "100px",
  position: "absolute",
  bottom: "0",
  padding: "1rem",

  display: "flex",
  alignItems: "center",
  backgroundColor: "card.background.secondary",
  transition: "all 0.2s ease-in-out",
  color: "card.text.primary",

  "& h2": {
    fontSize: "1.5rem",
    fontWeight: "400",
  },
});

const borderCard = css({
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "card.border.primary",
  position: "absolute",
  top: "-16px",
  right: "-16px",
  height: "50%",
  width: "50%",
  zIndex: -1,
  transition: "all 0.2s ease-in-out",
});

const secondBorderCard = css({
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "card.border.primary",
  position: "absolute",
  bottom: "-16px",
  left: "-16px",
  height: "50%",
  width: "50%",
  zIndex: -1,
  transition: "all 0.2s ease-in-out",
});
