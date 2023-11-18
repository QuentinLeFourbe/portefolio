import { forwardRef } from "react";
import { css, cx } from "../../../styled-system/css";

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
        className={cx("card", mainCard, closedCard)}
        onClick={() => onClick()}
        role={"button"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick();
          }
        }}
      >
        <div className={cx(borderCard, "borderCard")} />
        {logoSrc && <img src={logoSrc} alt={""} className={logoSize} />}

        <div className={cx(overCard, "overCard")}>
          <h2 className={titleStyle}>{children}</h2>
        </div>
      </div>
    );
  }
);

export default Card;

const closedCard = css({
  height: "250px",
  width: "250px",
  cursor: "pointer",
  position: "relative",

  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "center",

  "&:hover": {
    opacity: "1",
    "& .borderCard": {
      top: "-32px",
      left: "32px",
    },

    "& .overCard": {
      transform: "scale(1.1)",
      bottom: "-40px",
      left: "40px",
    },
    "& img": {
      opacity: "1",
    },
  },
});

const mainCard = css({
  backgroundColor: "card.background.primary",

  transition: "all 0.2s ease-in-out",
});

const logoSize = css({
  height: "100px",
  width: "100px",
  objectFit: "contain",
  marginTop: "5%",
  transition: "all 0.2s ease-in-out",
});

const overCard = css({
  width: "250px",
  height: "100px",
  position: "absolute",
  bottom: "-25px",
  left: "25px",
  padding: "1rem",

  display: "flex",
  alignItems: "center",
  backgroundColor: "card.background.secondary",
  transition: "all 0.2s ease-in-out",
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
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "card.text",
});
