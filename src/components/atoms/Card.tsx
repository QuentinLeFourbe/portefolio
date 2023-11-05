import React, { ComponentProps } from "react";
import { css, cx } from "../../../styled-system/css";
import ExpandedCard from "../organisms/ExpandedCard";
import { Project } from "../../types/project";

type CardProps = ComponentProps<typeof ExpandedCard> & {
  project: Project;
  isOpen?: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function Card({ project, isOpen, onOpen, onClose }: CardProps) {
  const { title, src } = project;
  return (
    <div
      className={cx("card", mainCard, isOpen ? openedCard : closedCard)}
      onClick={() => !isOpen && onOpen()}
      role={isOpen ? "" : "button"}
      tabIndex={isOpen ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onOpen();
        }
      }}
    >
      {isOpen && <ExpandedCard project={project} onClose={onClose} />}
      {!isOpen && <div className={cx(borderCard, "borderCard")} />}
      {!isOpen && src && <img src={src} alt={""} className={logoSize} />}
      {!isOpen && (
        <div className={cx(overCard, "overCard")}>
          <h2 className={titleStyle}>{title}</h2>
        </div>
      )}
    </div>
  );
}

export default Card;

const openedCard = css({
  height: "80vh",
  width: "100%",
  color: "greyGold.700",
  padding: "2rem",
  position: "relative",
});

const closedCard = css({
  height: "200px",
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
  opacity: "0.5",
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
